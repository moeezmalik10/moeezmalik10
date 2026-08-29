"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { Certificate } from "@/types";

function CertificateCard({ cert, issuedLabel }: { cert: Certificate; issuedLabel: string }) {
  const inner = (
    <>
      {cert.imageUrl && (
        <div className="rounded-xl overflow-hidden mb-4 aspect-video bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover" />
        </div>
      )}
      <h3 className="font-semibold mb-1">{cert.title}</h3>
      <p className="text-sm text-muted">
        {issuedLabel}: {cert.issuer}
        {cert.date ? ` · ${cert.date}` : ""}
      </p>
    </>
  );

  const className = "rounded-3xl border border-line bg-white/5 p-6 hover:border-violet/50 transition-colors";

  return cert.credentialUrl ? (
    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export function Certificates() {
  const { t } = useLocale();
  const completed = profile.certificates.filter((c) => c.status === "completed");
  const inProgress = profile.certificates.filter((c) => c.status === "in-progress");
  const isEmpty = profile.certificates.length === 0;

  return (
    <section id="certificates" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">{t.certificates.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
            {t.certificates.heading}
          </h2>
          <p className="text-muted">{t.certificates.subtitle}</p>
        </motion.div>

        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-dashed border-line bg-white/[0.02] p-12 text-center max-w-xl mx-auto"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8.5 13.5 7 22l5-3 5 3-1.5-8.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">{t.certificates.emptyTitle}</h3>
            <p className="text-muted text-sm leading-relaxed">{t.certificates.emptyDescription}</p>
          </motion.div>
        ) : (
          <div className="space-y-14">
            {completed.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-semibold mb-6">{t.certificates.completedTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completed.map((cert, i) => (
                    <motion.div
                      key={cert.slug}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                    >
                      <CertificateCard cert={cert} issuedLabel={t.certificates.issuedLabel} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {inProgress.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-semibold mb-6">{t.certificates.inProgressTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inProgress.map((cert, i) => (
                    <motion.div
                      key={cert.slug}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                    >
                      <CertificateCard cert={cert} issuedLabel={t.certificates.issuedLabel} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
