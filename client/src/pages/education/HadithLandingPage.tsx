import { Link } from "wouter";
import PageMeta from "@/components/seo/PageMeta";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import ContentAttribution from "@/components/ContentAttribution";
import ContentRecommendations from "@/components/education/ContentRecommendations";
import {
  HADITH_COLLECTION,
  getFeaturedHadith,
} from "@/content/education/hadithCollection";
import { getWeeklyHighlights } from "@/content/education/weeklyHighlights";

export default function HadithLandingPage() {
  const featured = getFeaturedHadith();
  const weekly = getWeeklyHighlights();

  return (
    <article className="mx-auto max-w-4xl">
      <PageMeta
        title="Hadisi za djecu — islamski ahlak i pouke"
        description="Autentični hadisi iz Buharija, Muslima, Nawawija i Riyad us-Salihin — prilagođeno djeci 5–12 godina s objašnjenjima, lekcijama i pitanjima."
        path="/hadisi-za-djecu"
        type="article"
      />
      <Breadcrumbs
        items={[
          { label: "Početna", href: "/" },
          { label: "Hadisi za djecu" },
        ]}
      />

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Hadisi za djecu</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Allahov Poslanik ﷺ nam je ostavio riječi i primjere koji grade lijep karakter. Ovdje
          učimo kratke, autentične hadise iz pouzdanih zbirki — na način koji djeca razumiju i
          mogu primijeniti svaki dan.
        </p>
      </header>

      <section className="mb-10 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
        <h2 className="text-xl font-bold text-emerald-900">Zašto djeca uče hadise?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Hadis povezuje učenje iz Kurana sa stvarnim životom. Djeca brzo pamte kratke rečenice:
          budi iskren, pomozi sirotinji, poštuj roditelje, klanjaj namaz. U dijaspori, gdje roditelji
          često rade više poslova odjednom, hadisi daju jasne, tople smjernice bez zastrašivanja.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Jačaju razumijevanje sunneta i ljubavi prema Poslaniku ﷺ</li>
          <li>Uče ahlak kroz primjere iz škole, porodice i džamije</li>
          <li>Povezuju ilmihal, priče i kvizove u jednu cjelinu</li>
          <li>Svaki hadis ima izvor, lekcije i pitanja za razgovor kod kuće</li>
        </ul>
      </section>

      <section className="mb-10 rounded-2xl border border-amber-100 bg-amber-50/40 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">Hadis tjedna</p>
        <h2 className="mt-2 text-xl font-bold text-slate-900">{weekly.hadithOfWeek.title}</h2>
        <p className="mt-2 text-slate-700">{weekly.hadithOfWeek.description}</p>
        <Link
          href={weekly.hadithOfWeek.href}
          className="mt-4 inline-flex rounded-full bg-emerald-700 px-5 py-2 text-sm font-bold text-white hover:bg-emerald-800"
        >
          Pročitaj hadis tjedna →
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-emerald-900">Istaknuti hadisi</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {featured.map((h) => (
            <Link
              key={h.slug}
              href={`/hadisi-za-djecu/${h.slug}`}
              className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase text-emerald-600">{h.category}</span>
              <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-emerald-800">
                {h.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{h.metaDescription}</p>
              <span className="mt-3 inline-block text-sm font-medium text-emerald-700">
                Pročitaj →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-emerald-900">Svi hadisi ({HADITH_COLLECTION.length})</h2>
        <ul className="mt-6 divide-y divide-emerald-100 rounded-2xl border border-emerald-100 bg-white">
          {HADITH_COLLECTION.map((h) => (
            <li key={h.slug}>
              <Link
                href={`/hadisi-za-djecu/${h.slug}`}
                className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 hover:bg-emerald-50/50"
              >
                <span className="font-medium text-slate-900">{h.title}</span>
                <span className="text-sm text-slate-500">{h.collection}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContentAttribution compact />
      <ContentRecommendations
        relatedLinks={[
          { href: "/stories", label: "Priče" },
          { href: "/quran", label: "Kuran" },
          { href: "/catechism", label: "Ilmihal" },
          { href: "/quiz-categories", label: "Kvizovi" },
          { href: "/blog", label: "Centar znanja" },
          { href: "/hadith", label: "Hub: Hadis" },
        ]}
      />
    </article>
  );
}
