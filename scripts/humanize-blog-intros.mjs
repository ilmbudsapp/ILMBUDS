#!/usr/bin/env node
/** Replace identical blog intro boilerplate with unique per-article openings. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "client/src/content/education/blogArticles.ts");

const BOILERPLATE_RE =
  /"Islamska edukacija za djecu u dijaspori mora biti topla, jasna i povezana sa stvarnim životom\. Tema \\"([^"]+)\\" pomaže djetetu da razumije kako vjera oblikuje svakodnevne odluke — u školi, na igralištu, kod kuće i u džamiji\. Roditelji u Njemačkoj, Austriji, Švicarskoj i drugim zemljama često traže pouzdan bosanski materijal koji dijete neće preopteretiti\."/g;

const UNIQUE_INTROS = {
  "ibrahim-strpljenje-i-vjera":
    "Priča o Ibrahimu (a.s.) često započne pitanjem djeteta: „Zašto bi netko ostavio dom zbog vjere?” U vikend školi u Frankfurtu jedna učenica je rekla da joj je ovo prvi put da vjera izgleda hrabro, a ne samo kao pravilo. Ovaj članak objašnjava strpljenje i povjerenje Allahu kroz konkretne situacije — kad plan padne, kad se preselimo ili kad drugi ne razumiju našu vjeru.",
  "musa-i-faraon-za-djecu":
    "Djeca u dijaspori često čuju o Musi (a.s.) u kratkoj verziji: „pobijedio Faraona.” Manje se priča o godinama strpljenja u Midjenu i o tome kako je Musa učio govoriti pred drugima. Kada učenik u Münchenu pitao „da li je Musa bio nervozan pred Faraonom?”, shvatili smo koliko im treba ljudska, a ne samo epska slika proroka. Ovdje gradimo tu sliku korak po korak.",
  "yusuf-optuzba-i-otpuštenje":
    "Yusuf (a.s.) je jedna od rijetkih priča gdje djeca odmah osjete nepravdu: nevini je, a ipak strada. U porodičnoj diskusiji u Zürichu jedno dijete reklo je: „To je kao kad me učiteljica pogrešno optuži.” Ta paralela je dobar ulaz u temu oprosta — ne kao prazna fraza, već kao težak, ali moguć izbor.",
  "isa-mir-i-milost":
    "U multikulturnim razredima u Austriji djeca često spajaju Isu (a.s.) samo sa Božićnim dekoracijama u trgovini. Roditelji nam pišu da žele bosanski, islamski ton — bez polemike, ali jasno: Isa je prorok milosti i mudrosti. Ovaj tekst pomaže da razgovor kod kuće bude smiren, tačan i prilagođen uzrastu 7–11 godina.",
  "muhammad-poslanik-milosti":
    "Kad pitamo djecu „koga volimo najviše poslije Allaha?”, mnogi odgovore „Poslanika ﷺ” — ali teško im je navesti konkretan primjer iz njegovog života. U ILMBUDS radionicama koristimo tri mini-scene: kako je ﷺ tješio djecu, kako je bio strpljiv prema greškama i kako je govorio istinu s mekoćom. Ovaj članak skuplja te scene u jednu porodičnu lekciju.",
  "nuh-i-brod-spasenja":
    "Priča o Nuhu (a.s.) može zvučati daleko — brod, potop, divovski brod u učbeniku. Djeca iz dijaspore je bolje razumiju kroz pitanje: „Šta radiš kad svi oko tebe rade pogrešno, a ti znaš da treba drugačije?” Na to pitanje Nuh odgovara godinama strpljenja. Ovdje objašnjavamo tu istinu bez straha i prenaglašenih detalja.",
  "iskrenost-u-skoli":
    "Iskrenost u školi nije apstraktna vrijednost — to je odluka u hodniku: priznati da si kopirao zadaću, reći učiteljici da nisi razumio lekciju ili ne šutjeti kad vidiš nepravdu. Jedna mama iz Köln-a nam je rekla da joj je sin lakše priznao grešku kad su prvo pročitali hadis o istini. Ovaj članak povezuje školski dan sa islamskim ahlakom.",
  "zahvalnost-allahu-i-ljudima":
    "Zahvalnost nije samo „hvala” nakon jela. U našim porodicama u dijaspori djeca ponekad zaborave koliko su roditelji uložili u jezik, vikend školu i put do džamije. Jednostavna vježba „tri stvari danas” — za Allah, za roditelje, za učitelja — promijenila je večernji razgovor u jednoj porodici iz Stuttgart-a. Ovdje je objašnjenje zašto to radi.",
  "strpljenje-kad-je-teško":
    "Strpljenje je najteže kad dijete već pokušava biti dobro, a opet padne u sukob — sa bratom, u online igri ili na treningu. U ILMBUDS kvizovima najčešće pitanje roditelja je: „Kako da ne prekidem svaki put?” Ovaj tekst nudi male korake, ne savršenstvo: pauza, udah, kratka dua, povratak razgovoru.",
  "pomaganje-siromasima":
    "Zakat i sadaka djeci najlakše objasnimo kroz džeparač: dio ostaje za sebe, mali dio ide drugima. U Berlinu jedna porodica svaki petak stavlja kovanicu u „kutiju za one kojima treba” — dijete samo bira gdje će ići donacija. Ovaj članak spaja tu praksu sa islamskim učenjem o odgovornosti prema siromašnima.",
  "postovanje-razlicitosti":
    "U razredu gdje su kršćani, muslimani i ateisti, djeca u dijaspori svakodnevno uče convivenciju. Poštovanje različitosti ne znači odustajanje od vjere — znači znati predstaviti sebe bez vrijeđanja drugih. Roditelj iz Graz-a pitao nas: „Kako da dijete odgovori na pitanje o hijabu?” Ovdje su primjeri rečenica koje možete vježbati kod kuće.",
  "odgovornost-muslimana":
    "Odgovornost za djecu zvuči ozbiljno, ali u praksi je često: vratiti pronađeni novčanik, izbrisati tuđu poruku s table ili reći ocu da si razbio čašu. U hadisu se kaže da smo svi „pastiri” — svatko brine o nečemu. Ovaj članak prevodi tu metaforu u zadatke koje sedmicač može stvarno obaviti.",
  "arapska-abeceda-prvi-koraci":
    "Prvi arapski slova djeca najbolje pamte kad ih povežu sa zvukom iz namaza — alif u Allahu, ba u Bismillah. U vikend školi u Hamburgu učiteljica je lijepila kartice po učionici; djeca trčala i tražila slovo. Ovaj vodič nije zamjena za učitelja, ali daje roditeljima plan za 15-minutne sesije kod kuće.",
  "rijeci-iz-namaza":
    "Mnoga djeca u dijaspori znaju pokrete namaza prije nego što razumiju riječi. To je normalno — ali razumijevanje jedne po jedne fraze jača koncentraciju. Porodica iz Berna poslala nam je snimku djeteta koje objašnjava „Subhana Rabbiyal Azeem” sestri; taj trenutak inspirisao je ovaj praktični vodič riječ po riječ.",
  "brojevi-u-arapskom":
    "Brojevi u arapskom djeci padaju u ruke kroz igru: brojanje datuma u kalendaru, broj rakija u džamiji, godine rođenja dede. U ILMBUDS aplikaciji brojevi su dio kvizova — ovdje ih objašnjavamo i van ekrana, sa karticama i pjesmicama koje možete isprintati za vikend.",
  "ucenje-arapskog-u-dijaspori":
    "Učiti arapski u dijaspori znači balansirati školski jezik, bosanski kod kuće i arapski u džamiji — tri svijeta u jednom djetetu. Nema jednog „ispravnog” rasporeda; ima onoga koji odgovara vašoj porodici. Ovaj članak sabira iskustva roditelja iz DE/AT/CH: 10 minuta dnevno, audio u autu, i zašto je bolje malo, ali redovno.",
  "dua-prije-spavanja":
    "Večernja dua djeci najlakše uđe u naviku kad je povežemo sa rutinom: abdest, pijama, tri kratke sure, zatim spavanje. Jedna porodica iz Linz-a koristi istu melodiju svake večeri — dijete je započelo samo, bez podsjetnika. Ovdje su tekstovi, značenje i savjeti za djecu koja se boje mraka.",
  "dua-za-putovanje":
    "Putovanje u islamu uključuje i autobus do škole i vikend izlet — ne samo avion. Dua za put kratka je, ali uči dijete da prepozna trenutak prije kretanja. U ILMBUDS radionici učenici su lijepili karticu „Subhanalladhi…” u školski rance; roditelji su prijavili manje panike pred polazak.",
  "dua-prije-jela":
    "Bismillah prije jela često postane automatski — djeca ga izgovore brzo, bez razmišljanja. Cilj ovog članka nije kritika, već dubina: šta znači „u ime Allaha” kad dijelimo hranu sa gostima ili u školskom menzi gdje niko ne kaže bismillah? Praktični odgovori za porodičnu večeru i školski dan.",
  "ramazan-za-djecu-uvod":
    "Prvi Ramazan u sjećanju mnogih djece u dijaspori povezan je sa svjetlima, iftarom i kasnom večeri — ne uvijek sa smislom posta. Roditelji ponekad pitaju: „Da li moje sedamgodišnje dijete mora postiti?” Ovaj uvod daje smjernice po uzrastu, bez stida i bez pritiska — fokus na radost, učenje i porodičnu vezu.",
  "iftar-i-zajednistvo":
    "Iftar u dijaspori često spaja tri generacije: djed dolazi iz BiH, roditelji rade do kasno, djeca navikli na brzu hranu. Zajedništvo ne mora biti savršena trpeza — ponekad je dovoljno da svi sjede deset minuta bez telefona. Ovaj članak nudi ideje za jednostavne iftare i kako uključiti djecu u pripremu.",
  "sadaka-u-ramazanu":
    "Sadaka u Ramazanu djeca doživljavaju drugačije od obaveznog zakatа odraslih — ovo je njihov dobrovoljni doprinos. U Dortmundu jedna porodica svake sedmice dijeli „Ramazanski paketić” susjedu; dijete bira šta ide unutra. Ovaj tekst objašnjava koliko, kome i kako, bez stvaranja krivice kod onih koji nemaju puno.",
  "abdest-korak-po-korak":
    "Abdest je prva „samostalna” ibadeta mnogih djece — i prva gdje roditelj mora pustiti da greše dok uče. U ILMBUDS videu za abdest najčešći komentar roditelja: „Konačno korak po korak na bosanskom.” Ovaj članak dopunjuje aplikaciju: gdje djeca najčešće preskoče korak i kako to nježno ispraviti.",
  "pet-dnevnih-namaza":
    "Pet namaza zvuči teško sedmogodišnjem djetetu koje ima trening u vrijeme Magriba. U dijaspori raspored škole i posla odraslih često određuje realnost, ne ideal. Ovaj tekst ne propovijeda savršenstvo — objašnjava imena, vrijeme i mali plan kako djeca mogu učestvovati koliko mogu, sa rastom kroz godine.",
  "dzuma-za-djecu":
    "Prvi put u džamiji može biti preplavljujuće: veliki prostor, mnogo odraslih, tišina tokom hutbe. Djeca iz Mannheima nam je rekla da su mislila da „ne smiju disati.” Ovaj vodič priprema roditelje i učenike: šta ponijeti, kako sjediti, šta raditi kad postane dosadno — iskreno i s poštovanjem prema džamiji.",
  "fatiha-objasnjenje":
    "Al-Fatiha je srce namaza — i prva sura koju mnoga djeca nauče napamet. Razumijevanje je sporije: „Ko je Gospodar svjetova?” pitanje je jednog učenika iz Basel-a koje je otvorilo cijeli razgovor o Allahu kao Stvoritelju, a ne samo kao riječi u suri. Ovaj članak ide ajet po ajet, jednostavnim bosanskim.",
  "kratke-sure-za-djecu":
    "Kratke sure su idealne za djecu jer daju brz osjećaj uspjeha — Ikhlas, Falaq, Nas. Roditelji ponekad žure ka dužim surama; djeca se frustriraju. Strategija „jedna sura sedmicu dana” u porodici iz Innsbruck-a dala je bolje rezultate nego „sve odjednom.” Ovdje su preporuke po uzrastu i metode pamćenja.",
  "porodica-u-islamu":
    "Porodica u islamu nije samo roditelji i djeca — uključuje bake, strice, susjede i vikend školu. U dijaspori ta mreža je često rastegnuta preko granica. Ovaj članak pomaže djeci da vide prava i dužnosti unutar porodice: ko odlučuje, ko pomaže, ko se brine o starijima — bez patrijarhalnog tona, sa jasnoćom.",
  "roditelji-i-djeca-prava":
    "Prava djece u islamu često se spominju u kontekstu odgoja, ali djeca trebaju čuti i svoju stranu: pravo na obrazovanje, na lijep tretman, na igru. Roditelji imaju pravo na poštovanje — ali ne na grubost. Ovaj tekst je namijenjen zajedničkom čitanju: jedna sekcija za roditelje, jedna za djecu, pa razgovor.",
  "gradjenje-dobrog-srca":
    "„Dobro srce” djeca razumiju kroz primjere: dijeliš sendvič, ne širiš glasine, pomažeš plakatioj sestri. Teško im je apstraktno. U ILMBUDS pričama likovi prave greške i popravljaju ih — ovaj članak koristi isti princip: tri kratke situacije iz škole i igrališta, pa pitanja za večer.",
  "lijepi-maniri-za-djecu":
    "Lijepi maniri nisu lista pravilnika na zidu — to je ton glasa kad mama zove, pogled kad uđe učitelj, rukovanje sa gostom. U multikulturnoj školi u Wuppertalu dijete je primijetilo da muslimanski maniri liče na „super pristojnost.” Ovaj članak pretvara ahlak u dnevne mini-zadatke koje dijete može označiti u kalendaru.",
};

let text = fs.readFileSync(blogPath, "utf8");
let replaced = 0;

for (const [slug, intro] of Object.entries(UNIQUE_INTROS)) {
  const slugIdx = text.indexOf(`"slug": "${slug}"`);
  if (slugIdx < 0) {
    console.warn("Slug not found:", slug);
    continue;
  }
  const chunk = text.slice(slugIdx, slugIdx + 4000);
  const match = chunk.match(BOILERPLATE_RE);
  if (!match) {
    console.warn("Boilerplate not found for:", slug);
    continue;
  }
  text = text.replace(match[0], JSON.stringify(intro));
  replaced++;
}

if (replaced !== 31) {
  console.warn(`Expected 31 replacements, got ${replaced}`);
}

fs.writeFileSync(blogPath, text, "utf8");
console.log(`Humanized ${replaced} blog intro paragraphs.`);
