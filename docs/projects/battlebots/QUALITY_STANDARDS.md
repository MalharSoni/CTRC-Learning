# BattleBots Curriculum Quality Standards

**Version:** 2.0
**Last Updated:** March 12, 2026
**Purpose:** Define quality requirements for all curriculum content, visuals, and documentation

---

## Content Standards

### Writing Style

**Voice & Tone:**
- Active voice preferred ("design your chassis" not "the chassis should be designed")
- Second person ("you") for student-facing content
- Professional but approachable tone
- No condescension - respect student intelligence

**Sentence Structure:**
- Clear, concise sentences (15-20 words average)
- One idea per sentence
- Break complex concepts into steps
- Use transitions between sections

**Technical Accuracy:**
- All specifications verified against manufacturer datasheets
- Physics equations checked against reliable sources
- Safety procedures align with combat robotics standards
- No outdated information (check annually)

**Examples:**

✅ **Good:**
> "Position your N20 motors so the wheels are at the chassis edge. This maximizes your wheelbase and improves stability."

❌ **Bad:**
> "The motors should be positioned in such a way that the wheelbase is maximized, which has the effect of improving stability."

---

### Module Structure Requirements

Every module MUST have these sections in order:

1. **Title** (H1)
2. **Role Marker** (Student Module or Teacher Module admonition)
3. **Introduction** (1-2 paragraphs: what this module covers)
4. **Learning Objectives** (3-5 bullet points)
5. **Prerequisites** (what must be completed first)
6. **Main Content** (organized with H2/H3 headings)
7. **Common Mistakes** (2-3 callouts minimum)
8. **Success Criteria** (checklist of completion indicators)
9. **Next Step** (link to next module)

**Optional Sections:**
- Estimated time
- Tools/materials needed
- Reference resources
- Glossary of terms

**Example Structure:**
```markdown
# Module Title

!!! info "Student Module"
    This module is completed by you.

## What You'll Learn
- [ ] Objective 1
- [ ] Objective 2

## Before You Start
You must have:
- [x] Completed Module X
- [x] Tool/material Y

[Main content sections...]

!!! warning "Common Mistake: Specific Error"
    [Description and fix]

## How You Know You're Done
✅ You can demonstrate:
- [Outcome]

## Next Step
Continue to [Module Name](link.md).
```

---

### Safety Content Requirements

**Every safety rule must include:**
1. The rule (what to do/not do)
2. Why it exists (consequence of not following)
3. How to follow it (specific procedure)

**Safety Admonition Hierarchy:**

**!!! danger** - Immediate physical hazards
- Spinning weapons
- LiPo fire risk
- High voltage

**!!! warning** - Common mistakes that could lead to injury
- Reversed polarity
- Over-tightening
- Unbalanced weapons

**!!! tip** - Safety best practices
- Taking photos before assembly
- Testing failsafe
- Wearing safety glasses

**Example:**
```markdown
!!! danger "NEVER Power On Spinning Weapon Outside Arena"
    A 500g weapon spinning at 10,000 RPM can cause serious injury - lacerations,
    broken bones, or eye damage. Even "just testing for a second" has resulted
    in injuries.

    **Always:** Place robot in sealed arena before removing weapon lock.
    **Never:** Power on weapon to "check if it works" on your desk.
```

---

### Cross-Referencing Standards

**Internal Links:**
- Use relative paths: `[Text](module-name.md)`
- Link to specific sections: `[Text](module-name.md#section-heading)`
- Always provide context for links: "See [Weapon Design](weapon-design.md) for physics calculations"

**External Links:**
- Open in new tab if possible (platform dependent)
- Indicate external link: "(external resource)"
- Verify links work before committing
- Check annually for link rot

**Concept Reinforcement:**
When introducing complex concepts:
1. Define it clearly (with example)
2. Reference where it's used later
3. Reinforce in later modules

Example:
> In Weapon Design: "Center of mass is the balance point of your weapon."
> In CAD: "Check your weapon's center of mass using Onshape mass properties."
> In Assembly: "Balance your physical weapon to verify center of mass is correct."

---

## Visual Standards

### Image Categories & Requirements

#### 1. Reference Photos

**Purpose:** Show real hardware, robots, examples

**Requirements:**
- Format: JPG
- Resolution: 800-1200px wide
- File size: <200 KB
- Quality: 85% compression
- Lighting: Natural or soft studio
- Background: Clean, uncluttered
- Subject: Sharp focus

**Naming:** `category-descriptive-name.jpg`
Example: `motor-n20-shaft-detail.jpg`

---

#### 2. Process Photos

**Purpose:** Demonstrate assembly steps, techniques

**Requirements:**
- Format: JPG
- Resolution: 800-1200px wide
- File size: <250 KB
- Lighting: Consistent across series
- Hands visible performing action
- Critical details in focus

**Series Consistency:**
- Same lighting setup for all photos in sequence
- Same angle/perspective where possible
- Numbered if showing sequence

**Naming:** `assembly-action-description.jpg`
Example: `assembly-motor-press-fit.jpg`

---

#### 3. Technical Diagrams

**Purpose:** Explain physics, forces, concepts

**Requirements:**
- Format: SVG (preferred) or PNG at 2x resolution
- Colors: Maximum 4 colors per diagram
- Line weight: 2-3px for main elements
- Text: 14pt minimum, sans-serif
- Labels: Clear, with leader lines
- Export: Crisp edges, no artifacts

**Color Palette:**
- Primary (instructional): #2563EB (blue)
- Success/correct: #10B981 (green)
- Warning/caution: #F59E0B (amber)
- Danger/incorrect: #EF4444 (red)
- Neutral/reference: #6B7280 (gray)
- Force arrows: #3B82F6 (blue)

**Layout Rules:**
- Flow top-to-bottom or left-to-right
- Arrows indicate direction/force
- Dimensions in gray
- Highlight critical elements in red/orange

**Naming:** `diagram-concept-description.svg`
Example: `diagram-weapon-bite-calculation.svg`

---

#### 4. CAD Screenshots

**Purpose:** Guide students through Onshape workflow

**Requirements:**
- Format: PNG
- Resolution: 1400-1600px wide
- File size: <400 KB
- Onshape UI visible (students can replicate)
- Feature tree expanded
- Relevant panels open
- Crop unnecessary UI chrome

**Annotation Standards:**
- Red arrows: Point to specific feature (3px stroke)
- Red boxes: Highlight UI element (3px stroke, no fill)
- Text labels: White text with dark outline

**Naming:** `cad-step-description.png`
Example: `cad-chassis-sketch-pockets.png`

---

#### 5. Flowcharts / Sequences

**Purpose:** Show procedures, decisions, workflows

**Requirements:**
- Format: SVG (Mermaid) or PNG
- Node style: Rounded rectangles
- Text: 12-14pt, readable
- Arrow style: Single direction, labeled
- Layout: Top-to-bottom flow

**Naming:** `flowchart-procedure-name.svg`
Example: `flowchart-power-on-sequence.svg`

---

### Directory Structure

```
images/
  archetypes/       # Robot type examples (5 photos)
  assembly/         # Build process photos (8 photos)
  cad/              # Onshape screenshots (5-6 screenshots)
  motor/            # Hardware photos (N20, etc.)
  printing/         # 3D printing orientation diagrams
  safety/           # Safety procedure photos
  weapon/           # Weapon design photos and diagrams
```

**Rules:**
- Never put images in root `/images/`
- Create new subdirectory if needed
- Keep subdirectories focused (one topic)

---

### File Naming Standards

**Format:** `category-descriptive-name.extension`

**Rules:**
- All lowercase
- Hyphens only (no underscores or spaces)
- Descriptive (action + subject)
- No timestamps or version numbers
- Extension indicates file type

**Examples:**

✅ **Good:**
- `motor-n20-shaft-detail.jpg`
- `assembly-frame-build.jpg`
- `diagram-bite-calculation.svg`
- `cad-mass-properties-weapon.png`

❌ **Bad:**
- `IMG_1234.jpg` (not descriptive)
- `photo_march_12.jpg` (underscores, timestamp)
- `OnshapeScreenshot.png` (capitals)
- `weapon.jpg` (too generic)

---

### Alt Text Standards

**Purpose:** Accessibility for screen readers, SEO, fallback if image fails to load

**Requirements:**
- 15-25 words optimal
- Describe action, not just objects
- Include technical details relevant to learning
- No redundancy with caption

**Format:**
```markdown
![Descriptive alt text here](path/to/image.jpg)
```

**Formula:**
```
[Action/process] showing [subject] with [critical details visible]
```

**Examples:**

✅ **Good:**
> `![N20 motor being press-fit into 3D printed chassis pocket, showing D-shaft alignment with wheel hub slot](images/assembly/motor-installation.jpg)`

❌ **Too Generic:**
> `![Motor installation](images/assembly/motor-installation.jpg)`

❌ **Too Long:**
> `![Student using a file to shape the motor mount pocket in the 3D printed chassis so that the N20 300RPM brushed DC motor with integrated gearbox can be press-fit securely](images/assembly/motor-installation.jpg)`

---

### Caption Standards

**Purpose:** Explain what to learn or observe from the image

**Format:**
```markdown
![Alt text](image.jpg)
*Caption text here*
```

**Guidelines:**
- 1-2 sentences
- Explain what to observe
- Point out critical details
- Add attribution if CC-licensed

**Examples:**

✅ **Good:**
```markdown
![Print orientation comparison showing horizontal holes vs vertical holes in 3D printed part under stress](images/printing/hole-orientation-comparison.jpg)
*Horizontal holes (red) concentrate stress at layer lines and fail easily. Vertical holes (green) distribute forces across solid layers and are much stronger.*
```

✅ **With Attribution:**
```markdown
![Drum spinner beetleweight robot showing wide cylindrical weapon with teeth](images/archetypes/drum-spinner.jpg)
*Drum spinner demonstrates wide attack area and frontal armor. Photo by AlexKorvin, CC BY-SA 4.0.*
```

---

### Accessibility Requirements

**WCAG AA Compliance:**

**Color Contrast:**
- Text on diagrams: 4.5:1 minimum contrast ratio
- UI elements: 3:1 minimum contrast ratio
- Test with WebAIM Contrast Checker

**Information Encoding:**
- Never use color alone to convey information
- Use shapes, patterns, labels in addition to color
- Example: "Red X (incorrect)" vs "Green checkmark (correct)" - don't just use red/green

**Alternatives:**
- All images must have alt text
- Complex diagrams should have text description in content
- Video/GIF content must have text description of what happens

---

## Technical Standards

### Markdown Formatting

**Headings:**
- Use ATX-style headings (`#` syntax, not underlines)
- Don't skip levels (H1 → H2 → H3, never H1 → H3)
- One H1 per file (the title)
- Capitalize first word and proper nouns only

**Lists:**
- Unordered: Use `-` (not `*` or `+`)
- Ordered: Use `1.` (markdown auto-numbers)
- Indent 2 spaces for sub-items
- Blank line before and after list

**Tables:**
- Use markdown tables (not HTML)
- Align pipes for source readability
- Include header row
- Keep under 5 columns for mobile
- Use table wrapper for horizontal scroll if needed

**Code Blocks:**
- Always specify language for syntax highlighting
- Use triple backticks (```)
- Inline code uses single backticks
- Don't use code blocks for emphasis (use bold)

**Admonitions:**
```markdown
!!! type "Optional Title"
    Indented content here.
```

Types:
- `note` - Additional information
- `tip` - Helpful advice, best practices
- `warning` - Common mistakes, cautions
- `danger` - Safety critical, immediate hazards
- `info` - Context, background, explanations
- `example` - Examples, demonstrations

---

### Link Standards

**Internal Links:**
```markdown
[Link Text](module-name.md)
[Link to Section](module-name.md#section-heading)
```

**Rules:**
- Relative paths only (no absolute paths)
- Lowercase filenames
- Section headings: lowercase, hyphens for spaces
- Test all links before committing

**External Links:**
```markdown
[External Resource](https://example.com)
```

**Rules:**
- Use HTTPS when available
- Indicate external: "(external guide)"
- Verify link works
- Check annually for link rot
- Archive critical external content if possible

---

### Image Integration

**Standard Format:**
```markdown
![Descriptive alt text](images/category/filename.jpg)
*Caption explaining what to observe or learn.*
```

**With Attribution (CC-licensed):**
```markdown
![Descriptive alt text](images/category/filename.jpg)
*Caption. Photo by [Author Name], licensed under [License Type].*
```

**With Specific Sizing (if needed):**
```markdown
<figure markdown>
  ![Alt text](image.jpg){ width="100%" style="max-width: 800px" }
  <figcaption>Caption text</figcaption>
</figure>
```

---

## Attribution & Licensing Standards

### Required Attribution

**All CC-Licensed Images:**
- Author name
- License type (CC BY, CC BY-SA, CC BY-NC-SA, etc.)
- Link to original source
- Link to license text (optional but recommended)

**Fair Use Images:**
- Note "Used under educational fair use"
- Cite source

**Original CTRC Content:**
- Note "Original diagram by CTRC" or "Photo by CTRC"
- No additional attribution needed

---

### Attribution Locations

**1. Inline (in caption):**
```markdown
*Caption. Photo by [Author], licensed under CC BY-SA 4.0.*
```

**2. Module footer (for multiple CC images):**
```markdown
---

## Image Credits

**Specific attributions:**
- [Image name]: [Author] ([License])
- [Image name]: [Author] ([License])

See [complete attribution](images/attribution.md) for all sources.
```

**3. Central attribution file:**
- All images documented in `/images/attribution.md`
- Comprehensive format with URLs, licenses, descriptions

---

### License Verification Process

Before using any external image:

1. **Locate license statement** on source page
2. **Verify educational use allowed**
3. **Document in LICENSE_VERIFICATION.md** (internal)
4. **Note attribution requirements**
5. **Screenshot license page** (proof)
6. **Add to attribution.md** with full details

**Allowed Licenses:**
- Creative Commons (BY, BY-SA, BY-NC-SA with attribution)
- Public Domain
- Educational fair use (limited, US-centric)
- Explicit permission from creator

**Not Allowed Without Permission:**
- All Rights Reserved
- CC BY-ND (no derivatives - we crop/annotate)
- Commercial licenses without educational clause

---

## Testing Requirements

### Before Marking Module "Complete"

**Content Checks:**
- [ ] All learning objectives are addressed in content
- [ ] Success criteria are measurable and objective
- [ ] Common mistakes section has 2-3 specific callouts
- [ ] Safety warnings have "why" explanations
- [ ] Technical accuracy verified against sources

**Structure Checks:**
- [ ] Module follows required section order
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] Role marker present (student or teacher)
- [ ] Prerequisites listed
- [ ] "Next Step" links to appropriate module

**Visual Checks:**
- [ ] All images load correctly
- [ ] All images have descriptive alt text
- [ ] All images have captions
- [ ] CC-licensed images have attribution
- [ ] Images are optimized (appropriate file size)

**Link Checks:**
- [ ] All internal links resolve
- [ ] All external links work
- [ ] Section links navigate correctly

**Mobile Checks:**
- [ ] Tables are responsive or scroll horizontally
- [ ] Images scale to screen width
- [ ] Text is readable at default zoom
- [ ] Navigation works on mobile

**Accessibility Checks:**
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Information not conveyed by color alone
- [ ] Alt text on all images
- [ ] Headings used for structure (not just bold text)

---

### Testing Tools

**Build Test:**
```bash
mkdocs serve
# Check for errors, verify changes locally
```

**Link Checker:**
```bash
# Use broken-link-checker or similar
blc http://localhost:8000 -ro
```

**Accessibility:**
- WebAIM WAVE: https://wave.webaim.org/
- Chrome Lighthouse (Accessibility audit)

**Mobile:**
- Chrome DevTools responsive mode
- Actual iOS device (iPhone)
- Actual Android device

**Image Optimization:**
```bash
# Check file sizes
ls -lh images/**/*.jpg images/**/*.png

# Optimize if needed
mogrify -resize 1200x -quality 85 image.jpg
```

---

## Version Control Standards

### Commit Message Format

```
type: brief description

Longer explanation if needed.

- Specific change 1
- Specific change 2
```

**Types:**
- `feat:` New module or major feature
- `fix:` Bug fix, correction, broken link repair
- `docs:` Documentation only (no curriculum content change)
- `img:` Image additions/updates/optimization
- `style:` Formatting, markdown cleanup, no content change
- `refactor:` Content reorganization, no new information

**Examples:**

✅ **Good:**
```
feat: add robot archetypes module with 5 example photos

Added comprehensive robot archetypes module covering:
- Drum spinners
- Eggbeaters
- Vertical disc spinners
- Horizontal midcutters
- Undercutters

Includes 5 reference photos with attribution.
```

✅ **Good:**
```
fix: correct N20 motor RPM specification

Changed from 250 RPM to 300 RPM based on GA12-N20 datasheet.
Updated drivetrain-design.md and index.md.
```

❌ **Bad:**
```
updated stuff
```

❌ **Bad:**
```
made changes to modules and fixed things
```

---

### Branching Strategy

**Main Branch:**
- Production-ready code only
- All tests pass
- Peer reviewed

**Feature Branches:**
- Format: `agent-N-description` or `feat-description`
- One feature/agent per branch
- Merge to main after review

**Hotfix Branches:**
- Format: `hotfix-description`
- Critical fixes only
- Merge to main immediately after verification

---

## Quality Assurance Checklist

Use this before publishing any changes:

### Content Quality
- [ ] Technically accurate (verified against sources)
- [ ] Safety information complete and correct
- [ ] Writing is clear and concise
- [ ] No jargon without explanation
- [ ] Examples are relevant and helpful

### Structure Quality
- [ ] Module follows required section order
- [ ] Learning objectives are measurable
- [ ] Success criteria are objective
- [ ] Common mistakes are specific
- [ ] Links to next step

### Visual Quality
- [ ] All images meet format requirements
- [ ] File sizes optimized
- [ ] Alt text is descriptive
- [ ] Captions explain what to learn
- [ ] Attribution complete

### Technical Quality
- [ ] All links work (internal and external)
- [ ] Markdown formatting consistent
- [ ] No broken images
- [ ] Code blocks have language tags
- [ ] Tables are responsive

### Accessibility Quality
- [ ] WCAG AA contrast (4.5:1 text)
- [ ] Alt text on all images
- [ ] No color-only information
- [ ] Heading hierarchy logical
- [ ] Works with screen reader (test if possible)

### Testing Quality
- [ ] Local build succeeds (mkdocs serve)
- [ ] Tested on mobile device
- [ ] Student workflow makes sense
- [ ] No broken links (link checker)
- [ ] Images load correctly

### Documentation Quality
- [ ] Attribution complete (if using external content)
- [ ] Commit message follows standards
- [ ] Changes documented in CHANGELOG (if significant)
- [ ] Quality standards met

---

## Continuous Improvement

### Feedback Collection

**Student Feedback:**
- After each competition, survey students
- Document confusion points
- Note successful sections
- Identify missing information

**Teacher Feedback:**
- What worked well?
- What was unclear?
- What took longer than estimated?
- What safety issues arose?

### Annual Review

**Every year before competition season:**
1. Review all technical specifications (verify hardware still available)
2. Update external links (check for link rot)
3. Refresh screenshots (if UI changed)
4. Review safety procedures (any rule changes?)
5. Optimize images (new compression tools?)
6. Test on new devices (new iOS/Android versions?)

### Version History

Document significant changes:

**Version 2.0 (March 2026):**
- Complete visual asset integration
- Student/teacher path separation
- Quality standards established

**Version 1.0 (March 2026):**
- Initial curriculum release
- 9 core modules
- Foundational content

---

## Enforcement

**Before Merging to Main:**
- Self-review using Quality Assurance Checklist
- Peer review by another contributor (if team)
- All automated tests pass
- Local build succeeds

**If Standards Not Met:**
- Request changes before merge
- Document what needs improvement
- Provide specific feedback (not "fix quality")

**Exceptions:**
- Must be documented in commit message
- Must have valid reason
- Must not compromise safety content
- Approved by curriculum lead

---

**Quality Standards Version:** 2.0
**Last Updated:** March 12, 2026
**Next Review:** Before 2027 competition season
