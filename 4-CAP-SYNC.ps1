# KORAK 4: Capacitor sync
Write-Host "4. Syncing Capacitor..." -ForegroundColor Yellow

npx cap sync android

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ CAPACITOR SYNC COMPLETED!" -ForegroundColor Green
} else {
    Write-Host "❌ CAPACITOR SYNC FAILED!" -ForegroundColor Red
}