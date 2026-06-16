import type { LegalLang, LegalSection } from "@/legal/legalContent";

export type TrustPageKey = "terms" | "disclaimer" | "editorial" | "sources";

export type TrustPageMeta = {
  title: Record<LegalLang, string>;
  description: Record<LegalLang, string>;
  sections: Record<LegalLang, LegalSection[]>;
};

const termsBs: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Prihvatanje uslova",
    paragraphs: [
      "Korištenjem web stranice www.ilmbuds.com i ILMBUDS aplikacije prihvatate ove Uslove korištenja. Ako se ne slažete, molimo ne koristite uslugu.",
      "Operator usluge je AGRMULTIMEDIA — Agron Osmani, Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige, Njemačka.",
    ],
  },
  {
    id: "service",
    title: "2. Opis usluge",
    paragraphs: [
      "ILMBUDS pruža besplatni islamski edukativni sadržaj za djecu (4–12 godina) i roditelje: interaktivne priče, Kuran, ilmihal, kvizove, igre i crtane filmove na više jezika.",
      "Sadržaj je informativnog i obrazovnog karaktera. Ne zamjenjuje formalno islamsko obrazovanje u medresi, džamiji ili kod licenciranog učitelja.",
    ],
  },
  {
    id: "accounts",
    title: "3. Korisnički profili",
    paragraphs: [
      "Web verzija može pohranjivati lokalni profil (bodovi, bedževi) u pregledniku. Vi ste odgovorni za uređaj na kojem se profil koristi.",
      "Ne smijete zloupotrebljavati uslugu, automatski skrejati sadržaj u komercijalne svrhe bez pisane dozvole, niti ometati rad stranice.",
    ],
  },
  {
    id: "content",
    title: "4. Intelektualna svojina",
    paragraphs: [
      "Tekstovi, ilustracije, audio, dizajn i softver ILMBUDS-a zaštićeni su autorskim pravom. Dozvoljeno je osobno, nekomercijalno korištenje u obrazovne svrhe.",
      "Za reprodukciju, distribuciju ili javno prikazivanje većih dijelova sadržaja potrebna je prethodna saglasnost na agron6922@gmail.com.",
    ],
  },
  {
    id: "ads",
    title: "5. Oglašavanje",
    paragraphs: [
      "Web stranica može prikazivati oglase putem Google AdSense nakon vaše suglasnosti u cookie banneru. Oglašavanje pomaže održavanju besplatnog sadržaja.",
      "Google može koristiti kolačiće prema vlastitim pravilima. Detalji su u Politici privatnosti.",
    ],
  },
  {
    id: "liability",
    title: "6. Ograničenje odgovornosti",
    paragraphs: [
      "Trudimo se osigurati tačan i pouzdan sadržaj, ali ne garantujemo potpunu tačnost u svim detaljima. Za vjerske i obrazovne odluke konsultujte kvalificiranog imama ili učitelja.",
      "AGRMULTIMEDIA ne odgovara za indirektnu štetu nastalu korištenjem stranice, osim u slučajevima predviđenim obaveznim zakonom.",
    ],
  },
  {
    id: "changes",
    title: "7. Izmjene",
    paragraphs: [
      "Uslove možemo ažurirati. Datum zadnje izmjene: 3. jun 2026. Nastavak korištenja nakon objave smatra se prihvatanjem.",
    ],
  },
  {
    id: "law",
    title: "8. Mjerodavno pravo",
    paragraphs: [
      "Primjenjuje se pravo Savezne Republike Njemačke, uz obavezna prava potrošača u EU. Nadležni sud: prema sjedištu operatora, osim ako zakon ne propisuje drugačije.",
    ],
  },
];

const termsDe: LegalSection[] = termsBs.map((s) => ({
  ...s,
  title: s.title
    .replace("1. Prihvatanje uslova", "1. Geltung")
    .replace("2. Opis usluge", "2. Leistungsbeschreibung")
    .replace("3. Korisnički profili", "3. Nutzerprofile")
    .replace("4. Intelektualna svojina", "4. Urheberrecht")
    .replace("5. Oglašavanje", "5. Werbung")
    .replace("6. Ograničenje odgovornosti", "6. Haftungsbeschränkung")
    .replace("7. Izmjene", "7. Änderungen")
    .replace("8. Mjerodavno pravo", "8. Anwendbares Recht"),
  paragraphs: s.paragraphs.map((p) =>
    p
      .replace("Korištenjem", "Durch die Nutzung von www.ilmbuds.com")
      .replace("Operator usluge", "Anbieter")
      .replace("besplatni islamski edukativni sadržaj", "kostenlosen islamischen Bildungsinhalt")
      .replace("Uslove možemo ažurirati", "Wir können diese Bedingungen aktualisieren")
      .replace("Primjenjuje se pravo", "Es gilt deutsches Recht"),
  ),
}));

const termsEn: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance",
    paragraphs: [
      "By using www.ilmbuds.com and the ILMBUDS app you accept these Terms of Service. If you disagree, please do not use the service.",
      "The operator is AGRMULTIMEDIA — Agron Osmani, Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige, Germany.",
    ],
  },
  {
    id: "service",
    title: "2. Service description",
    paragraphs: [
      "ILMBUDS provides free Islamic educational content for children (ages 4–12) and parents: interactive stories, Quran, catechism, quizzes, games and cartoons in multiple languages.",
      "Content is informational and educational. It does not replace formal Islamic education at a mosque, madrasa or with a qualified teacher.",
    ],
  },
  {
    id: "accounts",
    title: "3. User profiles",
    paragraphs: [
      "The web version may store a local profile (points, badges) in your browser. You are responsible for the device used.",
      "You must not abuse the service, scrape content for commercial use without permission, or disrupt the website.",
    ],
  },
  {
    id: "content",
    title: "4. Intellectual property",
    paragraphs: [
      "ILMBUDS texts, illustrations, audio, design and software are protected by copyright. Personal, non-commercial educational use is permitted.",
      "For reproduction or distribution of substantial parts, contact agron6922@gmail.com in advance.",
    ],
  },
  {
    id: "ads",
    title: "5. Advertising",
    paragraphs: [
      "The website may show Google AdSense ads after you consent in the cookie banner. Advertising helps keep content free.",
      "Google may use cookies under its own policies. See our Privacy Policy at /privacy-policy for details.",
    ],
  },
  {
    id: "liability",
    title: "6. Limitation of liability",
    paragraphs: [
      "We strive for accurate content but do not guarantee completeness. For religious decisions consult a qualified imam or teacher.",
      "AGRMULTIMEDIA is not liable for indirect damages except where mandatory law applies.",
    ],
  },
  {
    id: "changes",
    title: "7. Changes",
    paragraphs: ["We may update these terms. Last updated: 3 June 2026. Continued use constitutes acceptance."],
  },
  {
    id: "law",
    title: "8. Governing law",
    paragraphs: [
      "German law applies, subject to mandatory consumer rights in the EU. Jurisdiction: courts at the operator's registered office unless otherwise required by law.",
    ],
  },
];

const disclaimerBs: LegalSection[] = [
  {
    id: "educational",
    title: "1. Obrazovni karakter",
    paragraphs: [
      "ILMBUDS je obrazovna platforma namijenjena djeci i roditeljima u dijaspori. Sadržaj je prilagođen uzrastu i prezentovan na razumljiv način.",
      "Informacije na stranici ne predstavljaju fetvu (vjerodostojno vjersko mišljenje) niti zamjenu za učenje kod kvalificiranog učitelja islama.",
    ],
  },
  {
    id: "accuracy",
    title: "2. Tačnost i ažuriranje",
    paragraphs: [
      "Sadržaj se redovno pregledava u saradnji sa Imam Afrim Osmani (islamski sadržaj) i timom AGRMULTIMEDIA. Ipak, mogu postojati greške ili zastarjele formulacije.",
      "Ako primijetite netočnost, kontaktirajte nas na agron6922@gmail.com — ispravke objavljujemo u razumnom roku.",
    ],
  },
  {
    id: "external",
    title: "3. Vanjski linkovi i video",
    paragraphs: [
      "Linkovi na Wikipedia, YouTube, Google Play i druge stranice vode na vanjske usluge s vlastitim pravilima. Ne kontrolišemo njihov sadržaj.",
      "YouTube crtani učitavaju se samo nakon vaše suglasnosti u cookie banneru.",
    ],
  },
  {
    id: "health",
    title: "4. Zdravlje i sigurnost djece",
    paragraphs: [
      "Roditelji su odgovorni za nadzor djece tokom korištenja interneta. Preporučujemo zajedničko učenje i razgovor o online sigurnosti.",
      "ILMBUDS ne prikuplja osjetljive podatke o djeci bez saglasnosti roditelja u smislu GDPR-a.",
    ],
  },
  {
    id: "no-warranty",
    title: "5. Bez garancije",
    paragraphs: [
      "Usluga se pruža „kakva jeste“. Ne garantujemo neprekidnu dostupnost, iako radimo na pouzdanom hostingu (Vercel).",
    ],
  },
];

const disclaimerEn: LegalSection[] = [
  {
    id: "educational",
    title: "1. Educational purpose",
    paragraphs: [
      "ILMBUDS is an educational platform for children and parents in the diaspora. Content is age-appropriate and presented in accessible language.",
      "Information on this site does not constitute a formal religious ruling (fatwa) and is not a substitute for learning with a qualified Islamic teacher.",
    ],
  },
  {
    id: "accuracy",
    title: "2. Accuracy and updates",
    paragraphs: [
      "Content is reviewed regularly with Imam Afrim Osmani (Islamic content) and the AGRMULTIMEDIA team. Errors or outdated wording may still occur.",
      "If you notice an inaccuracy, contact agron6922@gmail.com — we publish corrections within a reasonable time.",
    ],
  },
  {
    id: "external",
    title: "3. External links and video",
    paragraphs: [
      "Links to Wikipedia, YouTube, Google Play and other sites lead to third-party services with their own policies. We do not control their content.",
      "YouTube cartoons load only after your consent in the cookie banner.",
    ],
  },
  {
    id: "health",
    title: "4. Child safety",
    paragraphs: [
      "Parents are responsible for supervising children online. We recommend learning together and discussing internet safety.",
      "ILMBUDS does not collect sensitive children's data without parental consent under GDPR.",
    ],
  },
  {
    id: "no-warranty",
    title: "5. No warranty",
    paragraphs: [
      "The service is provided \"as is\". We do not guarantee uninterrupted availability, although we use reliable hosting (Vercel).",
    ],
  },
];

const editorialBs: LegalSection[] = [
  {
    id: "mission",
    title: "1. Misija uredništva",
    paragraphs: [
      "ILMBUDS objavljuje islamski edukativni sadržaj prilagođen djeci uzrasta 4–12 godina u dijaspori. Cilj je sigurno, strukturirano i višejezično učenje kod kuće.",
    ],
  },
  {
    id: "creation",
    title: "2. Kako nastaje sadržaj",
    paragraphs: [
      "Tekstove piše i uređuje Agron Osmani (AGRMULTIMEDIA) uz konsultacije sa Imam Afrim Osmani za vjersku tačnost.",
      "Priče, kvizovi i ilmihal teme strukturiraju se prema uzrastu. Ilustracije i audio biraju se ili kreiraju za jasnoću i pristupačnost.",
      "Machine-assisted alati mogu pomoći u prevodu ili formatiranju, ali finalni sadržaj uvijek pregledava ljudski urednik.",
    ],
  },
  {
    id: "standards",
    title: "3. Obrazovni standardi",
    paragraphs: [
      "Poštujemo sunitski islamski katekizam prilagođen djeci (Ahl al-Sunna). Izbjegavamo kontroverzne političke teme i sadržaj neprikladan za djecu.",
      "Koristimo jednostavan jezik, kratke pasuse, vizualne pomoći i interaktivne elemente (kvizovi, igre) za bolje pamćenje.",
    ],
  },
  {
    id: "review",
    title: "4. Proces provjere",
    paragraphs: [
      "Svaka veća sekcija (Kuran, ilmihal, priče) prolazi pregled prije objave. Datum zadnjeg pregleda prikazujemo na stranicama.",
      "Ispravke i dopune dokumentujemo; značajne promjene ažuriraju datum „Zadnje ažurirano“.",
    ],
  },
  {
    id: "corrections",
    title: "5. Ispravke i kontakt",
    paragraphs: [
      "Za prijavu greške koristite /contact ili agron6922@gmail.com. Ozbiljne vjerske greške imaju prioritet u ispravci.",
    ],
  },
];

const editorialEn: LegalSection[] = [
  {
    id: "mission",
    title: "1. Editorial mission",
    paragraphs: [
      "ILMBUDS publishes Islamic educational content for children aged 4–12 in the diaspora. Our goal is safe, structured, multilingual learning at home.",
    ],
  },
  {
    id: "creation",
    title: "2. How content is created",
    paragraphs: [
      "Texts are written and edited by Agron Osmani (AGRMULTIMEDIA) with review by Imam Afrim Osmani for religious accuracy.",
      "Stories, quizzes and catechism topics are structured by age. Illustrations and audio are chosen or created for clarity.",
      "Machine-assisted tools may help with translation or formatting, but final content is always reviewed by a human editor.",
    ],
  },
  {
    id: "standards",
    title: "3. Educational standards",
    paragraphs: [
      "We follow mainstream Sunni Islamic catechism adapted for children. We avoid controversial political topics and content unsuitable for children.",
      "We use simple language, short paragraphs, visual aids and interactive elements for better retention.",
    ],
  },
  {
    id: "review",
    title: "4. Review process",
    paragraphs: [
      "Major sections (Quran, catechism, stories) are reviewed before publication. We display the last review date on pages.",
      "Corrections are documented; significant changes update the \"Last updated\" date.",
    ],
  },
  {
    id: "corrections",
    title: "5. Corrections and contact",
    paragraphs: [
      "Report errors via /contact or agron6922@gmail.com. Serious religious inaccuracies are prioritised.",
    ],
  },
];

const sourcesBs: LegalSection[] = [
  {
    id: "quran",
    title: "1. Kuran",
    paragraphs: [
      "Tekst i audio sura koriste javno dostupne izvore i provjerene prijevode prilagođene edukativnom prikazu.",
      "Za dubinsko učenje preporučujemo tefsir kod kvalificiranog učitelja.",
    ],
  },
  {
    id: "ilmihal",
    title: "2. Ilmihal i vjerovanja",
    paragraphs: [
      "Sadržaj ilmihala temelji se na klasičnim sunitskim udžbenicima prilagođenim djeci (ibadet, vjerovanja, pet stubova).",
      "Formulacije su pojednostavljene; detaljna pravna pitanja (fiqh) zahtijevaju učenje kod imama.",
    ],
  },
  {
    id: "stories",
    title: "3. Priče i biografije",
    paragraphs: [
      "Priče o vjerovjesnicima i islamskim vrijednostima temelje se na Kuranu, hadisu (gdje je primjereno za djecu) i poučnim islamskim knjigama za djecu.",
      "Narativ je prilagođen uzrastu — fokus na pouku, ne na strah.",
    ],
  },
  {
    id: "references",
    title: "4. Opći reference",
    paragraphs: [
      "Wikipedia / Wikidata — za opće informacije (npr. biografije) uz provjeru urednika.",
      "Islamska enciklopedija i poučne publikacije preporučene u medresama za djecu.",
      "YouTube — samo kurirani edukativni crtani, nakon suglasnosti korisnika.",
    ],
  },
  {
    id: "factcheck",
    title: "5. Provjera činjenica",
    paragraphs: [
      "Korak 1: nacrt sadržaja prema uzrastu.",
      "Korak 2: provjera vjerske tačnosti (Imam Afrim Osmani).",
      "Korak 3: jezička i UX provjera (AGRMULTIMEDIA).",
      "Korak 4: objava s datumom ažuriranja i mogućnost ispravke.",
    ],
  },
];

const sourcesEn: LegalSection[] = [
  {
    id: "quran",
    title: "1. Quran",
    paragraphs: [
      "Text and audio of surahs use publicly available sources and verified translations adapted for educational display.",
      "For in-depth study we recommend tafsir with a qualified teacher.",
    ],
  },
  {
    id: "ilmihal",
    title: "2. Catechism and beliefs",
    paragraphs: [
      "Catechism content is based on mainstream Sunni textbooks adapted for children (worship, beliefs, five pillars).",
      "Wording is simplified; detailed legal questions (fiqh) require learning with an imam.",
    ],
  },
  {
    id: "stories",
    title: "3. Stories and biographies",
    paragraphs: [
      "Stories about prophets and Islamic values are based on the Quran, hadith (where age-appropriate) and educational Islamic books for children.",
      "Narrative is age-adapted — focus on lessons, not fear.",
    ],
  },
  {
    id: "references",
    title: "4. General references",
    paragraphs: [
      "Wikipedia / Wikidata — for general information with editor verification.",
      "Islamic encyclopedias and educational publications used in children's madrasas.",
      "YouTube — curated educational cartoons only, after user consent.",
    ],
  },
  {
    id: "factcheck",
    title: "5. Fact-checking process",
    paragraphs: [
      "Step 1: age-appropriate draft.",
      "Step 2: religious accuracy review (Imam Afrim Osmani).",
      "Step 3: language and UX review (AGRMULTIMEDIA).",
      "Step 4: publication with update date and correction channel.",
    ],
  },
];

export const TRUST_PAGES: Record<TrustPageKey, TrustPageMeta> = {
  terms: {
    title: {
      bs: "Uslovi korištenja",
      de: "Nutzungsbedingungen",
      en: "Terms of Service",
      sq: "Kushtet e përdorimit",
      it: "Termini di servizio",
    },
    description: {
      bs: "Uslovi korištenja ILMBUDS web stranice i aplikacije — prava, odgovornosti i oglašavanje.",
      de: "Nutzungsbedingungen für ILMBUDS — Rechte, Pflichten und Werbung.",
      en: "Terms of Service for ILMBUDS website and app — rights, responsibilities and advertising.",
      sq: "Kushtet e përdorimit të ILMBUDS.",
      it: "Termini di servizio di ILMBUDS.",
    },
    sections: { bs: termsBs, de: termsDe, en: termsEn, sq: termsEn, it: termsEn },
  },
  disclaimer: {
    title: {
      bs: "Odricanje od odgovornosti",
      de: "Haftungsausschluss",
      en: "Disclaimer",
      sq: "Mohim përgjegjësie",
      it: "Disclaimer",
    },
    description: {
      bs: "Obrazovni karakter ILMBUDS sadržaja, tačnost informacija i sigurnost djece online.",
      de: "Bildungscharakter, Genauigkeit und Kindersicherheit auf ILMBUDS.",
      en: "Educational nature of ILMBUDS content, accuracy and child safety online.",
      sq: "Karakteri edukativ i ILMBUDS.",
      it: "Natura educativa di ILMBUDS.",
    },
    sections: { bs: disclaimerBs, de: disclaimerEn, en: disclaimerEn, sq: disclaimerEn, it: disclaimerEn },
  },
  editorial: {
    title: {
      bs: "Urednička politika",
      de: "Redaktionelle Richtlinien",
      en: "Editorial Policy",
      sq: "Politika editoriale",
      it: "Politica editoriale",
    },
    description: {
      bs: "Kako ILMBUDS kreira, provjerava i ažurira islamski edukativni sadržaj za djecu.",
      de: "Wie ILMBUDS islamischen Bildungsinhalt erstellt und prüft.",
      en: "How ILMBUDS creates, reviews and updates Islamic educational content for children.",
      sq: "Si ILMBUDS krijon përmbajtje edukative.",
      it: "Come ILMBUDS crea contenuti educativi.",
    },
    sections: { bs: editorialBs, de: editorialEn, en: editorialEn, sq: editorialEn, it: editorialEn },
  },
  sources: {
    title: {
      bs: "Izvori i reference",
      de: "Quellen & Referenzen",
      en: "Sources & References",
      sq: "Burimet dhe referencat",
      it: "Fonti e riferimenti",
    },
    description: {
      bs: "Vjerski i obrazovni izvori, reference i proces provjere činjenica na ILMBUDS.",
      de: "Religiöse und Bildungsquellen sowie Fact-Checking auf ILMBUDS.",
      en: "Religious and educational sources and fact-checking on ILMBUDS.",
      sq: "Burimet dhe verifikimi i ILMBUDS.",
      it: "Fonti e verifica dei contenuti ILMBUDS.",
    },
    sections: { bs: sourcesBs, de: sourcesEn, en: sourcesEn, sq: sourcesEn, it: sourcesEn },
  },
};

export function getTrustSections(page: TrustPageKey, lang: LegalLang): LegalSection[] {
  const meta = TRUST_PAGES[page];
  if (lang === "bs") return meta.sections.bs;
  if (lang === "de") return meta.sections.de;
  return meta.sections.en;
}

export function getTrustTitle(page: TrustPageKey, lang: LegalLang): string {
  const meta = TRUST_PAGES[page];
  return meta.title[lang] ?? meta.title.en;
}

export function getTrustDescription(page: TrustPageKey, lang: LegalLang): string {
  const meta = TRUST_PAGES[page];
  return meta.description[lang] ?? meta.description.en;
}
