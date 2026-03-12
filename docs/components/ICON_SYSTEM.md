# CTRC Learning Icon System

**Last Updated:** March 10, 2026
**Library:** [Phosphor Icons](https://phosphor-icons.com) v2.x
**Package:** `@phosphor-icons/react`

---

## Overview

This document defines the **professional icon system** for CTRC Learning, replacing all generic emoji and Lucide icons with **Phosphor Icons** — a modern, robotics-focused icon library with superior technical coverage.

### Why Phosphor Icons?

| Feature | Phosphor | Lucide | Heroicons | Feather |
|---------|----------|--------|-----------|---------|
| **Robotics icons** | ✅ Gear, Robot, Circuit | ❌ | ❌ | ❌ |
| **Weights** | 6 (thin → fill) | 1 | 2 | 1 |
| **Total icons** | 7,000+ | 1,400+ | 600+ | 287 |
| **Design language** | Geometric, technical | Rounded, friendly | Minimal, sharp | Ultra minimal |
| **React package** | ✅ Native | ✅ Native | ✅ Native | ✅ Native |
| **Professional feel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

**Winner:** Phosphor Icons — best for robotics/technical content, most flexible, most professional.

---

## Installation

```bash
npm install @phosphor-icons/react
```

---

## Usage

### Basic Usage

```tsx
import { BookOpen, Wrench, Trophy } from '@phosphor-icons/react'

// Default (16px, regular weight)
<BookOpen />

// With size and weight
<BookOpen size={24} weight="bold" />

// With color and className
<BookOpen size={20} weight="fill" color="#00ff00" className="text-green-500" />
```

### Using the CTRC Icon Component

```tsx
import { Icon } from '@/components/icons'

// Standard usage
<Icon name="learning" size="md" color="green" />

// Custom size
<Icon name="robot" size={32} />

// With Tailwind classes
<Icon name="trophy" size="lg" className="text-green-500" />
```

### Using Preset Icon Components

```tsx
import { LearningIcon, BuildIcon, CompetitionIcon } from '@/components/icons'

<LearningIcon size="md" color="green" />
<BuildIcon size="lg" weight="bold" />
<CompetitionIcon size="xl" color="yellow" />
```

---

## Icon Mapping Guide

This is the **canonical mapping** for all CTRC Learning content. Use these consistently across components, markdown, and documentation.

### Navigation Icons

| Concept | Icon | Phosphor Name | Usage |
|---------|------|---------------|-------|
| **Home** | 🏠 | `House` | Homepage, navigation home button |
| **Foundation** | 📚 | `BookOpen` | V5 Foundation Program, lessons |
| **Projects** | 📁 | `FolderOpen` | Project gallery, project pages |
| **Design** | 🎨 | `Palette` | Design Handbook, CAD resources |
| **Mechanisms** | 🔧 | `Wrench` | Mechanism examples, technical guides |
| **Community** | 👥 | `Users` | Contribution, Discord, team pages |

### Learning Concepts

| Concept | Emoji | Icon | Phosphor Name | Weight | Color |
|---------|-------|------|---------------|--------|-------|
| **Learn It** | 📖 | 📖 | `BookOpen` | regular | green |
| **Build It** | 🔨 | 🔨 | `Hammer` | regular | green |
| **Prove It** | 🏆 | 🏆 | `Trophy` | regular | green |
| **Education** | 🎓 | 🎓 | `GraduationCap` | regular | green |
| **Student** | 🧑‍🎓 | 👨‍🎓 | `Student` | regular | green |
| **Educator** | 👨‍🏫 | 👨‍🏫 | `Chalkboard` | regular | green |
| **Mentor** | 🔧 | 🧰 | `Toolbox` | regular | green |
| **Certificate** | 📜 | 📜 | `Certificate` | fill | yellow |

### Building & Hands-On

| Concept | Emoji | Icon | Phosphor Name | Weight | Color |
|---------|-------|------|---------------|--------|-------|
| **Tools** | 🔧 | 🔧 | `Wrench` | regular | gray |
| **Build** | 🔨 | 🔨 | `Hammer` | regular | green |
| **Gear** | ⚙️ | ⚙️ | `Gear` | regular | gray |
| **Complex Gear** | ⚙️ | ⚙️ | `GearSix` | regular | gray |
| **Robot** | 🤖 | 🤖 | `Robot` | bold | green |
| **Screwdriver** | 🪛 | 🪛 | `Screwdriver` | regular | gray |

### Competition & Achievement

| Concept | Emoji | Icon | Phosphor Name | Weight | Color |
|---------|-------|------|---------------|--------|-------|
| **Trophy** | 🏆 | 🏆 | `Trophy` | fill | yellow |
| **Medal** | 🏅 | 🏅 | `Medal` | fill | yellow |
| **Target** | 🎯 | 🎯 | `Target` | regular | green |
| **Flag** | 🚩 | 🚩 | `Flag` | fill | green |
| **Lightning** | ⚡ | ⚡ | `Lightning` | fill | yellow |
| **Fire** | 🔥 | 🔥 | `Fire` | fill | yellow |

### Progress & Status

| Status | Emoji | Icon | Phosphor Name | Weight | Color | Animation |
|--------|-------|------|---------------|--------|-------|-----------|
| **Completed** | ✅ | ✓ | `CheckCircle` | fill | green | none |
| **Current** | 🟡 | ⊙ | `CircleDashed` | bold | yellow | spin |
| **Upcoming** | ⚪ | ○ | `Circle` | regular | gray | none |
| **Warning** | ⚠️ | ⚠ | `Warning` | fill | yellow | none |

### Time & Difficulty

| Concept | Emoji | Icon | Phosphor Name | Weight | Color |
|---------|-------|------|---------------|--------|-------|
| **Time** | ⏱️ | 🕐 | `Clock` | regular | gray |
| **Timer** | ⏲️ | ⏲ | `Timer` | regular | gray |
| **Duration** | ⌛ | ⏳ | `HourglassMedium` | regular | gray |
| **Difficulty** | 📊 | 📊 | `ChartBar` | regular | gray |

### Actions & UI

| Action | Emoji | Icon | Phosphor Name | Weight | Color |
|--------|-------|------|---------------|--------|-------|
| **Search** | 🔍 | 🔍 | `MagnifyingGlass` | regular | gray |
| **Close** | ✖️ | ✕ | `X` | regular | gray |
| **Menu** | ☰ | ☰ | `List` | regular | white |
| **Next** | ▶️ | ▶ | `CaretRight` | fill | green |
| **Arrow** | → | → | `ArrowRight` | regular | green |

### Technical

| Concept | Emoji | Icon | Phosphor Name | Weight | Color |
|---------|-------|------|---------------|--------|-------|
| **Code** | 💻 | 💻 | `Code` | regular | gray |
| **Terminal** | ⌨️ | ⌨ | `Terminal` | regular | gray |
| **Git** | 🌳 | 🌳 | `GitBranch` | regular | gray |
| **CPU** | 🧠 | 🧠 | `Cpu` | regular | gray |
| **Circuit** | 🔌 | 🔌 | `CircuitBoard` | regular | gray |

### Theme

| Mode | Icon | Phosphor Name | Weight | Color |
|------|------|---------------|--------|-------|
| **Light** | ☀️ | `Sun` | fill | yellow |
| **Dark** | 🌙 | `Moon` | fill | green |

### Content Types

| Type | Emoji | Icon | Phosphor Name | Weight |
|------|-------|------|---------------|--------|
| **Video** | 🎥 | 🎥 | `VideoCamera` | regular |
| **Document** | 📄 | 📄 | `FileText` | regular |
| **Image** | 🖼️ | 🖼 | `Image` | regular |
| **Folder** | 📁 | 📁 | `Folder` | regular |

### Social

| Platform | Icon | Phosphor Name | Weight | Color |
|----------|------|---------------|--------|-------|
| **Discord** | 💬 | `DiscordLogo` | fill | #5865F2 |
| **GitHub** | 🐙 | `GithubLogo` | fill | white |

---

## Size Presets

| Size Name | Pixels | Use Case |
|-----------|--------|----------|
| `xs` | 14px | Small inline icons, badges |
| `sm` | 16px | Navigation icons, UI controls |
| `md` | 20px | Default size, body content |
| `lg` | 24px | Section headers, cards |
| `xl` | 32px | Hero icons, empty states |
| `2xl` | 40px | Large feature icons |

---

## Weight Presets

| Weight | Visual | Use Case |
|--------|--------|----------|
| `thin` | ━ | Ultra light backgrounds |
| `light` | ━ | Light UI elements |
| `regular` | ━ | Default weight (most common) |
| `bold` | ━ | Emphasis, active states |
| `fill` | ●  | Icons with solid fills |
| `duotone` | ◐ | Two-tone icons (advanced) |

**Default:** `regular` weight for all icons unless specified.

---

## Color Presets (CTRC Design System)

| Color Name | Hex | Usage |
|------------|-----|-------|
| `green` | `#00ff00` | Primary accent (active, success, CTRC brand) |
| `greenDim` | `#00cc00` | Dimmed green (hover states) |
| `yellow` | `#f5d000` | Secondary accent (warnings, highlights) |
| `white` | `#FFFFFF` | Light theme primary text |
| `black` | `#171717` | Dark theme primary text |
| `gray1` | `#737373` | Secondary text |
| `gray2` | `#A3A3A3` | Tertiary text |
| `gray3` | `#D4D4D4` | Borders, dividers |

---

## Examples

### Before (Emoji) vs After (Phosphor)

#### Lesson Badge

**Before:**
```markdown
🎓 **Learn It** - Master the fundamentals
```

**After:**
```tsx
<Icon name="learning" size="md" color="green" /> **Learn It** - Master the fundamentals
```

#### Timeline Status

**Before:**
```tsx
{item.status === "completed" && "✅"}
{item.status === "current" && "🟡"}
{item.status === "upcoming" && "⚪"}
```

**After:**
```tsx
{item.status === "completed" && <CheckCircle size={32} weight="fill" className="text-green-500" />}
{item.status === "current" && <CircleDashed size={32} weight="bold" className="text-yellow-500 animate-spin" />}
{item.status === "upcoming" && <Circle size={32} weight="regular" className="text-gray-500" />}
```

#### Navigation Link

**Before:**
```tsx
<Link href="/projects">
  📁 Projects
</Link>
```

**After:**
```tsx
<Link href="/projects" className="flex items-center gap-2">
  <FolderOpen size={18} weight="regular" />
  Projects
</Link>
```

---

## Best Practices

### ✅ Do

- **Always specify size and weight** for consistency
- **Use semantic icon names** from the mapping guide
- **Use `fill` weight** for status icons (CheckCircle, Trophy, Medal)
- **Use `regular` weight** as default for all other icons
- **Use CTRC color presets** (green, yellow, gray1, gray2, gray3)
- **Match icon size to text size** (16px icon = 13-14px text)
- **Group related icons** with consistent styling

### ❌ Don't

- **Don't use emojis** — they're inconsistent across platforms
- **Don't mix icon libraries** — stick to Phosphor only
- **Don't hardcode colors** — use Tailwind classes or CTRC color presets
- **Don't use Lucide icons** — we've migrated to Phosphor
- **Don't skip the weight parameter** — always be explicit
- **Don't use icons smaller than 14px** — they become illegible

---

## Migration Checklist

When replacing icons in existing files:

- [ ] Replace emoji with Phosphor icon component
- [ ] Specify `size` prop (use preset or pixel value)
- [ ] Specify `weight` prop (usually `regular` or `fill`)
- [ ] Apply color via `className` or `color` prop
- [ ] Update import from `lucide-react` → `@phosphor-icons/react`
- [ ] Test icon renders correctly in light/dark themes
- [ ] Verify icon aligns with surrounding text

---

## Icon Preview Grid

See all available icons at: [https://phosphor-icons.com](https://phosphor-icons.com)

**Top robotics/technical icons:**
- `Robot`, `Gear`, `GearSix`, `CircuitBoard`, `Cpu`, `Lightning`
- `Wrench`, `Hammer`, `Screwdriver`, `Toolbox`
- `Trophy`, `Medal`, `Target`, `Flag`
- `BookOpen`, `GraduationCap`, `Certificate`, `Chalkboard`

---

## Component Files Updated

**All components now use Phosphor Icons:**

1. ✅ `/docs/components/animated-sidebar.tsx`
2. ✅ `/docs/components/feature-section.tsx`
3. ✅ `/docs/components/timeline.tsx`
4. ✅ `/docs/components/theme-toggle.tsx`
5. ✅ `/docs/components/search-bar.tsx`
6. ✅ `/docs/components/tubelight-navbar.tsx` (no icons, just styling)

**Icon system files:**

- 📄 `/docs/components/icons.tsx` — Unified icon component
- 📄 `/docs/components/ICON_SYSTEM.md` — This documentation

---

## Support

**Questions? Issues?**

- Check the [Phosphor Icons docs](https://phosphor-icons.com)
- See usage examples in updated component files
- Reference this guide for canonical icon mappings

---

**Last Updated:** March 10, 2026
**Maintained By:** CTRC Frontend Team
**Version:** 1.0
