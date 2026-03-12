# Aceternity UI Components - Wave 1
## CTRC Learning Implementation Guide

This document covers the implementation of the first wave of 3 Aceternity UI components adapted for the CTRC Learning platform.

---

## 📦 Components Included

### 1. **Dotted Glow Background**
Canvas-based animated background with pulsing, glowing dots.

**Use cases:**
- Hero sections
- Feature showcases
- Landing page backgrounds
- Section dividers

**Key features:**
- Canvas API for performance
- Customizable dot spacing, size, and colors
- Variable pulse speeds per dot
- Theme-aware (light/dark mode)
- Radial fade support

---

### 2. **Card Spotlight**
Interactive cards with mouse-following spotlight effect.

**Use cases:**
- Feature highlights
- Product showcases
- Course module cards
- Team member cards

**Key features:**
- Mouse-tracking radial gradient
- Smooth opacity transitions
- Customizable spotlight radius and color
- Works with any card content
- Theme-aware

---

### 3. **Text Hover Effect**
Large, bold text with animated stroke and glow on hover.

**Use cases:**
- Hero headlines
- Section titles
- Logo/branding elements
- Call-to-action text

**Key features:**
- SVG-based for crisp rendering
- Animated stroke width on hover
- Drop shadow glow effect
- Customizable colors and duration
- Responsive sizing

---

## 🚀 Quick Start

### Method 1: Data Attributes (Recommended)

Components auto-initialize on page load when using data attributes.

```html
<!-- Include CSS -->
<link rel="stylesheet" href="stylesheets/aceternity-components.css">

<!-- Include scripts -->
<script type="module" src="components/dotted-glow-background.js"></script>
<script type="module" src="components/card-spotlight.js"></script>
<script type="module" src="components/text-hover-effect.js"></script>

<!-- Use data attributes -->
<div data-dotted-glow-background
     data-gap="15"
     data-glow-color="rgba(0, 255, 136, 0.6)">
  <h1>Hero Content</h1>
</div>

<div class="card-spotlight"
     data-card-spotlight
     data-spotlight-radius="350">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

<div data-text-hover-effect
     data-text="CTRC"
     data-stroke-color="#00ff88"></div>
```

### Method 2: JavaScript API

For programmatic control and dynamic initialization.

```javascript
import { DottedGlowBackground } from './components/dotted-glow-background.js';
import { CardSpotlight } from './components/card-spotlight.js';
import { TextHoverEffect } from './components/text-hover-effect.js';

// Dotted Background
const bg = new DottedGlowBackground('#hero-section', {
  gap: 15,
  radius: 1.8,
  color: 'rgba(255, 255, 255, 0.15)',
  glowColor: 'rgba(0, 255, 136, 0.6)',
  speedMin: 0.3,
  speedMax: 1.6
});

// Card Spotlight
const card = new CardSpotlight('.feature-card', {
  radius: 350,
  color: '#00ff88'
});

// Text Hover Effect
const text = new TextHoverEffect('#hero-text', {
  text: 'CTRC',
  duration: 0.5,
  strokeColor: '#00ff88'
});

// Cleanup when needed
bg.destroy();
card.destroy();
text.destroy();
```

---

## 📖 Component APIs

### Dotted Glow Background

#### Options
```typescript
interface DottedGlowBackgroundOptions {
  gap?: number;              // Distance between dots (default: 12)
  radius?: number;           // Dot base radius (default: 2)
  color?: string;            // Dot color (default: 'rgba(255,255,255,0.15)')
  darkColor?: string;        // Dark mode color (optional)
  glowColor?: string;        // Glow/shadow color (default: 'rgba(0,170,255,0.85)')
  darkGlowColor?: string;    // Dark mode glow (optional)
  opacity?: number;          // Global opacity (default: 0.6)
  backgroundOpacity?: number;// Radial fade opacity (default: 0)
  speedMin?: number;         // Min pulse speed (default: 0.4)
  speedMax?: number;         // Max pulse speed (default: 1.3)
  speedScale?: number;       // Speed multiplier (default: 1)
  className?: string;        // Additional classes
}
```

#### Methods
```javascript
bg.start()    // Start animation
bg.stop()     // Stop animation
bg.destroy()  // Remove component
```

#### Data Attributes
- `data-dotted-glow-background` - Enable component
- `data-gap` - Dot spacing
- `data-radius` - Dot size
- `data-color` - Dot color
- `data-glow-color` - Glow color
- `data-opacity` - Opacity
- `data-speed-min` - Min speed
- `data-speed-max` - Max speed

---

### Card Spotlight

#### Options
```typescript
interface CardSpotlightOptions {
  radius?: number;     // Spotlight radius (default: 350)
  color?: string;      // Gradient color (default: '#262626')
  className?: string;  // Additional classes
}
```

#### Methods
```javascript
card.setRadius(400)         // Update radius
card.setColor('#00ff88')    // Update color
card.destroy()              // Remove component
```

#### Data Attributes
- `data-card-spotlight` - Enable component
- `data-spotlight-radius` - Spotlight size
- `data-spotlight-color` - Gradient color
- `data-spotlight-class` - Additional classes

---

### Text Hover Effect

#### Options
```typescript
interface TextHoverEffectOptions {
  text: string;          // Text to display (required)
  duration?: number;     // Animation duration (default: 0.5)
  strokeColor?: string;  // Stroke/glow color (default: '#00ff88')
  fillColor?: string;    // Fill color (default: 'transparent')
}
```

#### Methods
```javascript
text.setText('NEW TEXT')      // Update text
text.setStrokeColor('#fff')   // Update color
text.destroy()                // Remove component
```

#### Data Attributes
- `data-text-hover-effect` - Enable component
- `data-text` - Text content
- `data-duration` - Animation duration
- `data-stroke-color` - Stroke color
- `data-fill-color` - Fill color

---

## 🎨 Styling & Customization

### CSS Variables

The components respect these CSS variables from the CTRC theme:

```css
--accent: #00ff88;           /* Primary accent color */
--bg-dark: #0a0a0a;          /* Dark background */
--bg-dark-2: #0f0f0f;        /* Lighter dark bg */
--text-primary: #ffffff;      /* Primary text */
--text-secondary: #a0aec0;    /* Secondary text */
--border: rgba(255,255,255,0.08); /* Borders */
```

### Preset Configurations

#### Subtle Background
```javascript
new DottedGlowBackground('#section', {
  gap: 20,
  radius: 1.5,
  color: 'rgba(255, 255, 255, 0.08)',
  glowColor: 'rgba(0, 255, 136, 0.3)',
  opacity: 0.6,
  speedMin: 0.2,
  speedMax: 0.8
});
```

#### Intense Background
```javascript
new DottedGlowBackground('#hero', {
  gap: 12,
  radius: 2.5,
  color: 'rgba(255, 255, 255, 0.25)',
  glowColor: 'rgba(0, 255, 136, 0.8)',
  opacity: 1,
  speedMin: 0.5,
  speedMax: 2.0
});
```

#### Large Spotlight
```javascript
new CardSpotlight('.card', {
  radius: 500,
  color: '#00ff88'
});
```

#### Tight Spotlight
```javascript
new CardSpotlight('.card', {
  radius: 250,
  color: '#3b82f6'
});
```

---

## 🏗️ Integration Examples

### Hero Section with Dotted Background

```html
<section id="hero" data-dotted-glow-background
         data-gap="15"
         data-radius="1.8"
         data-glow-color="rgba(0, 255, 136, 0.6)"
         style="position: relative; padding: 6rem 2rem; text-align: center;">

  <div style="position: relative; z-index: 10;">
    <div data-text-hover-effect
         data-text="CTRC"
         data-stroke-color="#00ff88"
         style="margin-bottom: 2rem;"></div>

    <h2>Master VEX V5 Robotics</h2>
    <p>From zero to competition-ready</p>

    <button class="cta-button">Start Learning</button>
  </div>
</section>
```

### Feature Grid with Spotlights

```html
<div class="feature-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">

  <div class="card-spotlight" data-card-spotlight data-spotlight-radius="350" data-spotlight-color="#00ff88">
    <h3>Unit 1</h3>
    <p>Drivetrain Mastery</p>
    <ul>
      <li>Safety & Parts</li>
      <li>Structure & Bracing</li>
      <li>Gear Ratios</li>
    </ul>
  </div>

  <div class="card-spotlight" data-card-spotlight data-spotlight-radius="350" data-spotlight-color="#3b82f6">
    <h3>Unit 2</h3>
    <p>Programming</p>
    <ul>
      <li>LemLib Setup</li>
      <li>PID Tuning</li>
      <li>Autonomous</li>
    </ul>
  </div>

  <div class="card-spotlight" data-card-spotlight data-spotlight-radius="350" data-spotlight-color="#f59e0b">
    <h3>Unit 3</h3>
    <p>CAD Design</p>
    <ul>
      <li>Onshape Basics</li>
      <li>VEX Parts</li>
      <li>Rendering</li>
    </ul>
  </div>

</div>
```

### Landing Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CTRC Learning</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="stylesheets/aceternity-components.css">
</head>
<body>

  <!-- Hero with Dotted BG + Text Hover -->
  <section id="hero" data-dotted-glow-background data-gap="15" data-glow-color="rgba(0, 255, 136, 0.6)">
    <div data-text-hover-effect data-text="CTRC"></div>
    <p>Master VEX V5 Robotics</p>
  </section>

  <!-- Features with Spotlights -->
  <section id="features">
    <div class="card-spotlight" data-card-spotlight>
      <h3>Learn by Doing</h3>
      <p>Hands-on projects from day one</p>
    </div>
  </section>

  <script type="module" src="components/dotted-glow-background.js"></script>
  <script type="module" src="components/card-spotlight.js"></script>
  <script type="module" src="components/text-hover-effect.js"></script>

</body>
</html>
```

---

## 🎯 Best Practices

### Performance

1. **Dotted Background:**
   - Use larger `gap` values (15-20) for better performance
   - Reduce `radius` for less canvas drawing
   - Limit to 1-2 instances per page

2. **Card Spotlight:**
   - No performance concerns
   - Safe to use multiple instances

3. **Text Hover Effect:**
   - Keep text short (1-5 characters works best)
   - Use sparingly for maximum impact

### Accessibility

```html
<!-- Add ARIA labels for screen readers -->
<div data-text-hover-effect
     data-text="CTRC"
     role="img"
     aria-label="CTRC - Caution Tape Robotics Club">
</div>

<!-- Ensure card content is accessible -->
<div class="card-spotlight" data-card-spotlight>
  <h3 id="card-title">Feature Title</h3>
  <p aria-describedby="card-title">Description...</p>
</div>
```

### Theme Support

All components auto-detect theme changes via the `light-theme` class on `<body>`:

```javascript
// Theme toggle
document.body.classList.toggle('light-theme');
```

Components will automatically adjust colors based on `darkColor` and `darkGlowColor` options.

---

## 📁 File Structure

```
docs/
├── components/
│   ├── dotted-glow-background.ts    # TypeScript source
│   ├── dotted-glow-background.js    # Compiled JavaScript
│   ├── card-spotlight.ts            # TypeScript source
│   ├── card-spotlight.js            # Compiled JavaScript
│   ├── text-hover-effect.ts         # TypeScript source
│   ├── text-hover-effect.js         # Compiled JavaScript
│   ├── aceternity-demo.html         # Live demo page
│   └── ACETERNITY_WAVE1_README.md   # This file
└── stylesheets/
    └── aceternity-components.css    # Component styles
```

---

## 🐛 Troubleshooting

### Components not initializing

**Issue:** Data attributes not working
**Solution:** Ensure scripts are loaded with `type="module"` and after DOM content

```html
<script type="module" src="components/dotted-glow-background.js"></script>
```

### Canvas not visible

**Issue:** Dotted background not showing
**Solution:** Ensure container has defined dimensions

```css
.container {
  position: relative;
  min-height: 400px; /* Required */
}
```

### Spotlight not following mouse

**Issue:** Card spotlight static
**Solution:** Check that card has `position: relative` and `overflow: hidden`

### Text not rendering

**Issue:** Text hover effect blank
**Solution:** Ensure container has sufficient height (min 200px)

---

## 🔄 Migration from Aceternity UI

These components are adapted from Aceternity UI with the following changes:

1. **No React dependency** - Pure vanilla TypeScript
2. **No build step** - Works directly in browser
3. **CTRC theme integration** - Uses project CSS variables
4. **Auto-initialization** - Data attribute support
5. **TypeScript types** - Full type safety

Original Aceternity components require React, Tailwind, and Framer Motion. These versions are standalone and optimized for MkDocs Material sites.

---

## 📚 Next Steps

### Wave 2 Components (Coming Soon)
- Animated Tabs
- Hover Border Cards
- Infinite Scroll

### Wave 3 Components (Planned)
- 3D Card Effect
- Parallax Scroll
- Animated Beam

---

## 📄 License

Adapted from [Aceternity UI](https://ui.aceternity.com) under MIT License.
CTRC Learning adaptation © 2026 Caution Tape Robotics Club.

---

## 🤝 Contributing

Found a bug? Have a suggestion?
Open an issue or submit a pull request on the [CTRC Learning repository](https://github.com/ctrc/CTRC-Learning).

---

**Built with ❤️ for CTRC Learning**
