# ILMBUDS web — lokalno kao na Vercelu
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Test-Path "node_modules")) {
  Write-Host "npm install..." -ForegroundColor Cyan
  npm install
}

Write-Host ""
Write-Host "ILMBUDS WEB (Vercel mode)" -ForegroundColor Green
Write-Host "  Dev:     npm run dev:web  -> http://localhost:5173" -ForegroundColor Yellow
Write-Host "  Build:   npm run build:client" -ForegroundColor Yellow
Write-Host "  Preview: npm run preview:web" -ForegroundColor Yellow
Write-Host ""

npm run dev:web
