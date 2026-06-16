import type { ContentSection } from "@/content/education/types";

type Props = { section: ContentSection; index: number };

export default function ArticleSectionRenderer({ section, index }: Props) {
  const h2 = section.heading ? (
    <h2 className="text-xl font-bold text-emerald-900">{section.heading}</h2>
  ) : null;

  if (section.pullQuote) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <blockquote className="mt-4 border-l-4 border-emerald-500 bg-emerald-50/50 py-3 pl-5 pr-4 italic text-slate-800">
          {section.pullQuote}
        </blockquote>
        {section.paragraphs?.map((p, j) => (
          <p key={j} className="mt-3 leading-relaxed text-slate-700">
            {p}
          </p>
        ))}
      </section>
    );
  }

  if (section.timeline?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <ol className="relative mt-6 space-y-6 border-l-2 border-emerald-200 pl-6">
          {section.timeline.map((t) => (
            <li key={t.when + t.title} className="relative">
              <span className="absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">{t.when}</p>
              <p className="font-semibold text-slate-900">{t.title}</p>
              <p className="mt-1 text-slate-700">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (section.mythFacts?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 space-y-4">
          {section.mythFacts.map((mf) => (
            <div key={mf.myth} className="overflow-hidden rounded-xl border border-slate-200">
              <div className="bg-red-50 px-4 py-2 text-sm font-semibold text-red-800">
                Mit: {mf.myth}
              </div>
              <div className="bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                <span className="font-semibold">Činjenica: </span>
                {mf.fact}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.qaPairs?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <dl className="mt-4 space-y-5">
          {section.qaPairs.map((qa) => (
            <div key={qa.q}>
              <dt className="font-semibold text-slate-900">{qa.q}</dt>
              <dd className="mt-2 leading-relaxed text-slate-700">{qa.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    );
  }

  if (section.workshopSteps?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 space-y-5">
          {section.workshopSteps.map((ws) => (
            <div key={ws.step} className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-emerald-700">
                Korak {ws.step}
                {ws.duration ? ` · ${ws.duration}` : ""}
                {ws.title ? ` — ${ws.title}` : ""}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                {ws.instructions.map((ins) => (
                  <li key={ins}>{ins}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.activities?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {section.activities.map((act) => (
            <div key={act.title} className="rounded-xl border border-amber-100 bg-amber-50/40 p-4">
              <p className="font-bold text-emerald-900">{act.title}</p>
              <p className="text-xs text-slate-500">Uzrast: {act.age}</p>
              {act.materials?.length ? (
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium">Materijal: </span>
                  {act.materials.join(", ")}
                </p>
              ) : null}
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
                {act.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.checklist?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <ul className="mt-4 space-y-2">
          {section.checklist.map((c) => (
            <li
              key={c.item}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-700"
            >
              <span className="mt-0.5 text-emerald-600" aria-hidden>
                ☐
              </span>
              {c.item}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (section.listItems?.length && !section.paragraphs?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {section.listItems.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section key={index} className="mb-8">
      {h2}
      {section.paragraphs?.map((p, j) => (
        <p key={j} className="mt-3 leading-relaxed text-slate-700">
          {p}
        </p>
      ))}
      {section.listItems?.length ? (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {section.listItems.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
