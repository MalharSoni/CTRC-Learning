# Tubelight Glow Customization Guide

Complete reference for customizing the green glow effect in the tubelight navbar.

## Glow Anatomy

The tubelight effect is created with 4 layered blur elements:

```tsx
{/* Layer 1: Outermost glow (softest) */}
<div className="absolute w-full h-8 bg-[#00ff00]/30 rounded-full blur-lg -top-4" />

{/* Layer 2: Mid glow */}
<div className="absolute w-full h-6 bg-[#00ff00]/40 rounded-full blur-md -top-3" />

{/* Layer 3: Inner glow */}
<div className="absolute w-full h-4 bg-[#00ff00]/60 rounded-full blur-sm -top-2" />

{/* Layer 4: Core light bar */}
<div className="absolute w-full h-2 bg-[#00ff00] rounded-full" />
```

## Color Presets

### Green (Default - CTRC Style)
```tsx
bg-[#00ff00]  // Pure green
```

### Blue (Tech/Corporate)
```tsx
bg-[#3B82F6]  // Tailwind blue-500
```

### Purple (Creative/Premium)
```tsx
bg-[#A855F7]  // Tailwind purple-500
```

### Red (Urgent/Alerts)
```tsx
bg-[#EF4444]  // Tailwind red-500
```

### Yellow (Energy/Warning)
```tsx
bg-[#F59E0B]  // Tailwind amber-500
```

### Cyan (Modern/Clean)
```tsx
bg-[#06B6D4]  // Tailwind cyan-500
```

## Intensity Presets

### Subtle Glow (Professional)
```tsx
<div className="absolute w-full h-8 bg-[#00ff00]/15 rounded-full blur-lg -top-4" />
<div className="absolute w-full h-6 bg-[#00ff00]/25 rounded-full blur-md -top-3" />
<div className="absolute w-full h-4 bg-[#00ff00]/40 rounded-full blur-sm -top-2" />
<div className="absolute w-full h-2 bg-[#00ff00] rounded-full" />
```

### Medium Glow (Default)
```tsx
<div className="absolute w-full h-8 bg-[#00ff00]/30 rounded-full blur-lg -top-4" />
<div className="absolute w-full h-6 bg-[#00ff00]/40 rounded-full blur-md -top-3" />
<div className="absolute w-full h-4 bg-[#00ff00]/60 rounded-full blur-sm -top-2" />
<div className="absolute w-full h-2 bg-[#00ff00] rounded-full" />
```

### Intense Glow (Dramatic)
```tsx
<div className="absolute w-full h-8 bg-[#00ff00]/50 rounded-full blur-lg -top-4" />
<div className="absolute w-full h-6 bg-[#00ff00]/70 rounded-full blur-md -top-3" />
<div className="absolute w-full h-4 bg-[#00ff00]/90 rounded-full blur-sm -top-2" />
<div className="absolute w-full h-2 bg-[#00ff00] rounded-full shadow-[0_0_10px_#00ff00]" />
```

## Size Variations

### Thin Glow (Minimalist)
```tsx
<div className="absolute w-full h-6 bg-[#00ff00]/30 rounded-full blur-md -top-3" />
<div className="absolute w-full h-4 bg-[#00ff00]/40 rounded-full blur-sm -top-2" />
<div className="absolute w-full h-1 bg-[#00ff00] rounded-full" />
```

### Thick Glow (Bold)
```tsx
<div className="absolute w-full h-12 bg-[#00ff00]/30 rounded-full blur-xl -top-6" />
<div className="absolute w-full h-8 bg-[#00ff00]/40 rounded-full blur-lg -top-4" />
<div className="absolute w-full h-6 bg-[#00ff00]/60 rounded-full blur-md -top-3" />
<div className="absolute w-full h-3 bg-[#00ff00] rounded-full" />
```

## Position Variations

### Top Glow (Default)
```tsx
className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%]"
// Glow appears below the tab
```

### Side Glow (Vertical Nav)
```tsx
className="absolute -left-1 top-1/2 -translate-y-1/2 h-[70%] w-[2px]"
// Glow appears on left edge (rotate blur layers)
```

### Surrounding Glow (Badge Style)
```tsx
className="absolute inset-0 rounded-full"
// Glow surrounds entire element
```

## Animation Speed Presets

### Fast (Snappy)
```tsx
transition={{
  type: "spring",
  stiffness: 500,
  damping: 35,
}}
```

### Medium (Default - Smooth)
```tsx
transition={{
  type: "spring",
  stiffness: 380,
  damping: 30,
}}
```

### Slow (Elegant)
```tsx
transition={{
  type: "spring",
  stiffness: 200,
  damping: 25,
}}
```

### Elastic (Bouncy)
```tsx
transition={{
  type: "spring",
  stiffness: 300,
  damping: 15,
}}
```

## Hover Effect Variations

### Subtle Hover (Default)
```tsx
{isHovered && !isActive && (
  <motion.div
    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#00ff00]/40 rounded-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute w-full h-4 bg-[#00ff00]/20 rounded-full blur-sm -top-2" />
  </motion.div>
)}
```

### Strong Hover
```tsx
{isHovered && !isActive && (
  <motion.div
    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#00ff00]/60 rounded-full"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.15 }}
  >
    <div className="absolute w-full h-6 bg-[#00ff00]/30 rounded-full blur-md -top-3" />
    <div className="absolute w-full h-4 bg-[#00ff00]/40 rounded-full blur-sm -top-2" />
  </motion.div>
)}
```

### No Hover (Active Only)
```tsx
// Simply remove the hover state block entirely
```

## Real-World Examples

### Example 1: Corporate Blue (LinkedIn Style)
```tsx
// Change #00ff00 to #0A66C2 throughout
bg-[#0A66C2]     // LinkedIn blue
bg-[#0A66C2]/30  // Soft glow
bg-[#0A66C2]/40  // Mid glow
bg-[#0A66C2]/60  // Inner glow
```

### Example 2: Gaming RGB (Razer Style)
```tsx
// Cycle through colors with animation
bg-[#00ff00]  // Green
bg-[#00ffff]  // Cyan (use animate with Framer Motion)
bg-[#ff00ff]  // Magenta
```

### Example 3: Minimalist White
```tsx
bg-white        // Core
bg-white/30     // Outer glow
bg-white/50     // Mid glow
bg-white/80     // Inner glow
```

## Tailwind Config Integration

For better maintainability, add glow colors to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'glow': {
          DEFAULT: '#00ff00',
          'soft': 'rgba(0, 255, 0, 0.3)',
          'mid': 'rgba(0, 255, 0, 0.5)',
          'strong': 'rgba(0, 255, 0, 0.8)',
        }
      }
    }
  }
}
```

Then use:
```tsx
bg-glow         // #00ff00
bg-glow-soft    // rgba(0, 255, 0, 0.3)
bg-glow-mid     // rgba(0, 255, 0, 0.5)
bg-glow-strong  // rgba(0, 255, 0, 0.8)
```

## CSS Variables Approach

For dynamic theming:

```css
/* globals.css */
:root {
  --glow-color: 0 255 0;  /* RGB values */
}

.dark {
  --glow-color: 0 255 0;
}
```

```tsx
// Component
className="bg-[rgb(var(--glow-color))]"
className="bg-[rgb(var(--glow-color)_/_0.3)]"  // 30% opacity
```

## Performance Tips

1. **Reduce blur layers**: Use 2-3 instead of 4 for better performance
2. **Use will-change**: Add `will-change-transform` to animated elements
3. **Optimize blur**: `blur-sm` is faster than `blur-xl`
4. **GPU acceleration**: Ensure transform properties are used

```tsx
className="will-change-transform transform-gpu"
```

## Accessibility Considerations

- Ensure sufficient contrast between text and background
- Test with reduced motion preferences:

```tsx
className="motion-reduce:transition-none"
```

- Provide non-color indicators (icons, text) alongside glow

## Browser Compatibility

- **Backdrop blur**: Not supported in Firefox (use solid fallback)
- **CSS filters**: Supported in all modern browsers
- **Framer Motion**: IE11 not supported (use static fallback)

## Quick Copy-Paste Snippets

### Full Green Glow (Active State)
```tsx
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#00ff00] rounded-full">
  <div className="absolute w-full h-8 bg-[#00ff00]/30 rounded-full blur-lg -top-4" />
  <div className="absolute w-full h-6 bg-[#00ff00]/40 rounded-full blur-md -top-3" />
  <div className="absolute w-full h-4 bg-[#00ff00]/60 rounded-full blur-sm -top-2" />
</div>
```

### Hover Preview Glow
```tsx
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#00ff00]/40 rounded-full">
  <div className="absolute w-full h-4 bg-[#00ff00]/20 rounded-full blur-sm -top-2" />
</div>
```

### Side Glow (Vertical)
```tsx
<div className="absolute -left-1 top-1/2 -translate-y-1/2 h-[70%] w-[2px] bg-[#00ff00] rounded-full">
  <div className="absolute h-full w-8 bg-[#00ff00]/30 rounded-full blur-lg -left-4" />
  <div className="absolute h-full w-6 bg-[#00ff00]/40 rounded-full blur-md -left-3" />
  <div className="absolute h-full w-4 bg-[#00ff00]/60 rounded-full blur-sm -left-2" />
</div>
```

---

**Pro Tip**: Start with the default settings and adjust one property at a time. Small opacity changes (5-10%) have big visual impact.
