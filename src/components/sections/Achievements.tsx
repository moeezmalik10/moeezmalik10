"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6 md:px-10 bg-surface/40 border-y border-line">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">05 · ACHIEVEMENTS</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">Milestones so far</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="rounded-3xl border border-line bg-white/5 p-8"
            >
              <p className="font-display text-3xl font-semibold mb-1">{achievement.value}</p>
              <h3 className="font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
