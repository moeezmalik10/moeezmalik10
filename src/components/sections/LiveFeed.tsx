"use client";

import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { GithubRepo } from "@/types";

/**
 * Client Component — hits the cached Route Handler (/api/github) rather than
 * calling the integration lib directly, so this section can re-render
 * instantly on a locale switch without a server round-trip. The route itself
 * still owns the actual caching (`revalidate = 3600`) — see
 * src/app/api/github/route.ts.
 */
export function LiveFeed() {
  const { t } = useLocale();
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setRepos(data.repos ?? []))
      .catch(() => setRepos([]));
  }, []);

  const githubRepos = (repos ?? []).slice(0, 6);

  return (
    <section className="relative py-24 px-6 md:px-10 bg-surface/40 border-y border-line">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-wide text-cyan mb-3">{t.liveFeed.githubEyebrow}</p>
        <h3 className="font-display text-2xl font-semibold mb-6">{t.liveFeed.githubHeading}</h3>
        {repos !== null && githubRepos.length === 0 ? (
          <p className="text-muted text-sm">{t.liveFeed.githubEmpty}</p>
        ) : (
          <ul className="grid sm:grid-cols-2 gap-4">
            {githubRepos.map((repo) => (
              <li key={repo.id} className="rounded-2xl border border-line bg-white/5 p-4">
                <div className="flex items-center justify-between gap-4">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-violet transition-colors"
                  >
                    {repo.name}
                  </a>
                  <span className="font-mono text-xs text-muted shrink-0">{formatDate(repo.pushedAt)}</span>
                </div>
                {repo.description && <p className="text-sm text-muted mt-1 line-clamp-2">{repo.description}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
