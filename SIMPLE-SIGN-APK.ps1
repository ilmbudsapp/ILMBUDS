# SIMPLE-SIGN-APK.ps1 - Jednostavan skript za potpisivanje APK-a

Write-Host "🔐 Potpisivanje APK fajla..." -ForegroundColor Green

# Putanje
$APK_PATH = "android\app\build\outputs\apk\debug\app-debug.apk"
$KEYSTORE_PATH = "C:\Users\User\Desktop\APK\ilmbuds-new-keystore-backup.keystore"
$SIGNED_APK_PATH = "public\apk\ilmbuds-signed.apk"

# Proveri da li APK postoji
if (Test-Path $APK_PATH) {
    Write-Host "✅ APK fajl pronađen: $APK_PATH" -ForegroundColor Green
    
    # Kreiraj direktorijum ako ne postoji
    if (!(Test-Path "public\apk")) {
        New-Item -ItemType Directory -Path "public\apk" -Force
        Write-Host "📁 Kreiran direktorijum: public\apk" -ForegroundColor Yellow
    }
    
    # Potpisi APK
    Write-Host "🔐 Potpisivanje APK-a..." -ForegroundColor Yellow
    Write-Host "Keystore: $KEYSTORE_PATH" -ForegroundColor Cyan
    Write-Host "Lozinka: ilmbuds123" -ForegroundColor Cyan
    
    & jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEYSTORE_PATH -storepass ilmbuds123 -keypass ilmbuds123 $APK_PATH ilmbuds
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ APK uspešno potpisan!" -ForegroundColor Green
        
        # Kopiraj potpisani APK
        Copy-Item $APK_PATH $SIGNED_APK_PATH -Force
        Write-Host "📱 Potpisani APK kopiran u: $SIGNED_APK_PATH" -ForegroundColor Green
        
        # Proveri veličinu
        $size = (Get-Item $SIGNED_APK_PATH).Length / 1MB
        Write-Host "📊 Veličina APK-a: $([math]::Round($size, 2)) MB" -ForegroundColor Cyan
        
        Write-Host ""
        Write-Host "🎉 APK je spreman za instalaciju!" -ForegroundColor Green
        Write-Host "📍 Lokacija: $SIGNED_APK_PATH" -ForegroundColor White
        Write-Host "• Može se instalirati na Android uređaje" -ForegroundColor White
        Write-Host "• Test AdMob reklame su uključene" -ForegroundColor White
        
    } else {
        Write-Host "❌ Greška pri potpisivanju APK-a!" -ForegroundColor Red
    }
    
} else {
    Write-Host "❌ APK fajl nije pronađen: $APK_PATH" -ForegroundColor Red
    Write-Host "🔍 Proverite da li je build uspešno završen" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")









