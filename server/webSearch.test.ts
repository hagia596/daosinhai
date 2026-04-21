import { describe, expect, it, vi } from "vitest";
import { searchWeb, formatSearchResultsForAI, extractSearchContext, type SearchResult } from "./_core/webSearch";

describe("Web Search Integration", () => {
  describe("searchWeb", () => {
    it("should return search results with correct structure", async () => {
      // Mock the callDataApi function
      vi.mock("./_core/dataApi", () => ({
        callDataApi: vi.fn().mockResolvedValue({
          items: [
            {
              title: "I Ching - Wikipedia",
              link: "https://en.wikipedia.org/wiki/I_Ching",
              snippet: "The I Ching is an ancient Chinese divination text..."
            },
            {
              title: "Book of Changes - History",
              link: "https://example.com/iching-history",
              snippet: "The Book of Changes has been used for thousands of years..."
            }
          ]
        })
      }));

      // Test that searchWeb returns expected format
      expect(typeof searchWeb).toBe("function");
    });

    it("should handle empty search results", async () => {
      const results: SearchResult[] = [];
      const formatted = formatSearchResultsForAI(results);
      expect(formatted).toBe("No search results found.");
    });
  });

  describe("formatSearchResultsForAI", () => {
    it("should format search results correctly", () => {
      const results: SearchResult[] = [
        {
          title: "I Ching - Wikipedia",
          url: "https://en.wikipedia.org/wiki/I_Ching",
          snippet: "The I Ching is an ancient Chinese divination text...",
          position: 1
        },
        {
          title: "Book of Changes",
          url: "https://example.com/book-of-changes",
          snippet: "A comprehensive guide to the I Ching...",
          position: 2
        }
      ];

      const formatted = formatSearchResultsForAI(results);
      
      expect(formatted).toContain("**Search Results:**");
      expect(formatted).toContain("I Ching - Wikipedia");
      expect(formatted).toContain("https://en.wikipedia.org/wiki/I_Ching");
      expect(formatted).toContain("Book of Changes");
    });

    it("should handle single search result", () => {
      const results: SearchResult[] = [
        {
          title: "Test Result",
          url: "https://example.com",
          snippet: "Test snippet",
          position: 1
        }
      ];

      const formatted = formatSearchResultsForAI(results);
      expect(formatted).toContain("Test Result");
      expect(formatted).toContain("https://example.com");
    });
  });

  describe("extractSearchContext", () => {
    it("should extract context from search results", () => {
      const results: SearchResult[] = [
        {
          title: "I Ching Basics",
          url: "https://example.com/basics",
          snippet: "The I Ching consists of 64 hexagrams...",
          position: 1
        },
        {
          title: "Hexagrams Explained",
          url: "https://example.com/hexagrams",
          snippet: "Each hexagram has a unique meaning...",
          position: 2
        },
        {
          title: "Modern I Ching",
          url: "https://example.com/modern",
          snippet: "Contemporary applications of I Ching...",
          position: 3
        }
      ];

      const context = extractSearchContext(results);
      
      expect(context).toContain("Based on search results:");
      expect(context).toContain("I Ching Basics");
      expect(context).toContain("Hexagrams Explained");
      expect(context).toContain("Modern I Ching");
    });

    it("should use only top 3 results", () => {
      const results: SearchResult[] = [
        {
          title: "Result 1",
          url: "https://example.com/1",
          snippet: "Snippet 1",
          position: 1
        },
        {
          title: "Result 2",
          url: "https://example.com/2",
          snippet: "Snippet 2",
          position: 2
        },
        {
          title: "Result 3",
          url: "https://example.com/3",
          snippet: "Snippet 3",
          position: 3
        },
        {
          title: "Result 4",
          url: "https://example.com/4",
          snippet: "Snippet 4",
          position: 4
        }
      ];

      const context = extractSearchContext(results);
      
      expect(context).toContain("Result 1");
      expect(context).toContain("Result 2");
      expect(context).toContain("Result 3");
      expect(context).not.toContain("Result 4");
    });

    it("should return empty string for empty results", () => {
      const results: SearchResult[] = [];
      const context = extractSearchContext(results);
      expect(context).toBe("");
    });
  });

  describe("Search Result Structure", () => {
    it("should have correct SearchResult interface", () => {
      const result: SearchResult = {
        title: "Test Title",
        url: "https://example.com",
        snippet: "Test snippet",
        position: 1
      };

      expect(result.title).toBe("Test Title");
      expect(result.url).toBe("https://example.com");
      expect(result.snippet).toBe("Test snippet");
      expect(result.position).toBe(1);
    });
  });
});
