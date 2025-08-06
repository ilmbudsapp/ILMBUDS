# MANUAL GIT SETUP INSTRUKCIJE

## Problem
Replit blokira automatske Git operacije iz sigurnosnih razloga.

## Rešenje: Manual setup preko Replit Shell

### KORAK 1: Ti u Replit Shell (Terminal)
Klikni na "Shell" tab u Replit-u i ukucaj:

```bash
# Proveri da li je git vec setupovan
git status

# Ako nije, setupuj:
git init
git remote add origin https://github.com/ilmbudsapp/ILMBUDS.git

# Dodaj sve fajlove
git add .

# Napravi prvi commit
git commit -m "Initial ILMBUDS project setup with all fixes"

# Push na GitHub
git push -u origin main
```

### KORAK 2: Ti na PC-u
```powershell
# Obriši stari folder
Remove-Item -Recurse -Force C:\ILMBUDS -ErrorAction SilentlyContinue

# Clone novi repo
cd C:\
git clone https://github.com/ilmbudsapp/ILMBUDS.git ILMBUDS
cd ILMBUDS

# Proveri da li su fajlovi tu
dir
```

### KORAK 3: Test workflow
**Ja ću u Replit Shell uraditi:**
```bash
git add .
git commit -m "test sync"
git push
```

**Ti ćeš na PC:**
```powershell
git pull
```

## WORKFLOW POSLE SETUP-a

**Moj workflow (svaka izmena):**
- Napravim izmene u kodu
- U Replit Shell: `git add . && git commit -m "opis izmene" && git push`

**Tvoj workflow (pre build-a):**
- U PowerShell: `cd C:\ILMBUDS && git pull`
- Nastavi sa build-om: `npm run build` itd.

## Šta raditi sada?
1. Idi u Replit na "Shell" tab
2. Izvrši komande iz KORAK 1
3. Javi kada završiš, pa nastavljam test