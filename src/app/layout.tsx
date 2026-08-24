import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import { profile } from "@/data/profile";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });
// Nastaliq rendering for Urdu script — swapped in via CSS on [data-locale="ur"], see globals.css.
const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-nastaliq",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moeezmalik.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role.en}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline.en,
  // The `keywords` meta tag itself carries ~zero ranking weight with Google
  // today (confirmed by Google since 2009) — this is here for the handful of
  // smaller engines that still read it, not as a real ranking lever. The
  // actual name/stack-matching signal comes from the structured data below
  // (`alternateName`, `knowsAbout`) and from the content itself.
  keywords: [
    "Muhammad Moeez",
    "Muhammad Moeez Malik",
    "Moeez Malik",
    "moeezmalik10",
    "Deep Learning Developer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "React Developer",
    "Next.js Developer",
    "Gujranwala Pakistan developer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role.en}`,
    description: profile.tagline.en,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role.en}`,
    description: profile.tagline.en,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // TODO once you set up Google Search Console (search.google.com/search-console):
  // add your verification code here, e.g. verification: { google: "abc123..." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured data is the real lever for "ranks even on a loose/misspelled
  // match" — `alternateName` explicitly tells Google every name variant to
  // associate with this page, and `knowsAbout` does the same for stack terms
  // (so a search like "Moeez Malik ResNet developer" has a legitimate signal
  // to match against, not just keyword-stuffed meta tags).
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: ["Moeez", "Moeez Malik", "Muhammad Moeez Malik", "moeezmalik10"],
    url: siteUrl,
    image: "https://avatars.githubusercontent.com/u/170174525?v=4",
    jobTitle: profile.role.en,
    description: profile.tagline.en,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    email: `mailto:${profile.email}`,
    alumniOf: profile.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    knowsAbout: [
      ...profile.skills.flatMap((group) => group.stack.map((s) => s.name)),
      ...profile.projects.flatMap((p) => p.tags),
    ].filter((v, i, arr) => arr.indexOf(v) === i),
    sameAs: profile.socials.map((s) => s.url),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} Portfolio`,
    url: siteUrl,
    inLanguage: ["en", "ur"],
    author: { "@type": "Person", name: profile.name },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${notoNastaliq.variable}`}
    >
      <body className="bg-bg text-white font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <LocaleProvider>
          <SmoothScroll>
            <Nav />
            {children}
            <Footer />
            <ChatWidget />
          </SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
