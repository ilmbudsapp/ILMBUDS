#!/usr/bin/env node
/**
 * Copies shared static assets from /public into /client/public for Vite builds.
 * Vite only serves client/public when root is client/.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(repoRoot, "public");
const targetRoot = path.join(repoRoot, "client", "public");

const skipNames = new Set(["apk", "index.html", "check-logo.html", "logo-test.html"]);

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return 0;
  let count = 0;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      if (skipNames.has(entry)) continue;
      count += copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return count;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  return 1;
}

if (!fs.existsSync(sourceRoot)) {
  console.warn(`WARN: no ${sourceRoot} — skipping asset sync`);
  process.exit(0);
}

const copied = copyRecursive(sourceRoot, targetRoot);
console.log(`OK: synced ${copied} files from public/ -> client/public/`);
