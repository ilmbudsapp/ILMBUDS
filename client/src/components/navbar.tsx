import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Icon } from '@/components/ui/icons';
import { useUserContext } from '@/context/user-context';
import { useLanguage } from '@/context/language-context';
import { isWebStaticMode } from '@/lib/webApi/install';

type NavItem = {
  path: string;
  label: string;
  icon: string;
  customIcon?: React.ReactNode;
};

type LangKey = 'en' | 'bs' | 'sq' | 'de' | 'it';

function pickLabel(lang: string, labels: Record<LangKey, string>): string {
  const key = lang as LangKey;
  return labels[key] ?? labels.bs;
}

function getContentNavItems(lang: string): NavItem[] {
  return [
    {
      path: '/stories',
      label: pickLabel(lang, {
        en: 'Stories',
        bs: 'Priče',
        sq: 'Tregime',
        de: 'Geschichten',
        it: 'Storie',
      }),
      icon: 'auto_stories',
    },
    {
      path: '/quran',
      label: pickLabel(lang, {
        en: 'Quran',
        bs: 'Kuran',
        sq: 'Kuran',
        de: 'Koran',
        it: 'Corano',
      }),
      icon: 'menu_book',
    },
    {
      path: '/catechism',
      label: pickLabel(lang, {
        en: 'Catechism',
        bs: 'Ilmihal',
        sq: 'Ilmihal',
        de: 'Ilmihal',
        it: 'Catechismo',
      }),
      icon: 'mosque',
    },
    {
      path: '/quiz-categories',
      label: pickLabel(lang, {
        en: 'Quiz',
        bs: 'Kviz',
        sq: 'Kuiz',
        de: 'Quiz',
        it: 'Quiz',
      }),
      icon: 'quiz',
    },
    {
      path: '/mini-games',
      label: pickLabel(lang, {
        en: 'Games',
        bs: 'Igre',
        sq: 'Lojëra',
        de: 'Spiele',
        it: 'Giochi',
      }),
      icon: 'quiz',
    },
    {
      path: '/cartoons',
      label: pickLabel(lang, {
        en: 'Cartoons',
        bs: 'Crtani',
        sq: 'Filma',
        de: 'Cartoons',
        it: 'Cartoni',
      }),
      icon: 'movie',
    },
    {
      path: '/arabic-alphabet',
      label: pickLabel(lang, {
        en: 'Arabic',
        bs: 'Arapski',
        sq: 'Arabisht',
        de: 'Arabisch',
        it: 'Arabo',
      }),
      icon: 'menu_book',
    },
  ];
}

function useNavItems(variant: 'mobile' | 'web'): NavItem[] {
  const { user } = useUserContext();
  const { currentLanguage } = useLanguage();

  const items: NavItem[] = [
    {
      path: '/',
      label: pickLabel(currentLanguage, {
        en: 'Home',
        bs: 'Početna',
        sq: 'Kryefaqja',
        de: 'Startseite',
        it: 'Home',
      }),
      icon: 'home',
    },
    ...(variant === 'web' ? getContentNavItems(currentLanguage) : []),
    {
      path: '/about',
      label: pickLabel(currentLanguage, {
        en: 'About',
        bs: 'O nama',
        sq: 'Rreth nesh',
        de: 'Über uns',
        it: 'Chi siamo',
      }),
      icon: 'info',
    },
    {
      path: '/partners',
      label: pickLabel(currentLanguage, {
        en: 'Partners',
        bs: 'Partneri',
        sq: 'Partnerët',
        de: 'Partner',
        it: 'Partner',
      }),
      icon: 'handshake',
      customIcon: (
        <img
          src="/images/handshake.png"
          alt="Partners"
          className="h-5 w-5 object-contain"
        />
      ),
    },
    {
      path: '/settings',
      label: pickLabel(currentLanguage, {
        en: 'Settings',
        bs: 'Postavke',
        sq: 'Cilësimet',
        de: 'Einstellungen',
        it: 'Impostazioni',
      }),
      icon: 'settings',
    },
  ];

  if (user?.role === 'parent') {
    items.push({
      path: '/parent-dashboard',
      label: pickLabel(currentLanguage, {
        en: 'Dashboard',
        bs: 'Kontrolna tabla',
        sq: 'Paneli',
        de: 'Dashboard',
        it: 'Pannello',
      }),
      icon: 'dashboard',
    });
  }

  return items;
}

function isNavActive(location: string, path: string): boolean {
  if (path === '/') return location === '/';
  if (path === '/quiz-categories') {
    return location.startsWith('/quiz');
  }
  if (path === '/catechism') {
    return (
      location.startsWith('/catechism') ||
      location.startsWith('/ilmihal') ||
      location.startsWith('/pillars') ||
      location.startsWith('/beliefs') ||
      location.startsWith('/ablution')
    );
  }
  return location.startsWith(path);
}

type NavbarProps = {
  variant?: 'mobile' | 'web';
};

export function Navbar({ variant = 'mobile' }: NavbarProps) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentLanguage } = useLanguage();
  const navItems = useNavItems(variant);

  if (variant === 'mobile' && isWebStaticMode()) {
    return null;
  }

  if (variant === 'web') {
    return (
      <nav className="w-full" aria-label="Main navigation">
        <div className="hidden flex-wrap items-center justify-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-medium transition-all no-underline xl:px-3 xl:text-sm ${
                isNavActive(location, item.path)
                  ? 'bg-amber-500/25 text-amber-100 shadow-[0_0_12px_rgba(251,191,36,0.25)]'
                  : 'text-slate-200/90 hover:bg-white/10 hover:text-amber-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-slate-900/50 px-3 py-2 text-sm font-medium text-amber-100 backdrop-blur-sm"
            aria-expanded={menuOpen}
            aria-controls="web-nav-menu"
            aria-label={pickLabel(currentLanguage, {
              en: 'Open main menu',
              bs: 'Otvori glavni meni',
              sq: 'Hap menynë',
              de: 'Hauptmenü öffnen',
              it: 'Apri menu principale',
            })}
          >
            <span className="text-lg leading-none" aria-hidden="true">
              ☰
            </span>
            {pickLabel(currentLanguage, {
              en: 'Menu',
              bs: 'Meni',
              sq: 'Menu',
              de: 'Menü',
              it: 'Menu',
            })}
          </button>
          {menuOpen && (
            <div
              id="web-nav-menu"
              className="mt-2 grid max-h-[70vh] grid-cols-2 gap-1 overflow-y-auto rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-xl backdrop-blur-lg sm:grid-cols-3"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-center text-sm font-medium no-underline ${
                    isNavActive(location, item.path)
                      ? 'bg-amber-500/25 text-amber-100'
                      : 'text-slate-200 hover:bg-white/10 hover:text-amber-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav
      className="fixed left-0 right-0 z-50 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
      style={{ bottom: '80px' }}
    >
      <div className="flex h-16 items-center justify-around px-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center justify-center rounded-lg p-2 transition-colors no-underline ${
              isNavActive(location, item.path)
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400'
                : 'text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400'
            }`}
            aria-label={item.label}
          >
            {item.customIcon || <Icon name={item.icon} className="mb-1 h-6 w-6" />}
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
