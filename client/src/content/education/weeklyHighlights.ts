export type WeeklyHighlightItem = {
  href: string;
  title: string;
  description: string;
};

export type WeeklyHighlights = {
  storyOfWeek: WeeklyHighlightItem;
  hadithOfWeek: WeeklyHighlightItem;
  quizOfWeek: WeeklyHighlightItem;
  weekOf: string;
};

export const WEEKLY_HIGHLIGHTS: WeeklyHighlights = {
  weekOf: "2026-06-03",
  storyOfWeek: {
    href: "/stories",
    title: "Priča o Ibrahimu (a.s.) i strpljenju",
    description:
      "Ovog tjedna istražujemo kako je prorok Ibrahim ostao vjeran Allahu čak i kad je bilo teško — savršena priča za razgovor o strpljenju i povjerenju kod kuće.",
  },
  hadithOfWeek: {
    href: "/hadisi-za-djecu/ljubaznost-prema-roditeljima",
    title: "Ljubaznost prema roditeljima",
    description:
      "Hadis tjedna: zadovoljstvo Allaha u zadovoljstvu roditelja. Kratko objašnjenje, lekcije i praktični primjeri za djecu od 5 do 12 godina.",
  },
  quizOfWeek: {
    href: "/quiz-categories",
    title: "Kviz: Islamski ahlak za djecu",
    description:
      "Testiraj znanje o ljubaznosti, istini i pomaganju drugima — zabavan kviz s bedževima i bodovima na ILMBUDS profilu.",
  },
};

export function getWeeklyHighlights(): WeeklyHighlights {
  return WEEKLY_HIGHLIGHTS;
}
