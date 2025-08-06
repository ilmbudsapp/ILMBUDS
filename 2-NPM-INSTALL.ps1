# KORAK 2: Instaliraj dependencies
Write-Host "2. Installing npm dependencies..." -ForegroundColor Yellow

npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ NPM INSTALL COMPLETED!" -ForegroundColor Green
} else {
    Write-Host "❌ NPM INSTALL FAILED!" -ForegroundColor Red
}