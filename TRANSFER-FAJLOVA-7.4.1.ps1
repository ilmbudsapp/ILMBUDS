# ILMBUDS VERSION 7.4.1 - TRANSFER FAJLOVA SCRIPT
# Kopiraj sve izmenjene fajlove iz Replit-a u lokalni projekat

param(
    [Parameter(Mandatory=$true)]
    [string]$SourcePath,
    [Parameter(Mandatory=$true)]
    [string]$DestinationPath
)

Write-Host "📁 ILMBUDS 7.4.1 - TRANSFER FAJLOVA" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green
Write-Host "Source: $SourcePath" -ForegroundColor Cyan
Write-Host "Destination: $DestinationPath" -ForegroundColor Cyan

if (-not (Test-Path $SourcePath)) {
    Write-Host "❌ Source path ne postoji: $SourcePath" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $DestinationPath)) {
    Write-Host "❌ Destination path ne postoji: $DestinationPath" -ForegroundColor Red
    exit 1
}

# LISTA FAJLOVA ZA TRANSFER (29 ukupno)
$filesToTransfer = @(
    # Version Files (4)
    "manifest.json",
    "android/app/build.gradle",
    "public/service-worker.js",
    "public/sw.js",
    
    # Critical Bug Fixes (8)
    "client/src/components/BannerWithNav.tsx",
    "client/src/services/capacitor-admob.ts",
    "client/src/components/ads/InterstitialAd.tsx",
    "client/src/pages/arabic-alphabet.tsx",
    "client/src/components/ads/NativeAdMobBanner.tsx",
    "client/src/index.css",
    "client/src/App.tsx",
    "client/src/pages/home-kids.tsx",
    
    # Android Logo Icons (15)
    "android/app/src/main/res/mipmap-hdpi/ic_launcher.png",
    "android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png",
    "android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png",
    "android/app/src/main/res/mipmap-mdpi/ic_launcher.png",
    "android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png",
    "android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png",
    "android/app/src/main/res/mipmap-xhdpi/ic_launcher.png",
    "android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png",
    "android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png",
    "android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png",
    "android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png",
    "android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png",
    "android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    "android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png",
    "android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png"
)

$transferredCount = 0
$failedCount = 0

Write-Host "`n🔄 Transfering files..." -ForegroundColor Yellow

foreach ($file in $filesToTransfer) {
    $sourceFull = Join-Path $SourcePath $file
    $destFull = Join-Path $DestinationPath $file
    $destDir = Split-Path $destFull -Parent
    
    Write-Host "Transfering: $file" -ForegroundColor White
    
    if (-not (Test-Path $sourceFull)) {
        Write-Host "  ❌ Source file not found!" -ForegroundColor Red
        $failedCount++
        continue
    }
    
    # Kreiraj destination folder ako ne postoji
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    try {
        Copy-Item -Path $sourceFull -Destination $destFull -Force
        Write-Host "  ✓ Transferred successfully" -ForegroundColor Green
        $transferredCount++
    } catch {
        Write-Host "  ❌ Transfer failed: $($_.Exception.Message)" -ForegroundColor Red
        $failedCount++
    }
}

Write-Host "`n📊 TRANSFER RESULTS:" -ForegroundColor Cyan
Write-Host "✅ Successfully transferred: $transferredCount files" -ForegroundColor Green
Write-Host "❌ Failed transfers: $failedCount files" -ForegroundColor Red
Write-Host "📁 Total files: $($filesToTransfer.Count)" -ForegroundColor White

if ($failedCount -eq 0) {
    Write-Host "`n🎉 ALL FILES TRANSFERRED SUCCESSFULLY!" -ForegroundColor Green
    Write-Host "📱 Ready for APK build - run BUILD-APK-7.4.1.ps1" -ForegroundColor Cyan
} else {
    Write-Host "`n⚠️  Some files failed to transfer. Check the errors above." -ForegroundColor Yellow
}

Write-Host "`n✅ TRANSFER PROCESS COMPLETE!" -ForegroundColor Green