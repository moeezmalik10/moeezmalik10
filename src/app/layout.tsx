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
  keywords: ["Muhammad Moeez", "Deep Learning", "Full Stack Developer", "React", "Next.js", "Machine Learning", "Portfolio"],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role.en}`,
    description: profile.tagline.en,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role.en}`,
    description: profile.tagline.en,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.role.en,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    sameAs: profile.socials.map((s) => s.url),
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
