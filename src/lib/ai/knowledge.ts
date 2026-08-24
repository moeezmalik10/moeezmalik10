import { profile } from "@/data/profile";

export interface KnowledgeChunk {
  id: string;
  text: string;
}

/**
 * Serializes `src/data/profile.ts` into short, self-contained text chunks —
 * the ONLY source of truth the chatbot is allowed to answer from.
 *
 * The retrieval corpus is built from the English (`en`) strings only, even
 * though the site itself is trilingual (English / Urdu / Roman Urdu). This
 * is deliberate: embeddings and keyword search both work fine against an
 * English corpus for Urdu/Roman Urdu queries, and the model is instructed
 * (see systemPrompt.ts) to translate its *reply* into whatever language the
 * visitor is writing in — so we don't need 3x the embeddings to seed and
 * keep in sync.
 *
 * Used by:
 *  - scripts/seed-embeddings.ts (embeds these into Supabase)
 *  - src/lib/ai/retrieval.ts (naive keyword fallback when Supabase isn't set up)
 */
export function getKnowledgeChunks(): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

  chunks.push({
    id: "about",
    text: `${profile.name} is a ${profile.role.en} based in ${profile.location}. ${profile.bio.en.join(" ")}`,
  });

  for (const group of profile.skills) {
    chunks.push({
      id: `skills-${slugify(group.title.en)}`,
      text: `${profile.name}'s skills in ${group.title.en}: ${group.points.en.join("; ")}. Tools: ${group.stack
        .map((s) => s.name)
        .join(", ")}.`,
    });
  }

  for (const project of profile.projects) {
    chunks.push({
      id: `project-${project.slug}`,
      text: `Project "${project.title}" (${project.category.en}): ${project.description.en} Built with ${project.tags.join(
        ", "
      )}. GitHub: ${project.githubUrl}.${project.liveUrl ? ` Live demo: ${project.liveUrl}.` : ""}`,
    });
  }

  for (const project of profile.upcomingProjects) {
    chunks.push({
      id: `upcoming-${project.slug}`,
      text: `Upcoming project "${project.title}" — status: ${project.status.en}${
        project.eta ? `, ETA ${project.eta}` : ""
      }. ${project.description.en} Technologies: ${project.tags.join(", ")}.`,
    });
  }

  for (const cert of profile.certificates) {
    chunks.push({
      id: `certificate-${cert.slug}`,
      text: `Certificate — ${cert.title}, issued by ${cert.issuer}${cert.date ? ` (${cert.date})` : ""}. Status: ${
        cert.status
      }.`,
    });
  }

  for (const comp of profile.competitions) {
    chunks.push({
      id: `competition-${comp.slug}`,
      text: `Competition — ${comp.name}${comp.organizer ? ` (organized by ${comp.organizer})` : ""}. Status: ${
        comp.status.en
      }${comp.date ? `, ${comp.date}` : ""}. ${comp.description.en}`,
    });
  }

  for (const edu of profile.education) {
    chunks.push({
      id: `education-${slugify(edu.institution)}`,
      text: `${profile.name} studied ${edu.degree.en} at ${edu.institution} (${edu.duration}). ${edu.description.en}`,
    });
  }

  for (const achievement of profile.achievements) {
    chunks.push({
      id: `achievement-${slugify(achievement.title.en)}`,
      text: `Achievement — ${achievement.title.en} (${achievement.value}): ${achievement.description.en}`,
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
