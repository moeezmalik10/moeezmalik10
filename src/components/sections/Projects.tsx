"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-wide text-cyan mb-4">03 · PROJECTS</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">Selected work</h2>
          </div>
          <p className="text-muted max-w-sm">
            A mix of deep learning experiments and full-stack products. Live activity from GitHub is further down
            the page.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group rounded-3xl border border-line bg-white/5 p-7 flex flex-col justify-between hover:border-violet/50 transition-colors"
            >
              <div>
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-violet/30 text-violet">
                  {project.category.toUpperCase()}
                </span>
                <h3 className="font-display text-xl font-semibold mt-5 mb-3 group-hover:text-violet transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-violet transition-colors"
                  >
                    GitHub →
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-cyan hover:text-white transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
