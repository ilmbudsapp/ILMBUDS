import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { GlobeLanguageSwitcher } from "@/components/globe-language-switcher";
import { Navbar } from "@/components/navbar";
import { SeoEnhancements } from "@/components/SeoEnhancements";
import PageMeta from "@/components/seo/PageMeta";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/language-context";
import { getRouteSeo } from "@/lib/seo/routeSeo";
import { WebMagicBackground } from "@/components/web/WebMagicBackground";
import CookieConsent from "@/components/CookieConsent";
type Props = {
  children: ReactNode;
};

export default function WebSiteShell({ children }: Props) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [location] = useLocation();
  const isHome = location === "/";
  const routeSeo = getRouteSeo(location, language);
  useEffect(() => {
    document.documentElement.classList.add("ilmbuds-web", "ilmbuds-web-light");
    return () => {
      document.documentElement.classList.remove("ilmbuds-web", "ilmbuds-web-light");
    };
  }, []);

  return (
    <div className="ilmbuds-web ilmbuds-web-light relative flex min-h-screen flex-col font-display text-slate-900">
      <WebMagicBackground />
      <SeoEnhancements />
      {routeSeo ? (
        <PageMeta title={routeSeo.title} description={routeSeo.description} path={location} />
      ) : null}      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        {t("ui", "skipToContent")}
      </a>

      <header
        role="banner"
        className="web-glass-header sticky top-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-3 no-underline">
              <img
                src="/images/ilmbuds_logo.png"
                alt="ILMBUDS"
                className="h-10 w-10 rounded-xl border border-emerald-200/80 shadow-md"
              />
              <div>
                <span className="text-lg font-bold tracking-tight text-emerald-900 sm:text-xl">
                  ILMBUDS
                </span>
                <span className="mt-0.5 block text-xs font-medium text-slate-600">
                  {t("ui", "webTagline")}
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/stories"
                className="hidden rounded-full bg-emerald-700 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-800 sm:inline-flex"
              >
                {t("homeLanding", "ctaStart")}
              </Link>
              <GlobeLanguageSwitcher />
            </div>
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
        className={`relative z-10 flex-1 ${isHome ? "premium-main w-full" : "mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-8"}`}
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
          <Link href="/contact" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "contact")}
          </Link>
          <Link href="/author" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("trust", "author")}
          </Link>
          <Link href="/about#privacy" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "privacy")}
          </Link>
          <Link href="/terms" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("trust", "terms")}
          </Link>
          <Link href="/disclaimer" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("trust", "disclaimer")}
          </Link>
          <Link href="/editorial-policy" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("trust", "editorial")}
          </Link>
          <Link href="/sources" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("trust", "sources")}
          </Link>
          <Link href="/about#legal" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "legalInfo")}
          </Link>
          <Link href="/partners" className="text-amber-200/90 underline-offset-2 hover:text-amber-100 hover:underline">
            {t("ui", "partners")}
          </Link>
        </nav>
        <p>
          © {new Date().getFullYear()} ILMBUDS · {t("homeSeo", "authorLabel")}:{" "}
          <Link href="/author" className="text-emerald-300 underline-offset-2 hover:text-emerald-200 hover:underline">
            Agron Osmani
          </Link>
          {" · "}
          <a
            href="https://agrmultimedia.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 underline-offset-2 hover:text-emerald-200 hover:underline"
          >
            AGRMULTIMEDIA
          </a>
        </p>      </footer>

      <CookieConsent />
    </div>
  );
}
