import { getGithubRepos } from "@/lib/integrations/github";
import { getMediumPosts } from "@/lib/integrations/medium";
import { formatDate } from "@/lib/utils";

/**
 * Server Component — calls the integration libs directly (same cached
 * `fetch` used by /api/github and /api/medium) so this section renders with
 * live data on the server, no client-side waterfall. The API routes remain
 * useful for any client that wants the same data independently (e.g. a
 * future mobile app).
 */
export async function LiveFeed() {
  const [repos, posts] = await Promise.allSettled([getGithubRepos(), getMediumPosts()]);

  const githubRepos = repos.status === "fulfilled" ? repos.value.slice(0, 4) : [];
  const mediumPosts = posts.status === "fulfilled" ? posts.value.slice(0, 3) : [];

  return (
    <section className="relative py-24 px-6 md:px-10 bg-surface/40 border-y border-line">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="font-mono text-xs tracking-wide text-cyan mb-3">LIVE · GITHUB</p>
          <h3 className="font-display text-2xl font-semibold mb-6">Latest activity</h3>
          {githubRepos.length === 0 ? (
            <p className="text-muted text-sm">
              Couldn&apos;t reach the GitHub API right now — set <code>GITHUB_USERNAME</code> in your env and try
              again.
            </p>
          ) : (
            <ul className="space-y-4">
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

        <div>
          <p className="font-mono text-xs tracking-wide text-cyan mb-3">LIVE · WRITING</p>
          <h3 className="font-display text-2xl font-semibold mb-6">Latest from Medium</h3>
          {mediumPosts.length === 0 ? (
            <p className="text-muted text-sm">
              No Medium posts yet — set <code>MEDIUM_USERNAME</code> in your env once you start publishing.
            </p>
          ) : (
            <ul className="space-y-4">
              {mediumPosts.map((post) => (
                <li key={post.link} className="rounded-2xl border border-line bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-violet transition-colors"
                    >
                      {post.title}
                    </a>
                    <span className="font-mono text-xs text-muted shrink-0">{formatDate(post.pubDate)}</span>
                  </div>
                  <p className="text-sm text-muted mt-1 line-clamp-2">{post.contentSnippet}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
