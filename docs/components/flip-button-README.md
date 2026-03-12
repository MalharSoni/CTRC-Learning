# FlipButton Component

3D flip animation button component for CTRC Learning CTAs, adapted from [21st.dev](https://21st.dev/ln-dev7/flip-button/default).

## Features

- ✅ Smooth 3D flip animation on hover
- ✅ Green primary color scheme (#00ff00)
- ✅ Dark mode friendly
- ✅ Keyboard accessible (Space/Enter to activate)
- ✅ Scale animations on hover and tap
- ✅ Three variants: Primary, Secondary, Outline
- ✅ Pre-configured CTA buttons

## Installation

### 1. Install dependencies

```bash
npm install framer-motion
```

### 2. Copy component file

Copy `/Users/malharsoni/CTRC-Learning/docs/components/flip-button.tsx` to your components directory.

## Usage

### Pre-configured CTA Buttons

```tsx
import {
  StartLearningButton,
  ViewProjectsButton,
  ExploreHandbookButton
} from '@/components/flip-button'

// Start Learning CTA
<StartLearningButton
  onClick={() => router.push('/learning')}
  className="max-w-xs"
/>

// View Projects CTA
<ViewProjectsButton
  onClick={() => router.push('/projects')}
/>

// Explore Handbook CTA
<ExploreHandbookButton
  onClick={() => router.push('/handbook')}
/>
```

### Custom FlipButton

```tsx
import { FlipButton } from '@/components/flip-button'

<FlipButton
  frontText="Get Started"
  backText="Let's Go! →"
  variant="primary"
  onClick={handleClick}
  className="max-w-md"
/>
```

## API Reference

### FlipButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `frontText` | `string` | required | Text shown on front face |
| `backText` | `string` | required | Text shown on back face (on hover) |
| `onClick` | `() => void` | undefined | Click handler function |
| `className` | `string` | undefined | Additional CSS classes |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Button style variant |

### Variants

**Primary**
- Background: Bright green (#00ff00)
- Text: Dark (#171717)
- Use for: Main CTAs, primary actions

**Secondary**
- Background: Dark (#171717)
- Text: Green (#00ff00)
- Use for: Secondary actions, alternative CTAs

**Outline**
- Background: Transparent
- Border & Text: Green (#00ff00)
- Use for: Tertiary actions, less emphasis

## Color Scheme

The component uses CTRC Learning's green accent:

```css
--green-primary: #00ff00
--green-hover: #00dd00
--green-bg-subtle: rgba(0, 255, 0, 0.1)
```

## Accessibility

- ✅ Keyboard navigation (Space/Enter)
- ✅ Focus states
- ✅ ARIA labels
- ✅ Semantic button element
- ✅ Role attributes

## Animation Details

- **Flip duration**: 0.6s
- **Spring animation**: stiffness: 100, damping: 15
- **Hover scale**: 1.02x
- **Tap scale**: 0.97x
- **Perspective**: 1000px for 3D effect

## Demo

View the demo at `/Users/malharsoni/CTRC-Learning/docs/components/flip-button-demo.tsx`

## File Locations

```
/Users/malharsoni/CTRC-Learning/docs/components/
├── flip-button.tsx           # Main component
├── flip-button-demo.tsx      # Demo page
└── flip-button-README.md     # This file
```

## Credits

Original design from [21st.dev](https://21st.dev/ln-dev7/flip-button/default) by ln-dev7.
Adapted for CTRC Learning with green color scheme and accessibility improvements.
