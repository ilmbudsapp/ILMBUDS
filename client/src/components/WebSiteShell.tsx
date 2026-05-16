import type { ReactNode } from "react";
import { Link } from "wouter";
import { GlobeLanguageSwitcher } from "@/components/globe-language-switcher";
import { Navbar } from "@/components/navbar";
import { SeoEnhancements } from "@/components/SeoEnhancements";

type Props = {
  children: ReactNode;
};

export default function WebSiteShell({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600">
      <SeoEnhancements />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Preskoči na sadržaj
      </a>

      <header
        role="banner"
        className="sticky top-0 z-50 border-b border-white/20 bg-sky-600/95 backdrop-blur-md shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-2 text-white no-underline">
              <span className="text-lg font-bold tracking-tight sm:text-xl">ILMBUDS</span>
              <span className="hidden text-xs font-medium text-white/80 xl:inline">
                Islamska web stranica za djecu
              </span>
            </Link>
            <GlobeLanguageSwitcher />
          </div>
          <nav className="mt-3 border-t border-white/15 pt-3" aria-label="Glavni meni">
            <Navbar variant="web" />
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        role="main"
        className="mx-auto w-full max-w-7xl flex-1 px-3 py-4 sm:px-6 sm:py-6"
      >
        {children}
      </main>

      <footer role="contentinfo" className="border-t border-white/20 bg-sky-800/80 py-6 text-center text-sm text-white/90">
        <nav className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-2 px-4" aria-label="Podnožje">
          <Link href="/about" className="underline hover:text-white">
            O nama
          </Link>
          <Link href="/about#contact" className="underline hover:text-white">
            Kontakt
          </Link>
          <Link href="/about#privacy" className="underline hover:text-white">
            Privatnost
          </Link>
          <Link href="/about#legal" className="underline hover:text-white">
            Pravne informacije
          </Link>
          <Link href="/partners" className="underline hover:text-white">
            Partneri
          </Link>
          <Link href="/donate" className="underline hover:text-white">
            Donacije
          </Link>
        </nav>
        <p>
          © {new Date().getFullYear()} ILMBUDS · Autor: Agron Osmani ·{" "}
          <a
            href="https://agrmultimedia.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            AGRMULTIMEDIA
          </a>
        </p>
      </footer>
    </div>
  );
}
