# Changelog — ilmbuds.com

## Mai 2026 — DSGVO / Legal / Privacy / Consent / Fonts

### Fonts
- Removed Google Fonts CDN (Quicksand, Poppins, Montserrat, etc.) from `index.html` and `base.css`
- Self-hosted fonts via `@fontsource` in `client/src/styles/fonts-local.css`
- Removed Google Material Icons stylesheet

### Cookie consent
- Banner: „Samo nužno“ / „Prihvati sve“ (5 languages via translations)
- localStorage key: `ilmbuds-cookie-consent` (JSON: choice, updatedAt)
- Google AdSense loads only after „Prihvati sve“
- YouTube cartoons (iframe + API) consent-gated

### Legal
- 15-section privacy policy (bs/de/en) in `client/src/legal/legalContent.ts`
- About page `/about#privacy` uses full policy
- Impressum note updated to § 5 DDG (not TMG only)

### CSP
- Removed `fonts.googleapis.com` / `fonts.gstatic.com`
- Added YouTube to `frame-src` for consented embeds

### Docs
- `PRIVACY_AUDIT.md`, `READY_FOR_GERMANY.md`
