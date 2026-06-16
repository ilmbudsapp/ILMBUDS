import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Static web build for Vercel (no Express, no Replit plugins). */
export default defineConfig({
  define: {
    "import.meta.env.VITE_ILMBUDS_WEB": JSON.stringify("true"),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("blogArticlesDiversified")) return "blog-diversified";
          if (id.includes("blogArticles")) return "blog-content";
          if (id.includes("hadithCollection")) return "hadith-content";
          if (id.includes("contentSupplements")) return "education-supplements";
        },
      },
    },
  },
});
