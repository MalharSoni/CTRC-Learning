# FlipButton Integration Guide

Quick guide for integrating FlipButton components into CTRC Learning pages.

## Quick Start

### 1. Add to Homepage

Edit `docs/index.md` and add:

```html
<link rel="stylesheet" href="stylesheets/flip-button.css">

<div class="flip-buttons-grid" style="margin: 40px 0;">
  <div class="flip-button-container">
    <a href="foundation/" class="flip-button flip-button-primary flip-button-animate-in">
      <span class="flip-button-front">Start Learning</span>
      <span class="flip-button-back">Let's Go! →</span>
    </a>
  </div>

  <div class="flip-button-container">
    <a href="projects/" class="flip-button flip-button-secondary flip-button-animate-in">
      <span class="flip-button-front">View Projects</span>
      <span class="flip-button-back">Explore Now →</span>
    </a>
  </div>

  <div class="flip-button-container">
    <a href="design-handbook/" class="flip-button flip-button-outline flip-button-animate-in">
      <span class="flip-button-front">Explore Handbook</span>
      <span class="flip-button-back">Read More →</span>
    </a>
  </div>
</div>
```

### 2. Add to Section Pages

For any section landing page (e.g., `foundation/index.md`):

```html
<div class="flip-button-container" style="margin: 24px 0;">
  <a href="unit1/" class="flip-button flip-button-primary">
    <span class="flip-button-front">Start Unit 1</span>
    <span class="flip-button-back">Begin Course →</span>
  </a>
</div>
```

### 3. Add to Challenge Pages

For challenge/project CTAs:

```html
<div class="flip-button-container" style="margin: 24px 0;">
  <a href="../challenge-free-spin/" class="flip-button flip-button-secondary">
    <span class="flip-button-front">Try the Challenge</span>
    <span class="flip-button-back">Start Now! 🏆</span>
  </a>
</div>
```

## Common Patterns

### Hero CTA (Primary)

```html
<div class="flip-button-container">
  <a href="/path" class="flip-button flip-button-primary flip-button-animate-in">
    <span class="flip-button-front">Main Action</span>
    <span class="flip-button-back">Let's Go! →</span>
  </a>
</div>
```

### Secondary CTA

```html
<div class="flip-button-container">
  <a href="/path" class="flip-button flip-button-secondary">
    <span class="flip-button-front">Secondary Action</span>
    <span class="flip-button-back">Learn More →</span>
  </a>
</div>
```

### Ghost/Outline CTA

```html
<div class="flip-button-container">
  <a href="/path" class="flip-button flip-button-outline">
    <span class="flip-button-front">Optional Action</span>
    <span class="flip-button-back">Explore →</span>
  </a>
</div>
```

### Side-by-Side Buttons

```html
<div class="flip-buttons-grid">
  <div class="flip-button-container">
    <!-- Button 1 -->
  </div>
  <div class="flip-button-container">
    <!-- Button 2 -->
  </div>
</div>
```

## Pre-configured CTAs

Use these ready-made buttons:

### Start Learning
```html
<div class="flip-button-container">
  <a href="foundation/" class="flip-button flip-button-primary">
    <span class="flip-button-front">Start Learning</span>
    <span class="flip-button-back">Let's Go! →</span>
  </a>
</div>
```

### View Projects
```html
<div class="flip-button-container">
  <a href="projects/" class="flip-button flip-button-secondary">
    <span class="flip-button-front">View Projects</span>
    <span class="flip-button-back">Explore Now →</span>
  </a>
</div>
```

### Explore Handbook
```html
<div class="flip-button-container">
  <a href="design-handbook/" class="flip-button flip-button-outline">
    <span class="flip-button-front">Explore Handbook</span>
    <span class="flip-button-back">Read More →</span>
  </a>
</div>
```

## Tips

1. **Use Primary for main CTAs** - One per page maximum
2. **Secondary for alternative actions** - Less emphasis than primary
3. **Outline for tertiary actions** - Subtle, non-intrusive
4. **Add `flip-button-animate-in`** - For entrance animation on page load
5. **Grid for multiple CTAs** - Responsive 3-column layout
6. **Wrap in `<div style="margin: 24px 0;">"`** - Add spacing in markdown

## File Locations

- **CSS**: `/docs/stylesheets/flip-button.css`
- **Demo**: `/docs/components/flip-button-demo.md`
- **Integration Guide**: `/docs/components/flip-button-integration.md` (this file)

## Already Configured

The CSS is already loaded globally via `mkdocs.yml`:

```yaml
extra_css:
  - stylesheets/extra.css
  - stylesheets/flip-button.css
```

You can use the buttons immediately in any markdown file without additional setup!
