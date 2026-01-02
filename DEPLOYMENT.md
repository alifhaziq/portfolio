# 🚀 Deployment Guide

## Step 1: Push to GitHub

1. Go to [GitHub](https://github.com) and create a new repository named `portfolio`
2. **DO NOT** initialize it with README, .gitignore, or license
3. Copy the repository URL (e.g., `https://github.com/yourusername/portfolio.git`)
4. Run these commands in your terminal:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

## Step 2: Deploy to Vercel (Recommended)

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Select "Import Git Repository"
5. Choose your `portfolio` repository
6. Vercel will auto-detect Nuxt.js settings
7. Click "Deploy"
8. Wait 2-3 minutes for deployment
9. Your site will be live at `https://your-portfolio.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts and your site will be deployed!

## Step 3: Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain (e.g., `haziqcodes.com`)
5. Follow DNS configuration instructions

## Alternative: Deploy to Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.output/public`
6. Click "Deploy site"

---

## 📝 Important Notes

- Your portfolio will be publicly accessible
- SSL/HTTPS is automatic with Vercel/Netlify
- Every push to GitHub will auto-deploy
- You can use a custom domain for free

## 🎯 Share Your Portfolio

Once deployed, share your link with:
- Recruiters and HRs
- LinkedIn profile
- Resume/CV
- Email signature
- GitHub profile README

**Your portfolio will be available 24/7 for anyone to view!**

