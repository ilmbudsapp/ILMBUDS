# KORAK 5: Build Debug APK
Write-Host "5. Building DEBUG APK..." -ForegroundColor Yellow

Set-Location android
.\gradlew assembleDebug --stacktrace
Set-Location ..

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ DEBUG APK COMPLETED!" -ForegroundColor Green
    if (Test-Path "android\app\build\outputs\apk\debug\app-debug.apk") {
        $size = [math]::Round((Get-Item "android\app\build\outputs\apk\debug\app-debug.apk").Length / 1MB, 2)
        Write-Host "📱 APK: android\app\build\outputs\apk\debug\app-debug.apk ($size MB)" -ForegroundColor Cyan
    }
} else {
    Write-Host "❌ DEBUG APK BUILD FAILED!" -ForegroundColor Red
}