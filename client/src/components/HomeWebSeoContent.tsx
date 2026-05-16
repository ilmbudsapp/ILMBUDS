import { Link } from "wouter";
import { useTranslation } from "@/hooks/use-translation";

export function HomeWebSeoContent() {
  const { t } = useTranslation();

  return (
    <article
      className="web-glass-card mt-10"
      aria-labelledby="seo-intro-heading"
    >
      <p className="text-sm text-slate-300/90">
        {t("homeSeo", "authorLabel")}: <strong>Agron Osmani</strong> · {t("homeSeo", "updatedLabel")}{" "}
        <time dateTime="2026-05-16">{t("homeSeo", "updatedDate")}</time>
      </p>

      <h2 id="seo-intro-heading" className="mt-2 text-2xl font-bold text-amber-50">
        {t("homeSeo", "whyChooseHeading")}
      </h2>
      <p className="seo-lead web-text-muted mt-3 text-base leading-relaxed">
        {t("homeSeo", "leadParagraph")}
      </p>

      <nav className="mt-6" aria-label={t("homeSeo", "exploreNavAria")}>
        <h3 className="text-lg font-semibold text-amber-100/95">{t("homeSeo", "exploreHeading")}</h3>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          <li>
            <Link href="/stories" className="text-emerald-300 underline hover:text-emerald-200">
              {t("ui", "stories")}
            </Link>
          </li>
          <li>
            <Link href="/quran" className="text-emerald-300 underline hover:text-emerald-200">
              {t("ui", "quran")}
            </Link>
          </li>
          <li>
            <Link href="/catechism" className="text-emerald-300 underline hover:text-emerald-200">
              {t("ui", "catechism")}
            </Link>
          </li>
          <li>
            <Link href="/quiz-categories" className="text-emerald-300 underline hover:text-emerald-200">
              {t("ui", "quiz")}
            </Link>
          </li>
          <li>
            <Link href="/mini-games" className="text-emerald-300 underline hover:text-emerald-200">
              {t("games", "title")}
            </Link>
          </li>
          <li>
            <Link href="/cartoons" className="text-emerald-300 underline hover:text-emerald-200">
              {t("home", "cartoons")}
            </Link>
          </li>
        </ul>
      </nav>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">{t("homeSeo", "faqHeading")}</h3>
        <dl className="mt-2 space-y-3">
          <div>
            <dt className="font-semibold">{t("homeSeo", "faq1Question")}</dt>
            <dd className="text-white/90">{t("homeSeo", "faq1Answer")}</dd>
          </div>
          <div>
            <dt className="font-semibold">{t("homeSeo", "faq2Question")}</dt>
            <dd className="text-white/90">
              {t("homeSeo", "faq2AnswerBefore")}
              <Link href="/about#contact" className="underline">
                {t("homeSeo", "faq2ContactLink")}
              </Link>
              {t("homeSeo", "faq2AnswerAfter")}
            </dd>
          </div>
        </dl>
        <details className="mt-4 rounded-xl bg-white/10 p-3">
          <summary className="cursor-pointer font-medium">{t("homeSeo", "appQuestion")}</summary>
          <p className="mt-2 text-sm text-white/90">{t("homeSeo", "appAnswer")}</p>
        </details>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">{t("homeSeo", "benefitsHeading")}</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-white/90">
          <li>{t("homeSeo", "benefit1")}</li>
          <li>{t("homeSeo", "benefit2")}</li>
          <li>{t("homeSeo", "benefit3")}</li>
        </ul>
      </section>

      <p className="mt-6 text-sm text-white/80">
        {t("homeSeo", "moreAboutPrefix")}{" "}
        <Link href="/about" className="underline">
          {t("ui", "about")}
        </Link>
        {" · "}
        <Link href="/about#privacy" className="underline">
          {t("homeSeo", "linkPrivacy")}
        </Link>
        {" · "}
        <a
          href="https://schema.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Schema.org
        </a>
        {" · "}
        <a
          href="https://agrmultimedia.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          AGRMULTIMEDIA
        </a>
      </p>
    </article>
  );
}
