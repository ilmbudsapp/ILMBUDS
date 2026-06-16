import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { HomeWebSeoContent } from "@/components/HomeWebSeoContent";
import { HomeLatestContent } from "@/components/education/HomeLatestContent";
import type { TranslationKeys } from "@shared/translations";

type FeatureCard = {
  href: string;
  icon: string;
  titleKey: string;
  descKey: string;
  titleSection: TranslationKeys;
  descSection: TranslationKeys;
};

const FEATURES: FeatureCard[] = [
  {
    href: "/hadisi-za-djecu",
    icon: "📜",
    titleSection: "education",
    titleKey: "hadith",
    descSection: "education",
    descKey: "hadithDesc",
  },
  {
    href: "/blog",
    icon: "📚",
    titleSection: "education",
    titleKey: "blog",
    descSection: "education",
    descKey: "blogDesc",
  },
  {
    href: "/stories",
    icon: "📖",
    titleSection: "ui",
    titleKey: "stories",
    descSection: "home",
    descKey: "storiesSectionDescription",
  },
  {
    href: "/quran",
    icon: "🕋",
    titleSection: "ui",
    titleKey: "quran",
    descSection: "home",
    descKey: "quranSectionDescription",
  },
  {
    href: "/quiz-categories",
    icon: "🧠",
    titleSection: "ui",
    titleKey: "quiz",
    descSection: "home",
    descKey: "quizSectionDescription",
  },
  {
    href: "/mini-games",
    icon: "🎮",
    titleSection: "games",
    titleKey: "title",
    descSection: "games",
    descKey: "description",
  },
  {
    href: "/cartoons",
    icon: "🎬",
    titleSection: "home",
    titleKey: "cartoons",
    descSection: "home",
    descKey: "cartoonsSectionDescription",
  },
  {
    href: "/arabic-alphabet",
    icon: "🔤",
    titleSection: "home",
    titleKey: "arabicAlphabet",
    descSection: "home",
    descKey: "arabicAlphabetDescription",
  },
];

const CONTENT_CARDS: {
  href: string;
  image: string;
  titleKey: string;
  section: TranslationKeys;
}[] = [
  { href: "/stories", image: "/images/02.ISLAMIC STORIES.png", titleKey: "stories", section: "ui" },
  { href: "/quran", image: "/images/03.QURAN.png", titleKey: "quran", section: "ui" },
  { href: "/catechism", image: "/images/04.CATECHISM ILMIHAL.png", titleKey: "catechism", section: "ui" },
  { href: "/cartoons", image: "/images/05.CARTOONS.png", titleKey: "cartoons", section: "home" },
];

const LANG_LABELS = ["Bosanski", "Deutsch", "English", "Shqip", "Italiano"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function WebPremiumHome() {
  const { t } = useTranslation();

  const steps = [
    t("homeLanding", "step1"),
    t("homeLanding", "step2"),
    t("homeLanding", "step3"),
  ];

  const faqs = [
    [t("homeLanding", "faq1Q"), t("homeLanding", "faq1A")],
    [t("homeLanding", "faq2Q"), t("homeLanding", "faq2A")],
    [t("homeLanding", "faq3Q"), t("homeLanding", "faq3A")],
  ];

  const stats = [
    { value: "300+", label: t("homeLanding", "statActivities") },
    { value: "5", label: t("homeLanding", "statLanguages") },
    { value: "4–12", label: t("homeLanding", "statAges") },
    { value: "100%", label: t("homeLanding", "statFree") },
  ];

  return (
    <div className="premium-home text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-950" />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {t("homeLanding", "heroBadge")}
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t("homeLanding", "heroTitle")}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-50 md:text-xl">
              {t("homeLanding", "heroSubtitle")}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/stories"
                className="inline-flex rounded-full bg-yellow-400 px-7 py-4 font-black text-slate-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                {t("homeLanding", "ctaStart")}
              </Link>
              <a
                href="#content-cards"
                className="inline-flex rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t("homeLanding", "ctaExplore")}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl"
          >
            <div className="rounded-[1.5rem] bg-[#FFFDF7] p-6">
              <div className="rounded-3xl bg-gradient-to-br from-emerald-100 to-yellow-100 p-8 text-center">
                <div className="mb-4 text-7xl" aria-hidden>
                  🌱
                </div>
                <h2 className="text-2xl font-black text-emerald-900 sm:text-3xl">
                  {t("homeLanding", "heroCardTitle")}
                </h2>
                <p className="mt-3 text-slate-700">{t("homeLanding", "heroCardSubtitle")}</p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.slice(0, 3).map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-emerald-50 p-4 text-center transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <b className="text-2xl text-emerald-800">{s.value}</b>
                    <p className="text-xs text-slate-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold text-emerald-700">{t("homeLanding", "featuresLabel")}</p>
          <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            {t("homeLanding", "featuresTitle")}
          </h2>
          <p className="mt-5 text-lg text-slate-600">{t("homeLanding", "featuresSubtitle")}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div key={f.href} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}>
              <Link
                href={f.href}
                className="group flex h-full flex-col rounded-[2rem] border border-emerald-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                <div className="mb-5 text-5xl" aria-hidden>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-emerald-900">
                  {t(f.titleSection, f.titleKey)}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                  {t(f.descSection, f.descKey)}
                </p>
                <span className="mt-6 font-bold text-emerald-700 transition group-hover:translate-x-1">
                  {t("ui", "explore")} →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning path */}
      <section id="learning-path" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold text-emerald-700">{t("homeLanding", "pathLabel")}</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              {t("homeLanding", "pathTitle")}
            </h2>
            <p className="mt-5 text-lg text-slate-600">{t("homeLanding", "pathBody")}</p>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-5 rounded-3xl border border-emerald-100 bg-[#F8F5EC] p-6 transition hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-lg font-black text-white shadow-lg">
                  {i + 1}
                </div>
                <b className="text-xl text-slate-800">{step}</b>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content cards */}
      <section id="content-cards" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold text-emerald-700">{t("homeLanding", "contentLabel")}</p>
          <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            {t("homeLanding", "contentTitle")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENT_CARDS.map((card, i) => (
            <motion.div key={card.href} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                href={card.href}
                className="group block overflow-hidden rounded-[1.75rem] border border-emerald-100/80 bg-white/70 p-5 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
              >
                <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 p-4">
                  <img
                    src={card.image}
                    alt=""
                    className="max-h-full max-w-full object-contain transition group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-lg font-black text-emerald-900 group-hover:text-emerald-700">
                  {t(card.section, card.titleKey)}
                </h3>
                <span className="mt-2 inline-block text-sm font-bold text-emerald-600 opacity-0 transition group-hover:opacity-100">
                  {t("ui", "explore")} →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="bg-gradient-to-b from-[#F8F5EC] to-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-bold text-emerald-700">{t("homeLanding", "languagesLabel")}</p>
          <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            {t("homeLanding", "languagesTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            {t("homeLanding", "languagesSubtitle")}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {LANG_LABELS.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-emerald-100 bg-white px-6 py-3 font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section id="stats" className="relative overflow-hidden py-16" aria-label={t("homeLanding", "statsAria")}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center"
            >
              <p className="text-4xl font-black text-yellow-300 md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-emerald-50 md:text-base">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest educational content */}
      <HomeLatestContent />

      {/* FAQ */}
      <section id="faq" className="bg-emerald-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-4xl font-black md:text-5xl">{t("homeSeo", "faqHeading")}</h2>

          <div className="mt-12 space-y-4">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition open:bg-white/15 hover:border-white/20"
              >
                <summary className="cursor-pointer list-none text-xl font-black marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {q}
                    <span className="text-2xl text-emerald-300 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-emerald-50 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO article — light panel */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <HomeWebSeoContent />
      </section>
    </div>
  );
}
