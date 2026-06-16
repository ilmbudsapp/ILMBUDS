import { useEffect } from "react";
import { AUTHOR, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo/siteConfig";
import type { BreadcrumbItem } from "./Breadcrumbs";
import type { FaqItem } from "@/content/education/types";

type Props = {
  id: string;
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  breadcrumbs: BreadcrumbItem[];
  faq?: FaqItem[];
};

export default function ArticleJsonLd({
  id,
  title,
  description,
  path,
  datePublished,
  dateModified,
  breadcrumbs,
  faq,
}: Props) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const scripts: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        dateModified,
        author: { "@type": "Person", name: AUTHOR, url: `${SITE_URL}/author` },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: { "@type": "ImageObject", url: OG_IMAGE },
        },
        image: OG_IMAGE,
        inLanguage: "bs",
        isAccessibleForFree: true,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.label,
          item: b.href ? `${SITE_URL}${b.href}` : url,
        })),
      },
    ];

    if (faq?.length) {
      scripts.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    const existing = document.getElementById(id);
    existing?.remove();
    const el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    el.text = JSON.stringify(scripts.length === 1 ? scripts[0] : scripts);
    document.head.appendChild(el);
    return () => el.remove();
  }, [id, title, description, path, datePublished, dateModified, breadcrumbs, faq]);

  return null;
}
