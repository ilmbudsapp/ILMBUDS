import type { Language } from "@shared/translations";

type RouteSeo = {
  title: Record<Language, string>;
  description: Record<Language, string>;
};

export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: {
      bs: "ILMBUDS — Islamska web stranica za djecu",
      de: "ILMBUDS — Islamische Website für Kinder",
      en: "ILMBUDS — Islamic Website for Children",
      sq: "ILMBUDS — Faqe web islamike për fëmijë",
      it: "ILMBUDS — Sito web islamico per bambini",
    },
    description: {
      bs: "Besplatna islamska obrazovna platforma: priče, Kuran, ilmihal, kvizovi, igre i crtani na pet jezika.",
      de: "Kostenlose islamische Bildungsplattform: Geschichten, Koran, Ilmihal, Quizze, Spiele und Cartoons in fünf Sprachen.",
      en: "Free Islamic education platform: stories, Quran, catechism, quizzes, games and cartoons in five languages.",
      sq: "Platformë edukative islame falas për fëmijë.",
      it: "Piattaforma educativa islamica gratuita per bambini.",
    },
  },
  "/stories": {
    title: {
      bs: "Islamski priče za djecu",
      de: "Islamische Geschichten für Kinder",
      en: "Islamic Stories for Children",
      sq: "Tregime islame për fëmijë",
      it: "Storie islamiche per bambini",
    },
    description: {
      bs: "Interaktivne islamski priče za djecu — vjerovjesnici, vrijednosti i pouke prilagođene uzrastu.",
      de: "Interaktive islamische Geschichten für Kinder — Propheten, Werte und Lektionen.",
      en: "Interactive Islamic stories for children — prophets, values and age-appropriate lessons.",
      sq: "Tregime interaktive islame për fëmijë.",
      it: "Storie islamiche interattive per bambini.",
    },
  },
  "/quran": {
    title: {
      bs: "Kuran za djecu — sura i audio",
      de: "Koran für Kinder — Suren und Audio",
      en: "Quran for Children — Surahs and Audio",
      sq: "Kurani për fëmijë",
      it: "Corano per bambini",
    },
    description: {
      bs: "Slušajte i učite sure Kurana na ILMBUDS — edukativni prikaz prilagođen djeci.",
      de: "Suren des Korans hören und lernen — kindgerecht auf ILMBUDS.",
      en: "Listen and learn Quran surahs on ILMBUDS — child-friendly educational display.",
      sq: "Dëgjo dhe mëso suret e Kuranit.",
      it: "Ascolta e impara le sure del Corano.",
    },
  },
  "/catechism": {
    title: {
      bs: "Ilmihal za djecu",
      de: "Ilmihal für Kinder",
      en: "Islamic Catechism for Children",
      sq: "Ilmihal për fëmijë",
      it: "Catechismo islamico per bambini",
    },
    description: {
      bs: "Ilmihal i islamska vjerovanja — namaz, abdest, pet stubova i osnovna učenja za djecu.",
      de: "Ilmihal und islamische Glaubenslehre — Gebet, Wudu, fünf Säulen für Kinder.",
      en: "Catechism and Islamic beliefs — prayer, wudu, five pillars for children.",
      sq: "Ilmihal dhe mësimet islame për fëmijë.",
      it: "Catechismo e insegnamenti islamici per bambini.",
    },
  },
  "/ilmihal": {
    title: {
      bs: "Ilmihal za djecu",
      de: "Ilmihal für Kinder",
      en: "Islamic Catechism for Children",
      sq: "Ilmihal për fëmijë",
      it: "Catechismo islamico per bambini",
    },
    description: {
      bs: "Ilmihal i islamska vjerovanja za djecu.",
      de: "Ilmihal und Glaubenslehre für Kinder.",
      en: "Catechism and beliefs for children.",
      sq: "Ilmihal për fëmijë.",
      it: "Catechismo per bambini.",
    },
  },
  "/quiz-categories": {
    title: {
      bs: "Islamski kvizovi za djecu",
      de: "Islamische Quizze für Kinder",
      en: "Islamic Quizzes for Children",
      sq: "Kuize islame për fëmijë",
      it: "Quiz islamici per bambini",
    },
    description: {
      bs: "Testirajte znanje o islamu kroz zabavne kvizove prilagođene djeci.",
      de: "Islamisches Wissen spielerisch testen — Quizze für Kinder.",
      en: "Test Islamic knowledge with fun child-friendly quizzes.",
      sq: "Testo njohuritë islame me kuize.",
      it: "Quiz islamici per bambini.",
    },
  },
  "/cartoons": {
    title: {
      bs: "Islamski crtani za djecu",
      de: "Islamische Cartoons für Kinder",
      en: "Islamic Cartoons for Children",
      sq: "Filma vizatimorë islamikë",
      it: "Cartoni islamici per bambini",
    },
    description: {
      bs: "Kurirani edukativni islamski crtani — YouTube ugrađivanje nakon suglasnosti.",
      de: "Kuratierte islamische Bildungs-Cartoons — YouTube nach Einwilligung.",
      en: "Curated Islamic educational cartoons — YouTube embeds after consent.",
      sq: "Filma edukative islame.",
      it: "Cartoni educativi islamici.",
    },
  },
  "/mini-games": {
    title: {
      bs: "Islamski mini igre",
      de: "Islamische Minispiele",
      en: "Islamic Mini Games",
      sq: "Mini lojëra islame",
      it: "Mini giochi islamici",
    },
    description: {
      bs: "Memorija i riječna igra — učenje kroz zabavu na ILMBUDS.",
      de: "Memory und Wortspiele — Lernen durch Spielen.",
      en: "Memory and word games — learning through play on ILMBUDS.",
      sq: "Lojëra edukative.",
      it: "Giochi educativi islamici.",
    },
  },
  "/arabic-alphabet": {
    title: {
      bs: "Arapska abeceda za djecu",
      de: "Arabisches Alphabet für Kinder",
      en: "Arabic Alphabet for Children",
      sq: "Alfabeti arab",
      it: "Alfabeto arabo per bambini",
    },
    description: {
      bs: "Učite arapska slova interaktivno — prvi korak ka čitanju Kurana.",
      de: "Arabische Buchstaben interaktiv lernen.",
      en: "Learn Arabic letters interactively — first step to reading Quran.",
      sq: "Mëso shkronjat arabe.",
      it: "Impara le lettere arabe.",
    },
  },
  "/pillars": {
    title: {
      bs: "Pet stubova islama",
      de: "Die fünf Säulen des Islam",
      en: "Five Pillars of Islam",
      sq: "Pesë shtyllat e Islamit",
      it: "Cinque pilastri dell'Islam",
    },
    description: {
      bs: "Pet stubova islama objašnjeno djeci — šahada, namaz, zekat, post, hadž.",
      de: "Die fünf Säulen kindgerecht erklärt.",
      en: "Five pillars explained for children.",
      sq: "Pesë shtyllat për fëmijë.",
      it: "I cinque pilastri spiegati ai bambini.",
    },
  },
  "/about": {
    title: {
      bs: "O nama — ILMBUDS",
      de: "Über uns — ILMBUDS",
      en: "About Us — ILMBUDS",
      sq: "Rreth nesh — ILMBUDS",
      it: "Chi siamo — ILMBUDS",
    },
    description: {
      bs: "Misija, tim, kontakt i pravne informacije ILMBUDS islamskog obrazovnog sajta za djecu.",
      de: "Mission, Team, Kontakt und rechtliche Informationen von ILMBUDS.",
      en: "Mission, team, contact and legal information for ILMBUDS.",
      sq: "Misioni dhe informacioni i ILMBUDS.",
      it: "Missione e informazioni su ILMBUDS.",
    },
  },
  "/privacy-policy": {
    title: {
      bs: "Politika privatnosti — ILMBUDS",
      de: "Datenschutzerklärung — ILMBUDS",
      en: "Privacy Policy — ILMBUDS",
      sq: "Politika e privatësisë — ILMBUDS",
      it: "Politica sulla privacy — ILMBUDS",
    },
    description: {
      bs: "Politika privatnosti ILMBUDS: kolačići, AdSense, GDPR, privatnost djece i kontakt.",
      de: "Datenschutz: Cookies, AdSense, DSGVO-Rechte und Kinder — ILMBUDS.",
      en: "ILMBUDS privacy policy: cookies, AdSense, GDPR, children's privacy and contact.",
      sq: "Politika e privatësisë ILMBUDS.",
      it: "Politica sulla privacy ILMBUDS.",
    },
  },
  "/contact": {
    title: {
      bs: "Kontakt — ILMBUDS",
      de: "Kontakt — ILMBUDS",
      en: "Contact — ILMBUDS",
      sq: "Kontakt — ILMBUDS",
      it: "Contatto — ILMBUDS",
    },
    description: {
      bs: "Kontaktirajte ILMBUDS — pitanja, povratne informacije i partnerstva.",
      de: "Kontaktieren Sie ILMBUDS — Fragen, Feedback und Partnerschaften.",
      en: "Contact ILMBUDS — questions, feedback and partnerships.",
      sq: "Kontaktoni ILMBUDS.",
      it: "Contatta ILMBUDS.",
    },
  },
  "/hadisi-za-djecu": {
    title: {
      bs: "Hadisi za djecu",
      de: "Hadithe für Kinder",
      en: "Hadith for Children",
      sq: "Hadithe për fëmijë",
      it: "Hadith per bambini",
    },
    description: {
      bs: "Autentični hadisi s objašnjenjima za djecu 5–12 godina — ahlak, namaz, istina i ljubav.",
      de: "Authentische Hadithe kindgerecht erklärt.",
      en: "Authentic hadith explained for children ages 5–12.",
      sq: "Hadithe autentike për fëmijë.",
      it: "Hadith autentici per bambini.",
    },
  },
  "/blog": {
    title: {
      bs: "Centar znanja — islamska edukacija",
      de: "Wissenszentrum — islamische Bildung",
      en: "Knowledge Center — Islamic Education",
      sq: "Qendra e diturisë",
      it: "Centro conoscenza islamica",
    },
    description: {
      bs: "Preko 30 edukativnih članaka: proroci, vrijednosti, arapski, duae, ramadan i porodica.",
      de: "Über 30 Bildungsartikel für muslimische Kinder.",
      en: "30+ educational articles for Muslim children in the diaspora.",
      sq: "Artikuj edukativë islame.",
      it: "Articoli educativi islamici.",
    },
  },
};

export function getRouteSeo(path: string, lang: Language): { title: string; description: string } | null {
  const seo = ROUTE_SEO[path];
  if (!seo) return null;
  return {
    title: seo.title[lang] ?? seo.title.bs,
    description: seo.description[lang] ?? seo.description.bs,
  };
}
