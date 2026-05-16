import { Link } from "wouter";
import { useTranslation } from "@/hooks/use-translation";
import { HomeWebSeoContent } from "@/components/HomeWebSeoContent";
import type { TranslationKeys } from "@shared/translations";

type HomeCard = {
  href: string;
  title: { section: TranslationKeys; key: string };
  description: { section: TranslationKeys; key: string };
  image?: string;
  icon?: string;
  accent: "gold" | "emerald";
};

const CARDS: HomeCard[] = [
  {
    href: "/stories",
    title: { section: "ui", key: "stories" },
    description: { section: "home", key: "storiesSectionDescription" },
    image: "/images/02.ISLAMIC STORIES.png",
    accent: "gold",
  },
  {
    href: "/quran",
    title: { section: "ui", key: "quran" },
    description: { section: "home", key: "quranSectionDescription" },
    image: "/images/03.QURAN.png",
    accent: "emerald",
  },
  {
    href: "/catechism",
    title: { section: "ui", key: "catechism" },
    description: { section: "home", key: "catechismDescription" },
    image: "/images/04.CATECHISM ILMIHAL.png",
    accent: "emerald",
  },
  {
    href: "/quiz-categories",
    title: { section: "ui", key: "quiz" },
    description: { section: "home", key: "quizSectionDescription" },
    icon: "✦",
    accent: "gold",
  },
  {
    href: "/mini-games",
    title: { section: "games", key: "title" },
    description: { section: "games", key: "description" },
    icon: "🎮",
    accent: "gold",
  },
  {
    href: "/cartoons",
    title: { section: "home", key: "cartoons" },
    description: { section: "home", key: "cartoonsSectionDescription" },
    image: "/images/05.CARTOONS.png",
    accent: "emerald",
  },
  {
    href: "/arabic-alphabet",
    title: { section: "home", key: "arabicAlphabet" },
    description: { section: "home", key: "arabicAlphabetDescription" },
    icon: "أ",
    accent: "emerald",
  },
];

export function WebHomePage() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10">
      <section className="web-glass relative mb-10 overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10" />
        <div className="relative">
          <p className="font-arabic text-2xl text-amber-200/90 sm:text-3xl">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <h1 className="web-hero-title mt-4">{t("homeSeo", "pageTitle")}</h1>
          <p className="web-text-muted mx-auto mt-4 max-w-2xl text-lg leading-relaxed">
            {t("home", "subtitle")}
          </p>
          <p className="web-text-gold mt-2 text-sm font-medium">{t("home", "tagline")}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <Link key={card.href} href={card.href} className="web-glass-card group block no-underline">
            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-2 text-2xl font-bold text-amber-200">
                {card.image ? (
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className={card.icon === "أ" ? "font-arabic text-3xl" : ""}>{card.icon}</span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-50 group-hover:text-amber-100">
                  {t(card.title.section, card.title.key)}
                </h2>
                <p className="web-text-muted mt-1 text-sm leading-snug">
                  {t(card.description.section, card.description.key)}
                </p>
              </div>
            </div>
            <span className={card.accent === "emerald" ? "web-cta-emerald" : "web-cta"}>
              {t("ui", "explore")}
            </span>
          </Link>
        ))}
      </div>

      <HomeWebSeoContent />
    </div>
  );
}
