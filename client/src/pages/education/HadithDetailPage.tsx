import { Link, useRoute } from "wouter";
import PageMeta from "@/components/seo/PageMeta";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import ArticleJsonLd from "@/components/education/ArticleJsonLd";
import ContentAttribution from "@/components/ContentAttribution";
import ContentRecommendations from "@/components/education/ContentRecommendations";
import { getHadithBySlug, HADITH_COLLECTION } from "@/content/education/hadithCollection";
import NotFound from "@/pages/not-found";

export default function HadithDetailPage() {
  const [, params] = useRoute("/hadisi-za-djecu/:slug");
  const slug = params?.slug ?? "";
  const hadith = getHadithBySlug(slug);

  if (!hadith) return <NotFound />;

  const path = `/hadisi-za-djecu/${hadith.slug}`;
  const breadcrumbs = [
    { label: "Početna", href: "/" },
    { label: "Hadisi za djecu", href: "/hadisi-za-djecu" },
    { label: hadith.title },
  ];

  const relatedHadith = HADITH_COLLECTION.filter((h) => h.slug !== hadith.slug)
    .slice(0, 4)
    .map((h) => ({
      href: `/hadisi-za-djecu/${h.slug}`,
      title: h.title,
    }));

  const faq = [
    {
      q: `Odakle je hadis "${hadith.title}"?`,
      a: `Ovaj hadis je preuzet iz ${hadith.collection}. Referenca: ${hadith.source}.`,
    },
    {
      q: "Za koji uzrast je ovo objašnjenje?",
      a: "Sadržaj je prilagođen djeci uzrasta 5–12 godina, uz savjet da roditelji dodatno objasne prema zrelosti djeteta.",
    },
    {
      q: "Da li ovo zamjenjuje učenje kod imama?",
      a: "Ne. ILMBUDS je edukativni resurs. Za detaljna vjerska pitanja konsultujte imama ili učitelja vikend škole.",
    },
  ];

  return (
    <article className="mx-auto max-w-3xl">
      <PageMeta title={hadith.title} description={hadith.metaDescription} path={path} type="article" />
      <ArticleJsonLd
        id="ld-hadith-article"
        title={hadith.title}
        description={hadith.metaDescription}
        path={path}
        datePublished={hadith.updatedAt}
        dateModified={hadith.updatedAt}
        breadcrumbs={breadcrumbs}
        faq={faq}
      />
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase text-emerald-700">{hadith.category}</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">{hadith.title}</h1>
        <p className="mt-2 text-sm text-slate-500">
          Izvor: {hadith.source} · {hadith.collection}
          {hadith.narrator ? ` · Prenosilac: ${hadith.narrator}` : ""}
        </p>
        <p className="mt-1 text-sm text-slate-500">Zadnje ažurirano: {hadith.updatedAt}</p>
      </header>

      <blockquote className="mb-8 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50/60 p-6 italic text-slate-800">
        „{hadith.hadithText}"
      </blockquote>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-emerald-900">Objašnjenje za djecu</h2>
        {hadith.childExplanation.split("\n\n").map((p, i) => (
          <p key={i} className="mt-3 leading-relaxed text-slate-700">
            {p}
          </p>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-emerald-900">Šta možemo naučiti?</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {hadith.lessons.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-emerald-900">Praktični primjeri</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {hadith.practicalExamples.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-emerald-900">Pitanja za razmišljanje</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          {hadith.reflectionQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </section>

      <section className="mb-8 rounded-2xl border border-emerald-100 bg-white p-5">
        <h2 className="text-lg font-bold text-emerald-900">Nastavi učenje</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {hadith.relatedStoryHref ? (
            <Link href={hadith.relatedStoryHref} className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-200">
              Priče
            </Link>
          ) : null}
          <Link href="/quran" className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-200">
            Kuran
          </Link>
          <Link href="/catechism" className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-200">
            Ilmihal
          </Link>
          {hadith.relatedQuizHref ? (
            <Link href={hadith.relatedQuizHref} className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-200">
              Kviz
            </Link>
          ) : null}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-emerald-900">Česta pitanja</h2>
        <div className="mt-4 space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
              <summary className="cursor-pointer font-medium text-slate-900">{f.q}</summary>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <ContentAttribution compact />
      <ContentRecommendations
        relatedLinks={hadith.relatedLinks}
        relatedArticles={relatedHadith}
      />
    </article>
  );
}
