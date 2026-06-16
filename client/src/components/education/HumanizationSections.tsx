import type { ContentHumanization } from "@/content/education/contentSupplements";

type Props = {
  supplement: ContentHumanization;
};

export default function HumanizationSections({ supplement }: Props) {
  return (
    <>
      <section className="mb-8 rounded-2xl border border-amber-100 bg-amber-50/40 p-6">
        <h2 className="text-xl font-bold text-emerald-900">Trenutak za učenje</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{supplement.teachingMoment}</p>
        {supplement.realLifeExample ? (
          <p className="mt-3 leading-relaxed text-slate-700">
            <span className="font-semibold text-emerald-800">Primjer iz stvarnog života: </span>
            {supplement.realLifeExample}
          </p>
        ) : null}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-emerald-900">Savjeti za roditelje</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {supplement.parentTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-emerald-900">Ideje za učionicu i vikend školu</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {supplement.classroomIdeas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
