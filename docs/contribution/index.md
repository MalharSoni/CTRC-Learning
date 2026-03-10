# Contribution Guide

This site is a community resource, and contributions are welcome. Whether you're fixing a typo, adding a new section, or improving existing content, this guide explains how to contribute.

---

## Ways to Contribute

### Report Issues
Found an error, broken link, or confusing explanation? Report it:

1. Go to the site's **GitHub repository**
2. Click **"Issues"** → **"New Issue"**
3. Describe the problem, including:
    - Which page the issue is on
    - What the problem is (error, unclear explanation, missing content)
    - What you expected to see
4. Submit the issue — a maintainer will review and address it

### Suggest Improvements
Have an idea for new content or a better way to explain something?

1. Open a **GitHub Issue** with the label "enhancement"
2. Describe your suggestion in detail
3. If possible, include an outline of the proposed content

### Submit Content
Want to write new content or fix existing content directly?

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. Make your changes following the style guide below
4. **Submit a Pull Request** with a clear description of your changes
5. A maintainer will review your PR and provide feedback

---

## Getting Started with GitHub

If you're new to GitHub and pull requests, here's a quick overview:

### Step 1: Fork the Repository
Click the **"Fork"** button on the repository page. This creates a copy of the repository under your GitHub account.

### Step 2: Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/CTRC-Learning.git
cd CTRC-Learning
```

### Step 3: Create a Branch
```bash
git checkout -b my-improvement
```

### Step 4: Make Changes
Edit the markdown files in the `docs/` directory using any text editor.

### Step 5: Preview Locally
```bash
pip install mkdocs-material
mkdocs serve
```
Then open `http://localhost:8000` in your browser to preview your changes.

### Step 6: Commit and Push
```bash
git add .
git commit -m "Describe your changes"
git push origin my-improvement
```

### Step 7: Create a Pull Request
Go to your fork on GitHub and click **"New Pull Request"**. Describe your changes and submit.

---

## Content Style Guide

### Writing Style

- **Use plain language** — Explain concepts as if talking to a smart high school student
- **Be concise** — Say what needs to be said, then stop. Don't pad content.
- **Use active voice** — "Click the button" not "The button should be clicked"
- **Address the reader directly** — "You'll learn..." not "Students will learn..."
- **Be specific** — "Use a 0.125-inch fillet" not "Use an appropriate fillet"

### Markdown Formatting

#### Headings
```markdown
# Page Title (H1) — one per page
## Major Section (H2)
### Subsection (H3)
#### Minor subsection (H4) — use sparingly
```

#### Admonitions
Use MkDocs Material admonition syntax:

```markdown
!!! tip "Tip Title"
    Tip content here. Indent with 4 spaces.

!!! warning "Warning Title"
    Warning content here.

!!! note "Note Title"
    Note content here.

!!! example "Example Title"
    Example content here.
```

#### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data | Data | Data |
```

#### Code Blocks
Use triple backticks with language specification when applicable:

````markdown
```python
def example():
    return "hello"
```
````

For formulas and calculations, use plain code blocks:

```markdown
```
Gear Ratio = Driven Teeth / Driving Teeth
```
```

### Content Structure

Every page should follow this general structure:

1. **Title** (H1) — Clear, descriptive title
2. **Introduction** — 2-3 sentences explaining what this page covers and why it matters
3. **Body** — Main content organized with H2 and H3 headings
4. **Admonitions** — Tips, warnings, and notes where appropriate
5. **Next Steps** — Link to the next page in the sequence (for course pages)

### Images

When adding images:

- Place images in the `docs/img/` directory, organized by section
- Use descriptive filenames: `1A-exercise1-completed-sketch.png` (not `screenshot.png`)
- Add alt text for accessibility: `![Completed sketch showing motor plate profile](../img/1A-exercise1-completed-sketch.png)`
- Keep images under 500KB (compress PNGs, use JPEG for photos)

---

## What Makes a Good Contribution

### Content Additions
Good contributions:

- Fill a gap in the existing content
- Add real-world examples or exercises
- Include helpful diagrams or screenshots
- Follow the existing style and formatting
- Are technically accurate

### Content Fixes
Good fixes:

- Correct factual errors
- Fix typos and grammar
- Clarify confusing explanations
- Fix broken links
- Update outdated information

---

## Review Process

All contributions go through a review process:

1. **Automated checks** — Spelling, link validation, and formatting
2. **Content review** — A maintainer reviews for accuracy, clarity, and style
3. **Feedback** — You may receive suggestions for changes
4. **Merge** — Once approved, your contribution is merged and published

!!! tip "Small PRs are Better"
    Smaller, focused pull requests are easier to review and more likely to be merged quickly. If you have multiple unrelated changes, submit them as separate PRs.

---

## Code of Conduct

- Be respectful and constructive in all interactions
- Focus on improving the content, not criticizing others
- Accept feedback graciously — reviewers are trying to help
- Give credit where credit is due
- Remember that contributors are volunteers

---

## Questions?

If you have questions about contributing, open a GitHub Issue with the label "question" or reach out through the team's communication channels.

Thank you for helping make this resource better for the VEX community.
