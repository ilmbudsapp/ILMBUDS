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
import { AUTHOR_SAME_AS, ORGANIZATION_SAME_AS, YOUTUBE_EMBED_SAMPLE } from "@/lib/seo/sameAs";

const FAQ = [
  {
    q: "Šta je ILMBUDS?",
    a: "ILMBUDS je besplatna islamska obrazovna web stranica za djecu sa pričama, Kuranom, ilmihalom, kvizovima i edukativnim igrama na pet jezika.",
  },
  {
    q: "Da li je ILMBUDS besplatan?",
    a: "Da, osnovni sadržaj na www.ilmbuds.com je besplatan za djecu i roditelje u 2026. godini.",
  },
  {
    q: "Na kojim jezicima radi ILMBUDS?",
    a: "Podržani su bosanski, njemački, engleski, albanski i italijanski jezik u interfejsu.",
  },
  {
    q: "Za koju starosnu grupu je namijenjen?",
    a: "Primarno za djecu uzrasta 4–12 godina i roditelje koji žele sigurno islamsko obrazovanje kod kuće.",
  },
  {
    q: "Zašto koristiti ILMBUDS umjesto samo YouTubea?",
    a: "ILMBUDS nudi strukturirane lekcije, kvizove i višejezični interfejs — YouTube je koristan, ali nije kurikulum.",
  },
  {
    q: "Kako kontaktirati autora?",
    a: `Pišite na ${CONTACT_EMAIL} ili posjetite stranicu Kontakt na /about#contact.`,
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
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: OG_IMAGE,
      description: SITE_DESCRIPTION,
      founder: { "@id": `${SITE_URL}#author` },
      parentOrganization: {
        "@type": "Organization",
        name: PUBLISHER,
        url: "https://agrmultimedia.eu",
      },
      sameAs: [...ORGANIZATION_SAME_AS],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        availableLanguage: ["bs", "en", "de", "sq", "it"],
      },
    });

    injectJsonLd("ld-author", {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}#author`,
      name: AUTHOR,
      jobTitle: "Islamic educational content author",
      worksFor: { "@type": "Organization", name: PUBLISHER, url: "https://agrmultimedia.eu" },
      url: `${SITE_URL}/about`,
      email: CONTACT_EMAIL,
      knowsAbout: ["Islamic education", "Children's education", "Multilingual learning"],
      sameAs: [...AUTHOR_SAME_AS],
    });

    injectJsonLd("ld-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: SITE_TAGLINE,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: ["bs", "en", "de", "sq", "it"],
      publisher: { "@id": `${SITE_URL}#organization` },
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
      author: { "@id": `${SITE_URL}#author` },
      dateModified: "2026-05-16",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
          "#static-seo-fallback h1",
          "#static-seo-fallback .seo-lead",
          "#seo-article .seo-lead",
          "#seo-article .seo-answer",
        ],
      },
    });

    injectJsonLd("ld-video", {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "ILMBUDS — Islamski crtani sadržaj za djecu",
      description: "Edukativni islamski crtani videozapisi za djecu dostupni u sekciji Crtani na ILMBUDS.",
      thumbnailUrl: "https://img.youtube.com/vi/AwW8s_r4g4w/hqdefault.jpg",
      embedUrl: YOUTUBE_EMBED_SAMPLE,
      uploadDate: "2026-01-01",
      publisher: { "@id": `${SITE_URL}#organization` },
    });

    injectJsonLd("ld-howto", {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Kako započeti učenje na ILMBUDS",
      description: "Tri koraka za roditelje i djecu da počnu učiti na ILMBUDS web stranici.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Otvorite početnu stranicu",
          text: "Posjetite www.ilmbuds.com i odaberite jezik u gornjem desnom uglu.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Odaberite sekciju",
          text: "Kliknite na Priče, Kuran, Ilmihal, Kviz ili Igre.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Učite uz roditelje",
          text: "Pratite napredak djeteta 15–20 minuta dnevno i ponavljajte lekcije.",
        },
      ],
    });
  }, []);

  return null;
}
