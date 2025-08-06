# PowerShell script to export HTML cards to PNG
# Requires Chrome/Chromium browser

Write-Host "ILMBUDS Card Export Tool" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green

# Check if Chrome is available
$chromePath = ""
$possiblePaths = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "${env:LOCALAPPDATA}\Google\Chrome\Application\chrome.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)

foreach ($path in $possiblePaths) {
    if (Test-Path $path) {
        $chromePath = $path
        break
    }
}

if ($chromePath -eq "") {
    Write-Host "Chrome or Edge browser not found!" -ForegroundColor Red
    Write-Host "Please install Google Chrome or Microsoft Edge to use this tool." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

Write-Host "Found browser: $chromePath" -ForegroundColor Cyan

# Get current directory
$currentDir = Get-Location

# Cards to export
$cards = @(
    @{
        name = "quran"
        file = "card-export-quran.html"
        output = "quran-card.png"
    },
    @{
        name = "cartoons"
        file = "card-export-cartoons.html"
        output = "cartoons-card.png"
    },
    @{
        name = "arabic-alphabet"
        file = "card-export-arabic-alphabet.html"
        output = "arabic-alphabet-card.png"
    }
)

Write-Host "`nExporting cards to PNG..." -ForegroundColor Yellow

foreach ($card in $cards) {
    $htmlPath = Join-Path $currentDir $card.file
    $outputPath = Join-Path $currentDir $card.output
    
    if (Test-Path $htmlPath) {
        Write-Host "Exporting $($card.name)..." -ForegroundColor White
        
        # Chrome headless screenshot command
        $arguments = @(
            "--headless",
            "--disable-gpu",
            "--hide-scrollbars",
            "--disable-web-security",
            "--window-size=440,240",
            "--screenshot=$outputPath",
            "file:///$($htmlPath.Replace('\', '/'))"
        )
        
        try {
            Start-Process -FilePath $chromePath -ArgumentList $arguments -Wait -WindowStyle Hidden
            
            if (Test-Path $outputPath) {
                Write-Host "✓ $($card.output) created successfully" -ForegroundColor Green
            } else {
                Write-Host "✗ Failed to create $($card.output)" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "✗ Error creating $($card.output): $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "✗ HTML file not found: $($card.file)" -ForegroundColor Red
    }
}

Write-Host "`nExport completed!" -ForegroundColor Green
Write-Host "Files created in: $currentDir" -ForegroundColor Cyan
Write-Host "`nGenerated PNG files:" -ForegroundColor Yellow

foreach ($card in $cards) {
    $outputPath = Join-Path $currentDir $card.output
    if (Test-Path $outputPath) {
        $fileInfo = Get-Item $outputPath
        Write-Host "  • $($card.output) ($([math]::Round($fileInfo.Length / 1KB, 1)) KB)" -ForegroundColor White
    }
}

Write-Host "`nPress Enter to exit..." -ForegroundColor Gray
Read-Host