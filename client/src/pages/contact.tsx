import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/language-context";
import PageMeta from "@/components/seo/PageMeta";
import { ContactForm } from "@/components/contact-form";
import ContentAttribution from "@/components/ContentAttribution";
import RelatedContent from "@/components/RelatedContent";
import { CONTACT_EMAIL, PUBLISHER } from "@/lib/seo/siteConfig";
import { Link } from "wouter";

export default function ContactPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isDe = language === "de";
  const isEn = language === "en" || language === "sq" || language === "it";

  const title = t("ui", "contact");
  const description = isDe
    ? "Kontaktieren Sie ILMBUDS — Fragen, Feedback, Korrekturen und Partnerschaften."
    : isEn
      ? "Contact ILMBUDS — questions, feedback, corrections and partnerships."
      : "Kontaktirajte ILMBUDS — pitanja, povratne informacije, ispravke i partnerstva.";

  return (
    <article className="mx-auto max-w-3xl">
      <PageMeta title={title} description={description} path="/contact" />
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      </header>

      <section className="mb-8 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
        <h2 className="text-lg font-bold text-emerald-900">
          {isDe ? "Direkter Kontakt" : isEn ? "Direct contact" : "Direktan kontakt"}
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>
            <span className="font-medium">{isDe ? "E-Mail" : "Email"}:</span>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-700 underline-offset-2 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <span className="font-medium">{isDe ? "Betreiber" : isEn ? "Operator" : "Operator"}:</span> {PUBLISHER}
          </li>
          <li>
            <span className="font-medium">{isDe ? "Adresse" : isEn ? "Address" : "Adresa"}:</span>{" "}
            Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige, Deutschland
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          {isDe
            ? "Wir antworten in der Regel innerhalb von 3–5 Werktagen. Für inhaltliche Korrekturen siehe auch unsere Redaktionelle Richtlinien."
            : isEn
              ? "We usually reply within 3–5 business days. For content corrections see our Editorial Policy."
              : "Obično odgovaramo u roku od 3–5 radnih dana. Za ispravke sadržaja pogledajte Uredničku politiku."}{" "}
          <Link href="/editorial-policy" className="text-emerald-700 underline-offset-2 hover:underline">
            {t("trust", "editorial")}
          </Link>
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">
          {isDe ? "Kontaktformular" : isEn ? "Contact form" : "Kontakt forma"}
        </h2>
        <div className="mt-4">
          <ContactForm onClose={() => {}} recipientEmail={CONTACT_EMAIL} />
        </div>
      </section>

      <ContentAttribution compact />
      <RelatedContent currentPath="/contact" />
    </article>
  );
}
