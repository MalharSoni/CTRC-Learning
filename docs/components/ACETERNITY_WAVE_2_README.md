# Aceternity UI - Wave 2 Components

**Implementation Date:** March 11, 2026
**Components Implemented:** 3
**Status:** ✅ Complete

## Overview

This is the second wave of Aceternity UI components adapted for the CTRC Learning platform. All components have been customized to work with:

- **Phosphor Icons** (instead of Lucide)
- **Inter font** family
- **Dark theme** with `--accent: #00ff88`
- **Existing design system** (CSS variables from index.html)

---

## Components Implemented

### 1. Animated Modal

**File:** `animated-modal.tsx`
**Demo:** `animated-modal-demo.tsx`
**Original:** https://ui.aceternity.com/components/animated-modal

#### Features
- ✅ Compound component pattern (Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter)
- ✅ Smooth spring-based animations using Framer Motion
- ✅ Outside-click detection to close modal
- ✅ Escape key support
- ✅ Body scroll lock when open
- ✅ Backdrop blur effect
- ✅ Fully responsive

#### Usage

```tsx
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./components/animated-modal";

<Modal>
  <ModalTrigger>
    Open Modal
  </ModalTrigger>

  <ModalBody>
    <ModalContent>
      <h2>Modal Title</h2>
      <p>Your content here...</p>
    </ModalContent>

    <ModalFooter>
      <button>Cancel</button>
      <button>Confirm</button>
    </ModalFooter>
  </ModalBody>
</Modal>
```

#### Props

**ModalTrigger:**
- `children`: ReactNode - Button content
- `className`: string (optional) - Additional classes

**ModalBody:**
- `children`: ReactNode - Modal content
- `className`: string (optional) - Additional classes for modal container

**ModalContent:**
- `children`: ReactNode - Main content area
- `className`: string (optional) - Additional classes

**ModalFooter:**
- `children`: ReactNode - Footer content (typically buttons)
- `className`: string (optional) - Additional classes

#### Demo Features

The demo (`animated-modal-demo.tsx`) showcases:
- Animated trigger button with icon transition
- Feature grid with staggered animations
- Image gallery with hover effects
- Footer with action buttons
- VEX V5 learning content example

---

### 2. Sticky Scroll Reveal

**File:** `sticky-scroll-reveal.tsx`
**Demo:** `sticky-scroll-reveal-demo.tsx`
**Original:** https://ui.aceternity.com/components/sticky-scroll-reveal

#### Features
- ✅ Scroll-based content reveal
- ✅ Sticky visual panel on desktop
- ✅ Active section tracking based on scroll position
- ✅ Animated background gradients per section
- ✅ Opacity transitions for text
- ✅ Fully responsive (stacks on mobile)

#### Usage

```tsx
import { StickyScrollReveal } from "./components/sticky-scroll-reveal";

const content = [
  {
    title: "Section 1",
    description: "Description of section 1...",
    content: (
      <div>Your visual content here</div>
    ),
  },
  {
    title: "Section 2",
    description: "Description of section 2...",
    content: (
      <div>Different visual</div>
    ),
  },
  // ... more sections
];

<StickyScrollReveal content={content} />
```

#### Props

**StickyScrollReveal:**
- `content`: Array<StickyScrollContent> - Array of content objects
- `contentClassName`: string (optional) - Additional classes for sticky visual container

**StickyScrollContent Interface:**
```typescript
interface StickyScrollContent {
  title: string;           // Section heading
  description: string;     // Section description text
  content?: ReactNode;     // Visual content (optional)
}
```

#### Demo Features

The demo includes:
- 4 sections showcasing VEX learning journey
- Phosphor icon illustrations
- Smooth scroll progress tracking
- Dynamic gradient backgrounds
- Responsive layout

---

### 3. Hover Border Gradient

**File:** `hover-border-gradient.tsx`
**Demo:** `hover-border-gradient-demo.tsx`
**Original:** https://ui.aceternity.com/components/hover-border-gradient

#### Features
- ✅ Animated rotating gradient border
- ✅ Hover state acceleration
- ✅ Configurable rotation speed
- ✅ Clockwise/counter-clockwise direction
- ✅ Works with any border radius
- ✅ Flexible element type (button, div, etc.)

#### Usage

```tsx
import { HoverBorderGradient } from "./components/hover-border-gradient";

<HoverBorderGradient
  containerClassName="rounded-full"
  className="bg-[var(--bg-dark-2)] text-white"
  duration={1}
  clockwise={true}
>
  Button Text
</HoverBorderGradient>
```

#### Props

**HoverBorderGradient:**
- `children`: ReactNode - Button content
- `containerClassName`: string (optional) - Classes for outer container
- `className`: string (optional) - Classes for inner content area
- `as`: React.ElementType (optional) - HTML element type (default: "button")
- `duration`: number (optional) - Animation cycle duration in seconds (default: 1)
- `clockwise`: boolean (optional) - Rotation direction (default: true)
- `...props`: Additional HTML attributes

#### Demo Features

The demo shows:
- 5 different button styles
- Various durations and directions
- Icon integrations
- Pill and rounded variants
- Large CTA button example

---

## Installation

### Dependencies

All three components require these npm packages:

```bash
npm install framer-motion @phosphor-icons/react clsx tailwind-merge
```

### Dependency Details

| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | Latest | Animation library for React |
| `@phosphor-icons/react` | Latest | Icon library (CTRC standard) |
| `clsx` | Latest | Conditional class names |
| `tailwind-merge` | Latest | Merge Tailwind classes (for cn()) |

### Files Created

```
docs/components/
├── animated-modal.tsx                    # Modal component
├── animated-modal-demo.tsx               # Modal demo/example
├── sticky-scroll-reveal.tsx              # Sticky scroll component
├── sticky-scroll-reveal-demo.tsx         # Sticky scroll demo
├── hover-border-gradient.tsx             # Gradient button component
├── hover-border-gradient-demo.tsx        # Gradient button demo
├── aceternity-wave-2-preview.html        # Visual preview of all components
├── ACETERNITY_WAVE_2_README.md           # This file
└── lib-utils-cn.ts                       # Already exists (cn() utility)
```

---

## Design System Integration

All components use CTRC Learning's design system:

### CSS Variables Used

```css
--accent: #00ff88          /* Primary accent color */
--accent-dim: #00cc6a      /* Dimmed accent */
--accent-dark: #00994f     /* Dark accent */
--bg-dark: #0a0a0a         /* Main background */
--bg-dark-2: #0f0f0f       /* Secondary background */
--bg-dark-3: #141414       /* Tertiary background */
--text-primary: #ffffff    /* Primary text */
--text-secondary: #a0aec0  /* Secondary text */
--text-tertiary: #718096   /* Tertiary text */
--border: rgba(255, 255, 255, 0.08)  /* Border color */
--shadow: 0 4px 24px rgba(0, 0, 0, 0.4)      /* Standard shadow */
--shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.6)  /* Large shadow */
```

### Typography

- **Font Family:** Inter (weights 400-900)
- **Body Text:** 13px, weight 400
- **Button Text:** 13px, weight 600
- **Headings:** Various sizes, weight 700-900

### Spacing & Borders

- **Border Radius:** 6-12px (cards/modals use 10-12px, buttons use 6px)
- **Padding:** 16-20px for cards, 8-12px for buttons
- **Transitions:** 150ms (standard), 100ms (fast)

---

## Usage in MkDocs Material Site

### Option 1: Static HTML Preview

Open the preview file directly:

```
/docs/components/aceternity-wave-2-preview.html
```

This shows all three components in a styled preview page.

### Option 2: Integrate into Pages

Since this is a static MkDocs site, you'll need to:

1. **Build components as standalone modules** (already done)
2. **Include in HTML pages** via script tags or build process
3. **Use demo files as reference** for implementation patterns

### Example Integration

```html
<!-- In your HTML file -->
<script type="module">
  import { Modal, ModalTrigger, ModalBody, ModalContent } from './components/animated-modal.tsx';
  // Use components here
</script>
```

Or bundle them with a build tool like Vite/esbuild.

---

## Component Customization

### Changing Colors

All components use CSS variables, so you can override globally:

```css
:root {
  --accent: #ff00ff;  /* Change to purple */
}
```

Or override per component:

```tsx
<HoverBorderGradient
  className="bg-blue-500 text-white"
>
  Custom Colors
</HoverBorderGradient>
```

### Adjusting Animations

**Modal:**
```tsx
// Edit animated-modal.tsx, line ~94
transition={{
  type: "spring",
  damping: 30,      // Increase for less bounce
  stiffness: 400,   // Increase for faster animation
}}
```

**Sticky Scroll:**
```tsx
// Edit sticky-scroll-reveal-demo.tsx
// Adjust section spacing by changing .my-20 class
```

**Hover Gradient:**
```tsx
<HoverBorderGradient
  duration={2}        // Slower animation
  clockwise={false}   // Reverse direction
>
  ...
</HoverBorderGradient>
```

---

## Accessibility

### Keyboard Support

- **Modal:** Escape key closes modal
- **Hover Gradient:** Works as standard button (Space/Enter)

### Screen Readers

- Modal includes proper ARIA roles (implemented via semantic HTML)
- All interactive elements are keyboard accessible

### Focus Management

- Modal traps focus when open
- Close button is clearly visible and accessible

---

## Browser Compatibility

All components work in:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Framer Motion requires modern browsers with ES6+ support.

---

## Performance Considerations

### Optimizations Applied

1. **Sticky Scroll:** Uses `useScroll` hook for efficient scroll tracking
2. **Animations:** GPU-accelerated transforms (scale, opacity)
3. **Modal:** Unmounts when closed (no DOM bloat)
4. **Hover Gradient:** CSS filter blur (hardware accelerated)

### Best Practices

- Keep modal content lightweight
- Limit sticky scroll to 4-6 sections
- Use hover gradient sparingly (not for every button)

---

## Troubleshooting

### Issue: Modal doesn't close on outside click

**Solution:** Ensure `useOutsideClick` hook is properly attached to modal ref.

### Issue: Sticky scroll visual doesn't stick

**Solution:** Check parent container has defined height and `overflow-y: auto`.

### Issue: Gradient animation stutters

**Solution:** Reduce complexity of content inside button, ensure no heavy re-renders.

### Issue: Icons don't show up

**Solution:** Verify `@phosphor-icons/react` is installed and imported correctly.

---

## Next Steps

### Wave 3 Components (Future)

Consider implementing:
- 3D Card Effect
- Animated Tabs
- Parallax Scroll
- Infinite Moving Cards
- Spotlight Effect

### Enhancements

- Add TypeScript strict mode
- Create Storybook documentation
- Add unit tests with Vitest
- Create component playground

---

## Credits

**Original Components:** [Aceternity UI](https://ui.aceternity.com)
**Adapted By:** CTRC Learning Team
**Icons:** [Phosphor Icons](https://phosphoricons.com)
**Animation:** [Framer Motion](https://www.framer.com/motion/)

---

## License

These components are adapted from Aceternity UI (MIT License) for use in the CTRC Learning platform. See original components for licensing details.

---

## Support

For questions or issues:
1. Check demo files for implementation examples
2. Review this README for configuration options
3. Inspect preview HTML for visual reference
4. Consult Framer Motion docs for animation customization

**Last Updated:** March 11, 2026
