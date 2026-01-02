# Simple deployment script for GitHub Pages

Write-Host "🚀 Building portfolio..." -ForegroundColor Cyan

# Build the site
npm run generate

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host "📦 Deploying to GitHub Pages..." -ForegroundColor Cyan

# Switch to gh-pages branch
git checkout gh-pages

# Remove old files
Get-ChildItem -Force | Where-Object { $_.Name -ne '.git' -and $_.Name -ne '.output' } | Remove-Item -Recurse -Force

# Copy new files
Copy-Item -Path .output\public\* -Destination . -Recurse -Force

# Remove .output folder
Remove-Item -Recurse -Force .output

# Commit and push
git add -A
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin gh-pages

# Switch back to main
git checkout main

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your portfolio will be live at: https://alifhaziq.github.io/portfolio/" -ForegroundColor Cyan
Write-Host "⏱️  Wait 1-2 minutes for GitHub Pages to update" -ForegroundColor Yellow

