import { Link } from "wouter";
import { useTranslation } from "@/hooks/use-translation";
import PageMeta from "@/components/seo/PageMeta";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <PageMeta
        title={t("trust", "notFoundTitle")}
        description={t("trust", "notFoundDesc")}
        path="/404"
        noindex
      />
      <p className="text-6xl font-bold text-emerald-700" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">{t("trust", "notFoundTitle")}</h1>
      <p className="mt-3 text-slate-600">{t("trust", "notFoundDesc")}</p>
      <nav className="mt-8 flex flex-wrap justify-center gap-3" aria-label={t("ui", "mainMenuAria")}>
        <Link
          href="/"
          className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
        >
          {t("ui", "home")}
        </Link>
        <Link
          href="/stories"
          className="rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
        >
          {t("ui", "stories")}
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
        >
          {t("ui", "about")}
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
        >
          {t("ui", "contact")}
        </Link>
      </nav>
    </div>
  );
}
