# TRANSFER INSTRUKCIJE ZA ILMBUDS FIXES

## Problem
Izmene napravljene u Replit-u se ne prenose automatski na lokalni PC build.

## Rešenje
Download kompletnu arhivu sa popravkama i zameni fajlove odjednom.

## Izmenjeni Fajlovi (5 fajlova)

### 1. client/src/services/capacitor-admob.ts
- Banner margin: 56px → 80px (sprečava prekrivanje navigacije)
- Test mode: isTesting: true (za sve ads - banner, interstitial, rewarded)

### 2. client/src/components/BannerWithNav.tsx
- Navigation position: bottom-14 → bottom-20 (pomereno više)

### 3. client/src/index.css
- Dodato: body { padding-bottom: 140px; }
- Sprečava prekrivanje sadržaja sa banner + navigation

### 4. client/src/pages/arabic-alphabet.tsx
- Popravljen audio mapping (uklonjeni duplikati 'Ta', 'Ha')
- Audio funkcija optimizovana za Android WebView

### 5. capacitor.config.ts
- isTesting: true (globalni AdMob test mode)

## Build Proces Nakon Transfer-a

```powershell
cd C:\ILMBUDS
npm run build
npx cap sync android
cd android
.\gradlew clean
.\gradlew assembleDebug
```

## Očekivani Rezultati

✅ Banner neće prekrivati bottom navigation
✅ Test AdMob reklame će se prikazivati
✅ Sadržaj neće biti prekriven
✅ Arabic Alphabet audio će raditi
✅ Layout će biti pravilno poravnat

## Datum Izmena
Avgust 6, 2025 - 02:30 AM CET