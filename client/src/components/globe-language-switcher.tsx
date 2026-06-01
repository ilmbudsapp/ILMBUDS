import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { Language } from "@shared/translations";
import { LanguageFlag, LANGUAGE_OPTIONS } from "@/components/LanguageFlag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function GlobeLanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLabel = LANGUAGE_OPTIONS.find((o) => o.code === currentLanguage)?.label ?? currentLanguage;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="ilmbuds-lang-trigger flex items-center gap-2 rounded-full border-2 border-amber-400/70 bg-white px-2.5 py-1.5 text-slate-900 shadow-lg shadow-black/30 transition hover:border-amber-300 hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          aria-label={`Jezik: ${currentLabel}. Promijeni jezik.`}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <LanguageFlag lang={currentLanguage} className="h-5 w-8 shrink-0 rounded-[3px] shadow ring-1 ring-black/20" />
          <span className="hidden max-w-[5.5rem] truncate text-xs font-bold uppercase tracking-wide text-slate-800 sm:inline">
            {currentLanguage}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-amber-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="ilmbuds-lang-menu z-[200] min-w-[14.5rem] overflow-hidden rounded-xl border-2 border-amber-400/60 bg-white p-2 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
      >
        <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Jezik / Sprache
        </DropdownMenuLabel>
        {LANGUAGE_OPTIONS.map(({ code, label }) => {
          const active = currentLanguage === code;
          return (
            <DropdownMenuItem
              key={code}
              className={`mb-0.5 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-slate-900 focus:bg-amber-50 focus:text-slate-900 ${
                active ? "bg-amber-100 ring-1 ring-amber-400/50" : "hover:bg-slate-100"
              }`}
              onClick={() => {
                changeLanguage(code as Language);
                setIsOpen(false);
              }}
            >
              <LanguageFlag lang={code} className="h-6 w-9 shrink-0 rounded-[3px] shadow-md ring-1 ring-black/15" />
              <span className="flex-1">{label}</span>
              {active ? <Check className="h-5 w-5 shrink-0 text-amber-700" aria-hidden /> : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
