import { AUTHOR, CONTACT_EMAIL } from "@/lib/seo/siteConfig";
import { useTranslation } from "@/hooks/use-translation";
import { Link } from "wouter";

const LAST_UPDATED = "2026-06-03";
const LAST_REVIEWED = "2026-05-16";

type Props = {
  compact?: boolean;
};

export default function ContentAttribution({ compact = false }: Props) {
  const { t } = useTranslation();

  return (
    <aside
      className={`rounded-xl border border-slate-200 bg-white/80 text-sm text-slate-600 ${
        compact ? "mb-6 px-4 py-3" : "mb-8 px-5 py-4"
      }`}
      aria-label={t("trust", "attributionAria")}
    >
      <p>
        <span className="font-medium text-slate-800">{t("trust", "authorLabel")}:</span>{" "}
        <Link href="/author" className="text-emerald-700 underline-offset-2 hover:underline">
          {AUTHOR}
        </Link>
        {" · "}
        <span className="font-medium text-slate-800">{t("trust", "reviewerLabel")}:</span>{" "}
        Imam Afrim Osmani
      </p>
      <p className="mt-1">
        <span className="font-medium text-slate-800">{t("trust", "updatedLabel")}:</span> {LAST_UPDATED}
        {" · "}
        <span className="font-medium text-slate-800">{t("trust", "reviewedLabel")}:</span> {LAST_REVIEWED}
      </p>
      {!compact ? (
        <p className="mt-2">
          {t("trust", "attributionNote")}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-700 underline-offset-2 hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : null}
    </aside>
  );
}
