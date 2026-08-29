import type { GithubRepo } from "@/types";

interface GithubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

/**
 * Fetches the user's public repos straight from the GitHub REST API.
 * Cached for 1 hour via Next.js's extended `fetch` (`next.revalidate`) so we
 * don't hammer the API on every request but still stay reasonably fresh.
 *
 * Set GITHUB_TOKEN in .env.local to raise the rate limit from 60/hr
 * (unauthenticated) to 5,000/hr — not required for this to work.
 */
export async function getGithubRepos(): Promise<GithubRepo[]> {
  const username = process.env.GITHUB_USERNAME || "moeezmalik10";
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const repos: GithubApiRepo[] = await res.json();

  return repos
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .map((r) => ({
      id: String(r.id),
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
    }));
}
