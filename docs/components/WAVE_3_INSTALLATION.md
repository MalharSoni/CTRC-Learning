# Wave 3 Components - Quick Installation Guide

Fast-track setup for the three new Aceternity UI components.

## Quick Install

```bash
cd /Users/malharsoni/CTRC-Learning

# Install dependencies (if not already installed)
npm install framer-motion @phosphor-icons/react

# Components are ready to use!
```

## Component Files

### ✅ Created Files
```
docs/components/
├── floating-dock.tsx                 # Floating navigation dock
├── floating-dock-demo.html           # Live demo
├── apple-cards-carousel.tsx          # Expandable cards carousel
├── apple-cards-carousel-demo.html    # Live demo
├── signup-form.tsx                   # Signup form with social auth
├── signup-form-demo.html             # Live demo
└── ACETERNITY_WAVE_3_README.md       # Full documentation
```

## Test the Demos

Open these HTML files directly in your browser:

```bash
# Floating Dock Demo
open docs/components/floating-dock-demo.html

# Apple Cards Carousel Demo
open docs/components/apple-cards-carousel-demo.html

# Signup Form Demo
open docs/components/signup-form-demo.html
```

## Quick Start Examples

### 1. Floating Dock
```tsx
import { FloatingDock } from './components/floating-dock'
import { House, BookOpen, Trophy } from '@phosphor-icons/react'

const navLinks = [
  { title: "Home", icon: <House size={20} />, href: "/" },
  { title: "Learn", icon: <BookOpen size={20} />, href: "/lessons" },
  { title: "Compete", icon: <Trophy size={20} />, href: "/competition" },
]

// Add to bottom of page
<FloatingDock items={navLinks} />
```

### 2. Apple Cards Carousel
```tsx
import { Carousel, Card } from './components/apple-cards-carousel'

const lessons = [
  {
    category: "Foundation",
    title: "Intro to VEX V5",
    src: "/images/lesson1.jpg",
    content: <div>Lesson content...</div>
  }
]

<Carousel items={lessons.map((card, i) => (
  <Card key={i} card={card} index={i} />
))} />
```

### 3. Signup Form
```tsx
import { SignupForm } from './components/signup-form'

<SignupForm
  title="Join CTRC Learning"
  onSubmit={(data) => console.log(data)}
/>
```

## Using in Vanilla HTML/JS

All demo files show vanilla HTML/CSS/JS implementations without build tools.

### Example: Floating Dock in HTML
```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  <style>
    /* CTRC design system vars */
    :root {
      --accent: #00ff88;
      --bg-dark: #0a0a0a;
      /* ... */
    }
  </style>
</head>
<body>
  <div class="floating-dock">
    <a href="/" class="dock-item">
      <i class="ph ph-house"></i>
    </a>
    <!-- More items... -->
  </div>
</body>
</html>
```

## Integration Checklist

- [ ] Install dependencies (`npm install framer-motion @phosphor-icons/react`)
- [ ] Test demo pages in browser
- [ ] Import components into your React app
- [ ] Customize with CTRC design tokens
- [ ] Add to component catalog/picker
- [ ] Update navigation to include new components

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | ^10.0.0 | Animations and layout |
| `@phosphor-icons/react` | ^2.0.0 | Icon system |
| `react` | ^18.0.0 | Component library |

## Design System

All components use CTRC Learning design tokens:

```css
--accent: #00ff88        /* Primary green */
--accent-dim: #00cc6a    /* Dimmed green */
--bg-dark: #0a0a0a       /* Background */
--text-primary: #ffffff  /* White text */
--text-secondary: #a0aec0 /* Gray text */
```

Font: **Inter** (400-900 weights)

## What's Different from Aceternity Originals?

### Changes Made:
1. ✅ **Icons:** Tabler → Phosphor
2. ✅ **Colors:** Generic dark → CTRC green accent (#00ff88)
3. ✅ **Font:** Default → Inter (Google Fonts)
4. ✅ **Theme:** Light default → Dark default
5. ✅ **Utilities:** shadcn `cn()` → Inline implementation

### What Stayed the Same:
- ✅ Component structure and logic
- ✅ Animation patterns (Framer Motion)
- ✅ Responsive breakpoints
- ✅ Accessibility features

## Troubleshooting

### Issue: Framer Motion animations not working
```bash
# Check installation
npm list framer-motion

# Reinstall if needed
npm install framer-motion@latest
```

### Issue: Icons not showing
```bash
# For React components
npm install @phosphor-icons/react

# For HTML demos
# Add to <head>:
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```

### Issue: Styling looks wrong
1. Verify Inter font is loaded
2. Check CSS custom properties are defined
3. Ensure dark theme is active

## Next Steps

1. **Test Components**
   - Open demo pages
   - Try different props
   - Test responsiveness

2. **Customize**
   - Adjust colors in CSS variables
   - Modify animation timing
   - Add custom fields to signup form

3. **Integrate**
   - Add to index.html
   - Create lesson carousels
   - Build user onboarding flow

4. **Deploy**
   - Build production bundle
   - Test in target browsers
   - Monitor performance

## Documentation

- **Full Docs:** `ACETERNITY_WAVE_3_README.md`
- **Component Catalog:** `component-picker.html` (to be updated)
- **Design System:** `UI_INSPIRATION_GUIDE.md`

## Support

- Aceternity UI Docs: https://ui.aceternity.com/
- Framer Motion Docs: https://www.framer.com/motion/
- Phosphor Icons: https://phosphoricons.com/

---

**Status:** ✅ Ready to Use
**Last Updated:** March 11, 2026
