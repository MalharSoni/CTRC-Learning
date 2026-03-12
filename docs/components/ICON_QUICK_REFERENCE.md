# Icon System Quick Reference

**Library:** Phosphor Icons | **Package:** `@phosphor-icons/react` | **Version:** 2.x

---

## Quick Usage

```tsx
// Import icons
import { BookOpen, Trophy, Robot, CheckCircle } from '@phosphor-icons/react'

// Use with size and weight
<BookOpen size={24} weight="regular" />
<Trophy size={32} weight="fill" color="#f5d000" />
<CheckCircle size={16} weight="fill" className="text-green-500" />
```

---

## Icon Mapping (Most Common)

| Use Case | Icon Name | Size | Weight | Color |
|----------|-----------|------|--------|-------|
| **Learn It** | `BookOpen` | 32 | regular | green |
| **Build It** | `Wrench` | 32 | regular | green |
| **Prove It** | `Trophy` | 32 | regular | green |
| **Completed** | `CheckCircle` | 32 | fill | green |
| **Current** | `CircleDashed` | 32 | bold | yellow |
| **Upcoming** | `Circle` | 32 | regular | gray |
| **Home** | `House` | 18 | regular | white |
| **Projects** | `FolderOpen` | 18 | regular | white |
| **Learning** | `BookOpen` | 18 | regular | white |
| **Search** | `MagnifyingGlass` | 16 | regular | gray |
| **Close** | `X` | 16 | regular | gray |
| **Menu** | `List` | 24 | regular | white |

---

## Size Presets

| Name | Pixels | Use Case |
|------|--------|----------|
| `xs` | 14 | Badges, inline |
| `sm` | 16 | Nav, buttons |
| `md` | 20 | Default |
| `lg` | 24 | Headers |
| `xl` | 32 | Hero icons |
| `2xl` | 40 | Large features |

---

## Weight Options

- `thin` — Ultra light
- `light` — Light
- `regular` — Default (use this most)
- `bold` — Emphasis
- `fill` — Solid fills (status icons)
- `duotone` — Two-tone (advanced)

---

## Color Presets

| Name | Hex | Usage |
|------|-----|-------|
| `green` | #00ff00 | Active, success, primary |
| `yellow` | #f5d000 | Warnings, current state |
| `gray` | #737373 | Secondary text, icons |
| `white` | #FFFFFF | Light theme text |
| `black` | #171717 | Dark theme text |

---

## Before → After Examples

### Status Icons
```tsx
// Before (emoji)
{status === "completed" && "✅"}

// After (Phosphor)
{status === "completed" && <CheckCircle size={32} weight="fill" className="text-green-500" />}
```

### Navigation
```tsx
// Before (Lucide)
import { Home, Menu } from "lucide-react"
<Home size={18} />
<Menu size={24} />

// After (Phosphor)
import { House, List } from "@phosphor-icons/react"
<House size={18} weight="regular" />
<List size={24} weight="regular" />
```

---

## Installation

```bash
npm install @phosphor-icons/react
```

---

## Documentation

- **Full Guide:** `/docs/components/ICON_SYSTEM.md`
- **Preview:** `/docs/components/ICON_PREVIEW.html`
- **Icons Library:** [phosphor-icons.com](https://phosphor-icons.com)

---

**Last Updated:** March 10, 2026
