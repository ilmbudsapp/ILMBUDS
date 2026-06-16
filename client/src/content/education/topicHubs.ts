import type { TopicHubConfig } from "./types";

export const TOPIC_HUBS: TopicHubConfig[] = [
  {
    path: "/prophets",
    title: "Proroci za djecu",
    metaDescription:
      "Upoznaj proroke islama kroz priče, članke i aktivnosti prilagođene djeci u dijaspori (5–12 godina).",
    intro:
      "Proroci su Allahovi poslanici koji su donijeli istinu, strpljenje i nadu ljudima. Na ovom hubu djeca uče ko su bili, šta su prenosili i kako njihovi životi mogu biti uzor za svakodnevni ahlak.",
    whyTitle: "Zašto učiti o prorocima?",
    whyParagraphs: [
      "Priče o prorocima pomažu djeci da razumiju da je vjera živa priča, a ne samo pravila. Kroz Ibrahimovu hrabrost, Musinovo strpljenje ili Isin mir, dijete uči kako se ponašati kad je teško.",
      "U dijaspori djeca često čuju različite priče u školi i kod kuće. ILMBUDS pruža pouzdan, dječiji jezik na bosanskom, uz reference na Kuran i sunnet, kako bi roditelji imali zajednički izvor za razgovor.",
    ],
    benefits: [
      "Jača vezu s Kuranom i islamskom historijom",
      "Uči vrijednosti: sabr, tawakkul, iskrenost, milost",
      "Povezuje priče, kvizove i članke u jedan put učenja",
      "Pogodno za vikend školu i porodično čitanje",
    ],
    articleTopics: ["prophets"],
    hadithSlugs: ["strpljenje", "istina-i-iskrenost", "dobra-namjera"],
  },
  {
    path: "/hadith",
    title: "Hadisi za djecu",
    metaDescription:
      "Kratki, autentični hadisi s objašnjenjima za djecu — ljubaznost, namaz, istina, bratstvo i još mnogo toga.",
    intro:
      "Hadis je riječ i primjer Allahovog Poslanika ﷺ. Ovdje biramo hadise iz pouzdanih zbirki i prevodimo ih na jezik koji djeca razumiju, uz praktične primjere iz škole, porodice i džamije.",
    whyTitle: "Zašto hadisi djeci?",
    whyParagraphs: [
      "Djeca brzo pamte kratke rečenice i priče. Hadis im daje jasna pravila: budi iskren, pomozi, klanjaj, čuvaj jezik. To je most između ilmihala i svakodnevnog života.",
      "Svaki hadis na ILMBUDS-u ima izvor (Buhari, Muslim, Nawawi, Tirmizi, Riyad), objašnjenje za uzrast 5–12, lekcije i pitanja za razmišljanje — idealno za roditelje i učitelje.",
    ],
    benefits: [
      "Autentični izvori prilagođeni dječijem jeziku",
      "Povezano s kvizovima, pričama i ilmihalom",
      "Kratke lekcije za svakodnevnu primjenu",
      "Podrška za učenje ahlaka u dijaspori",
    ],
    articleTopics: ["values", "character", "manners"],
    hadithSlugs: [
      "ljubaznost-prema-roditeljima",
      "osmijeh-sadaka",
      "vaznost-namaza",
      "bratstvo",
      "cuvanje-jezika",
    ],
  },
  {
    path: "/islamic-values",
    title: "Islamski vrijednosti za djecu",
    metaDescription:
      "Članke o iskrenosti, zahvalnosti, strpljenju, skromnosti i drugim vrijednostima za muslimansku djecu u Evropi.",
    intro:
      "Islamski vrijednosti nisu samo lijepa pravila — one grade karakter, porodicu i zajednicu. Ovaj hub okuplja članke koji pomažu djeci da razumiju zašto su poštenje, milost i odgovornost važni danas.",
    whyTitle: "Zašto poseban hub za vrijednosti?",
    whyParagraphs: [
      "Djeca u dijaspori susreću različite standarde ponašanja. Roditelji žele jasan, islamski okvir bez zastrašivanja. Vrijednosti objašnjavamo kroz primjere iz škole, sporta, interneta i porodice.",
      "Svaki članak povezuje pouku s hadisom, Kuranom ili pričom proroka, tako da dijete vidi cjelinu — ne samo 'šta smijem', već 'zašto je to lijepo pred Allahom'.",
    ],
    benefits: [
      "Jasan jezik za uzrast 5–12",
      "Praktični primjeri iz života u dijaspori",
      "Povezanost s hadisima i ilmihalom",
      "Podsticaj za porodične razgovore",
    ],
    articleTopics: ["values", "family", "character", "manners"],
    hadithSlugs: [
      "zahvalnost",
      "skromnost",
      "posteno-zaradjivanje",
      "ljubav-medju-muslimanima",
    ],
  },
  {
    path: "/dua-for-children",
    title: "Duae za djecu",
    metaDescription:
      "Nauči kratke duae za jelo, put, spavanje i školu — s izgovorom, značenjem i savjetima za djecu.",
    intro:
      "Dua je razgovor s Allahom. Djeca mogu učiti kratke, lako pamtljive dove za svaki dan — prije spavanja, u školi, na putu ili kad su tužna. Ovaj hub okuplja članke i vodiče za učenje duae uz roditelje.",
    whyTitle: "Zašto učiti duae od malih nogu?",
    whyParagraphs: [
      "Kad dijete zna reći 'Bismillah' ili 'Rabbana atina', osjeća se bliže Allahu u svakom trenutku, ne samo u džamiji. Dua uči zahvalnost, nadu i oslanjanje na Allaha (tawakkul).",
      "U člancima dajemo arapski tekst, latinicu, prijevod i kada se dua kaže — bez preopterećenja, uz audio i igre na ILMBUDS-u gdje je moguće.",
    ],
    benefits: [
      "Kratke duae prilagođene uzrastu",
      "Prijevod i kontekst na bosanskom",
      "Povezano s namazom i svakodnevnim rutinama",
      "Jača spiritualnost u obrazovanju djece",
    ],
    articleTopics: ["duas", "prayer", "ramadan"],
    hadithSlugs: ["vaznost-namaza", "dobra-namjera", "zahvalnost"],
  },
  {
    path: "/arabic-learning",
    title: "Učenje arapskog za djecu",
    metaDescription:
      "Arapski za djecu: slova, osnovne riječi, sure i savjeti za učenje u dijaspori — uz ILMBUDS alate.",
    intro:
      "Arapski je jezik Kurana i namaza. Djeca u Njemačkoj, Austriji, Švicarskoj i drugdje mogu učiti slovo po slovo, riječ po riječ — kroz igru, pjesmu i kratke članke koji ne zastrašuju, već motivišu.",
    whyTitle: "Zašto arapski u ranom uzrastu?",
    whyParagraphs: [
      "Kad dijete razumije barem neke riječi iz sure ili namaza, molitva postaje živija. Arapski također jača memoriju, koncentraciju i ponos na islamsku baštinu.",
      "ILMBUDS kombinuje abecedu, mini igre i članke za roditelje — kako podržati učenje kod kuće kad nema svakodnevne arapske škole.",
    ],
    benefits: [
      "Postepeno učenje od slova do kratkih fraza",
      "Povezano s Kuranom i namazom",
      "Savjeti za roditelje u dijaspori",
      "Integracija s ILMBUDS igrama i kvizovima",
    ],
    articleTopics: ["arabic", "quran"],
    hadithSlugs: ["ucenje-i-znanje"],
  },
];

export function getTopicHubByPath(path: string): TopicHubConfig | undefined {
  return TOPIC_HUBS.find((h) => h.path === path);
}

export function getAllTopicHubPaths(): string[] {
  return TOPIC_HUBS.map((h) => h.path);
}
