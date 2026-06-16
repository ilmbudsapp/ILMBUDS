import { useLanguage } from "@/context/language-context";
import TrustPageLayout from "@/components/trust/TrustPageLayout";
import {
  getTrustDescription,
  getTrustSections,
  getTrustTitle,
  type TrustPageKey,
} from "@/content/trustPages";
import type { LegalLang } from "@/legal/legalContent";

type Props = {
  page: TrustPageKey;
  path: string;
};

export default function TrustPageView({ page, path }: Props) {
  const { language } = useLanguage();
  const lang = (language as LegalLang) || "bs";
  const sections = getTrustSections(page, lang);
  const title = getTrustTitle(page, lang);
  const description = getTrustDescription(page, lang);

  return (
    <TrustPageLayout title={title} description={description} path={path}>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-8">
          <h2 className="text-xl font-bold text-emerald-900">{section.title}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 leading-relaxed text-slate-700 whitespace-pre-line">
              {p}
            </p>
          ))}
        </section>
      ))}
    </TrustPageLayout>
  );
}
