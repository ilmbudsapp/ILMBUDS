import { Link } from "wouter";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/language-context";
import { getHomeSeoAeo } from "@/content/homeSeoAeo";
import { YOUTUBE_EMBED_SAMPLE } from "@/lib/seo/sameAs";

function Answer({ children }: { children: React.ReactNode }) {
  return <p className="seo-answer mt-2 text-sm font-medium text-amber-100/95">{children}</p>;
}

function Kv({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="mt-2 text-white/90">
      <strong>{label}:</strong> {children}
    </p>
  );
}

export function HomeWebSeoContent() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const c = getHomeSeoAeo(language);

  return (
    <article className="web-glass-card mt-10" aria-labelledby="seo-intro-heading" id="seo-article">
      <h2 id="seo-intro-heading" className="sr-only">
        {c.whatIsTitle}
      </h2>
      <figure className="mb-4 flex justify-center">
        <img
          src="/images/ilmbuds_logo.png"
          width={120}
          height={120}
          alt={c.imgAlt}
          className="rounded-2xl border border-amber-400/30 shadow-lg"
          loading="lazy"
        />
      </figure>

      <p className="text-sm text-slate-300/90">
        {t("homeSeo", "authorLabel")}: <strong>Agron Osmani</strong> · {t("homeSeo", "updatedLabel")}{" "}
        <time dateTime="2026-05-16">{t("homeSeo", "updatedDate")}</time>
      </p>

      <p className="seo-lead web-text-muted mt-4 text-base leading-relaxed">{c.lead}</p>

      <nav className="web-seo-toc mt-8 rounded-xl border border-white/10 bg-black/20 p-4" aria-label={c.tocTitle}>
        <h2 className="text-lg font-bold text-amber-50">{c.tocTitle}</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-emerald-300">
          {c.tocItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="underline hover:text-emerald-200">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id={c.tocItems[0]?.id ?? "what-is"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.whatIsTitle}</h2>
        <Answer>{c.whatIsAnswer}</Answer>
        <p className="web-text-muted mt-4 leading-relaxed">
          <dfn>ILMBUDS</dfn> — {c.whatIsDef} {c.whatIsBody}
        </p>
        <Kv label={language === "bs" ? "Platforma" : "Platform"}>ILMBUDS Web + Android</Kv>
        <Kv label={language === "bs" ? "Ciljna grupa" : "Audience"}>
          {language === "bs" ? "Djeca 4–12 godina i roditelji" : "Children 4–12 and parents"}
        </Kv>
      </section>

      <section id={c.tocItems[1]?.id ?? "why"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.whyTitle}</h2>
        <Answer>{c.whyAnswer}</Answer>
        <p className="web-text-muted mt-4 leading-relaxed">{c.whyBody}</p>
        <h3 className="mt-6 text-lg font-semibold text-amber-100/95">
          {language === "bs" ? "Prednosti za vaše dijete" : "Benefits for your child"}
        </h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-white/90">
          <li>{t("homeSeo", "benefit1")}</li>
          <li>{t("homeSeo", "benefit2")}</li>
          <li>{t("homeSeo", "benefit3")}</li>
        </ul>
      </section>

      <section id={c.tocItems[2]?.id ?? "how"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.howTitle}</h2>
        <Answer>{c.howAnswer}</Answer>
        <h3 className="mt-4 text-lg font-semibold text-amber-100/95">
          {language === "bs" ? "Korak po korak" : "Step by step"}
        </h3>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-white/90">
          {c.howSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section id={c.tocItems[3]?.id ?? "languages"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.languagesTitle}</h2>
        <Answer>{c.languagesAnswer}</Answer>
        <p className="web-text-muted mt-4 leading-relaxed">{c.languagesBody}</p>
      </section>

      <section id={c.tocItems[4]?.id ?? "compare"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.compareTitle}</h2>
        <Answer>{c.compareAnswer}</Answer>
        <table className="mt-4 w-full border-collapse text-left text-sm text-white/90">
          <caption className="sr-only">{c.compareTitle}</caption>
          <thead>
            <tr className="border-b border-white/20">
              <th scope="col" className="py-2 pr-4 font-semibold text-amber-100">
                {language === "bs" ? "Stavka" : "Item"}
              </th>
              <th scope="col" className="py-2 font-semibold text-amber-100">
                {language === "bs" ? "ILMBUDS" : "ILMBUDS"}
              </th>
            </tr>
          </thead>
          <tbody>
            {c.compareRows.map((row) => (
              <tr key={row.label} className="border-b border-white/10">
                <td className="py-2 pr-4">
                  <strong>{row.label}:</strong>
                </td>
                <td className="py-2">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id={c.tocItems[5]?.id ?? "video"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.videoTitle}</h2>
        <Answer>{c.videoAnswer}</Answer>
        <p className="web-text-muted mt-4 leading-relaxed">{c.videoBody}</p>
        <p className="mt-3">
          <Link href="/cartoons" className="text-emerald-300 underline hover:text-emerald-200">
            {t("home", "cartoons")} →
          </Link>
        </p>
        <div className="mt-4 aspect-video max-w-md overflow-hidden rounded-xl border border-white/10">
          <iframe
            title={c.videoTitle}
            src={YOUTUBE_EMBED_SAMPLE}
            className="h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section id={c.tocItems[6]?.id ?? "stats"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.statsTitle}</h2>
        <Answer>{c.statsAnswer}</Answer>
        <dl className="mt-4 space-y-3">
          {c.stats.map((s) => (
            <div key={s.label} className="rounded-lg bg-white/5 p-3">
              <dt className="font-semibold text-amber-100">
                <strong>{s.label}:</strong> {s.value}
              </dt>
              <dd className="mt-1 text-xs text-slate-400">
                {language === "bs" ? "Izvor" : "Source"}: {s.source}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id={c.tocItems[7]?.id ?? "trust"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.trustTitle}</h2>
        <Answer>{c.trustAnswer}</Answer>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
          {c.trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id={c.tocItems[8]?.id ?? "tech"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.techTitle}</h2>
        <Answer>{c.techAnswer}</Answer>
        <h3 className="mt-4 text-base font-semibold text-amber-100/95">{c.codeLabel}</h3>
        <pre className="web-seo-code mt-2 overflow-x-auto rounded-lg border border-white/10 bg-slate-950/80 p-4 text-xs text-emerald-200">
          <code>{c.codeSample}</code>
        </pre>
      </section>

      <section id={c.tocItems[9]?.id ?? "tips"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.tipsTitle}</h2>
        <Answer>{c.tipsAnswer}</Answer>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
          {c.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.expertTitle}</h2>
        <Answer>{c.expertAnswer}</Answer>
        <blockquote className="mt-4 border-l-4 border-amber-400/60 pl-4 italic text-white/90">
          {c.expertQuote}
          <footer className="mt-2 text-sm not-italic text-slate-400">{c.expertAttribution}</footer>
        </blockquote>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.exampleTitle}</h2>
        <Answer>{c.exampleAnswer}</Answer>
        <p className="web-text-muted mt-4 leading-relaxed">{c.exampleBody}</p>
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-semibold text-amber-50">{t("homeSeo", "faqHeading")}</h3>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-semibold text-amber-100">{t("homeSeo", "faq1Question")}</dt>
            <dd className="mt-1 text-white/90">{t("homeSeo", "faq1Answer")}</dd>
          </div>
          <div>
            <dt className="font-semibold text-amber-100">{t("homeSeo", "faq2Question")}</dt>
            <dd className="mt-1 text-white/90">
              {t("homeSeo", "faq2AnswerBefore")}
              <Link href="/about#contact" className="underline">
                {t("homeSeo", "faq2ContactLink")}
              </Link>
              {t("homeSeo", "faq2AnswerAfter")}
            </dd>
          </div>
          {c.faqExtra.map((faq) => (
            <div key={faq.q}>
              <dt className="font-semibold text-amber-100">{faq.q}</dt>
              <dd className="mt-1 text-white/90">{faq.a}</dd>
            </div>
          ))}
        </dl>
        <details className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
          <summary className="cursor-pointer font-medium text-amber-50">{t("homeSeo", "appQuestion")}</summary>
          <p className="mt-2 text-sm text-white/90">{t("homeSeo", "appAnswer")}</p>
        </details>
      </section>

      <section id={c.tocItems[10]?.id ?? "takeaways"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.takeawaysTitle}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
          {c.takeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id={c.tocItems[11]?.id ?? "conclusion"} className="mt-10">
        <h2 className="text-2xl font-bold text-amber-50">{c.conclusionTitle}</h2>
        <Answer>{c.conclusionAnswer}</Answer>
        <p className="web-text-muted mt-4 leading-relaxed">{c.conclusionBody}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-amber-50">{c.sourcesTitle}</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {c.sources.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-8" aria-label={t("homeSeo", "exploreNavAria")}>
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

      <p className="mt-8 text-sm text-white/80">
        {t("homeSeo", "moreAboutPrefix")}{" "}
        <Link href="/about" className="underline">
          {t("ui", "about")}
        </Link>
        {" · "}
        <Link href="/about#privacy" className="underline">
          {t("homeSeo", "linkPrivacy")}
        </Link>
      </p>
    </article>
  );
}
