# ANDROID SETUP CHECKER - Proverava da li je Android SDK pravilno podešen
# Pokrenite ovo PRVO da vidite šta treba da instalirate

Write-Host "🔧 ANDROID SETUP CHECKER" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green

# 1. JAVA/JDK CHECK
Write-Host "`n1. JAVA/JDK PROVERA:" -ForegroundColor Yellow
if (Get-Command java -ErrorAction SilentlyContinue) {
    $javaVersion = java -version 2>&1 | Select-String "version"
    Write-Host "✅ Java je instaliran: $javaVersion" -ForegroundColor Green
    
    # Preporučena verzija
    if ($javaVersion -like "*21.*" -or $javaVersion -like "*17.*") {
        Write-Host "✅ Verzija je kompatibilna sa Android build-om" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Preporučuje se Java 17 ili 21 za Android builds" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Java NIJE instaliran!" -ForegroundColor Red
    Write-Host "   📥 Download: https://adoptium.net/releases.html" -ForegroundColor Cyan
}

# 2. ANDROID_HOME CHECK
Write-Host "`n2. ANDROID_HOME PROVERA:" -ForegroundColor Yellow
if ($env:ANDROID_HOME) {
    Write-Host "✅ ANDROID_HOME je postavljen: $env:ANDROID_HOME" -ForegroundColor Green
    
    # Proveri da li folder stvarno postoji
    if (Test-Path $env:ANDROID_HOME) {
        Write-Host "✅ Android SDK folder postoji" -ForegroundColor Green
        
        # Proveri build-tools
        $buildTools = Get-ChildItem "$env:ANDROID_HOME\build-tools" -Directory 2>$null
        if ($buildTools) {
            Write-Host "✅ Build-tools pronađeni:" -ForegroundColor Green
            $buildTools | ForEach-Object { Write-Host "   - $($_.Name)" -ForegroundColor White }
        } else {
            Write-Host "⚠️ Build-tools nisu pronađeni" -ForegroundColor Yellow
        }
        
        # Proveri platforms
        $platforms = Get-ChildItem "$env:ANDROID_HOME\platforms" -Directory 2>$null
        if ($platforms) {
            Write-Host "✅ Android platforms pronađeni:" -ForegroundColor Green
            $platforms | ForEach-Object { Write-Host "   - $($_.Name)" -ForegroundColor White }
        } else {
            Write-Host "⚠️ Android platforms nisu pronađeni" -ForegroundColor Yellow
        }
    } else {
        Write-Host "❌ ANDROID_HOME folder ne postoji!" -ForegroundColor Red
    }
} else {
    Write-Host "❌ ANDROID_HOME NIJE postavljen!" -ForegroundColor Red
    Write-Host "   📝 Dodajte u System Environment Variables:" -ForegroundColor Cyan
    Write-Host "   📁 Obično: C:\Users\%USERNAME%\AppData\Local\Android\Sdk" -ForegroundColor Cyan
}

# 3. GRADLE CHECK
Write-Host "`n3. GRADLE PROVERA:" -ForegroundColor Yellow
if (Test-Path "android\gradlew.bat") {
    Write-Host "✅ Gradle wrapper pronađen" -ForegroundColor Green
} else {
    Write-Host "❌ Gradle wrapper NIJE pronađen!" -ForegroundColor Red
}

# 4. NODE/NPM CHECK
Write-Host "`n4. NODE.JS PROVERA:" -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
    
    $npmVersion = npm --version
    Write-Host "✅ npm: $npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js NIJE instaliran!" -ForegroundColor Red
    Write-Host "   📥 Download: https://nodejs.org" -ForegroundColor Cyan
}

# 5. CAPACITOR CHECK
Write-Host "`n5. CAPACITOR PROVERA:" -ForegroundColor Yellow
if (Get-Command npx -ErrorAction SilentlyContinue) {
    try {
        $capVersion = npx cap --version 2>$null
        Write-Host "✅ Capacitor: $capVersion" -ForegroundColor Green
    } catch {
        Write-Host "⚠️ Capacitor možda nije instaliran lokalno" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ npx nije dostupan!" -ForegroundColor Red
}

Write-Host "`n📋 SUMARNI IZVEŠTAJ:" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan
Write-Host "Ako imate ❌ greške iznad, instalirajte nedostajuće komponente." -ForegroundColor White
Write-Host "Android Studio Desktop verzija uključuje sve potrebno." -ForegroundColor White
Write-Host "📥 https://developer.android.com/studio" -ForegroundColor Cyan

Read-Host "`nPritisni Enter za izlaz"