export type Locale = "en" | "ur" | "ru";

export type LocalizedText = Record<Locale, string>;
export type LocalizedTextList = Record<Locale, string[]>;

export interface SocialLink {
  name: string;
  url: string;
  colorHex: string;
}

export interface Project {
  slug: string;
  title: string; // proper noun / product name — not translated
  category: LocalizedText;
  description: LocalizedText;
  tags: string[]; // technology names — not translated
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface UpcomingProject {
  slug: string;
  title: string; // proper noun / product name — not translated
  status: LocalizedText; // e.g. "In Progress", "Planned"
  eta?: string; // optional plain string, e.g. "Q1 2027" — not translated
  description: LocalizedText;
  tags: string[]; // technology names — not translated
}

export interface Certificate {
  slug: string;
  title: string; // certificate/course name — not translated
  issuer: string; // proper noun — not translated
  status: "completed" | "in-progress";
  date?: string; // plain string, e.g. "2026" or "Jul 2026" — not translated
  credentialUrl?: string;
  imageUrl?: string;
}

export interface Competition {
  slug: string;
  name: string; // proper noun — not translated
  organizer?: string;
  status: LocalizedText; // e.g. "Applied", "In Progress", "Result Pending", "Won"
  date?: string;
  description: LocalizedText;
  url?: string;
}

export interface EducationItem {
  institution: string;
  degree: LocalizedText;
  duration: string;
  description: LocalizedText;
}

export interface Achievement {
  title: LocalizedText;
  value: string;
  description: LocalizedText;
}

export interface SkillGroup {
  title: LocalizedText;
  points: LocalizedTextList;
  stack: { name: string; colorHex?: string }[];
}

export interface CompetitiveProfile {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  role: LocalizedText;
  location: string;
  email: string;
  whatsapp: string; // E.164, no leading "+", ready for wa.me
  githubUsername: string;
  linkedinUrl: string;
  tagline: LocalizedText;
  bio: LocalizedTextList;
  socials: SocialLink[];
  skills: SkillGroup[];
  competitiveProfiles: CompetitiveProfile[];
  education: EducationItem[];
  achievements: Achievement[];
  projects: Project[];
  upcomingProjects: UpcomingProject[];
  certificates: Certificate[];
  competitions: Competition[];
}

export interface GithubRepo {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}
