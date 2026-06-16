import { Link } from "wouter";
import type { ReactNode } from "react";
import { useTranslation } from "@/hooks/use-translation";
import PageMeta from "@/components/seo/PageMeta";
import ContentAttribution from "@/components/ContentAttribution";
import RelatedContent from "@/components/RelatedContent";

type TrustPageLayoutProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
  showRelated?: boolean;
};

export default function TrustPageLayout({
  title,
  description,
  path,
  children,
  showRelated = true,
}: TrustPageLayoutProps) {
  const { t } = useTranslation();

  return (
    <article className="web-trust-page mx-auto max-w-3xl">
      <PageMeta title={title} description={description} path={path} type="article" />
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          {t("ui", "about")}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
      </header>
      <ContentAttribution compact />
      <div className="prose prose-slate max-w-none prose-headings:text-emerald-900 prose-a:text-emerald-700">
        {children}
      </div>
      <nav
        className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 text-sm"
        aria-label={t("ui", "footerNavAria")}
      >
        <p className="mb-3 font-semibold text-emerald-900">{t("trust", "legalHubTitle")}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <li><Link href="/about" className="text-emerald-800 underline-offset-2 hover:underline">{t("ui", "about")}</Link></li>
          <li><Link href="/contact" className="text-emerald-800 underline-offset-2 hover:underline">{t("ui", "contact")}</Link></li>
          <li><Link href="/privacy-policy" className="text-emerald-800 underline-offset-2 hover:underline">{t("ui", "privacy")}</Link></li>
          <li><Link href="/terms" className="text-emerald-800 underline-offset-2 hover:underline">{t("trust", "terms")}</Link></li>
          <li><Link href="/disclaimer" className="text-emerald-800 underline-offset-2 hover:underline">{t("trust", "disclaimer")}</Link></li>
          <li><Link href="/editorial-policy" className="text-emerald-800 underline-offset-2 hover:underline">{t("trust", "editorial")}</Link></li>
          <li><Link href="/sources" className="text-emerald-800 underline-offset-2 hover:underline">{t("trust", "sources")}</Link></li>
          <li><Link href="/author" className="text-emerald-800 underline-offset-2 hover:underline">{t("trust", "author")}</Link></li>
        </ul>
      </nav>
      {showRelated ? <RelatedContent currentPath={path} /> : null}
    </article>
  );
}
