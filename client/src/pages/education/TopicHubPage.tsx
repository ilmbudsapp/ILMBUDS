import { Link, useLocation } from "wouter";
import PageMeta from "@/components/seo/PageMeta";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import ContentAttribution from "@/components/ContentAttribution";
import ContentRecommendations from "@/components/education/ContentRecommendations";
import { getArticlesByHubPath } from "@/content/education/blogArticles";
import { getHadithBySlug } from "@/content/education/hadithCollection";
import { getTopicHubByPath } from "@/content/education/topicHubs";
import NotFound from "@/pages/not-found";

export default function TopicHubPage() {
  const [location] = useLocation();
  const hub = getTopicHubByPath(location);

  if (!hub) return <NotFound />;

  const articles = getArticlesByHubPath(hub.path);
  const hadithItems = (hub.hadithSlugs ?? [])
    .map((s) => getHadithBySlug(s))
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-4xl">
      <PageMeta title={hub.title} description={hub.metaDescription} path={hub.path} type="article" />
      <Breadcrumbs items={[{ label: "Početna", href: "/" }, { label: "Centar znanja", href: "/blog" }, { label: hub.title }]} />

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{hub.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{hub.intro}</p>
      </header>

      <section className="mb-10 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
        <h2 className="text-xl font-bold text-emerald-900">{hub.whyTitle}</h2>
        {hub.whyParagraphs.map((p, i) => (
          <p key={i} className="mt-3 leading-relaxed text-slate-700">
            {p}
          </p>
        ))}
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {hub.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      {hadithItems.length > 0 ? (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-emerald-900">Povezani hadisi</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {hadithItems.map((h) => (
              <Link
                key={h!.slug}
                href={`/hadisi-za-djecu/${h!.slug}`}
                className="rounded-xl border border-emerald-100 bg-white p-4 hover:border-emerald-200"
              >
                <h3 className="font-bold text-slate-900">{h!.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{h!.metaDescription}</p>
              </Link>
            ))}
          </div>
          <Link href="/hadisi-za-djecu" className="mt-4 inline-block text-emerald-700 hover:underline">
            Svi hadisi →
          </Link>
        </section>
      ) : null}

      <section>
        <h2 className="text-xl font-bold text-emerald-900">Članci ({articles.length})</h2>
        <ul className="mt-4 divide-y divide-emerald-100 rounded-2xl border border-emerald-100 bg-white">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/blog/${a.slug}`}
                className="block px-5 py-4 hover:bg-emerald-50/50"
              >
                <p className="font-medium text-slate-900">{a.title}</p>
                <p className="mt-1 text-sm text-slate-500">{a.readingTimeMin} min · {a.updatedAt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContentAttribution compact />
      <ContentRecommendations
        relatedLinks={[
          { href: "/blog", label: "Centar znanja" },
          { href: "/hadisi-za-djecu", label: "Hadisi za djecu" },
          { href: "/stories", label: "Priče" },
          { href: "/quiz-categories", label: "Kvizovi" },
        ]}
      />
    </article>
  );
}
