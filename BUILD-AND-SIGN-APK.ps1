# ILMBUDS APK Build and Sign Script
# Kreira i potpisuje APK sa keystore ključem

Write-Host "🚀 ILMBUDS APK Build and Sign Script" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Keystore podaci - NOVI KEYSTORE
$KEYSTORE_PATH = "C:\Users\User\Desktop\APK\ilmbuds-new.keystore"
$KEYSTORE_ALIAS = "androidkey"
$STORE_PASSWORD = "agron1974"
$KEY_PASSWORD = "agron1974"  # Ista lozinka kao store password za PKCS12

# Proveri da li keystore postoji
if (-not (Test-Path $KEYSTORE_PATH)) {
    Write-Host "❌ Keystore fajl nije pronađen na: $KEYSTORE_PATH" -ForegroundColor Red
    Write-Host "Molimo proverite putanju keystore fajla." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Keystore pronađen: $KEYSTORE_PATH" -ForegroundColor Green

# Navigiraj u android direktorijum
Set-Location "android"

Write-Host "📱 Počinje build proces..." -ForegroundColor Yellow

# Clean build
Write-Host "🧹 Čišćenje prethodnih build-ova..." -ForegroundColor Yellow
./gradlew clean

# Build debug APK
Write-Host "🔨 Kreiranje debug APK-a..." -ForegroundColor Yellow
./gradlew assembleDebug

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build neuspešan!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Debug APK kreiran uspešno!" -ForegroundColor Green

# Pronađi kreiran APK
$DEBUG_APK = "app\build\outputs\apk\debug\app-debug.apk"
if (-not (Test-Path $DEBUG_APK)) {
    Write-Host "❌ Debug APK nije pronađen!" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Debug APK pronađen: $DEBUG_APK" -ForegroundColor Green

# Kreiraj potpisan APK
$SIGNED_APK = "app\build\outputs\apk\debug\ilmbuds-signed.apk"
$FINAL_APK = "C:\Users\User\Desktop\APK\ilmbuds-signed-$(Get-Date -Format 'yyyy-MM-dd-HHmm').apk"

Write-Host "✍️ Potpisivanje APK-a..." -ForegroundColor Yellow

# Koristi apksigner za potpisivanje
$APKSIGNER_PATH = "$env:ANDROID_HOME\build-tools\*\apksigner.bat"
$APKSIGNER = Get-ChildItem $APKSIGNER_PATH | Select-Object -First 1

if (-not $APKSIGNER) {
    Write-Host "❌ apksigner nije pronađen! Proverite ANDROID_HOME." -ForegroundColor Red
    exit 1
}

Write-Host "🔑 Koristim apksigner: $($APKSIGNER.FullName)" -ForegroundColor Cyan

# Potpisi APK
& $APKSIGNER.FullName sign --ks $KEYSTORE_PATH --ks-key-alias $KEYSTORE_ALIAS --ks-pass pass:$STORE_PASSWORD --key-pass pass:$KEY_PASSWORD --out $SIGNED_APK $DEBUG_APK

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Potpisivanje neuspešno!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ APK potpisan uspešno!" -ForegroundColor Green

# Kopiraj potpisan APK na desktop
Copy-Item $SIGNED_APK $FINAL_APK

Write-Host "📋 APK informacije:" -ForegroundColor Cyan
Write-Host "   Originalni APK: $DEBUG_APK" -ForegroundColor White
Write-Host "   Potpisani APK: $SIGNED_APK" -ForegroundColor White
Write-Host "   Finalni APK: $FINAL_APK" -ForegroundColor White

# Proveri potpis
Write-Host "🔍 Proveravam potpis..." -ForegroundColor Yellow
& $APKSIGNER.FullName verify $SIGNED_APK

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Potpis je validan!" -ForegroundColor Green
} else {
    Write-Host "⚠️ Potpis nije validan!" -ForegroundColor Yellow
}

# APK veličina
$APK_SIZE = (Get-Item $FINAL_APK).Length / 1MB
Write-Host "📊 APK veličina: $([math]::Round($APK_SIZE, 2)) MB" -ForegroundColor Cyan

Write-Host ""
Write-Host "🎉 APK je uspešno kreiran i potpisan!" -ForegroundColor Green
Write-Host "📍 Lokacija: $FINAL_APK" -ForegroundColor Green
Write-Host ""
Write-Host "📱 Možete instalirati APK na Android uređaj:" -ForegroundColor Yellow
Write-Host "   adb install `"$FINAL_APK`"" -ForegroundColor White
Write-Host ""

# Vrati se u root direktorijum
Set-Location ".."

Write-Host "✅ Build proces završen!" -ForegroundColor Green







