# BattleBots Curriculum Maintenance Guide

**Version:** 1.0
**Last Updated:** March 13, 2026
**Purpose:** Guide for maintaining, updating, and extending the curriculum

---

## Table of Contents

1. [How to Add a New Module](#how-to-add-a-new-module)
2. [How to Update Existing Content](#how-to-update-existing-content)
3. [How to Add Visual Assets](#how-to-add-visual-assets)
4. [How to Handle Community Contributions](#how-to-handle-community-contributions)
5. [Troubleshooting Guide](#troubleshooting-guide)
6. [Version Control Best Practices](#version-control-best-practices)
7. [Annual Review Process](#annual-review-process)
8. [Testing Procedures](#testing-procedures)

---

## How to Add a New Module

### Prerequisites

Before creating a new module:
- [ ] Identify where it fits in the curriculum sequence
- [ ] Determine prerequisites (what students must complete first)
- [ ] Define learning objectives (3-5 specific outcomes)
- [ ] Gather necessary visual assets (photos, diagrams, screenshots)
- [ ] Verify technical accuracy of content

### Step 1: Create the Module File

**File location:** `/docs/projects/battlebots/`

**Naming convention:** `descriptive-topic-name.md`
- All lowercase
- Hyphens for spaces
- Descriptive and concise
- No numbers (unless part of name)

**Examples:**
- `weapon-design.md` ✅
- `cad-your-bot.md` ✅
- `Module-5.md` ❌ (not descriptive)
- `CAD_Tutorial.md` ❌ (capitals and underscore)

### Step 2: Use the Module Template

Copy this template for consistency:

```markdown
# Module [X]: [Title]

[Opening paragraph: What this module covers, why it matters, what students will accomplish]

!!! info "Student Module"
    This module is completed by you, the student.

---

## Before You Start

**Prerequisites:**
- [ ] Completed [Module Name](link.md)
- [ ] Have [tool/material] available

**What You'll Learn:**
- [Learning objective 1]
- [Learning objective 2]
- [Learning objective 3]

**Time Required:** ~X hours

**Materials Needed:**
- [Item 1]
- [Item 2]

---

## [Main Section 1]

[Content]

### [Subsection 1.1]

[Detailed content]

!!! tip "Pro Tip"
    [Helpful advice from experience]

---

## [Main Section 2]

[Content]

!!! warning "Common Mistake"
    [What students often do wrong and how to avoid it]

---

## Common Mistakes

!!! warning "Mistake 1: [Specific Error]"
    [What happens, why it happens, how to fix it]

!!! warning "Mistake 2: [Specific Error]"
    [What happens, why it happens, how to fix it]

---

## Success Criteria

Before moving to the next module, verify:

- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
- [ ] [Measurable outcome 3]

---

## Next Step

[Brief paragraph about what comes next and why it builds on this module]

Continue to [Next Module Name](next-module.md).
```

### Step 3: Add to Navigation

**File:** `/mkdocs.yml` (project root)

**Location:** Find the `nav:` section under BattleBots

```yaml
nav:
  - Home: index.md
  - Projects:
    - BattleBots:
      - Overview: projects/battlebots/index.md
      - Module 1 - Rules: projects/battlebots/rules-and-overview.md
      - Module 2 - Archetypes: projects/battlebots/robot-archetypes.md
      # ... existing modules ...
      - Module X - New Topic: projects/battlebots/new-module-name.md  # ADD HERE
      - Module Y - Next Topic: projects/battlebots/next-module.md
```

**Rules:**
- Insert in logical sequence order
- Use consistent naming: "Module X - Title"
- Verify path is correct (relative to `/docs/`)
- Maintain indentation (2 spaces per level)

### Step 4: Link from Previous Module

Update the "Next Step" section in the previous module:

```markdown
## Next Step

[Brief transition paragraph]

Continue to [Module X: New Topic](new-module-name.md).
```

### Step 5: Quality Check

Before committing, verify:

**Structure:**
- [ ] Module follows template structure
- [ ] All required sections present
- [ ] Heading hierarchy is logical (H1 → H2 → H3)

**Content:**
- [ ] Prerequisites clearly stated
- [ ] Learning objectives are specific and measurable
- [ ] Success criteria are objective and testable
- [ ] 2-3 "Common Mistakes" callouts included
- [ ] Technical accuracy verified

**Visuals:**
- [ ] All images have descriptive alt text
- [ ] All images have helpful captions
- [ ] Image paths are correct (test in local build)
- [ ] Images are optimized (file size under limits)

**Links:**
- [ ] Internal links use relative paths
- [ ] All links tested and work
- [ ] "Next Step" links to correct module
- [ ] Module is linked from previous module

**Style:**
- [ ] Follows STYLE_GUIDE.md (voice, tone, terminology)
- [ ] Follows VISUAL_STANDARDS.md (images)
- [ ] No spelling errors
- [ ] Consistent formatting

### Step 6: Test Locally

```bash
# Navigate to project root
cd /Users/malharsoni/CTRC-Learning

# Start local server
mkdocs serve

# Open browser to http://localhost:8000
# Navigate to your new module
# Verify:
# - Module appears in navigation
# - All images load
# - All links work
# - Formatting looks correct
# - Mobile view works
```

### Step 7: Commit Changes

```bash
# Stage the new module file
git add docs/projects/battlebots/new-module-name.md

# Stage navigation update
git add mkdocs.yml

# Stage any images (if added)
git add docs/projects/battlebots/images/**/*

# Commit with descriptive message
git commit -m "feat: add Module X on [topic]

Added comprehensive module covering:
- [Key point 1]
- [Key point 2]
- [Key point 3]

Includes [N] images with attribution.
Tested locally, all links working.
"

# Push to repository
git push origin main
```

---

## How to Update Existing Content

### Types of Updates

**Minor updates** (typos, clarification, small fixes):
- Fix directly in main branch
- Quick commit

**Major updates** (restructuring, significant content changes):
- Create feature branch
- Test thoroughly
- Review before merging

### Minor Update Process

1. **Identify the issue:**
   - Typo or spelling error
   - Broken link
   - Outdated specification
   - Unclear wording

2. **Make the change:**
   - Edit the file directly
   - Verify change in context
   - Check surrounding content for related issues

3. **Test the change:**
   ```bash
   mkdocs serve
   # Verify change appears correctly
   ```

4. **Commit:**
   ```bash
   git add [file]
   git commit -m "fix: correct [specific issue] in [module name]"
   git push origin main
   ```

### Major Update Process

1. **Create feature branch:**
   ```bash
   git checkout -b update-module-name
   ```

2. **Make changes:**
   - Edit content files
   - Update images if needed
   - Update navigation if restructuring

3. **Test thoroughly:**
   ```bash
   mkdocs build --strict
   # Check for errors or warnings

   mkdocs serve
   # Manual testing of all changes
   ```

4. **Commit changes:**
   ```bash
   git add -A
   git commit -m "refactor: restructure [module name]

   - [Change 1]
   - [Change 2]
   - [Change 3]

   Tested locally, all links verified.
   "
   ```

5. **Merge to main:**
   ```bash
   git checkout main
   git merge update-module-name
   git push origin main
   ```

### Updating Technical Specifications

When hardware or software changes:

1. **Verify the change:**
   - Check manufacturer datasheets
   - Test hardware if possible
   - Verify software version

2. **Find all instances:**
   ```bash
   # Search for specification across all files
   grep -r "300 RPM" docs/projects/battlebots/

   # Search for product name
   grep -r "N20" docs/projects/battlebots/
   ```

3. **Update all instances:**
   - Make consistent changes across all files
   - Update images if specifications are shown
   - Update diagrams if calculations change

4. **Document the change:**
   ```bash
   git commit -m "fix: update N20 motor specification to 300 RPM

   Changed from 250 RPM to 300 RPM based on GA12-N20 datasheet.

   Updated files:
   - drivetrain-design.md
   - index.md
   - cad-your-bot.md
   "
   ```

---

## How to Add Visual Assets

### Step 1: Prepare the Image

**Verify licensing:**
- CC-licensed (BY, BY-SA, BY-NC-SA)
- Public domain
- Original CTRC content
- Educational fair use (verify carefully)

**Optimize the image:**
```bash
# Resize to maximum dimensions
mogrify -resize 1200x image.jpg

# Compress (adjust quality as needed)
mogrify -quality 85 image.jpg

# Check file size
ls -lh image.jpg
```

**Verify quality:**
- Sharp focus on important details
- Good lighting (no harsh shadows)
- Readable text (if applicable)
- Appropriate cropping

### Step 2: Name and Place the Image

**Naming convention:**
```
category-descriptive-name.extension
```

**Directory structure:**
```
docs/projects/battlebots/images/
├── archetypes/      # Robot examples
├── assembly/        # Build steps
├── cad/             # CAD screenshots
├── components/      # Hardware photos
├── diagrams/        # Technical diagrams
├── printing/        # 3D printing
├── safety/          # Safety procedures
└── weapons/         # Weapon-specific
```

**Place the file:**
```bash
# Copy to appropriate directory
cp image.jpg docs/projects/battlebots/images/category/descriptive-name.jpg
```

### Step 3: Add Attribution (if required)

**Edit:** `docs/projects/battlebots/images/attribution.md`

```markdown
## images/category/descriptive-name.jpg

- **Source:** [Platform/website name]
- **Author:** [Creator name]
- **License:** [CC BY-SA 4.0, etc.]
- **Original URL:** [Full URL to original]
- **Changes:** [None / Cropped / Resized / Annotated]
- **Downloaded:** [YYYY-MM-DD]
```

### Step 4: Integrate into Module

**Add to markdown file:**
```markdown
![Descriptive alt text (15-25 words)](../images/category/descriptive-name.jpg)
*Caption explaining what to observe or learn. Attribution if CC-licensed.*
```

**Example:**
```markdown
![N20 motor showing D-shaft with flat side, metal gearbox, and two mounting holes](../images/components/motor-n20-shaft.jpg)
*The D-shaft has one flat side that prevents wheel slip. Align this flat with the wheel hub slot during assembly.*
```

**Example with attribution:**
```markdown
![Drum spinner robot with wide cylindrical weapon mounted horizontally](../images/archetypes/drum-spinner.jpg)
*Drum spinners provide wide attack area and frontal protection. Photo by AlexKorvin, CC BY-SA 4.0.*
```

### Step 5: Test Integration

```bash
# Start local server
mkdocs serve

# Open module in browser
# Verify:
# - Image loads correctly
# - Alt text appears on hover (browser dependent)
# - Caption renders in italic
# - Image scales on mobile view
# - No broken image icon
```

### Step 6: Commit

```bash
# Stage image and attribution
git add docs/projects/battlebots/images/category/image.jpg
git add docs/projects/battlebots/images/attribution.md
git add docs/projects/battlebots/module-name.md

# Commit
git commit -m "img: add [description] image to [module name]

Added: images/category/descriptive-name.jpg
Attribution: [Author], [License]
Integrated into: [module-name.md]
"

git push origin main
```

---

## How to Handle Community Contributions

### When Someone Submits a PR

1. **Review the content:**
   - Does it align with curriculum goals?
   - Is it technically accurate?
   - Does it follow STYLE_GUIDE.md?
   - Does it follow VISUAL_STANDARDS.md (if images)?

2. **Check quality standards:**
   - [ ] Spelling and grammar correct
   - [ ] Consistent terminology
   - [ ] Proper markdown formatting
   - [ ] Images optimized (if included)
   - [ ] Attribution present (if using third-party content)

3. **Test locally:**
   ```bash
   # Checkout the PR branch
   git fetch origin pull/[PR_NUMBER]/head:pr-[PR_NUMBER]
   git checkout pr-[PR_NUMBER]

   # Build and test
   mkdocs build --strict
   mkdocs serve

   # Manual review of changes
   ```

4. **Provide feedback:**
   - Be specific: "Change line 42 to use 'robot' instead of 'bot'"
   - Be encouraging: "Great contribution! Just a few small changes needed."
   - Reference standards: "Please follow STYLE_GUIDE.md section on terminology"
   - Offer help: "If you need help with X, let me know"

5. **Approve or request changes:**
   - If all standards met: Approve and merge
   - If minor issues: Request changes with specific feedback
   - If major issues: Discuss in PR comments before requesting changes

### PR Review Checklist

Use this checklist for all community contributions:

**Content Quality:**
- [ ] Technically accurate (verified against sources)
- [ ] Appropriate for target audience (students)
- [ ] Fits in curriculum sequence logically
- [ ] Adds value (not redundant with existing content)

**Style Compliance:**
- [ ] Follows voice and tone guidelines
- [ ] Uses consistent terminology
- [ ] Active voice, second person perspective
- [ ] No spelling or grammar errors

**Structure Compliance:**
- [ ] Uses module template (if new module)
- [ ] Heading hierarchy is logical
- [ ] Includes required sections (prerequisites, objectives, success criteria)
- [ ] Links to next step

**Visual Compliance (if images included):**
- [ ] Images meet category specifications
- [ ] File sizes under limits
- [ ] Descriptive alt text provided
- [ ] Captions explain what to learn
- [ ] Attribution complete (if required)
- [ ] Images in correct directory

**Technical Compliance:**
- [ ] All internal links work
- [ ] All external links work
- [ ] Code blocks have language tags
- [ ] Markdown formatting correct
- [ ] Builds without errors (`mkdocs build --strict`)

**Safety Compliance:**
- [ ] Safety warnings present where needed
- [ ] Safety information is accurate
- [ ] No contradictions with existing safety content

### Crediting Contributors

**In commit message:**
```bash
git commit -m "feat: add [feature] contributed by @username

[Description of contribution]

Co-authored-by: Contributor Name <email@example.com>
"
```

**In CONTRIBUTORS.md (if exists):**
```markdown
## Contributors

- **[Name]** - [Contribution description]
- **[Name]** - [Contribution description]
```

---

## Troubleshooting Guide

### MkDocs Build Errors

#### Error: `Config value: 'nav'`
**Cause:** Invalid YAML syntax in mkdocs.yml
**Fix:**
- Check indentation (must use spaces, not tabs)
- Verify colons have space after them
- Check for special characters in titles

```yaml
# Bad
nav:
  - Module 1:Rules  # Missing space after colon

# Good
nav:
  - Module 1: Rules  # Space after colon
```

#### Error: `Documentation file 'path/to/file.md' does not exist`
**Cause:** Navigation references file that doesn't exist
**Fix:**
- Check file path is correct (case-sensitive)
- Verify file exists in docs/ directory
- Check for typos in navigation entry

```bash
# Verify file exists
ls docs/projects/battlebots/module-name.md

# Check navigation path matches
# In mkdocs.yml: projects/battlebots/module-name.md
# File location: docs/projects/battlebots/module-name.md
```

#### Warning: `The following pages exist in the docs directory, but are not included in the "nav" configuration`
**Cause:** File exists but not referenced in navigation
**Fix:**
- Add file to mkdocs.yml navigation
- Or delete file if not needed
- Or move to different location

### Broken Images

#### Image Not Loading
**Check:**
1. File exists at specified path
2. Path uses forward slashes (`/`) not backslashes
3. Path is relative, not absolute
4. Image extension matches file extension (case-sensitive)
5. No special characters in filename

```bash
# Verify image exists
ls docs/projects/battlebots/images/category/image-name.jpg

# Check markdown reference
grep "image-name" docs/projects/battlebots/module-name.md
# Should show: ../images/category/image-name.jpg
```

#### Image Loads Locally But Not on GitHub Pages
**Cause:** Case sensitivity (Linux servers are case-sensitive)
**Fix:** Ensure filename case matches exactly

```bash
# Bad - file is "Image.jpg" but markdown says "image.jpg"
![Alt](../images/Image.jpg)  # Won't work on Linux

# Good - case matches exactly
![Alt](../images/Image.jpg)
```

### Navigation Issues

#### Module Not Appearing in Sidebar
**Check:**
1. Module is listed in mkdocs.yml navigation
2. Indentation is correct (2 spaces per level)
3. YAML syntax is valid
4. Server restarted after mkdocs.yml change

```bash
# Restart server to pick up navigation changes
# Ctrl+C to stop
mkdocs serve
```

#### Wrong Order in Navigation
**Fix:** Reorder entries in mkdocs.yml

```yaml
nav:
  - Module 1: projects/battlebots/first.md
  - Module 2: projects/battlebots/second.md  # Order matters
  - Module 3: projects/battlebots/third.md
```

### Link Issues

#### Internal Links Not Working
**Common causes:**
1. File extension missing (must include `.md`)
2. Path is absolute instead of relative
3. Typo in filename
4. Case sensitivity mismatch

**Good internal links:**
```markdown
[Next Module](next-module.md)
[Section](module-name.md#section-heading)
```

**Bad internal links:**
```markdown
[Next Module](next-module)  # Missing .md
[Next Module](/docs/projects/battlebots/next-module.md)  # Absolute path
```

#### Section Links Not Jumping to Heading
**Cause:** Heading anchor doesn't match link
**Fix:** Convert heading to lowercase, replace spaces with hyphens

```markdown
## Section Heading Name

[Link to above](#section-heading-name)
```

### Search Not Working

**If search doesn't find expected content:**
1. Rebuild search index: Stop and restart `mkdocs serve`
2. Clear browser cache
3. Verify content is in a page listed in navigation

### Mobile View Issues

**Content Too Wide:**
- Tables: Wrap in div with `overflow-x: auto`
- Images: Use responsive sizing
- Code blocks: Will scroll horizontally automatically

**Text Too Small:**
- Don't use font sizes below 14px
- Test on actual mobile device

---

## Version Control Best Practices

### Branching Strategy

**Main branch:**
- Production-ready content only
- Always deployable
- All tests pass
- Peer reviewed (if team)

**Feature branches:**
- Format: `feat-descriptive-name`
- One feature per branch
- Short-lived (merge quickly)
- Delete after merge

```bash
# Create feature branch
git checkout -b feat-add-advanced-weapons-module

# Work on feature
# ... make changes ...

# Commit changes
git add -A
git commit -m "feat: add advanced weapons module"

# Merge to main
git checkout main
git merge feat-add-advanced-weapons-module

# Delete feature branch
git branch -d feat-add-advanced-weapons-module
```

**Hotfix branches:**
- Format: `hotfix-issue-description`
- Critical fixes only
- Merge immediately
- Delete after merge

```bash
# Create hotfix branch
git checkout -b hotfix-broken-link-module-3

# Fix issue
git add [file]
git commit -m "fix: repair broken link in module 3"

# Merge to main
git checkout main
git merge hotfix-broken-link-module-3

# Delete hotfix branch
git branch -d hotfix-broken-link-module-3
```

### Commit Message Format

```
type: brief description (50 chars or less)

Longer explanation if needed (wrap at 72 characters).

- Specific change 1
- Specific change 2
- Specific change 3

Closes #123 (if fixing issue)
```

**Types:**
- `feat:` New module or major feature
- `fix:` Bug fix, correction, broken link repair
- `docs:` Documentation (README, CONTRIBUTING, etc.)
- `img:` Image additions/updates/optimization
- `style:` Formatting, markdown cleanup (no content change)
- `refactor:` Content reorganization (no new info)
- `test:` Testing updates
- `chore:` Maintenance tasks

**Examples:**

**Good:**
```
feat: add module 10 on battery safety

Added comprehensive battery safety module covering:
- LiPo charging procedures
- Storage guidelines
- Damage identification
- Fire safety procedures

Includes 4 safety diagrams with annotations.
```

**Good:**
```
fix: correct N20 motor specification in drivetrain module

Changed 250 RPM to 300 RPM based on GA12-N20 datasheet verification.
Updated drivetrain-design.md and index.md.
```

**Bad:**
```
updated stuff
```

**Bad:**
```
changes
```

### What to Commit

**Do commit:**
- Content files (.md)
- Configuration files (mkdocs.yml)
- Images (optimized)
- Documentation
- Attribution files

**Don't commit:**
- Build artifacts (site/ directory)
- Editor temp files (.swp, .DS_Store)
- Local config files
- Unoptimized large images
- Personal notes

**.gitignore should include:**
```
site/
.DS_Store
*.swp
*.tmp
.vscode/
.idea/
```

---

## Annual Review Process

### Before Each Competition Season

**1. Hardware Verification (August/September):**
- [ ] Verify all recommended hardware is still available
- [ ] Check prices haven't changed significantly
- [ ] Test links to product pages (update if dead)
- [ ] Verify specifications match current versions
- [ ] Update alternatives if products discontinued

**2. External Link Check (August):**
- [ ] Run link checker on all external links
- [ ] Replace dead links with archives or alternatives
- [ ] Update software version references
- [ ] Check rule references (competition rules may change)

**3. Software Updates (September):**
- [ ] Verify Onshape still works as described
- [ ] Check for UI changes (update screenshots if needed)
- [ ] Test 3D printing slicer settings
- [ ] Verify code examples still work

**4. Image Refresh (September):**
- [ ] Re-optimize images with newer tools
- [ ] Replace low-quality images with better alternatives
- [ ] Verify attribution links still work
- [ ] Check for higher-resolution versions

**5. Safety Content Review (Critical - August):**
- [ ] Review all safety warnings
- [ ] Check for rule changes in competition
- [ ] Verify failsafe procedures
- [ ] Update battery safety (if new chemistry/warnings)
- [ ] Consult with safety officer

**6. Student Feedback Integration (July):**
- [ ] Review feedback from previous season
- [ ] Identify confusion points
- [ ] Note successful sections
- [ ] Document common mistakes encountered
- [ ] Update content based on real experience

**7. Mobile Testing (September):**
- [ ] Test on iOS devices (current version)
- [ ] Test on Android devices (current version)
- [ ] Verify images scale correctly
- [ ] Check navigation works
- [ ] Test on tablet sizes

**8. Performance Optimization (September):**
- [ ] Check page load times
- [ ] Optimize large images
- [ ] Reduce total size if possible
- [ ] Test on slow connections

### Documentation Updates

**Update these files annually:**
- [ ] QUALITY_STANDARDS.md - Version number, next review date
- [ ] STYLE_GUIDE.md - Version number, examples if needed
- [ ] VISUAL_STANDARDS.md - Tools, specifications
- [ ] MAINTENANCE.md (this file) - Version, review date
- [ ] CONTRIBUTING.md - Process changes

---

## Testing Procedures

### Pre-Deployment Testing

Use TESTING_CHECKLIST.md for complete checklist.

**Quick smoke test:**
```bash
# Build with strict mode (catch errors)
mkdocs build --strict

# If successful, start server
mkdocs serve

# Manual checks:
# - Load homepage
# - Navigate to 3 random modules
# - Click 3 random images
# - Test search for common term
# - View on mobile (DevTools)
```

### Full Testing (Before Major Release)

**Content checks:**
- [ ] All markdown files render correctly
- [ ] Headings follow proper hierarchy
- [ ] All learning objectives clear
- [ ] All success criteria present
- [ ] All safety warnings accurate

**Link checks:**
```bash
# Install link checker (if not installed)
npm install -g broken-link-checker

# Run checker
blc http://localhost:8000 -ro --exclude "linkedin.com|facebook.com"
```

**Image checks:**
- [ ] All images load
- [ ] All images have alt text
- [ ] All images have captions
- [ ] Image file sizes under limits
- [ ] Attribution present for CC-licensed

**Accessibility checks:**
- [ ] Color contrast meets WCAG AA
- [ ] Alt text is descriptive
- [ ] Content readable at 200% zoom
- [ ] Navigation works with keyboard only

**Mobile checks:**
- [ ] Readable on iPhone (test actual device)
- [ ] Readable on Android (test actual device)
- [ ] Navigation works
- [ ] Images scale correctly
- [ ] Tables scroll horizontally if needed

**Build checks:**
- [ ] `mkdocs build --strict` completes without errors
- [ ] No warnings about missing pages
- [ ] site/ folder generated correctly
- [ ] All assets copied to site/

### Automated Testing (Future)

**Potential automations:**
- Link checking (broken-link-checker)
- Spell checking (aspell, mdspell)
- Markdown linting (markdownlint)
- Image optimization verification
- Alt text presence check

**Example automation (to implement):**
```bash
#!/bin/bash
# test-curriculum.sh

echo "Running curriculum tests..."

# Check for broken internal links
echo "Checking links..."
mkdocs build --strict || exit 1

# Check for missing alt text
echo "Checking alt text..."
if grep -r "!\[\](" docs/projects/battlebots/*.md; then
  echo "ERROR: Found images without alt text"
  exit 1
fi

# Check for large images
echo "Checking image sizes..."
find docs/projects/battlebots/images -type f -size +500k -name "*.jpg" -o -size +500k -name "*.png"

echo "All tests passed!"
```

---

## Quick Reference

### Common Tasks

**Add new module:**
1. Create file in `/docs/projects/battlebots/`
2. Follow module template
3. Add to `mkdocs.yml` navigation
4. Link from previous module
5. Test locally
6. Commit

**Fix typo:**
1. Edit file
2. Test with `mkdocs serve`
3. Commit: `git commit -m "fix: correct typo in [module]"`

**Add image:**
1. Optimize image
2. Name correctly: `category-description.jpg`
3. Place in `/docs/projects/battlebots/images/category/`
4. Add attribution (if needed)
5. Integrate with alt text and caption
6. Test locally
7. Commit

**Update specification:**
1. Find all instances: `grep -r "old spec" docs/`
2. Update all files
3. Update images if needed
4. Test locally
5. Commit with detailed message

### Support

**Questions about maintenance:**
- Open a discussion on GitHub
- Contact curriculum lead
- Reference this guide

**Found a bug:**
- Open an issue with details
- Include module name and section
- Describe expected vs. actual behavior

**Want to contribute:**
- See CONTRIBUTING.md
- Follow STYLE_GUIDE.md
- Submit pull request

---

**Maintenance Guide Version:** 1.0
**Last Updated:** March 13, 2026
**Next Review:** Before 2027 competition season

This guide is a living document. Suggest improvements by opening an issue or submitting a pull request.
