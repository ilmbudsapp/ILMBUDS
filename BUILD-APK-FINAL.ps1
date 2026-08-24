# ILMBUDS APK Build and Sign Script - FINAL
# Kreira i potpisuje APK sa pravilnim sertifikatom

Write-Host "ILMBUDS APK Build and Sign Script - FINAL" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green

# Keystore podaci
$KEYSTORE_PATH = "C:\Users\User\Desktop\APK\ilmbuds-new.keystore"
$KEYSTORE_ALIAS = "androidkey"
$STORE_PASSWORD = "agron1974"
$KEY_PASSWORD = "agron1974"

# Proveri da li keystore postoji
if (-not (Test-Path $KEYSTORE_PATH)) {
    Write-Host "Keystore fajl nije pronadjen na: $KEYSTORE_PATH" -ForegroundColor Red
    exit 1
}

Write-Host "Keystore pronadjen: $KEYSTORE_PATH" -ForegroundColor Green

# Navigiraj u android direktorijum
Set-Location "android"

Write-Host "Pocinje build proces..." -ForegroundColor Yellow

# Clean build
Write-Host "Ciscenje prethodnih build-ova..." -ForegroundColor Yellow
./gradlew clean

# Build debug APK
Write-Host "Kreiranje debug APK-a..." -ForegroundColor Yellow
./gradlew assembleDebug

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build neuspesan!" -ForegroundColor Red
    exit 1
}

Write-Host "Debug APK kreiran uspesno!" -ForegroundColor Green

# Pronadji kreiran APK
$DEBUG_APK = "app\build\outputs\apk\debug\app-debug.apk"
if (-not (Test-Path $DEBUG_APK)) {
    Write-Host "Debug APK nije pronadjen!" -ForegroundColor Red
    exit 1
}

Write-Host "Debug APK pronadjen: $DEBUG_APK" -ForegroundColor Green

# Kreiraj potpisan APK
$ALIGNED_APK = "app\build\outputs\apk\debug\app-debug-aligned.apk"
$SIGNED_APK = "app\build\outputs\apk\debug\ilmbuds-signed.apk"
$FINAL_APK = "C:\Users\User\Desktop\APK\ilmbuds-signed-$(Get-Date -Format 'yyyy-MM-dd-HHmm').apk"

Write-Host "Potpisivanje APK-a..." -ForegroundColor Yellow

# Korak 1: Zipalign APK
Write-Host "Korak 1: Zipalign APK..." -ForegroundColor Cyan
$ZIPALIGN_PATH = "$env:ANDROID_HOME\build-tools\*\zipalign.exe"
if (-not $env:ANDROID_HOME) {
    $ZIPALIGN_PATH = "C:\Android\Sdk\build-tools\*\zipalign.exe"
}

$ZIPALIGN = Get-ChildItem $ZIPALIGN_PATH -ErrorAction SilentlyContinue | Select-Object -First 1

if ($ZIPALIGN) {
    Write-Host "Koristim zipalign: $($ZIPALIGN.FullName)" -ForegroundColor Cyan
    & $ZIPALIGN.FullName -v 4 $DEBUG_APK $ALIGNED_APK
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Zipalign uspesan!" -ForegroundColor Green
        $APK_TO_SIGN = $ALIGNED_APK
    } else {
        Write-Host "Zipalign neuspesan, koristim originalni APK" -ForegroundColor Yellow
        $APK_TO_SIGN = $DEBUG_APK
    }
} else {
    Write-Host "Zipalign nije pronadjen, koristim originalni APK" -ForegroundColor Yellow
    $APK_TO_SIGN = $DEBUG_APK
}

# Korak 2: Potpisi APK sa apksigner
Write-Host "Korak 2: Potpisivanje APK-a..." -ForegroundColor Cyan
$APKSIGNER_PATH = "$env:ANDROID_HOME\build-tools\*\apksigner.bat"
if (-not $env:ANDROID_HOME) {
    $APKSIGNER_PATH = "C:\Android\Sdk\build-tools\*\apksigner.bat"
}

$APKSIGNER = Get-ChildItem $APKSIGNER_PATH -ErrorAction SilentlyContinue | Select-Object -First 1

if ($APKSIGNER) {
    Write-Host "Koristim apksigner: $($APKSIGNER.FullName)" -ForegroundColor Cyan
    
    # Potpisi APK sa apksigner
    & $APKSIGNER.FullName sign --ks $KEYSTORE_PATH --ks-key-alias $KEYSTORE_ALIAS --ks-pass pass:$STORE_PASSWORD --key-pass pass:$KEY_PASSWORD --out $SIGNED_APK $APK_TO_SIGN
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "APK potpisan uspesno sa apksigner!" -ForegroundColor Green
        $FINAL_APK_SOURCE = $SIGNED_APK
    } else {
        Write-Host "apksigner neuspesan, pokusavam sa jarsigner..." -ForegroundColor Yellow
        # Fallback na jarsigner
        jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA256 -keystore $KEYSTORE_PATH -storepass $STORE_PASSWORD -keypass $KEY_PASSWORD $APK_TO_SIGN $KEYSTORE_ALIAS
        if ($LASTEXITCODE -eq 0) {
            Write-Host "APK potpisan uspesno sa jarsigner!" -ForegroundColor Green
            $FINAL_APK_SOURCE = $APK_TO_SIGN
        } else {
            Write-Host "Potpisivanje neuspesno!" -ForegroundColor Red
            exit 1
        }
    }
} else {
    Write-Host "apksigner nije pronadjen, koristim jarsigner..." -ForegroundColor Yellow
    jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA256 -keystore $KEYSTORE_PATH -storepass $STORE_PASSWORD -keypass $KEY_PASSWORD $APK_TO_SIGN $KEYSTORE_ALIAS
    if ($LASTEXITCODE -eq 0) {
        Write-Host "APK potpisan uspesno sa jarsigner!" -ForegroundColor Green
        $FINAL_APK_SOURCE = $APK_TO_SIGN
    } else {
        Write-Host "Potpisivanje neuspesno!" -ForegroundColor Red
        exit 1
    }
}

# Kopiraj finalni APK
Copy-Item $FINAL_APK_SOURCE $FINAL_APK

Write-Host "APK informacije:" -ForegroundColor Cyan
Write-Host "   Originalni APK: $DEBUG_APK" -ForegroundColor White
Write-Host "   Aligned APK: $ALIGNED_APK" -ForegroundColor White
Write-Host "   Potpisani APK: $SIGNED_APK" -ForegroundColor White
Write-Host "   Finalni APK: $FINAL_APK" -ForegroundColor White

# Proveri potpis
Write-Host "Proveravam potpis..." -ForegroundColor Yellow
if ($APKSIGNER -and (Test-Path $SIGNED_APK)) {
    & $APKSIGNER.FullName verify $SIGNED_APK
} else {
    jarsigner -verify -verbose -certs $FINAL_APK_SOURCE
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "Potpis je validan!" -ForegroundColor Green
} else {
    Write-Host "Potpis nije validan!" -ForegroundColor Yellow
}

# APK velicina
$APK_SIZE = (Get-Item $FINAL_APK).Length / 1MB
Write-Host "APK velicina: $([math]::Round($APK_SIZE, 2)) MB" -ForegroundColor Cyan

Write-Host ""
Write-Host "APK je uspesno kreiran i potpisan!" -ForegroundColor Green
Write-Host "Lokacija: $FINAL_APK" -ForegroundColor Green
Write-Host ""
Write-Host "NAPOMENA: Ako se i dalje ne moze instalirati, probaj:" -ForegroundColor Yellow
Write-Host "1. Omoguci 'Unknown sources' u Android Settings" -ForegroundColor White
Write-Host "2. Koristi ADB za instalaciju: adb install `"$FINAL_APK`"" -ForegroundColor White
Write-Host ""

# Vrati se u root direktorijum
Set-Location ".."

Write-Host "Build proces zavrsen!" -ForegroundColor Green



