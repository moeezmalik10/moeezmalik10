import { profile } from "@/data/profile";

export interface KnowledgeChunk {
  id: string;
  text: string;
}

/**
 * Serializes `src/data/profile.ts` into short, self-contained text chunks —
 * the ONLY source of truth the chatbot is allowed to answer from. Each chunk
 * is small on purpose: better retrieval precision than one giant blob.
 *
 * Used by:
 *  - scripts/seed-embeddings.ts (embeds these into Supabase)
 *  - src/lib/ai/retrieval.ts (naive keyword fallback when Supabase isn't set up)
 */
export function getKnowledgeChunks(): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

  chunks.push({
    id: "about",
    text: `${profile.name} is a ${profile.role} based in ${profile.location}. ${profile.bio.join(" ")}`,
  });

  for (const group of profile.skills) {
    chunks.push({
      id: `skills-${slugify(group.title)}`,
      text: `${profile.name}'s skills in ${group.title}: ${group.points.join("; ")}. Tools: ${group.stack
        .map((s) => s.name)
        .join(", ")}.`,
    });
  }

  for (const project of profile.projects) {
    chunks.push({
      id: `project-${project.slug}`,
      text: `Project "${project.title}" (${project.category}): ${project.description} Built with ${project.tags.join(
        ", "
      )}. GitHub: ${project.githubUrl}.${project.liveUrl ? ` Live demo: ${project.liveUrl}.` : ""}`,
    });
  }

  for (const edu of profile.education) {
    chunks.push({
      id: `education-${slugify(edu.institution)}`,
      text: `${profile.name} studied ${edu.degree} at ${edu.institution} (${edu.duration}). ${edu.description}`,
    });
  }

  for (const achievement of profile.achievements) {
    chunks.push({
      id: `achievement-${slugify(achievement.title)}`,
      text: `Achievement — ${achievement.title} (${achievement.value}): ${achievement.description}`,
    });
  }

  chunks.push({
    id: "competitive-profiles",
    text: `${profile.name} is active on: ${profile.competitiveProfiles.map((c) => c.name).join(", ")}.`,
  });

  chunks.push({
    id: "contact",
    text: `To contact ${profile.name}: email ${profile.email}, WhatsApp at https://wa.me/${profile.whatsapp}, or LinkedIn at ${profile.linkedinUrl}. GitHub: https://github.com/${profile.githubUsername}.`,
  });

  return chunks;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
