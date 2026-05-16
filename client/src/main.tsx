import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { installWebApi, isWebStaticMode } from "@/lib/webApi/install";

if (isWebStaticMode()) {
  installWebApi();
}

// Service worker only for native/PWA app — not on static Vercel web build
if (!isWebStaticMode()) {
  try {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
      });
    }
  } catch {
    /* ignore */
  }
}

// Safe DOM access for Capacitor/React Native
try {
  if (typeof document !== 'undefined') {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      createRoot(rootElement).render(<App />);
    } else {
      console.error('Root element not found');
    }
  } else {
    console.error('Document not available');
  }
} catch (error) {
  console.error('Failed to render app:', error);
}
