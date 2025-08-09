# ILMBUDS - Kompletan download i lokalni setup
# Kreirao: AI Assistant
# Datum: 9. Avgust 2025
# Verzija: 7.4.1

Write-Host "========================================" -ForegroundColor Green
Write-Host "ILMBUDS - LOKALNI BUILD SETUP v7.4.1" -ForegroundColor Green  
Write-Host "========================================" -ForegroundColor Green

Write-Host ""
Write-Host "KORAK 1: Kreiranje direktorijuma..." -ForegroundColor Yellow

# Kreiranje osnovnog direktorijuma
$projectDir = "C:\ILMBUDS-v7.4.1"
if (Test-Path $projectDir) {
    Write-Host "Direktorijum $projectDir već postoji!" -ForegroundColor Red
    $choice = Read-Host "Da li želiš da obrišeš postojeći direktorijum? (y/n)"
    if ($choice -eq "y" -or $choice -eq "Y") {
        Remove-Item -Path $projectDir -Recurse -Force
        Write-Host "Postojeći direktorijum obrisan." -ForegroundColor Green
    } else {
        Write-Host "Prekidanje instalacije." -ForegroundColor Red
        exit
    }
}

New-Item -ItemType Directory -Path $projectDir -Force
Set-Location $projectDir

Write-Host "Kreiran direktorijum: $projectDir" -ForegroundColor Green

Write-Host ""
Write-Host "KORAK 2: Download projekta iz Replit..." -ForegroundColor Yellow
Write-Host "NAPOMENA: Potrebno je da ručno skineš ZIP fajl sa Replit-a i extrakt-uješ u ovaj direktorijum!" -ForegroundColor Red
Write-Host "1. Idi na Replit projekat" -ForegroundColor White
Write-Host "2. Klikni na tri tačke (...) u file explorer-u" -ForegroundColor White  
Write-Host "3. Klikni 'Download as ZIP'" -ForegroundColor White
Write-Host "4. Extrakt-uj sve fajlove u: $projectDir" -ForegroundColor White
Write-Host ""
$downloadComplete = Read-Host "Da li si završio download i extract? (y/n)"
if ($downloadComplete -ne "y" -and $downloadComplete -ne "Y") {
    Write-Host "Završi download pa pokreni skriptu ponovo!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "KORAK 3: Provera Node.js instalacije..." -ForegroundColor Yellow

# Provera Node.js
try {
    $nodeVersion = node --version
    Write-Host "Node.js verzija: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js nije instaliran!" -ForegroundColor Red
    Write-Host "Skini sa: https://nodejs.org/" -ForegroundColor White
    exit
}

Write-Host ""
Write-Host "KORAK 4: Provera Java JDK 21..." -ForegroundColor Yellow

# Provera Java
try {
    $javaVersion = java -version 2>&1 | Select-String "version"
    Write-Host "Java verzija: $javaVersion" -ForegroundColor Green
    
    # Provera da li je JDK 21
    if ($javaVersion -notmatch "21\.") {
        Write-Host "UPOZORENJE: Potreban je JDK 21 za Android build!" -ForegroundColor Red
        Write-Host "Trenutna verzija nije 21. Skini JDK 21 sa: https://adoptium.net/" -ForegroundColor White
    }
} catch {
    Write-Host "Java JDK nije instaliran!" -ForegroundColor Red
    Write-Host "Skini JDK 21 sa: https://adoptium.net/" -ForegroundColor White
    exit
}

Write-Host ""
Write-Host "KORAK 5: Provera Android SDK..." -ForegroundColor Yellow

# Provera Android SDK
if ($env:ANDROID_HOME) {
    Write-Host "ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor Green
} else {
    Write-Host "ANDROID_HOME environment varijabla nije postavljena!" -ForegroundColor Red
    Write-Host "Instaliraj Android Studio i postavi ANDROID_HOME." -ForegroundColor White
}

Write-Host ""
Write-Host "KORAK 6: NPM Install..." -ForegroundColor Yellow

# NPM Install
try {
    npm install
    Write-Host "NPM dependencies instalirane uspešno!" -ForegroundColor Green
} catch {
    Write-Host "Greška tokom npm install!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "KORAK 7: React Build..." -ForegroundColor Yellow

# React Build
try {
    npm run build
    Write-Host "React aplikacija build-ovana uspešno!" -ForegroundColor Green
} catch {
    Write-Host "Greška tokom React build-a!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "KORAK 8: Capacitor Sync..." -ForegroundColor Yellow

# Capacitor Sync
try {
    npx cap sync android
    Write-Host "Capacitor sync završen uspešno!" -ForegroundColor Green
} catch {
    Write-Host "Greška tokom Capacitor sync!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "KORAK 9: Keystore kopiranje..." -ForegroundColor Yellow

# Provera da li postoji keystore
if (Test-Path "android\app\ilmbuds-new.keystore") {
    Write-Host "Keystore fajl pronađen!" -ForegroundColor Green
} else {
    Write-Host "UPOZORENJE: Keystore fajl ne postoji!" -ForegroundColor Red
    Write-Host "Potrebno je da kreiramo novi keystore za signing." -ForegroundColor White
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "SETUP ZAVRŠEN USPEŠNO!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

Write-Host ""
Write-Host "SLEDEĆI KORACI:" -ForegroundColor Yellow
Write-Host "1. cd android" -ForegroundColor White
Write-Host "2. .\gradlew assembleDebug     (za debug APK)" -ForegroundColor White
Write-Host "3. .\gradlew assembleRelease   (za release APK)" -ForegroundColor White
Write-Host "4. .\gradlew bundleRelease     (za AAB fajl)" -ForegroundColor White
Write-Host ""
Write-Host "APK fajlovi će biti u: android\app\build\outputs\apk\" -ForegroundColor Cyan
Write-Host "AAB fajlovi će biti u: android\app\build\outputs\bundle\" -ForegroundColor Cyan

Write-Host ""
Write-Host "NAJVAŽNIJE IZMENE U OVOJ VERZIJI:" -ForegroundColor Yellow
Write-Host "✓ AdMob banner podešen sa navigacijom (bottom-14 + bottom-28)" -ForegroundColor Green
Write-Host "✓ Rewarded ads crash fix sa proper error handling" -ForegroundColor Green  
Write-Host "✓ Arabic Alphabet audio fix (Ha duplikat rešen)" -ForegroundColor Green
Write-Host "✓ Interstitial ads poboljšani sa boljim logging-om" -ForegroundColor Green
Write-Host "✓ Všt pozičije za better mobile experience" -ForegroundColor Green

Write-Host ""
Read-Host "Pritisni Enter za završetak..."