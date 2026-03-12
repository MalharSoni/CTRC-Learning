# Feature Section Component

A premium feature showcase component designed for the CTRC Learning homepage, highlighting the three-step learning framework: **Learn It**, **Build It**, and **Prove It**.

## Preview

![Feature Section](https://via.placeholder.com/1200x800/ffffff/22c55e?text=CTRC+Feature+Section)

## Features

- **Auto-rotation**: Cards automatically cycle every 4 seconds with visual progress bar
- **Interactive**: Click any card to view details and pause auto-rotation
- **Glassmorphic Design**: Modern frosted glass effect with backdrop blur
- **Green Accents**: CTRC brand color throughout (green-500, green-600, green-700)
- **Smooth Animations**: Framer Motion for buttery transitions
- **Fully Responsive**:
  - Desktop: 3-column grid
  - Tablet: 2-column grid
  - Mobile: Single column stack
- **Accessibility**: Keyboard navigation and ARIA labels

## Installation

### 1. Install Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### 2. Add Component Files

Copy these files to your project:
- `/docs/components/feature-section.tsx` - Main component
- `/docs/components/feature-section-demo.tsx` - Usage example

### 3. Ensure Utils Helper

Make sure you have the `cn()` utility:

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Usage

### Basic Usage

```tsx
import { FeatureSection } from "@/components/feature-section"

export default function HomePage() {
  return (
    <main>
      <FeatureSection />
    </main>
  )
}
```

### With Custom Auto-play Interval

```tsx
<FeatureSection autoPlayInterval={5000} /> {/* 5 seconds */}
```

### With Custom Styling

```tsx
<FeatureSection className="py-32 bg-gradient-to-b from-white to-green-50" />
```

## Component Structure

### Features Data

The component includes three pre-configured features:

1. **Learn It**
   - Icon: BookOpen (green-500)
   - Stats: 12+ modules, 3 skill levels, 94% completion
   - Focus: Structured curriculum

2. **Build It**
   - Icon: Wrench (green-600)
   - Stats: 8+ projects, 15+ patterns, 20+ CAD resources
   - Focus: Hands-on application

3. **Prove It**
   - Icon: Trophy (green-700)
   - Stats: 25+ challenges, 6 certifications, monthly competitions
   - Focus: Competition validation

### Props

```typescript
interface FeatureSectionProps {
  className?: string          // Additional Tailwind classes
  autoPlayInterval?: number   // Milliseconds (default: 4000)
}
```

## Customization Guide

### Change Feature Content

Edit the `features` array in `feature-section.tsx`:

```typescript
const features: Feature[] = [
  {
    id: "your-id",
    title: "Your Title",
    description: "Short description",
    longDescription: "Detailed explanation shown in panel",
    icon: <YourIcon className="w-8 h-8" />,
    iconColor: "text-green-500",
    stats: [
      { label: "Metric 1", value: "100+" },
      { label: "Metric 2", value: "50" },
    ],
  },
  // ... more features
]
```

### Change Color Scheme

Replace green colors with your brand color:

```typescript
// Find and replace:
green-50  → blue-50
green-100 → blue-100
green-200 → blue-200
green-500 → blue-500
green-600 → blue-600
green-700 → blue-700
```

### Adjust Animations

Modify Framer Motion props:

```typescript
// Faster transitions
transition={{ duration: 0.3 }}

// Bouncy effect
transition={{ type: "spring", stiffness: 200 }}

// No animations
initial={false}
animate={false}
```

## Design System

### Typography

- **Section Title**: 4xl-6xl, font-black, tracking-tight
- **Feature Title**: 2xl, font-bold
- **Description**: sm, leading-relaxed
- **Stats**: xs, font-medium/bold

### Spacing

- **Section Padding**: py-20, px-4-12 (responsive)
- **Card Padding**: p-8
- **Detail Panel**: p-10-14 (responsive)
- **Gap**: 6 (grid), 3-4 (buttons)

### Borders & Shadows

- **Active Card**: border-2 green-500, shadow-xl green-100/50
- **Inactive Card**: border-2 neutral-200, hover shadow-lg
- **Detail Panel**: border-2 green-200/50, shadow-2xl green-100/30

### Animations

- **Card Hover**: scale-105, border color change
- **Progress Bar**: Linear fill from 0-100%
- **Content Transition**: Fade + slide (x: 20px)
- **Active Indicator**: Spring animation

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires browser support for:
- CSS backdrop-filter (glassmorphism)
- CSS Grid
- Framer Motion (React 18+)

## Performance Notes

- Auto-rotation pauses when tab is not visible (browser optimization)
- Images should be optimized (WebP recommended)
- Consider lazy loading if below fold
- Animation runs at 60fps on modern devices

## Accessibility

- ✅ Keyboard navigation (click cards with Enter/Space)
- ✅ ARIA labels on navigation dots
- ✅ Focus indicators on interactive elements
- ✅ Color contrast meets WCAG AA
- ✅ Respects prefers-reduced-motion (add if needed)

## Troubleshooting

### Animations not working

Make sure Framer Motion is installed:
```bash
npm install framer-motion
```

### Icons not showing

Install Lucide React:
```bash
npm install lucide-react
```

### Glassmorphic effect not visible

Enable backdrop-filter in Tailwind config:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      }
    }
  }
}
```

### TypeScript errors

Ensure you have the correct types:
```bash
npm install -D @types/react @types/node
```

## Credits

- **Design Inspiration**: 21st.dev feature-section component by ayushmxxn
- **Adapted For**: CTRC Learning Platform
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS

## License

MIT - Use freely in your CTRC Learning projects.

---

**Questions?** Check the demo file or open an issue.
