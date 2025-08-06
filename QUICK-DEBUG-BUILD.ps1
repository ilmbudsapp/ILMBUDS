# ILMBUDS QUICK DEBUG BUILD - Za debugging build problema
# Ovaj script pomaže da identifikuje probleme sa build procesom

Write-Host "🔍 ILMBUDS DEBUG BUILD v7.3" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan

# Proverava osnovne preduslove
Write-Host "`n1. PROVERA PREDUSLOVA:" -ForegroundColor Yellow
Write-Host "Node.js verzija:" -ForegroundColor White
node --version

Write-Host "npm verzija:" -ForegroundColor White
npm --version

Write-Host "Capacitor verzija:" -ForegroundColor White
npx cap --version

# Proverava Java/JDK
Write-Host "`n2. PROVERA JAVA/JDK:" -ForegroundColor Yellow
if (Get-Command java -ErrorAction SilentlyContinue) {
    Write-Host "Java verzija:" -ForegroundColor White
    java -version
} else {
    Write-Host "⚠️ Java nije instaliran ili nije u PATH!" -ForegroundColor Red
}

# Proverava Android SDK
Write-Host "`n3. PROVERA ANDROID SDK:" -ForegroundColor Yellow
if ($env:ANDROID_HOME) {
    Write-Host "ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor White
} else {
    Write-Host "⚠️ ANDROID_HOME nije postavljen!" -ForegroundColor Red
}

# Proverava Gradle wrapper
Write-Host "`n4. PROVERA GRADLE:" -ForegroundColor Yellow
Set-Location android
if (Test-Path "gradlew.bat") {
    Write-Host "Gradle wrapper verzija:" -ForegroundColor White
    .\gradlew --version
} else {
    Write-Host "⚠️ gradlew.bat nije pronađen!" -ForegroundColor Red
}

# Test build sa detaljnim logovima
Write-Host "`n5. TEST BUILD SA DEBUG LOGOVIMA:" -ForegroundColor Yellow
Write-Host "Pokušava clean..." -ForegroundColor White
.\gradlew clean --stacktrace --debug

Write-Host "`nPokušava sync dependencies..." -ForegroundColor White
.\gradlew dependencies --stacktrace

Write-Host "`nPokušava build (bez bundleRelease)..." -ForegroundColor White
.\gradlew assembleDebug --stacktrace --info

Set-Location ..

Write-Host "`n✅ DEBUG BUILD ZAVRŠEN" -ForegroundColor Green
Write-Host "Proverite logove iznad za greške." -ForegroundColor Yellow
Read-Host "`nPritisni Enter za izlaz"