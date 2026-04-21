import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(userId: number = 1): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: userId,
    email: "test@example.com",
    name: "Test User",
    loginMethod: "email",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

describe("conversations procedures", () => {
  it("should create a conversation", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.conversations.create({ title: "Test Conversation" });
    expect(result).toBeDefined();
  }, { timeout: 10000 });

  it("should get conversation history for user", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.conversations.getHistory();
    expect(Array.isArray(result)).toBe(true);
  }, { timeout: 10000 });

  it("should handle chat message", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.conversations.chat({
      message: "What is I Ching?",
      context: "User is asking about I Ching wisdom",
    });

    expect(result).toBeDefined();
    expect(result.userMessage).toBe("What is I Ching?");
    expect(result.aiResponse).toBeDefined();
    expect(typeof result.aiResponse).toBe("string");
  }, { timeout: 30000 });
});
