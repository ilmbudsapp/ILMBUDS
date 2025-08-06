# ILMBUDS BUILD AAB v7.3 - KRATKA VERZIJA
# Automatski build AAB fajla za Google Play Store

Write-Host "🚀 ILMBUDS AAB BUILD v7.3" -ForegroundColor Green

# Quick build
Write-Host "Building..." -ForegroundColor Yellow
npm install && npm run build && npx cap sync android

# Android build
Write-Host "Creating AAB..." -ForegroundColor Yellow
Set-Location android
.\gradlew clean bundleRelease --stacktrace --info

# Rezultat
$aab = Get-ChildItem "app\build\outputs\bundle\release\*.aab" | Select-Object -First 1
if ($aab) {
    Copy-Item $aab.FullName "$env:USERPROFILE\Desktop\ILMBUDS.aab"
    Write-Host "✅ SUCCESS: ILMBUDS.aab na Desktop!" -ForegroundColor Green
} else {
    Write-Host "❌ FAILED: AAB nije kreiran!" -ForegroundColor Red
}

Set-Location ..
Read-Host "Pritisni Enter"