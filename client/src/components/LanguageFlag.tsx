import type { Language } from "@shared/translations";

type LanguageFlagProps = {
  lang: Language;
  className?: string;
  title?: string;
};

/** Inline SVG flags — visible on all platforms (no emoji / no CDN). */
export function LanguageFlag({ lang, className = "h-5 w-7 shrink-0 rounded-sm shadow-sm ring-1 ring-black/15", title }: LanguageFlagProps) {
  const label = title ?? lang;
  const common = { className, role: "img" as const, "aria-label": label };

  switch (lang) {
    case "en":
      return (
        <svg viewBox="0 0 60 40" {...common}>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="6" />
          <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="3" />
          <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      );
    case "sq":
      return (
        <svg viewBox="0 0 60 40" {...common}>
          <rect width="60" height="40" fill="#E41E20" />
          <path
            fill="#000"
            d="M30 8c-4 0-7 2.5-7 6.5 0 3 2 4.5 4 5.5v2.5c0 1.2 1 2 2.5 2s2.5-.8 2.5-2v-2c2-1 4-2.5 4-5.5 0-4-3-6.5-7-6.5zm0 3.5c1.8 0 3 1 3 2.5s-1.2 2.5-3 2.5-3-1-3-2.5 1.2-2.5 3-2.5z"
          />
        </svg>
      );
    case "bs":
      return (
        <svg viewBox="0 0 60 40" {...common}>
          <rect width="60" height="40" fill="#002395" />
          <path d="M0 40L30 0 60 40z" fill="#FECB00" />
          <circle cx="14" cy="28" r="2.2" fill="#fff" />
          <circle cx="22" cy="22" r="2.2" fill="#fff" />
          <circle cx="30" cy="16" r="2.2" fill="#fff" />
          <circle cx="38" cy="22" r="2.2" fill="#fff" />
          <circle cx="46" cy="28" r="2.2" fill="#fff" />
        </svg>
      );
    case "de":
      return (
        <svg viewBox="0 0 60 40" {...common}>
          <rect width="60" height="13.33" fill="#000" />
          <rect y="13.33" width="60" height="13.34" fill="#DD0000" />
          <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
        </svg>
      );
    case "it":
      return (
        <svg viewBox="0 0 60 40" {...common}>
          <rect width="20" height="40" fill="#009246" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#CE2B37" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 60 40" {...common}>
          <rect width="60" height="40" fill="#64748b" />
        </svg>
      );
  }
}

export const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: "bs", label: "Bosanski" },
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "sq", label: "Shqip" },
  { code: "it", label: "Italiano" },
];
