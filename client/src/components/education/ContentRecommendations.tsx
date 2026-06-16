import { Link } from "wouter";
import type { RelatedLink } from "@/content/education/types";

type ArticleCard = { href: string; title: string; readingTimeMin?: number };

type Props = {
  relatedLinks?: RelatedLink[];
  relatedArticles?: ArticleCard[];
  popularArticles?: ArticleCard[];
  title?: string;
};

export default function ContentRecommendations({
  relatedLinks = [],
  relatedArticles = [],
  popularArticles = [],
  title = "Preporučeno za učenje",
}: Props) {
  if (!relatedLinks.length && !relatedArticles.length && !popularArticles.length) return null;

  return (
    <aside className="mt-12 space-y-8 border-t border-emerald-100 pt-10">
      <h2 className="text-2xl font-bold text-emerald-900">{title}</h2>

      {relatedLinks.length > 0 ? (
        <section>
          <h3 className="text-lg font-semibold text-slate-800">Povezani sadržaj na ILMBUDS</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {relatedLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedArticles.length > 0 ? (
        <section>
          <h3 className="text-lg font-semibold text-slate-800">Srodni članci</h3>
          <ul className="mt-3 space-y-2">
            {relatedArticles.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-emerald-700 underline-offset-2 hover:underline">
                  {a.title}
                  {a.readingTimeMin ? (
                    <span className="ml-2 text-sm text-slate-500">· {a.readingTimeMin} min</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {popularArticles.length > 0 ? (
        <section>
          <h3 className="text-lg font-semibold text-slate-800">Popularno za čitanje</h3>
          <ul className="mt-3 space-y-2">
            {popularArticles.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-emerald-700 underline-offset-2 hover:underline">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </aside>
  );
}
