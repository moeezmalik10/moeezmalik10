import { XMLParser } from "fast-xml-parser";
import type { MediumPost } from "@/types";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  "content:encoded"?: string;
  description?: string;
}

/**
 * Medium has no public JSON API for a user's posts, but every profile
 * exposes an RSS feed at /feed/@username. We fetch + parse that XML
 * ourselves (fast-xml-parser) instead of depending on a third-party
 * RSS-to-JSON proxy, so this has no external dependency besides Medium
 * itself. Cached for 1 hour, same as the GitHub route.
 */
export async function getMediumPosts(): Promise<MediumPost[]> {
  const username = process.env.MEDIUM_USERNAME;
  if (!username) return [];

  const res = await fetch(`https://medium.com/feed/@${username}`, {
    headers: { Accept: "application/rss+xml" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Medium feed responded with ${res.status}`);
  }

  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: "__cdata" });
  const parsed = parser.parse(xml);

  const items: RssItem[] = parsed?.rss?.channel?.item ?? [];
  const list = Array.isArray(items) ? items : [items];

  return list.map((item) => {
    const html = extractCdata(item["content:encoded"]) ?? extractCdata(item.description) ?? "";
    const thumbnailMatch = html.match(/<img[^>]+src="([^">]+)"/);
    const textSnippet = html
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180);

    return {
      title: extractCdata(item.title) ?? item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: textSnippet,
      thumbnail: thumbnailMatch?.[1] ?? null,
    };
  });
}

function extractCdata(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "__cdata" in value) {
    return String((value as { __cdata: string }).__cdata);
  }
  return undefined;
}
