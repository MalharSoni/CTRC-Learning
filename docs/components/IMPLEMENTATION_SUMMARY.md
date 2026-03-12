# CTRC Search Bar - Implementation Summary

## Overview

Implemented a Raycast-inspired command palette / search bar component for CTRC Learning, adapted from the 21st.dev action search bar component.

## Files Created

1. **`/Users/malharsoni/CTRC-Learning/docs/components/search-bar.tsx`** (Main Component)
   - Full-featured search component with fuzzy search
   - Keyboard navigation (arrow keys, enter, escape)
   - Cmd+K / Ctrl+K global shortcut
   - Dark theme with emerald green highlights
   - Categorized results (Lessons, Projects, Handbook)

2. **`/Users/malharsoni/CTRC-Learning/docs/components/search-bar-demo.tsx`** (Demo/Example)
   - Shows how to integrate the component
   - Example with navigation handler
   - Feature showcase

3. **`/Users/malharsoni/CTRC-Learning/docs/components/README.md`** (Documentation)
   - Installation instructions
   - Usage examples
   - Props documentation
   - Customization guide

4. **`/Users/malharsoni/CTRC-Learning/docs/components/preview.html`** (Visual Preview)
   - Static HTML preview of the component
   - Open in browser to see the design
   - Interactive demo with keyboard shortcuts

## Features Implemented

### Core Functionality
- ✓ Fuzzy search algorithm (matches partial strings and character sequences)
- ✓ Real-time filtering as you type
- ✓ Keyboard navigation (↑/↓ to navigate, Enter to select, Esc to close)
- ✓ Global keyboard shortcut (Cmd+K / Ctrl+K)
- ✓ Click-outside-to-close
- ✓ Auto-focus on open

### Search Categories
- **Lessons** (BookOpen icon, emerald-500)
  - Unit 1.1 - Introduction to Robotics
  - Unit 1.2 - Building Basics
  - Unit 2.1 - Programming Fundamentals
  - Unit 2.3 - Advanced Sensors
  - Unit 3.1 - Competition Strategy

- **Projects** (FileCode icon, blue-500)
  - BattleBots Project (with ⌘B shortcut)
  - Autonomous Challenge
  - High Stakes Competition Bot

- **Design Handbook** (Lightbulb icon, amber-500)
  - Design Process
  - Gear Ratios Guide
  - PID Control
  - Troubleshooting Guide

### UI/UX
- Dark theme (neutral-900 background)
- Green accent highlights (emerald-500 - CTRC brand color)
- Smooth animations with Framer Motion
- Responsive design
- Visual feedback for selected items
- Category grouping with headers
- Result count in footer
- Keyboard shortcut hints

## Design Pattern

Based on the Raycast command palette pattern:
- Modal overlay with backdrop blur
- Centered dialog at 15vh from top
- Search input at top with icon
- Categorized scrollable results
- Footer with keyboard hints and result count

## Dependencies

```json
{
  "framer-motion": "^11.x",
  "lucide-react": "^0.x"
}
```

## Integration Steps

### For Next.js App Router:

1. Install dependencies:
```bash
npm install framer-motion lucide-react
```

2. Copy component to your project:
```bash
cp /Users/malharsoni/CTRC-Learning/docs/components/search-bar.tsx \
   your-project/components/search-bar.tsx
```

3. Use in layout or page:
```tsx
import { CTRCSearchBar } from "@/components/search-bar"

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <CTRCSearchBar />
      </nav>
      {children}
    </div>
  )
}
```

4. Add navigation handler:
```tsx
"use client"
import { useRouter } from "next/navigation"

export function SearchWrapper() {
  const router = useRouter()

  return (
    <CTRCSearchBar
      onSelect={(item) => router.push(item.url)}
    />
  )
}
```

## Customization Examples

### Change Accent Color
Replace `emerald` with your brand color throughout the component:
```tsx
// From:
bg-emerald-500/10 border-emerald-500
text-emerald-500

// To (blue):
bg-blue-500/10 border-blue-500
text-blue-500
```

### Add More Items
```tsx
const myItems = [
  {
    id: "new-lesson",
    label: "Unit 4.1 - Advanced Topics",
    description: "Deep dive into competition strategies",
    category: "lesson",
    icon: <BookOpen className="h-4 w-4 text-emerald-500" />,
    url: "/lessons/unit-4-1",
  },
  // ... more items
]

<CTRCSearchBar items={myItems} />
```

### Different Categories
Update the `category` type and `getCategoryLabel` function:
```tsx
category: "lesson" | "project" | "handbook" | "resource"

case "resource":
  return "Resources"
```

## Technical Details

### Fuzzy Search Algorithm
```typescript
function fuzzyMatch(text: string, query: string): boolean {
  // 1. Check for direct substring match
  if (textLower.includes(queryLower)) return true

  // 2. Check for character sequence match
  let queryIndex = 0
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex++
    }
  }
  return queryIndex === queryLower.length
}
```

### State Management
- `open` - Dialog visibility
- `search` - Search query string
- `selectedIndex` - Currently highlighted result (for keyboard nav)
- `filteredItems` - Computed filtered results
- `groupedItems` - Results organized by category

### Performance
- Uses `React.useMemo` for filtered and grouped items
- Debouncing not needed (React is fast enough for small datasets)
- Add debouncing if dataset grows beyond 1000+ items

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- CSS backdrop-filter for blur effect

## Accessibility

- Keyboard navigation fully supported
- Focus management (auto-focus on open, trap focus in dialog)
- Escape key to close
- ARIA labels can be added for screen readers (enhancement)

## Future Enhancements

Potential additions:
- [ ] Recent searches history
- [ ] Search analytics
- [ ] Filter by category chips
- [ ] Preview pane for selected item
- [ ] Custom action buttons per item
- [ ] Sections/dividers between categories
- [ ] Loading state for async search
- [ ] Empty state customization
- [ ] Command groups (like Raycast)
- [ ] Multi-step actions

## Preview

Open `/Users/malharsoni/CTRC-Learning/docs/components/preview.html` in a browser to see the component in action.

## Source

Adapted from: https://21st.dev/community/components/kokonutd/action-search-bar/default

Original component by Kokonut UI, customized for CTRC Learning with:
- CTRC branding (emerald green highlights)
- CTRC-specific content (lessons, projects, handbook)
- Fuzzy search implementation
- Enhanced keyboard navigation

---

**Created:** March 10, 2026
**Location:** `/Users/malharsoni/CTRC-Learning/docs/components/`
