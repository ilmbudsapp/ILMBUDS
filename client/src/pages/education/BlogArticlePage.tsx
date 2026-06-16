import { Link, useRoute } from "wouter";
import PageMeta from "@/components/seo/PageMeta";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import ArticleJsonLd from "@/components/education/ArticleJsonLd";
import ContentAttribution from "@/components/ContentAttribution";
import ContentRecommendations from "@/components/education/ContentRecommendations";
import EducationalIllustration, {
  illustrationForBlogTopic,
} from "@/components/education/EducationalIllustration";
import HumanizationSections from "@/components/education/HumanizationSections";
import { getBlogSupplement } from "@/content/education/contentSupplements";
import { getBlogBySlug, getPopularArticles } from "@/content/education/blogArticles";
import NotFound from "@/pages/not-found";

const HUB_LABELS: Record<string, string> = {
  "/prophets": "Proroci",
  "/hadith": "Hadis",
  "/islamic-values": "Islamski vrijednosti",
  "/dua-for-children": "Duae za djecu",
  "/arabic-learning": "Učenje arapskog",
};

export default function BlogArticlePage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const article = getBlogBySlug(slug);

  if (!article) return <NotFound />;

  const supplement = getBlogSupplement(article.slug, article.title);
  const illustration = illustrationForBlogTopic(article.topic);

  const path = `/blog/${article.slug}`;
  const breadcrumbs = [
    { label: "Početna", href: "/" },
    { label: "Centar znanja", href: "/blog" },
    ...(article.hubPath
      ? [{ label: HUB_LABELS[article.hubPath] ?? article.topic, href: article.hubPath }]
      : []),
    { label: article.title },
  ];

  const relatedArticles = article.relatedSlugs
    .map((s) => getBlogBySlug(s))
    .filter(Boolean)
    .map((a) => ({
      href: `/blog/${a!.slug}`,
      title: a!.title,
      readingTimeMin: a!.readingTimeMin,
    }));

  const popular = getPopularArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4)
    .map((a) => ({ href: `/blog/${a.slug}`, title: a.title }));

  return (
    <article className="mx-auto max-w-3xl">
      <PageMeta title={article.title} description={article.metaDescription} path={path} type="article" />
      <ArticleJsonLd
        id="ld-blog-article"
        title={article.title}
        description={article.metaDescription}
        path={path}
        datePublished={article.publishedAt}
        dateModified={article.updatedAt}
        breadcrumbs={breadcrumbs}
        faq={article.faq}
      />
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase text-emerald-700">
          {HUB_LABELS[article.hubPath] ?? article.topic}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{article.metaDescription}</p>
        <p className="mt-3 text-sm text-slate-500">
          {article.readingTimeMin} min čitanja · Objavljeno: {article.publishedAt} · Ažurirano:{" "}
          {article.updatedAt}
        </p>
      </header>

      <EducationalIllustration illustration={illustration} caption={article.title} />

      <div className="prose prose-slate max-w-none prose-headings:text-emerald-900">
        {article.sections.map((section, i) => (
          <section key={i} className="mb-8">
            {section.heading ? (
              <h2 className="text-xl font-bold text-emerald-900">{section.heading}</h2>
            ) : null}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="mt-3 leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <HumanizationSections supplement={supplement} />

      {article.faq.length > 0 ? (
        <section className="mb-8 mt-10">
          <h2 className="text-xl font-bold text-emerald-900">Česta pitanja</h2>
          <div className="mt-4 space-y-3">
            {article.faq.map((f) => (
              <details key={f.q} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <summary className="cursor-pointer font-medium text-slate-900">{f.q}</summary>
                <p className="mt-2 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {article.references.length > 0 ? (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-emerald-900">Reference i izvori</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {article.references.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-slate-500">
            Više o našem pristupu:{" "}
            <Link href="/sources" className="text-emerald-700 hover:underline">
              Izvori i reference
            </Link>
            {" · "}
            <Link href="/editorial-policy" className="text-emerald-700 hover:underline">
              Urednička politika
            </Link>
          </p>
        </section>
      ) : null}

      <ContentAttribution compact />
      <ContentRecommendations
        relatedLinks={article.relatedLinks}
        relatedArticles={relatedArticles}
        popularArticles={popular}
      />
    </article>
  );
}
