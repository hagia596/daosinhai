import { eq, sql, like, or } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, hexagrams, conversations, userHistory } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function createUser(email: string, passwordHash: string, name?: string): Promise<void> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    await db.insert(users).values({
      email,
      passwordHash,
      name: name || null,
      loginMethod: "email",
      role: "user",
      lastSignedIn: new Date(),
    });
  } catch (error) {
    console.error("[Database] Failed to create user:", error);
    throw error;
  }
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.email) {
    throw new Error("User email is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      email: user.email,
      passwordHash: user.passwordHash || "",
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getAllHexagrams() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get hexagrams: database not available");
    return [];
  }

  try {
    // Get total count
    const countResult = await db.select({ count: sql<number>`count(*)` }).from(hexagrams);
    const totalCount = countResult[0]?.count || 0;
    console.log(`[Database] Total hexagrams in database: ${totalCount}`);
    
    const result = await db.select().from(hexagrams).orderBy(hexagrams.number);
    console.log(`[Database] getAllHexagrams returned ${result.length} hexagrams`);
    if (result.length > 0) {
      console.log(`[Database] First hexagram: ${result[0].number}, Last hexagram: ${result[result.length-1].number}`);
    }
    return result;
  } catch (error) {
    console.error("[Database] Error in getAllHexagrams:", error);
    return [];
  }
}

export async function getHexagramById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get hexagram: database not available");
    return undefined;
  }

  const result = await db.select().from(hexagrams).where(eq(hexagrams.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getHexagramByNumber(number: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get hexagram: database not available");
    return undefined;
  }

  const result = await db.select().from(hexagrams).where(eq(hexagrams.number, number)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function seedHexagrams(hexagramsData: any[]) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot seed hexagrams: database not available");
    return;
  }

  try {
    console.log(`[Database] Starting to seed ${hexagramsData.length} hexagrams...`);
    let count = 0;
    let errorCount = 0;
    for (const hexagram of hexagramsData) {
      try {
        await db.insert(hexagrams).values(hexagram).onDuplicateKeyUpdate({
          set: hexagram,
        });
        count++;
        if (count % 10 === 0) {
          console.log(`[Database] Seeded ${count}/${hexagramsData.length} hexagrams...`);
        }
      } catch (itemError) {
        errorCount++;
        console.error(`[Database] Error seeding hexagram ${hexagram.number}:`, itemError);
      }
    }
    console.log(`[Database] Hexagrams seeded - success: ${count}, errors: ${errorCount}`);
  } catch (error) {
    console.error("[Database] Failed to seed hexagrams:", error);
  }
}

export async function getConversationsByUserId(userId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get conversations: database not available");
    return [];
  }

  return await db.select().from(conversations).where(eq(conversations.userId, userId));
}

export async function createConversation(userId: number, title?: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(conversations).values({
    userId,
    title: title || "New Conversation",
    messages: [],
    isArchived: false,
    isVisible: true,
  });

  return result;
}

export async function getUserHistoryByUserId(userId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user history: database not available");
    return [];
  }

  return await db.select().from(userHistory).where(eq(userHistory.userId, userId));
}

export async function recordUserHistory(userId: number, hexagramId?: number, question?: string, answer?: string, castMethod?: string, metadata?: any) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.insert(userHistory).values({
    userId,
    hexagramId: hexagramId || null,
    question: question || null,
    answer: answer || null,
    castMethod: castMethod || null,
    metadata: metadata || null,
  });
}

export async function addConversationMessage(conversationId: number, role: "user" | "assistant", content: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    // Get current conversation
    const conv = await db.select().from(conversations).where(eq(conversations.id, conversationId)).limit(1);
    if (conv.length === 0) {
      throw new Error("Conversation not found");
    }

    const currentMessages = (conv[0].messages as any[]) || [];
    const newMessages = [
      ...currentMessages,
      {
        role,
        content,
        timestamp: new Date().toISOString(),
      }
    ];

    // Update conversation with new messages
    await db.update(conversations)
      .set({ messages: newMessages })
      .where(eq(conversations.id, conversationId));

    return newMessages;
  } catch (error) {
    console.error("[Database] Failed to add conversation message:", error);
    throw error;
  }
}

export async function getConversationMessages(conversationId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get conversation messages: database not available");
    return [];
  }

  try {
    const conv = await db.select().from(conversations).where(eq(conversations.id, conversationId)).limit(1);
    if (conv.length === 0) {
      return [];
    }

    return (conv[0].messages as any[]) || [];
  } catch (error) {
    console.error("[Database] Failed to get conversation messages:", error);
    return [];
  }
}

export async function getAllConversations() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get conversations: database not available");
    return [];
  }

  try {
    return await db.select().from(conversations).orderBy(conversations.createdAt);
  } catch (error) {
    console.error("[Database] Failed to get all conversations:", error);
    return [];
  }
}

export async function getConversationById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get conversation: database not available");
    return undefined;
  }

  try {
    const result = await db.select().from(conversations).where(eq(conversations.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get conversation:", error);
    return undefined;
  }
}

export async function getAllUserHistory() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user history: database not available");
    return [];
  }

  try {
    return await db.select().from(userHistory).orderBy(userHistory.createdAt);
  } catch (error) {
    console.error("[Database] Failed to get all user history:", error);
    return [];
  }
}



