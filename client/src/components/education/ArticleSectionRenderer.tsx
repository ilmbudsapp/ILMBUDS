import type { ContentSection } from "@/content/education/types";

type Props = { section: ContentSection; index: number };

export default function ArticleSectionRenderer({ section, index }: Props) {
  const h2 = section.heading ? (
    <h2 className="text-xl font-bold text-emerald-900">{section.heading}</h2>
  ) : null;

  if (section.dialogue?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 space-y-3">
          {section.dialogue.map((d, j) => (
            <div
              key={j}
              className={`rounded-xl px-4 py-3 ${
                d.speaker.toLowerCase().includes("dijete") || d.speaker.toLowerCase().includes("ucenik")
                  ? "ml-4 border border-sky-100 bg-sky-50/60"
                  : "mr-4 border border-emerald-100 bg-emerald-50/60"
              }`}
            >
              <p className="text-xs font-bold uppercase text-emerald-800">{d.speaker}</p>
              <p className="mt-1 text-slate-700">{d.line}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.interview?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 space-y-5">
          {section.interview.map((item) => (
            <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold text-emerald-700">{item.speaker}</p>
              <p className="mt-1 font-medium text-slate-900">{item.question}</p>
              <p className="mt-2 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.problemSolutions?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 space-y-4">
          {section.problemSolutions.map((ps) => (
            <div key={ps.problem} className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-orange-50 px-4 py-3 text-sm text-orange-900">
                <span className="font-bold">Problem: </span>
                {ps.problem}
              </div>
              <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                <span className="font-bold">Rješenje: </span>
                {ps.solution}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.caseStudy) {
    const cs = section.caseStudy;
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 rounded-2xl border border-violet-100 bg-violet-50/30 p-5">
          <p className="font-bold text-violet-900">{cs.title}</p>
          <p className="mt-3 text-slate-700">
            <span className="font-semibold">Kontekst: </span>
            {cs.context}
          </p>
          <p className="mt-2 text-slate-700">
            <span className="font-semibold">Ishod: </span>
            {cs.outcome}
          </p>
          <p className="mt-2 text-emerald-800">
            <span className="font-semibold">Lekcija: </span>
            {cs.lesson}
          </p>
        </div>
      </section>
    );
  }

  if (section.dailyRoutine?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <ul className="mt-4 space-y-3">
          {section.dailyRoutine.map((r) => (
            <li key={r.time + r.activity} className="flex gap-4 rounded-lg border border-slate-200 p-3">
              <span className="shrink-0 font-mono text-sm font-bold text-emerald-700">{r.time}</span>
              <div>
                <p className="text-slate-900">{r.activity}</p>
                {r.note ? <p className="mt-1 text-sm text-slate-500">{r.note}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (section.challenges?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {section.challenges.map((c) => (
            <div key={c.day} className="rounded-xl border-2 border-dashed border-emerald-200 bg-white p-4">
              <p className="text-sm font-bold text-emerald-800">Misija {c.day}</p>
              <p className="mt-2 text-slate-800">{c.mission}</p>
              {c.hint ? <p className="mt-2 text-xs text-slate-500">Savjet: {c.hint}</p> : null}
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.questionJourney?.length) {
    return (
      <section key={index} className="mb-8">
        {h2}
        <ol className="mt-4 space-y-4">
          {section.questionJourney.map((q) => (
            <li key={q.step} className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-emerald-700">Korak {q.step}</p>
              <p className="mt-1 font-medium text-slate-900">{q.question}</p>
              <p className="mt-2 text-sm text-slate-600">{q.reflection}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (section.callToAction) {
    const cta = section.callToAction;
    return (
      <section key={index} className="mb-8">
        {h2}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 p-6 text-white">
          <p className="font-bold">{cta.label}</p>
          <p className="mt-2 text-emerald-50">{cta.text}</p>
          {cta.href ? (
            <a href={cta.href} className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-800">
              Kreni →
            </a>
          ) : null}
        </div>
      </section>
    );
  }

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
