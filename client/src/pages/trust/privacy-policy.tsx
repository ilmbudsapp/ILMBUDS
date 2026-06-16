import { Link } from "wouter";
import PageMeta from "@/components/seo/PageMeta";
import LegalPrivacySections from "@/components/legal/LegalPrivacySections";
import ContentAttribution from "@/components/ContentAttribution";
import RelatedContent from "@/components/RelatedContent";
import { useLanguage } from "@/context/language-context";
import { CONTACT_EMAIL, PUBLISHER, SITE_URL } from "@/lib/seo/siteConfig";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const isDe = language === "de";
  const isEn = language === "en" || language === "sq" || language === "it";

  const title = isDe
    ? "Datenschutzerklärung"
    : isEn
      ? "Privacy Policy"
      : "Politika privatnosti";

  const description = isDe
    ? "Datenschutz, Cookies, AdSense, DSGVO-Rechte und Kontakt — ILMBUDS Datenschutzerklärung."
    : isEn
      ? "Privacy policy: data collection, cookies, Google AdSense, GDPR rights and children's privacy — ILMBUDS."
      : "Politika privatnosti: prikupljanje podataka, kolačići, Google AdSense, GDPR prava i privatnost djece — ILMBUDS.";

  return (
    <article className="mx-auto max-w-3xl">
      <PageMeta title={title} description={description} path="/privacy-policy" />
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase text-emerald-700">
          {isDe ? "Rechtliches" : isEn ? "Legal" : "Pravno"}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-600">{description}</p>
        <p className="mt-3 text-sm text-slate-500">
          {isDe ? "Zuletzt aktualisiert" : isEn ? "Last updated" : "Zadnje ažurirano"}: 4.{" "}
          {isDe ? "Juni" : isEn ? "June" : "juni"} 2026 · {SITE_URL}/privacy-policy
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
        <h2 className="text-lg font-bold text-emerald-900">
          {isDe ? "Kurzüberblick" : isEn ? "At a glance" : "Ukratko"}
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>{isDe ? "Kein Google Analytics auf der Website" : isEn ? "No Google Analytics on the website" : "Bez Google Analytics na web stranici"}</li>
          <li>{isDe ? "AdSense & YouTube nur nach Cookie-Einwilligung" : isEn ? "AdSense & YouTube only after cookie consent" : "AdSense i YouTube samo nakon suglasnosti za kolačiće"}</li>
          <li>{isDe ? "DSGVO-Rechte (EU)" : isEn ? "GDPR rights (EU users)" : "GDPR prava (korisnici u EU)"}</li>
          <li>{isDe ? "Kinder unter elterlicher Aufsicht" : isEn ? "Children under parental supervision" : "Djeca pod nadzorom roditelja"}</li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          {isDe ? "Kontakt" : isEn ? "Contact" : "Kontakt"}:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-700 underline-offset-2 hover:underline">
            {CONTACT_EMAIL}
          </a>
          {" · "}
          <Link href="/contact" className="text-emerald-700 underline-offset-2 hover:underline">
            /contact
          </Link>
        </p>
      </section>

      <div className="prose prose-slate max-w-none">
        <LegalPrivacySections />
      </div>

      <section className="mb-8 mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
        <h2 className="text-lg font-bold text-emerald-900">
          {isDe ? "Verwandte Seiten" : isEn ? "Related pages" : "Povezane stranice"}
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>
            <Link href="/terms" className="text-emerald-700 underline-offset-2 hover:underline">
              {isDe ? "Nutzungsbedingungen" : isEn ? "Terms of Service" : "Uslovi korištenja"}
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className="text-emerald-700 underline-offset-2 hover:underline">
              {isDe ? "Haftungsausschluss" : isEn ? "Disclaimer" : "Odricanje od odgovornosti"}
            </Link>
          </li>
          <li>
            <Link href="/about#legal" className="text-emerald-700 underline-offset-2 hover:underline">
              {isDe ? "Impressum" : isEn ? "Legal imprint" : "Impresum / pravne informacije"}
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          {PUBLISHER} · Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige, Deutschland
        </p>
      </section>

      <ContentAttribution compact />
      <RelatedContent
        links={[
          { href: "/contact", label: isDe ? "Kontakt" : isEn ? "Contact" : "Kontakt" },
          { href: "/editorial-policy", label: isDe ? "Redaktion" : isEn ? "Editorial policy" : "Urednička politika" },
          { href: "/about", label: isDe ? "Über uns" : isEn ? "About" : "O nama" },
        ]}
      />
    </article>
  );
}
