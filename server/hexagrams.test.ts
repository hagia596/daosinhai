import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("hexagrams procedures", () => {
  let caller: any;

  beforeAll(() => {
    const ctx = createPublicContext();
    caller = appRouter.createCaller(ctx);
  });

  it("should list hexagrams", async () => {
    const result = await caller.hexagrams.list();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    console.log(`[Test] Total hexagrams returned: ${result.length}`);
    if (result.length < 64) {
      console.log(`[Test] WARNING: Only ${result.length} hexagrams found, expected 64`);
      console.log(`[Test] First hexagram:`, result[0]);
      console.log(`[Test] Last hexagram:`, result[result.length - 1]);
    }
    expect(result.length).toBe(64);
  }, { timeout: 60000 });

  it("should get hexagram by id", async () => {
    const result = await caller.hexagrams.getById({ id: 1 });
    expect(result).toBeDefined();
    expect(result?.number).toBe(1);
    expect(result?.name).toBeDefined();
    console.log(`[Test] Hexagram 1: ${result?.name}`);
  });

  it("should get random hexagram", async () => {
    const result = await caller.hexagrams.random();
    expect(result).toBeDefined();
    expect(result?.number).toBeGreaterThan(0);
    expect(result?.number).toBeLessThanOrEqual(64);
    expect(result?.symbol).toBeDefined();
    console.log(`[Test] Random hexagram: ${result?.number} - ${result?.name}`);
  });

  it("hexagram should have required fields", async () => {
    const result = await caller.hexagrams.getById({ id: 1 });
    expect(result?.name).toBeDefined();
    expect(result?.nameEnglish).toBeDefined();
    expect(result?.description).toBeDefined();
    expect(result?.meaning).toBeDefined();
    expect(result?.interpretation).toBeDefined();
    expect(result?.advice).toBeDefined();
    expect(result?.symbol).toBeDefined();
    console.log(`[Test] Hexagram 1 fields OK`);
  });

  it("hexagram should have lines", async () => {
    const result = await caller.hexagrams.getById({ id: 1 });
    expect(Array.isArray(result?.lines)).toBe(true);
    expect(result?.lines?.length).toBe(6);
    console.log(`[Test] Hexagram 1 has ${result?.lines?.length} lines`);
  });
});
