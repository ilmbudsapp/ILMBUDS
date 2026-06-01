import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/context/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { loadAdSense } from "@/lib/adsense";
import {
  consentNeedsPrompt,
  hasExternalMediaConsent,
  setConsent,
  type ConsentChoice,
} from "@/lib/consent";

export function ConsentGate({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) {
  const [allowed, setAllowed] = useState(hasExternalMediaConsent);

  useEffect(() => {
    const sync = () => setAllowed(hasExternalMediaConsent());
    window.addEventListener("ilmbuds-consent-change", sync);
    return () => window.removeEventListener("ilmbuds-consent-change", sync);
  }, []);

  return allowed ? children : fallback;
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(consentNeedsPrompt());
    if (hasExternalMediaConsent()) loadAdSense();
  }, []);

  function choose(choice: ConsentChoice) {
    setConsent(choice);
    setVisible(false);
    if (choice === "all") loadAdSense();
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-5"
      role="dialog"
      aria-labelledby="ilmbuds-cookie-title"
      aria-describedby="ilmbuds-cookie-desc"
      aria-modal="true"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-amber-400/30 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-md sm:p-6">
        <h2 id="ilmbuds-cookie-title" className="text-base font-bold text-amber-50 sm:text-lg">
          {t("cookieConsent", "title")}
        </h2>
        <p id="ilmbuds-cookie-desc" className="mt-3 text-sm leading-relaxed text-slate-300">
          {t("cookieConsent", "body")}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-white/25 hover:text-white"
          >
            {t("cookieConsent", "essentialOnly")}
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="rounded-full border border-amber-400/40 bg-amber-500/15 px-5 py-2.5 text-sm font-semibold text-amber-100 transition hover:border-amber-400/60 hover:bg-amber-500/25"
          >
            {t("cookieConsent", "acceptAll")}
          </button>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          <Link href="/about#privacy" className="text-amber-200/90 underline-offset-2 hover:underline">
            {t("ui", "privacy")}
          </Link>
        </p>
      </div>
    </div>
  );
}
