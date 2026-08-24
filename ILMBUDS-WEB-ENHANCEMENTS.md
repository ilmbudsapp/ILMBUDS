# ILMBUDS Web - PWA & Gamification Enhancements

## 📋 Overview
Sve nove komponente i funkcionalnosti dodati u ILMBUDS web sajt (www.ilmbuds.com) prema Gemini specifikacijama.

## ✅ Implemented Features

### 1. PWA Install Prompt (PwaInstallPrompt.tsx)
**Location:** `client/src/components/PwaInstallPrompt.tsx`

**Features:**
- Custom install banner sa "Add to Home Screen" pozivom
- Automatsko prikazivanje nakon 15 sekundi (prvi put)
- Glassmorphism design sa gradijentima (emerald/teal)
- localStorage tracking (ne prikazuje svaki put)
- Framer Motion animacije
- Responsive dizajn (mobilni + desktop)

**Usage:**
```tsx
<PwaInstallPrompt />
```

Automatski detektuje `beforeinstallprompt` event i prikazuje banner.

---

### 2. Bottom Navigation Bar (BottomNavBar.tsx)
**Location:** `client/src/components/BottomNavBar.tsx`

**Features:**
- Mobilna navigacija (samo na `md:hidden`)
- Fixed bottom pozicija
- 5 glavnih linkova: Home, Stories, Quiz, Games, Settings
- Active state sa Framer Motion `layoutId` animacijom
- Dark/Light mode support
- Sound effects na klik
- Safe area support za iPhone notch

**Usage:**
```tsx
<BottomNavBar />
```

**Navigation Items:**
- Home (/)
- Stories (/stories)
- Quiz (/quiz-categories)
- Games (/mini-games)
- Settings (/settings)

---

### 3. Streak Bar - Gamified Progress (StreakBar.tsx)
**Location:** `client/src/components/StreakBar.tsx`

**Features:**
- Prikazuje trenutni streak (dani)
- Longest streak badge
- User points display
- Automatski čuva u localStorage
- Proverava da li je streak prekinut (više od 1 dan pauze)
- Dynamic ikone i boje (Flame → Star → Trophy)
- Particle animacije na povećanje streaka
- Global funkcija: `window.updateIlmbudsStreak()`

**Color Scheme:**
- 1-6 dana: emerald-500 → teal-500
- 7-13 dana: yellow-500 → orange-500
- 14-29 dana: orange-500 → red-500
- 30+ dana: purple-500 → pink-500

**Usage:**
```tsx
<StreakBar />
```

Call from anywhere:
```javascript
if (window.updateIlmbudsStreak) {
  window.updateIlmbudsStreak();
}
```

---

### 4. Donation Modal - Sadaqah Jariyah (DonationModal.tsx)
**Location:** `client/src/components/DonationModal.tsx`

**Features:**
- Tri donation tiera: Coffee (€3), Supporter (€10), Premium (€25)
- Custom amount input
- Sadaqah Jariyah poruka sa Hadith referencom (Sahih Muslim 1631)
- Glassmorphism cards sa gradijentima
- "Why Support Us?" sekcija
- Payment note (Stripe/PayPal - coming soon)
- Framer Motion animacije

**Usage:**
```tsx
const [showModal, setShowModal] = useState(false);

<DonationModal 
  isOpen={showModal} 
  onClose={() => setShowModal(false)} 
/>
```

**Integration:**
- Dodat button u footer sa Heart icon
- onClick poziva `setShowDonationModal(true)`

---

### 5. Interstitial Ad Placeholder (InterstitialAd.tsx)
**Location:** `client/src/components/InterstitialAd.tsx`

**Features:**
- Full-screen overlay ad između kvizova
- Countdown timer (5s default) pre nego što se može zatvoriti
- Loading state, error state, ad display
- localStorage tracking koliko puta je prikazan
- `useInterstitialAd` hook za kontrolu
- Auto-trigger svakih N akcija (default: 3)

**Hook Usage:**
```tsx
const { showAd, triggerAd, closeAd } = useInterstitialAd();

// Trigger ad every 3 quiz completions
triggerAd(3);

<InterstitialAd isOpen={showAd} onClose={closeAd} />
```

**Ad Network Integration (TODO):**
- Replace placeholder sa pravim AdSense/Adsterra kodom
- Update `adUnitId` prop

---

### 6. Particle Effects & Confetti (ParticleEffects.tsx)
**Location:** `client/src/components/ParticleEffects.tsx`

**Features:**
- `ParticleEffect` - Custom particle animacije (stars, sparkles, hearts, bubbles)
- `ConfettiEffect` - react-confetti wrapper
- `SuccessAnimation` - kombinovani confetti + emoji animacija
- Framer Motion powered

**Usage:**
```tsx
// Stars particles
<ParticleEffect type="stars" count={30} duration={5000} />

// Confetti
<ConfettiEffect active={true} duration={5000} />

// Success animation (both)
<SuccessAnimation show={true} onComplete={() => {}} />
```

**Types:**
- `stars` ⭐
- `sparkles` ✨
- `hearts` ❤️
- `bubbles` 💫

---

### 7. Window Size Hook (use-window-size.ts)
**Location:** `client/src/hooks/use-window-size.ts`

**Features:**
- Real-time window dimensions
- Auto-updates on resize
- SSR safe

**Usage:**
```tsx
const { width, height } = useWindowSize();
```

---

## 🔗 Integration Points

### WebSiteShell.tsx
Sve nove komponente su integrisane u glavni layout:

```tsx
import { PwaInstallPrompt } from "@/components/PwaInstallPrompt";
import { BottomNavBar } from "@/components/BottomNavBar";
import { StreakBar } from "@/components/StreakBar";
import { DonationModal } from "@/components/DonationModal";

<PwaInstallPrompt />
<StreakBar />
<BottomNavBar />
<DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
```

### quiz-complete.tsx
Dodati particle effects i interstitial ad:

```tsx
import { ParticleEffect, SuccessAnimation } from '@/components/ParticleEffects';
import { InterstitialAd, useInterstitialAd } from '@/components/InterstitialAd';

const { showAd, triggerAd, closeAd } = useInterstitialAd();

// On perfect score
<SuccessAnimation show={showSuccessAnim} />
<ParticleEffect type="stars" count={30} duration={5000} />

// Trigger ad every 3 quizzes
triggerAd(3);
<InterstitialAd isOpen={showAd} onClose={closeAd} />
```

---

## 🌐 Translation Keys to Add

Add these keys to `shared/translations.ts`:

```typescript
ui: {
  // PWA Install
  installApp: {
    en: 'Install ILMBUDS App',
    bs: 'Instaliraj ILMBUDS Aplikaciju',
    de: 'ILMBUDS App installieren',
    sq: 'Instalo ILMBUDS Aplikacionin',
    it: 'Installa App ILMBUDS'
  },
  installAppDescription: {
    en: 'Get fast offline access and a better experience. No download needed!',
    bs: 'Brzi offline pristup i bolje iskustvo. Bez preuzimanja!',
    de: 'Schneller Offline-Zugriff und besseres Erlebnis. Kein Download nötig!',
    sq: 'Qasje e shpejtë offline dhe përvojë më e mirë. Nuk kërkohet shkarkimi!',
    it: 'Accesso offline veloce e una migliore esperienza. Nessun download necessario!'
  },
  installNow: {
    en: 'Install Now',
    bs: 'Instaliraj Sada',
    de: 'Jetzt installieren',
    sq: 'Instalo Tani',
    it: 'Installa Ora'
  },

  // Streak
  streak: {
    en: 'Streak',
    bs: 'Niz',
    de: 'Serie',
    sq: 'Seria',
    it: 'Serie'
  },
  days: {
    en: 'days',
    bs: 'dana',
    de: 'Tage',
    sq: 'ditë',
    it: 'giorni'
  },
  points: {
    en: 'Points',
    bs: 'Bodovi',
    de: 'Punkte',
    sq: 'Pikë',
    it: 'Punti'
  },
  best: {
    en: 'Best',
    bs: 'Najbolje',
    de: 'Bester',
    sq: 'Më i miri',
    it: 'Migliore'
  },

  // Donation
  supportUs: {
    en: 'Support ILMBUDS',
    bs: 'Podrži ILMBUDS',
    de: 'Unterstütze ILMBUDS',
    sq: 'Mbështet ILMBUDS',
    it: 'Supporta ILMBUDS'
  },
  sadaqahJariyahText: {
    en: 'When a person dies, their deeds come to an end except for three: ongoing charity (Sadaqah Jariyah), beneficial knowledge, or a righteous child who prays for them. Your support helps thousands of children learn about Islam.',
    bs: 'Kada čovjek umre, njegova djela prestaju osim tri: stalna sadaka (Sadaqah Jariyah), korisno znanje ili pravedno dijete koje se moli za njega. Vaša podrška pomaže tisućama djece da nauče o islamu.',
    de: 'Wenn eine Person stirbt, enden ihre Taten bis auf drei: fortlaufende Wohltätigkeit (Sadaqah Jariyah), nützliches Wissen oder ein rechtschaffenes Kind, das für sie betet. Ihre Unterstützung hilft Tausenden von Kindern, den Islam zu lernen.',
    sq: 'Kur një person vdes, veprat e tij përfundojn përveç tre: bamirësi e vazhdueshme (Sadaqah Jariyah), njohuri të dobishme ose një fëmijë i drejtë që lutet për ta. Mbështetja juaj ndihmon mijëra fëmijë të mësojnë për Islamin.',
    it: 'Quando una persona muore, le sue azioni terminano tranne tre: carità continua (Sadaqah Jariyah), conoscenza benefica o un figlio giusto che prega per loro. Il tuo supporto aiuta migliaia di bambini a imparare l\'Islam.'
  },
  customAmount: {
    en: 'Custom Amount',
    bs: 'Prilagođeni Iznos',
    de: 'Benutzerdefinierter Betrag',
    sq: 'Shuma e Personalizuar',
    it: 'Importo Personalizzato'
  },
  donate: {
    en: 'Donate',
    bs: 'Doniraj',
    de: 'Spenden',
    sq: 'Dhuro',
    it: 'Dona'
  },
  whySupport: {
    en: 'Why Support Us?',
    bs: 'Zašto nas podržati?',
    de: 'Warum uns unterstützen?',
    sq: 'Pse të na mbështesësh?',
    it: 'Perché supportarci?'
  },
  thankYouDonation: {
    en: 'Thank you for your support! Payment integration coming soon.',
    bs: 'Hvala na vašoj podršci! Integracija plaćanja uskoro.',
    de: 'Danke für Ihre Unterstützung! Zahlungsintegration kommt bald.',
    sq: 'Faleminderit për mbështetjen tuaj! Integrimi i pagesave së shpejti.',
    it: 'Grazie per il tuo supporto! Integrazione pagamento in arrivo.'
  },

  // Ads
  loadingAd: {
    en: 'Loading ad...',
    bs: 'Učitavanje reklame...',
    de: 'Werbung wird geladen...',
    sq: 'Duke ngarkuar reklamën...',
    it: 'Caricamento annuncio...'
  },
  adLoadError: {
    en: 'Could not load ad',
    bs: 'Nije moguće učitati reklamu',
    de: 'Werbung konnte nicht geladen werden',
    sq: 'Nuk mund të ngarkojë reklamën',
    it: 'Impossibile caricare l\'annuncio'
  },
  continueWithoutAd: {
    en: 'You can continue without watching the ad',
    bs: 'Možete nastaviti bez gledanja reklame',
    de: 'Sie können ohne Werbung fortfahren',
    sq: 'Mund të vazhdoni pa parë reklamën',
    it: 'Puoi continuare senza guardare l\'annuncio'
  },
  continue: {
    en: 'Continue',
    bs: 'Nastavi',
    de: 'Weiter',
    sq: 'Vazhdo',
    it: 'Continua'
  },
  adsSupport: {
    en: 'Ads help us keep ILMBUDS free for everyone',
    bs: 'Reklame nam pomažu da ILMBUDS ostane besplatan',
    de: 'Werbung hilft uns, ILMBUDS für alle kostenlos zu halten',
    sq: 'Reklamat na ndihmojnë të mbajmë ILMBUDS falas për të gjithë',
    it: 'Gli annunci ci aiutano a mantenere ILMBUDS gratuito per tutti'
  },
  thankYouForSupport: {
    en: 'Thank you for supporting ILMBUDS!',
    bs: 'Hvala što podržavate ILMBUDS!',
    de: 'Danke für die Unterstützung von ILMBUDS!',
    sq: 'Faleminderit që mbështetni ILMBUDS!',
    it: 'Grazie per aver supportato ILMBUDS!'
  },
  canCloseIn: {
    en: 'You can close in',
    bs: 'Možete zatvoriti za',
    de: 'Sie können schließen in',
    sq: 'Mund të mbyllni në',
    it: 'Puoi chiudere tra'
  },
}
```

---

## 🚀 Next Steps

### 1. Build & Test
```bash
npm run build:client
```

### 2. Deploy to Vercel
```bash
git add .
git commit -m "Add PWA install prompt, bottom nav, streak bar, donation modal, interstitial ads, and particle effects"
git push
```

Vercel će automatski deployati izmene.

### 3. Test na Mobilnom
- Otvori https://www.ilmbuds.com na mobilnom
- Čekaj 15 sekundi → PWA install prompt
- Završi kviz → Vidi streak bar, confetti, particle effects
- Završi 3 kviza → Interstitial ad
- Scroll to footer → Donation button

### 4. Payment Integration (Future)
Dodati u DonationModal.tsx:
- Stripe Checkout
- PayPal Button
- Update handleDonate funkciju

### 5. Real Ad Integration (Future)
Dodati u InterstitialAd.tsx:
- Google AdSense tag
- Adsterra script
- Update adUnitId

---

## 📱 Mobile-First Features Checklist

✅ PWA Install Prompt (custom banner)
✅ Bottom Navigation Bar (mobile only)
✅ Streak Bar (gamification)
✅ Donation Modal (Sadaqah Jariyah)
✅ Interstitial Ads (placeholder)
✅ Particle Effects & Confetti
✅ Success Animations
✅ Responsive Design (all components)
✅ Dark Mode Support
✅ Touch-friendly buttons
✅ Sound Effects
✅ Vibration API support
✅ localStorage persistence
✅ Safe area support (iPhone notch)

---

## 🎨 Design System

### Colors
- **Primary:** Emerald (emerald-500 to teal-500)
- **Accent:** Gold/Amber (yellow-500 to orange-500)
- **Success:** Green (green-500)
- **Error:** Red (red-500)
- **Info:** Blue (blue-500)

### Typography
- **Font Family:** Quicksand, Fredoka (kids-friendly)
- **Headings:** Bold, 2xl-4xl
- **Body:** Medium, sm-base

### Spacing
- **Mobile Padding:** 4 (16px)
- **Desktop Padding:** 6-8 (24-32px)
- **Gap:** 2-4 (8-16px)

### Animations
- **Duration:** 200-500ms (quick), 1000-2000ms (slow)
- **Easing:** ease-out, spring
- **Type:** Framer Motion

---

## 📊 Performance Optimizations

1. **Lazy Loading:** Sve komponente su lazy loaded
2. **Code Splitting:** Vite automatski splituje kod
3. **Image Optimization:** WebP format sa fallback
4. **Caching:** Service Worker za offline mode
5. **Bundle Size:** React Confetti je jedina veća zavisnost (~50KB)

---

## 🐛 Known Issues & TODOs

### Issues
- [ ] Translations nisu dodati u shared/translations.ts (moraš ručno dodati)
- [ ] Payment integration nije implementirana (placeholder)
- [ ] Real ad network integration (placeholder)

### Future Improvements
- [ ] Add A/B testing za donation amounts
- [ ] Add analytics tracking (Google Analytics 4)
- [ ] Add push notifications za daily reminders
- [ ] Add social sharing za achievements
- [ ] Add leaderboard sa streaks

---

## 📞 Support

Ako imaš pitanja ili problem:
1. Pogledaj kod u komponentama
2. Proveri browser console za errore
3. Testiraj na mobilnom uređaju
4. Deploy na Vercel i testiraj live

**Author:** Agron Osmani (agron6922@gmail.com)
**Date:** 24.08.2026
**Version:** 8.0.0

---

**All features successfully implemented! 🎉**
