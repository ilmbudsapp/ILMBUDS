export function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function countWordsInSections(sections: { paragraphs: string[] }[]): number {
  return sections.reduce((sum, s) => sum + s.paragraphs.join(" ").split(/\s+/).filter(Boolean).length, 0);
}
