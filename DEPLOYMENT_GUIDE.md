# Vercel Deployment Guide - Step2 Fitness Gym

## Current Issue: 404 NOT_FOUND Error

Your project structure has the Vite app nested in a subdirectory, but Vercel is looking at the root.

## Solution Options

### Option 1: Configure Vercel Root Directory (Easiest)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **General**
3. Find **Root Directory** setting
4. Set it to: `Step2FitnessGym_v9_Deploy/v9-deploy`
5. Click **Save**
6. Redeploy your project

### Option 2: Move Files to Repository Root

Run these commands to restructure:

```bash
# Move all files from nested directory to root
mv Step2FitnessGym_v9_Deploy/v9-deploy/* .
mv Step2FitnessGym_v9_Deploy/v9-deploy/.gitignore .

# Remove empty directories
rm -rf Step2FitnessGym_v9_Deploy

# Commit changes
git add .
git commit -m "Restructure for Vercel deployment"
git push origin main
```

### Option 3: Use Vercel CLI with Root Directory Flag

```bash
vercel --cwd Step2FitnessGym_v9_Deploy/v9-deploy
```

## Verification Checklist

After deploying, verify:
- [ ] Build logs show "npm run build" executing successfully
- [ ] Output directory contains index.html and assets
- [ ] Root URL loads your React app
- [ ] Service worker registers at /sw.js
- [ ] Manifest loads at /manifest.json

## Common Pitfalls

1. **Missing node_modules**: Vercel installs dependencies automatically
2. **Build command fails**: Check package.json scripts match vercel.json
3. **Static assets 404**: Ensure public folder files are in the right location
4. **SPA routing breaks**: The rewrites rule handles this (already configured)
