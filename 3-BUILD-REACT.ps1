# KORAK 3: Build React aplikaciju
Write-Host "3. Building React app..." -ForegroundColor Yellow

npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ REACT BUILD COMPLETED!" -ForegroundColor Green
} else {
    Write-Host "❌ REACT BUILD FAILED!" -ForegroundColor Red
}