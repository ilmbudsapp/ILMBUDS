import { Link } from "wouter";
import { useTranslation } from "@/hooks/use-translation";

const RELATED: Record<string, { href: string; labelKey: string; section: "ui" | "homeLanding" }[]> = {
  "/": [
    { href: "/stories", labelKey: "stories", section: "ui" },
    { href: "/quran", labelKey: "quran", section: "ui" },
    { href: "/catechism", labelKey: "catechism", section: "ui" },
    { href: "/quiz-categories", labelKey: "quiz", section: "ui" },
  ],
  default: [
    { href: "/", labelKey: "home", section: "ui" },
    { href: "/stories", labelKey: "stories", section: "ui" },
    { href: "/quran", labelKey: "quran", section: "ui" },
    { href: "/about", labelKey: "about", section: "ui" },
  ],
};

type Props = {
  currentPath: string;
};

export default function RelatedContent({ currentPath }: Props) {
  const { t } = useTranslation();
  const links = (RELATED[currentPath] ?? RELATED.default).filter((l) => l.href !== currentPath);

  if (links.length === 0) return null;

  return (
    <section className="mt-10 rounded-2xl border border-amber-100 bg-amber-50/50 p-5" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-lg font-bold text-slate-900">
        {t("trust", "relatedTitle")}
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50"
            >
              {t(item.section, item.labelKey as never)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
