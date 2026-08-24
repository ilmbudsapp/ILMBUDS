import { Link } from "wouter";
import { motion } from "framer-motion";
import { getLatestArticles, getPopularArticles } from "@/content/education/blogArticles";
import { getFeaturedHadith } from "@/content/education/hadithCollection";
import { getWeeklyHighlights } from "@/content/education/weeklyHighlights";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

export function HomeLatestContent() {
  const weekly = getWeeklyHighlights();
  const latestArticles = getLatestArticles(3);
  const popularArticles = getPopularArticles().slice(0, 3);
  const featuredHadith = getFeaturedHadith().slice(0, 3);

  return (
    <section id="latest-content" className="relative overflow-hidden py-28" aria-labelledby="latest-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/20 to-white"></div>
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wider text-violet-700 shadow-lg"
          >
            Svježe za učenje
          </motion.p>
          <motion.h2 
            id="latest-heading" 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-4xl font-black text-slate-900 md:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Priča, hadis i kviz tjedna
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl font-medium text-slate-600"
          >
            ILMBUDS raste svake sedmice — novi članci, hadisi i preporuke za porodično učenje.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {[
            { label: "Priča tjedna", item: weekly.storyOfWeek, icon: "📖" },
            { label: "Hadis tjedna", item: weekly.hadithOfWeek, icon: "📜" },
            { label: "Kviz tjedna", item: weekly.quizOfWeek, icon: "🧠" },
          ].map((w, i) => (
            <motion.div 
              key={w.label} 
              custom={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={w.item.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-white/60 bg-white/70 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-violet-200 hover:bg-white/90 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]"
              >
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-violet-400/0 via-purple-400/0 to-fuchsia-400/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-400/20 group-hover:via-purple-400/10 group-hover:to-fuchsia-400/20 group-hover:opacity-100" aria-hidden></div>
                
                <span className="relative text-4xl transition-transform duration-300 group-hover:scale-110" aria-hidden>{w.icon}</span>
                <p className="relative mt-4 text-xs font-black uppercase tracking-wide text-violet-600">{w.label}</p>
                <h3 className="relative mt-2 text-xl font-black text-slate-900 transition-colors duration-300 group-hover:text-violet-700">{w.item.title}</h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600">{w.item.description}</p>
                <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-black text-violet-600 transition-all duration-300 group-hover:gap-3">
                  Pročitaj <span>→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-slate-900">Najnoviji članci</h3>
              <Link href="/blog" className="text-sm font-black text-violet-600 transition-colors hover:text-violet-700">
                Centar znanja →
              </Link>
            </div>
            <ul className="mt-5 space-y-4">
              {latestArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group block rounded-2xl border-2 border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-violet-200 hover:bg-white/90 hover:shadow-xl"
                  >
                    <p className="font-black text-slate-900 transition-colors duration-300 group-hover:text-violet-700">{a.title}</p>
                    <p className="mt-2 text-sm font-medium text-slate-500">{a.readingTimeMin} min čitanja</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-slate-900">Hadisi za djecu</h3>
              <Link href="/hadisi-za-djecu" className="text-sm font-black text-violet-600 transition-colors hover:text-violet-700">
                Svi hadisi →
              </Link>
            </div>
            <ul className="mt-5 space-y-4">
              {featuredHadith.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/hadisi-za-djecu/${h.slug}`}
                    className="group block rounded-2xl border-2 border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-violet-200 hover:bg-white/90 hover:shadow-xl"
                  >
                    <p className="font-black text-slate-900 transition-colors duration-300 group-hover:text-violet-700">{h.title}</p>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600">{h.metaDescription}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-black text-slate-900">Popularno za čitanje</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {popularArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
              >
                {a.title}
              </Link>
            ))}
            <Link
              href="/prophets"
              className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-100"
            >
              Proroci
            </Link>
            <Link
              href="/islamic-values"
              className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-100"
            >
              Vrijednosti
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
