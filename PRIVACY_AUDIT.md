# Privacy audit — ilmbuds.com

Date: **Mai 2026**

## Before fix

| Area | Issue |
|------|--------|
| Google Fonts | 7+ families via CDN in `base.css` + Quicksand/Material Icons in `index.html` |
| Google AdSense | Loaded in `index.html` without prior consent |
| YouTube | Cartoons iframes + API without consent |
| Privacy text | Said „no ads“ but AdSense was active — contradiction |
| Impressum | Referenced § 5 TMG only |
| Analytics | No GA on web; AdSense only |

## After fix

| Request | Purpose | Consent |
|---------|---------|---------|
| `self` + @fontsource | Site + fonts | No |
| Vercel hosting | Delivery | Disclosed |
| `pagead2.googlesyndication.com` | AdSense | **Yes — „Prihvati sve“** |
| `youtube.com` | Cartoon videos | **Yes** |
| `img.youtube.com` | Thumbnails (cartoons) | **Yes** (gated with iframe) |
| Google Play, agrmultimedia.eu | Links | User leaves site |
| ~~`fonts.googleapis.com`~~ | Fonts | **Removed** |

## Consent key

`ilmbuds-cookie-consent` — values: `essential` | `all`

## Owner follow-up

- Accept Vercel DPA
- Google AdSense / AdMob GDPR settings in Google dashboards
- Confirm Steuernummer / USt-IdNr. in Impressum remain current
