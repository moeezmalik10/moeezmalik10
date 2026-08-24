"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

// Three.js touches the DOM/WebGL context, so it must never run during SSR.
const ParticleCanvas = dynamic(() => import("@/components/hero/ParticleCanvas").then((m) => m.ParticleCanvas), {
  ssr: false,
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      <ParticleCanvas />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-center"
      >
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-white/5 backdrop-blur text-xs font-mono tracking-wide text-cyan mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES · {profile.location.split(",")[0]?.toUpperCase()}
          </motion.div>

          <h1 className="font-display font-semibold text-[13vw] leading-[0.95] md:text-[5.2rem] md:leading-[0.95] tracking-tight">
            <motion.div variants={item} className="overflow-hidden">
              Muhammad
            </motion.div>
            <motion.div
              variants={item}
              className="overflow-hidden bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent"
            >
              Moeez
            </motion.div>
          </h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-br from-violet to-[#6f4dff] text-white px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:scale-[1.03] transition-transform"
            >
              View Projects
            </a>
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-sm font-semibold border border-line bg-white/5 hover:border-violet transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="justify-self-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-[2.5rem] rotate-6 bg-gradient-to-br from-violet/40 to-cyan/30 blur-sm" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-line bg-white/5">
              <Image
                src="https://avatars.githubusercontent.com/u/170174525?v=4"
                alt={profile.name}
                fill
                sizes="288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
