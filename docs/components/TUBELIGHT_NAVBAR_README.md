# Tubelight Navbar Component

A sleek navigation component with animated green glowing underline effect, adapted from [21st.dev](https://21st.dev/community/components/ayushmxxn/tubelight-navbar/default) for CTRC Learning.

## Features

- **Green Tubelight Glow**: Multi-layered blur effect simulating a neon tubelight
- **Smooth Animations**: Framer Motion spring transitions between tabs
- **Hover States**: Subtle glow preview on hover
- **Responsive**: Works in horizontal nav bars or vertical sidebars
- **Flexible**: Supports icons, text-only, or both

## Installation

### 1. Install Dependencies

```bash
npm install framer-motion lucide-react
# or
pnpm add framer-motion lucide-react
```

### 2. Copy Component

Component is located at:
```
/Users/malharsoni/CTRC-Learning/docs/components/tubelight-navbar.tsx
```

### 3. Ensure `cn()` Utility Exists

The component uses a `cn()` utility for class merging. If you don't have it, create:

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install dependencies:
```bash
npm install clsx tailwind-merge
```

## Usage

### Basic Example

```tsx
import TubelightNavbar from '@/components/tubelight-navbar'
import { Home, BookOpen, Trophy } from 'lucide-react'

export function Navigation() {
  const items = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Courses', url: '/courses', icon: BookOpen },
    { name: 'Compete', url: '/compete', icon: Trophy },
  ]

  return <TubelightNavbar items={items} defaultActive="Home" />
}
```

### Text-Only Tabs

```tsx
const tabs = [
  { name: 'Overview', url: '#overview' },
  { name: 'Schedule', url: '#schedule' },
  { name: 'Resources', url: '#resources' },
]

<TubelightNavbar items={tabs} />
```

### Top Navigation Bar

```tsx
export function Topbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#171717] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <TubelightNavbar items={navItems} />
      </div>
    </nav>
  )
}
```

### Vertical Sidebar

```tsx
<TubelightNavbar
  items={sidebarItems}
  className="flex-col items-stretch gap-2"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NavItem[]` | **required** | Array of navigation items |
| `className` | `string` | `undefined` | Additional CSS classes |
| `defaultActive` | `string` | First item name | Initially active tab |

### NavItem Interface

```typescript
interface NavItem {
  name: string       // Display text
  url: string        // Link destination
  icon?: LucideIcon  // Optional Lucide icon
}
```

## Styling Customization

### Change Glow Color

Replace `#00ff00` (green) with your accent color:

```tsx
// In tubelight-navbar.tsx, find:
bg-[#00ff00]  // Replace with bg-[#YOUR_COLOR]
```

### Adjust Glow Intensity

Modify blur layers in the component:

```tsx
{/* Stronger glow: increase opacity */}
<div className="absolute w-full h-8 bg-[#00ff00]/50 rounded-full blur-lg -top-4" />

{/* Weaker glow: decrease opacity */}
<div className="absolute w-full h-8 bg-[#00ff00]/20 rounded-full blur-lg -top-4" />
```

### Dark/Light Theme Support

Replace hardcoded colors with CSS variables:

```tsx
// Replace:
className="text-white"
// With:
className="text-foreground"

// Replace:
className="bg-[#171717]"
// With:
className="bg-background"
```

## Animation Tuning

### Spring Settings

Adjust in the `transition` prop:

```tsx
transition={{
  type: "spring",
  stiffness: 380,  // Higher = snappier (default: 380)
  damping: 30,     // Higher = less bounce (default: 30)
}}
```

### Hover Fade Speed

Change hover animation duration:

```tsx
transition={{ duration: 0.2 }}  // 200ms (default)
```

## Integration with CTRC Design System

### Colors
- Background: `#171717` (--black)
- Text: `#FFFFFF` (white) active, `#A3A3A3` (--gray-2) inactive
- Glow: `#00ff00` (green accent)
- Hover bg: `#262626` (--black-2)

### Typography
- Font size: `13.5px` (nav item standard)
- Font weight: `500` (medium)
- Icon size: `16px`

### Spacing
- Padding: `py-2 px-4` (8px vertical, 16px horizontal)
- Gap between items: `gap-1` (4px)

## Examples

See complete usage examples in:
```
/Users/malharsoni/CTRC-Learning/docs/components/tubelight-navbar-example.tsx
```

Includes:
- Top navigation bar
- Simple tabs
- Vertical sidebar
- Full CTRC topbar integration

## Accessibility

- Uses semantic `<Link>` elements
- Keyboard navigable (native link behavior)
- ARIA roles inherited from Next.js Link
- Clear hover/active states for visual feedback

## Browser Support

- Modern browsers with CSS backdrop-filter support
- Framer Motion: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Fallback: Component renders without blur if not supported

## Performance

- **Optimized**: Uses `layoutId` for shared element transitions (no re-renders)
- **GPU Accelerated**: CSS transforms and filters
- **Minimal Re-renders**: State only updates on tab change

## Troubleshooting

### Glow not visible
- Ensure parent has dark background (`bg-[#171717]` or darker)
- Check z-index stacking (nav should be `z-50` or higher)

### Animation glitchy
- Verify `framer-motion` is installed
- Check for conflicting CSS transitions on parent elements

### Icons not showing
- Confirm `lucide-react` is installed
- Import icons correctly: `import { Home } from 'lucide-react'`

### TypeScript errors
- Ensure `@/lib/utils` path is configured in `tsconfig.json`
- Check `LucideIcon` type is imported

## Credits

Original component by [@ayushmxxn](https://21st.dev/community/components/ayushmxxn) on 21st.dev.
Adapted for CTRC Learning with green glow and design system integration.

## License

MIT (component code)
Adapt and modify as needed for your project.
