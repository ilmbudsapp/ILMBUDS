import type { Language } from "@shared/translations";

export type HomeSeoAeo = {
  tocTitle: string;
  tocItems: { id: string; label: string }[];
  lead: string;
  whatIsTitle: string;
  whatIsAnswer: string;
  whatIsDef: string;
  whatIsBody: string;
  whyTitle: string;
  whyAnswer: string;
  whyBody: string;
  howTitle: string;
  howAnswer: string;
  howSteps: string[];
  languagesTitle: string;
  languagesAnswer: string;
  languagesBody: string;
  compareTitle: string;
  compareAnswer: string;
  compareRows: { label: string; value: string }[];
  videoTitle: string;
  videoAnswer: string;
  videoBody: string;
  statsTitle: string;
  statsAnswer: string;
  stats: { label: string; value: string; source: string }[];
  expertTitle: string;
  expertAnswer: string;
  expertQuote: string;
  expertAttribution: string;
  exampleTitle: string;
  exampleAnswer: string;
  exampleBody: string;
  trustTitle: string;
  trustAnswer: string;
  trustItems: string[];
  techTitle: string;
  techAnswer: string;
  codeLabel: string;
  codeSample: string;
  tipsTitle: string;
  tipsAnswer: string;
  tips: string[];
  faqExtra: { q: string; a: string }[];
  takeawaysTitle: string;
  takeaways: string[];
  conclusionTitle: string;
  conclusionAnswer: string;
  conclusionBody: string;
  sourcesTitle: string;
  sources: { label: string; href: string }[];
  imgAlt: string;
};

const bs: HomeSeoAeo = {
  tocTitle: "Sadržaj stranice",
  tocItems: [
    { id: "sta-je", label: "Šta je ILMBUDS?" },
    { id: "zasto", label: "Zašto odabrati ILMBUDS?" },
    { id: "kako", label: "Kako započeti?" },
    { id: "jezici", label: "Jezici i pristupačnost" },
    { id: "poredjenje", label: "ILMBUDS vs tradicionalno učenje" },
    { id: "video", label: "Video i crtani sadržaj" },
    { id: "podaci", label: "Podaci i statistika" },
    { id: "povjerenje", label: "Povjerenje i sigurnost" },
    { id: "tehnicki", label: "Tehnički pregled" },
    { id: "savjeti", label: "Savjeti za roditelje" },
    { id: "sažetak", label: "Ključne informacije" },
    { id: "zakljucak", label: "Zaključak" },
  ],
  lead:
    "Dobrodošli na ILMBUDS — vašu besplatnu islamsku obrazovnu web stranicu za djecu. Ovdje možete učiti kroz priče, Kuran, ilmihal, kvizove i igre na pet jezika, uz siguran sadržaj prilagođen uzrastu. Mi u AGRMULTIMEDIA razvijamo ILMBUDS od 2026. godine kako bismo roditeljima u dijaspori olakšali poučavanje vjere kod kuće.",
  whatIsTitle: "Šta je ILMBUDS?",
  whatIsAnswer:
    "ILMBUDS je besplatna islamska edukativna web platforma za djecu sa pričama, Kuranom, kvizovima i crtanim filmovima.",
  whatIsDef:
    "ILMBUDS je interaktivna islamska obrazovna web aplikacija namijenjena djeci uzrasta 4–12 godina i njihovim roditeljima.",
  whatIsBody:
    "Na jednom mjestu objedinjavamo islamske priče, slušanje i čitanje Kurana, lekcije iz ilmihala (katekizma), edukativne kvizove, mini igre i islamski crtani sadržaj s YouTube platforme. Sadržaj je prilagođen uzrastu: kratke lekcije, vizualni materijali i ponavljanje kroz igru pomažu pamćenju. Prema našem internom pregledu sadržaja 2026. godine, platforma nudi više od 300+ pitanja i aktivnosti u kvizovima i igrama.",
  whyTitle: "Zašto odabrati ILMBUDS?",
  whyAnswer:
    "Odabrali ste sigurno, besplatno i višejezično okruženje u kojem vaše dijete uči islam kroz igru i priče.",
  whyBody:
    "Za razliku od nasumičnih videozapisa na internetu, ILMBUDS nudi strukturiran put učenja: od osnova vjere do kvizova o istoriji islama. Vi kao roditelj možete birati sekcije zajedno s djetetom i vraćati se na lekcije svake sedmice. S druge strane, tradicionalne knjige su vrijedne, ali djeca često traže interaktivni i vizualni format — upravo to nudimo mi.",
  howTitle: "Kako započeti učenje na ILMBUDS?",
  howAnswer:
    "Otvorite početnu stranicu, odaberite jezik i kliknite na sekciju Priče, Kuran, Kviz ili Igre — to su tri koraka do prvog uspjeha.",
  howSteps: [
    "Posjetite www.ilmbuds.com i u gornjem desnom uglu odaberite jezik (bosanski, njemački, engleski, albanski ili italijanski).",
    "Na početnoj stranici kliknite karticu koja vas zanima — npr. Islamske priče ili Kviz.",
    "Učite uz dijete 15–20 minuta dnevno i ponavljajte lekcije koje su vam najvažnije.",
  ],
  languagesTitle: "Na kojim jezicima je dostupan ILMBUDS?",
  languagesAnswer:
    "ILMBUDS podržava pet jezika u interfejsu: bosanski, njemački, engleski, albanski i italijanski.",
  languagesBody:
    "Višejezičnost pomaže porodicama u dijaspori — na primjer, dijete može učiti na bosanskom dok roditelj pregledava objašnjenja na njemačkom. Termini poput ilmihal (islamski katekizam), sunnet i dua redovno se pojavljuju u lekcijama kako bismo izgradili islamski rječnik djece.",
  compareTitle: "ILMBUDS vs tradicionalno učenje kod kuće",
  compareAnswer:
    "ILMBUDS dopunjuje knjige i učenje u džematu interaktivnim kvizovima, igrama i video lekcijama.",
  compareRows: [
    { label: "Cijena", value: "Besplatno na webu (2026)" },
    { label: "Jezici", value: "5 jezika u interfejsu" },
    { label: "Format", value: "Priče, kvizovi, igre, crtani" },
    { label: "Roditeljska kontrola", value: "Učenje uz odraslu osobu" },
    { label: "Ažuriranje", value: "Redovno (zadnje: maj 2026)" },
  ],
  videoTitle: "Video i crtani islamski sadržaj",
  videoAnswer:
    "U sekciji Crtani gledate edukativne islamski videozapise putem YouTube playera s poster slikama i punim ekranom.",
  videoBody:
    "Vi možete odabrati crtić na svom jeziku i pokrenuti ga jednim klikom. Video materijal je odabran za djecu i prikazuje se bez automatskog autoplaya u listi — što smanjuje distrakciju. Preporučujemo gledanje uz roditelja radi objašnjenja pojmova.",
  statsTitle: "Podaci i statistika o platformi",
  statsAnswer:
    "ILMBUDS nudi stotine aktivnosti, pet jezika i objavljen je 2026. godine — evo ključnih brojki sa izvorima.",
  stats: [
    { label: "Aktivnosti u kvizovima i igrama", value: "300+", source: "Interni pregled sadržaja ILMBUDS, 2026" },
    { label: "Podržani jezici", value: "5", source: "www.ilmbuds.com — postavke jezika" },
    { label: "Godina web izdanja", value: "2026", source: "AGRMULTIMEDIA / ILMBUDS" },
    { label: "Android aplikacija", value: "Da (Google Play)", source: "play.google.com/store/apps/details?id=com.ilmbuds.app" },
    { label: "AI citiranje svježeg sadržaja", value: "do 3,2× više", source: "Princeton GEO studija (2024), citirano u SEO industriji" },
  ],
  expertTitle: "Stručni stav o digitalnom islamskom obrazovanju",
  expertAnswer:
    "Digitalne platforme za djecu trebaju kombinovati sigurnost, strukturu i roditeljski nadzor — princip na kojem gradimo ILMBUDS.",
  expertQuote:
    "„Za djecu je najvažnije da islamsko znanje dolazi u kratkim, ponovljivim jedinicama uz odraslu osobu koja objašnjava kontekst.“",
  expertAttribution: "— Agron Osmani, autor i edukator, AGRMULTIMEDIA",
  exampleTitle: "Primjer: obiteljska sedmična rutina",
  exampleAnswer:
    "Jedna porodica može ponedjeljkom čitati priču, srijedom rješavati kviz i petkom gledati crtić — sve na ILMBUDS.",
  exampleBody:
    "Na primjer, roditelj u Njemačkoj može s djetetom od 7 godina otvoriti sekciju Priče, pročitati lekciju o poslušnosti, zatim u srijedu uraditi kviz iz kategorije Historija islama i nagraditi dijete malim poklonom. Tako ponavljanje jača pamćenje bolje nego jednokratno gledanje videa.",
  trustTitle: "Povjerenje, privatnost i sigurnost",
  trustAnswer:
    "Vaše dijete uči u edukativnom okruženju uz jasnu politiku privatnosti i kontakt autora.",
  trustItems: [
    "Autor: Agron Osmani (AGRMULTIMEDIA) — javni kontakt na stranici O nama",
    "Politika privatnosti i pravne informacije dostupne na /about#privacy",
    "Sadržaj usmjeren na djecu — bez neprimjerenog materijala",
    "HTTPS enkripcija na www.ilmbuds.com",
    "Schema.org strukturirani podaci za transparentnost prema pretraživačima",
  ],
  techTitle: "Tehnički pregled za roditelje i developere",
  techAnswer:
    "ILMBUDS web koristi moderan React stack, statički SEO HTML i strukturirane podatke JSON-LD.",
  codeLabel: "Primjer: kako pretraživač prepoznaje FAQ stranicu (JSON-LD)",
  codeSample: `{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Šta je ILMBUDS?",
    "acceptedAnswer": { "@type": "Answer", "text": "..." }
  }]
}`,
  tipsTitle: "Šta vi kao roditelj možete učiniti danas?",
  tipsAnswer:
    "Probajte jednu priču i jedan kviz ovaj vikend — to je najbrži način da vidite da li vašem djetetu odgovara stil učenja.",
  tips: [
    "Odaberite jezik koji dijete najbolje razumije i držite ga konstantnim prvih sedmicu.",
    "Postavite tajmer od 15 minuta — kratke sesije zadržavaju pažnju.",
    "Nakon kviza ponovite pitanja na koja je dijete pogriješilo — ponavljanje je ključno.",
    "Kontaktirajte nas na agron6922@gmail.com ako imate prijedlog za novu lekciju.",
  ],
  faqExtra: [
    {
      q: "Zašto koristiti ILMBUDS umjesto samo YouTubea?",
      a: "ILMBUDS nudi strukturirane lekcije, kvizove i višejezični interfejs — YouTube je koristan, ali nije kurikulum.",
    },
    {
      q: "Kako ILMBUDS štiti privatnost djece?",
      a: "Politika privatnosti objašnjava kolačiće i AdSense; preporučujemo učenje uz roditelja bez dijeljenja ličnih podataka djeteta.",
    },
  ],
  takeawaysTitle: "Ključne informacije (Key Takeaways)",
  takeaways: [
    "ILMBUDS je besplatna islamska web stranica za djecu sa pričama, Kuranom, ilmihalom, kvizovima i igrama.",
    "Podržavamo 5 jezika i više od 300+ edukativnih aktivnosti (pregled 2026).",
    "Vi učite uz dijete — platforma dopunjava džemat i knjige, ne zamjenjuje ih.",
    "Dostupni smo na webu i Android aplikaciji; autor je Agron Osmani (AGRMULTIMEDIA).",
  ],
  conclusionTitle: "Zaključak: naša preporuka",
  conclusionAnswer:
    "Preporučujemo ILMBUDS porodicama koje žele sigurno, besplatno i zabavno islamsko obrazovanje kod kuće u 2026. godini.",
  conclusionBody:
    "Ako ste roditelj u dijaspori, isprobajte ILMBUDS ovog vikenda: jedna priča, jedan kviz i jedan kratki crtić. Na taj način ćete vidjeti da li format odgovara vašem djetetu. Mi nastavljamo dodavati sadržaj i poboljšavati web iskustvo — vaše povratne informacije su dobrodošle putem stranice Kontakt.",
  sourcesTitle: "Izvori i reference",
  sources: [
    { label: "Schema.org — strukturirani podaci", href: "https://schema.org" },
    { label: "Wikipedia — Islamic education", href: "https://en.wikipedia.org/wiki/Islamic_education" },
    { label: "Wikidata — Islam", href: "https://www.wikidata.org/wiki/Q432" },
    { label: "ILMBUDS na Google Play", href: "https://play.google.com/store/apps/details?id=com.ilmbuds.app" },
    { label: "AGRMULTIMEDIA", href: "https://agrmultimedia.eu" },
  ],
  imgAlt:
    "ILMBUDS logo — islamska obrazovna platforma za djecu sa pričama, Kuranom i kvizovima",
};

const en: HomeSeoAeo = {
  tocTitle: "On this page",
  tocItems: [
    { id: "what-is", label: "What is ILMBUDS?" },
    { id: "why", label: "Why choose ILMBUDS?" },
    { id: "how", label: "How to get started" },
    { id: "languages", label: "Languages" },
    { id: "compare", label: "ILMBUDS vs traditional learning" },
    { id: "video", label: "Video & cartoons" },
    { id: "stats", label: "Statistics" },
    { id: "trust", label: "Trust & safety" },
    { id: "tech", label: "Technical overview" },
    { id: "tips", label: "Parent tips" },
    { id: "takeaways", label: "Key takeaways" },
    { id: "conclusion", label: "Conclusion" },
  ],
  lead:
    "Welcome to ILMBUDS — your free Islamic educational website for children. Here you can learn through stories, the Quran, catechism, quizzes and games in five languages, with age-appropriate safe content. At AGRMULTIMEDIA we have been developing ILMBUDS since 2026 to help parents in the diaspora teach faith at home.",
  whatIsTitle: "What is ILMBUDS?",
  whatIsAnswer:
    "ILMBUDS is a free Islamic educational web platform for children with stories, the Quran, quizzes and cartoons.",
  whatIsDef:
    "ILMBUDS is an interactive Islamic educational web application for children aged 4–12 and their parents.",
  whatIsBody:
    "We combine Islamic stories, Quran listening and reading, catechism (ilmihal) lessons, educational quizzes, mini games and Islamic cartoon videos from YouTube in one place. Content is age-appropriate with short lessons and visual materials. Our 2026 content review shows 300+ quiz and game activities.",
  whyTitle: "Why choose ILMBUDS?",
  whyAnswer:
    "You get a safe, free, multilingual environment where your child learns Islam through play and stories.",
  whyBody:
    "Unlike random internet videos, ILMBUDS offers a structured path from faith basics to Islamic history quizzes. You as a parent can choose sections with your child and revisit lessons weekly. On the other hand, traditional books are valuable, but children often want interactive formats — that is what we provide.",
  howTitle: "How do you start learning on ILMBUDS?",
  howAnswer:
    "Open the homepage, pick your language, and click Stories, Quran, Quiz or Games — three steps to your first success.",
  howSteps: [
    "Visit www.ilmbuds.com and select a language in the top-right corner.",
    "On the homepage, click a card such as Islamic Stories or Quiz.",
    "Learn with your child for 15–20 minutes daily and repeat important lessons.",
  ],
  languagesTitle: "Which languages does ILMBUDS support?",
  languagesAnswer:
    "ILMBUDS supports five interface languages: Bosnian, German, English, Albanian and Italian.",
  languagesBody:
    "Multilingual support helps diaspora families — for example, a child can learn in Bosnian while a parent reads explanations in German. Terms like ilmihal, sunnah and dua appear regularly to build Islamic vocabulary.",
  compareTitle: "ILMBUDS vs traditional home learning",
  compareAnswer:
    "ILMBUDS complements books and mosque classes with interactive quizzes, games and video lessons.",
  compareRows: [
    { label: "Price", value: "Free on web (2026)" },
    { label: "Languages", value: "5 interface languages" },
    { label: "Format", value: "Stories, quizzes, games, cartoons" },
    { label: "Parental role", value: "Learn with an adult" },
    { label: "Updates", value: "Regular (last: May 2026)" },
  ],
  videoTitle: "Video and Islamic cartoon content",
  videoAnswer:
    "In Cartoons you watch educational Islamic videos via YouTube with poster thumbnails and fullscreen playback.",
  videoBody:
    "You can pick a cartoon in your language and play it with one click. Videos are selected for children; we avoid autoplay in lists to reduce distraction. We recommend watching with a parent to explain concepts.",
  statsTitle: "Platform data and statistics",
  statsAnswer:
    "ILMBUDS offers hundreds of activities, five languages and launched in 2026 — key figures with sources below.",
  stats: [
    { label: "Quiz and game activities", value: "300+", source: "ILMBUDS internal content review, 2026" },
    { label: "Supported languages", value: "5", source: "www.ilmbuds.com language settings" },
    { label: "Web launch year", value: "2026", source: "AGRMULTIMEDIA / ILMBUDS" },
    { label: "Android app", value: "Yes (Google Play)", source: "play.google.com/store/apps/details?id=com.ilmbuds.app" },
    { label: "Fresh content AI citation boost", value: "up to 3.2×", source: "Princeton GEO study (2024), industry citation" },
  ],
  expertTitle: "Expert view on digital Islamic education",
  expertAnswer:
    "Children's platforms should combine safety, structure and parental oversight — the principle behind ILMBUDS.",
  expertQuote:
    "\"For children, Islamic knowledge works best in short, repeatable units with an adult explaining context.\"",
  expertAttribution: "— Agron Osmani, author and educator, AGRMULTIMEDIA",
  exampleTitle: "Example: a weekly family routine",
  exampleAnswer:
    "One family can read a story on Monday, take a quiz on Wednesday and watch a cartoon on Friday — all on ILMBUDS.",
  exampleBody:
    "For example, a parent in Germany with a 7-year-old opens Stories, reads a lesson on obedience, then mid-week completes an Islamic history quiz. Repetition works better than a single passive video session.",
  trustTitle: "Trust, privacy and safety",
  trustAnswer:
    "Your child learns in an educational setting with a clear privacy policy and author contact.",
  trustItems: [
    "Author: Agron Osmani (AGRMULTIMEDIA) — public contact on About page",
    "Privacy policy and legal info at /about#privacy",
    "Child-directed content without inappropriate material",
    "HTTPS on www.ilmbuds.com",
    "Schema.org structured data for search transparency",
  ],
  techTitle: "Technical overview for parents and developers",
  techAnswer:
    "The ILMBUDS web app uses modern React, static SEO HTML and JSON-LD structured data.",
  codeLabel: "Example: how search engines read FAQ markup (JSON-LD)",
  codeSample: `{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is ILMBUDS?",
    "acceptedAnswer": { "@type": "Answer", "text": "..." }
  }]
}`,
  tipsTitle: "What can you do as a parent today?",
  tipsAnswer:
    "Try one story and one quiz this weekend — the fastest way to see if ILMBUDS fits your child.",
  tips: [
    "Pick the language your child understands best and keep it consistent for the first week.",
    "Set a 15-minute timer — short sessions keep attention.",
    "After a quiz, review wrong answers together — repetition is key.",
    "Email agron6922@gmail.com if you suggest a new lesson topic.",
  ],
  faqExtra: [
    {
      q: "Why use ILMBUDS instead of only YouTube?",
      a: "ILMBUDS offers structured lessons, quizzes and a multilingual UI — YouTube is useful but not a curriculum.",
    },
    {
      q: "How does ILMBUDS protect children's privacy?",
      a: "Our privacy policy explains cookies and AdSense; we recommend learning with a parent without sharing children's personal data.",
    },
  ],
  takeawaysTitle: "Key takeaways",
  takeaways: [
    "ILMBUDS is a free Islamic website for children with stories, Quran, catechism, quizzes and games.",
    "We support 5 languages and 300+ educational activities (2026 review).",
    "You learn with your child — ILMBUDS complements mosque and books.",
    "Available on web and Android; author Agron Osmani (AGRMULTIMEDIA).",
  ],
  conclusionTitle: "Conclusion: our recommendation",
  conclusionAnswer:
    "We recommend ILMBUDS for families who want safe, free and fun Islamic learning at home in 2026.",
  conclusionBody:
    "If you are a diaspora parent, try ILMBUDS this weekend: one story, one quiz and one short cartoon. You will see if the format suits your child. We keep improving the web experience — feedback is welcome via Contact.",
  sourcesTitle: "Sources and references",
  sources: [
    { label: "Schema.org", href: "https://schema.org" },
    { label: "Wikipedia — Islamic education", href: "https://en.wikipedia.org/wiki/Islamic_education" },
    { label: "Wikidata — Islam", href: "https://www.wikidata.org/wiki/Q432" },
    { label: "ILMBUDS on Google Play", href: "https://play.google.com/store/apps/details?id=com.ilmbuds.app" },
    { label: "AGRMULTIMEDIA", href: "https://agrmultimedia.eu" },
  ],
  imgAlt: "ILMBUDS logo — Islamic educational platform for children with stories, Quran and quizzes",
};

const byLang: Record<Language, HomeSeoAeo> = { bs, en, de: en, sq: en, it: en };

export function getHomeSeoAeo(lang: Language): HomeSeoAeo {
  return byLang[lang] ?? en;
}
