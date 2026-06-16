#!/usr/bin/env node
/**
 * Regenerates sitemap.xml with all hadith and blog article URLs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hadithPath = path.join(repoRoot, "client/src/content/education/hadithCollection.ts");
const blogPath = path.join(repoRoot, "client/src/content/education/blogArticles.ts");
const outPath = path.join(repoRoot, "sitemap.xml");

const LASTMOD = "2026-06-04";
const BASE = "https://www.ilmbuds.com";

function extractSlugs(file, patterns) {
  const text = fs.readFileSync(file, "utf8");
  const slugs = new Set();
  for (const re of patterns) {
    for (const m of text.matchAll(re)) slugs.add(m[1]);
  }
  return [...slugs];
}

const hadithSlugs = extractSlugs(hadithPath, [/slug: "([^"]+)"/g]);
const blogSlugs = extractSlugs(blogPath, [/"slug": "([^"]+)"/g, /slug: "([^"]+)"/g]);

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/hadisi-za-djecu", priority: "0.92", changefreq: "weekly" },
  { loc: "/blog", priority: "0.92", changefreq: "weekly" },
  { loc: "/prophets", priority: "0.88", changefreq: "weekly" },
  { loc: "/hadith", priority: "0.88", changefreq: "weekly" },
  { loc: "/islamic-values", priority: "0.88", changefreq: "weekly" },
  { loc: "/dua-for-children", priority: "0.85", changefreq: "weekly" },
  { loc: "/arabic-learning", priority: "0.85", changefreq: "weekly" },
  { loc: "/stories", priority: "0.9", changefreq: "weekly" },
  { loc: "/quran", priority: "0.9", changefreq: "weekly" },
  { loc: "/catechism", priority: "0.85", changefreq: "monthly" },
  { loc: "/ilmihal", priority: "0.85", changefreq: "monthly" },
  { loc: "/pillars", priority: "0.8", changefreq: "monthly" },
  { loc: "/beliefs", priority: "0.8", changefreq: "monthly" },
  { loc: "/ablution", priority: "0.8", changefreq: "monthly" },
  { loc: "/quiz-categories", priority: "0.85", changefreq: "weekly" },
  { loc: "/mini-games", priority: "0.8", changefreq: "monthly" },
  { loc: "/cartoons", priority: "0.8", changefreq: "monthly" },
  { loc: "/arabic-alphabet", priority: "0.8", changefreq: "monthly" },
  { loc: "/about", priority: "0.75", changefreq: "monthly" },
  { loc: "/contact", priority: "0.75", changefreq: "monthly" },
  { loc: "/privacy-policy", priority: "0.7", changefreq: "yearly" },
  { loc: "/author", priority: "0.75", changefreq: "monthly" },
  { loc: "/terms", priority: "0.6", changefreq: "yearly" },
  { loc: "/disclaimer", priority: "0.6", changefreq: "yearly" },
  { loc: "/editorial-policy", priority: "0.65", changefreq: "yearly" },
  { loc: "/sources", priority: "0.65", changefreq: "yearly" },
  { loc: "/partners", priority: "0.7", changefreq: "monthly" },
  { loc: "/donate", priority: "0.55", changefreq: "monthly" },
];

const urlEntry = (loc, priority, changefreq) => `  <url>
    <loc>${BASE}${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const urls = [
  ...staticPages.map((p) => urlEntry(p.loc, p.priority, p.changefreq)),
  ...hadithSlugs.map((s) => urlEntry(`/hadisi-za-djecu/${s}`, "0.82", "monthly")),
  ...blogSlugs.map((s) => urlEntry(`/blog/${s}`, "0.8", "monthly")),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

fs.writeFileSync(outPath, xml, "utf8");
console.log(`OK: sitemap with ${staticPages.length + hadithSlugs.length + blogSlugs.length} URLs (${hadithSlugs.length} hadith, ${blogSlugs.length} blog)`);
