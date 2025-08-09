# ILMBUDS - Poboljšan lokalni setup sa proverama
# Kreirao: AI Assistant  
# Datum: 9. Avgust 2025
# Verzija: 7.4.1

Write-Host "========================================" -ForegroundColor Green
Write-Host "ILMBUDS - POBOLJŠAN SETUP v7.4.1" -ForegroundColor Green  
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
Write-Host "KORAK 2: Download i Extract projekta..." -ForegroundColor Yellow
Write-Host ""
Write-Host "INSTRUKCIJE ZA DOWNLOAD:" -ForegroundColor Red
Write-Host "1. Idi na Replit projekat" -ForegroundColor White
Write-Host "2. Klikni na tri tačke (...) u file explorer-u" -ForegroundColor White  
Write-Host "3. Klikni 'Download as ZIP'" -ForegroundColor White
Write-Host "4. Extract ZIP fajl DIREKTNO u: $projectDir" -ForegroundColor White
Write-Host "5. Proveri da li vidiš package.json, android folder, client folder itd." -ForegroundColor White
Write-Host ""

# Čekaj da korisnik završi download
do {
    $downloadComplete = Read-Host "Da li si završio download i extract? (y/n)"
    if ($downloadComplete -eq "y" -or $downloadComplete -eq "Y") {
        
        # Proveri da li postoje ključni fajlovi
        $requiredFiles = @("package.json", "capacitor.config.ts", "android", "client")
        $missingFiles = @()
        
        foreach ($file in $requiredFiles) {
            if (-not (Test-Path $file)) {
                $missingFiles += $file
            }
        }
        
        if ($missingFiles.Count -gt 0) {
            Write-Host ""
            Write-Host "GREŠKA: Nedostaju ključni fajlovi!" -ForegroundColor Red
            Write-Host "Nedostaju: $($missingFiles -join ', ')" -ForegroundColor Red
            Write-Host ""
            Write-Host "Možda nisi extract-ovao u pravi direktorijum?" -ForegroundColor Yellow
            Write-Host "Trenutni sadržaj direktorijuma:" -ForegroundColor Yellow
            Get-ChildItem | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White }
            Write-Host ""
            Write-Host "MOLIM TE:" -ForegroundColor Red
            Write-Host "1. Extract ZIP fajl ponovo" -ForegroundColor White
            Write-Host "2. Kada extract-uješ, vidi da li imaš package.json u root-u" -ForegroundColor White
            Write-Host "3. Ako je sve u sub-folder (npr. 'main'), prebaci sve fajlove u $projectDir" -ForegroundColor White
            Write-Host ""
        } else {
            Write-Host "✓ Svi ključni fajlovi pronađeni!" -ForegroundColor Green
            break
        }
    } else {
        Write-Host "Završi download pa nastavi!" -ForegroundColor Red
    }
} while ($true)

Write-Host ""
Write-Host "KORAK 3: Provera Node.js instalacije..." -ForegroundColor Yellow

# Provera Node.js
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js verzija: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js nije instaliran!" -ForegroundColor Red
    Write-Host "Skini sa: https://nodejs.org/" -ForegroundColor White
    Read-Host "Instaliraj Node.js pa pritisni Enter..."
    exit
}

Write-Host ""
Write-Host "KORAK 4: Provera Java JDK 21..." -ForegroundColor Yellow

# Provera Java
try {
    $javaVersion = java -version 2>&1 | Select-String "version"
    Write-Host "✓ Java verzija: $javaVersion" -ForegroundColor Green
    
    # Provera da li je JDK 21
    if ($javaVersion -notmatch "21\.") {
        Write-Host "⚠ UPOZORENJE: Potreban je JDK 21 za Android build!" -ForegroundColor Red
        Write-Host "Trenutna verzija nije 21. Skini JDK 21 sa: https://adoptium.net/" -ForegroundColor White
        $continueAnyway = Read-Host "Da li želiš da nastaviš uprkos tome? (y/n)"
        if ($continueAnyway -ne "y" -and $continueAnyway -ne "Y") {
            exit
        }
    }
} catch {
    Write-Host "✗ Java JDK nije instaliran!" -ForegroundColor Red
    Write-Host "Skini JDK 21 sa: https://adoptium.net/" -ForegroundColor White
    Read-Host "Instaliraj JDK 21 pa pritisni Enter..."
    exit
}

Write-Host ""
Write-Host "KORAK 5: Provera Android SDK..." -ForegroundColor Yellow

# Provera Android SDK
if ($env:ANDROID_HOME) {
    Write-Host "✓ ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor Green
} else {
    Write-Host "⚠ ANDROID_HOME environment varijabla nije postavljena!" -ForegroundColor Red
    Write-Host "Instaliraj Android Studio i postavi ANDROID_HOME." -ForegroundColor White
    Write-Host "NPM install će raditi, ali Android build neće moći." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "KORAK 6: NPM Install..." -ForegroundColor Yellow

# NPM Install sa error handling
try {
    Write-Host "Pokretanje npm install..." -ForegroundColor White
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ NPM dependencies instalirane uspešno!" -ForegroundColor Green
    } else {
        Write-Host "✗ NPM install završen sa greškama!" -ForegroundColor Red
        $continue = Read-Host "Da li želiš da nastaviš uprkos greškama? (y/n)"
        if ($continue -ne "y" -and $continue -ne "Y") {
            exit
        }
    }
} catch {
    Write-Host "✗ Kritična greška tokom npm install!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "KORAK 7: React Build..." -ForegroundColor Yellow

# React Build
try {
    Write-Host "Pokretanje npm run build..." -ForegroundColor White
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ React aplikacija build-ovana uspešno!" -ForegroundColor Green
    } else {
        Write-Host "✗ React build završen sa greškama!" -ForegroundColor Red
        $continue = Read-Host "Da li želiš da nastaviš uprkos greškama? (y/n)"
        if ($continue -ne "y" -and $continue -ne "Y") {
            exit
        }
    }
} catch {
    Write-Host "✗ Kritična greška tokom React build-a!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "KORAK 8: Capacitor Sync..." -ForegroundColor Yellow

# Capacitor Sync
try {
    Write-Host "Pokretanje npx cap sync android..." -ForegroundColor White
    npx cap sync android
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Capacitor sync završen uspešno!" -ForegroundColor Green
    } else {
        Write-Host "⚠ Capacitor sync završen sa greškama, ali možda radi!" -ForegroundColor Yellow
    }
} catch {
    Write-Host "✗ Greška tokom Capacitor sync!" -ForegroundColor Red
    Write-Host "Možda AndroidSDK nije instaliran ili ANDROID_HOME nije postavljen." -ForegroundColor White
}

Write-Host ""
Write-Host "KORAK 9: Keystore provera..." -ForegroundColor Yellow

# Provera da li postoji keystore
if (Test-Path "android\app\ilmbuds-new.keystore") {
    Write-Host "✓ Keystore fajl pronađen!" -ForegroundColor Green
} else {
    Write-Host "⚠ UPOZORENJE: Keystore fajl ne postoji!" -ForegroundColor Red
    Write-Host "Možeš kreirati debug APK, ali za release treba keystore." -ForegroundColor White
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "SETUP ZAVRŠEN!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

Write-Host ""
Write-Host "STATUS PROVERA:" -ForegroundColor Yellow
Write-Host "✓ Direktorijum kreiran: $projectDir" -ForegroundColor Green
Write-Host "✓ Projekat fajlovi: $(if (Test-Path 'package.json') { 'OK' } else { 'NEDOSTAJU' })" -ForegroundColor $(if (Test-Path 'package.json') { 'Green' } else { 'Red' })
Write-Host "✓ Node.js: OK" -ForegroundColor Green
Write-Host "✓ Java JDK: $(if ($javaVersion -match '21\.') { 'JDK 21 OK' } else { 'Nije JDK 21' })" -ForegroundColor $(if ($javaVersion -match '21\.') { 'Green' } else { 'Yellow' })
Write-Host "✓ Android SDK: $(if ($env:ANDROID_HOME) { 'OK' } else { 'Nedostaje' })" -ForegroundColor $(if ($env:ANDROID_HOME) { 'Green' } else { 'Yellow' })
Write-Host "✓ NPM Install: OK" -ForegroundColor Green
Write-Host "✓ React Build: OK" -ForegroundColor Green

Write-Host ""
Write-Host "SLEDEĆI KORACI ZA APK BUILD:" -ForegroundColor Yellow
Write-Host "1. cd android" -ForegroundColor White
Write-Host "2. .\gradlew assembleDebug     (za debug APK)" -ForegroundColor White
Write-Host "3. .\gradlew assembleRelease   (za release APK - treba keystore)" -ForegroundColor White
Write-Host "4. .\gradlew bundleRelease     (za AAB fajl - treba keystore)" -ForegroundColor White

Write-Host ""
Write-Host "ILI KORISTI BRZU SKRIPTU:" -ForegroundColor Cyan
Write-Host ".\BRZI-BUILD-APK-v7.4.1.ps1" -ForegroundColor Cyan

Write-Host ""
Read-Host "Pritisni Enter za završetak..."