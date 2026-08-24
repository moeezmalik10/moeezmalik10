export interface SocialLink {
  name: string;
  url: string;
  colorHex: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Achievement {
  title: string;
  value: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  points: string[];
  stack: { name: string; colorHex?: string }[];
}

export interface CompetitiveProfile {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  whatsapp: string; // E.164, no leading "+", ready for wa.me
  githubUsername: string;
  mediumUsername: string;
  linkedinUrl: string;
  tagline: string;
  bio: string[];
  socials: SocialLink[];
  skills: SkillGroup[];
  competitiveProfiles: CompetitiveProfile[];
  education: EducationItem[];
  achievements: Achievement[];
  projects: Project[];
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

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail: string | null;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}
