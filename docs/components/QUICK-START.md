# Glowing Effect - Quick Start

## 1. Install (30 seconds)

```bash
npm install motion framer-motion clsx tailwind-merge
```

## 2. Copy This Code (60 seconds)

```tsx
import { GlowingEffect } from "./components/glowing-effect";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
      <div className="relative rounded-2xl border border-neutral-800 p-12 bg-black max-w-2xl">
        <GlowingEffect
          variant="green"
          spread={40}
          disabled={false}
          proximity={80}
          borderWidth={3}
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-black text-white mb-4">
            CTRC Learning
          </h1>
          <p className="text-neutral-400">
            Move your mouse to see the effect
          </p>
        </div>
      </div>
    </div>
  );
}
```

## 3. Use Presets (Fastest)

```tsx
import { GlowingEffect } from "./components/glowing-effect";
import { GlowPresets } from "./components/glowing-effect-presets";

// Hero section
<GlowingEffect {...GlowPresets.hero} />

// CTA button
<GlowingEffect {...GlowPresets.ctaButton} />

// Course card
<GlowingEffect {...GlowPresets.courseCard} />
```

## The Formula

```tsx
<div className="relative rounded-xl border border-neutral-800 p-6 bg-black">
  <GlowingEffect variant="green" disabled={false} proximity={64} />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>
```

## Essential Rules

1. Parent needs `relative` class
2. Set `disabled={false}` to enable
3. Wrap content in `relative z-10`
4. Works best on dark backgrounds

## Read More

- Full docs: [GLOWING-EFFECT-README.md](./GLOWING-EFFECT-README.md)
- Examples: [glowing-effect-demo.tsx](./glowing-effect-demo.tsx)
- Presets: [glowing-effect-presets.ts](./glowing-effect-presets.ts)
