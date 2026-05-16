import type { ReactNode } from "react";
import { Link } from "wouter";
import { GlobeLanguageSwitcher } from "@/components/globe-language-switcher";
import { Navbar } from "@/components/navbar";

type Props = {
  children: ReactNode;
};

export default function WebSiteShell({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-sky-600/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-2 text-white no-underline">
              <span className="text-lg font-bold tracking-tight sm:text-xl">ILMBUDS</span>
              <span className="hidden text-xs font-medium text-white/80 xl:inline">
                Islamic learning for children
              </span>
            </Link>
            <GlobeLanguageSwitcher />
          </div>
          <div className="mt-3 border-t border-white/15 pt-3">
            <Navbar variant="web" />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-3 py-4 sm:px-6 sm:py-6">
        {children}
      </main>

      <footer className="border-t border-white/20 bg-sky-800/80 py-4 text-center text-xs text-white/80">
        <p>
          © {new Date().getFullYear()} ILMBUDS ·{" "}
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
