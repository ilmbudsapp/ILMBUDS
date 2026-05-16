# Pokreni ILMBUDS kao lokalni web sajt (browser preview)
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Test-Path "node_modules")) {
  Write-Host "Instaliram zavisnosti (npm install)..." -ForegroundColor Cyan
  npm install
}

Write-Host ""
Write-Host "ILMBUDS web preview" -ForegroundColor Green
Write-Host "  http://localhost:5000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Zaustavi server: Ctrl+C" -ForegroundColor DarkGray
Write-Host ""

$env:NODE_ENV = "development"
npm run dev
