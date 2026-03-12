# Aceternity UI - Quick Start Guide

## 3-Step Setup

### Step 1: Include Files

```html
<!-- In <head> -->
<link rel="stylesheet" href="stylesheets/aceternity-components.css">

<!-- Before </body> -->
<script type="module" src="components/dotted-glow-background.js"></script>
<script type="module" src="components/card-spotlight.js"></script>
<script type="module" src="components/text-hover-effect.js"></script>
```

### Step 2: Use Components

```html
<!-- Dotted Background -->
<div data-dotted-glow-background data-gap="15">
  <h1>Your Content</h1>
</div>

<!-- Card Spotlight -->
<div class="card-spotlight" data-card-spotlight>
  <h3>Feature</h3>
</div>

<!-- Text Hover -->
<div data-text-hover-effect data-text="CTRC"></div>
```

### Step 3: Customize

```html
<!-- Custom colors -->
<div data-dotted-glow-background
     data-gap="20"
     data-glow-color="rgba(0, 255, 136, 0.8)">
</div>

<div class="card-spotlight"
     data-card-spotlight
     data-spotlight-radius="400"
     data-spotlight-color="#00ff88">
</div>

<div data-text-hover-effect
     data-text="LEARN"
     data-stroke-color="#3b82f6">
</div>
```

---

## Live Demo

Open: `/docs/components/aceternity-demo.html`

## Full Docs

See: `/docs/components/ACETERNITY_WAVE1_README.md`

---

## Common Patterns

### Hero Section
```html
<section data-dotted-glow-background data-gap="15"
         style="min-height: 500px; display: flex; align-items: center; justify-content: center;">
  <div data-text-hover-effect data-text="CTRC"></div>
</section>
```

### Feature Grid
```html
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
  <div class="card-spotlight" data-card-spotlight>
    <h3>Unit 1</h3>
    <p>Drivetrain</p>
  </div>
  <!-- More cards... -->
</div>
```

---

That's it! Components auto-initialize from data attributes.
