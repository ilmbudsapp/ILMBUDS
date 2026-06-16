export type ContentHumanization = {
  teachingMoment: string;
  realLifeExample?: string;
  parentTips: string[];
  classroomIdeas: string[];
};

const PARENT_TIPS_BASE = [
  "Čitajte sadržaj glasno jednom sedmično — djeca bolje pamte kad čuju vaš ton, ne samo ekran.",
  "Postavite jedno pitanje nakon čitanja umjesto deset; dublji razgovor je bolji od kviza.",
  "Povežite lekciju sa događajem iz prošle sedmice (škola, džamija, posjet rodbini).",
  "Ako dijete ne odgovori odmah, vratite se temi za dva dana — učenje vjere nije utrka.",
];

const CLASSROOM_BASE = [
  "Podijelite učionicu u parove: svaki par izmisli mini-scenu iz škole i predstavi rješenje prema hadisu/članku.",
  "Nacrtajte poster sa tri ključne riječi i objesite u vikend školi do sljedeće lekcije.",
  "Završite lekciju dvominutnom refleksijom: „Šta ću danas uraditi drugačije?”",
  "Koristite ILMBUDS kviz nakon članka kao završni zadatak — isti jezik, drugi format.",
];

function mergeTips(extra: string[]): string[] {
  return [...extra, ...PARENT_TIPS_BASE.slice(0, 2)];
}

function mergeClassroom(extra: string[]): string[] {
  return [...extra, ...CLASSROOM_BASE.slice(0, 2)];
}

const HADITH_SUPPLEMENTS: Record<string, ContentHumanization> = {
  "ljubaznost-prema-roditeljima": {
    teachingMoment:
      "Jednom sedmice zamolite dijete da samo posmatra kako se roditelji osjećaju kad su umorni — bez lekcije, samo empatija. Sljedeći dan pitajte: „Šta možeš uraditi prije nego što te pitaju?”",
    realLifeExample:
      "U porodici iz Ulm-a sedamgodišnjak je počeo sam spremati čaj kad vidi da mama dolazi s posla — mali gest, velika promjena u tonu kuće.",
    parentTips: mergeTips([
      "Ne tražite savršenstvo; tražite jedan ljubazan gest dnevno.",
      "Modelirajte pristojan ton i kad ste nervozni — djeca kopiraju reakciju, ne samo riječi.",
    ]),
    classroomIdeas: mergeClassroom([
      "Učenici napišu „karticu zahvalnosti” roditeljima ili učiteljici vikend škole.",
      "Diskusija: kako izgleda poštovanje u digitalnom svijetu (poruke, glasovne)?",
    ]),
  },
  "istina-i-iskrenost": {
    teachingMoment:
      "Igrajte „tihi izbor”: pročitajte tri kratke situacije (zadaća, igra, poruka) i dijete podigne karticu — istina ili laž. Razgovor poslije je važniji od tačnog odgovora.",
    realLifeExample:
      "Učenik iz Nürnberga priznao je učiteljici da nije učio — roditelj ga nije kaznio, već pohvalio hrabrost; sljedeći test je učio s mirnijim stomakom.",
    parentTips: mergeTips([
      "Kad dijete prizna grešku, prvo pohvalite iskrenost, pa riješite posljedicu.",
      "Izbjegavajte pitanja zamke („Jesi li siguran?”) — otvaraju prostor za malu laž.",
    ]),
    classroomIdeas: mergeClassroom([
      "Lanac priča: svako doda rečenicu gdje junak bira istinu umjesto lake laži.",
      "Tablica „šta kažem umjesto laži” (npr. „Nisam spreman” umjesto izgovora).",
    ]),
  },
  "lijepo-ponasanje": {
    teachingMoment:
      "Dodijelite „ahlak značku dana” — dijete koje primijeti lijep ponašanje kod druga i kaže mu to naglas (bez ismijavanja).",
    realLifeExample:
      "U vikend školi u Grazu učenica je svaki petak birala „ahlak heroja sedmice” — maniri su postali razgovor, ne samo pravilo.",
    parentTips: mergeTips([
      "Kad dijete pogriješi, fokusirajte se na ponašanje koje želite vidjeti sljedeći put.",
      "Pohvalite pristojnost prema uslugaocima (prodavač, vozač autobusa).",
    ]),
    classroomIdeas: mergeClassroom([
      "Role-play ulaza u džamiju i pozdrava starijima.",
      "Kolektivni dogovor o tri pravila ljubaznosti u učionici.",
    ]),
  },
  "pomaganje-drugima": {
    teachingMoment:
      "Napravite „kutiju pomoći”: mali predmeti ili poruke koje porodica daje susjedu ili školi — dijete bira šta i kome.",
    realLifeExample:
      "Porodica iz Köln-a svake subote nosi kantu u džamiju; dijete pomaže starijem nositi torbu do auta.",
    parentTips: mergeTips([
      "Pomoć ne mora biti velika — važno je da dijete vidi da je sposobno dati.",
      "Spomenite hadis prije običnog dana volonterstva u zajednici.",
    ]),
    classroomIdeas: mergeClassroom([
      "Projekt „pomoć učionici”: čisti ugao, sortiranje knjiga, dobrodošlica novom učeniku.",
      "Mapa: gdje u našoj mahali možemo pomoći?",
    ]),
  },
  "postovanje-starijih": {
    teachingMoment:
      "Vježbajte kako ustati, pozdraviti i dati mjesto starijem — fizički gest pomaže mlađima da zapamte.",
    realLifeExample:
      "Djed iz Sarajeva posjetio Frankfurt; unuk je naučio „Selam alejkum” i kako donijeti stolicu prije nego što djed sjedne.",
    parentTips: mergeTips([
      "Povežite starije sa pričama — djeca poštuju ono što poznaju kao osobu.",
      "Objasnite razliku između poštovanja i straha od starijih.",
    ]),
    classroomIdeas: mergeClassroom([
      "Pozovite starijeg iz zajednice na 15-minutni razgovor u vikend školi.",
      "Učenici napišu pitanja za bake/dede i donesu odgovore sljedeće sedmice.",
    ]),
  },
  "osmijeh-sadaka": {
    teachingMoment:
      "Jedan dan bez žalbe — izazov za cijelu porodicu. Osmijeh i dobra riječ broje se kao sadaka.",
    realLifeExample:
      "U autobusu u Baselu dijete je ustupilo mjesto i nasmijalo se susjedu; mama kasnije rekla da je to bio njihov „sadaka dan”.",
    parentTips: mergeTips([
      "Ne forsirajte lažni osmijeh — tražite iskrenu dobru namjeru.",
      "Podsjetite da riječi na mrežama također mogu biti sadaka ili suprotno.",
    ]),
    classroomIdeas: mergeClassroom([
      "Zid „dobrih riječi” — učenici lijepе kompliment kartice (anonimno).",
      "Brojanje osmijeha: koliko puta danas smo uljepšali dan nekome?",
    ]),
  },
  "milost-prema-zivotinjama": {
    teachingMoment:
      "Posmatrajte pticu ili mačku kroz prozor — pitajte: „Kako bismo bili gostoljubivi prema ovom stvorenju?”",
    realLifeExample:
      "Porodica iz Hannovera napuni posudu s vodom za ptice na balkonu; dijete vodi „dnevnik posjeta”.",
    parentTips: mergeTips([
      "Objasnite da je milost prema životinjama dio odgovornosti halife.",
      "Ako imate ljubimca, uključite dijete u njegu — hrana, čistoća, mir.",
    ]),
    classroomIdeas: mergeClassroom([
      "Crtež: kako brinemo o stvorenjima Allaha.",
      "Razgovor o hrani — odakle dolazi i zašto ne rasipamo.",
    ]),
  },
  "vaznost-namaza": {
    teachingMoment:
      "Nacrtajte „moj namaz dan” — dijete označi koji namaz je obavio i kako se osjećalo prije i poslije.",
    realLifeExample:
      "Devetogodišnjak u Stuttgartu je prvi put sam klanjao Isha nakon ILMBUDS kviza o namazu — roditelj je samo prisustvovao, bez komentara.",
    parentTips: mergeTips([
      "Počnite sa jednim namazom zajedno, ne sa svih pet odjednom.",
      "Koristite ILMBUDS audio namaza kao pozadinu za učenje reda.",
    ]),
    classroomIdeas: mergeClassroom([
      "Kartice imena namaza + vremena (pojednostavljeno po sezoni).",
      "Učenici u glavnom glasu izgovore „Allahu Ekber” i objašnjavaju značenje.",
    ]),
  },
  "ljubav-medju-muslimanima": {
    teachingMoment:
      "Zamolite dijete da danas kaže iskrenu dobru riječ drugom muslimanu van porodice — u džamiji ili vikend školi.",
    realLifeExample:
      "Dvoje učenika iz različitih gradova upoznalo se na ILMBUDS kvizu i nastavilo razgovor o zajedničkom jeziku vjere.",
    parentTips: mergeTips([
      "Ne idealizujte zajednicu — učite i kako popraviti nesporazum sa ljubavlju.",
      "Spomenite da se ljubav pokazuje i u trpljenju mane druga.",
    ]),
    classroomIdeas: mergeClassroom([
      "Krug: svako kaže jednu stvar koju cijeni kod druga u grupi.",
      "Poster „Kako pomažemo jedni drugima u ummetu”.",
    ]),
  },
  "cistoca-srca": {
    teachingMoment:
      "Večernja refleksija: „Da li sam danas zavidio, lagao ili govorio ružno?” — tri pitanja, bez suda, sa istigfarom.",
    realLifeExample:
      "Mama iz Innsbrucka vodi „minut čistoće srca” prije spavanja; dijete je samo tražilo da nastave nakon prve sedmice.",
    parentTips: mergeTips([
      "Čistoća srca uključuje oprost sebi — djeca trebaju vidjeti da se možemo popraviti.",
      "Ograničite sadržaj koji hrani zavidnost (gaming, poređenje).",
    ]),
    classroomIdeas: mergeClassroom([
      "Tiho pisanje: „Šta bih volio promijeniti u sebi?” — opcionalno dijeljenje.",
      "Učenje kratke dove za istigfar sa značenjem.",
    ]),
  },
  "dobar-susjed": {
    teachingMoment:
      "Zajedno donesite susjedu nešto malo (kolač, cvijet) bez očekivanja zauzvrat — objasnite hadis o susjedu.",
    realLifeExample:
      "Porodica u Berlinu pomaže starijoj susjedi nositi poštu; dijete je iniciralo pozdrav svaki put kad je vidi.",
    parentTips: mergeTips([
      "U dijaspori susjed može biti i nemusliman — poštovanje je univerzalno.",
      "Učite granice: pomoć ne znači ulazak u tuđi prostor bez dozvole.",
    ]),
    classroomIdeas: mergeClassroom([
      "Mapa „dobre susjedstvo”: šta možemo učiniti u zgradi ili ulici?",
      "Pisanje poruke zahvalnosti lokalnoj džamiji ili školi.",
    ]),
  },
  "ucenje-i-znanje": {
    teachingMoment:
      "Postavite „pitanje sedmice” na frižider — svako u porodici d-ifik uključujući roditelje, traži odgovor u knjizi ili kod imama.",
    realLifeExample:
      "Učenik iz Münchena pitao zašto učimo i dunja i školski predmet; otac objasnio hadis o znanju i povezao sa doktorom i inženjerom u porodici.",
    parentTips: mergeTips([
      "Hvalite trud u učenju, ne samo ocjene.",
      "Pokažite da i vi učite — jezik, Kuran, vještina.",
    ]),
    classroomIdeas: mergeClassroom([
      "Mini-istrazivanje: pronađi jedan hadis o znanju i predstavi ga grupi.",
      "Korner knjiga u učionici — djeca donose omiljenu islamsku priču.",
    ]),
  },
  strpljenje: {
    teachingMoment:
      "Kad se dijete naljuti, zajedno uradite tri duboka udaha i recite kratku dua — pauza prije riječi.",
    realLifeExample:
      "Brat i sestra iz Wuppertala dogovorili „signal strpljenja” (podignuta ruka) prije svađe — smijeh im je pomogao da zapamte.",
    parentTips: mergeTips([
      "Strpljenje roditelja je najjači model — priznajte kad i vi puknete.",
      "Ne koristite hadis o strpljenju kao kritiku u svađi.",
    ]),
    classroomIdeas: mergeClassroom([
      "Igra „mirni glas”: predstavi situaciju iz škole bez vikanja.",
      "Poster: „Šta radim prije nego reagujem?”",
    ]),
  },
  zahvalnost: {
    teachingMoment:
      "Večernji ritual: svako navede tri stvari — jednu od Allaha, jednu od ljudi, jednu malu svakodnevnu.",
    realLifeExample:
      "Porodica iz Berna vodi dnevnik zahvalnosti na bosanskom; mlađe dijete crta umjesto pisanja.",
    parentTips: mergeTips([
      "Zahvalnost Allahu i roditeljima povežite u istom razgovoru.",
      "Izbjegavajte poređenje „u BiH smo imali manje” — fokus na sadašnji dar.",
    ]),
    classroomIdeas: mergeClassroom([
      "Zid zahvalnosti u vikend školi — kartice sedmično.",
      "Učenici napišu zahvalnicu osobi u zajednici.",
    ]),
  },
  "cuvanje-jezika": {
    teachingMoment:
      "Jedan dan „samo lijep riječnik” — bez ružnih riječi ni u šali; roditelji također.",
    realLifeExample:
      "Dijete u Grazu ispravilo oca kad je koristio grub izraz u saobraćaju — svi su se nasmijali i dogovorili alternativu.",
    parentTips: mergeTips([
      "Objasnite da je jezik na mrežama također amanet.",
      "U dijaspori povežite bosanski/arapski sa ponosom, ne sa kaznom.",
    ]),
    classroomIdeas: mergeClassroom([
      "Lista „ljepše riječi” umjesto uvreda — učenici dopunjavaju.",
      "Čitanje hadisa o jeziku i diskusija o chat porukama.",
    ]),
  },
  "briga-o-sirotinji": {
    teachingMoment:
      "Pripremite mali paketić (čarape, keks) za lokalnu humanitarnu akciju — dijete piše poruku podrške.",
    realLifeExample:
      "Vikend škola u Dortmundu skupljala je školski pribor; djeca su nosila kutije i znala za koga idu.",
    parentTips: mergeTips([
      "Objasnite razliku između sirotinje u hadisu i „siromašnog” u medijima — bez stigme.",
      "Uključite dijete u odluku koliko dati, u granicama mogućnosti.",
    ]),
    classroomIdeas: mergeClassroom([
      "Kratka priča o ashabima i sirotinji — zatim pitanja o empatiji.",
      "Kutija sadaqa u učionici tokom Ramazana.",
    ]),
  },
  "posteno-zaradjivanje": {
    teachingMoment:
      "Kod kupovine u trgovini pitajte: „Odakle znamo da je ovo halal i pošteno?” — uvod u halal i etičku potrošnju.",
    realLifeExample:
      "Tinejdžer iz Frankfurt-a počeo čitati etikete i pitati roditelje o sastojcima — mala navika, velika svijest.",
    parentTips: mergeTips([
      "Ne zastrašujte djecu finansijama — objasnite da pošten rad štiti dušu.",
      "Povežite džeparač sa odgovornošću, ne samo sa trošenjem.",
    ]),
    classroomIdeas: mergeClassroom([
      "Igra trgovine: šta je fer cijena i fer dogovor?",
      "Razgovor o zanimanjima u porodici — kako zaradujemo halal.",
    ]),
  },
  "dobra-namjera": {
    teachingMoment:
      "Prije važnog zadatka (škola, sport) recite „Bismillah” i objasnite da Allah vidi namjeru, ne samo rezultat.",
    realLifeExample:
      "Učenica nije dobila nagradu, ali je pomogla drugu na takmičenju — učiteljica vikend škole spomenula hadis o nijeti sljedeće sedmice.",
    parentTips: mergeTips([
      "Hvalite namjeru kad ishod nije savršen.",
      "Objasnite da loša namjera kvari i dobro djelo.",
    ]),
    classroomIdeas: mergeClassroom([
      "Scenariji: ista radnja, različita namjera — učenici raspravljaju.",
      "Dnevnik „danas sam namjeravao/la…”",
    ]),
  },
  skromnost: {
    teachingMoment:
      "Jedan dan bez hvalisanja postignućima — dijelite zahvalnost Allahu umjesto „ja sam najbolji”.",
    realLifeExample:
      "Dijete u Mannheimu sakrilo ocjenu da ne hvali sebe; roditelj ga učio da kaže „Alhamdulillah” i podijeli sa roditeljem privatno.",
    parentTips: mergeTips([
      "Skromnost nije stidljivost — učite zdravo samopouzdanje.",
      "Pazite na društvene mreže i poređenje u porodici.",
    ]),
    classroomIdeas: mergeClassroom([
      "Krug: pohvali druga, ne sebe — vježba empatije.",
      "Priča o skromnosti Poslanika ﷺ bez idealizacije nemogućeg.",
    ]),
  },
  bratstvo: {
    teachingMoment:
      "Dva brata ili prijatelja zajedno urade jedan posao kući — naglasite da pomoć bratu je kao pomoć sebi.",
    realLifeExample:
      "Kuzini iz Basel i Sarajevo vide se na video pozivu i zajedno uče suru — virtualno bratstvo.",
    parentTips: mergeTips([
      "Ne forsirajte „bratstvo” kad postoji stvarni sukob — prvo mir.",
      "Spomenite muslimansku dijasporu kao proširenu porodicu.",
    ]),
    classroomIdeas: mergeClassroom([
      "Parovi učenika uče jedan drugome kratku dua.",
      "Projekt: pismo podrške učeniku koji se preselio.",
    ]),
  },
  "cistoca-tijela-i-odjeca": {
    teachingMoment:
      "Zajedno provjerite „paket čistoće”: abdest, četkica, čista odjeća prije džume — checklist na hladu.",
    realLifeExample:
      "Porodica iz Linz-a stavila je djeci mali kofer u autu za put — četkica, maramica, rezervna košulja za džamiju.",
    parentTips: mergeTips([
      "Čistoća je ibadet, ne samo estetika — povežite sa wudu.",
      "U pubertetu posebno nježno objasnite promjene tijela i gusl.",
    ]),
    classroomIdeas: mergeClassroom([
      "Demonstracija abdesta (bez vode — „suvi” koraci) za mlađe.",
      "Poster redoslijeda wudu u učionici.",
    ]),
  },
  "velicina-allaha-u-srcu": {
    teachingMoment:
      "Noćno nebo ili prozor: „Šta je veće od nas?” — uvod u tawhid bez filozofije, sa divljenjem.",
    realLifeExample:
      "Dijete nakon oluje reklo da se boji grmljavine; otac pročitao ajet o Allahu i zajedno ponovili da je On jači od oluje.",
    parentTips: mergeTips([
      "Ne koristite Allahov strah kao kaznu — balans sa nadom.",
      "Povežite veličinu Allaha sa zahvalnošću za mali darovi.",
    ]),
    classroomIdeas: mergeClassroom([
      "Crtež „Allah je Stvoritelj…” — djeca dodaju stvorenja.",
      "Kratka meditacija zahvalnosti nakon salata ul-fajr (starija djeca).",
    ]),
  },
};

const BLOG_SUPPLEMENTS: Record<string, ContentHumanization> = {
  "ibrahim-strpljenje-i-vjera": {
    teachingMoment:
      "Nacrtajte „Ibrahimov put” na papiru — tri stanice: kuća, put, nova zemlja. Dijete dodaje emocije na svaku stanicu.",
    realLifeExample:
      "Porodica koja se preselila iz BiH u DE koristila je Ibrahimovu priču da objasni djeci zašto im je teško, ali zašto vjeruju u plan.",
    parentTips: mergeTips(["Koristite ilustraciju ibrahim-idols.svg kao uvod u razgovor."]),
    classroomIdeas: mergeClassroom(["Učenici glume kratku scenu odlaska od onoga što vrijeđa Allaha."]),
  },
  "musa-i-faraon-za-djecu": {
    teachingMoment:
      "Usporedite „glas u srcu” (Musa pred Faraonom) sa trenutkom kad dijete mora govoriti istinu u razredu.",
    parentTips: mergeTips(["Ne ulazite u političke paralele — fokus na hrabrost i povjerenje Allahu."]),
    classroomIdeas: mergeClassroom(["Timeline Musa (a.s.) na zidu — djeca dodaju slike."]),
  },
  "iskrenost-u-skoli": {
    teachingMoment:
      "Pročitajte članak, zatim pitajte: „Kad je istina teška, šta prvo osjetiš u stomaku?” — validacija emocija.",
    parentTips: mergeTips(["Dogovorite sa učiteljicom ako dijete priznaje grešku — podržite ga kod kuće."]),
    classroomIdeas: mergeClassroom(["Kutija anonimnih pitanja o poštenju u školi."]),
  },
  "arapska-abeceda-prvi-koraci": {
    teachingMoment:
      "Svako slovo sedmice — jedan predmet u kući koji počinje tim zvukom (alif → Allah na zidu).",
    parentTips: mergeTips(["15 minuta dnevno maksimum za mlađe; bolje kratko i veselo."]),
    classroomIdeas: mergeClassroom(["Lov na slova u učionici — kartice na zidu."]),
  },
  "ramazan-za-djecu-uvod": {
    teachingMoment:
      "Napravite Ramazanski kalendar sa zvjezdicama za dobra djela, ne samo za post.",
    parentTips: mergeTips(["Djeca ispod puberteta ne moraju postiti punim danom — provjerite sa imamom."]),
    classroomIdeas: mergeClassroom(["Grupni poster „Šta volimo u Ramazanu”."]),
  },
};

function defaultHadithSupplement(title: string): ContentHumanization {
  return {
    teachingMoment: `Pročitajte hadis „${title}” zajedno, zatim pitajte dijete da u svojim riječima objasni šta je Poslanik ﷺ želio da zapamtimo. Ne ispravljajte odmah — slušajte prvo.`,
    realLifeExample:
      "Roditelji u ILMBUDS zajednici najčešće pišu da im kratki večernji razgovor (5–7 minuta) djeluje bolje od dugog predavanja.",
    parentTips: mergeTips([
      "Povežite hadis sa jednom situacijom iz tekuće sedmice.",
      "Ako dijete zaboravi, vratite se sljedeći dan — ponavljanje je dio učenja.",
    ]),
    classroomIdeas: mergeClassroom([
      "Učenici u parovima objasne hadis jedni drugima.",
      "Jedno pitanje za dom: „Gdje sam vidio/la ovu lekciju danas?”",
    ]),
  };
}

function defaultBlogSupplement(title: string): ContentHumanization {
  return {
    teachingMoment: `Nakon članka „${title}”, zamolite dijete da nacrta ili napiše jednu scenu iz škole gdje se tema pojavljuje. Slika često otkrije više od testa.`,
    realLifeExample:
      "Vikend škole u DE/AT/CH najčešće koriste ovaj članak kao domaću lekciju — 10 minuta čitanja, 5 minuta razgovora.",
    parentTips: mergeTips([
      "Čitajte naslov i prvi pasus glasno — djeca hvataju ton prije detalja.",
      "Spomenite ILMBUDS kviz ili priču ako postoji povezan sadržaj.",
    ]),
    classroomIdeas: mergeClassroom([
      "Grupna diskusija: jedno pitanje iz FAQ sekcije članka.",
      "Učenici predlože vlastito pitanje za sljedeći sastanak.",
    ]),
  };
}

export function getHadithSupplement(slug: string, title: string): ContentHumanization {
  return HADITH_SUPPLEMENTS[slug] ?? defaultHadithSupplement(title);
}

export function getBlogSupplement(slug: string, title: string): ContentHumanization {
  return BLOG_SUPPLEMENTS[slug] ?? defaultBlogSupplement(title);
}
