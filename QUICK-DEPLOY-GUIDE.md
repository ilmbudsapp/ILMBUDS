# 🚀 ILMBUDS Web - Quick Deploy Guide

## ✅ Šta je urađeno?

Dodati svi novi features prema Gemini specifikaciji:

1. ✅ **PWA Install Prompt** - Custom banner "Add to Home Screen"
2. ✅ **Bottom Navigation Bar** - Mobilna navigacija
3. ✅ **Streak Bar** - Gamified progress tracker
4. ✅ **Donation Modal** - Sadaqah Jariyah support
5. ✅ **Interstitial Ads** - Placeholder između kvizova
6. ✅ **Particle Effects** - Confetti, stars, sparkles animacije

---

## 📦 Build & Deploy

### 1. Instaliraj Dependencies (ako treba)
```bash
npm install
```

### 2. Build za Production
```bash
npm run build:client
```

Ovo kreira `dist/public/` folder spreman za Vercel.

### 3. Test Lokalno (opciono)
```bash
npm run preview:web
```

Otvori http://localhost:4173

### 4. Deploy na Vercel

#### Option A: Automatic (Git Push)
```bash
git add .
git commit -m "Add PWA features and gamification"
git push
```

Vercel automatski deploya.

#### Option B: Manual (Vercel CLI)
```bash
vercel --prod
```

---

## 🧪 Testing Checklist

### Desktop (https://www.ilmbuds.com)
- [ ] PWA install prompt se pojavljuje nakon 15s
- [ ] Donation modal u footer-u radi
- [ ] Sve stranice se učitavaju bez errora

### Mobile
- [ ] Bottom navigation bar vidljiv
- [ ] Streak bar prikazan na vrhu
- [ ] Završi kviz → confetti i particles
- [ ] Završi 3 kviza → interstitial ad
- [ ] PWA install banner nakon 15s
- [ ] Donation modal responsive

### Browser Console
Proveri da nema:
- ❌ TypeScript errora
- ❌ Import errora
- ❌ React errora

---

## 🔧 Ako Build Faila

### Error: Missing module
```bash
npm install
npm run build:client
```

### Error: TypeScript errors
Proveri da li fajl postoji:
- client/src/hooks/use-window-size.ts ✅
- client/src/components/PwaInstallPrompt.tsx ✅
- client/src/components/BottomNavBar.tsx ✅
- client/src/components/StreakBar.tsx ✅
- client/src/components/DonationModal.tsx ✅
- client/src/components/InterstitialAd.tsx ✅
- client/src/components/ParticleEffects.tsx ✅

### Error: Import path issues
Svi importi koriste `@/` alias (tsconfig.json paths).

---

## 📱 Features Usage

### 1. PWA Install Prompt
**Automatski** se prikazuje nakon 15 sekundi (prvi put).

### 2. Bottom Nav Bar
**Automatski** vidljiv na mobilnim ekranima (`md:hidden`).

### 3. Streak Bar
**Automatski** prikazan na vrhu.

Za update streaka (npr. nakon završenog kviza):
```javascript
if (window.updateIlmbudsStreak) {
  window.updateIlmbudsStreak();
}
```

### 4. Donation Modal
Klikni na "Support Us ❤️" u footer-u.

### 5. Interstitial Ad
Automatski se prikazuje svakih 3 kviza.

### 6. Particles & Confetti
Automatski na perfect score (100%) u kvizu.

---

## 🌐 Translations

**VAŽNO:** Translation keys su dokumentovani u `ILMBUDS-WEB-ENHANCEMENTS.md`.

Moraš **ručno dodati** nove keys u `shared/translations.ts`:
- installApp
- installAppDescription
- installNow
- streak
- days
- points
- best
- supportUs
- sadaqahJariyahText
- customAmount
- donate
- whySupport
- thankYouDonation
- loadingAd
- adLoadError
- continueWithoutAd
- continue
- adsSupport
- thankYouForSupport
- canCloseIn

Ili koristi fallback (već implementiran):
```tsx
{t('installApp') || 'Install ILMBUDS App'}
```

---

## 🎯 What's Next?

### Payment Integration (Future)
1. Kreiraj Stripe account
2. Dodaj Stripe Checkout u `DonationModal.tsx`
3. Update `handleDonate` funkciju

### Real Ads Integration (Future)
1. Dodaj AdSense/Adsterra script
2. Update `adUnitId` u `InterstitialAd.tsx`
3. Replace placeholder sa pravim ad code-om

### Analytics
1. Add Google Analytics 4
2. Track ad impressions
3. Track donations
4. Track PWA installs

---

## 📞 Support

**Pitanja?**
- Pogledaj `ILMBUDS-WEB-ENHANCEMENTS.md` za detalje
- Check browser console za errore
- Test na različitim uređajima

**Kontakt:**
- Email: agron6922@gmail.com
- Web: https://www.ilmbuds.com

---

## 🎉 Success Metrics

Nakon deploya, očekuj:
- ⬆️ Više PWA installs (install prompt)
- ⬆️ Bolje user engagement (streak bar)
- ⬆️ Više donations (donation modal)
- ⬆️ Bolje ad revenue (interstitial ads)
- ⬆️ Fun factor (confetti & particles!)

---

**Sve je spremno za deploy! 🚀**

Deploy komanda:
```bash
npm run build:client && git add . && git commit -m "Add PWA and gamification features" && git push
```
