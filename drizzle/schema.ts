import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }).notNull().unique(),
  passwordHash: text("passwordHash").notNull(),
  loginMethod: varchar("loginMethod", { length: 64 }).default("email"),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Hexagrams table - stores all 64 I Ching hexagrams
 */
export const hexagrams = mysqlTable("hexagrams", {
  id: int("id").autoincrement().primaryKey(),
  number: int("number").notNull().unique(), // 1-64
  name: varchar("name", { length: 255 }).notNull(), // Tên quẻ
  nameEnglish: varchar("nameEnglish", { length: 255 }), // English name
  symbol: varchar("symbol", { length: 10 }).notNull(), // Unicode symbol
  description: text("description"), // Mô tả chi tiết
  meaning: text("meaning"), // Ý nghĩa
  interpretation: text("interpretation"), // Giải thích
  advice: text("advice"), // Lời khuyên
  lines: json("lines"), // Chi tiết 6 nét (JSON array)
  relatedHexagrams: json("relatedHexagrams"), // Quẻ liên quan (JSON array)
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Hexagram = typeof hexagrams.$inferSelect;
export type InsertHexagram = typeof hexagrams.$inferInsert;

/**
 * Conversations table - stores chat history between user and AI
 */
export const conversations = mysqlTable("conversations", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  title: varchar("title", { length: 255 }), // Tiêu đề hội thoại
  messages: json("messages"), // Array of {role, content, timestamp}
  isArchived: boolean("isArchived").default(false), // Lưu trữ hội thoại
  isVisible: boolean("isVisible").default(true), // Chỉ admin thấy được nếu false
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Conversation = typeof conversations.$inferSelect;
export type InsertConversation = typeof conversations.$inferInsert;

/**
 * User History table - stores hexagram casting history and divination records
 */
export const userHistory = mysqlTable("userHistory", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  hexagramId: int("hexagramId"),
  question: text("question"), // Câu hỏi người dùng
  answer: text("answer"), // Lời giải từ AI
  castMethod: varchar("castMethod", { length: 64 }), // Phương pháp gieo (random, wheel, etc)
  metadata: json("metadata"), // Thêm thông tin khác (JSON)
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UserHistoryRecord = typeof userHistory.$inferSelect;
export type InsertUserHistoryRecord = typeof userHistory.$inferInsert;

/**
 * Knowledge Base table - stores user messages for AI retrieval and search
 */
export const knowledgeBase = mysqlTable("knowledgeBase", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(), // User who sent the message
  message: text("message").notNull(), // The user's message
  messageHash: varchar("messageHash", { length: 64 }), // Hash to avoid duplicates
  keywords: text("keywords"), // Extracted keywords for search (comma-separated)
  source: varchar("source", { length: 64 }).default("chat"), // Source: chat, hexagram, etc
  metadata: json("metadata"), // Additional context (hexagram_id, conversation_id, etc)
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type KnowledgeBaseEntry = typeof knowledgeBase.$inferSelect;
export type InsertKnowledgeBaseEntry = typeof knowledgeBase.$inferInsert;


/**
 * User Profile table - stores personal information extracted from conversations
 */
export const userProfile = mysqlTable("userProfile", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(), // Reference to users table
  fullName: varchar("fullName", { length: 255 }), // Full name
  age: int("age"), // Age
  occupation: varchar("occupation", { length: 255 }), // Job/Occupation
  interests: text("interests"), // Hobbies/Interests (comma-separated or JSON)
  location: varchar("location", { length: 255 }), // City/Country
  phone: varchar("phone", { length: 20 }), // Phone number
  email: varchar("email", { length: 320 }), // Additional email
  bio: text("bio"), // Personal bio/description
  metadata: json("metadata"), // Additional custom fields
  lastUpdated: timestamp("lastUpdated").defaultNow().onUpdateNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserProfile = typeof userProfile.$inferSelect;
export type InsertUserProfile = typeof userProfile.$inferInsert;
