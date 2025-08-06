# MANUAL FIXES CHECKLIST - Poslednji pokušaj

## Problem
4 meseca problema sa aplikacijom. Završavamo ovo DANAS.

## 5 FAJLOVA ZA IZMENU - KOPIRAJ TAČNO OVAKO

### 1. client/src/services/capacitor-admob.ts
LINIJA 37: `margin: 80,` (umesto 56)
LINIJA 38: `isTesting: true` (umesto false)
LINIJA 59: `isTesting: true` (umesto false) 
LINIJA 81: `isTesting: true` (umesto false)

### 2. client/src/components/BannerWithNav.tsx  
LINIJA 107: `className="fixed bottom-20 left-0` (umesto bottom-14)

### 3. client/src/index.css
DODAJ POSLE LINIJE 17:
```css
/* Body padding for fixed layout with AdMob banner and navigation */
body {
  padding-bottom: 140px; /* Space for banner (56px) + navigation (56px) + extra margin (28px) */
}
```

### 4. client/src/pages/arabic-alphabet.tsx
LINIJA 457: Promeni `'Tah': 'tah',` (umesto 'Ta': 'tah')
LINIJA 467: Promeni `'Hah': 'ha',` (umesto 'Ha': 'ha')

### 5. capacitor.config.ts
LINIJA 32: `isTesting: true,` (umesto false)

## BUILD PROCES
```powershell
cd C:\ILMBUDS
.\FINALNI-TRANSFER-SKRIPTE.ps1
```

## FINALNI REZULTAT
✅ Banner neće prekrivati navigaciju (margin 80px)
✅ Navigation pomerena više (bottom-20)
✅ Sadržaj neće biti prekriven (body padding 140px)  
✅ Test AdMob ads (Google test reklame)
✅ Arabic Alphabet audio radi (bez duplikata)

## AKO NE RADI
Pošalji mi screenshot greške i ZAVRŠAVAMO SA OVIM.
4 meseca je PREVIŠE.