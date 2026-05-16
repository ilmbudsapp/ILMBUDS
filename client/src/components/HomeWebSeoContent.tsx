import { Link } from "wouter";

export function HomeWebSeoContent() {
  return (
    <article
      className="mt-10 rounded-3xl border border-white/30 bg-white/15 p-6 text-white shadow-lg backdrop-blur-sm"
      aria-labelledby="seo-intro-heading"
    >
      <p className="text-sm text-white/80">
        Autor: <strong>Agron Osmani</strong> · Ažurirano{" "}
        <time dateTime="2026-05-16">16. maj 2026.</time>
      </p>

      <h2 id="seo-intro-heading" className="mt-2 text-2xl font-bold">
        Zašto odabrati ILMBUDS?
      </h2>
      <p className="seo-lead mt-3 text-base leading-relaxed text-white/95">
        ILMBUDS je islamska web stranica za djecu na kojoj možete učiti kroz priče, Kuran, ilmihal,
        kvizove i igre. Više od 300+ aktivnosti pomaže djeci da pamti pouke na zabavan način. Mi u
        AGRMULTIMEDIA vjerujemo da obrazovanje treba biti sigurno, besplatno i dostupno svakom
        roditelju u dijaspori.
      </p>

      <nav className="mt-6" aria-label="Sekcije sajta">
        <h3 className="text-lg font-semibold">Istražite sadržaj</h3>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          <li>
            <Link href="/stories" className="underline hover:text-sky-100">
              Islamske priče
            </Link>
          </li>
          <li>
            <Link href="/quran" className="underline hover:text-sky-100">
              Kuran
            </Link>
          </li>
          <li>
            <Link href="/catechism" className="underline hover:text-sky-100">
              Ilmihal
            </Link>
          </li>
          <li>
            <Link href="/quiz-categories" className="underline hover:text-sky-100">
              Kvizovi
            </Link>
          </li>
          <li>
            <Link href="/mini-games" className="underline hover:text-sky-100">
              Mini igre
            </Link>
          </li>
          <li>
            <Link href="/cartoons" className="underline hover:text-sky-100">
              Crtani
            </Link>
          </li>
        </ul>
      </nav>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Često postavljana pitanja</h3>
        <dl className="mt-2 space-y-3">
          <div>
            <dt className="font-semibold">Šta je ILMBUDS?</dt>
            <dd className="text-white/90">
              Besplatna islamska obrazovna platforma za djecu sa pričama, Kuranom i kvizovima.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Kako vas kontaktirati?</dt>
            <dd className="text-white/90">
              Posjetite{" "}
              <Link href="/about#contact" className="underline">
                Kontakt
              </Link>{" "}
              ili pišite na agron6922@gmail.com.
            </dd>
          </div>
        </dl>
        <details className="mt-4 rounded-xl bg-white/10 p-3">
          <summary className="cursor-pointer font-medium">Da li postoji aplikacija?</summary>
          <p className="mt-2 text-sm text-white/90">
            Da — ILMBUDS je dostupan i na Androidu (Google Play) uz isti sadržaj kao na webu.
          </p>
        </details>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Ključne prednosti</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-white/90">
          <li>Besplatan edukativni sadržaj za djecu</li>
          <li>Podrška za 5 jezika u interfejsu</li>
          <li>Sigurno okruženje za učenje uz roditelje</li>
        </ul>
      </section>

      <p className="mt-6 text-sm text-white/80">
        Više o projektu:{" "}
        <Link href="/about" className="underline">
          O nama
        </Link>
        {" · "}
        <Link href="/about#privacy" className="underline">
          Privatnost
        </Link>
        {" · "}
        <a
          href="https://schema.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Schema.org
        </a>
        {" · "}
        <a
          href="https://agrmultimedia.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          AGRMULTIMEDIA
        </a>
      </p>
    </article>
  );
}
