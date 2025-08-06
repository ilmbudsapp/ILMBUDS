# FINALNI TRANSFER SKRIPT ZA ILMBUDS FIXES
# Avgust 6, 2025 - Poslednji pokušaj

Write-Host "=== ILMBUDS FINALNI TRANSFER FIXES ===" -ForegroundColor Green

# 1. Backup postojećih fajlova
Write-Host "1. Pravljenje backup-a..." -ForegroundColor Yellow
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupDir = "backup-$timestamp"
New-Item -ItemType Directory -Path $backupDir -Force

Copy-Item "client/src/services/capacitor-admob.ts" "$backupDir/" -Force -ErrorAction SilentlyContinue
Copy-Item "client/src/components/BannerWithNav.tsx" "$backupDir/" -Force -ErrorAction SilentlyContinue
Copy-Item "client/src/pages/arabic-alphabet.tsx" "$backupDir/" -Force -ErrorAction SilentlyContinue
Copy-Item "client/src/index.css" "$backupDir/" -Force -ErrorAction SilentlyContinue
Copy-Item "capacitor.config.ts" "$backupDir/" -Force -ErrorAction SilentlyContinue

# 2. Kompletni clean build
Write-Host "2. Čišćenje cache-a..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .\dist -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .\node_modules\.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .\android\app\build -ErrorAction SilentlyContinue

# 3. Build aplikacije
Write-Host "3. Build aplikacije..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "BUILD FAILED!" -ForegroundColor Red
    exit 1
}

# 4. Capacitor sync
Write-Host "4. Capacitor sync..." -ForegroundColor Yellow
npx cap sync android

# 5. Android build
Write-Host "5. Android build..." -ForegroundColor Yellow
cd android
.\gradlew clean
.\gradlew assembleDebug

if ($LASTEXITCODE -eq 0) {
    Write-Host "=== SUCCESS! APK KREIRAN ===" -ForegroundColor Green
    Write-Host "Lokacija: android\app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor Green
} else {
    Write-Host "=== BUILD FAILED ===" -ForegroundColor Red
}

cd ..