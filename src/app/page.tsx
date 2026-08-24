import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { UpcomingProjects } from "@/components/sections/UpcomingProjects";
import { LiveFeed } from "@/components/sections/LiveFeed";
import { Certificates } from "@/components/sections/Certificates";
import { Competitions } from "@/components/sections/Competitions";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <UpcomingProjects />
      <LiveFeed />
      <Certificates />
      <Competitions />
      <Education />
      <Achievements />
      <Contact />
    </main>
  );
}
