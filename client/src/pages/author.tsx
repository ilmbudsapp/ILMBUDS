import { Link } from "wouter";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/language-context";
import PageMeta from "@/components/seo/PageMeta";
import ContentAttribution from "@/components/ContentAttribution";
import RelatedContent from "@/components/RelatedContent";
import { AUTHOR, CONTACT_EMAIL, PUBLISHER, SITE_URL } from "@/lib/seo/siteConfig";

export default function AuthorPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isDe = language === "de";
  const isEn = language === "en" || language === "sq" || language === "it";

  const title = isDe
    ? "Autor & Team"
    : isEn
      ? "Author & Team"
      : "Autor i tim";
  const description = isDe
    ? "Agron Osmani und Imam Afrim Osmani — Wer hinter ILMBUDS steht, Expertise und Bildungsmission."
    : isEn
      ? "Agron Osmani and Imam Afrim Osmani — who creates ILMBUDS, expertise and educational mission."
      : "Agron Osmani i Imam Afrim Osmani — ko stoji iza ILMBUDS, stručnost i obrazovna misija.";

  return (
    <article className="mx-auto max-w-3xl">
      <PageMeta title={title} description={description} path="/author" type="article" />
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <section className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <img
            src="/images/agron.jpg"
            alt={AUTHOR}
            className="mx-auto h-32 w-32 rounded-full border-4 border-emerald-100 object-cover"
            width={128}
            height={128}
            loading="lazy"
          />
          <h2 className="mt-4 text-xl font-bold text-emerald-900">{AUTHOR}</h2>
          <p className="text-sm font-medium text-emerald-700">
            {isDe ? "Gründer & Entwickler" : isEn ? "Founder & Developer" : "Osnivač i developer"}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {isDe
              ? "Agron Osmani entwickelt ILMBUDS als kostenlose islamische Bildungsplattform für Kinder in der Diaspora. Er verantwortet Webentwicklung, UX, Mehrsprachigkeit und technische Infrastruktur über AGRMULTIMEDIA."
              : isEn
                ? "Agron Osmani builds ILMBUDS as a free Islamic education platform for children in the diaspora. He leads web development, UX, multilingual content and technical infrastructure via AGRMULTIMEDIA."
                : "Agron Osmani razvija ILMBUDS kao besplatnu islamsku obrazovnu platformu za djecu u dijaspori. Odgovoran je za web razvoj, UX, višejezičnost i tehničku infrastrukturu kroz AGRMULTIMEDIA."}
          </p>
          <ul className="mt-4 space-y-1 text-sm text-slate-600">
            <li>• {isDe ? "Web- & App-Entwicklung" : isEn ? "Web & app development" : "Web i app razvoj"}</li>
            <li>• {isDe ? "Bildungs-UX für Kinder" : isEn ? "Educational UX for children" : "Obrazovni UX za djecu"}</li>
            <li>• {isDe ? "Mehrsprachigkeit (BS, DE, EN, SQ, IT)" : "Multilingual (BS, DE, EN, SQ, IT)"}</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-50 text-4xl">
            ☪
          </div>
          <h2 className="mt-4 text-xl font-bold text-emerald-900">Imam Afrim Osmani</h2>
          <p className="text-sm font-medium text-emerald-700">
            {isDe ? "Islamische Inhaltsprüfung" : isEn ? "Islamic content review" : "Pregled islamskog sadržaja"}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {isDe
              ? "Imam Afrim Osmani prüft religiöse Inhalte auf ILMBUDS — Ilmihal, Geschichten, Glaubenslehre und Formulierungen für Kinder. Er stellt sicher, dass Inhalte altersgerecht und im Einklang mit dem sunnitischen Islam sind."
              : isEn
                ? "Imam Afrim Osmani reviews religious content on ILMBUDS — catechism, stories, beliefs and child-friendly wording. He ensures content is age-appropriate and aligned with mainstream Sunni Islam."
                : "Imam Afrim Osmani pregledava vjerski sadržaj na ILMBUDS — ilmihal, priče, vjerovanja i formulacije prilagođene djeci. Osigurava da je sadržaj prilagođen uzrastu i u skladu sa sunitskim islamom."}
          </p>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-amber-100 bg-amber-50/50 p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {isDe ? "Bildungsmission" : isEn ? "Educational mission" : "Obrazovna misija"}
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {isDe
            ? "ILMBUDS wurde geschaffen, damit muslimische Familien in Europa und weltweit sicheres, strukturiertes Islam-Lernen für Kinder zu Hause finden — ohne Paywall für Kerninhalte, mit Respekt vor Datenschutz und kindgerechtem Design."
            : isEn
              ? "ILMBUDS was created so Muslim families in Europe and worldwide can find safe, structured Islamic learning for children at home — without paywalls for core content, with respect for privacy and child-friendly design."
              : "ILMBUDS je stvoren da muslimanske porodice u Evropi i širom svijeta mogu pronaći sigurno, strukturirano islamsko učenje za djecu kod kuće — bez paywall-a za osnovni sadržaj, uz poštovanje privatnosti i dizajn prilagođen djeci."}
        </p>
        <p className="mt-3 text-sm text-slate-600">
          {PUBLISHER} · {SITE_URL}
        </p>
      </section>

      <ContentAttribution />
      <p className="mt-4 text-sm">
        <Link href="/editorial-policy" className="text-emerald-700 underline-offset-2 hover:underline">
          {t("trust", "editorial")}
        </Link>
        {" · "}
        <Link href="/sources" className="text-emerald-700 underline-offset-2 hover:underline">
          {t("trust", "sources")}
        </Link>
        {" · "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-700 underline-offset-2 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
      <RelatedContent currentPath="/author" />
    </article>
  );
}
