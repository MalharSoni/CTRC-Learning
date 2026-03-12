# CTRC Learning - Component Usage Guide

**Last Updated:** March 11, 2026
**Version:** 1.0

---

## Table of Contents

1. [Overview](#overview)
2. [Component Library](#component-library)
3. [Installation](#installation)
4. [Component Documentation](#component-documentation)
   - [1. Animated Sidebar](#1-animated-sidebar)
   - [2. Canvas Background](#2-canvas-background)
   - [3. Feature Section](#3-feature-section)
   - [4. Flip Button](#4-flip-button)
   - [5. Glowing Effect](#5-glowing-effect)
   - [6. Icon System](#6-icon-system)
   - [7. Search Bar](#7-search-bar)
   - [8. Theme Toggle](#8-theme-toggle)
   - [9. Timeline](#9-timeline)
5. [Best Practices](#best-practices)
6. [Customization Guide](#customization-guide)
7. [Troubleshooting](#troubleshooting)

---

## Overview

CTRC Learning includes **9 custom components** built with React/TypeScript and styled with Tailwind CSS. These components provide professional UI/UX patterns for educational content, interactive demos, and engaging user experiences.

### Design Philosophy

- **Professional over generic** - No AI-looking gradients or emoji overload
- **Performance first** - Pure CSS animations where possible, minimal JS
- **Accessibility** - Keyboard navigation, screen reader support, focus states
- **Mobile responsive** - All components work on mobile, tablet, and desktop
- **Dark mode compatible** - Components adapt to user's theme preference

---

## Component Library

| Component | Purpose | File | Dependencies |
|-----------|---------|------|--------------|
| **Animated Sidebar** | Collapsible navigation menu | `animated-sidebar.tsx` | Phosphor Icons |
| **Canvas Background** | Interactive mouse-reactive grid | `canvas-bg.tsx` | None (pure Canvas API) |
| **Feature Section** | Showcase features with icons and descriptions | `feature-section.tsx` | Phosphor Icons |
| **Flip Button** | 3D flip animation CTA buttons | `flip-button.tsx` | None (pure CSS) |
| **Glowing Effect** | Animated glow/highlight effects | `glowing-effect.tsx` | None |
| **Icon System** | Unified icon component with presets | `icons.tsx` | @phosphor-icons/react |
| **Search Bar** | Command-K style search with keyboard shortcuts | `search-bar.tsx` | Phosphor Icons |
| **Theme Toggle** | Dark/Light mode switch | `theme-toggle.tsx` | Phosphor Icons |
| **Timeline** | Visual progress indicator for courses | `timeline.tsx` | Phosphor Icons |

---

## Installation

### Global Setup (One-time)

```bash
cd /Users/malharsoni/CTRC-Learning/docs/components

# Install Phosphor Icons (required for 7 out of 9 components)
npm install @phosphor-icons/react

# Optional: Install other dependencies
npm install framer-motion  # For advanced animations
npm install clsx tailwind-merge  # For conditional styling
```

### Per-Component Install Scripts

Each component has an install script:

```bash
# Phosphor Icons (most components)
./install-phosphor-icons.sh

# Feature Section
./install-feature-section.sh

# Glowing Effect (tubelight navbar)
./install-tubelight-deps.sh
```

---

## Component Documentation

---

## 1. Animated Sidebar

**File:** `animated-sidebar.tsx`

**Purpose:** Collapsible sidebar navigation with smooth animations, perfect for mobile-first designs.

### Features

- Hamburger menu toggle
- Smooth slide-in/slide-out animation
- Overlay backdrop on mobile
- Active link highlighting
- Keyboard accessible (Esc to close)
- Phosphor Icons integration

### Usage

```tsx
import AnimatedSidebar from '@/components/animated-sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex">
      <AnimatedSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
```

### Props

```typescript
interface AnimatedSidebarProps {
  className?: string      // Additional CSS classes
  defaultOpen?: boolean   // Start open on desktop
}
```

### Customization

**Change navigation items:**

```tsx
const navItems = [
  { label: 'Home', href: '/', icon: House },
  { label: 'Foundation', href: '/foundation', icon: BookOpen },
  { label: 'Projects', href: '/projects', icon: FolderOpen },
  { label: 'Handbook', href: '/design-handbook', icon: Palette },
  { label: 'Examples', href: '/mechanism-examples', icon: Wrench },
  { label: 'Community', href: '/contribution', icon: Users },
]
```

**Change colors:**

```tsx
// Active link
className="bg-green-500/10 text-green-500 border-l-2 border-green-500"

// Hover state
className="hover:bg-gray-100 dark:hover:bg-gray-800"
```

### Best Practices

- Use for sites with 5-10 navigation items
- Always include a "Home" link
- Group related items with section headers
- Test on mobile (< 768px width)

---

## 2. Canvas Background

**File:** `canvas-bg.tsx`

**Purpose:** Mouse-reactive animated grid background for hero sections and landing pages.

### Features

- Particle grid animation
- Mouse attraction effect (particles follow cursor)
- Subtle glow around cursor
- Pure Canvas API (no dependencies)
- Performance optimized (60fps on modern devices)
- Dark mode compatible

### Usage

```tsx
import CanvasBackground from '@/components/canvas-bg'

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <CanvasBackground />
      <div className="relative z-10">
        <h1>Your Content Here</h1>
      </div>
    </div>
  )
}
```

### Props

```typescript
interface CanvasBackgroundProps {
  gridSize?: number      // Default: 40 (spacing between points)
  maxDistance?: number   // Default: 150 (mouse attraction radius)
  accentColor?: string   // Default: '#00ff88' (glow color)
  opacity?: number       // Default: 0.03 (grid line opacity)
}
```

### Customization Examples

**Green glow (CTRC brand):**
```tsx
<CanvasBackground accentColor="#00ff88" />
```

**Blue glow (cool tech vibe):**
```tsx
<CanvasBackground accentColor="#0080ff" />
```

**Tighter grid:**
```tsx
<CanvasBackground gridSize={30} />
```

**Stronger mouse effect:**
```tsx
<CanvasBackground maxDistance={200} />
```

### Performance Notes

- Automatically adjusts particle count for screen size
- Uses `requestAnimationFrame` for smooth 60fps
- Pauses when tab is inactive (battery saving)
- For best performance, limit to 1 instance per page

### Best Practices

- Use only on hero/landing sections
- Ensure content has `z-10` or higher to stay above canvas
- Test on mobile (can be CPU-intensive on older devices)
- Consider adding a "Reduce motion" toggle for accessibility

---

## 3. Feature Section

**File:** `feature-section.tsx`

**Purpose:** Showcase key features with icons, titles, and descriptions in a responsive grid.

### Features

- Responsive grid (1-4 columns based on screen size)
- Icon + Title + Description pattern
- Hover effects with scale and glow
- Phosphor Icons integration
- Semantic HTML for accessibility

### Usage

```tsx
import FeatureSection from '@/components/feature-section'

const features = [
  {
    icon: BookOpen,
    title: 'Learn It',
    description: 'Structured curriculum from zero to competition-ready',
  },
  {
    icon: Wrench,
    title: 'Build It',
    description: 'Hands-on projects with CAD, code, and real robots',
  },
  {
    icon: Trophy,
    title: 'Prove It',
    description: 'Challenge yourself with real competitions',
  },
]

export default function HomePage() {
  return <FeatureSection features={features} />
}
```

### Props

```typescript
interface Feature {
  icon: React.ComponentType<{ size?: number; weight?: string }>
  title: string
  description: string
  color?: string  // Optional: custom accent color
}

interface FeatureSectionProps {
  features: Feature[]
  columns?: 2 | 3 | 4          // Default: 3
  iconSize?: number            // Default: 32
  className?: string
}
```

### Customization Examples

**2-column layout:**
```tsx
<FeatureSection features={features} columns={2} />
```

**Larger icons:**
```tsx
<FeatureSection features={features} iconSize={48} />
```

**Custom colors per feature:**
```tsx
const features = [
  { icon: BookOpen, title: 'Learn', description: '...', color: '#00ff88' },
  { icon: Wrench, title: 'Build', description: '...', color: '#0080ff' },
]
```

### Best Practices

- Limit to 3-6 features per section
- Keep descriptions under 15 words
- Use filled icons for emphasis (e.g., `weight="fill"`)
- Use semantic section structure for SEO

---

## 4. Flip Button

**File:** `flip-button.tsx` (React) or `flip-button.css` (Pure CSS)

**Purpose:** Eye-catching 3D flip animation for primary CTAs.

### Features

- 3D perspective flip on hover
- Three variants: Primary, Secondary, Outline
- Pure CSS (no JavaScript required)
- Keyboard accessible
- Scale animations on hover/active
- CTRC green color scheme

### Usage (Pure CSS - Recommended for MkDocs)

```html
<div class="flip-button-container">
  <a href="/foundation/" class="flip-button flip-button-primary">
    <span class="flip-button-front">Start Learning</span>
    <span class="flip-button-back">Let's Go! →</span>
  </a>
</div>
```

### Usage (React Component)

```tsx
import FlipButton from '@/components/flip-button'

export default function Hero() {
  return (
    <FlipButton
      href="/foundation/"
      variant="primary"
      frontText="Start Learning"
      backText="Let's Go! →"
    />
  )
}
```

### Props (React)

```typescript
interface FlipButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  frontText: string
  backText: string
  className?: string
  animateIn?: boolean  // Entrance animation
}
```

### Variants

| Variant | Background | Text | Border | Use Case |
|---------|-----------|------|--------|----------|
| **primary** | Green (#00ff00) | Dark (#171717) | Green | Main CTAs |
| **secondary** | Dark (#171717) | Green (#00ff00) | Green | Secondary actions |
| **outline** | Transparent | Green (#00ff00) | Green | Tertiary actions |

### Pre-configured CTAs

```html
<!-- Start Learning (Primary) -->
<div class="flip-button-container">
  <a href="foundation/" class="flip-button flip-button-primary">
    <span class="flip-button-front">Start Learning</span>
    <span class="flip-button-back">Let's Go! →</span>
  </a>
</div>

<!-- View Projects (Secondary) -->
<div class="flip-button-container">
  <a href="projects/" class="flip-button flip-button-secondary">
    <span class="flip-button-front">View Projects</span>
    <span class="flip-button-back">Explore Now →</span>
  </a>
</div>

<!-- Explore Handbook (Outline) -->
<div class="flip-button-container">
  <a href="design-handbook/" class="flip-button flip-button-outline">
    <span class="flip-button-front">Explore Handbook</span>
    <span class="flip-button-back">Read More →</span>
  </a>
</div>
```

### Best Practices

- Use sparingly (1-3 per page)
- Primary variant for main CTA only
- Keep text short (2-4 words)
- Use arrows (→) on back text for directional cue
- Test on mobile (hover = tap on touch devices)

---

## 5. Glowing Effect

**File:** `glowing-effect.tsx`

**Purpose:** Animated glow/tubelight effect for highlights, emphasis, and navbar items.

### Features

- Smooth animated glow
- Customizable color, intensity, duration
- Presets for common use cases
- Pure CSS animations (performant)
- Works on any element (text, cards, buttons, navbar)

### Usage

```tsx
import { GlowingText, GlowingCard, GlowingButton } from '@/components/glowing-effect'

// Text with glow
<GlowingText color="green" intensity="high">
  Featured Section
</GlowingText>

// Card with border glow
<GlowingCard>
  <h3>Premium Feature</h3>
  <p>Description here...</p>
</GlowingCard>

// Button with glow
<GlowingButton href="/signup">
  Get Started
</GlowingButton>
```

### Props

```typescript
interface GlowingEffectProps {
  color?: 'green' | 'blue' | 'purple' | 'yellow' | string
  intensity?: 'low' | 'medium' | 'high'
  duration?: number       // Animation duration in seconds
  className?: string
  children: React.ReactNode
}
```

### Presets

```tsx
import { glowPresets } from '@/components/glowing-effect-presets'

// Use preset
<div className={glowPresets.green.high}>
  Glowing text
</div>
```

Available presets:
- `glowPresets.green.low/medium/high`
- `glowPresets.blue.low/medium/high`
- `glowPresets.purple.low/medium/high`
- `glowPresets.yellow.low/medium/high`

### Tubelight Navbar Example

```tsx
import TubelightNavbar from '@/components/tubelight-navbar'

const navItems = [
  { label: 'Foundation', href: '/foundation' },
  { label: 'Projects', href: '/projects' },
  { label: 'Handbook', href: '/design-handbook' },
]

<TubelightNavbar items={navItems} activeColor="green" />
```

### Best Practices

- Use high intensity sparingly (draws attention)
- Medium intensity for section headers
- Low intensity for subtle accents
- Limit to 1-2 glowing elements per viewport
- Consider "Reduce motion" preference

---

## 6. Icon System

**File:** `icons.tsx`

**Purpose:** Unified icon component with Phosphor Icons, presets, and consistent sizing.

### Features

- 50+ icon mappings
- Size presets (xs, sm, md, lg, xl, 2xl)
- Weight presets (thin, light, regular, bold, fill, duotone)
- Color presets (CTRC design system)
- Preset components for common use cases

### Usage

```tsx
import { Icon, LearningIcon, BuildIcon, CompetitionIcon } from '@/components/icons'

// Generic icon component
<Icon name="learning" size="md" color="green" />

// Preset components
<LearningIcon size="lg" />
<BuildIcon size="md" />
<CompetitionIcon size="sm" />
```

### Icon Mapping

| Concept | Icon Name | Phosphor Icon |
|---------|-----------|---------------|
| Learning | `learning` | `BookOpen` |
| Building | `building` | `Hammer` |
| Competition | `competition` | `Trophy` |
| Robot | `robot` | `Robot` |
| Gear | `gear` | `Gear` |
| Code | `code` | `Code` |
| Student | `student` | `GraduationCap` |
| Educator | `educator` | `Chalkboard` |
| Mentor | `mentor` | `Toolbox` |

Full mapping in `/docs/components/ICON_SYSTEM.md`

### Size Reference

| Size | Pixels | Use Case |
|------|--------|----------|
| xs | 12px | Table icons, inline text |
| sm | 16px | Buttons, nav items |
| md | 20px | Section headers |
| lg | 24px | Feature cards |
| xl | 32px | Hero sections |
| 2xl | 48px | Large displays |

### Direct Phosphor Usage

```tsx
import { BookOpen, Trophy, Gear } from '@phosphor-icons/react'

<BookOpen size={24} weight="regular" color="#00ff88" />
<Trophy size={32} weight="fill" className="text-yellow-500" />
<Gear size={20} weight="bold" />
```

### Best Practices

- Use preset components for common icons
- Consistent sizing within a section
- Use `weight="fill"` for status icons (completed, success)
- Use `weight="bold"` for active/current state
- Use `weight="regular"` for default UI

---

## 7. Search Bar

**File:** `search-bar.tsx`

**Purpose:** Command-K style search interface with keyboard shortcuts and quick results.

### Features

- Keyboard shortcut (Cmd+K / Ctrl+K)
- Fuzzy search across all content
- Quick links to popular pages
- Recent searches
- Keyboard navigation (arrow keys, Enter, Esc)
- Icons for result types (page, component, lesson)

### Usage

```tsx
import SearchBar from '@/components/search-bar'

export default function Layout() {
  return (
    <header>
      <SearchBar />
    </header>
  )
}
```

### Props

```typescript
interface SearchBarProps {
  placeholder?: string          // Default: "Search documentation..."
  shortcut?: 'mod+k' | string  // Default: 'mod+k' (Cmd/Ctrl+K)
  maxResults?: number          // Default: 8
  className?: string
}
```

### Search Index

The search bar uses MkDocs' built-in search index (`search/search_index.json`).

To customize indexed content, add to frontmatter:

```markdown
---
title: Foundation Program
search:
  boost: 2
  exclude: false
---
```

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Cmd+K` / `Ctrl+K` | Open search |
| `↑` / `↓` | Navigate results |
| `Enter` | Go to selected result |
| `Esc` | Close search |

### Best Practices

- Place in top navigation for easy access
- Keep placeholder text short and clear
- Limit results to 8-10 for scannability
- Group results by type (lessons, projects, reference)

---

## 8. Theme Toggle

**File:** `theme-toggle.tsx`

**Purpose:** Switch between dark and light mode with smooth transitions.

### Features

- Sun/Moon icon toggle
- Smooth color transitions
- Persists preference to localStorage
- Respects system preference on first visit
- Accessible (ARIA labels, keyboard support)

### Usage

```tsx
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    <nav>
      <div className="nav-links">
        {/* Other nav items */}
        <ThemeToggle />
      </div>
    </nav>
  )
}
```

### Props

```typescript
interface ThemeToggleProps {
  className?: string
  defaultTheme?: 'light' | 'dark' | 'system'
}
```

### Customization

**Change icon size:**
```tsx
<ThemeToggle className="w-10 h-10" />
```

**Default to dark mode:**
```tsx
<ThemeToggle defaultTheme="dark" />
```

### CSS Variables

The component toggles a `dark` class on `<html>`. Define CSS variables:

```css
:root {
  --bg: #ffffff;
  --text: #171717;
  --accent: #00ff88;
}

.dark {
  --bg: #0a0f14;
  --text: #ffffff;
  --accent: #00ff88;
}
```

### Best Practices

- Place in top-right corner of navigation
- Use filled icons (Sun/Moon with `weight="fill"`)
- Ensure all components respect theme preference
- Test color contrast in both modes (WCAG AA)

---

## 9. Timeline

**File:** `timeline.tsx`

**Purpose:** Visual progress indicator for course units, lessons, and challenges.

### Features

- Three states: Completed, Current, Upcoming
- Animated icons (spin for current state)
- Vertical connector lines
- Responsive (mobile-friendly)
- Semantic HTML for screen readers

### Usage

```tsx
import Timeline from '@/components/timeline'

const units = [
  {
    id: 1,
    title: 'Unit 1: Drivetrain Mastery',
    status: 'completed',
    completedLessons: 7,
    totalLessons: 7,
  },
  {
    id: 2,
    title: 'Unit 2: Programming (LemLib)',
    status: 'current',
    completedLessons: 3,
    totalLessons: 7,
  },
  {
    id: 3,
    title: 'Unit 3: Onshape CAD',
    status: 'upcoming',
    completedLessons: 0,
    totalLessons: 8,
  },
]

<Timeline items={units} />
```

### Props

```typescript
interface TimelineItem {
  id: number | string
  title: string
  status: 'completed' | 'current' | 'upcoming'
  completedLessons?: number
  totalLessons?: number
  description?: string
  link?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
  showProgress?: boolean  // Show X/Y lessons
}
```

### Status Icons

| Status | Icon | Color | Animation |
|--------|------|-------|-----------|
| Completed | CheckCircle (filled) | Green | None |
| Current | CircleDashed | Yellow | Spin |
| Upcoming | Circle | Gray | None |

### Customization Examples

**Horizontal timeline (desktop):**
```tsx
<Timeline items={units} className="flex-row" />
```

**Hide progress numbers:**
```tsx
<Timeline items={units} showProgress={false} />
```

**Custom colors:**
```css
.timeline-item[data-status="completed"] .timeline-icon {
  color: #00ff88;
}
.timeline-item[data-status="current"] .timeline-icon {
  color: #f5d000;
}
```

### Best Practices

- Use for 3-7 items (more = too cluttered)
- Always show current progress clearly
- Link completed items to review pages
- Disable links for upcoming items
- Animate only current state (avoid distraction)

---

## Best Practices

### Component Selection

| Use Case | Recommended Component |
|----------|----------------------|
| Hero CTA | Flip Button (Primary) |
| Navigation | Animated Sidebar |
| Feature showcase | Feature Section |
| Course progress | Timeline |
| Search | Search Bar |
| Background effect | Canvas Background |
| Emphasis | Glowing Effect |
| Icons | Icon System |
| Theme switch | Theme Toggle |

### Performance

- Limit Canvas Background to 1 per page
- Use CSS animations over JS when possible
- Lazy load components below fold
- Optimize icon bundle (import only used icons)

### Accessibility

- Always include ARIA labels
- Test keyboard navigation
- Ensure color contrast (WCAG AA minimum)
- Provide "Reduce motion" alternatives
- Use semantic HTML

### Mobile Optimization

- Test all components at 375px width (iPhone SE)
- Use touch-friendly sizes (44px minimum tap target)
- Avoid hover-only interactions
- Test on real devices (not just Chrome DevTools)

---

## Customization Guide

### Changing Colors

**Global CSS variables** (`docs/stylesheets/extra.css`):

```css
:root {
  --accent: #00ff88;        /* CTRC green */
  --accent-dim: #00cc6a;
  --accent-dark: #00994f;
}
```

**Component-level** (Tailwind):

```tsx
<Icon name="learning" className="text-blue-500" />
<FlipButton variant="primary" className="bg-blue-500 hover:bg-blue-600" />
```

### Changing Fonts

All components use Inter font (Google Fonts).

To change globally, update `docs/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update CSS:

```css
body {
  font-family: 'Space Grotesk', sans-serif;
}
```

### Adding Custom Components

1. Create file in `docs/components/your-component.tsx`
2. Use existing patterns (Phosphor Icons, Tailwind)
3. Add README in `docs/components/YOUR_COMPONENT_README.md`
4. Test on mobile, tablet, desktop
5. Add to this guide

---

## Troubleshooting

### Icons Not Rendering

**Problem:** Phosphor Icons not found

**Solution:**
```bash
cd docs/components
npm install @phosphor-icons/react
```

### Flip Button Not Flipping

**Problem:** CSS not loaded

**Solution:**
Verify `mkdocs.yml` includes:
```yaml
extra_css:
  - stylesheets/flip-button.css
```

### Canvas Background Laggy

**Problem:** Too many particles or old device

**Solution:**
Reduce grid density:
```tsx
<CanvasBackground gridSize={60} />  // Fewer particles
```

### Timeline Not Responsive

**Problem:** Fixed width container

**Solution:**
Add responsive wrapper:
```tsx
<div className="max-w-4xl mx-auto px-4">
  <Timeline items={units} />
</div>
```

### Search Not Working

**Problem:** Search index not generated

**Solution:**
```bash
mkdocs build  # Generates search/search_index.json
mkdocs serve  # Test locally
```

---

## Resources

### Component Documentation
- **Icon System:** `/docs/components/ICON_SYSTEM.md`
- **Flip Button:** `/docs/components/flip-button-README.md`
- **Glowing Effect:** `/docs/components/GLOWING-EFFECT-README.md`
- **Feature Section:** `/docs/components/FEATURE_SECTION_README.md`
- **Sidebar:** `/docs/components/SIDEBAR_README.md`
- **Tubelight Navbar:** `/docs/components/TUBELIGHT_NAVBAR_README.md`

### External Resources
- **Phosphor Icons:** https://phosphoricons.com
- **Tailwind CSS:** https://tailwindcss.com
- **MkDocs Material:** https://squidfunk.github.io/mkdocs-material/

---

**Component library complete.** Build beautiful, performant learning experiences with CTRC Learning components.
