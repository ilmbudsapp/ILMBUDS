# ILMBUDS VERSION 7.4.1 - APK BUILD SCRIPT
# Kreiranje APK fajla sa svim ispravkama

Write-Host "🚀 ILMBUDS VERSION 7.4.1 - APK BUILD PROCESS" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

# 1. PROVERI JAVA VERZIJU
Write-Host "`n1. Checking Java version..." -ForegroundColor Yellow
java -version
Write-Host "`n⚠️  TREBA JAVA 21 - ako nije, pokreni: scoop install openjdk21" -ForegroundColor Red

# 2. OČISTI PRETHODNE BUILD-OVE
Write-Host "`n2. Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path "android\app\build") {
    Remove-Item "android\app\build" -Recurse -Force
    Write-Host "✓ Android build folder cleaned" -ForegroundColor Green
}

if (Test-Path "dist") {
    Remove-Item "dist" -Recurse -Force
    Write-Host "✓ Dist folder cleaned" -ForegroundColor Green
}

# 3. INSTALIRAJ DEPENDENCIES
Write-Host "`n3. Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm install failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# 4. BUILD REACT APP
Write-Host "`n4. Building React application..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ React build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ React app built successfully" -ForegroundColor Green

# 5. CAPACITOR SYNC
Write-Host "`n5. Syncing Capacitor..." -ForegroundColor Yellow
npx cap sync android
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Capacitor sync failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Capacitor synced" -ForegroundColor Green

# 6. KREIRAJ DEBUG APK
Write-Host "`n6. Building DEBUG APK..." -ForegroundColor Yellow
Set-Location android
.\gradlew assembleDebug --stacktrace
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Debug APK build failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..
Write-Host "✓ DEBUG APK created successfully!" -ForegroundColor Green

# 7. KREIRAJ RELEASE APK (SIGNED)
Write-Host "`n7. Building RELEASE APK (signed)..." -ForegroundColor Yellow
Set-Location android
.\gradlew assembleRelease --stacktrace
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Release APK build failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..
Write-Host "✓ RELEASE APK created successfully!" -ForegroundColor Green

# 8. PRIKAŽI REZULTATE
Write-Host "`n🎉 BUILD COMPLETED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

Write-Host "`n📱 APK FILES CREATED:" -ForegroundColor Cyan
Write-Host "DEBUG APK:" -ForegroundColor Yellow
$debugApk = "android\app\build\outputs\apk\debug\app-debug.apk"
if (Test-Path $debugApk) {
    $debugSize = [math]::Round((Get-Item $debugApk).Length / 1MB, 2)
    Write-Host "  ✓ $debugApk ($debugSize MB)" -ForegroundColor Green
} else {
    Write-Host "  ❌ Debug APK not found!" -ForegroundColor Red
}

Write-Host "`nRELEASE APK:" -ForegroundColor Yellow
$releaseApk = "android\app\build\outputs\apk\release\app-release.apk"
if (Test-Path $releaseApk) {
    $releaseSize = [math]::Round((Get-Item $releaseApk).Length / 1MB, 2)
    Write-Host "  ✓ $releaseApk ($releaseSize MB)" -ForegroundColor Green
} else {
    Write-Host "  ❌ Release APK not found!" -ForegroundColor Red
}

Write-Host "`n🔧 VERSION INFO:" -ForegroundColor Cyan
Write-Host "  App Version: 7.4.1" -ForegroundColor White
Write-Host "  Version Code: 74" -ForegroundColor White
Write-Host "  Target SDK: 35 (Android 15)" -ForegroundColor White

Write-Host "`n📋 NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Test DEBUG APK on device: adb install $debugApk" -ForegroundColor White
Write-Host "2. If all works, use RELEASE APK for distribution" -ForegroundColor White
Write-Host "3. Upload to Google Play Console if needed" -ForegroundColor White

Write-Host "`n✅ ILMBUDS 7.4.1 APK BUILD PROCESS COMPLETE!" -ForegroundColor Green