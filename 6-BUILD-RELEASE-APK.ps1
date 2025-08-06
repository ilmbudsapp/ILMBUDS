# KORAK 6: Build Release APK (Signed)
Write-Host "6. Building RELEASE APK..." -ForegroundColor Yellow

Set-Location android
.\gradlew assembleRelease --stacktrace
Set-Location ..

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ RELEASE APK COMPLETED!" -ForegroundColor Green
    if (Test-Path "android\app\build\outputs\apk\release\app-release.apk") {
        $size = [math]::Round((Get-Item "android\app\build\outputs\apk\release\app-release.apk").Length / 1MB, 2)
        Write-Host "📱 APK: android\app\build\outputs\apk\release\app-release.apk ($size MB)" -ForegroundColor Cyan
    }
} else {
    Write-Host "❌ RELEASE APK BUILD FAILED!" -ForegroundColor Red
}