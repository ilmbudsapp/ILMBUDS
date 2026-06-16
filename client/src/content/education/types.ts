export type ContentSection = {
  heading?: string;
  paragraphs: string[];
};

export type FaqItem = { q: string; a: string };

export type RelatedLink = { href: string; label: string };

export type HadithForChildren = {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  source: string;
  collection: "Sahih al-Bukhari" | "Sahih Muslim" | "Riyad us-Salihin" | "Forty Hadith of Imam Nawawi" | "Sunan at-Tirmidhi";
  narrator?: string;
  hadithText: string;
  childExplanation: string;
  lessons: string[];
  practicalExamples: string[];
  reflectionQuestions: string[];
  relatedStoryHref?: string;
  relatedQuizHref?: string;
  relatedLinks: RelatedLink[];
  updatedAt: string;
  featured?: boolean;
};

export type BlogArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  topic: "prophets" | "values" | "arabic" | "duas" | "ramadan" | "prayer" | "quran" | "family" | "character" | "manners";
  hubPath: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMin: number;
  sections: ContentSection[];
  faq: FaqItem[];
  references: string[];
  relatedSlugs: string[];
  relatedLinks: RelatedLink[];
  featured?: boolean;
  popular?: boolean;
};

export type TopicHubConfig = {
  path: string;
  title: string;
  metaDescription: string;
  intro: string;
  whyTitle: string;
  whyParagraphs: string[];
  benefits: string[];
  articleTopics: BlogArticle["topic"][];
  hadithSlugs?: string[];
};
