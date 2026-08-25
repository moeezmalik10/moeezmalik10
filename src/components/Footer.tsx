"use client";

import { profile } from "@/data/profile";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-line py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
        </p>
        <a href="#home" className="hover:text-white transition-colors">
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
