import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

/**
 * Test suite for public chat procedure
 * Public chat should work without authentication
 */
describe("public chat procedure", { timeout: 30000 }, () => {
  it("should allow public chat without authentication", async () => {
    // Create a context without user (public)
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    // Test public chat
    const result = await caller.publicChat.chat({
      message: "What is I Ching?",
      context: "User is asking about I Ching",
      enableWebSearch: false, // Disable web search for testing
    });

    expect(result).toBeDefined();
    expect(result.userMessage).toBe("What is I Ching?");
    expect(result.aiResponse).toBeDefined();
    expect(typeof result.aiResponse).toBe("string");
    expect(result.aiResponse.length).toBeGreaterThan(0);
    expect(result.timestamp).toBeInstanceOf(Date);
  });

  it("should handle conversation history in public chat", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const conversationHistory = [
      { role: "user" as const, content: "Tell me about hexagrams" },
      { role: "assistant" as const, content: "Hexagrams are 6-line figures used in I Ching divination." },
    ];

    const result = await caller.publicChat.chat({
      message: "How many hexagrams are there?",
      conversationHistory,
      enableWebSearch: false,
    });

    expect(result).toBeDefined();
    expect(result.aiResponse).toBeDefined();
    expect(result.aiResponse.length).toBeGreaterThan(0);
  });

  it("should return proper response structure", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const result = await caller.publicChat.chat({
      message: "Explain the concept of Yin and Yang",
      enableWebSearch: false,
    });

    expect(result).toHaveProperty("userMessage");
    expect(result).toHaveProperty("aiResponse");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("searchResults");
    expect(result).toHaveProperty("sources");

    expect(typeof result.userMessage).toBe("string");
    expect(typeof result.aiResponse).toBe("string");
    expect(result.timestamp instanceof Date).toBe(true);
  });

  it("should handle empty message gracefully", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    try {
      // This should fail validation
      await caller.publicChat.chat({
        message: "",
        enableWebSearch: false,
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle context parameter", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const result = await caller.publicChat.chat({
      message: "How should I interpret this situation?",
      context: "I am facing a difficult decision at work",
      enableWebSearch: false,
    });

    expect(result.aiResponse).toBeDefined();
    expect(result.aiResponse.length).toBeGreaterThan(0);
  });
});
