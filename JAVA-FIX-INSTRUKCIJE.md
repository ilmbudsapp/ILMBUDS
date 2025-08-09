# JAVA FIX - Android Studio Build Instrukcije

## Problem
```
ERROR: JAVA_HOME is set to an invalid directory: C:\Program Files\Eclipse Adoptium\jdk-11.0.27.6-hotspot
```

## Rešenje - Korak po Korak

### Korak 1: Proveri Java verzije
```powershell
java -version
where java
dir "C:\Program Files\Eclipse Adoptium\"
```

### Korak 2: Pronađi tačnu putanju Java 21
```powershell
dir "C:\Program Files\Eclipse Adoptium\jdk-21*"
```

### Korak 3: Postavi JAVA_HOME u PowerShell sesiji
```powershell
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21.0.8.9-hotspot"
echo "JAVA_HOME je: $env:JAVA_HOME"
```

### Korak 4: Ukloni gradle.properties konfiguraciju
```powershell
cd C:\ILMBUDS\android
notepad gradle.properties
```
**Dodaj # ispred linije:**
```
# org.gradle.java.home=putanja
```

### Korak 5: Test build sa specificiranom Java putanjom
```powershell
./gradlew -Dorg.gradle.java.home="C:\Program Files\Eclipse Adoptium\jdk-21.0.8.9-hotspot" assembleDebug
```

### Korak 6: Alternativni pristup - gradlew.bat edit
```powershell
notepad gradlew.bat
```
**Na vrh fajla dodaj:**
```batch
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-21.0.8.9-hotspot
```

## Backup plan - Ukoliko ne radi
```powershell
# Koristi default gradlew bez JAVA_HOME
./gradlew --no-daemon assembleDebug

# Ili koristi Android Studio direktno
# File > Open > C:\ILMBUDS\android
# Build > Generate Signed Bundle/APK
```

## Očekivani rezultat
```
BUILD SUCCESSFUL in 45s
111 actionable tasks: 111 executed
```

APK će biti u: `android/app/build/outputs/apk/debug/app-debug.apk`