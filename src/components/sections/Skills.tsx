"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-10 bg-surface/40 border-y border-line">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">02 · SKILLS</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">What I work with</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-3xl border border-line bg-white/5 p-9"
            >
              <h3 className="font-display text-xl font-semibold mb-6">{group.title}</h3>
              <ul className="space-y-3 text-muted mb-7">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-cyan">→</span> {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {group.stack.map((s) => (
                  <span
                    key={s.name}
                    className="px-3.5 py-2 rounded-full border border-line bg-white/5 text-sm text-white"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-line bg-white/5 p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-0 justify-between"
        >
          <div>
            <h3 className="font-display text-xl font-semibold mb-1">Sharpening the edge</h3>
            <p className="text-muted text-sm">Solving problems consistently on competitive platforms</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {profile.competitiveProfiles.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-line hover:border-violet transition-colors text-sm font-medium"
              >
                {c.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
