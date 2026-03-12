# Flip Button Component

3D flip animation buttons for CTRC Learning CTAs, adapted from [21st.dev](https://21st.dev/ln-dev7/flip-button/default).

<link rel="stylesheet" href="../stylesheets/flip-button.css">

## Pre-configured CTAs

<div class="flip-buttons-grid">
  <div class="flip-button-container">
    <a href="../foundation/" class="flip-button flip-button-primary flip-button-animate-in">
      <span class="flip-button-front">Start Learning</span>
      <span class="flip-button-back">Let's Go! →</span>
    </a>
  </div>

  <div class="flip-button-container">
    <a href="../projects/" class="flip-button flip-button-secondary flip-button-animate-in">
      <span class="flip-button-front">View Projects</span>
      <span class="flip-button-back">Explore Now →</span>
    </a>
  </div>

  <div class="flip-button-container">
    <a href="../design-handbook/" class="flip-button flip-button-outline flip-button-animate-in">
      <span class="flip-button-front">Explore Handbook</span>
      <span class="flip-button-back">Read More →</span>
    </a>
  </div>
</div>

## Features

- ✅ Smooth 3D flip animation on hover
- ✅ Green primary color (#00ff00)
- ✅ Dark mode friendly
- ✅ Keyboard accessible (Tab to focus, Enter to activate)
- ✅ Scale animations on hover and active states
- ✅ Pure CSS - no JavaScript required
- ✅ Three variants: Primary, Secondary, Outline

## All Variants

### Primary

<div class="flip-button-container">
  <a href="#" class="flip-button flip-button-primary">
    <span class="flip-button-front">Primary Button</span>
    <span class="flip-button-back">Click Me!</span>
  </a>
</div>

### Secondary

<div class="flip-button-container">
  <a href="#" class="flip-button flip-button-secondary">
    <span class="flip-button-front">Secondary Button</span>
    <span class="flip-button-back">Let's Go!</span>
  </a>
</div>

### Outline

<div class="flip-button-container">
  <a href="#" class="flip-button flip-button-outline">
    <span class="flip-button-front">Outline Button</span>
    <span class="flip-button-back">Explore Now →</span>
  </a>
</div>

## Usage

### HTML Structure

```html
<link rel="stylesheet" href="../stylesheets/flip-button.css">

<div class="flip-button-container">
  <a href="/path" class="flip-button flip-button-primary">
    <span class="flip-button-front">Front Text</span>
    <span class="flip-button-back">Back Text →</span>
  </a>
</div>
```

### Variants

Choose one of three variants by adding the appropriate class:

| Class | Description | Use Case |
|-------|-------------|----------|
| `flip-button-primary` | Bright green background | Main CTAs, primary actions |
| `flip-button-secondary` | Dark background, green text | Secondary actions |
| `flip-button-outline` | Transparent with green border | Tertiary actions, less emphasis |

### Grid Layout

To display multiple buttons in a responsive grid:

```html
<div class="flip-buttons-grid">
  <div class="flip-button-container">
    <!-- Button 1 -->
  </div>
  <div class="flip-button-container">
    <!-- Button 2 -->
  </div>
  <div class="flip-button-container">
    <!-- Button 3 -->
  </div>
</div>
```

### Optional Animation

Add the `flip-button-animate-in` class for an entrance animation:

```html
<a href="#" class="flip-button flip-button-primary flip-button-animate-in">
  <span class="flip-button-front">Button Text</span>
  <span class="flip-button-back">Hover Text</span>
</a>
```

## Accessibility

- ✅ Keyboard navigation (Tab to focus)
- ✅ Focus visible states
- ✅ Semantic link/button elements
- ✅ Works with screen readers
- ✅ Reduced motion support (for users who prefer less animation)

## Color Scheme

The component uses CTRC Learning's green accent:

- **Primary Green**: `#00ff00`
- **Hover Green**: `#00dd00`
- **Subtle Background**: `rgba(0, 255, 0, 0.1)`
- **Dark Background**: `#171717`
- **Dark Hover**: `#262626`

## Animation Details

- **Flip duration**: 0.6s cubic-bezier
- **Hover scale**: 1.02x
- **Active scale**: 0.97x
- **Perspective**: 1000px for 3D effect
- **Backface visibility**: hidden (for clean flip)

## Installation

1. The CSS file is already included: `/docs/stylesheets/flip-button.css`
2. Link it in your markdown file or add to `mkdocs.yml`:

```yaml
extra_css:
  - stylesheets/extra.css
  - stylesheets/flip-button.css
```

3. Use the HTML structure above in your markdown files

## Browser Support

Works in all modern browsers:

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

Original design from [21st.dev](https://21st.dev/ln-dev7/flip-button/default) by ln-dev7.
Adapted for CTRC Learning with pure CSS implementation and green color scheme.
