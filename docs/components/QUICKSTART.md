# Feature Section - Quick Start (60 seconds)

## Step 1: Install Dependencies (20 seconds)

```bash
npm install framer-motion lucide-react
```

## Step 2: Copy Component (10 seconds)

The component is already at:
```
/Users/malharsoni/CTRC-Learning/docs/components/feature-section.tsx
```

## Step 3: Use in Your Page (30 seconds)

```tsx
// app/page.tsx or pages/index.tsx
import { FeatureSection } from "@/components/feature-section"

export default function HomePage() {
  return (
    <main>
      <FeatureSection />
    </main>
  )
}
```

## Done!

You now have a fully functional, auto-rotating feature showcase with:
- Learn It, Build It, Prove It cards
- Glassmorphic design with green accents
- Smooth animations
- Fully responsive

## Customize Later

Edit `/docs/components/feature-section.tsx` to change:
- Feature titles and descriptions (line 18-70)
- Colors (find/replace green-XXX)
- Icons (import from lucide-react)
- Auto-rotation speed (`autoPlayInterval` prop)

## Need Help?

- Full docs: `FEATURE_SECTION_README.md`
- Visual guide: `FEATURE_SECTION_VISUAL_GUIDE.md`
- Implementation details: `IMPLEMENTATION_SUMMARY.md`

---

**That's it!** Ship it and iterate. 🚀
