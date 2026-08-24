"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

const OPTIONS: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ur", label: "اردو" },
  { code: "ru", label: "Roman" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={cn("flex items-center gap-0.5 rounded-full border border-line bg-white/5 p-0.5", className)}
      role="group"
      aria-label={t.langSwitcher.label}
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLocale(opt.code)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
            locale === opt.code ? "bg-gradient-to-br from-violet to-[#6f4dff] text-white" : "text-muted hover:text-white"
          )}
          aria-pressed={locale === opt.code}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
