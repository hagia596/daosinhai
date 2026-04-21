import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import { TRPCError } from "@trpc/server";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(role: "user" | "admin" = "user", userId: number = 1): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: userId,
    email: `${role}@example.com`,
    name: `${role.toUpperCase()} User`,
    loginMethod: "email",
    role: role,
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

describe("admin procedures", () => {
  it("should allow admin to get all conversations", async () => {
    const { ctx } = createAuthContext("admin");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.conversations.getAllConversations();
    expect(Array.isArray(result)).toBe(true);
  }, { timeout: 10000 });

  it("should deny regular user from getting all conversations", async () => {
    const { ctx } = createAuthContext("user");
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.conversations.getAllConversations();
      expect.fail("Should have thrown FORBIDDEN error");
    } catch (error) {
      if (error instanceof TRPCError) {
        expect(error.code).toBe("FORBIDDEN");
      } else {
        throw error;
      }
    }
  }, { timeout: 10000 });

  it("should allow admin to get all user history", async () => {
    const { ctx } = createAuthContext("admin");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.userHistory.getAllHistory();
    expect(Array.isArray(result)).toBe(true);
  }, { timeout: 10000 });

  it("should deny regular user from getting all user history", async () => {
    const { ctx } = createAuthContext("user");
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.userHistory.getAllHistory();
      expect.fail("Should have thrown FORBIDDEN error");
    } catch (error) {
      if (error instanceof TRPCError) {
        expect(error.code).toBe("FORBIDDEN");
      } else {
        throw error;
      }
    }
  }, { timeout: 10000 });
});
