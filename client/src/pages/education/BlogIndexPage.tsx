import { Link } from "wouter";
import PageMeta from "@/components/seo/PageMeta";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import ContentAttribution from "@/components/ContentAttribution";
import {
  BLOG_ARTICLES,
  getLatestArticles,
  getPopularArticles,
} from "@/content/education/blogArticles";
import { getAllTopicHubPaths, getTopicHubByPath } from "@/content/education/topicHubs";

const HUB_LABELS: Record<string, string> = {
  "/prophets": "Proroci",
  "/hadith": "Hadis",
  "/islamic-values": "Vrijednosti",
  "/dua-for-children": "Duae",
  "/arabic-learning": "Arapski",
};

export default function BlogIndexPage() {
  const latest = getLatestArticles(6);
  const popular = getPopularArticles().slice(0, 6);

  return (
    <article className="mx-auto max-w-4xl">
      <PageMeta
        title="Centar znanja — islamska edukacija za djecu"
        description="Preko 30 edukativnih članaka za muslimansku djecu u dijaspori: proroci, vrijednosti, arapski, duae, ramadan, namaz i porodica."
        path="/blog"
        type="article"
      />
      <Breadcrumbs items={[{ label: "Početna", href: "/" }, { label: "Centar znanja" }]} />

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Centar znanja</h1>
        <p className="mt-4 text-lg text-slate-600">
          Duboki, originalni članci za roditelje i djecu — proroci, islamski ahlak, učenje arapskog,
          duae, ramadan i svakodnevni islamski život u dijaspori.
        </p>
        <p className="mt-2 text-sm text-slate-500">{BLOG_ARTICLES.length} članaka · ažurirano 2026</p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-emerald-900">Teme (hubovi)</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {getAllTopicHubPaths().map((p) => {
            const hub = getTopicHubByPath(p);
            if (!hub) return null;
            return (
              <Link
                key={p}
                href={p}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 hover:border-emerald-200 hover:shadow-sm"
              >
                <h3 className="font-bold text-emerald-900">{hub.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{hub.metaDescription}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-emerald-900">Popularno za čitanje</h2>
        <ul className="mt-4 space-y-3">
          {popular.map((a) => (
            <li key={a.slug}>
              <Link href={`/blog/${a.slug}`} className="group block rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-200">
                <span className="text-xs font-medium text-emerald-600">{HUB_LABELS[a.hubPath] ?? a.topic}</span>
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-800">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{a.readingTimeMin} min čitanja</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-emerald-900">Svi članci</h2>
        <ul className="mt-4 divide-y divide-emerald-100 rounded-2xl border border-emerald-100 bg-white">
          {BLOG_ARTICLES.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/blog/${a.slug}`}
                className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 hover:bg-emerald-50/50"
              >
                <div>
                  <span className="text-xs text-emerald-600">{HUB_LABELS[a.hubPath] ?? a.topic}</span>
                  <p className="font-medium text-slate-900">{a.title}</p>
                </div>
                <span className="text-sm text-slate-500">{a.readingTimeMin} min</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8">
        <Link href="/hadisi-za-djecu" className="text-emerald-700 underline-offset-2 hover:underline">
          → Hadisi za djecu
        </Link>
      </div>
      <ContentAttribution compact />
    </article>
  );
}
