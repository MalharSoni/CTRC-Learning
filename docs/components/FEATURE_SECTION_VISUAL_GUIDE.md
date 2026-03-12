# Feature Section - Visual Guide

## Component Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Your Path to VEX Mastery                           │
│        A proven three-step framework used by                    │
│              championship teams                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│ ▓▓▓▓▓▓░░░░░░░░░░ │  │                   │  │                   │
│                   │  │                   │  │                   │
│   📖              │  │   🔧              │  │   🏆              │
│                   │  │                   │  │                   │
│   Learn It        │  │   Build It        │  │   Prove It        │
│                   │  │                   │  │                   │
│   Structured      │  │   Hands-on        │  │   Competition     │
│   curriculum...   │  │   projects...     │  │   challenges...   │
│                   │  │                   │  │                   │
│   Modules:   12+  │  │   Projects:   8+  │  │   Challenges: 25+ │
│   Levels:     3   │  │   Patterns:  15+  │  │   Certs:       6  │
│   Rate:      94%  │  │   CAD:       20+  │  │   Comps:  Monthly │
│                   │  │                   │  │                   │
│              ✓    │  │                   │  │                   │
└───────────────────┘  └───────────────────┘  └───────────────────┘
   ↑ Active (green         Inactive (gray        Inactive (gray
     border, scale 1.05)    border)               border)

┌─────────────────────────────────────────────────────────────────┐
│  Glassmorphic Detail Panel (with gradient background)          │
│                                                                 │
│  ┌──────────────┐                                              │
│  │ 📖 Learn It  │  Badge                                       │
│  └──────────────┘                                              │
│                                                                 │
│  Master the fundamentals through our expertly crafted          │
│  learning paths. From basic programming to advanced            │
│  autonomous routines, every lesson builds real skills.         │
│                                                                 │
│  [Start Learn It]  [View Details]                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

                    ━━━  ━  ━
                Navigation dots
             (elongated = active)
```

## State Behaviors

### Default State (Page Load)
- Feature 1 (Learn It) is active
- Progress bar starts filling
- Other cards at 60% opacity
- Detail panel shows "Learn It" content

### Auto-rotation (Every 4 seconds)
```
Time 0s:  [Learn It ▓▓▓░░░░░] → [Build It] → [Prove It]
Time 4s:  [Learn It] → [Build It ▓▓▓░░░░░] → [Prove It]
Time 8s:  [Learn It] → [Build It] → [Prove It ▓▓▓░░░░░]
Time 12s: [Learn It ▓▓▓░░░░░] → [Build It] → [Prove It]  (loop)
```

### User Interaction
1. **Click card** → Becomes active, timer resets
2. **Click dot** → Jump to feature, timer resets
3. **Hover card** → Slight scale up, border color shift

## Color Palette

### Active Card
- Background: `bg-white/90` (90% opacity white)
- Border: `border-green-500` (2px solid)
- Shadow: `shadow-xl shadow-green-100/50`
- Icon bg: `bg-green-50` with green shadow
- Progress: `bg-gradient-to-r from-green-500 to-green-600`

### Inactive Card
- Background: `bg-white/60` (60% opacity white)
- Border: `border-neutral-200`
- Hover border: `border-green-300`
- Icon bg: `bg-neutral-50`

### Detail Panel
- Background: `bg-gradient-to-br from-green-50 via-white to-green-50/50`
- Border: `border-green-200/50` (50% opacity)
- Shadow: `shadow-2xl shadow-green-100/30`
- Primary button: `bg-green-600 text-white`
- Secondary button: `bg-white border-neutral-200`

## Responsive Breakpoints

### Desktop (1024px+)
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Learn   │ │ Build   │ │ Prove   │
│ It      │ │ It      │ │ It      │
└─────────┘ └─────────┘ └─────────┘

┌─────────────────────────────────────┐
│         Detail Panel                │
└─────────────────────────────────────┘
```

### Tablet (768px - 1023px)
```
┌─────────┐ ┌─────────┐
│ Learn   │ │ Build   │
│ It      │ │ It      │
└─────────┘ └─────────┘

┌─────────┐
│ Prove   │
│ It      │
└─────────┘

┌─────────────────────────┐
│     Detail Panel        │
└─────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────┐
│ Learn   │
│ It      │
└─────────┘

┌─────────┐
│ Build   │
│ It      │
└─────────┘

┌─────────┐
│ Prove   │
│ It      │
└─────────┘

┌─────────────────┐
│  Detail Panel   │
└─────────────────┘
```

## Animation Timeline

### Card Click Animation (400ms)
```
0ms:   Old card active
       New card inactive

50ms:  Detail panel fades out (opacity 1 → 0)
       Detail panel slides left (x: 0 → -20px)

100ms: Detail panel content switches

150ms: Detail panel slides in (x: 20px → 0)
       Detail panel fades in (opacity 0 → 1)

200ms: New card scales up (1 → 1.05)
       New card border color shifts (neutral → green)

300ms: CheckCircle icon appears
       Progress bar resets

400ms: Animation complete
```

### Auto-advance Animation
```
0-3900ms:  Progress bar fills linearly (0% → 100%)

4000ms:    Same as card click animation
           Auto-advance to next feature
```

### Hover Animation (300ms)
```
0ms:   Card at rest

100ms: Scale increases (1 → 1.02)
       Border color lightens
       Shadow intensifies

300ms: Hover state stable
```

## Icon Colors

- **Learn It**: `text-green-500` (#22c55e)
- **Build It**: `text-green-600` (#16a34a)
- **Prove It**: `text-green-700` (#15803d)

All icons are Lucide React, size 32px (w-8 h-8)

## Typography Scale

```
Section Title:      text-4xl md:text-5xl lg:text-6xl font-black
Section Subtitle:   text-lg md:text-xl text-neutral-600

Card Title:         text-2xl font-bold
Card Description:   text-sm leading-relaxed
Card Stats Label:   text-xs font-medium text-neutral-500
Card Stats Value:   text-xs font-bold text-neutral-900

Panel Text:         text-xl md:text-2xl font-medium leading-relaxed
Badge Text:         text-lg font-bold

Button Text:        text-sm font-semibold
```

## Glassmorphism Effect

Achieved through:
1. Semi-transparent backgrounds (`bg-white/60`, `bg-white/90`)
2. Backdrop blur (`backdrop-blur-sm`)
3. Subtle borders (`border-neutral-200/50`)
4. Layered shadows with color tint (`shadow-green-100/50`)
5. Background gradient overlays

## Best Practices

### Content Length
- Title: 2-3 words max
- Description: 1 line (50-70 characters)
- Long description: 2-3 lines (150-200 characters)
- Stats: 2-4 metrics per feature

### Performance
- Auto-rotation pauses on tab unfocus
- Use optimized images (WebP, max 800px wide)
- Progress bar runs on CSS transition (GPU accelerated)

### Accessibility
- Maintain 4.5:1 contrast ratio (neutral-600 on white)
- Provide ARIA labels for dots
- Support keyboard navigation (Tab + Enter)
- Consider adding `prefers-reduced-motion` check

## File Locations

```
/docs/components/
├── feature-section.tsx              ← Main component
├── feature-section-demo.tsx         ← Usage example
├── FEATURE_SECTION_README.md        ← Installation guide
└── FEATURE_SECTION_VISUAL_GUIDE.md  ← This file
```

## Integration Checklist

- [ ] Install dependencies (framer-motion, lucide-react)
- [ ] Add component file to project
- [ ] Verify `cn()` utility exists
- [ ] Update feature content for your needs
- [ ] Test on mobile, tablet, desktop
- [ ] Verify auto-rotation works
- [ ] Check keyboard navigation
- [ ] Optimize images if using custom ones
- [ ] Add to homepage
- [ ] Test in production build

---

**Pro Tip**: Use browser DevTools to slow down animations (⌘+Shift+P → "Animations") and inspect the transition timeline.
