# Wave 3 Components - Quick Reference Card

One-page reference for the three new Aceternity UI components.

---

## 1. Floating Dock ⚓

**Purpose:** macOS-style floating navigation with magnification effect

### Basic Usage
```tsx
import { FloatingDock } from './floating-dock'
import { House, BookOpen, Trophy } from '@phosphor-icons/react'

const links = [
  { title: "Home", icon: <House size={20} />, href: "/" },
  { title: "Learn", icon: <BookOpen size={20} />, href: "/lessons" },
  { title: "Compete", icon: <Trophy size={20} />, href: "/competition" },
]

<FloatingDock items={links} />
```

### Props
```typescript
interface DockItem {
  title: string        // Tooltip text
  icon: ReactNode      // Phosphor icon
  href: string         // Link URL
}

interface FloatingDockProps {
  items: DockItem[]
  desktopClassName?: string
  mobileClassName?: string
}
```

### Common Patterns
```tsx
// Fixed to bottom of page
<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
  <FloatingDock items={navLinks} />
</div>

// Custom positioning
<FloatingDock
  items={navLinks}
  desktopClassName="custom-desktop"
  mobileClassName="translate-y-20"
/>
```

---

## 2. Apple Cards Carousel 🎠

**Purpose:** Horizontal carousel with expandable card modals

### Basic Usage
```tsx
import { Carousel, Card } from './apple-cards-carousel'

const cards = [
  {
    category: "Foundation",
    title: "Intro to VEX V5",
    src: "/images/lesson1.jpg",
    content: <LessonContent />
  }
]

<Carousel items={cards.map((card, i) => (
  <Card key={i} card={card} index={i} />
))} />
```

### Props
```typescript
type CardType = {
  src: string          // Image URL
  title: string        // Card title
  category: string     // Accent label
  content: ReactNode   // Modal content
}

interface CardProps {
  card: CardType
  index: number
  layout?: boolean     // Enable layout animations
}

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}
```

### Common Patterns
```tsx
// With layout animations
<Card card={cardData} index={0} layout={true} />

// Custom initial scroll
<Carousel items={cards} initialScroll={400} />

// Lesson browser
const lessons = lessonsData.map((lesson, i) => (
  <Card
    key={lesson.id}
    card={{
      category: lesson.module,
      title: lesson.title,
      src: lesson.thumbnail,
      content: <LessonDetail lesson={lesson} />
    }}
    index={i}
  />
))
```

---

## 3. Signup Form 📝

**Purpose:** Animated signup form with social auth

### Basic Usage
```tsx
import { SignupForm } from './signup-form'

<SignupForm
  title="Join CTRC Learning"
  onSubmit={(data) => console.log(data)}
/>
```

### Props
```typescript
interface SignupFormProps {
  title?: string
  subtitle?: string
  onSubmit?: (data: FormData) => void
  showSocialAuth?: boolean
  fields?: Array<{
    id: string
    label: string
    type: string
    placeholder: string
    required?: boolean
  }>
}
```

### Common Patterns
```tsx
// Custom fields
const customFields = [
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "robotbuilder",
    required: true
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true
  }
]

<SignupForm fields={customFields} showSocialAuth={false} />

// Standalone Input/Label
import { Input, Label } from './signup-form'

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />

// With submit handler
<SignupForm
  onSubmit={async (formData) => {
    const data = Object.fromEntries(formData)
    await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }}
/>
```

---

## Design Tokens

```css
/* Colors */
--accent: #00ff88        /* CTRC green */
--accent-dim: #00cc6a
--bg-dark: #0a0a0a
--text-primary: #ffffff
--text-secondary: #a0aec0
--border: rgba(255, 255, 255, 0.08)

/* Effects */
backdrop-filter: blur(16px);
box-shadow: 0 0 20px rgba(0, 255, 136, 0.3); /* glow */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Installation

```bash
npm install framer-motion @phosphor-icons/react
```

---

## Demo Pages

```bash
# Open in browser
open docs/components/floating-dock-demo.html
open docs/components/apple-cards-carousel-demo.html
open docs/components/signup-form-demo.html
```

---

## Common Icon Imports

```tsx
import {
  House,           // Home
  BookOpen,        // Learn
  FolderOpen,      // Projects
  Palette,         // Design
  Wrench,          // Build
  Trophy,          // Compete
  Users,           // Community
  GithubLogo,      // GitHub
  GoogleLogo,      // Google
  DiscordLogo,     // Discord
} from '@phosphor-icons/react'
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Icons not showing | `npm install @phosphor-icons/react` |
| Animations broken | `npm install framer-motion` |
| Font not loading | Add Inter from Google Fonts |
| Backdrop blur not working | Add `-webkit-backdrop-filter` |

---

## File Locations

```
docs/components/
├── floating-dock.tsx
├── floating-dock-demo.html
├── apple-cards-carousel.tsx
├── apple-cards-carousel-demo.html
├── signup-form.tsx
├── signup-form-demo.html
├── ACETERNITY_WAVE_3_README.md          # Full docs
├── WAVE_3_INSTALLATION.md               # Install guide
├── WAVE_3_IMPLEMENTATION_SUMMARY.md     # Detailed summary
└── WAVE_3_QUICK_REFERENCE.md            # This file
```

---

**Version:** 1.0 | **Date:** March 11, 2026 | **Status:** ✅ Production Ready
