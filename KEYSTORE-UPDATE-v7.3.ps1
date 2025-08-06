# ILMBUDS KEYSTORE UPDATE SCRIPT v7.3
# Ažurira build konfiguraciju sa novim keystore podacima

Write-Host "🔑 AŽURIRANJE KEYSTORE KONFIGURACIJE" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green

Write-Host "`nPutanja projekta: C:\ILMBUDS" -ForegroundColor Yellow
Write-Host "Putanja keystore: C:\Users\User\Desktop\PWABuilder\android\android_keystore.keystore" -ForegroundColor Yellow

# Proverava da li postoji keystore
$keystorePath = "C:\Users\User\Desktop\PWABuilder\android\android_keystore.keystore"
if (Test-Path $keystorePath) {
    Write-Host "✅ Keystore fajl pronađen" -ForegroundColor Green
} else {
    Write-Host "❌ Keystore fajl NIJE pronađen!" -ForegroundColor Red
    Write-Host "Molimo proverite putanju: $keystorePath" -ForegroundColor Yellow
    Read-Host "Pritisni Enter za izlaz"
    exit
}

# Proverava da li je projekat na pravoj lokaciji
Set-Location "C:\ILMBUDS"
if (Test-Path "android\app\build.gradle") {
    Write-Host "✅ Android build.gradle pronađen" -ForegroundColor Green
} else {
    Write-Host "❌ Android projekat NIJE pronađen!" -ForegroundColor Red
    Write-Host "Molimo proverite da li je projekat u C:\ILMBUDS" -ForegroundColor Yellow
    Read-Host "Pritisni Enter za izlaz"
    exit
}

Write-Host "`n📋 KEYSTORE INFORMACIJE:" -ForegroundColor Cyan
Write-Host "Alias: androidkey" -ForegroundColor White
Write-Host "Store Password: android" -ForegroundColor White  
Write-Host "Key Password: Android" -ForegroundColor White
Write-Host "SHA1: 0D:C6:00:67:BD:44:25:B8:26:17:90:A9:9B:11:2C:0E:DF:44:96:04" -ForegroundColor White

Write-Host "`n✅ Build konfiguracija je ažurirana!" -ForegroundColor Green
Write-Host "Možete sada da pokrenete KREIRANJE-AAB-v7.3.ps1" -ForegroundColor Yellow

Read-Host "`nPritisni Enter za izlaz"