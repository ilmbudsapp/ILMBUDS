#!/usr/bin/env node
/** Similarity, heading, and paragraph repetition audit for blog articles. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "client/src/content/education/blogArticles.ts");
const diversifiedPath = path.join(root, "client/src/content/education/blogArticlesDiversified.ts");

const blogText = fs.readFileSync(blogPath, "utf8");
const divText = fs.readFileSync(diversifiedPath, "utf8");

const diversifiedCount = (divText.match(/^\s+"[a-z0-9-]+": \{/gm) || []).length;

// Extract headings from merged view: diversified slugs use div file headings
const slugs = [...blogText.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]);
const divSlugs = new Set([...divText.matchAll(/"([^"]+)":\s*\{\s*\n\s*articleFormat/g)].map((m) => m[1]));

function extractHeadingsForSlug(slug) {
  const isDiv = divSlugs.has(slug);
  const file = isDiv ? divText : blogText;
  const marker = isDiv ? `"${slug}":` : `"slug": "${slug}"`;
  const idx = file.indexOf(marker);
  if (idx < 0) return [];
  const chunk = file.slice(idx, idx + 12000);
  return [...chunk.matchAll(/"heading": "([^"]+)"/g)].map((m) => m[1]);
}

function extractFirstParagraphs(slug) {
  const isDiv = divSlugs.has(slug);
  const file = isDiv ? divText : blogText;
  const marker = isDiv ? `"${slug}":` : `"slug": "${slug}"`;
  const idx = file.indexOf(marker);
  const chunk = file.slice(idx, idx + 15000);
  const paras = [...chunk.matchAll(/"paragraphs":\s*\[\s*"([^"]{40,})"/g)].map((m) => m[1].slice(0, 80));
  return paras;
}

const headingCounts = new Map();
const allHeadings = [];
for (const slug of slugs) {
  for (const h of extractHeadingsForSlug(slug)) {
    allHeadings.push(h);
    headingCounts.set(h, (headingCounts.get(h) ?? 0) + 1);
  }
}

const templateHeadings = [
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

const templateHeadingTotal = templateHeadings.reduce((s, h) => s + (headingCounts.get(h) ?? 0), 0);

// Paragraph prefix similarity (first 60 chars)
const prefixCounts = new Map();
for (const slug of slugs) {
  for (const p of extractFirstParagraphs(slug)) {
    const key = p.slice(0, 60);
    prefixCounts.set(key, (prefixCounts.get(key) ?? 0) + 1);
  }
}
const repeatedPrefixes = [...prefixCounts.entries()].filter(([, c]) => c >= 3);

const standardSlugs = slugs.filter((s) => !divSlugs.has(s));
const divSlugsList = [...divSlugs];

const uniqueHeadingRatio = new Set(allHeadings).size / Math.max(allHeadings.length, 1);
const diversifiedRatio = divSlugsList.length / slugs.length;

const riskScore = Math.min(
  100,
  Math.max(
    0,
    Math.round(
      100 -
        templateHeadingTotal * 1.2 -
        repeatedPrefixes.length * 5 +
        diversifiedRatio * 25 +
        uniqueHeadingRatio * 15,
    ),
  ),
);

console.log(
  JSON.stringify(
    {
      totalArticles: slugs.length,
      diversifiedArticles: divSlugsList.length,
      standardTemplateArticles: standardSlugs.length,
      diversifiedSlugs: divSlugsList,
      templateHeadingOccurrences: Object.fromEntries(
        templateHeadings.map((h) => [h, headingCounts.get(h) ?? 0]),
      ),
      templateHeadingTotal,
      uniqueHeadings: new Set(allHeadings).size,
      totalHeadingInstances: allHeadings.length,
      uniqueHeadingRatio: Math.round(uniqueHeadingRatio * 100) / 100,
      repeatedParagraphPrefixes3plus: repeatedPrefixes.map(([p, c]) => ({ prefix: p, count: c })),
      topRepeatedHeadings: [...headingCounts.entries()]
        .filter(([, c]) => c > 1)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([h, c]) => ({ heading: h, count: c })),
      editorialDiversityScore: Math.round(diversifiedRatio * 100),
      adsenseLvcRiskScore: 100 - riskScore,
      adsenseApprovalEstimatePercent: Math.min(88, 62 + Math.round(diversifiedRatio * 15)),
    },
    null,
    2,
  ),
);
