/**
 * Web Search Integration using Manus built-in Data API
 * Supports Google Search, Bing Search, and other search providers
 */

import { callDataApi } from "./dataApi";

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  position?: number;
}

export interface SearchResponse {
  results: SearchResult[];
  query: string;
  totalResults?: number;
  searchTime?: number;
}

/**
 * Perform a web search using Google Search API
 * @param query - Search query string
 * @param options - Search options (language, region, etc.)
 */
export async function searchWeb(
  query: string,
  options: {
    language?: string;
    region?: string;
    limit?: number;
  } = {}
): Promise<SearchResponse> {
  try {
    const limit = options.limit || 5;
    
    // Call Manus built-in Google Search API
    const result = await callDataApi("Google/search", {
      query: {
        q: query,
        gl: options.region || "US",
        hl: options.language || "en",
        num: String(limit),
      },
    });

    // Parse Google Search results
    const searchResults = parseGoogleSearchResults(result);
    
    return {
      results: searchResults,
      query,
      totalResults: searchResults.length,
      searchTime: Date.now(),
    };
  } catch (error) {
    console.error("[Web Search] Error searching:", error);
    throw new Error(`Web search failed: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}

/**
 * Parse Google Search API response
 */
function parseGoogleSearchResults(data: unknown): SearchResult[] {
  if (!data || typeof data !== "object") {
    return [];
  }

  const results: SearchResult[] = [];
  const searchData = data as Record<string, unknown>;

  // Handle different response formats from Google Search API
  // Try to get items from the response
  let items: unknown[] = [];
  
  if (Array.isArray(searchData.items)) {
    items = searchData.items;
  } else if (Array.isArray(searchData.results)) {
    items = searchData.results;
  } else if (Array.isArray(searchData.organic_results)) {
    items = searchData.organic_results;
  }

  items.forEach((item: unknown, index: number) => {
    if (typeof item === "object" && item !== null) {
      const itemData = item as Record<string, unknown>;
      const title = String(itemData.title || itemData.name || "");
      const url = String(itemData.link || itemData.url || itemData.href || "");
      const snippet = String(itemData.snippet || itemData.description || "");
      
      if (title && url) {
        results.push({
          title,
          url,
          snippet,
          position: index + 1,
        });
      }
    }
  });

  return results;
}

/**
 * Format search results for AI context
 */
export function formatSearchResultsForAI(results: SearchResult[]): string {
  if (results.length === 0) {
    return "No search results found.";
  }

  const formatted = results
    .map(
      (result, index) =>
        `${index + 1}. **${result.title}**\n   URL: ${result.url}\n   ${result.snippet}`
    )
    .join("\n\n");

  return `**Search Results:**\n\n${formatted}`;
}

/**
 * Extract relevant information from search results for AI response
 */
export function extractSearchContext(results: SearchResult[]): string {
  if (results.length === 0) {
    return "";
  }

  const context = results
    .slice(0, 3) // Use top 3 results
    .map((result) => `- ${result.title}: ${result.snippet}`)
    .join("\n");

  return `Based on search results:\n${context}`;
}
