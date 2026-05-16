#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "dist", "public");
const requiredRootFiles = ["index.html", "sitemap.xml", "robots.txt", "manifest.json"];

if (!fs.existsSync(outputDir)) {
  console.error(`FAIL: missing build output directory ${outputDir}`);
  process.exit(1);
}

for (const fileName of requiredRootFiles) {
  const filePath = path.join(outputDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: missing ${filePath}`);
    process.exit(1);
  }
}

const sitemap = fs.readFileSync(path.join(outputDir, "sitemap.xml"), "utf8").replace(/^\uFEFF/, "");
if (!sitemap.startsWith("<?xml")) {
  console.error("FAIL: dist/public/sitemap.xml is invalid");
  process.exit(1);
}

const imagesDir = path.join(outputDir, "images");
if (!fs.existsSync(imagesDir)) {
  console.error("FAIL: dist/public/images missing");
  process.exit(1);
}

console.log(`OK: production static files in ${outputDir}`);
