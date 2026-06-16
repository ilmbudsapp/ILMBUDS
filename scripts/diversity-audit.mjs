#!/usr/bin/env node
/** Similarity, heading, and paragraph repetition audit — merged blog view. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "client/src/content/education/blogArticles.ts");
const diversifiedPath = path.join(root, "client/src/content/education/blogArticlesDiversified.ts");

const blogText = fs.readFileSync(blogPath, "utf8");
const divText = fs.readFileSync(diversifiedPath, "utf8");

const slugs = [...blogText.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]);
const divSlugs = new Set([...divText.matchAll(/"([^"]+)":\s*\{\s*\n\s*articleFormat/g)].map((m) => m[1]));

const TEMPLATE_HEADINGS = [
  "Šta Kur'an i sunnet kažu?",
  "Historijski i edukativni kontekst",
  "Kako to izgleda u svakodnevnom životu?",
  "Česti izazovi za djecu u dijaspori",
  "Primjeri iz škole, džamije i kuće",
  "Praktični koraci za ovu sedmicu",
  "Povezanost s hadisom i ahlakom",
  "Aktivnosti, igre i kreativni rad",
  "Savjeti roditeljima i učiteljima",
  "Zaključak i sljedeći koraci",
];

const TEMPLATE_PARAS = [
  "Svaka islamska vrijednost ima korijen u Objavi",
  "Muslimanska djeca u dijaspori žive između dvije kulture",
  "ILMBUDS piše za uzrast 5–12 godina, uz poštovanje sunitskih",
  "1) Pročitajte članak zajedno jednom dnevno po sekciji",
  "Bez hadisa i primjera Poslanika",
  "Budite uzor: djeca prate ponašanje više nego govor",
];

function articleChunk(file, slug, isDiv) {
  const marker = isDiv ? `"${slug}":` : `"slug": "${slug}"`;
  const start = file.indexOf(marker);
  if (start < 0) return "";
  const after = file.slice(start + marker.length);
  const nextRe = isDiv ? /\r?\n  "[^"]+": \{\r?\n    articleFormat/ : /\r?\n  \{\r?\n    "publishedAt"/;
  const next = after.search(nextRe);
  const end = next >= 0 ? start + marker.length + next : start + marker.length + 12000;
  return file.slice(start, end);
}

function extractHeadings(slug) {
  const chunk = divSlugs.has(slug) ? articleChunk(divText, slug, true) : articleChunk(blogText, slug, false);
  return [...chunk.matchAll(/heading: "([^"]+)"/g)].map((m) => m[1]);
}

function extractParagraphs(slug) {
  const chunk = divSlugs.has(slug) ? articleChunk(divText, slug, true) : articleChunk(blogText, slug, false);
  const fromArrays = [...chunk.matchAll(/(?:paragraphs|line|answer|body|context|outcome|lesson|mission|reflection|solution|problem|text|fact|myth|activity|note|item|title|question|instructions|steps|hint|label|a|q):\s*"([^"]{45,})"/g)].map(
    (m) => m[1],
  );
  return fromArrays.filter(
    (p) =>
      !p.includes("articleFormat") &&
      !p.includes("skipGeneric") &&
      !p.startsWith("http") &&
      !p.includes("href"),
  );
}

function extractFormat(slug) {
  if (!divSlugs.has(slug)) return "standard";
  const chunk = articleChunk(divText, slug, true);
  const m = chunk.match(/articleFormat: "([^"]+)"/);
  return m ? m[1] : "standard";
}

const headingCounts = new Map();
const allHeadings = [];
const allParagraphs = [];
const formats = new Map();

for (const slug of slugs) {
  formats.set(extractFormat(slug), (formats.get(extractFormat(slug)) ?? 0) + 1);
  for (const h of extractHeadings(slug)) {
    allHeadings.push(h);
    headingCounts.set(h, (headingCounts.get(h) ?? 0) + 1);
  }
  for (const p of extractParagraphs(slug)) {
    allParagraphs.push(p);
  }
}

const templateHeadingTotal = TEMPLATE_HEADINGS.reduce((s, h) => s + (headingCounts.get(h) ?? 0), 0);
const duplicateHeadings = [...headingCounts.entries()].filter(([, c]) => c > 1);

const paraPrefixCounts = new Map();
for (const p of allParagraphs) {
  const key = p.slice(0, 55);
  paraPrefixCounts.set(key, (paraPrefixCounts.get(key) ?? 0) + 1);
}
const duplicateParagraphs = [...paraPrefixCounts.entries()].filter(([, c]) => c >= 2);
const templateParagraphTotal = allParagraphs.filter((p) =>
  TEMPLATE_PARAS.some((t) => p.includes(t)),
).length;

const uniqueFormats = formats.size - (formats.has("standard") ? 1 : 0) + (formats.get("standard") ? 0 : 0);
const formatBreakdown = Object.fromEntries(formats);
const diversifiedCount = divSlugs.size;
const editorialDiversityScore = Math.round((diversifiedCount / slugs.length) * 100);

const adsenseRisk = Math.max(
  0,
  Math.min(
    100,
    Math.round(templateHeadingTotal * 8 + templateParagraphTotal * 2 + duplicateHeadings.length * 2),
  ),
);
const adsenseApproval = Math.min(92, 70 + Math.round((100 - adsenseRisk) * 0.22));

console.log(
  JSON.stringify(
    {
      totalBlogArticles: slugs.length,
      diversifiedArticles: diversifiedCount,
      standardTemplateArticles: slugs.length - diversifiedCount,
      uniqueArticleFormats: Object.keys(formatBreakdown).filter((k) => k !== "standard").length,
      formatBreakdown,
      templateHeadingOccurrences: Object.fromEntries(TEMPLATE_HEADINGS.map((h) => [h, headingCounts.get(h) ?? 0])),
      duplicateHeadingCount: duplicateHeadings.length,
      templateHeadingTotal,
      topDuplicateHeadings: duplicateHeadings
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([h, c]) => ({ heading: h, count: c })),
      duplicateParagraphPrefixCount: duplicateParagraphs.length,
      templateParagraphInstances: templateParagraphTotal,
      topDuplicateParagraphs: duplicateParagraphs
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([prefix, count]) => ({ prefix, count })),
      uniqueHeadingsTotal: new Set(allHeadings).size,
      editorialDiversityScore,
      adsenseLvcRiskScore: adsenseRisk,
      adsenseApprovalEstimatePercent: adsenseApproval,
    },
    null,
    2,
  ),
);
