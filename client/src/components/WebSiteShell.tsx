import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { GlobeLanguageSwitcher } from "@/components/globe-language-switcher";
import { Navbar } from "@/components/navbar";
import { SeoEnhancements } from "@/components/SeoEnhancements";
import { useTranslation } from "@/hooks/use-translation";
import { WebMagicBackground } from "@/components/web/WebMagicBackground";

type Props = {
  children: ReactNode;
};

export default function WebSiteShell({ children }: Props) {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.add("ilmbuds-web");
    return () => document.documentElement.classList.remove("ilmbuds-web");
  }, []);

  return (
    <div className="ilmbuds-web relative flex min-h-screen flex-col font-display text-slate-100">
      <WebMagicBackground />
      <SeoEnhancements />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        {t("ui", "skipToContent")}
      </a>

      <header
        role="banner"
        className="web-glass-header sticky top-0 z-50 shadow-lg shadow-black/20"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-3 text-white no-underline">
              <img
                src="/images/ilmbuds_logo.png"
                alt="ILMBUDS"
                className="h-10 w-10 rounded-xl border border-amber-400/30 shadow-[0_0_12px_rgba(251,191,36,0.35)]"
              />
              <div>
                <span className="text-lg font-bold tracking-tight text-amber-50 sm:text-xl">
                  ILMBUDS
                </span>
                <span className="mt-0.5 block text-xs font-medium text-slate-300/90">
                  {t("ui", "webTagline")}
                </span>
              </div>
            </Link>
            <GlobeLanguageSwitcher />
          </div>
          <nav
            className="web-glass mt-3 rounded-2xl px-2 py-2"
            aria-label={t("ui", "mainMenuAria")}
          >
            <Navbar variant="web" />
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        role="main"
        className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-3 py-6 sm:px-6 sm:py-8"
      >
        {children}
      </main>

      <footer
        role="contentinfo"
        className="web-glass-header relative z-10 border-t border-white/10 py-6 text-center text-sm text-slate-300"
      >
        <nav
          className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-2 px-4"
          aria-label={t("ui", "footerNavAria")}
        >
          <Link href="/about" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "about")}
          </Link>
          <Link href="/about#contact" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "contact")}
          </Link>
          <Link href="/about#privacy" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "privacy")}
          </Link>
          <Link href="/about#legal" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "legalInfo")}
          </Link>
          <Link href="/partners" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "partners")}
          </Link>
          <Link href="/donate" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "donations")}
          </Link>
        </nav>
        <p>
          © {new Date().getFullYear()} ILMBUDS · {t("homeSeo", "authorLabel")}: Agron Osmani ·{" "}
          <a
            href="https://agrmultimedia.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 underline-offset-2 hover:text-emerald-200 hover:underline"
          >
            AGRMULTIMEDIA
          </a>
        </p>
      </footer>
    </div>
  );
}
