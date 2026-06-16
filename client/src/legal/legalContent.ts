import { CONTACT_EMAIL, SITE_URL } from "@/lib/seo/siteConfig";

export type LegalLang = "bs" | "en" | "de" | "sq" | "it";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

const OPERATOR_DE = "AGRMULTIMEDIA — Agron Osmani";
const ADDRESS_DE =
  "Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige, Deutschland";

const privacyBs: LegalSection[] = [
  {
    id: "controller",
    title: "1. Verantwortlicher",
    paragraphs: [
      `${OPERATOR_DE}\n${ADDRESS_DE}\nE-Mail: ${CONTACT_EMAIL}\nWeb: ${SITE_URL}`,
      "Verantwortlicher für die Datenverarbeitung auf www.ilmbuds.com im Sinne der DSGVO.",
    ],
  },
  {
    id: "overview",
    title: "2. Opće napomene",
    paragraphs: [
      "ILMBUDS je besplatna islamska obrazovna web stranica za djecu (4–12 godina) i roditelje. Obrađujemo podatke samo u mjeri potrebnoj za rad stranice, učenje i zakonske obveze.",
      "Ova politika odražava stvarno stanje tehnologija na www.ilmbuds.com (maj 2026.).",
    ],
  },
  {
    id: "hosting",
    title: "3. Hosting",
    paragraphs: [
      "Web stranica se hostuje kod Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Pri učitavanju nastaju tehnički podaci o povezivanju.",
      "Pravna osnova: čl. 6 st. 1 lit. f DSGVO. Prenos u treće zemlje može se temeljiti na standardnim ugovornim klauzulama pružatelja usluge.",
    ],
  },
  {
    id: "logs",
    title: "4. Server log datoteke",
    paragraphs: [
      "Hosting može automatski bilježiti IP adresu, vrijeme, URL, tip preglednika i referrer radi stabilnosti i sigurnosti.",
      "Pravna osnova: čl. 6 st. 1 lit. f DSGVO.",
    ],
  },
  {
    id: "contact",
    title: "5. Kontakt i e-mail",
    paragraphs: [
      `Ako nas kontaktirate putem ${CONTACT_EMAIL} ili stranice /contact, obrađujemo vaše podatke radi odgovora na upit.`,
      "Pravna osnova: čl. 6 st. 1 lit. b ili f DSGVO.",
    ],
  },
  {
    id: "storage-local",
    title: "6. Lokalna pohrana (localStorage)",
    paragraphs: [
      "U pregledniku pohranjujemo vaš izbor kolačića (ilmbuds-cookie-consent) kao JSON s poljima choice i updatedAt, kako se banner ne bi ponavljao.",
      "Pravna osnova: čl. 6 st. 1 lit. f DSGVO (nužna postavka) odnosno lit. a DSGVO (suglasnost za eksterne medije).",
    ],
  },
  {
    id: "cookies",
    title: "7. Kolačići",
    paragraphs: [
      "Bez vaše suglasnosti ne učitavamo Google AdSense niti YouTube ugrađene playere. Odabirom „Samo nužno“ koristi se samo tehnička pohrana izbora.",
      "Odabirom „Prihvati sve“ mogu se učitati Google AdSense (oglasni kolačići) i YouTube videozapisi u sekciji Crtani.",
    ],
  },
  {
    id: "analytics",
    title: "8. Analitika / praćenje",
    paragraphs: [
      "Na web verziji trenutno ne koristimo Google Analytics. Ne šaljemo podatke o ponašanju posjetitelja Google Analyticsu.",
      "Google AdSense (priprema za oglašavanje): skripta se učitava isključivo nakon vaše izričite suglasnosti u cookie banneru („Prihvati sve”). AdSense može postavljati kolačiće radi prikaza i mjerenja oglasa prema Google Advertising Policies (policies.google.com/technologies/ads). Personalizirani oglasi mogu se isključiti u Google Ad Settings (adssettings.google.com).",
      "Android aplikacija može koristiti Google AdMob — to se regulira odvojenim pravilima trgovine aplikacija.",
    ],
  },
  {
    id: "fonts",
    title: "9. Fontovi (lokalno hostirani)",
    paragraphs: [
      "Fontovi (Nunito, Poppins, Fredoka, Quicksand, arapski fontovi itd.) učitavaju se iz vlastitog paketa stranice (.woff2). Nema zahtjeva prema fonts.googleapis.com pri učitavanju.",
      "Pravna osnova: čl. 6 st. 1 lit. f DSGVO.",
    ],
  },
  {
    id: "external",
    title: "10. Eksterni sadržaji i linkovi",
    paragraphs: [
      "Linkovi na WhatsApp, Google Play, AGRMULTIMEDIA, Wikipedia/Wikidata i društvene mreže vode na vanjske stranice s vlastitim pravilima privatnosti.",
      "YouTube (crtani) i Google AdSense učitavaju se samo nakon suglasnosti. Slične slike (youtube.com) u listi crtića prikazuju se tek nakon suglasnosti.",
    ],
  },
  {
    id: "ssl",
    title: "11. SSL/TLS enkripcija",
    paragraphs: ["Stranica koristi HTTPS (SSL/TLS)."],
  },
  {
    id: "retention",
    title: "12. Rok čuvanja",
    paragraphs: [
      "Kontakt poruke čuvamo samo koliko je potrebno za obradu. Log podaci se rotiraju prema pravilima hostinga.",
    ],
  },
  {
    id: "rights",
    title: "13. Prava ispitanika",
    paragraphs: [
      "Imate pravo na pristup, ispravak, brisanje, ograničenje, prenosivost i prigovor (čl. 15–21 DSGVO). Suglasnost možete povući brisanjem localStorage u pregledniku.",
      "Žalbu možete podnijeti nadzornom tijelu u EU (npr. LfDI Baden-Württemberg za Njemačku).",
    ],
  },
  {
    id: "objection",
    title: "14. Pravo na prigovor",
    paragraphs: [
      `Prigovor obradi na temelju čl. 6 st. 1 lit. f DSGVO: ${CONTACT_EMAIL}`,
    ],
  },
  {
    id: "children",
    title: "15. Privatnost djece",
    paragraphs: [
      "ILMBUDS je namijenjen djeci uzrasta 4–12 godina uz nadzor roditelja ili staratelja. Ne tražimo registraciju djece niti svjesno prikupljamo osobne podatke djece (puno ime, adresa, fotografija, školski podaci) kroz javnu web stranicu.",
      "Lokalni profil u pregledniku (bodovi, bedževi) pohranjuje se samo na vašem uređaju — ne šaljemo ga na naše servere. Roditelji trebaju nadgledati korištenje stranice i cookie izbor.",
      "Ako smatrate da je dijete dostavilo osobne podatke putem kontakt forme, pišite na " + CONTACT_EMAIL + " — podatke ćemo obrisati u razumnom roku (obično 30 dana).",
      "Cookie banner mora potvrditi odrasla osoba prije učitavanja AdSense i YouTube sadržaja u skladu sa COPPA/GDPR principima zaštite djece.",
    ],
  },
  {
    id: "updates",
    title: "16. Aktualnost",
    paragraphs: ["Zadnje ažuriranje: 4. jun 2026. Aktualna verzija: https://www.ilmbuds.com/privacy-policy"],
  },
];

const privacyDe: LegalSection[] = [
  {
    id: "controller",
    title: "1. Verantwortlicher",
    paragraphs: [
      `${OPERATOR_DE}\n${ADDRESS_DE}\nE-Mail: ${CONTACT_EMAIL}`,
      "Verantwortlich für die Datenverarbeitung auf ilmbuds.com (DSGVO).",
    ],
  },
  {
    id: "overview",
    title: "2. Allgemeine Hinweise",
    paragraphs: [
      "ILMBUDS ist eine kostenlose islamische Bildungs-Webseite für Kinder (4–12 Jahre) und Eltern in der Diaspora.",
      "Diese Erklärung beschreibt den Stand der Technologien auf www.ilmbuds.com (Mai 2026).",
    ],
  },
  {
    id: "hosting",
    title: "3. Hosting",
    paragraphs: [
      "Hosting bei Vercel Inc., USA. Technisch erforderliche Verbindungsdaten werden verarbeitet.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    id: "logs",
    title: "4. Server-Logfiles",
    paragraphs: [
      "Der Hoster kann IP-Adresse, Zeitpunkt, URL und Browser-Typ protokollieren.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    id: "contact",
    title: "5. Kontakt & E-Mail",
    paragraphs: [
      `Kontakt über ${CONTACT_EMAIL} oder /contact.`,
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b bzw. f DSGVO.",
    ],
  },
  {
    id: "storage-local",
    title: "6. Lokale Speicherung (localStorage)",
    paragraphs: [
      "Wir speichern Ihre Cookie-Entscheidung (ilmbuds-cookie-consent) mit choice und updatedAt.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f bzw. lit. a DSGVO.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies",
    paragraphs: [
      "Ohne Einwilligung laden wir kein Google AdSense und keine YouTube-Einbettungen.",
      "„Alle akzeptieren“ ermöglicht AdSense-Werbung und YouTube-Videos im Bereich Cartoons.",
    ],
  },
  {
    id: "analytics",
    title: "8. Webanalyse / Werbung",
    paragraphs: [
      "Kein Google Analytics auf der Webseite.",
      "Google AdSense (Vorbereitung): Skript wird nur nach Cookie-Einwilligung geladen. AdSense kann Cookies für Anzeigen setzen (Google Advertising Policies). Personalisierte Anzeigen können in den Google Anzeigeneinstellungen deaktiviert werden.",
      "Die Android-App kann AdMob nutzen (separate Store-Richtlinien).",
    ],
  },
  {
    id: "fonts",
    title: "9. Schriftarten (lokal)",
    paragraphs: [
      "Schriftarten werden self-hosted geladen — keine Verbindung zu Google Fonts CDN.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    id: "external",
    title: "10. Externe Inhalte",
    paragraphs: [
      "Links zu Google Play, AGRMULTIMEDIA, sozialen Netzwerken und Wikipedia.",
      "YouTube und AdSense nur nach Cookie-Einwilligung.",
    ],
  },
  {
    id: "ssl",
    title: "11. SSL/TLS",
    paragraphs: ["Die Website nutzt HTTPS."],
  },
  {
    id: "retention",
    title: "12. Speicherdauer",
    paragraphs: ["Daten werden nur so lange gespeichert wie nötig."],
  },
  {
    id: "rights",
    title: "13. Betroffenenrechte",
    paragraphs: [
      "Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch (Art. 15–21 DSGVO).",
      "Beschwerde bei einer Aufsichtsbehörde möglich.",
    ],
  },
  {
    id: "objection",
    title: "14. Widerspruchsrecht",
    paragraphs: [`Widerspruch: ${CONTACT_EMAIL}`],
  },
  {
    id: "children",
    title: "15. Datenschutz für Kinder",
    paragraphs: [
      "ILMBUDS richtet sich an Kinder (4–12 Jahre) unter Aufsicht der Eltern. Wir erheben wissentlich keine personenbezogenen Daten von Kindern (Name, Adresse, Fotos) über die öffentliche Website.",
      "Lokale Profile (Punkte, Abzeichen) werden nur im Browser gespeichert — nicht auf unseren Servern.",
      "Kontakt bei Löschwunsch: " + CONTACT_EMAIL + " (in der Regel innerhalb von 30 Tagen).",
      "Cookie-Banner erfordert Entscheidung einer erwachsenen Person vor AdSense/YouTube.",
    ],
  },
  {
    id: "updates",
    title: "16. Aktualität",
    paragraphs: ["Stand: 4. Juni 2026. https://www.ilmbuds.com/privacy-policy"],
  },
];

const privacyEnFixed: LegalSection[] = [
  {
    id: "controller",
    title: "1. Data controller",
    paragraphs: [
      `${OPERATOR_DE}\n${ADDRESS_DE}\nEmail: ${CONTACT_EMAIL}`,
      "Controller for ilmbuds.com under GDPR.",
    ],
  },
  ...privacyDe.slice(1).map((s) => ({
    ...s,
    title: s.title
      .replace("Allgemeine Hinweise", "General information")
      .replace("Server-Logfiles", "Server log files")
      .replace("Kontakt & E-Mail", "Contact & email")
      .replace("Lokale Speicherung", "Local storage")
      .replace("Webanalyse / Werbung", "Analytics / advertising")
      .replace("Schriftarten", "Fonts")
      .replace("Externe Inhalte", "External content")
      .replace("Speicherdauer", "Retention")
      .replace("Betroffenenrechte", "Your rights")
      .replace("Widerspruchsrecht", "Right to object")
      .replace("Datenschutz für Kinder", "Children's privacy")
      .replace("16. Aktualität", "16. Updates"),
  })),
];

export function getPrivacySections(lang: LegalLang): LegalSection[] {
  if (lang === "de") return privacyDe;
  if (lang === "en") return privacyEnFixed;
  if (lang === "bs") return privacyBs;
  return privacyEnFixed;
}

export const impressumDdGNote: Record<LegalLang, string> = {
  bs: "Ovaj Impresum je u skladu sa § 5 DDG (Digital Services Act, DE) i § 18 Abs. 2 MStV.",
  en: "This legal notice complies with § 5 DDG (Germany) and § 18(2) MStV.",
  de: "Dieses Impressum entspricht § 5 DDG und § 18 Abs. 2 MStV.",
  sq: "Ky impresum përputhet me § 5 DDG (Gjermani).",
  it: "Questo impressum è conforme al § 5 DDG (Germania).",
};
