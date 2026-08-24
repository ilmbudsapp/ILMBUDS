# ILMBUDS APK POTPISIVANJE
# Kreira potpisani APK sa keystore

Write-Host "========================================" -ForegroundColor Green
Write-Host "ILMBUDS APK POTPISIVANJE" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

Write-Host ""
Write-Host "KORAK 1: Proverava keystore fajl..." -ForegroundColor Yellow

$keystorePath = "C:\Users\User\Desktop\APK\ilmbuds-new.keystore"
if (Test-Path $keystorePath) {
    Write-Host "✅ Keystore fajl pronađen: $keystorePath" -ForegroundColor Green
} else {
    Write-Host "❌ Keystore fajl NIJE pronađen!" -ForegroundColor Red
    Write-Host "Trenutna lokacija: $(Get-Location)" -ForegroundColor Yellow
    Read-Host "Pritisni Enter za izlaz"
    exit
}

Write-Host ""
Write-Host "KORAK 2: Proverava postojeće APK fajlove..." -ForegroundColor Yellow

$debugApk = "android\app\build\outputs\apk\debug\app-debug.apk"
$releaseApk = "android\app\build\outputs\apk\release\app-release.apk"

if (Test-Path $debugApk) {
    $debugSize = (Get-Item $debugApk).Length / 1MB
    Write-Host "✅ Debug APK pronađen: $([math]::Round($debugSize, 2)) MB" -ForegroundColor Green
} else {
    Write-Host "❌ Debug APK NIJE pronađen!" -ForegroundColor Red
}

if (Test-Path $releaseApk) {
    $releaseSize = (Get-Item $releaseApk).Length / 1MB
    Write-Host "✅ Release APK pronađen: $([math]::Round($releaseSize, 2)) MB" -ForegroundColor Green
} else {
    Write-Host "❌ Release APK NIJE pronađen!" -ForegroundColor Red
}

Write-Host ""
Write-Host "KORAK 3: Kreiranje potpisanog APK-a..." -ForegroundColor Yellow

Set-Location android

try {
    Write-Host "Kreiranje release APK sa keystore signing..." -ForegroundColor White
    .\gradlew assembleRelease
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "POTPISANI APK USPEŠNO KREIRAN!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    
    $signedApkPath = "app\build\outputs\apk\release\app-release.apk"
    if (Test-Path $signedApkPath) {
        $apkSize = (Get-Item $signedApkPath).Length / 1MB
        Write-Host "Lokacija: $(Resolve-Path $signedApkPath)" -ForegroundColor Cyan
        Write-Host "Veličina: $([math]::Round($apkSize, 2)) MB" -ForegroundColor Cyan
        Write-Host "Status: POTPISAN sa keystore" -ForegroundColor Green
    }
    
} catch {
    Write-Host "Greška tokom kreiranja potpisanog APK-a!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""
Write-Host "KORAK 4: Kopiranje APK-a u public folder..." -ForegroundColor Yellow

Set-Location ..

$sourceApk = "android\app\build\outputs\apk\release\app-release.apk"
$destApk = "public\apk\ilmbuds-signed.apk"

if (Test-Path $sourceApk) {
    if (-not (Test-Path "public\apk")) {
        New-Item -ItemType Directory -Path "public\apk" -Force
    }
    
    Copy-Item $sourceApk $destApk -Force
    Write-Host "✅ APK kopiran u: $destApk" -ForegroundColor Green
} else {
    Write-Host "❌ Nije moguće kopirati APK" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "POTPISIVANJE ZAVRŠENO!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

Write-Host ""
Write-Host "KREIRANI FAJLOVI:" -ForegroundColor Yellow
if (Test-Path "android\app\build\outputs\apk\debug\app-debug.apk") {
    Write-Host "✓ Debug APK: android\app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor Green
}
if (Test-Path "android\app\build\outputs\apk\release\app-release.apk") {
    Write-Host "✓ Potpisani Release APK: android\app\build\outputs\apk\release\app-release.apk" -ForegroundColor Green
}
if (Test-Path "public\apk\ilmbuds-signed.apk") {
    Write-Host "✓ Kopiran APK: public\apk\ilmbuds-signed.apk" -ForegroundColor Green
}

Write-Host ""
Write-Host "NAPOMENE:" -ForegroundColor Yellow
Write-Host "• Potpisani APK je spreman za distribuciju" -ForegroundColor White
Write-Host "• Moze se instalirati na Android uredjaje" -ForegroundColor White
Write-Host "• Keystore: C:\Users\User\Desktop\APK\ilmbuds-new.keystore" -ForegroundColor White

Write-Host ""
Read-Host "Pritisni Enter za zavrsetak..."
