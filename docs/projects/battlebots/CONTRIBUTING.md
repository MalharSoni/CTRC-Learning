# Contributing to BattleBots Curriculum

Thank you for your interest in improving this curriculum! Whether you're a teacher, student, mentor, or robotics enthusiast, your contributions help make this resource better for everyone.

---

## Ways to Contribute

### 1. Report Issues

**Found something wrong?**
- Typo or spelling error
- Technical error or outdated information
- Confusing explanation
- Broken link
- Missing information

**How to report:**
1. Check if issue already exists (search open issues)
2. Open a new issue on GitHub
3. Include:
   - Module name and section
   - What's wrong
   - What it should be (if known)
   - Screenshots if helpful

**Example good issue:**
```
Title: N20 motor RPM specification incorrect in drivetrain module

Module: Module 4 - Drivetrain Design
Section: "Choosing Your Motors"

Issue: Lists N20 motor as 250 RPM, but GA12-N20 datasheet shows 300 RPM.

Fix: Update to 300 RPM and verify other motor specs.
```

---

### 2. Suggest Improvements

**Have a better way to explain something?**
- Clearer wording
- Better example
- Helpful diagram
- Useful resource to add

**How to suggest:**
1. Open an issue with label "enhancement"
2. Describe current content
3. Describe suggested improvement
4. Explain why it's better

**Example good suggestion:**
```
Title: Add weapon balance diagram to CAD module

Module: Module 5 - CAD Your Bot
Section: "Checking Weapon Balance"

Suggestion: Add a diagram showing center of mass on rotation axis vs. off-axis,
with arrows showing vibration forces.

Why: Students struggle to visualize what "balanced" means. A diagram would
clarify this concept before they check in Onshape.

I can create this diagram if helpful.
```

---

### 3. Submit Visual Assets

**Have photos or diagrams that would help students?**
- Photos of your robot showing key features
- Assembly process photos
- CAD screenshots
- Technical diagrams
- Process flowcharts

**Requirements:**
- Must meet VISUAL_STANDARDS.md specifications
- Must have proper licensing (CC, public domain, or your original work)
- Must be optimized (file size under limits)
- Must be relevant to curriculum content

**How to submit:**
1. Verify image meets quality standards
2. Optimize and name correctly
3. Include attribution information (if not your original work)
4. Fork repository
5. Add image to correct directory
6. Update attribution.md (if needed)
7. Submit pull request with:
   - Description of what image shows
   - Where in curriculum it should go
   - Suggested alt text and caption

---

### 4. Add New Content

**Want to add a new module or section?**

**Before you start:**
1. Open an issue to discuss the addition
2. Verify it fits curriculum goals
3. Check it doesn't duplicate existing content
4. Get alignment with curriculum maintainers

**After approval:**
1. Follow STYLE_GUIDE.md for writing
2. Follow module template structure
3. Include all required sections
4. Add appropriate images
5. Test locally before submitting

---

## Contribution Process

### Step 1: Fork the Repository

Click "Fork" button on GitHub to create your own copy.

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/CTRC-Learning.git
cd CTRC-Learning
```

### Step 3: Create a Branch

```bash
# For features
git checkout -b feat-your-improvement

# For fixes
git checkout -b fix-issue-description

# For documentation
git checkout -b docs-improvement
```

### Step 4: Make Your Changes

**Follow these standards:**
- STYLE_GUIDE.md for writing style
- VISUAL_STANDARDS.md for images
- QUALITY_STANDARDS.md for overall quality
- Module template for structure

**If adding images:**
- Optimize file size
- Name correctly (lowercase, hyphens)
- Place in correct subdirectory
- Add attribution (if required)

**If changing technical content:**
- Verify against manufacturer datasheets
- Check all instances of specification
- Update images if specs are shown

### Step 5: Test Locally

```bash
# Navigate to project root
cd /path/to/CTRC-Learning

# Install MkDocs if not installed
pip install mkdocs mkdocs-material

# Serve locally
mkdocs serve

# Open browser to http://localhost:8000
# Verify your changes
```

**What to test:**
- [ ] All new content renders correctly
- [ ] All images load
- [ ] All links work (internal and external)
- [ ] Formatting looks correct
- [ ] Mobile view works (use browser DevTools)
- [ ] No build errors or warnings

### Step 6: Commit Your Changes

```bash
# Stage your changes
git add -A

# Commit with descriptive message
git commit -m "type: brief description

Longer explanation of changes.

- Specific change 1
- Specific change 2
"
```

**Commit message types:**
- `feat:` New module or feature
- `fix:` Bug fix or correction
- `img:` Image additions or updates
- `docs:` Documentation changes
- `style:` Formatting only (no content change)

**Example good commit:**
```
fix: correct N20 motor RPM in drivetrain module

Changed from 250 RPM to 300 RPM based on GA12-N20 datasheet.

Updated files:
- drivetrain-design.md (section: Choosing Your Motors)
- index.md (quick reference table)
```

### Step 7: Push to Your Fork

```bash
git push origin your-branch-name
```

### Step 8: Submit Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request" button
3. Select your branch
4. Fill out PR template with:
   - **Title:** Clear description of changes
   - **Description:** What you changed and why
   - **Testing:** What you tested
   - **Screenshots:** If visual changes

**Example good PR description:**
```
## Changes

Fixed N20 motor specification error in drivetrain module.

## Details

- Updated RPM from 250 to 300 based on manufacturer datasheet
- Updated main module content
- Updated quick reference table
- Verified no other modules reference old spec

## Testing

- [x] Local build succeeds
- [x] All links work
- [x] Renders correctly
- [x] Checked on mobile view

## References

GA12-N20 datasheet: [URL]
```

### Step 9: Respond to Feedback

Reviewers may request changes:
- Read feedback carefully
- Ask questions if unclear
- Make requested changes
- Push updates to same branch
- Re-request review when ready

---

## Content Standards

All contributions must meet these standards:

### Writing Quality

- [ ] Follows STYLE_GUIDE.md (voice, tone, terminology)
- [ ] Active voice, second person perspective
- [ ] Clear, concise sentences
- [ ] No jargon without explanation
- [ ] No spelling or grammar errors

### Structure Quality

- [ ] Follows module template (if new module)
- [ ] Heading hierarchy is logical (H1 → H2 → H3)
- [ ] Includes required sections (prerequisites, objectives, success criteria)
- [ ] Links to next step (if module)

### Visual Quality (if images included)

- [ ] Follows VISUAL_STANDARDS.md
- [ ] File sizes under category limits
- [ ] Descriptive alt text provided (15-25 words)
- [ ] Captions explain what to learn or observe
- [ ] Attribution complete (if CC-licensed)
- [ ] Images in correct directory with correct naming

### Technical Quality

- [ ] All links work (internal and external)
- [ ] Technical information is accurate
- [ ] Specifications verified against sources
- [ ] Code blocks have language tags
- [ ] Markdown formatting correct

### Safety Quality

- [ ] Safety warnings present where needed
- [ ] Safety information is accurate
- [ ] No contradictions with existing safety content
- [ ] Follows existing safety warning format

### Testing Quality

- [ ] Tested in local MkDocs build
- [ ] No build errors or warnings
- [ ] Works on mobile view
- [ ] All links verified
- [ ] Images load correctly

---

## Image Contributions

### Image Requirements

**Before submitting images:**

1. **Verify licensing:**
   - Your original work (you retain copyright, grant educational use)
   - CC-licensed (BY, BY-SA, BY-NC-SA with attribution)
   - Public domain
   - Educational fair use (verify carefully)

2. **Meet specifications:**
   - Format: JPG for photos, PNG for screenshots, SVG for diagrams
   - Maximum dimensions per category (see VISUAL_STANDARDS.md)
   - File size under category limits
   - Good quality (sharp, well-lit, readable)

3. **Name correctly:**
   - Format: `category-descriptive-name.extension`
   - All lowercase
   - Hyphens only (no spaces or underscores)
   - Descriptive and specific

4. **Optimize:**
   - Resize to maximum dimensions
   - Compress appropriately
   - Verify file size under limit

### How to Submit Images

**Method 1: Via Pull Request (preferred)**

1. Fork repository
2. Add image to correct directory:
   ```
   docs/projects/battlebots/images/category/image-name.jpg
   ```
3. Add attribution (if required) in `attribution.md`
4. Provide suggested alt text and caption in PR description
5. Note where in curriculum it should go
6. Submit PR

**Method 2: Via Issue (if not comfortable with Git)**

1. Open issue with label "image contribution"
2. Attach image or provide link
3. Include:
   - What it shows
   - Where it should go in curriculum
   - Licensing information (your work, CC license, etc.)
   - Suggested alt text
   - Suggested caption

**Example image contribution PR:**
```
## Image Contribution

**Image:** motor-n20-d-shaft-detail.jpg
**Category:** components
**Size:** 145 KB (under 200 KB limit)

**Description:**
Close-up photo of N20 motor showing D-shaped shaft with flat side clearly visible.

**Suggested placement:**
Module 6: Assembly and Wiring, section "Installing Motors"

**Alt text:**
"N20 motor showing D-shaped output shaft with one flat side, metal gearbox housing, and two mounting holes"

**Caption:**
"The D-shaft has one flat side that prevents the wheel from spinning freely on the shaft. Align this flat with the wheel hub slot during assembly."

**License:**
Original work by [Your Name], released for educational use in CTRC curriculum.
```

---

## Recognition & Credit

### How We Credit Contributors

**In commit messages:**
If maintainer merges your PR, they'll use:
```
Co-authored-by: Your Name <your@email.com>
```

**In release notes:**
Major contributions will be noted in season summary.

**In curriculum (if appropriate):**
Significant content additions may include author credit in module footer.

### Student Contributions

**Students who contribute:**
- Get credited in commit history
- Can list contribution on college applications
- Build portfolio of technical writing
- Help future students learn

This is a great way to give back to the program and develop skills!

---

## Code of Conduct

### Our Standards

**Be respectful:**
- Assume positive intent
- Be constructive, not critical
- Value different perspectives
- Welcome newcomers

**Be helpful:**
- Answer questions patiently
- Provide specific feedback
- Offer to help
- Share knowledge generously

**Be collaborative:**
- Discuss before making major changes
- Consider impact on students
- Align with curriculum goals
- Work together to improve

### Unacceptable Behavior

- Harassment or discrimination
- Personal attacks or insults
- Trolling or inflammatory comments
- Publishing others' private information
- Disruptive or off-topic contributions

### Enforcement

Maintainers may:
- Request changes to contributions
- Close PRs that don't meet standards
- Block users who violate code of conduct

---

## Getting Help

### Questions About Contributing?

**General questions:**
- Open a discussion on GitHub
- Tag with "question" label

**Technical questions:**
- Open an issue with "help wanted" label
- Ask in discussion forum

**Style/formatting questions:**
- Reference STYLE_GUIDE.md
- Reference VISUAL_STANDARDS.md
- Ask in your PR comments

### Want to Chat?

**Contact curriculum maintainers:**
- Open a discussion
- Email: [contact email if applicable]
- Discord: [server invite if applicable]

---

## Types of Contributions Needed

### High Priority

- [ ] Photos of student robots showing different archetypes
- [ ] Assembly process photos (press-fit motors, wiring, etc.)
- [ ] Common mistake examples (with photos)
- [ ] Troubleshooting scenarios from real experience
- [ ] Updated product links (if hardware changes)

### Medium Priority

- [ ] Technical diagrams (physics, forces, geometry)
- [ ] CAD screenshots (Onshape workflow)
- [ ] 3D printing orientation diagrams
- [ ] Flowcharts (procedures, decision trees)
- [ ] Example robot designs (with files)

### Ongoing Needs

- [ ] Link checking (report broken links)
- [ ] Typo fixes
- [ ] Clarity improvements
- [ ] Updated specifications (if hardware changes)
- [ ] Student feedback integration

---

## Contributor Checklist

Before submitting your contribution, verify:

**Content:**
- [ ] Technically accurate
- [ ] Appropriate for students
- [ ] Follows STYLE_GUIDE.md
- [ ] No spelling or grammar errors

**Structure:**
- [ ] Follows module template (if applicable)
- [ ] Required sections present
- [ ] Logical organization

**Visuals (if included):**
- [ ] Images optimized
- [ ] Correct naming convention
- [ ] Descriptive alt text
- [ ] Helpful captions
- [ ] Attribution complete (if required)

**Technical:**
- [ ] All links work
- [ ] Builds without errors
- [ ] Works on mobile
- [ ] Tested locally

**Process:**
- [ ] Created from fork
- [ ] Branch named correctly
- [ ] Descriptive commit messages
- [ ] PR description complete
- [ ] Responds to feedback

---

## Examples of Great Contributions

### Example 1: Bug Fix

**Issue:** Incorrect motor specification
**Contribution:**
- Found error in datasheet reference
- Updated all instances across modules
- Verified no other specs were affected
- Provided source documentation

**Why it's great:**
- Thorough (checked all files)
- Well-documented (provided source)
- Tested before submitting

### Example 2: Image Addition

**Contribution:**
- High-quality photo of weapon clearance check
- Proper naming and optimization
- Descriptive alt text and caption
- Clear placement suggestion

**Why it's great:**
- Fills content gap
- Meets quality standards
- Ready to integrate
- Helpful to students

### Example 3: Content Improvement

**Issue:** Confusing explanation of bite depth
**Contribution:**
- Clearer wording
- Added diagram
- Included example calculation
- Provided real-world context

**Why it's great:**
- Identifies specific problem
- Provides complete solution
- Enhances understanding
- Based on student feedback

---

## Thank You!

Every contribution makes this curriculum better for students learning combat robotics. Whether you're fixing a typo, adding a photo, or writing a whole module, your help is valuable and appreciated.

**Questions?** Open an issue or discussion.
**Ready to contribute?** Fork the repo and get started!

---

**Contributing Guide Version:** 1.0
**Last Updated:** March 13, 2026

This guide is a living document. Suggest improvements by opening an issue or submitting a pull request.
