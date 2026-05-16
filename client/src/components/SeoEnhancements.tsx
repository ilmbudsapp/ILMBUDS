import { useEffect } from "react";
import {
  AUTHOR,
  CONTACT_EMAIL,
  OG_IMAGE,
  PUBLISHER,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo/siteConfig";

const FAQ = [
  {
    q: "Šta je ILMBUDS?",
    a: "ILMBUDS je islamska obrazovna web stranica za djecu sa pričama, Kuranom, ilmihalom, kvizovima i edukativnim igrama.",
  },
  {
    q: "Da li je ILMBUDS besplatan?",
    a: "Da, osnovni sadržaj na www.ilmbuds.com je besplatan za učenje i zabavu prilagođenu djeci.",
  },
  {
    q: "Na kojim jezicima radi ILMBUDS?",
    a: "Podržani su bosanski, njemački, engleski, albanski i italijanski jezik.",
  },
  {
    q: "Za koju starosnu grupu je namijenjen?",
    a: "Primarno za malu djecu i roditelje koji žele sigurno islamsko obrazovanje kod kuće ili u školi vikenda.",
  },
];

function injectJsonLd(id: string, data: Record<string, unknown>) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

export function SeoEnhancements() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    injectJsonLd("ld-organization", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: OG_IMAGE,
      description: SITE_DESCRIPTION,
      founder: { "@type": "Person", name: AUTHOR },
      parentOrganization: {
        "@type": "Organization",
        name: PUBLISHER,
        url: "https://agrmultimedia.eu",
      },
      sameAs: ["https://agrmultimedia.eu"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        availableLanguage: ["bs", "en", "de", "sq", "it"],
      },
    });

    injectJsonLd("ld-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: SITE_TAGLINE,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: ["bs", "en", "de", "sq", "it"],
      publisher: { "@type": "Organization", name: PUBLISHER },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    });

    injectJsonLd("ld-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });

    injectJsonLd("ld-webpage", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${SITE_NAME} — ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      inLanguage: "bs",
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      author: { "@type": "Person", name: AUTHOR },
      dateModified: "2026-05-16",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#static-seo-fallback h1", "#static-seo-fallback .seo-lead"],
      },
    });
  }, []);

  return null;
}
