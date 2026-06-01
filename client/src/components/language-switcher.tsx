import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/language-context';
import { LanguageFlag, LANGUAGE_OPTIONS } from '@/components/LanguageFlag';
import { Check } from 'lucide-react';

// Jednostavnija verzija Language Switcher-a
export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();
  
  // Definisanje funkcija za promenu jezika
  const setLanguage = (lang: 'en' | 'sq' | 'bs' | 'de' | 'it') => {
    return () => changeLanguage(lang);
  };
  
  const currentLabel = LANGUAGE_OPTIONS.find((o) => o.code === currentLanguage)?.label ?? currentLanguage;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-10 gap-2 rounded-full border-2 border-white/40 bg-white px-2.5 text-slate-900 shadow-lg hover:bg-amber-50"
          aria-label={`Jezik: ${currentLabel}`}
        >
          <LanguageFlag lang={currentLanguage} className="h-5 w-8 shrink-0 rounded-[3px] ring-1 ring-black/15" />
          <span className="font-bold uppercase">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="z-[200] min-w-[14.5rem] rounded-xl border-2 border-amber-400/50 bg-white p-2 shadow-2xl"
      >
        {LANGUAGE_OPTIONS.map(({ code, label }) => {
          const active = currentLanguage === code;
          return (
            <DropdownMenuItem
              key={code}
              onClick={setLanguage(code)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-slate-900 ${
                active ? "bg-amber-100" : "hover:bg-slate-100"
              }`}
            >
              <LanguageFlag lang={code} className="h-6 w-9 shrink-0 rounded-[3px] shadow ring-1 ring-black/15" />
              <span className="flex-1">{label}</span>
              {active ? <Check className="h-5 w-5 text-amber-700" aria-hidden /> : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}