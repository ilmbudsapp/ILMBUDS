#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function wc(s) {
  return String(s).split(/\s+/).filter(Boolean).length;
}

const blogPath = path.join(root, "client/src/content/education/blogArticles.ts");
const hadithPath = path.join(root, "client/src/content/education/hadithCollection.ts");
const supplementsPath = path.join(root, "client/src/content/education/contentSupplements.ts");
const sitemapPath = path.join(root, "sitemap.xml");
const robotsPath = path.join(root, "client/public/robots.txt");

const blogText = fs.readFileSync(blogPath, "utf8");
const hadithText = fs.readFileSync(hadithPath, "utf8");
const supplementsText = fs.readFileSync(supplementsPath, "utf8");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const robots = fs.readFileSync(robotsPath, "utf8");

const blogSlugs = [...blogText.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]);
const hadithSlugs = [...hadithText.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const boilerplate =
  "Islamska edukacija za djecu u dijaspori mora biti topla, jasna i povezana sa stvarnim životom";
const boilerplateCount = (blogText.match(new RegExp(boilerplate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || [])
  .length;

function hadithWords(slug) {
  const idx = hadithText.indexOf(`slug: "${slug}"`);
  const chunk = hadithText.slice(idx, idx + 8000);
  const paras = [...chunk.matchAll(/(?:childExplanation|hadithText):\s*\n?\s*"([^"]+)"/gs)].map((m) =>
    m[1].replace(/\\n/g, " "),
  );
  return wc(paras.join(" "));
}

function supplementWords(slug, type) {
  const key = type === "hadith" ? `"${slug}"` : `"${slug}"`;
  const idx = supplementsText.indexOf(key);
  if (idx < 0) return 180; // default fallback estimate
  const chunk = supplementsText.slice(idx, idx + 2500);
  const strings = [...chunk.matchAll(/"([^"]{20,})"/g)].map((m) => m[1]);
  return wc(strings.join(" "));
}

function blogWords(slug) {
  const idx = blogText.indexOf(`"slug": "${slug}"`);
  const chunk = blogText.slice(idx, idx + 25000);
  const paras = [...chunk.matchAll(/"([^"\\]{30,})"/g)]
    .map((m) => m[1])
    .filter((p) => !p.startsWith("http") && !p.includes("href"));
  return wc(paras.join(" "));
}

const blogArticles = blogSlugs.map((slug) => ({ slug, words: blogWords(slug) }));
const hadithArticles = hadithSlugs.map((slug) => ({
  slug,
  coreWords: hadithWords(slug),
  pageWords: hadithWords(slug) + supplementWords(slug, "hadith"),
}));

const avgBlog = Math.round(blogArticles.reduce((s, a) => s + a.words, 0) / blogArticles.length);
const avgHadithCore = Math.round(hadithArticles.reduce((s, a) => s + a.coreWords, 0) / hadithArticles.length);
const avgHadithPage = Math.round(hadithArticles.reduce((s, a) => s + a.pageWords, 0) / hadithArticles.length);

const report = {
  sitemapUrls: sitemapLocs.length,
  blogCount: blogArticles.length,
  hadithCount: hadithArticles.length,
  staticPagesEstimate: 28,
  totalPublicUrls: sitemapLocs.length,
  avgBlogWords: avgBlog,
  avgHadithCoreWords: avgHadithCore,
  avgHadithPageWordsWithSupplements: avgHadithPage,
  thinBlogUnder700: blogArticles.filter((a) => a.words < 700).map((a) => a.slug),
  thinHadithCoreUnder700: hadithArticles.filter((a) => a.coreWords < 700).map((a) => a.slug),
  hadithUnder700EvenWithSupplements: hadithArticles.filter((a) => a.pageWords < 700).map((a) => a.slug),
  boilerplateRepeats: boilerplateCount,
  robotsAllowsAll: robots.includes("Allow: /") && !robots.includes("Disallow: /blog"),
  sitemapInRobots: robots.includes("Sitemap:"),
  noindexRoutes: ["/settings", "/profile", "/parent-dashboard", "/badges", "404"],
};

console.log(JSON.stringify(report, null, 2));
