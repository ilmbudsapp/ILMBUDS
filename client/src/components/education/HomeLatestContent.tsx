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
    <section id="latest-content" className="bg-[#F8F5EC] py-24" aria-labelledby="latest-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold text-emerald-700">Svježe za učenje</p>
          <h2 id="latest-heading" className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            Priča, hadis i kviz tjedna
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            ILMBUDS raste svake sedmice — novi članci, hadisi i preporuke za porodično učenje.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Priča tjedna", item: weekly.storyOfWeek, icon: "📖" },
            { label: "Hadis tjedna", item: weekly.hadithOfWeek, icon: "📜" },
            { label: "Kviz tjedna", item: weekly.quizOfWeek, icon: "🧠" },
          ].map((w, i) => (
            <motion.div key={w.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                href={w.item.href}
                className="flex h-full flex-col rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden>{w.icon}</span>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-emerald-600">{w.label}</p>
                <h3 className="mt-2 text-xl font-black text-emerald-900">{w.item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{w.item.description}</p>
                <span className="mt-4 text-sm font-bold text-emerald-700">Pročitaj →</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-slate-900">Najnoviji članci</h3>
              <Link href="/blog" className="text-sm font-bold text-emerald-700 hover:underline">
                Centar znanja →
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {latestArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="block rounded-2xl border border-emerald-100 bg-white p-4 hover:border-emerald-200"
                  >
                    <p className="font-bold text-slate-900">{a.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{a.readingTimeMin} min čitanja</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-slate-900">Hadisi za djecu</h3>
              <Link href="/hadisi-za-djecu" className="text-sm font-bold text-emerald-700 hover:underline">
                Svi hadisi →
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {featuredHadith.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/hadisi-za-djecu/${h.slug}`}
                    className="block rounded-2xl border border-emerald-100 bg-white p-4 hover:border-emerald-200"
                  >
                    <p className="font-bold text-slate-900">{h.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600">{h.metaDescription}</p>
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
