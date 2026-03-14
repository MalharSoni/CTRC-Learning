# Pre-Deployment Testing Checklist

**Version:** 1.0
**Last Updated:** March 13, 2026
**Purpose:** Comprehensive checklist to verify curriculum quality before deployment

Use this checklist before deploying any changes to the live curriculum site.

---

## Quick Start

**For minor changes (typos, small fixes):**
- Run Sections 1, 2, and 6 (Content, Visual, Build)

**For major changes (new modules, restructuring):**
- Run all sections

**For image-heavy changes:**
- Run Sections 2, 3, and 6 (Visual, Accessibility, Build)

---

## Section 1: Content Checks

### Markdown Rendering
- [ ] All markdown files render correctly (`mkdocs serve`)
- [ ] No markdown syntax errors visible
- [ ] Code blocks display with syntax highlighting
- [ ] Tables render correctly
- [ ] Lists (ordered, unordered, checklists) format correctly

### Heading Hierarchy
- [ ] Each page has exactly one H1 (title)
- [ ] Headings follow proper hierarchy (H1 → H2 → H3, no skips)
- [ ] Heading text is clear and descriptive
- [ ] Section organization is logical

### Content Completeness
- [ ] All learning objectives are addressed in module content
- [ ] Prerequisites listed for each module
- [ ] Success criteria present and measurable
- [ ] Common mistakes section has 2-3 specific callouts
- [ ] "Next Step" section links to appropriate module

### Technical Accuracy
- [ ] All technical specifications verified against sources
- [ ] Hardware part numbers correct
- [ ] Software instructions match current UI
- [ ] Calculations are correct
- [ ] No contradictions between modules

### Safety Content
- [ ] All safety warnings present where needed
- [ ] Safety warnings include "why" explanations
- [ ] Weapon safety procedures complete
- [ ] Battery safety information accurate
- [ ] Failsafe procedures correct

### Writing Quality
- [ ] Active voice used throughout
- [ ] Second person perspective ("you")
- [ ] Tone is encouraging but realistic
- [ ] No jargon without definitions
- [ ] No spelling errors (run spell check)
- [ ] Consistent terminology (robot not bot, chassis not frame)

---

## Section 2: Visual Checks

### Image Loading
- [ ] All images load correctly (no broken image icons)
- [ ] Images display at appropriate size
- [ ] Images are sharp and readable
- [ ] No distortion or aspect ratio issues

### Alt Text
- [ ] All images have alt text
- [ ] Alt text is descriptive (not just "image" or "diagram")
- [ ] Alt text length is appropriate (15-25 words)
- [ ] Alt text describes what's shown, not just names it

### Captions
- [ ] All images have captions (in italics)
- [ ] Captions explain what to observe or learn
- [ ] Captions don't just repeat alt text
- [ ] Attribution included in caption (if CC-licensed)

### Image Quality
- [ ] Images are properly sized (not too large)
- [ ] File sizes meet category limits (check VISUAL_STANDARDS.md)
- [ ] Images are well-lit and clearly visible
- [ ] Critical details are in focus
- [ ] Screenshots are readable (text, dimensions visible)

### Image Paths
- [ ] All image paths are relative (../images/...)
- [ ] Paths use forward slashes (/)
- [ ] Image file names match markdown references (case-sensitive)
- [ ] Images in correct subdirectories

### Attribution
- [ ] All CC-licensed images have attribution
- [ ] Attribution format is correct (author, license, link)
- [ ] Attribution documented in attribution.md
- [ ] Original CTRC content noted as such

---

## Section 3: Accessibility Checks

### Color Contrast
- [ ] Text on diagrams meets 4.5:1 contrast ratio (WCAG AA)
- [ ] UI elements meet 3:1 contrast ratio
- [ ] Tested with WebAIM Contrast Checker
- [ ] Color is not sole method of conveying information

### Text Alternatives
- [ ] All images have descriptive alt text
- [ ] Complex diagrams have text description in content
- [ ] Charts/graphs have data tables or text summaries
- [ ] Video/GIF content has text description

### Structure
- [ ] Headings used for structure (not just bold text)
- [ ] Lists used appropriately (not just line breaks)
- [ ] Tables have header rows
- [ ] Semantic HTML used where appropriate

### Keyboard Navigation
- [ ] All interactive elements accessible via keyboard
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] No keyboard traps

### Screen Reader Testing
- [ ] Content makes sense when read linearly
- [ ] Headings provide structure
- [ ] Links are descriptive (not just "click here")
- [ ] Image alt text provides context

### Zoom & Scaling
- [ ] Content readable at 200% zoom
- [ ] No horizontal scrolling at 200% zoom (except tables)
- [ ] Images scale appropriately
- [ ] Text doesn't overlap at larger sizes

---

## Section 4: Link Checks

### Internal Links
- [ ] All internal links resolve (no 404s)
- [ ] Section links jump to correct heading
- [ ] "Next Step" links go to correct module
- [ ] Cross-references between modules work
- [ ] Image links are correct

### Internal Link Format
- [ ] Links use relative paths (not absolute)
- [ ] Links include .md extension
- [ ] Section anchors are lowercase with hyphens
- [ ] No broken fragment identifiers (#section-name)

### External Links
- [ ] All external links work (not dead)
- [ ] External links use HTTPS when available
- [ ] Product links go to correct items
- [ ] Datasheet links are current
- [ ] Resource links are active

### Link Context
- [ ] Links have descriptive text (not "click here")
- [ ] Link purpose is clear from context
- [ ] External links noted as such (if applicable)

---

## Section 5: Mobile Checks

### Responsive Layout
- [ ] Content readable on small screens (320px width)
- [ ] Navigation works on mobile
- [ ] Sidebar collapses correctly
- [ ] No horizontal scrolling (except tables)

### Mobile Image Display
- [ ] Images scale to screen width
- [ ] Images maintain aspect ratio
- [ ] High-res images don't cause slowdown
- [ ] Image captions readable on mobile

### Mobile Typography
- [ ] Text is readable at default zoom
- [ ] Font sizes appropriate for mobile
- [ ] Line length comfortable (not too wide)
- [ ] Headings scale appropriately

### Mobile Tables
- [ ] Tables scroll horizontally if needed
- [ ] Table headers remain visible
- [ ] Cell content doesn't overflow
- [ ] Tables readable on small screens

### Mobile Navigation
- [ ] Hamburger menu works
- [ ] Navigation items accessible
- [ ] Breadcrumbs work
- [ ] Search function works on mobile

### Mobile Testing Devices
- [ ] Tested on iPhone (iOS Safari)
- [ ] Tested on Android (Chrome)
- [ ] Tested on tablet (iPad or Android)
- [ ] Tested in browser DevTools responsive mode

---

## Section 6: Build Checks

### Local Build
```bash
mkdocs build --strict
```
- [ ] Build completes without errors
- [ ] No warnings about missing pages
- [ ] No warnings about broken links
- [ ] site/ folder generated correctly

### Build Output
- [ ] All HTML files present in site/
- [ ] All images copied to site/images/
- [ ] CSS and JavaScript files present
- [ ] Search index generated

### Configuration
- [ ] mkdocs.yml syntax is valid
- [ ] Navigation structure is correct
- [ ] All paths in navigation exist
- [ ] Theme configuration correct

### Server Test
```bash
mkdocs serve
```
- [ ] Server starts without errors
- [ ] Site loads at localhost:8000
- [ ] Hot reload works (changes appear)
- [ ] No console errors in browser

---

## Section 7: Navigation Checks

### Sidebar Navigation
- [ ] All modules appear in navigation
- [ ] Navigation order is logical
- [ ] Navigation labels are clear
- [ ] Indentation reflects hierarchy
- [ ] No duplicate entries

### Breadcrumbs
- [ ] Breadcrumbs show correct path
- [ ] Breadcrumb links work
- [ ] Current page highlighted
- [ ] Breadcrumbs make sense

### Search Functionality
- [ ] Search box present and visible
- [ ] Search returns relevant results
- [ ] Can find modules by title
- [ ] Can find content by keyword
- [ ] Search results link correctly

### Previous/Next Links
- [ ] Previous/Next links present at bottom of page
- [ ] Links go to correct modules
- [ ] Order matches logical sequence
- [ ] Links work correctly

---

## Section 8: Student Experience Checks

### Learning Flow
- [ ] Modules follow logical progression
- [ ] Each module builds on previous
- [ ] Prerequisites clearly stated
- [ ] Transitions between modules smooth

### Clarity
- [ ] Learning objectives clear in each module
- [ ] Instructions are step-by-step where needed
- [ ] Complex concepts broken down
- [ ] Examples provided for difficult topics

### Engagement
- [ ] Content is encouraging
- [ ] Real-world examples used
- [ ] Student action items clear
- [ ] Success criteria motivating

### Support
- [ ] Common mistakes addressed
- [ ] Troubleshooting guidance provided
- [ ] Safety warnings clear and visible
- [ ] Resources linked appropriately

### Completeness
- [ ] All learning objectives met by content
- [ ] Success criteria align with objectives
- [ ] No gaps in instruction
- [ ] No orphaned content (unlinked pages)

---

## Section 9: Performance Checks

### Page Load Time
- [ ] Homepage loads in under 3 seconds
- [ ] Module pages load in under 3 seconds
- [ ] Image-heavy pages load in under 5 seconds
- [ ] Tested on fast and slow connections

### Image Optimization
- [ ] All images compressed appropriately
- [ ] No images over 500KB (check VISUAL_STANDARDS.md)
- [ ] Images served at appropriate resolution
- [ ] Lazy loading working (if implemented)

### Asset Size
- [ ] Total site size reasonable
- [ ] CSS minified (if applicable)
- [ ] JavaScript minified (if applicable)
- [ ] No unnecessary files in build

### Search Performance
- [ ] Search index size reasonable
- [ ] Search results appear quickly
- [ ] No lag when typing in search box

---

## Section 10: Cross-Browser Checks

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)
- [ ] Firefox Mobile

### Browser Features
- [ ] Images load in all browsers
- [ ] CSS renders correctly
- [ ] JavaScript works (if used)
- [ ] Fonts load correctly
- [ ] No layout breaks

---

## Section 11: Security & Privacy Checks

### External Resources
- [ ] All external resources use HTTPS
- [ ] No mixed content warnings
- [ ] External links open safely
- [ ] No tracking scripts (unless approved)

### Student Privacy
- [ ] No personal student information exposed
- [ ] No identifying photos without permission
- [ ] Attribution doesn't expose private data

### Licensing
- [ ] All CC-licensed content properly attributed
- [ ] No copyright violations
- [ ] Original work clearly marked
- [ ] License compliance verified

---

## Section 12: Post-Deployment Checks

Run these checks after deploying to live site:

### Live Site Verification
- [ ] Site deployed successfully (GitHub Pages built)
- [ ] Live URL loads correctly
- [ ] Changes visible on live site (cache cleared)
- [ ] No deployment errors in GitHub Actions

### Spot Checks
- [ ] Homepage loads correctly
- [ ] Random module loads correctly
- [ ] Random image loads correctly
- [ ] Search works on live site
- [ ] Navigation works on live site

### Cross-Device Verification
- [ ] Tested on actual iOS device
- [ ] Tested on actual Android device
- [ ] Tested on desktop computer
- [ ] Tested on tablet

### Cache Issues
- [ ] Hard refresh loads latest version (Ctrl+Shift+R)
- [ ] Incognito mode shows correct version
- [ ] Mobile browser shows latest version

---

## Testing Log Template

Use this template to document testing:

```markdown
## Testing Log

**Tested by:** [Your Name]
**Date:** [YYYY-MM-DD]
**Branch/Commit:** [branch name or commit hash]
**Type of change:** [Minor fix / Major update / New module / etc.]

### Sections Tested
- [x] Content Checks
- [x] Visual Checks
- [x] Build Checks
- [ ] Mobile Checks (skipped - minor text change)
- [x] Navigation Checks

### Issues Found
1. **Issue:** Broken link in module 3
   **Fixed:** Yes, updated link to correct URL
   **Commit:** abc123

2. **Issue:** Image missing alt text
   **Fixed:** Yes, added descriptive alt text
   **Commit:** def456

### Deployment Status
- [x] Local testing complete
- [x] All issues resolved
- [x] Deployed to live site
- [x] Live site verified

### Post-Deployment Verification
- [x] Homepage loads
- [x] Changes visible
- [x] No console errors
- [x] Mobile view tested

### Notes
Everything tested successfully. Minor link fix in module 3.
No issues on live site.
```

---

## Quick Reference Commands

### Build & Test
```bash
# Strict build (catches errors)
mkdocs build --strict

# Local server
mkdocs serve

# Check for large images
find docs/projects/battlebots/images -type f -size +500k

# Check for missing alt text (manual review needed)
grep -n "!\[\](" docs/projects/battlebots/*.md

# Check for broken internal links (basic)
grep -r "](.*\.md" docs/projects/battlebots/*.md | grep -v "^\s*#"
```

### External Tools
```bash
# Install link checker (if needed)
npm install -g broken-link-checker

# Run link checker
blc http://localhost:8000 -ro --exclude "linkedin.com|facebook.com"

# Spell check (if aspell installed)
aspell check docs/projects/battlebots/module-name.md
```

### Browser Testing
- Chrome DevTools responsive mode: Ctrl+Shift+M
- Chrome DevTools accessibility audit: Lighthouse tab
- Firefox responsive design mode: Ctrl+Shift+M
- WebAIM WAVE: https://wave.webaim.org/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

---

## Automated Testing (Future Implementation)

Consider implementing these automated tests:

**Continuous Integration (CI):**
```yaml
# .github/workflows/test.yml
name: Test Curriculum

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.x
      - name: Install dependencies
        run: pip install mkdocs mkdocs-material
      - name: Build site
        run: mkdocs build --strict
      - name: Check for missing alt text
        run: |
          if grep -r "!\[\](" docs/projects/battlebots/*.md; then
            echo "Error: Found images without alt text"
            exit 1
          fi
```

**Link Checking:**
- Run broken-link-checker in CI
- Scheduled weekly link checks
- Report dead links automatically

**Image Optimization:**
- Check file sizes in CI
- Warn if images exceed limits
- Suggest optimization commands

---

## Troubleshooting Common Issues

### Build Fails
**Error:** `Config value: 'nav'`
**Fix:** Check mkdocs.yml for YAML syntax errors (indentation, colons)

**Error:** `File not found`
**Fix:** Verify file path in navigation matches actual file location

### Images Don't Load
**Issue:** Broken image icon appears
**Fix:** Check path is relative (../images/...), file exists, case matches

### Links Don't Work
**Issue:** 404 error when clicking link
**Fix:** Verify .md extension included, path is relative, file exists

### Mobile Layout Broken
**Issue:** Horizontal scrolling on mobile
**Fix:** Check for wide tables, code blocks, or images without max-width

### Search Not Working
**Issue:** Search returns no results
**Fix:** Rebuild site (stop and restart mkdocs serve)

---

## Summary Checklist

Quick pre-deployment verification:

**Critical (Always):**
- [ ] Build succeeds with `mkdocs build --strict`
- [ ] All new content tested in `mkdocs serve`
- [ ] All links verified (internal and external)
- [ ] All images load correctly
- [ ] All images have alt text
- [ ] No spelling errors
- [ ] Mobile view tested

**Important (Major Changes):**
- [ ] Cross-browser testing complete
- [ ] Accessibility checks complete
- [ ] Performance acceptable
- [ ] Post-deployment verification done

**Nice to Have (When Time Allows):**
- [ ] Screen reader tested
- [ ] Link checker run
- [ ] Multiple device testing
- [ ] User acceptance testing

---

**Testing Checklist Version:** 1.0
**Last Updated:** March 13, 2026
**Next Review:** Before 2027 competition season

This checklist is a living document. Suggest improvements by opening an issue or submitting a pull request.
