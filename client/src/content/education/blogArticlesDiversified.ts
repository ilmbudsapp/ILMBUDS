import type { BlogArticle, ContentSection } from "./types";

export type DiversifiedPatch = Pick<
  BlogArticle,
  "sections" | "faq" | "articleFormat" | "faqTitle" | "faqStyle" | "skipGenericSupplement" | "readingTimeMin" | "updatedAt"
>;

export const BLOG_DIVERSIFIED: Record<string, DiversifiedPatch> = {
  "ibrahim-strpljenje-i-vjera": {
    articleFormat: "story",
    skipGenericSupplement: true,
    readingTimeMin: 9,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Priča koja je počela u Frankfurtu",
        paragraphs: [
          "Subotom u vikend školi sedamgodišnja Emina digla je ruku i rekla: „Ne razumijem — zašto bi Ibrahim ostavio kuću?” Učiteljica je stala, pustila tišinu i odgovorila jednostavno: „Jer je vjerovao da Allah zna bolje nego strah.” Ta rečenica promijenila je ton cijelog razreda.",
          "Ovo nije bajka sa savršenim junakom. Ibrahim (a.s.) je bio dijete koje je gledalo zvijezde, odrastao u gradu gdje su ljudi klanjali statue, i godinama čekao da ljudi čuju istinu. Naša priča danas ide tim redom — od dvorišta do vatre, ali bez straha koji paralizira.",
        ],
      },
      {
        pullQuote: "Strpljenje nije čekanje bez nade — to je hod ka Allahu dok niko ne aplaudira.",
        paragraphs: [
          "Kad Emina dođe kući u Sachsenhausen, majka joj ne da predavanje. Pitaju se: „Šta te danas zbunilo?” i „Šta bih ja uradila da me svi gledaju čudno?” Djeca u dijaspori najbolje uče kad se priča poveže sa njihovim stomakom, ne samo sa učbenikom.",
        ],
      },
      {
        heading: "Scena iz Kur'ana — kratko, jasno",
        paragraphs: [
          "Ibrahim je razbio idole — ne iz mržnje prema ljudima, već zato što je istina bila važnija od udobnosti. Narod se naljutio. Bacili su ga u vatru. Allah je spasio onoga ko je ostao uz Njega.",
        ],
        listItems: [
          "Allah je Stvoritelj — niko drugi ne zaslužuje klanjanje.",
          "Hrabrost ne znači da nema straha; znači da ne odustaneš.",
          "Roditelji i djeca danas također biraju između pritiska okoline i vjere.",
        ],
      },
      {
        heading: "Šta smo naučili poslije priče",
        paragraphs: [
          "Emine majka je zapisala tri rečenice u notes: „Strpljenje je ponavljanje malih odluka.” Sljedeće sedmice, kad je Emina morala objasniti zašto ne jede nešto u školi, nije pobjegla — rekla je kratko i pristojno. To je bila njezina mala vatra.",
        ],
        listItems: [
          "Vjera se ne dokazuje bukom, već dosljednošću.",
          "Roditelj ne mora znati sve — dovoljno je biti prisutan.",
          "Priča proroka može biti most između škole i kuće.",
        ],
      },
      {
        heading: "Tri pitanja za večeras",
        paragraphs: ["Završite bez kviza. Samo razgovor."],
        listItems: [
          "Kad si zadnji put radio nešto teško, ali ispravno?",
          "Ko te je podržao kad si se osjećao usamljeno?",
          "Šta znači „Allah je sa strpljivima” u tvom životu?",
        ],
      },
    ],
    faq: [
      { q: "Da li djeca moraju znati sve detalje o idolu?", a: "Ne. Fokus na vjeru u Allaha i spašenje u vatri je dovoljan do 9. godine." },
      { q: "Kako odgovoriti na pitanje o kažnjavanju?", a: "Objasnite da Allah spašava, a ne da traži patnju radi patnje." },
    ],
    faqTitle: "Roditelji pitaju",
    faqStyle: "visible",
  },

  "musa-i-faraon-za-djecu": {
    articleFormat: "timeline",
    skipGenericSupplement: true,
    readingTimeMin: 10,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Zašto Musa na vremenskoj liniji?",
        paragraphs: [
          "U Münchenu je jedan učenik nacrtao Musu kao superheroja sa štapom. Superheroji nemaju Midjan. Pravi Musa (a.s.) je imao — i to je ono što djeca trebaju vidjeti: duga priprema prije velike scene.",
        ],
      },
      {
        heading: "Musa kroz godine — linija života",
        timeline: [
          { when: "Rano djetinjstvo", title: "U kući Faraona", body: "Spasen kao beba, odrastao u dvoru — ali srce mu pripada Allahu, ne tituli." },
          { when: "Mladi Musa", title: "Incident u Egiptu", body: "Brani slabiijeg; događaj ga tjera da bježi. Greška i odgovornost — djeca trebaju znati da i proroci uče." },
          { when: "Godine u Midjanu", title: "Tiha škola strpljenja", body: "Brak, rad, čekanje. Nema Faraona — ima rast karaktera." },
          { when: "Planina Tur", title: "Allah govori", body: "Musa dobija misiju. On se boji — Allah ga učvršćuje." },
          { when: "Pred Faraonom", title: "Hrabrost riječi", body: "Nema mača — ima istinu. Faraon odbija; narod vidi čuda." },
          { when: "Put u pustinji", title: "Vođstvo naroda", body: "Strpljenje sa ljudima koji se žale — Musa uči voditi, ne samo pobijediti." },
        ],
      },
      {
        heading: "Jedna lekcija po fazi (za učitelje)",
        paragraphs: ["Vikend škola može proći kroz liniju u šest subota — jedna tačka sedmično."],
        listItems: [
          "Djetinjstvo: identitet ne dolazi iz statusa.",
          "Midjan: Allah priprema prije velikog zadatka.",
          "Faraon: istina se izgovori glasno, ali pristojno.",
        ],
      },
      {
        heading: "Povezivanje sa ILMBUDS",
        paragraphs: [
          "Nakon linije, otvorite kviz o prorocima ili priču o moru. Djeca pamte redoslijed kad imaju sliku vremena, ne samo imena.",
        ],
      },
    ],
    faq: [
      { q: "Koliko detalja o smrti Faraona?", a: "Za mlađe djecu dovoljno reći da je zlo konačno poraženo; detalje ostavite za starije." },
      { q: "Zašto Musa ima govornu manu u hadisu?", a: "Uči djecu da Allah bira karakter, ne savršeni performans." },
    ],
    faqTitle: "Napomene za razgovor",
    faqStyle: "numbered",
  },

  "yusuf-optuzba-i-otpuštenje": {
    articleFormat: "story",
    skipGenericSupplement: true,
    readingTimeMin: 8,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Kad je nepravda boli — priča Amine iz Züricha",
        paragraphs: [
          "Amina (10) došla je kući plakanjem: učiteljica ju je pogrešno optužila da je kopirala. Nije. Majka joj je rekla: „Znaš li priču o Yusufu?” Te noći nisu učile o zatvoru — učile su o srcu koje ne mrzi.",
          "Yusuf (a.s.) je volio oca. Braća su bili ljubomorna. Bacili su ga u bunar, prodali, optužili nepravedno. Godinama je čekao. Mogao je ogorčiti se — nije.",
        ],
      },
      {
        heading: "Šta se desilo u priči (bez preterivanja)",
        paragraphs: [
          "Yusuf je oprostio braći kad su došli gladni. Reče: „Vi ste danas u teškoj situaciji — ja sam na milosti.” To nije slabašnost; to je snaga koja dolazi od Allaha.",
        ],
        pullQuote: "Oprost ne znači zaboraviti nepravdu — znači pustiti mržnju da ne upravlja tvojim sutra.",
      },
      {
        heading: "Lekcije koje Amina zapamti",
        listItems: [
          "Nepravda se dešava i dobrim ljudima.",
          "Strpljenje ne znači šutjeti zauvijek — znači ne vraćati zlo istim.",
          "Allah vidi ono što učiteljice i drugi ne vide.",
          "Porodica može biti mjesto gdje se rana liječi pričom, ne krikom.",
        ],
      },
      {
        heading: "Refleksija za cijelu porodicu",
        paragraphs: [
          "Pitajte: „Da li bismo mi oprostili kao Yusuf?” Nema tačnog odgovora — ima iskrenog. Djeca trebaju čuti da oprost ponekad traje mjesecima.",
        ],
      },
    ],
    faq: [
      { q: "Da li učiti o testu žene?", a: "Za djecu preskočite; fokus na oprost i strpljenje." },
      { q: "Ako dijete ne želi oprostiti?", a: "Normalno. Krenite od empatije, ne od prisile." },
    ],
    faqTitle: "Pitanja nakon priče",
    faqStyle: "accordion",
  },

  "iskrenost-u-skoli": {
    articleFormat: "parent-guide",
    skipGenericSupplement: true,
    readingTimeMin: 7,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Vodič za roditelje: iskrenost u školi i kod kuće",
        paragraphs: [
          "Ovaj tekst nije za djecu da čitaju sami — vi vodite. Cilj: jedna jasna poruka sedmice dana, bez moraliziranja.",
        ],
      },
      {
        heading: "Greške koje roditelji često prave",
        listItems: [
          "Kažu „reci istinu” ali kazne prestrogo kad dijete prizna grešku.",
          "Lažu pred djetetom (telefon, odsustvo) pa očekuju savršenstvo.",
          "Porede dijete sa „iskrenijim” bratom/sestrom.",
          "Ignorišu mali lažljivi navik kad su umorni poslije posla.",
        ],
      },
      {
        heading: "Praktični savjeti koji rade",
        paragraphs: [
          "U Kölnu jedna porodica uvodi „prvo priznanje bez vike” — prvi put sedmice dijete prizna grešku, roditelj samo kaže hvala na iskrenosti, riješi posljedicu sutra.",
        ],
        listItems: [
          "Modelirajte ispravku: „Oprostite, pogriješio sam.”",
          "Razlikujte laž i maštu kod mališana.",
          "Pitajte šta se desilo prije nego što sudite.",
        ],
      },
      {
        heading: "Akcijska lista — sedmica iskrenosti",
        checklist: [
          { item: "Ponedjeljak: roditelj prizna malu grešku pred djetetom." },
          { item: "Srijeda: dijete kaže istinu o zadaći — bez kazne za iskrenost." },
          { item: "Petak: porodični razgovor — jedna situacija iz škole." },
          { item: "Subota: ILMBUDS kviz o istini ili hadis o iskrenosti." },
        ],
      },
    ],
    faq: [
      { q: "Šta ako dijete laže iz straha?", a: "Smanjite strah prije nego tražite istinu." },
      { q: "Da li nagraditi iskrenost?", a: "Pohvala da — mito ne; dijete ne smije lažati da dobije nagradu." },
    ],
    faqTitle: "Brzi odgovori za roditelje",
    faqStyle: "visible",
  },

  "zahvalnost-allahu-i-ljudima": {
    articleFormat: "activity",
    skipGenericSupplement: true,
    readingTimeMin: 6,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Zahvalnost kroz igru — uvod za cijelu porodicu",
        paragraphs: [
          "Umjesto dugog članka, ovdje su tri aktivnosti koje možete uraditi ovaj vikend. Svaka traje 15–20 minuta.",
        ],
      },
      {
        heading: "Aktivnosti",
        activities: [
          {
            title: "Tri kutije zahvalnosti",
            age: "5–8",
            materials: ["3 male kutije", "papir", "olovke"],
            steps: [
              "Označite kutije: Allah, porodica, škola.",
              "Svaki dan ubacite papirić sa jednom zahvalnošću.",
              "Petkom pročitajte naglas.",
            ],
          },
          {
            title: "Zahvalna šetnja",
            age: "7–11",
            materials: ["Nema"],
            steps: [
              "U šetnji do džamije ili parka nađite 5 stvari za koje ste zahvalni.",
              "Svako kaže jednu bez prekidanja.",
              "Završite sa Alhamdulillah.",
            ],
          },
          {
            title: "Poruka zahvalnosti",
            age: "9–12",
            materials: ["Papir ili telefon za učitelja"],
            steps: [
              "Napišite kratku poruku učiteljici vikend škole ili baki.",
              "Objasnite zašto — ne samo „hvala”.",
              "Pošaljite ili uručite uživo.",
            ],
          },
        ],
      },
      {
        heading: "Zašto ovo radi",
        paragraphs: [
          "Zahvalnost u islamu nije abstraktna riječ — to je navika. Djeca u Stuttgartu koja su radila „tri kutije” imala su manje žalbi tokom sedmice, prema roditeljima.",
        ],
      },
    ],
    faq: [
      { q: "Mora li dijete pisati?", a: "Može crtati simbol umjesto riječi." },
    ],
    faqTitle: "Organizacija aktivnosti",
    faqStyle: "accordion",
  },

  "strpljenje-kad-je-teško": {
    articleFormat: "parent-guide",
    skipGenericSupplement: true,
    readingTimeMin: 8,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Roditeljski vodič: kad strpljenje pukne",
        paragraphs: [
          "Ne pišemo o idealnom djetetu koje nikad ne vrišti. Pišemo o vašem stvarnom petku u 17:30 — posao, saobraćaj, domaća zadaća, brat i sestra u sukobu.",
        ],
      },
      {
        heading: "Signali da dijete ne može „samo biti strpljivo”",
        listItems: [
          "Glad, umor, previše ekrana — fiziologija prije morala.",
          "Osjećaj nepravde: starijem bratu dozvoljeno više.",
          "Pritisak škole: dijete nosi stres koji ne zna imenovati.",
        ],
      },
      {
        heading: "Šta pomaže (testirano u porodicama)",
        paragraphs: ["Mali ritual prije reakcije: udah, Bismillah, pauza 10 sekundi."],
        checklist: [
          { item: "Imenujte emociju: „Vidim da si ljut.”" },
          { item: "Odložite lekciju — prvo smiri tijelo." },
          { item: "Vratite se hadisu o strpljenju kad su oboje spremni." },
          { item: "Ne uspoređujte sa „strpljivijim” djetetom iz porodice." },
        ],
      },
      {
        heading: "Kad roditelj izgubi strpljenje",
        paragraphs: [
          "Izvini se djetetu. To nije slabost — to je sunnet odgoja. Djeca u Innsbrucku su rekla da im najviše znači kad tata kaže: „I ja učim.”",
        ],
      },
    ],
    faq: [
      { q: "Da li kažnjavati izlive?", a: "Da, ali nakon smirenja — objasnite granicu, ne samo kaznu." },
    ],
    faqTitle: "Roditelji pitaju",
    faqStyle: "numbered",
  },

  "pomaganje-siromasima": {
    articleFormat: "myth-fact",
    skipGenericSupplement: true,
    readingTimeMin: 7,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Mitovi i činjenice o sadaki i zadatku (za djecu i roditelje)",
        paragraphs: [
          "U Berlinu djeca često čuju miješane poruke: „samo bogati daju”, „moraš dati sve”, „Allah voli samo velike iznose.” Ovdje razdvajamo šta nije tačno od onoga što islam stvarno uči.",
        ],
      },
      {
        heading: "Mit vs činjenica",
        mythFacts: [
          { myth: "Samo odrasli mogu davati sadaku.", fact: "Poslanik ﷺ je prihvatio dati i od djeteta — važna je namjera i poštenje, ne veličina novčanika." },
          { myth: "Ako nemaš puno, nema smisla davati.", fact: "Mali iznos sa iskrenim srcem može biti veći u očima Allaha od velikog iznosa bez ljubavi." },
          { myth: "Sadaka je samo novac.", fact: "Osmijeh, pomoć, dobra riječ i dijeljenje hrane također su sadaka." },
          { myth: "Treba se hvaliti da bi drugi davali.", fact: "Islam uči tajnost u milostinjama — hvala ide Allahu, ne nama." },
        ],
      },
      {
        heading: "Prvi korak ove sedmice",
        paragraphs: [
          "Porodica stavi kovanicu u kutiju svaki petak. Dijete bira kome — susjed, humanitarna akcija džamije, školski fond. Razgovor je važniji od iznosa.",
        ],
      },
    ],
    faq: [
      { q: "Koliko od džeparača?", a: "Onoliko koliko ne stvara krivicu — čak i 50 centi sa namjerom je poučan početak." },
    ],
    faqTitle: "Ispravke u razgovoru",
    faqStyle: "visible",
  },

  "postovanje-razlicitosti": {
    articleFormat: "qa",
    skipGenericSupplement: true,
    readingTimeMin: 9,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Pitanja koja djeca u dijaspori stvarno postavljaju",
        paragraphs: [
          "U multikulturnim razredima u Grazu i Baselu ova pitanja dolaze između 8. i 11. godine. Odgovori su kratki — za dublje teme uključite imama.",
        ],
        qaPairs: [
          {
            q: "Zašto mi drugi jedu svinjetinu a ja ne?",
            a: "Allah nam je dao hranu koja nam odgovara. Poštujemo drugačije navike, ali mi biramo halal — bez vrijeđanja drugih.",
          },
          {
            q: "Smijem li se družiti sa ne-muslimanima?",
            a: "Da — islam uči convivenciju. Bitno je da znaš ko si i da ne pritisneš vjeru zbog prilagodbe.",
          },
          {
            q: "Šta reći kad me pitaju za hidžab mame?",
            a: "„Moja mama nosi hidžab jer vjeruje da je to lijep način da pokaže vjeru.” Kratko, mirno, bez debate u hodniku.",
          },
          {
            q: "Da li moram slaviti tuđe praznike?",
            a: "Možeš biti ljubazan prema drugima bez odricanja od svoje vjere. Čestitka i poštovanje nisu isto što i vjerski praznik.",
          },
          {
            q: "Šta ako me ismijavaju zbog namaza?",
            a: "Reci odraslom u školi ili roditelju. Tvoja vjera nije sramota — ali ne moraš se sam boriti u svađi.",
          },
        ],
      },
      {
        heading: "Vježba za kuću",
        paragraphs: ["Uparite dijete sa roditeljem: jedno pitanje, jedan odgovor u rečenici. Snimite glas samo za porodicu — ne za mreže."],
      },
    ],
    faq: [],
    faqTitle: "",
    faqStyle: "visible",
  },

  "odgovornost-muslimana": {
    articleFormat: "parent-guide",
    skipGenericSupplement: true,
    readingTimeMin: 6,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Odgovornost — vodič bez teologije u jednom paragrafu",
        paragraphs: [
          "Hadis kaže da smo svi pastiri. Roditelji biraju šta pase — djeca uče gledajući šta vi vraćate, čuvate i popravljate.",
        ],
      },
      {
        heading: "Česte roditeljske greške",
        listItems: [
          "Raditi sve umjesto djeteta pa očekivati zahvalnost.",
          "Davati odgovornost samo starijem djetetu.",
          "Kazniti zaborav, a ne učiti sistem.",
        ],
      },
      {
        heading: "Sedmica odgovornosti — checklist",
        checklist: [
          { item: "Dijete čuva jedan predmet u kući (ključevi, biljka, kutija obuće)." },
          { item: "Vraća pozajmljenu stvar u školi ili džamiji." },
          { item: "Prijava roditelju kad nešto slomi — prije nego sakrije." },
          { item: "Jedna dobrovoljna pomoć u vikend školi." },
        ],
      },
    ],
    faq: [
      { q: "Koliko godina?", a: "Od 6–7 male dužnosti; od 10 veće, uz nadzor." },
    ],
    faqTitle: "Praktično",
    faqStyle: "accordion",
  },

  "arapska-abeceda-prvi-koraci": {
    articleFormat: "activity",
    skipGenericSupplement: true,
    readingTimeMin: 7,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Abeceda kroz ruke — radionica kod kuće",
        paragraphs: ["Pet slova, pet dana. Ne pokušavajte cijelu abecedu odjednom — to je najbrži put do frustracije u Hamburgu i Dortmundu."],
        activities: [
          {
            title: "Ponedjeljak — Alif",
            age: "5+",
            materials: ["Kartica alif", "ILMBUDS zvuk ako imate"],
            steps: ["Nacrtaj uspravnu liniju.", "Pronađi alif u riječi Allah na zidu.", "Tri puta izgovori sa učiteljem ili aplikacijom."],
          },
          {
            title: "Utorak — Ba",
            age: "5+",
            materials: ["Plastelin"],
            steps: ["Oblikuj slovo ba.", "Nađi u Bismillah.", "Poveži sa bojanom riječi „babo”."],
          },
          {
            title: "Srijeda–petak — nastavak",
            age: "6+",
            materials: ["Kartice iz vikend škole"],
            steps: ["Svaki dan jedno novo slovo.", "Ponovi prethodna.", "Petak — mali test u igri memory."],
          },
        ],
      },
      {
        heading: "Za učitelje vikend škole",
        paragraphs: ["Lov na slova po učionici i dalje najbolja metoda — djeca trče, smiju se, pamte."],
      },
    ],
    faq: [
      { q: "Greške u izgovoru?", a: "Normalne — ispravljajte nježno, ne prekidajte radost učenja." },
    ],
    faqTitle: "Organizacija",
    faqStyle: "numbered",
  },

  "ucenje-arapskog-u-dijaspori": {
    articleFormat: "parent-guide",
    skipGenericSupplement: true,
    readingTimeMin: 10,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Realan plan — ne savršen plan",
        paragraphs: [
          "Tri jezika u glavi djeteta: školski, bosanski, arapski. Roditelji u DE/AT/CH najčešće greše kad kopiraju raspored iz BiH umjesto da grade svoj.",
        ],
      },
      {
        heading: "Greške koje usporavaju napredak",
        listItems: [
          "Sat i po teorije bez igre.",
          "Kritika pred gostima.",
          "Prekid nakon jednog lošeg dana.",
          "Učenje samo kad je roditelj strog.",
        ],
      },
      {
        heading: "Tri modela koji rade",
        paragraphs: ["Odaberite jedan — ne sva tri odjednom."],
        listItems: [
          "10 minuta ujutro prije škole (audio u autu).",
          "Subotna vikend škola + ILMBUDS kviz.",
          "Večernji krug: jedna sura, jedno slovo, jedna dova.",
        ],
      },
      {
        heading: "Checklist za prvi mjesec",
        checklist: [
          { item: "Dogovor sa učiteljem vikend škole o cilju." },
          { item: "Kutija za arapske kartice na vidljivom mjestu." },
          { item: "Roditelj uči jednu novu riječ sedmično — zajedno." },
          { item: "Evaluacija bez kazne: šta je bilo teško?" },
        ],
      },
    ],
    faq: [
      { q: "Mora li roditelj znati arapski?", a: "Ne — ali mora pokazati da učenje vrijedi truda." },
    ],
    faqTitle: "Roditelji pitaju",
    faqStyle: "visible",
  },

  "dua-prije-spavanja": {
    articleFormat: "workshop",
    skipGenericSupplement: true,
    readingTimeMin: 8,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Radionica: večernja rutina za djecu (45 minuta)",
        paragraphs: ["Za roditelje i učitelice. Može u džamiji ili kod kuće — pet obitelji dovoljno."],
      },
      {
        heading: "Program radionice",
        workshopSteps: [
          {
            step: 1,
            title: "Otvaranje",
            duration: "5 min",
            instructions: ["Pozdrav.", "Pitanje: „Ko se boji mraka?” — normalizacija.", "Cilj večeri: mir, ne savršenstvo."],
          },
          {
            step: 2,
            title: "Abdest i pijama",
            duration: "10 min",
            instructions: ["Djeca prate odraslog.", "Bez žurbe.", "Pjesmica ili kratka melodija kao signal."],
          },
          {
            step: 3,
            title: "Tri kratke sure",
            duration: "15 min",
            instructions: ["Ikhlas, Falaq, Nas — jedna po jedna.", "Značenje u jednoj rečenici.", "Ponavljanje u paru."],
          },
          {
            step: 4,
            title: "Dua za spavanje",
            duration: "10 min",
            instructions: ["Učenje teksta polako.", "Roditelj drži svjetlo prigušeno.", "Završetak: „Allah čuva.”"],
          },
          {
            step: 5,
            title: "Domaca navika",
            duration: "5 min",
            instructions: ["Svako piše jednu rečenicu na hladnjak.", "Dogovor: ista satnica 7 dana."],
          },
        ],
      },
    ],
    faq: [
      { q: "Dijete ne može sve zapamtiti?", a: "Jedna sura sedmice — dovoljno." },
    ],
    faqTitle: "Nakon radionice",
    faqStyle: "accordion",
  },

  "ramazan-za-djecu-uvod": {
    articleFormat: "myth-fact",
    skipGenericSupplement: true,
    readingTimeMin: 8,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Ramazan mitovi u dijaspori — šta djeca čuju na igralištu",
        paragraphs: ["Prije prvog iftara u Mannheimu ili Linzu, očistite zablude. Djeca pamte mitove ako ih ne razgovorom ne zamijenite činjenicama."],
      },
      {
        mythFacts: [
          { myth: "Sva djeca moraju postiti punim danom.", fact: "Pubertet je graniца obaveze; mlađa djeca uče kroz polupost ili odricanje od slatkiša — po savjetu roditelja i imama." },
          { myth: "Ramazan je samo gladovanje.", fact: "To je mjesec Kur'ana, milostinja, molitve i lijepog ponašanja." },
          { myth: "Ako ne postiš savršeno, nisi dobar musliman.", fact: "Allah voli napor i iskrenost; učimo postepeno." },
          { myth: "Ramazan u školi mora biti tajna.", fact: "Možeš reći učitelju da postiš — bez detalja koji stvaraju sram." },
        ],
      },
      {
        heading: "Prvi korak za porodicu",
        paragraphs: ["Nacrtajte kalendar: zelena naljepnica za svaki dan kada dijete uradi jednu dobru stvar — ne samo za hranu."],
      },
    ],
    faq: [
      { q: "Školski ručak?", a: "Dogovor sa školom; dijete može nositi hranu ili jesti nakon Magriba — situacija je različita." },
    ],
    faqTitle: "Ramazan u praksi",
    faqStyle: "numbered",
  },

  "abdest-korak-po-korak": {
    articleFormat: "workshop",
    skipGenericSupplement: true,
    readingTimeMin: 9,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Radionica abdesta — za djecu 6–10",
        paragraphs: ["Vikend škola u Wuppertalu koristi „suvi abdest” za prvi susret — voda dolazi tek kad djeca znaju redoslijed."],
        workshopSteps: [
          { step: 1, title: "Namjera", duration: "3 min", instructions: ["Šta znači wudu?", "Kad ga radimo?", "Namjera u srcu — tiho."] },
          { step: 2, title: "Ruke i usta", duration: "8 min", instructions: ["Tri puta ruke.", "Usta — kratko, bez preterivanja.", "Nos — pokažite, ne forsirajte kod mališana."] },
          { step: 3, title: "Lice i ruke do laktova", duration: "8 min", instructions: ["Redoslijed na posteru.", "Djeca rade u paru — jedan vodi, jedan prati."] },
          { step: 4, title: "Glava, uši, stopala", duration: "10 min", instructions: ["Masah glave — jednom.", "Stopala do gležnjeva.", "Provjera: „Šta si preskočio?”"] },
          { step: 5, title: "Pravi abdest", duration: "15 min", instructions: ["Uz vodu, polako.", "Roditelj samo nadgleda.", "Dova nakon wudu — opcionalno."] },
        ],
      },
    ],
    faq: [
      { q: "Greške?", a: "Normalne — ispravka bez sramoženja." },
    ],
    faqTitle: "Za roditelje",
    faqStyle: "visible",
  },

  "pet-dnevnih-namaza": {
    articleFormat: "timeline",
    skipGenericSupplement: true,
    readingTimeMin: 9,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Pet namaza — dan djeteta u dijaspori",
        paragraphs: ["Umjesto liste pravila, pratimo Ahmeda (9) u Stuttgartu: škola, trening, Magrib u zimu."],
        timeline: [
          { when: "Fajr", title: "Prije škole — najteži", body: "Ahmed ustaje sa tatom. Kratko, mirno. Ne savršeno svaki dan — ali zajednički početak." },
          { when: "Dhuhr", title: "U školi ili kasnije", body: "Ako nema prostora, nadoknada kod kuće uz objašnjenje roditelja." },
          { when: "Asr", title: "Poslije škole", body: "Najbolje vrijeme za kviz pauzu i ILMBUDS audio." },
          { when: "Magrib", title: "Porodični iftar ili večera", body: "Zimi ranije — planiranje sportske aktivnosti oko namaza." },
          { when: "Isha", title: "Pred spavanje", body: "Povezuje se sa duom i kratkim učenjem — rutina umjesto pritiska." },
        ],
      },
      {
        heading: "Poruka roditeljima",
        paragraphs: ["Cilj nije savršenstvo u prvoj godini — cilj je da dijete zna imena i osjeća da namaz pripada danu, ne samo džamiji."],
      },
    ],
    faq: [
      { q: "Trening u Magribu?", a: "Dogovor sa trenerom ili raniji Magrib kad je moguće — imam može savjetovati." },
    ],
    faqTitle: "Praktično",
    faqStyle: "accordion",
  },

  "fatiha-objasnjenje": {
    articleFormat: "qa",
    skipGenericSupplement: true,
    readingTimeMin: 10,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Al-Fatiha — pitanja i odgovori ajet po ajet",
        paragraphs: ["Format za učenike vikend škole i roditelje. Svaki odgovor može biti jedna lekcija."],
        qaPairs: [
          { q: "Zašto se zove „Otvaranje”?", a: "Jer otvara Kur'an i svaki rak'at namaza." },
          { q: "Šta znači Bismillah?", a: "Počinjem u ime Allaha — tražimo pomoć prije riječi i djela." },
          { q: "„Hamd” — hvala kome?", a: "Allahu, Gospodaru svjetova — ne samo našoj porodici ili školi." },
          { q: "„Rabb al-alamin” — šta su „svjetovi”?", a: "Sve što Allah stvara: ljudi, životinje, planete — mi smo mali, ali važni." },
          { q: "„Maliki yawm ad-din” — Sudnji dan?", a: "Dan kada će svi odgovarati za postupke — zato učimo dobro već sad." },
          { q: "„Iyyaka na'budu” — zašto samo Tebe?", a: "Namaz, post, ljubav — sve ide Allahu, ne idolima modernog života." },
          { q: "„Ihdinas-siratal-mustaqim” — pravi put?", a: "Put Poslanika ﷺ i vjernika — tražimo ga svaki dan u molitvi." },
        ],
      },
      {
        heading: "Kako učiti",
        paragraphs: ["Jedno pitanje sedmično. Djeca starija mogu voditi mlađu — učenje kroz podučavanje."],
      },
    ],
    faq: [],
    faqTitle: "",
    faqStyle: "visible",
  },

  "gradjenje-dobrog-srca": {
    articleFormat: "story",
    skipGenericSupplement: true,
    readingTimeMin: 7,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Tri scene iz škole — jedno srce",
        paragraphs: [
          "Lejla (8) vidjela je kako nova učenica sjedi sama u refektoriju. Nije znala šta reći — sjedla pored nje i podijelila jabuku. To je bilo prvo „dobro srce” te sedmice.",
          "Sljedeći dan, brat Lejle ismijavao je accent u igri. Lejla ga uhvati za ruku: „Ne tako.” Nije bila savršena — ali prepoznala je trenutak.",
          "Petkom, u džamiji, učiteljica spominje hadis o srcu. Lejla kaže: „Mislim da srce raste kad pokušamo opet.” Cijela grupa se nasmijala — ali učiteljica je klimnula.",
        ],
      },
      {
        heading: "Lekcije iz Lejlinog tjedna",
        listItems: [
          "Dobro srce nije odsustvo greške — to je brzina ispravke.",
          "Mali gestovi u školi imaju težinu u očima Allaha.",
          "Roditelj ne mora dati predavanje — pitanje „šta bi bilo bolje?” ponekad dovoljno.",
        ],
      },
      {
        heading: "Refleksija",
        paragraphs: ["Pitajte dijete: „Koja od tri scene liči tebi?” Nema lošeg odgovora — ima početka razgovora."],
      },
    ],
    faq: [
      { q: "Lejla je izmišljen lik?", a: "Da — kompozit iz stvarnih situacija u ILMBUDS radionicama." },
    ],
    faqTitle: "Napomena",
    faqStyle: "visible",
  },

  "muhammad-poslanik-milosti": {
    articleFormat: "story",
    skipGenericSupplement: true,
    readingTimeMin: 9,
    updatedAt: "2026-06-04",
    sections: [
      {
        heading: "Tri scene iz života Poslanika ﷺ",
        paragraphs: ["Umesto enciklopedije, tri slike koje djeca mogu ponoviti drugu."],
      },
      {
        heading: "Scene",
        paragraphs: [
          "1) Djeca na leđima u salatu — ﷺ produžio stajanje da ne probudi dijete. Milost u ibadeti.",
          "2) Beduin u džamiji — urinuo u pogrešno mjesto. Sahabe su htjeli kazniti; ﷺ rekao da ga nježno naučite. Milost u odgoju.",
          "3) Stari neprijatelj na ulazu u Medinu — ﷺ mu ponudio mantiju. Milost prema onima koji su nas vrijeđali.",
        ],
      },
      {
        pullQuote: "Milost ﷺ nije bila slabost — bila je snaga koja je mijenjala srca.",
        paragraphs: ["U porodici: pitajte „Kako bismo mi postupili?” — ne da kopiramo, nego da razmislimo."],
      },
    ],
    faq: [
      { q: "Detalji hadisa?", a: "Provjerite sa učiteljem vikend škole — koristimo standardne izvore." },
    ],
    faqTitle: "Izvori",
    faqStyle: "numbered",
  },
};

export function applyBlogDiversification(articles: BlogArticle[]): BlogArticle[] {
  return articles.map((article) => {
    const patch = BLOG_DIVERSIFIED[article.slug];
    if (!patch) return article;
    return { ...article, ...patch };
  });
}

export function getDiversifiedSlugs(): string[] {
  return Object.keys(BLOG_DIVERSIFIED);
}

export function countTemplateHeadings(articles: BlogArticle[]): Map<string, number> {
  const counts = new Map<string, number>();
  const templateMarkers = [
    "Šta Kur'an i sunnet kažu?",
    "Historijski i edukativni kontekst",
    "Zaključak i sljedeći koraci",
    "Savjeti roditeljima i učiteljima",
  ];
  for (const a of articles) {
    for (const s of a.sections) {
      if (s.heading && templateMarkers.includes(s.heading)) {
        counts.set(s.heading, (counts.get(s.heading) ?? 0) + 1);
      }
    }
  }
  return counts;
}
