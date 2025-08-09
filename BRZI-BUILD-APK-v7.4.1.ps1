# ILMBUDS - Brzi APK Build
# Verzija: 7.4.1
# Datum: 9. Avgust 2025

Write-Host "========================================" -ForegroundColor Green
Write-Host "ILMBUDS BRZI APK BUILD v7.4.1" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

Write-Host ""
Write-Host "Početni direktorijum: $(Get-Location)" -ForegroundColor Cyan

Write-Host ""
Write-Host "KORAK 1: Clean prethodnih build-ova..." -ForegroundColor Yellow
Set-Location android
if (Test-Path "app\build") {
    Remove-Item -Path "app\build" -Recurse -Force
    Write-Host "Prethodnji build obrisan." -ForegroundColor Green
}

Write-Host ""
Write-Host "KORAK 2: Gradle Clean..." -ForegroundColor Yellow
try {
    .\gradlew clean
    Write-Host "Gradle clean završen uspešno!" -ForegroundColor Green
} catch {
    Write-Host "Greška tokom gradle clean!" -ForegroundColor Red
    Read-Host "Pritisni Enter za nastavljanje uprkos grešci..."
}

Write-Host ""
Write-Host "KORAK 3: Debug APK Build..." -ForegroundColor Yellow
Write-Host "Kreiranje debug APK fajla..." -ForegroundColor White

try {
    .\gradlew assembleDebug
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "DEBUG APK USPEŠNO KREIRAN!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    
    $debugApkPath = "app\build\outputs\apk\debug\app-debug.apk"
    if (Test-Path $debugApkPath) {
        $apkSize = (Get-Item $debugApkPath).Length / 1MB
        Write-Host "Lokacija: $(Resolve-Path $debugApkPath)" -ForegroundColor Cyan
        Write-Host "Veličina: $([math]::Round($apkSize, 2)) MB" -ForegroundColor Cyan
    }
    
} catch {
    Write-Host "Greška tokom debug build-a!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""
$buildRelease = Read-Host "Da li želiš da kreiramo i release APK? (y/n)"

if ($buildRelease -eq "y" -or $buildRelease -eq "Y") {
    Write-Host ""
    Write-Host "KORAK 4: Release APK Build..." -ForegroundColor Yellow
    Write-Host "Kreiranje release APK fajla sa keystore signing..." -ForegroundColor White
    
    # Proveri da li postoji keystore
    if (-not (Test-Path "app\ilmbuds-new.keystore")) {
        Write-Host "GREŠKA: Keystore fajl ne postoji!" -ForegroundColor Red
        Write-Host "Potrebno je kreirati keystore ili kopirati postojeći." -ForegroundColor White
        Read-Host "Pritisni Enter za završetak..."
        exit
    }
    
    try {
        .\gradlew assembleRelease
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "RELEASE APK USPEŠNO KREIRAN!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        
        $releaseApkPath = "app\build\outputs\apk\release\app-release.apk"
        if (Test-Path $releaseApkPath) {
            $apkSize = (Get-Item $releaseApkPath).Length / 1MB
            Write-Host "Lokacija: $(Resolve-Path $releaseApkPath)" -ForegroundColor Cyan
            Write-Host "Veličina: $([math]::Round($apkSize, 2)) MB" -ForegroundColor Cyan
        }
        
    } catch {
        Write-Host "Greška tokom release build-a!" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
}

Write-Host ""
$buildAAB = Read-Host "Da li želiš da kreiramo i AAB fajl za Google Play? (y/n)"

if ($buildAAB -eq "y" -or $buildAAB -eq "Y") {
    Write-Host ""
    Write-Host "KORAK 5: AAB (Android App Bundle) Build..." -ForegroundColor Yellow
    Write-Host "Kreiranje AAB fajla za Google Play Store..." -ForegroundColor White
    
    try {
        .\gradlew bundleRelease
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "AAB FAJL USPEŠNO KREIRAN!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        
        $aabPath = "app\build\outputs\bundle\release\app-release.aab"
        if (Test-Path $aabPath) {
            $aabSize = (Get-Item $aabPath).Length / 1MB
            Write-Host "Lokacija: $(Resolve-Path $aabPath)" -ForegroundColor Cyan
            Write-Host "Veličina: $([math]::Round($aabSize, 2)) MB" -ForegroundColor Cyan
        }
        
    } catch {
        Write-Host "Greška tokom AAB build-a!" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "BUILD PROCES ZAVRŠEN!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

Write-Host ""
Write-Host "KRERANI FAJLOVI:" -ForegroundColor Yellow
if (Test-Path "app\build\outputs\apk\debug\app-debug.apk") {
    Write-Host "✓ Debug APK: app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor Green
}
if (Test-Path "app\build\outputs\apk\release\app-release.apk") {
    Write-Host "✓ Release APK: app\build\outputs\apk\release\app-release.apk" -ForegroundColor Green
}
if (Test-Path "app\build\outputs\bundle\release\app-release.aab") {
    Write-Host "✓ AAB fajl: app\build\outputs\bundle\release\app-release.aab" -ForegroundColor Green
}

Write-Host ""
Write-Host "NAPOMENE:" -ForegroundColor Yellow
Write-Host "• Debug APK - za testiranje (može se instalirati direktno)" -ForegroundColor White
Write-Host "• Release APK - optimizovan, signed sa keystore" -ForegroundColor White  
Write-Host "• AAB fajl - za upload na Google Play Store" -ForegroundColor White

Write-Host ""
Read-Host "Pritisni Enter za završetak..."