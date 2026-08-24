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
          {/* Blue background */}
          <rect width="60" height="40" fill="#002395" />
          
          {/* Yellow triangle */}
          <path d="M0 0 L30 20 L0 40 Z" fill="#FECB00" />
          
          {/* White stars along the triangle edge */}
          <g fill="#fff">
            {/* Top star */}
            <path d="M23 10 L23.5 11.5 L25 11.5 L23.8 12.3 L24.3 14 L23 13 L21.7 14 L22.2 12.3 L21 11.5 L22.5 11.5 Z" />
            
            {/* Stars along the diagonal */}
            <path d="M21 14 L21.5 15.5 L23 15.5 L21.8 16.3 L22.3 18 L21 17 L19.7 18 L20.2 16.3 L19 15.5 L20.5 15.5 Z" />
            
            <path d="M19 18 L19.5 19.5 L21 19.5 L19.8 20.3 L20.3 22 L19 21 L17.7 22 L18.2 20.3 L17 19.5 L18.5 19.5 Z" />
            
            <path d="M17 22 L17.5 23.5 L19 23.5 L17.8 24.3 L18.3 26 L17 25 L15.7 26 L16.2 24.3 L15 23.5 L16.5 23.5 Z" />
            
            <path d="M15 26 L15.5 27.5 L17 27.5 L15.8 28.3 L16.3 30 L15 29 L13.7 30 L14.2 28.3 L13 27.5 L14.5 27.5 Z" />
            
            <path d="M13 30 L13.5 31.5 L15 31.5 L13.8 32.3 L14.3 34 L13 33 L11.7 34 L12.2 32.3 L11 31.5 L12.5 31.5 Z" />
            
            {/* Bottom star */}
            <path d="M11 34 L11.5 35.5 L13 35.5 L11.8 36.3 L12.3 38 L11 37 L9.7 38 L10.2 36.3 L9 35.5 L10.5 35.5 Z" />
          </g>
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
