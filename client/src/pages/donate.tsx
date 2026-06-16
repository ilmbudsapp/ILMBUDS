import { Link } from "wouter";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/language-context";
import PageMeta from "@/components/seo/PageMeta";
import { CONTACT_EMAIL } from "@/lib/seo/siteConfig";
import ContentAttribution from "@/components/ContentAttribution";

export default function Donate() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isDe = language === "de";
  const isEn = language === "en" || language === "sq" || language === "it";

  const title = isDe ? "ILMBUDS unterstützen" : isEn ? "Support ILMBUDS" : "Podržite ILMBUDS";
  const description = isDe
    ? "Wie Sie ILMBUDS unterstützen können — kostenlose islamische Bildung für Kinder in der Diaspora."
    : isEn
      ? "How to support ILMBUDS — free Islamic education for children in the diaspora."
      : "Kako podržati ILMBUDS — besplatno islamsko obrazovanje za djecu u dijaspori.";

  return (
    <article className="mx-auto max-w-3xl">
      <PageMeta title={title} description={description} path="/donate" />
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      </header>

      <section className="mb-8 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
        <h2 className="text-xl font-bold text-emerald-900">
          {isDe ? "Warum ILMBUDS kostenlos ist" : isEn ? "Why ILMBUDS is free" : "Zašto je ILMBUDS besplatan"}
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {isDe
            ? "ILMBUDS wurde gegründet, damit muslimische Familien — unabhängig vom Einkommen — Zugang zu qualitativ hochwertigem Islam-Lernen für Kinder haben. Kerninhalte (Geschichten, Koran, Ilmihal, Quizze) bleiben kostenlos. Optional können Werbeanzeigen (Google AdSense) nach Ihrer Einwilligung angezeigt werden, um Hosting und Weiterentwicklung zu finanzieren."
            : isEn
              ? "ILMBUDS was founded so Muslim families — regardless of income — can access quality Islamic learning for children. Core content (stories, Quran, catechism, quizzes) remains free. Optional ads (Google AdSense) may display after your consent to fund hosting and development."
              : "ILMBUDS je osnovan da muslimanske porodice — bez obzira na prihode — imaju pristup kvalitetnom islamskom učenju za djecu. Osnovni sadržaj (priče, Kuran, ilmihal, kvizovi) ostaje besplatan. Opcioni oglasi (Google AdSense) mogu se prikazati nakon vaše suglasnosti radi finansiranja hostinga i razvoja."}
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          {isDe ? "Wie Sie helfen können" : isEn ? "How you can help" : "Kako možete pomoći"}
        </h2>
        <ul className="mt-4 space-y-4 text-slate-700">
          <li>
            <strong>{isDe ? "Empfehlen" : isEn ? "Share" : "Podijelite"}:</strong>{" "}
            {isDe
              ? "Erzählen Sie Freunden, Lehrern und Moscheen von ILMBUDS."
              : isEn
                ? "Tell friends, teachers and mosques about ILMBUDS."
                : "Recite prijateljima, učiteljima i džamijama o ILMBUDS."}
          </li>
          <li>
            <strong>{isDe ? "Feedback" : isEn ? "Feedback" : "Povratne informacije"}:</strong>{" "}
            <Link href="/contact" className="text-emerald-700 underline-offset-2 hover:underline">
              {t("ui", "contact")}
            </Link>
            {" — "}
            {isDe ? "Verbesserungsvorschläge helfen uns, besser zu werden." : "Suggestions help us improve."}
          </li>
          <li>
            <strong>{isDe ? "Partnerschaften" : isEn ? "Partnerships" : "Partnerstva"}:</strong>{" "}
            <Link href="/partners" className="text-emerald-700 underline-offset-2 hover:underline">
              {t("ui", "partners")}
            </Link>
          </li>
          <li>
            <strong>{isDe ? "Spenden" : isEn ? "Donations" : "Donacije"}:</strong>{" "}
            {isDe
              ? "Für direkte Spendenanfragen schreiben Sie an"
              : isEn
                ? "For direct donation inquiries email"
                : "Za direktne donacije pišite na"}{" "}
            <a href={`mailto:${CONTACT_EMAIL}?subject=ILMBUDS%20Donation`} className="text-emerald-700 underline-offset-2 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {isDe ? "Verwendung der Mittel" : isEn ? "Use of funds" : "Korištenje sredstava"}
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>{isDe ? "Entwicklung neuer Lektionen und Quizze" : isEn ? "Development of new lessons and quizzes" : "Razvoj novih lekcija i kvizova"}</li>
          <li>{isDe ? "Übersetzungen (BS, DE, EN, SQ, IT)" : "Translations (BS, DE, EN, SQ, IT)"}</li>
          <li>{isDe ? "Hosting und technische Infrastruktur (Vercel)" : "Hosting and infrastructure (Vercel)"}</li>
          <li>{isDe ? "Inhaltliche Prüfung und Qualitätssicherung" : "Content review and quality assurance"}</li>
        </ul>
      </section>

      <ContentAttribution compact />
    </article>
  );
}
