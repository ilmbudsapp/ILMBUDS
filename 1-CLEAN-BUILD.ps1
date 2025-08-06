# KORAK 1: Očisti prethodne build-ove
Write-Host "1. Brisanje prethodnih build-ova..." -ForegroundColor Yellow

if (Test-Path "android\app\build") {
    Remove-Item "android\app\build" -Recurse -Force
    Write-Host "✓ Android build obrisan" -ForegroundColor Green
}

if (Test-Path "dist") {
    Remove-Item "dist" -Recurse -Force  
    Write-Host "✓ Dist folder obrisan" -ForegroundColor Green
}

Write-Host "✅ CLEAN COMPLETED!" -ForegroundColor Green