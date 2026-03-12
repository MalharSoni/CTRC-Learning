# CTRC Learning - Deployment Guide

**Last Updated:** March 11, 2026
**Version:** 1.0

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup](#local-development-setup)
4. [Building the Site](#building-the-site)
5. [Deploying to GitHub Pages](#deploying-to-github-pages)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Troubleshooting](#troubleshooting)
8. [Performance Optimization](#performance-optimization)
9. [Maintenance & Updates](#maintenance--updates)

---

## Overview

CTRC Learning is a static documentation site built with **MkDocs Material**. It compiles markdown files and custom components into a fast, responsive website optimized for learning robotics.

### Tech Stack
- **Framework:** MkDocs with Material theme
- **Content:** Markdown + HTML + Custom CSS
- **Components:** React/TypeScript components (9 custom components)
- **Icons:** Phosphor Icons (professional icon system)
- **Animations:** Custom CSS animations + Canvas backgrounds
- **Hosting:** GitHub Pages (recommended) or any static host

---

## Prerequisites

### Required Software

| Tool | Version | Purpose |
|------|---------|---------|
| **Python** | 3.8+ | MkDocs runtime |
| **pip** | Latest | Python package manager |
| **Git** | 2.0+ | Version control |
| **Node.js** | 16+ (optional) | Component development |
| **npm** | 8+ (optional) | Package management for components |

### Check Installed Versions

```bash
python --version    # Should be 3.8+
pip --version       # Latest
git --version       # 2.0+
node --version      # 16+ (optional)
npm --version       # 8+ (optional)
```

---

## Local Development Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/ctrc/CTRC-Learning.git
cd CTRC-Learning
```

### Step 2: Install MkDocs and Dependencies

```bash
# Install MkDocs and Material theme
pip install mkdocs-material

# Install additional plugins
pip install mkdocs-glightbox
```

**Or use requirements.txt (recommended):**

```bash
pip install -r requirements.txt
```

**Create requirements.txt if it doesn't exist:**

```txt
mkdocs>=1.5.0
mkdocs-material>=9.5.0
mkdocs-glightbox>=0.3.7
```

### Step 3: Install Component Dependencies (Optional)

If you're developing custom components:

```bash
cd docs/components
npm install @phosphor-icons/react
npm install framer-motion
npm install clsx tailwind-merge
```

### Step 4: Start Local Development Server

```bash
mkdocs serve
```

Your site will be available at:
```
http://127.0.0.1:8000
```

**Live Reload:** Any changes to markdown files or CSS will auto-reload the browser.

---

## Building the Site

### Standard Build

```bash
mkdocs build
```

This creates a `site/` directory with all static files ready for deployment.

### Build Options

```bash
# Clean build (removes old site/ directory first)
mkdocs build --clean

# Strict build (fails on warnings)
mkdocs build --strict

# Verbose output (for debugging)
mkdocs build --verbose
```

### What Gets Generated

```
site/
├── index.html              # Custom homepage
├── foundation/             # Foundation program pages
├── projects/               # BattleBots and other projects
├── design-handbook/        # Design reference
├── mechanism-examples/     # Gallery of mechanisms
├── stylesheets/            # CSS files
│   ├── extra.css
│   └── flip-button.css
├── assets/                 # Material theme assets
└── search/                 # Search index
```

---

## Deploying to GitHub Pages

### Method 1: GitHub Actions (Recommended)

**Automatic deployment on every push to main.**

#### Step 1: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy MkDocs to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install mkdocs-material
          pip install mkdocs-glightbox

      - name: Build site
        run: mkdocs build --strict

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
          cname: ctrc.learning.example.com  # Optional: your custom domain
```

#### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** / **root**
5. Save

#### Step 3: Push to Trigger Deployment

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Your site will be live at:
```
https://[username].github.io/CTRC-Learning/
```

---

### Method 2: Manual Deployment (mkdocs gh-deploy)

```bash
# Build and deploy in one command
mkdocs gh-deploy
```

This will:
1. Build the site
2. Create/update the `gh-pages` branch
3. Push to GitHub
4. Trigger GitHub Pages deployment

**Options:**

```bash
# Clean build before deploy
mkdocs gh-deploy --clean

# Force push (use with caution)
mkdocs gh-deploy --force

# Custom commit message
mkdocs gh-deploy --message "Update: New component documentation"
```

---

### Method 3: Manual Build + Git Push

```bash
# 1. Build the site
mkdocs build --clean

# 2. Switch to gh-pages branch
git checkout gh-pages

# 3. Copy site/ contents to root
cp -r site/* .
rm -rf site/

# 4. Commit and push
git add .
git commit -m "Deploy site"
git push origin gh-pages

# 5. Switch back to main
git checkout main
```

---

## Custom Domain Setup

### Step 1: Add CNAME File

Create `docs/CNAME`:

```
ctrc.learning.yourdomain.com
```

### Step 2: Configure DNS

Add DNS records at your domain provider:

**For subdomain (recommended):**
```
Type: CNAME
Name: ctrc.learning
Value: [username].github.io
```

**For apex domain:**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### Step 3: Enable HTTPS

1. Go to GitHub Settings → Pages
2. Check "Enforce HTTPS"
3. Wait for certificate provisioning (can take up to 24 hours)

### Step 4: Update mkdocs.yml

```yaml
site_url: "https://ctrc.learning.yourdomain.com"
```

---

## Troubleshooting

### Common Issues

#### 1. Build Fails: "Theme not found"

**Problem:** MkDocs Material not installed

**Solution:**
```bash
pip install mkdocs-material
```

#### 2. Build Warning: "Navigation not found"

**Problem:** Broken internal links

**Solution:**
```bash
# Run strict build to identify broken links
mkdocs build --strict --verbose

# Fix links in markdown files (e.g., foundation/index.md → foundation/)
```

#### 3. Custom Homepage Not Loading

**Problem:** MkDocs serving default index.md instead of index.html

**Solution:**
- Ensure `docs/index.html` exists
- Add `use_directory_urls: false` in mkdocs.yml (not recommended)
- Or use MkDocs overrides:

```yaml
theme:
  custom_dir: overrides
```

Create `overrides/home.html` to override the homepage template.

#### 4. CSS/JS Not Loading After Deploy

**Problem:** Incorrect base paths

**Solution:**
Update `mkdocs.yml`:
```yaml
site_url: "https://[username].github.io/CTRC-Learning/"
use_directory_urls: true
```

#### 5. Icons Not Rendering

**Problem:** Phosphor Icons not installed or wrong import paths

**Solution:**
```bash
cd docs/components
npm install @phosphor-icons/react
```

Update imports in component files:
```tsx
import { BookOpen, Trophy } from "@phosphor-icons/react"
```

#### 6. Slow Build Times

**Problem:** Large site with many pages

**Solution:**
```bash
# Use --dirty flag for incremental builds (dev only)
mkdocs serve --dirty

# For production, use full clean build
mkdocs build --clean
```

#### 7. GitHub Pages 404 Error

**Problem:** Site not found after deployment

**Solution:**
- Check GitHub Settings → Pages is enabled
- Verify `gh-pages` branch exists
- Ensure repository is public (or you have GitHub Pro for private Pages)
- Wait 5-10 minutes for propagation

#### 8. glightbox Plugin Error

**Problem:** Image lightbox not working

**Solution:**
```bash
pip install mkdocs-glightbox
```

Update `mkdocs.yml`:
```yaml
plugins:
  - glightbox:
      background: none
      width: 90%
      shadow: true
  - search
```

---

## Performance Optimization

### 1. Minify CSS/JS

**Install mkdocs-minify-plugin:**

```bash
pip install mkdocs-minify-plugin
```

**Update mkdocs.yml:**

```yaml
plugins:
  - search
  - glightbox
  - minify:
      minify_html: true
      minify_js: true
      minify_css: true
      htmlmin_opts:
        remove_comments: true
```

### 2. Optimize Images

```bash
# Install imagemin-cli
npm install -g imagemin-cli

# Optimize all images in docs/
imagemin docs/**/*.{jpg,png} --out-dir=docs/optimized/
```

**Or use online tools:**
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)

### 3. Enable Caching

**Add cache headers** (GitHub Pages does this automatically for static files).

For custom hosting, add `.htaccess`:

```apache
# Cache CSS/JS for 1 year
<FilesMatch "\.(css|js|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

# Cache images for 1 month
<FilesMatch "\.(jpg|jpeg|png|gif|svg)$">
  Header set Cache-Control "max-age=2592000, public"
</FilesMatch>
```

### 4. Lazy Load Images

Add `loading="lazy"` to images:

```html
<img src="robot.png" alt="Robot" loading="lazy">
```

### 5. Preconnect to External Fonts

In `overrides/main.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## Maintenance & Updates

### Regular Tasks

#### Monthly
- Update dependencies: `pip install --upgrade mkdocs-material`
- Check for broken links: `mkdocs build --strict`
- Review Google Analytics (if enabled)

#### Quarterly
- Audit content accuracy
- Update screenshots
- Test all interactive components
- Review and update changelog

#### Yearly
- Major version updates (MkDocs, Material theme)
- Design refresh (if needed)
- Performance audit

### Updating MkDocs Material

```bash
# Check current version
pip show mkdocs-material

# Update to latest
pip install --upgrade mkdocs-material

# Or pin to specific version
pip install mkdocs-material==9.5.0
```

### Updating Components

```bash
cd docs/components
npm update @phosphor-icons/react
npm update framer-motion
```

### Backup Strategy

**1. Git History (built-in)**
- All content is version-controlled
- Revert any change: `git revert <commit>`

**2. Exported Static Backup**
```bash
# Build and archive
mkdocs build --clean
tar -czf ctrc-learning-backup-$(date +%F).tar.gz site/
```

**3. GitHub Repository Backup**
- Clone to external drive monthly
- Or use GitHub's export feature

---

## Deployment Checklist

Before deploying to production:

- [ ] Run `mkdocs build --strict` (no errors/warnings)
- [ ] Test all navigation links
- [ ] Test all CTAs and flip buttons
- [ ] Verify custom homepage loads
- [ ] Test search functionality
- [ ] Test on mobile (Chrome, Safari)
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Check image alt text for accessibility
- [ ] Verify all component demos work
- [ ] Test dark/light mode toggle
- [ ] Review page load speed (< 3 seconds)
- [ ] Verify custom domain (if using)
- [ ] Test HTTPS certificate
- [ ] Update CHANGELOG.md
- [ ] Tag release in Git: `git tag v1.0.0`

---

## Resources

### Official Documentation
- **MkDocs:** https://www.mkdocs.org
- **Material for MkDocs:** https://squidfunk.github.io/mkdocs-material/
- **GitHub Pages:** https://pages.github.com

### Tools
- **MkDocs Material Reference:** https://squidfunk.github.io/mkdocs-material/reference/
- **Markdown Guide:** https://www.markdownguide.org
- **Phosphor Icons:** https://phosphoricons.com

### Support
- **Issues:** [GitHub Issues](https://github.com/ctrc/CTRC-Learning/issues)
- **Discussions:** [GitHub Discussions](https://github.com/ctrc/CTRC-Learning/discussions)
- **Discord:** [CTRC Discord Server](#)

---

## Quick Reference

### Essential Commands

```bash
# Development
mkdocs serve              # Start dev server
mkdocs serve --dirty      # Incremental builds

# Build
mkdocs build              # Standard build
mkdocs build --clean      # Clean build
mkdocs build --strict     # Fail on warnings

# Deploy
mkdocs gh-deploy          # Build + deploy to GitHub Pages
mkdocs gh-deploy --clean  # Clean deploy

# Plugins
pip install mkdocs-material mkdocs-glightbox
npm install @phosphor-icons/react
```

### File Structure

```
CTRC-Learning/
├── docs/                 # Source content
│   ├── index.html        # Custom homepage
│   ├── foundation/       # Foundation program
│   ├── projects/         # BattleBots, etc.
│   ├── stylesheets/      # Custom CSS
│   └── components/       # React components
├── mkdocs.yml            # MkDocs configuration
├── requirements.txt      # Python dependencies
└── site/                 # Generated site (git-ignored)
```

---

**Deployment complete.** Your CTRC Learning site is now live and ready to inspire the next generation of robotics builders.
