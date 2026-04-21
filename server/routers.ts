import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure, adminProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { invokeLLM } from "./_core/llm";
import { HEXAGRAMS_DATA } from "./hexagrams-data";
import { searchWeb, extractSearchContext, type SearchResult } from "./_core/webSearch";


// Helper function to generate AI response (shared logic)
async function generateAIResponse(input: {
  message: string;
  context?: string;
  conversationHistory?: Array<{ role: "user" | "assistant"; content: string }>;
  enableWebSearch?: boolean;
  userId?: number;
}) {
  let searchResults: SearchResult[] = [];
  let searchContext = "";

  // Perform web search if enabled and message seems to need it
  if (input.enableWebSearch !== false && shouldPerformSearch(input.message)) {
    try {
      const searchResponse = await searchWeb(input.message, {
        language: "en",
        region: "US",
        limit: 5,
      });
      searchResults = searchResponse.results;
      searchContext = extractSearchContext(searchResults);
      console.log(`[Web Search] Found ${searchResults.length} results for: "${input.message}"`);
    } catch (error) {
      console.error("[Web Search] Error during search:", error);
      // Continue without search results if search fails
    }
  }

  // Build system prompt with I Ching context and web search capability
  const systemPrompt = `You are a wise I Ching divination guide. You provide insightful, compassionate guidance based on I Ching wisdom and the user's questions.
  ${input.context ? `Context: ${input.context}` : ''}
  ${searchContext ? `\n\n${searchContext}` : ''}
  
  When answering questions, combine:
  1. Traditional I Ching wisdom and philosophy
  2. Modern interpretations and applications
  3. Related knowledge from the user's previous conversations
  4. Real-time information when relevant (from web search)
  
  Provide thoughtful, spiritual guidance that helps the user understand their situation from the perspective of I Ching philosophy. Be compassionate and insightful.
  
  When you use information from web search results or previous conversations, mention the source naturally in your response.`;

  // Build message history
  const messages: any[] = [
    { role: "system", content: systemPrompt },
  ];

  // Add conversation history if available
  if (input.conversationHistory && input.conversationHistory.length > 0) {
    messages.push(...input.conversationHistory.slice(-10)); // Keep last 10 messages for context
  }

  // Add current user message
  messages.push({ role: "user", content: input.message });

  // Call LLM for response with web search capability
  const response = await invokeLLM({
    messages: messages,
  });

  const aiResponse = typeof response.choices[0]?.message?.content === 'string' 
    ? response.choices[0].message.content 
    : "Unable to generate response";

  return {
    aiResponse,
    searchResults,
  };
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  hexagrams: router({
    list: publicProcedure.query(async () => {
      console.log(`[Routers] hexagrams.list called - HEXAGRAMS_DATA length: ${HEXAGRAMS_DATA.length}`);
      const hexagrams = await db.getAllHexagrams();
      console.log(`[Routers] getAllHexagrams returned: ${hexagrams.length} hexagrams`);
      if (hexagrams.length < HEXAGRAMS_DATA.length) {
        console.log(`[Routers] Database incomplete (${hexagrams.length}/${HEXAGRAMS_DATA.length}), reseeding...`);
        await db.seedHexagrams(HEXAGRAMS_DATA);
        const reloaded = await db.getAllHexagrams();
        console.log(`[Routers] After seed, getAllHexagrams returned: ${reloaded.length} hexagrams`);
        return reloaded;
      }
      return hexagrams;
    }),

    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getHexagramById(input.id);
      }),

    getByNumber: publicProcedure
      .input(z.object({ number: z.number() }))
      .query(async ({ input }) => {
        return await db.getHexagramByNumber(input.number);
      }),

    random: publicProcedure.query(async () => {
      const hexagrams = await db.getAllHexagrams();
      if (hexagrams.length === 0) {
        await db.seedHexagrams(HEXAGRAMS_DATA);
        const allHexagrams = await db.getAllHexagrams();
        return allHexagrams[Math.floor(Math.random() * allHexagrams.length)];
      }
      return hexagrams[Math.floor(Math.random() * hexagrams.length)];
    }),
  }),

  // Public chat - không cần đăng nhập
  publicChat: router({
    chat: publicProcedure
      .input(z.object({
        message: z.string(),
        context: z.string().optional(),
        conversationHistory: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })).optional(),
        enableWebSearch: z.boolean().optional().default(true),
      }))
      .mutation(async ({ input }) => {
        const { aiResponse, searchResults } = await generateAIResponse(input);

        return {
          userMessage: input.message,
          aiResponse: aiResponse,
          timestamp: new Date(),
          searchResults: searchResults.length > 0 ? searchResults : undefined,
          sources: searchResults.length > 0 ? searchResults.map(r => ({ title: r.title, url: r.url })) : undefined,
        };
      }),
  }),

  conversations: router({
    getHistory: protectedProcedure.query(async ({ ctx }) => {
      if (!ctx.user) return [];
      return await db.getConversationsByUserId(ctx.user.id);
    }),

    create: protectedProcedure
      .input(z.object({ title: z.string().optional() }))
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) throw new Error("Not authenticated");
        return await db.createConversation(ctx.user.id, input.title);
      }),

    chat: protectedProcedure
      .input(z.object({
        conversationId: z.number().optional(),
        message: z.string(),
        context: z.string().optional(),
        conversationHistory: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })).optional(),
        enableWebSearch: z.boolean().optional().default(true),
      }))
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) throw new Error("Not authenticated");

        const { aiResponse, searchResults } = await generateAIResponse({
          ...input,
          userId: ctx.user.id,
        });



        // Save user message to conversation if conversationId provided
        if (input.conversationId) {
          try {
            await db.addConversationMessage(input.conversationId, "user", input.message);
            await db.addConversationMessage(input.conversationId, "assistant", aiResponse);
          } catch (error) {
            console.error("Failed to save conversation message:", error);
          }
        }

        // Record in user history
        try {
          await db.recordUserHistory(
            ctx.user.id,
            undefined,
            input.message,
            aiResponse,
            "chat",
            { conversationId: input.conversationId, searchResults: searchResults.length > 0 ? searchResults : undefined }
          );
        } catch (error) {
          console.error("Failed to record chat history:", error);
        }

        return {
          userMessage: input.message,
          aiResponse: aiResponse,
          timestamp: new Date(),
          searchResults: searchResults.length > 0 ? searchResults : undefined,
          sources: searchResults.length > 0 ? searchResults.map(r => ({ title: r.title, url: r.url })) : undefined,
        };
      }),

    // Admin-only procedure to view all conversations (mailbox)
    getAllConversations: adminProcedure.query(async () => {
      return await db.getAllConversations?.() || [];
    }),

    // Admin-only procedure to view specific conversation
    getConversationById: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getConversationById?.(input.id);
      }),
  }),

  userHistory: router({
    getHistory: protectedProcedure.query(async ({ ctx }) => {
      if (!ctx.user) return [];
      return await db.getUserHistoryByUserId(ctx.user.id);
    }),

    record: protectedProcedure
      .input(z.object({
        hexagramId: z.number().optional(),
        question: z.string().optional(),
        answer: z.string().optional(),
        castMethod: z.string().optional(),
        metadata: z.any().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) throw new Error("Not authenticated");
        return await db.recordUserHistory(
          ctx.user.id,
          input.hexagramId,
          input.question,
          input.answer,
          input.castMethod,
          input.metadata
        );
      }),

    // Admin-only procedure to view all user history
    getAllHistory: adminProcedure.query(async () => {
      return await db.getAllUserHistory?.() || [];
    }),
  }),


});

/**
 * Helper function to determine if web search should be performed
 * Returns true if the message seems to be asking for current information
 */
function shouldPerformSearch(message: string): boolean {
  const searchKeywords = [
    "what is", "who is", "when", "where", "how", "current", "latest", "today",
    "recent", "news", "information", "tell me", "explain", "find", "search",
    "about", "definition", "meaning", "interpretation", "modern", "contemporary"
  ];
  
  const lowerMessage = message.toLowerCase();
  return searchKeywords.some(keyword => lowerMessage.includes(keyword));
}

export type AppRouter = typeof appRouter;
