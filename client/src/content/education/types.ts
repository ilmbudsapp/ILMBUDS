export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  listItems?: string[];
  checklist?: { item: string }[];
  qaPairs?: { q: string; a: string }[];
  timeline?: { when: string; title: string; body: string }[];
  mythFacts?: { myth: string; fact: string }[];
  workshopSteps?: { step: number; title?: string; duration?: string; instructions: string[] }[];
  activities?: { title: string; age: string; materials?: string[]; steps: string[] }[];
  pullQuote?: string;
};

export type BlogArticleFormat =
  | "standard"
  | "story"
  | "parent-guide"
  | "qa"
  | "workshop"
  | "activity"
  | "timeline"
  | "myth-fact";

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
  articleFormat?: BlogArticleFormat;
  faqTitle?: string;
  faqStyle?: "accordion" | "visible" | "numbered";
  skipGenericSupplement?: boolean;
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
