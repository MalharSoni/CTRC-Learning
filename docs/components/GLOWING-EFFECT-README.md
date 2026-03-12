# Glowing Effect Component

Interactive glowing border component adapted from [21st.dev Aceternity](https://21st.dev/community/components/aceternity/glowing-effect/default) for CTRC Learning.

## Features

- **Mouse-tracking glow** - Follows cursor with smooth animations
- **Green accent color** - Matches CTRC Learning brand (#00ff00)
- **Dark theme optimized** - Perfect for #0a0a0a background
- **Performance optimized** - Uses RequestAnimationFrame and memoization
- **Fully customizable** - Control spread, proximity, blur, and more
- **Smooth animations** - 150ms transitions (CTRC standard)

## Installation

### 1. Install Dependencies

```bash
npm install motion framer-motion
# or
pnpm add motion framer-motion
```

### 2. Add Utility Function

Create `/docs/lib/utils.ts` if it doesn't exist:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 3. Copy Component Files

- Copy `glowing-effect.tsx` to your components directory
- Copy `glowing-effect-demo.tsx` for usage examples

## Basic Usage

### Simple Implementation

```tsx
import { GlowingEffect } from "@/components/glowing-effect";

function MyCard() {
  return (
    <div className="relative rounded-xl border border-neutral-800 p-6 bg-black">
      <GlowingEffect
        variant="green"
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />

      <h3 className="text-white">Your Content Here</h3>
    </div>
  );
}
```

### Key Requirements

1. **Parent must be `relative`** - The effect uses absolute positioning
2. **Parent must have `rounded-*`** - The glow inherits border radius
3. **Set `disabled={false}`** - Enable the effect (disabled by default)

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "green" \| "white"` | `"green"` | Color scheme for the glow |
| `spread` | `number` | `20` | Angular spread of the glow cone (degrees) |
| `proximity` | `number` | `0` | Distance (px) from element to activate glow |
| `inactiveZone` | `number` | `0.7` | Center radius where glow is disabled (0-1) |
| `glow` | `boolean` | `false` | Show static fallback when JS disabled |
| `blur` | `number` | `0` | Blur amount in pixels |
| `borderWidth` | `number` | `1` | Thickness of the glowing border (px) |
| `movementDuration` | `number` | `2` | Animation duration in seconds |
| `disabled` | `boolean` | `true` | Disable the effect entirely |
| `className` | `string` | - | Additional Tailwind classes |

## Variants

### Green (CTRC Brand)

```tsx
<GlowingEffect variant="green" />
```

Green glow effect using:
- Primary: `#00ff00`
- Variation 1: `#00cc00`
- Variation 2: `#00aa00`

### White (Minimal)

```tsx
<GlowingEffect variant="white" />
```

Monochrome black/white gradient.

### Default (Colorful)

```tsx
<GlowingEffect variant="default" />
```

Multi-color gradient (pink, yellow, green, blue).

## Usage Examples

### Hero Section

```tsx
<section className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
  <div className="relative max-w-4xl">
    <div className="relative rounded-2xl border border-neutral-800 p-12 bg-black">
      <GlowingEffect
        variant="green"
        spread={40}
        glow={true}
        disabled={false}
        proximity={80}
        borderWidth={3}
        blur={2}
      />

      <div className="relative z-10">
        <h1 className="text-6xl font-black text-white">CTRC Learning</h1>
        <p className="text-xl text-neutral-400">Master robotics engineering</p>
      </div>
    </div>
  </div>
</section>
```

### CTA Button

```tsx
<div className="relative w-fit">
  <button className="relative rounded-xl border border-neutral-800 px-8 py-4 bg-black">
    <GlowingEffect
      variant="green"
      spread={30}
      disabled={false}
      proximity={64}
      borderWidth={2}
    />
    <span className="relative z-10 text-white font-bold">Start Learning</span>
  </button>
</div>
```

### Course Card

```tsx
<div className="relative rounded-xl border border-neutral-800 p-6 bg-black">
  <GlowingEffect
    variant="green"
    spread={35}
    disabled={false}
    proximity={56}
    borderWidth={2}
  />

  <div className="relative z-10">
    <span className="px-3 py-1 text-xs font-bold text-[#00ff00] bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-full">
      Foundation
    </span>
    <h3 className="text-2xl font-bold text-white mt-3">Mechanical Design</h3>
    <p className="text-neutral-400 mt-2">Learn CAD modeling and fabrication</p>
  </div>
</div>
```

## Recommended Settings

### For Large Cards (Hero, Feature Sections)

```tsx
<GlowingEffect
  variant="green"
  spread={40}
  proximity={80}
  borderWidth={3}
  blur={2}
/>
```

### For Medium Cards (Course Cards, Features)

```tsx
<GlowingEffect
  variant="green"
  spread={35}
  proximity={64}
  borderWidth={2}
/>
```

### For Buttons

```tsx
<GlowingEffect
  variant="green"
  spread={30}
  proximity={48}
  borderWidth={2}
/>
```

### For Subtle Effects

```tsx
<GlowingEffect
  variant="green"
  spread={25}
  proximity={56}
  borderWidth={1}
  blur={1}
/>
```

## Styling Tips

### Dark Theme (CTRC Standard)

```tsx
// Parent container
className="bg-[#0a0a0a]"

// Cards
className="bg-black border border-neutral-800"

// Text
className="text-white"        // Headings
className="text-neutral-400"  // Body text

// Accent text
className="text-[#00ff00]"
```

### Combine with Badges

```tsx
<span className="px-3 py-1 text-xs font-bold text-[#00ff00] bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-full">
  NEW
</span>
```

### Layering Content

Always wrap content in `relative z-10` to ensure it appears above the glow:

```tsx
<div className="relative rounded-xl border p-6 bg-black">
  <GlowingEffect {...props} />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</div>
```

## Performance Considerations

- Uses `RequestAnimationFrame` for smooth 60fps animations
- Memoized with `React.memo` to prevent unnecessary re-renders
- Passive event listeners for scroll and pointer move
- Automatic cleanup on unmount
- No performance impact when `disabled={true}`

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (14+)
- Mobile: Full touch support

## Accessibility

- Purely decorative - no ARIA needed
- Does not interfere with screen readers
- Does not affect keyboard navigation
- Can be disabled for reduced motion preferences (add custom logic)

## Troubleshooting

### Glow not appearing

1. Check parent has `relative` class
2. Ensure `disabled={false}`
3. Verify `proximity` value is set (try `64`)
4. Check `inactiveZone` is small enough (try `0.01`)

### Glow appears but doesn't follow cursor

1. Verify `motion` package is installed
2. Check console for errors
3. Ensure parent has proper dimensions

### Performance issues

1. Reduce `movementDuration` (try `1` instead of `2`)
2. Increase `inactiveZone` to reduce activation area
3. Limit number of active glows on screen simultaneously

## Credits

- Original component: [Aceternity UI on 21st.dev](https://21st.dev/community/components/aceternity/glowing-effect/default)
- Adapted for: CTRC Learning
- Green variant: Custom CTRC brand colors
- Date: March 2026

## License

This component is adapted from open-source work on 21st.dev. Check original licensing before commercial use.
