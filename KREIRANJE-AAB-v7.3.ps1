# ILMBUDS - AUTOMATSKA KREACIJA AAB FAJLA v7.3
# Ovaj script automatski kreira AAB fajl spreman za Google Play Store

Write-Host "ILMBUDS AAB KREATOR v7.3" -ForegroundColor Green
Write-Host "==============================" -ForegroundColor Green
Write-Host "Keystore: androidkey (SHA1: 0D:C6:00:67:BD:44:25:B8:26:17:90:A9:9B:11:2C:0E:DF:44:96:04)" -ForegroundColor Cyan

# Korak 1: Proveri da li je Node.js instaliran
Write-Host "Proverava Node.js..." -ForegroundColor Yellow
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "GREŠKA: Node.js nije instaliran!" -ForegroundColor Red
    Write-Host "Preuzmi sa: https://nodejs.org" -ForegroundColor Yellow
    exit 1
}

# Korak 2: Instaliraj dependencies
Write-Host "Instalira npm packages..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "GREŠKA: npm install failed!" -ForegroundColor Red
    exit 1
}

# Korak 3: Build web verziju
Write-Host "Builduje web aplikaciju..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "GREŠKA: npm run build failed!" -ForegroundColor Red
    exit 1
}

# Korak 4: Sync sa Android
Write-Host "Sinhronizuje sa Android projektom..." -ForegroundColor Yellow
npx cap sync android
if ($LASTEXITCODE -ne 0) {
    Write-Host "GREŠKA: Capacitor sync failed!" -ForegroundColor Red
    exit 1
}

# Korak 5: Proveri AndroidManifest.xml dozvole
Write-Host "Proverava AndroidManifest.xml dozvole..." -ForegroundColor Yellow
$manifestPath = "android\app\src\main\AndroidManifest.xml"
$manifestContent = Get-Content $manifestPath -Raw

if ($manifestContent -like "*com.google.android.gms.permission.AD_ID*") {
    Write-Host "✓ AD_ID dozvola pronađena" -ForegroundColor Green
} else {
    Write-Host "⚠ AD_ID dozvola nedostaje!" -ForegroundColor Yellow
    # Dodaj dozvole ako ne postoje
    $newPermissions = @"
    <!-- ✅ DODATO: Dozvole za AdMob reklame -->
    <uses-permission android:name="com.google.android.gms.permission.AD_ID" />
    <uses-permission android:name="android.permission.ACCESS_ADSERVICES_ATTRIBUTION" />
"@
    $manifestContent = $manifestContent -replace "(<uses-permission.*?>)", "$1`n$newPermissions"
    Set-Content $manifestPath $manifestContent
    Write-Host "✓ AD_ID dozvole dodane u AndroidManifest.xml" -ForegroundColor Green
}

# Korak 6: Clean i build AAB
Write-Host "Briše prethodne build fajlove..." -ForegroundColor Yellow
Set-Location android
.\gradlew clean --stacktrace

Write-Host "Kreira AAB fajl..." -ForegroundColor Yellow
.\gradlew bundleRelease --stacktrace --info

if ($LASTEXITCODE -eq 0) {
    # Korak 7: Pronađi AAB fajl
    $aabPath = Get-ChildItem -Path "app\build\outputs\bundle\release\*.aab" | Select-Object -First 1
    
    if ($aabPath) {
        Write-Host "✓ SUCCESS! AAB fajl kreiran:" -ForegroundColor Green
        Write-Host $aabPath.FullName -ForegroundColor Cyan
        
        # Kopiraj na Desktop za lakši pristup
        $desktopPath = "$env:USERPROFILE\Desktop\ILMBUDS-release.aab"
        Copy-Item $aabPath.FullName $desktopPath
        Write-Host "✓ Kopiran na Desktop: ILMBUDS-release.aab" -ForegroundColor Green
        
        # Proveri veličinu fajla
        $fileSize = [math]::Round($aabPath.Length / 1MB, 2)
        Write-Host "✓ Veličina fajla: $fileSize MB" -ForegroundColor Green
        
        Write-Host "`n🚀 AAB fajl je spreman za Google Play Store upload!" -ForegroundColor Green
        Write-Host "📍 Lokacija: $desktopPath" -ForegroundColor Yellow
    } else {
        Write-Host "GREŠKA: AAB fajl nije pronađen!" -ForegroundColor Red
    }
} else {
    Write-Host "GREŠKA: Gradle build failed!" -ForegroundColor Red
    Write-Host "Proveri log iznad za detaljne greške." -ForegroundColor Yellow
}

Set-Location ..
Write-Host "`nScript završen." -ForegroundColor Green
Read-Host "Pritisni Enter za izlaz"