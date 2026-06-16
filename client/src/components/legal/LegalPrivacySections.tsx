import { useLanguage } from "@/context/language-context";
import { getPrivacySections, type LegalLang } from "@/legal/legalContent";

export default function LegalPrivacySections() {
  const { currentLanguage } = useLanguage();
  const lang = (["bs", "en", "de", "sq", "it"].includes(currentLanguage)
    ? currentLanguage
    : "en") as LegalLang;
  const sections = getPrivacySections(lang);

  return (
    <div className="space-y-6 text-sm text-gray-700">
      {sections.map((section) => (
        <section key={section.id}>
          <h4 className="mb-2 text-base font-bold text-emerald-900">{section.title}</h4>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mb-2 whitespace-pre-line leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
