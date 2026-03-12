# CTRC Learning Search Bar

A Raycast-inspired command palette / search bar component for CTRC Learning platform.

## Features

- **Fuzzy search** - Find content even with partial or misspelled queries
- **Keyboard navigation** - Arrow keys to navigate, Enter to select, Esc to close
- **Quick access** - Open with `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- **Categorized results** - Lessons, Projects, and Design Handbook sections
- **Dark theme** - Matches CTRC branding with green accent highlights
- **Smooth animations** - Powered by Framer Motion

## Installation

### 1. Install dependencies

```bash
npm install framer-motion lucide-react
# or
yarn add framer-motion lucide-react
# or
pnpm add framer-motion lucide-react
```

### 2. Copy the component

Copy `search-bar.tsx` to your components directory:

```
/components/search-bar.tsx
```

## Usage

### Basic Usage

```tsx
import { CTRCSearchBar } from "@/components/search-bar"

export default function Page() {
  return (
    <div>
      <CTRCSearchBar />
    </div>
  )
}
```

### With Navigation Handler

```tsx
"use client"

import { useRouter } from "next/navigation"
import { CTRCSearchBar } from "@/components/search-bar"

export default function Page() {
  const router = useRouter()

  const handleSelect = (item) => {
    router.push(item.url)
  }

  return <CTRCSearchBar onSelect={handleSelect} />
}
```

### Custom Search Items

```tsx
import { CTRCSearchBar } from "@/components/search-bar"
import { BookOpen, FileCode } from "lucide-react"

const customItems = [
  {
    id: "custom-1",
    label: "Custom Lesson",
    description: "Your custom content",
    category: "lesson",
    icon: <BookOpen className="h-4 w-4 text-emerald-500" />,
    url: "/custom/lesson",
  },
  // ... more items
]

export default function Page() {
  return <CTRCSearchBar items={customItems} />
}
```

## Component Props

### `CTRCSearchBar`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SearchItem[]` | Default CTRC items | Array of searchable items |
| `onSelect` | `(item: SearchItem) => void` | `undefined` | Callback when item is selected |

### `SearchItem` Type

```typescript
interface SearchItem {
  id: string                    // Unique identifier
  label: string                 // Display name
  description: string           // Secondary text
  category: "lesson" | "project" | "handbook"
  icon: React.ReactNode        // Icon component
  shortcut?: string            // Optional keyboard shortcut display
  url: string                  // Navigation URL
}
```

## Keyboard Shortcuts

- `Cmd+K` / `Ctrl+K` - Open/close search
- `↑` / `↓` - Navigate results
- `Enter` - Select highlighted item
- `Esc` - Close search

## Customization

### Colors

The component uses CTRC brand colors:
- **Primary**: Emerald green (`emerald-500`)
- **Background**: Neutral dark (`neutral-900`)
- **Text**: White/neutral grays

To customize, edit the className strings in `search-bar.tsx`:

```tsx
// Change highlight color from emerald to blue
bg-emerald-500/10 border-emerald-500
// to
bg-blue-500/10 border-blue-500
```

### Categories

Add new categories by:

1. Update the `category` type in `SearchItem`:
```typescript
category: "lesson" | "project" | "handbook" | "your-category"
```

2. Add category label in `getCategoryLabel()`:
```typescript
case "your-category":
  return "Your Category"
```

3. Initialize in `groupedItems`:
```typescript
const groups: Record<string, SearchItem[]> = {
  lesson: [],
  project: [],
  handbook: [],
  "your-category": [],
}
```

## Default Search Items

The component comes with CTRC Learning content:

**Lessons:**
- Unit 1.1 - Introduction to Robotics
- Unit 1.2 - Building Basics
- Unit 2.1 - Programming Fundamentals
- Unit 2.3 - Advanced Sensors
- Unit 3.1 - Competition Strategy

**Projects:**
- BattleBots Project
- Autonomous Challenge
- High Stakes Competition Bot

**Design Handbook:**
- Design Process
- Gear Ratios Guide
- PID Control
- Troubleshooting Guide

## Styling

The component is styled with Tailwind CSS utility classes. Make sure your `tailwind.config.js` includes:

```js
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    // ... your other paths
  ],
  theme: {
    extend: {
      // Optional: extend colors if needed
    },
  },
}
```

## License

MIT - Feel free to use in your CTRC Learning projects.
