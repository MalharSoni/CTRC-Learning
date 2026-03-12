# Component Quick Reference Card

## Badges

### Difficulty Levels
```html
<span class="badge badge-beginner">
  <i class="ph ph-gauge"></i>
  Beginner
</span>

<span class="badge badge-intermediate">
  <i class="ph ph-medal"></i>
  Intermediate
</span>

<span class="badge badge-advanced">
  <i class="ph ph-fire"></i>
  Advanced
</span>
```

### Activity Types
```html
<span class="badge badge-time">
  <i class="ph ph-clock"></i>
  60 minutes
</span>

<span class="badge badge-hands-on">
  <i class="ph ph-wrench"></i>
  Hands-on
</span>

<span class="badge badge-theory">
  <i class="ph ph-book-open"></i>
  Theory
</span>
```

---

## Timeline

```html
<div class="lesson-timeline">
  <div class="timeline-container">

    <div class="timeline-item completed">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">Module 1.1: Title</div>
        <div class="timeline-meta">Completed</div>
      </div>
    </div>

    <div class="timeline-item current">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">Module 1.2: Title</div>
        <div class="timeline-meta">In Progress</div>
      </div>
    </div>

    <div class="timeline-item upcoming">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">Module 1.3: Title</div>
        <div class="timeline-meta">Up Next</div>
      </div>
    </div>

  </div>
</div>
```

---

## Key Takeaways Box

```html
<div class="key-takeaways">

- First major takeaway
- Second important point
- Third critical concept
- Fourth key skill
- Fifth best practice

</div>
```

---

## Knowledge Check

```html
<div class="knowledge-check">

!!! question "Question 1"
    Your question text here?

    ??? success "Answer"
        Your answer with explanation.

!!! question "Question 2"
    Another question?

    ??? success "Answer"
        Another answer.

</div>
```

---

## Navigation Buttons

```html
<div class="lesson-navigation">
  <a href="previous-lesson.md" class="nav-button prev">
    <span><i class="ph ph-arrow-left"></i> Previous: Title</span>
  </a>
  <a href="next-lesson.md" class="nav-button next">
    <span>Next: Title <i class="ph ph-arrow-right"></i></span>
  </a>
</div>
```

---

## Feature Cards

```html
<div class="feature-cards">
  <a href="unit1.md" class="feature-card">
    <div class="feature-card-icon">
      <i class="ph ph-gear"></i>
    </div>
    <h3>Unit Title</h3>
    <p>Description of what this unit covers.</p>
    <div style="margin-top: 1rem; font-size: 0.75rem; color: #737373;">
      4 modules • 60 min each
    </div>
  </a>
</div>
```

---

## Common Icons

| Icon | Class | Use |
|------|-------|-----|
| Gauge | `ph-gauge` | Beginner level |
| Medal | `ph-medal` | Intermediate level |
| Fire | `ph-fire` | Advanced level |
| Clock | `ph-clock` | Time duration |
| Wrench | `ph-wrench` | Hands-on |
| Book | `ph-book-open` | Theory |
| Arrow Left | `ph-arrow-left` | Previous |
| Arrow Right | `ph-arrow-right` | Next |
| Gear | `ph-gear` | Mechanical |
| Code | `ph-code` | Programming |
| Cube | `ph-cube` | CAD/3D |
| Lightning | `ph-lightning` | Speed/mechanisms |
| Trophy | `ph-trophy` | Challenges |

Full library: [phosphoricons.com](https://phosphoricons.com)

---

## Color Reference

```css
/* Badge Colors */
badge-beginner:     Green (#22c55e)
badge-intermediate: Amber (#f59e0b)
badge-advanced:     Red (#ef4444)
badge-time:         Blue (#3b82f6)
badge-hands-on:     Purple (#a855f7)
badge-theory:       Pink (#ec4899)

/* Timeline States */
completed:  Green (#22c55e)
current:    Blue (#3b82f6) with pulse
upcoming:   Gray (#737373)
```

---

## Copy-Paste Templates

### Full Lesson Header
```markdown
# Module X.X: Title

<div class="lesson-metadata">
  <span class="badge badge-beginner">
    <i class="ph ph-gauge"></i>
    Beginner
  </span>
  <span class="badge badge-time">
    <i class="ph ph-clock"></i>
    60 minutes
  </span>
  <span class="badge badge-hands-on">
    <i class="ph ph-wrench"></i>
    Hands-on
  </span>
</div>

---

## Unit Progress

<div class="lesson-timeline">
  <!-- Add timeline items here -->
</div>

---

## Lesson Overview
```

### Full Lesson Footer
```markdown
---

## Key Takeaways

<div class="key-takeaways">

- Key point 1
- Key point 2
- Key point 3

</div>

---

<div class="lesson-navigation">
  <a href="prev.md" class="nav-button prev">
    <span><i class="ph ph-arrow-left"></i> Previous: Title</span>
  </a>
  <a href="next.md" class="nav-button next">
    <span>Next: Title <i class="ph ph-arrow-right"></i></span>
  </a>
</div>
```

---

## Tips

1. Always close `<div>` tags
2. Use proper timeline states (completed/current/upcoming)
3. Keep badge text short (1-2 words)
4. Timeline items should be 3-5 per lesson
5. Key takeaways should be 5-7 bullets
6. Knowledge check: 3-5 questions per lesson

---

**Full Documentation:** See `lesson-template.md`
**CSS Reference:** See `lesson-enhancements.css`
