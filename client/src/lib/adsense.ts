import { hasExternalMediaConsent } from "@/lib/consent";

const AD_CLIENT = "ca-pub-9746293142643974";

/** Load Google AdSense only after marketing consent (DSGVO). */
export function loadAdSense(): void {
  if (typeof document === "undefined" || !hasExternalMediaConsent()) return;
  if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}
