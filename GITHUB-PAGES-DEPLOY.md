# 🚀 Deploy to GitHub Pages (FREE!)

## Step 1: Create GitHub Repository

**Option A - Perfect URL (Recommended):**
- Repository name: `yourusername.github.io`
- Your site will be at: `https://yourusername.github.io` ⭐

**Option B - With Project Name:**
- Repository name: `portfolio` (or any name)
- Your site will be at: `https://yourusername.github.io/portfolio`

1. Go to [github.com/new](https://github.com/new)
2. Choose repository name (see options above)
3. Make it **Public**
4. **DON'T** initialize with README
5. Click "Create repository"

---

## Step 2: Push Your Code

After creating the repository, copy the repository URL (e.g., `https://github.com/yourusername/portfolio.git`)

Run these commands:

```bash
git remote add origin YOUR_GITHUB_URL
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_URL` with your actual repository URL.

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. Wait 2-3 minutes for the first deployment

---

## Step 4: View Your Portfolio! 🎉

Your portfolio will be live at:
- **Option A**: `https://yourusername.github.io`
- **Option B**: `https://yourusername.github.io/portfolio`

---

## 🔄 Auto-Deployment

Every time you push code to GitHub, your site automatically updates! 

```bash
git add .
git commit -m "Update portfolio"
git push
```

Wait 2-3 minutes and your changes will be live!

---

## ⚙️ Important Notes

### If using Option B (repository name is NOT yourusername.github.io):

You need to update the `baseURL` in `nuxt.config.ts`:

```typescript
baseURL: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/'
```

Replace `your-repo-name` with your actual repository name.

### If using Option A (repository name IS yourusername.github.io):

Update `nuxt.config.ts`:

```typescript
baseURL: '/'
```

---

## 📱 Share Your Portfolio

Once deployed, share your link:
- ✅ LinkedIn profile
- ✅ Resume/CV
- ✅ Email signature
- ✅ With recruiters and HRs

**Your portfolio is now accessible 24/7 worldwide!** 🌍

