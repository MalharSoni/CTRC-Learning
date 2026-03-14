# BattleBots Curriculum Quality Standards Documentation

This directory contains comprehensive quality standards and maintenance documentation for the BattleBots curriculum.

---

## Documentation Overview

### Core Standards Documents

| Document | Purpose | Audience |
|----------|---------|----------|
| **QUALITY_STANDARDS.md** | High-level quality requirements | All contributors |
| **STYLE_GUIDE.md** | Writing style, voice, tone, terminology | Content creators |
| **VISUAL_STANDARDS.md** | Image specifications and accessibility | Visual content creators |

### Workflow Documents

| Document | Purpose | Audience |
|----------|---------|----------|
| **MAINTENANCE.md** | How to maintain and update curriculum | Maintainers |
| **CONTRIBUTING.md** | How to contribute to curriculum | Community contributors |
| **TESTING_CHECKLIST.md** | Pre-deployment verification | QA, maintainers |

### Reports

| Document | Purpose |
|----------|---------|
| **AGENT_5_REPORT.md** | Complete summary of standards framework creation |

---

## Quick Start

### For Content Writers
1. Read **STYLE_GUIDE.md** for writing standards
2. Use module template from STYLE_GUIDE.md
3. Follow terminology standards
4. Run spell check before submitting

### For Visual Contributors
1. Read **VISUAL_STANDARDS.md** for image requirements
2. Optimize images before adding
3. Provide descriptive alt text
4. Add attribution if CC-licensed

### For Maintainers
1. Read **MAINTENANCE.md** for workflows
2. Use **TESTING_CHECKLIST.md** before deployment
3. Follow version control best practices
4. Run annual review process

### For Contributors
1. Read **CONTRIBUTING.md** for contribution process
2. Follow standards documents
3. Test locally before submitting PR
4. Respond to feedback

---

## Document Hierarchy

```
QUALITY_STANDARDS.md (What we require)
├── STYLE_GUIDE.md (How to write)
├── VISUAL_STANDARDS.md (How to create visuals)
├── MAINTENANCE.md (How to maintain)
├── CONTRIBUTING.md (How to contribute)
└── TESTING_CHECKLIST.md (How to verify quality)
```

---

## Key Standards Summary

### Writing Standards
- Voice: Enthusiastic educator, experienced builder
- Tone: Encouraging but realistic
- Perspective: Second person ("you")
- Active voice preferred
- Consistent terminology (see STYLE_GUIDE.md)

### Visual Standards
- JPG for photos (under 300KB)
- PNG for screenshots (under 500KB)
- SVG for diagrams (vector preferred)
- Descriptive alt text (15-25 words)
- Helpful captions explaining what to learn
- Attribution for CC-licensed content

### Module Structure
Every module must have:
- Prerequisites
- Learning objectives (3-5)
- Main content sections
- Common mistakes (2-3)
- Success criteria
- Next step

### Testing Requirements
Before deployment:
- Build succeeds (`mkdocs build --strict`)
- All links work
- All images load with alt text
- Mobile view tested
- No spelling errors

---

## Tools & Commands

### Build & Test
```bash
# Local development
mkdocs serve

# Strict build
mkdocs build --strict
```

### Quality Checks
```bash
# Check for missing alt text
grep -r "!\[\](" docs/projects/battlebots/*.md

# Check for large images
find docs/projects/battlebots/images -type f -size +500k

# Spell check (if installed)
aspell check filename.md
```

### Image Optimization
```bash
# Resize and compress JPG
mogrify -resize 1200x -quality 85 image.jpg

# Check file size
ls -lh image.jpg
```

---

## Contribution Workflow

1. **Fork** repository
2. **Create branch** (`feat-description` or `fix-description`)
3. **Make changes** following standards
4. **Test locally** (`mkdocs serve`)
5. **Commit** with descriptive message
6. **Submit PR** with complete description
7. **Respond** to feedback
8. **Merge** after approval

---

## Quality Checklist (Quick)

Before submitting:
- [ ] Follows STYLE_GUIDE.md
- [ ] Follows VISUAL_STANDARDS.md (if images)
- [ ] All images have alt text
- [ ] Tested locally
- [ ] All links verified
- [ ] No spelling errors
- [ ] Mobile view tested

---

## Support

**Questions about standards?**
- Reference the specific guide
- Open a discussion on GitHub
- Ask in PR comments

**Found an error in standards?**
- Open an issue
- Suggest improvement
- Submit PR

**Need help contributing?**
- See CONTRIBUTING.md
- Open discussion with "help wanted" label
- Contact maintainers

---

## Version Information

**Standards Version:** 1.0
**Created:** March 13, 2026
**Next Review:** Before 2027 competition season

All standards documents are living documents and will evolve based on feedback and experience.

---

## File Sizes

- STYLE_GUIDE.md: ~19KB
- VISUAL_STANDARDS.md: ~20KB
- MAINTENANCE.md: ~26KB
- CONTRIBUTING.md: ~14KB
- TESTING_CHECKLIST.md: ~16KB
- AGENT_5_REPORT.md: ~22KB

**Total:** ~117KB of comprehensive quality documentation

---

**This standards framework ensures the BattleBots curriculum maintains professional quality, welcomes contributors, and can be sustained over multiple seasons.**
