# Changelog

All notable changes to CTRC Learning are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-03-11

### 🎉 Initial Release

First public release of CTRC Learning platform with complete V5 Foundation Program, BattleBots project, design handbook, and 9 custom UI components.

---

## Added

### Educational Content

#### V5 Foundation Program
- **Unit 1: Drivetrain Mastery** (7 lessons, 2 challenges)
  - 1.1 Safety & Common Parts
  - 1.2 Structure & Bracing
  - 1.3 Gear Ratios & Friction
  - 1.4 Drivetrain Build
  - Challenge: Free Spin Challenge
  - Challenge: Obstacle Course Time Trial

- **Unit 2: Programming (LemLib)** (7 lessons, 2 challenges)
  - 2.1 VSCode & LemLib Setup
  - 2.2 Drive Config & Controls
  - 2.3 Motorized Shovel
  - 2.4 PID Tuning
  - 2.5 Autonomous Routing
  - Challenge: Pickup Relay
  - Challenge: Auton Showdown

- **Unit 3: Onshape CAD** (8 lessons, 3 challenges)
  - 3.1 Interface & Sketching
  - 3.2 3D Modeling & Printing
  - 3.3 Advanced Features
  - 3.4 VEX Parts & Mates
  - 3.5 Render & Present
  - Challenge: 3D Print Keychain
  - Challenge: CAD Battle
  - Challenge: CAD vs Real

- **Unit 4: Mechanisms** (6 lessons, 3 challenges)
  - 4.1 Wedge & Pushing
  - 4.2 Intakes
  - 4.3 Linear Slider
  - Challenge: Sumo Bots
  - Challenge: Sack Attack
  - Challenge: Ball Sweep

- **Unit 5: Competition Ready** (3 lessons, 1 challenge)
  - 5.1 Robot Integration
  - 5.2 Autonomous Strategy
  - 5.3 Match Strategy
  - Challenge: 2v2 Matches

#### BattleBots Project (9 modules)
- Rules & Overview
- Robot Archetypes (Spinner, Wedge, Flipper, Hammer)
- Weapon Design
- Drivetrain Design (N20 Motors)
- CAD Your Bot (Onshape)
- 3D Printing Guide
- Malenki Nano Setup (Electronics)
- Assembly & Wiring
- Testing & Safety

#### Design Handbook
- Structure section (bracing, materials, strength)
- Power Transmission section (gears, chains, sprockets)
- Mechanisms section (intakes, lifts, launchers)

#### Mechanism Examples
- Gallery structure for real competition robots
- Inspiration and reference for builders

---

### Custom Components (9 total)

#### 1. Animated Sidebar
- Collapsible navigation menu
- Hamburger toggle with smooth animations
- Mobile-first responsive design
- Overlay backdrop on mobile
- Active link highlighting
- Keyboard accessible (Esc to close)
- File: `docs/components/animated-sidebar.tsx`

#### 2. Canvas Background
- Mouse-reactive animated particle grid
- Smooth 60fps animations
- Cursor attraction effect
- Subtle glow around cursor
- Pure Canvas API (no dependencies)
- Performance optimized
- File: `docs/components/canvas-bg.tsx`

#### 3. Feature Section
- Responsive grid layout (1-4 columns)
- Icon + Title + Description pattern
- Hover effects with scale and glow
- Phosphor Icons integration
- Semantic HTML for accessibility
- File: `docs/components/feature-section.tsx`

#### 4. Flip Button
- 3D flip animation on hover
- Three variants: Primary, Secondary, Outline
- Pure CSS implementation (no JavaScript)
- Keyboard accessible
- Scale animations (hover: 1.02x, active: 0.97x)
- CTRC green color scheme
- Pre-configured CTAs (Start Learning, View Projects, Explore Handbook)
- Files: `docs/components/flip-button.tsx`, `docs/stylesheets/flip-button.css`

#### 5. Glowing Effect
- Animated glow/tubelight effect
- Customizable color, intensity, duration
- Presets for common use cases (green, blue, purple, yellow)
- Pure CSS animations
- Works on text, cards, buttons, navbar
- File: `docs/components/glowing-effect.tsx`

#### 6. Icon System
- Unified icon component with 50+ icon mappings
- Size presets (xs, sm, md, lg, xl, 2xl)
- Weight presets (thin, light, regular, bold, fill, duotone)
- Color presets (CTRC design system)
- Preset components (LearningIcon, BuildIcon, CompetitionIcon)
- Phosphor Icons integration
- File: `docs/components/icons.tsx`

#### 7. Search Bar
- Command-K style search interface
- Keyboard shortcut (Cmd+K / Ctrl+K)
- Fuzzy search across all content
- Quick links to popular pages
- Recent searches
- Keyboard navigation (arrow keys, Enter, Esc)
- Icons for result types
- File: `docs/components/search-bar.tsx`

#### 8. Theme Toggle
- Dark/Light mode switch
- Sun/Moon icon toggle
- Smooth color transitions
- Persists to localStorage
- Respects system preference
- Accessible (ARIA labels, keyboard support)
- File: `docs/components/theme-toggle.tsx`

#### 9. Timeline
- Visual progress indicator for courses
- Three states: Completed, Current, Upcoming
- Animated icons (spin for current state)
- Vertical connector lines
- Responsive mobile-friendly layout
- Semantic HTML for screen readers
- File: `docs/components/timeline.tsx`

---

### Design System Improvements

#### Icon System Upgrade
- Migrated from emoji + Lucide to **Phosphor Icons**
- 7,000+ professional icons with 6 weight options
- 100+ icon instances replaced across platform
- Robotics-focused icons (Robot, Gear, Circuit)
- Consistent geometric design language
- Full icon mapping documentation
- Installation script: `docs/components/install-phosphor-icons.sh`
- Documentation: `docs/components/ICON_SYSTEM.md`

#### Color System
- CTRC green accent (#00ff88)
- Dark mode color scheme (#0a0f14 background)
- Semantic status colors (green, yellow, red, blue)
- Consistent color variables in CSS
- File: `docs/stylesheets/extra.css`

#### Typography
- Inter font (Google Fonts)
- Weights: 400, 500, 600, 700, 800, 900
- Consistent font sizing and hierarchy
- Professional letter spacing

---

### Site Features

#### Custom Homepage
- Mouse-reactive canvas background
- Hero section with tagline: "Learn It. Build It. Prove It."
- User type selector (Student, Educator, Mentor)
- Course cards for all learning paths
- Professional dark theme design
- Responsive mobile layout
- File: `docs/index.html`

#### Navigation
- Sticky topbar with Material theme
- Navigation tabs for main sections
- Search bar with instant results
- Footer with links to all sections
- Configured in: `mkdocs.yml`

#### Search
- MkDocs Material built-in search
- Instant search suggestions
- Keyboard shortcut support (Cmd+K)
- Search index auto-generated on build

#### Plugins
- **glightbox** - Image lightbox with zoom
- **search** - Full-text search
- Configured in: `mkdocs.yml`

---

### Documentation

#### User Documentation
- README.md - Project overview and quick start
- SITEMAP.md - Visual site structure
- Foundation program index pages for all units
- BattleBots project index pages
- Design handbook index pages

#### Developer Documentation
- DEPLOYMENT_GUIDE.md - Build and deployment instructions
- COMPONENT_USAGE_GUIDE.md - All 9 components documented
- CHANGELOG.md - This file
- Component READMEs (9 files in `docs/components/`)
- Icon system documentation
- Installation scripts for all components

#### Technical Documentation
- ICON_REPLACEMENT_SUMMARY.md - Icon migration details
- FLIP_BUTTON_IMPLEMENTATION.md - Flip button implementation
- Component quick-start guides
- Integration guides

---

### Configuration

#### MkDocs Configuration
- Material theme with custom overrides
- Navigation structure for all content
- Dark mode as default (with toggle)
- Custom CSS files loaded
- Plugins configured (glightbox, search)
- Markdown extensions enabled
- File: `mkdocs.yml`

#### CSS Architecture
- `docs/stylesheets/extra.css` - Global styles, color system
- `docs/stylesheets/flip-button.css` - Flip button component styles
- Media placeholder styles for content gaps
- Responsive breakpoints

---

### Developer Tools

#### Installation Scripts
- `docs/components/install-phosphor-icons.sh` - Install Phosphor Icons
- `docs/components/install-feature-section.sh` - Install Feature Section dependencies
- `docs/components/install-tubelight-deps.sh` - Install Glowing Effect dependencies
- Validation checks and usage examples included

#### Build Tools
- MkDocs Material for static site generation
- Python dependencies managed via pip
- npm for component dependencies
- GitHub Actions workflow ready (see DEPLOYMENT_GUIDE.md)

---

## [0.9.0] - 2026-03-10

### Pre-release Development

#### Component Development
- Built all 9 React/TypeScript components
- Tested components on demo pages
- Created component documentation
- Implemented Phosphor Icons integration

#### Content Creation
- Outlined all V5 Foundation units
- Structured BattleBots project modules
- Created Design Handbook sections
- Drafted lesson templates

#### Design System
- Defined CTRC color palette
- Established typography scale
- Created component patterns
- Built custom homepage

---

## [0.1.0] - 2026-03-06

### Initial Setup

- Created repository structure
- Initialized MkDocs with Material theme
- Set up basic navigation
- Created placeholder content

---

## Release Notes

### Version 1.0.0 Highlights

**Educational Content:**
- 31 lessons across 5 foundation units
- 11 hands-on challenges
- 9 BattleBots project modules
- Comprehensive design handbook
- Mechanism examples gallery

**Custom Components:**
- 9 professional React/TypeScript components
- Phosphor Icons (7,000+ icons)
- Full dark mode support
- Mobile responsive throughout
- Keyboard accessible

**Developer Experience:**
- Complete documentation
- Installation scripts
- Component usage guides
- Deployment automation ready

**Performance:**
- Fast static site (MkDocs)
- Optimized animations
- Lazy loading
- Minimal dependencies

---

## Upgrade Guide

### From Pre-release to 1.0.0

If you were using CTRC Learning before official 1.0.0 release:

#### 1. Update Dependencies
```bash
pip install --upgrade mkdocs-material mkdocs-glightbox
cd docs/components
npm install @phosphor-icons/react
```

#### 2. Replace Icons
All emoji and Lucide icons have been replaced with Phosphor Icons.

See [ICON_REPLACEMENT_SUMMARY.md](ICON_REPLACEMENT_SUMMARY.md) for mapping.

#### 3. Update Component Imports
```tsx
// Old
import { Home, Menu } from 'lucide-react'

// New
import { House, List } from '@phosphor-icons/react'
```

#### 4. Update Flip Button CSS
Ensure `mkdocs.yml` includes:
```yaml
extra_css:
  - stylesheets/extra.css
  - stylesheets/flip-button.css
```

#### 5. Rebuild Site
```bash
mkdocs build --clean
```

---

## Future Roadmap

### Version 1.1.0 (Next Minor Release)
- Interactive component playground
- Video tutorials for key lessons
- Printable worksheets and handouts
- More mechanism examples

### Version 1.2.0
- Teacher dashboard
- Student progress tracking
- Assessment rubrics
- Pacing guides

### Version 2.0.0 (Major Release)
- Multi-language support (French, Spanish)
- Onshape integration (live CAD viewer)
- Community robot showcase
- Competition preparation toolkit

---

## Links

- **Repository:** https://github.com/ctrc/CTRC-Learning
- **Documentation:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Components:** [COMPONENT_USAGE_GUIDE.md](COMPONENT_USAGE_GUIDE.md)
- **Sitemap:** [SITEMAP.md](SITEMAP.md)
- **Issues:** https://github.com/ctrc/CTRC-Learning/issues
- **Discussions:** https://github.com/ctrc/CTRC-Learning/discussions

---

## Credits

**Built by:** Caution Tape Robotics Club
**Contributors:** Mentors, students, and volunteers
**License:** Content (CC BY-NC-SA 4.0), Code (MIT)

---

**Keep this changelog updated.** When making changes, add entries to the "Unreleased" section at the top. When releasing a new version, move entries to a new version heading.
