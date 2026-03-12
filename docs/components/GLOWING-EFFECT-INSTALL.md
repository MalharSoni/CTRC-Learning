# Quick Installation Guide - Glowing Effect Component

## Step 1: Install Dependencies

```bash
npm install motion framer-motion clsx tailwind-merge
```

## Step 2: Verify Files

You should have these files in your project:

```
/docs/
  /components/
    glowing-effect.tsx           ← Main component
    glowing-effect-demo.tsx      ← Usage examples
    GLOWING-EFFECT-README.md     ← Full documentation
    GLOWING-EFFECT-INSTALL.md    ← This file
  /lib/
    utils.ts                     ← Already exists ✓
```

## Step 3: Test the Component

Create a test page to verify installation:

### Option A: Quick Test (Copy-Paste)

```tsx
import { GlowingEffect } from "./components/glowing-effect";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
      <div className="relative rounded-2xl border border-neutral-800 p-12 bg-black max-w-2xl">
        <GlowingEffect
          variant="green"
          spread={40}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={3}
          blur={2}
        />

        <div className="relative z-10">
          <h1 className="text-4xl font-black text-white mb-4">
            It Works! 🎉
          </h1>
          <p className="text-neutral-400">
            Move your mouse around this card to see the glowing effect in action.
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Option B: Full Demo Showcase

```tsx
import GlowingEffectShowcase from "./components/glowing-effect-demo";

export default function DemoPage() {
  return <GlowingEffectShowcase />;
}
```

## Step 4: Integrate into Your Site

### For MkDocs Material Sites

1. Check if your MkDocs setup supports React components
2. If using custom theme, add the component to your theme directory
3. Import and use in custom HTML templates

### For Next.js/React Apps

1. Move components to your standard component directory
2. Update import paths from `@/components/...` to match your setup
3. Use in any page or component

## Common Import Path Adjustments

If you get import errors, update these paths in `glowing-effect.tsx`:

```typescript
// Change this:
import { cn } from "@/lib/utils";

// To match your project structure, e.g.:
import { cn } from "../lib/utils";
// or
import { cn } from "../../lib/utils";
```

## Verify Dependencies

Run this to check if all packages are installed:

```bash
npm list motion framer-motion clsx tailwind-merge
```

Expected output:
```
├── motion@11.x.x
├── framer-motion@11.x.x
├── clsx@2.x.x
└── tailwind-merge@2.x.x
```

## Troubleshooting

### "Cannot find module 'motion'"

```bash
npm install motion framer-motion
```

### "cn is not defined"

Check that `/docs/lib/utils.ts` exists and contains the `cn` function.

### TypeScript errors

Make sure you have TypeScript installed if using `.tsx` files:

```bash
npm install -D typescript @types/react @types/node
```

### Effect not visible

1. Verify parent element has `relative` class
2. Check `disabled={false}` is set
3. Ensure dark background (effect works best on dark themes)

## Next Steps

- Read the full [GLOWING-EFFECT-README.md](./GLOWING-EFFECT-README.md) for detailed API docs
- Check [glowing-effect-demo.tsx](./glowing-effect-demo.tsx) for implementation examples
- Integrate into hero sections, CTA buttons, or course cards

## Quick Reference

### Minimal Setup

```tsx
<div className="relative rounded-xl border border-neutral-800 p-6 bg-black">
  <GlowingEffect variant="green" disabled={false} proximity={64} />
  <div className="relative z-10">Content here</div>
</div>
```

### Recommended Props

```tsx
variant="green"      // CTRC brand color
spread={35}          // Good default
proximity={64}       // Activates near element
inactiveZone={0.01}  // Minimal dead zone
borderWidth={2}      // Visible but not overwhelming
disabled={false}     // Enable the effect
```

---

**Need help?** Check the README or review the demo file for complete examples.
