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
      {/* Hero - Ultra Premium Mesh Gradient */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-slate-950" />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-fuchsia-500/30 to-violet-600/30 blur-[120px] animate-pulse"
          style={{ animationDuration: '8s' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-500/30 blur-[100px] animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '1s' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-amber-400/25 to-yellow-500/25 blur-[90px] animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <motion.div 
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r from-white/15 to-white/5 px-5 py-2.5 text-sm font-bold text-white shadow-2xl backdrop-blur-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {t("homeLanding", "heroBadge")}
            </motion.div>

            <h1
              id="hero-heading"
              className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ 
                textShadow: '0 0 80px rgba(139, 92, 246, 0.5), 0 10px 40px rgba(0, 0, 0, 0.4)',
                letterSpacing: '-0.03em'
              }}
            >
              {t("homeLanding", "heroTitle")}
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-white/95 md:text-2xl font-medium backdrop-blur-sm">
              {t("homeLanding", "heroSubtitle")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/stories"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 px-8 py-5 text-lg font-black text-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(251,191,36,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                <span className="relative z-10">{t("homeLanding", "ctaStart")}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              <a
                href="#content-cards"
                className="group inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 px-8 py-5 text-lg font-bold text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>{t("homeLanding", "ctaExplore")}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[2.5rem] border-2 border-white/30 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-3xl transition-all duration-500 hover:border-white/50 hover:shadow-[0_30px_120px_rgba(139,92,246,0.4)]"
          >
            <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-br from-violet-400/20 via-fuchsia-400/20 to-cyan-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden></div>
            <div className="relative rounded-[2rem] bg-gradient-to-br from-white/95 to-white/90 p-7 shadow-inner">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-10 text-center shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" aria-hidden></div>
                <motion.div 
                  className="relative mb-5 text-8xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  🌱
                </motion.div>
                <h2 className="relative text-3xl font-black text-white drop-shadow-lg sm:text-4xl">
                  {t("homeLanding", "heroCardTitle")}
                </h2>
                <p className="relative mt-4 text-lg font-medium text-white/90">{t("homeLanding", "heroCardSubtitle")}</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {stats.slice(0, 3).map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group/stat relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400/0 to-purple-400/0 transition-all duration-300 group-hover/stat:from-violet-400/10 group-hover/stat:to-purple-400/10" aria-hidden></div>
                    <b className="relative text-3xl font-black bg-gradient-to-br from-violet-600 to-purple-600 bg-clip-text text-transparent">{s.value}</b>
                    <p className="relative mt-1 text-xs font-bold text-slate-600">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - 3D Floating Cards */}
      <section id="features" className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wider text-violet-700 shadow-lg"
          >
            {t("homeLanding", "featuresLabel")}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-5xl font-black text-slate-900 md:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t("homeLanding", "featuresTitle")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 font-medium"
          >
            {t("homeLanding", "featuresSubtitle")}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div 
              key={f.href} 
              custom={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-40px" }} 
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={f.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-white/60 bg-white/70 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-violet-200 hover:bg-white/90 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
              >
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-violet-400/0 via-purple-400/0 to-fuchsia-400/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-400/20 group-hover:via-purple-400/10 group-hover:to-fuchsia-400/20 group-hover:opacity-100" aria-hidden></div>
                
                <motion.div 
                  className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-violet-500 to-purple-600 text-5xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-violet-500/50"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  aria-hidden
                >
                  {f.icon}
                </motion.div>
                
                <h3 className="relative text-2xl font-black text-slate-900 transition-colors duration-300 group-hover:text-violet-700 lg:text-3xl">
                  {t(f.titleSection, f.titleKey)}
                </h3>
                <p className="relative mt-4 flex-1 text-base leading-relaxed text-slate-600 lg:text-lg">
                  {t(f.descSection, f.descKey)}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-2 text-base font-black text-violet-600 transition-all duration-300 group-hover:gap-3 group-hover:text-violet-700">
                  {t("ui", "explore")} 
                  <span className="text-xl">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning path - Modern Glassmorphism */}
      <section id="learning-path" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50"></div>
        <div className="absolute -right-64 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-300/30 to-purple-400/30 blur-[100px]" aria-hidden></div>
        <div className="absolute -left-64 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-fuchsia-300/30 to-pink-400/30 blur-[100px]" aria-hidden></div>
        
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wider text-violet-700 shadow-lg">{t("homeLanding", "pathLabel")}</p>
            <h2 className="mt-5 text-5xl font-black text-slate-900 md:text-6xl" style={{ letterSpacing: '-0.02em' }}>
              {t("homeLanding", "pathTitle")}
            </h2>
            <p className="mt-6 text-xl font-medium leading-relaxed text-slate-600">{t("homeLanding", "pathBody")}</p>
          </motion.div>

          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-6 rounded-[2rem] border-2 border-white/60 bg-white/70 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-violet-200 hover:bg-white/90 hover:shadow-[0_12px_48px_rgba(139,92,246,0.12)]"
              >
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-2xl font-black text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-violet-500/50">
                  {i + 1}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" aria-hidden></div>
                </div>
                <b className="text-xl font-black text-slate-800 transition-colors duration-300 group-hover:text-violet-700 lg:text-2xl">{step}</b>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content cards - Bento Grid Style */}
      <section id="content-cards" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wider text-violet-700 shadow-lg"
          >
            {t("homeLanding", "contentLabel")}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-5xl font-black text-slate-900 md:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t("homeLanding", "contentTitle")}
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENT_CARDS.map((card, i) => (
            <motion.div 
              key={card.href} 
              custom={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={card.href}
                className="group relative block overflow-hidden rounded-[2rem] border-2 border-white/60 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-violet-200 hover:bg-white/90 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
              >
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-violet-400/0 via-purple-400/0 to-fuchsia-400/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-400/20 group-hover:via-purple-400/10 group-hover:to-fuchsia-400/20 group-hover:opacity-100" aria-hidden></div>
                
                <div className="relative mb-5 flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-5 shadow-inner transition-all duration-500 group-hover:scale-105">
                  <img
                    src={card.image}
                    alt=""
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="relative text-xl font-black text-slate-900 transition-colors duration-300 group-hover:text-violet-700 lg:text-2xl">
                  {t(card.section, card.titleKey)}
                </h3>
                
                <span className="relative mt-3 inline-flex items-center gap-2 text-sm font-black text-violet-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {t("ui", "explore")} 
                  <span className="text-lg">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages - Modern Pills */}
      <section id="languages" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wider text-violet-700 shadow-lg"
          >
            {t("homeLanding", "languagesLabel")}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-5xl font-black text-slate-900 md:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t("homeLanding", "languagesTitle")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-xl font-medium text-slate-600"
          >
            {t("homeLanding", "languagesSubtitle")}
          </motion.p>

          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {LANG_LABELS.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="rounded-2xl border-2 border-violet-200/50 bg-white/80 px-8 py-4 text-lg font-black text-slate-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-violet-300 hover:bg-white hover:shadow-2xl hover:shadow-violet-500/20"
              >
                {lang}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats band - Vibrant Gradient */}
      <section id="stats" className="relative overflow-hidden py-20" aria-label={t("homeLanding", "statsAria")}>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" aria-hidden></div>
        
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center"
            >
              <div className="relative inline-block">
                <p className="relative text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-amber-200 to-yellow-400 md:text-7xl" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)' }}>
                  {s.value}
                </p>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden></div>
              </div>
              <p className="mt-3 text-base font-bold text-white/90 md:text-lg">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest educational content */}
      <HomeLatestContent />

      {/* FAQ - Modern Glassmorphism */}
      <section id="faq" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950"></div>
        <div className="absolute -right-64 top-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-violet-600/20 to-purple-700/20 blur-[120px]" aria-hidden></div>
        <div className="absolute -left-64 bottom-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-fuchsia-600/20 to-pink-700/20 blur-[120px]" aria-hidden></div>
        
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl font-black text-white md:text-6xl lg:text-7xl"
            style={{ 
              textShadow: '0 0 80px rgba(236, 72, 153, 0.5), 0 10px 40px rgba(0, 0, 0, 0.4)',
              letterSpacing: '-0.02em'
            }}
          >
            {t("homeSeo", "faqHeading")}
          </motion.h2>

          <div className="mt-14 space-y-5">
            {faqs.map(([q, a], i) => (
              <motion.details
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[2rem] border-2 border-white/20 bg-white/10 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300 open:border-violet-400/40 open:bg-white/15 open:shadow-[0_20px_60px_rgba(139,92,246,0.3)] hover:border-white/30"
              >
                <summary className="cursor-pointer list-none text-xl font-black text-white marker:content-none transition-colors duration-300 group-hover:text-violet-200 lg:text-2xl [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {q}
                    <motion.span 
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/30 text-2xl text-violet-200 transition-all duration-300 group-open:rotate-45 group-open:bg-violet-500/50 group-hover:bg-violet-500/40"
                      whileHover={{ scale: 1.1 }}
                    >
                      +
                    </motion.span>
                  </span>
                </summary>
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 text-lg leading-relaxed text-white/90"
                >
                  {a}
                </motion.p>
              </motion.details>
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
