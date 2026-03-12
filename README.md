# CTRC Learning

**Master VEX V5 Robotics from Zero to Competition-Ready**

A comprehensive learning platform for VEX V5 robotics, built by [Caution Tape Robotics Club](https://cautiontaperobotics.ca). Features hands-on curriculum, BattleBots projects, design references, and professional UI components.

---

## Quick Links

- **Live Site:** [https://ctrc-learning.example.com](#) *(Update with your URL)*
- **Documentation:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Components:** [COMPONENT_USAGE_GUIDE.md](COMPONENT_USAGE_GUIDE.md)
- **Changelog:** [CHANGELOG.md](CHANGELOG.md)
- **Sitemap:** [SITEMAP.md](SITEMAP.md)

---

## What's Inside

### 1. V5 Foundation Program
**Zero to competition-ready in 5 structured units**

- **Unit 1:** Drivetrain Mastery (7 lessons, 2 challenges)
- **Unit 2:** Programming with LemLib (7 lessons, 2 challenges)
- **Unit 3:** Onshape CAD (8 lessons, 3 challenges)
- **Unit 4:** Mechanisms (6 lessons, 3 challenges)
- **Unit 5:** Competition Ready (3 lessons, 1 challenge)

**Total:** 31 lessons, 11 challenges, ~60 hours

### 2. BattleBots Project
**Build 250g combat robots with CAD, 3D printing, and electronics**

- Rules & Overview
- Robot Archetypes (Spinner, Wedge, Flipper, Hammer)
- Weapon Design
- Drivetrain with N20 Motors
- CAD Your Bot (Onshape)
- 3D Printing Guide
- Malenki Nano Setup (Electronics)
- Assembly & Wiring
- Testing & Safety

**Total:** 9 comprehensive modules

### 3. Design Handbook
**Quick reference for robotics design patterns**

- Structure (bracing, materials, strength)
- Power Transmission (gears, chains, sprockets)
- Mechanisms (intakes, lifts, launchers)

**Always accessible during builds.**

### 4. Mechanism Examples
**Real competition robots, real solutions**

Gallery of proven mechanisms from top VEX teams. Learn from the best.

---

## Component Showcase

CTRC Learning includes **9 custom React/TypeScript components** for professional UI/UX:

### Interactive Components

| Component | Purpose | Preview |
|-----------|---------|---------|
| **Flip Button** | 3D flip animation CTAs | [Demo](docs/components/flip-button-demo.md) |
| **Canvas Background** | Mouse-reactive animated grid | [Demo](docs/index.html) |
| **Timeline** | Visual course progress indicator | [Demo](docs/components/timeline.tsx) |
| **Search Bar** | Command-K style search | [Demo](docs/components/search-bar.tsx) |
| **Animated Sidebar** | Collapsible navigation menu | [Demo](docs/components/sidebar-demo.tsx) |
| **Theme Toggle** | Dark/Light mode switch | [Demo](docs/components/theme-toggle.tsx) |

### Display Components

| Component | Purpose | Preview |
|-----------|---------|---------|
| **Feature Section** | Showcase features with icons | [Demo](docs/components/feature-section-demo.tsx) |
| **Glowing Effect** | Animated highlights and emphasis | [Demo](docs/components/glowing-effect-demo.tsx) |
| **Icon System** | 50+ mapped Phosphor Icons | [Docs](docs/components/ICON_SYSTEM.md) |

**All components:**
- Mobile responsive
- Dark mode compatible
- Keyboard accessible
- Performance optimized

See [COMPONENT_USAGE_GUIDE.md](COMPONENT_USAGE_GUIDE.md) for full documentation.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | MkDocs with Material theme |
| **Components** | React + TypeScript |
| **Styling** | Tailwind CSS + Custom CSS |
| **Icons** | Phosphor Icons (7,000+ professional icons) |
| **Animations** | CSS animations + Canvas API |
| **Hosting** | GitHub Pages (or any static host) |
| **Search** | MkDocs built-in search |

---

## Quick Start

### For Students

**Start learning VEX V5 robotics:**

1. Go to [V5 Foundation Program](docs/foundation/index.md)
2. Begin with Unit 1: Drivetrain Mastery
3. Complete lessons and challenges
4. Build your first competition robot

**Or jump into projects:**

1. Check out [BattleBots](docs/projects/battlebots/index.md)
2. Design, CAD, and 3D print a combat robot
3. Compete in 250g BattleBot matches

### For Educators

**Use CTRC Learning as your robotics curriculum:**

1. Review [V5 Foundation Program](docs/foundation/index.md) scope
2. Check pacing guides (coming soon)
3. Download assessment rubrics (coming soon)
4. Adapt to your classroom needs

### For Developers

**Run the site locally:**

```bash
# Clone repository
git clone https://github.com/ctrc/CTRC-Learning.git
cd CTRC-Learning

# Install dependencies
pip install mkdocs-material mkdocs-glightbox

# Start development server
mkdocs serve
```

Site runs at `http://127.0.0.1:8000`

**Deploy to GitHub Pages:**

```bash
mkdocs gh-deploy
```

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

---

## Project Structure

```
CTRC-Learning/
├── docs/                          # Source content
│   ├── index.html                 # Custom homepage
│   ├── foundation/                # V5 Foundation Program
│   │   ├── index.md
│   │   ├── unit1/                 # Drivetrain Mastery
│   │   ├── unit2/                 # Programming (LemLib)
│   │   ├── unit3/                 # Onshape CAD
│   │   ├── unit4/                 # Mechanisms
│   │   └── unit5/                 # Competition Ready
│   ├── projects/                  # Project-based learning
│   │   └── battlebots/            # 250g BattleBots
│   ├── design-handbook/           # Quick reference
│   │   ├── structure/
│   │   ├── power-transmission/
│   │   └── mechanisms/
│   ├── mechanism-examples/        # Gallery of real robots
│   ├── stylesheets/               # Custom CSS
│   │   ├── extra.css
│   │   └── flip-button.css
│   └── components/                # React components
│       ├── flip-button.tsx
│       ├── timeline.tsx
│       ├── icons.tsx
│       └── [7 more components]
├── mkdocs.yml                     # MkDocs configuration
├── DEPLOYMENT_GUIDE.md            # Deployment documentation
├── COMPONENT_USAGE_GUIDE.md       # Component documentation
├── CHANGELOG.md                   # Version history
├── SITEMAP.md                     # Visual sitemap
└── README.md                      # This file
```

---

## Features Highlights

### Educational Content

- **31 lessons** across 5 units (V5 Foundation)
- **11 hands-on challenges** with real competition scenarios
- **9 BattleBots modules** from design to combat
- **Comprehensive design handbook** for quick reference
- **Real robot examples** from top VEX teams

### Professional UI/UX

- **Custom homepage** with mouse-reactive canvas background
- **9 React components** for interactive learning
- **Flip button CTAs** with 3D animations
- **Timeline component** for visual progress tracking
- **Dark mode** throughout the site
- **Mobile responsive** - works on all devices
- **Fast search** with keyboard shortcuts (Cmd+K)

### Icon System Upgrade

- **Phosphor Icons** - 7,000+ professional icons
- **6 weight options** (thin to fill)
- **Robotics-focused** - Robot, Gear, Circuit icons
- **Consistent design** - No more emoji or generic icons
- **100+ icons replaced** across all components

See [ICON_REPLACEMENT_SUMMARY.md](ICON_REPLACEMENT_SUMMARY.md) for details.

### Developer Experience

- **MkDocs Material** - Beautiful, fast documentation framework
- **TypeScript** - Type-safe components
- **Tailwind CSS** - Utility-first styling
- **Modular components** - Reusable, composable
- **Well documented** - README for every component
- **Installation scripts** - One-command setup

---

## Documentation

### User Guides
- [**Getting Started**](docs/foundation/index.md) - Begin your robotics journey
- [**BattleBots Guide**](docs/projects/battlebots/index.md) - Build combat robots
- [**Design Handbook**](docs/design-handbook/index.md) - Reference patterns

### Developer Guides
- [**Deployment Guide**](DEPLOYMENT_GUIDE.md) - Build and deploy the site
- [**Component Usage Guide**](COMPONENT_USAGE_GUIDE.md) - Use custom components
- [**Changelog**](CHANGELOG.md) - Version history and updates
- [**Sitemap**](SITEMAP.md) - Visual site structure

### Component Documentation
- [**Icon System**](docs/components/ICON_SYSTEM.md) - Phosphor Icons guide
- [**Flip Button**](docs/components/flip-button-README.md) - 3D flip CTAs
- [**Glowing Effect**](docs/components/GLOWING-EFFECT-README.md) - Animated highlights
- [**Feature Section**](docs/components/FEATURE_SECTION_README.md) - Feature grids
- [**Sidebar**](docs/components/SIDEBAR_README.md) - Animated navigation

---

## Contributing

We welcome contributions from students, educators, and robotics enthusiasts!

### How to Contribute

1. **Content improvements**
   - Fix typos or unclear explanations
   - Add new lessons or challenges
   - Submit mechanism examples from your team

2. **Component development**
   - Build new UI components
   - Improve existing components
   - Add component variations

3. **Design enhancements**
   - Improve visual design
   - Create illustrations or diagrams
   - Optimize for mobile

See [docs/contribution/index.md](docs/contribution/index.md) for guidelines.

---

## Community

- **Discord:** [Join CTRC Discord](#)
- **GitHub Discussions:** [Ask questions, share ideas](https://github.com/ctrc/CTRC-Learning/discussions)
- **Issues:** [Report bugs or request features](https://github.com/ctrc/CTRC-Learning/issues)

---

## License

**Content:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- Free to use for educational purposes
- Attribution required
- Share-alike required
- Non-commercial use only

**Code:** [MIT License](LICENSE)
- Free to use, modify, distribute
- No warranty

---

## Credits

### Built By
**Caution Tape Robotics Club**
- Mentors, students, and volunteers
- Based in Ontario, Canada
- VEX V5 Competition Team

### Technology
- **MkDocs Material** by @squidfunk
- **Phosphor Icons** by Phosphor team
- **21st.dev Components** - Flip Button inspiration

### Special Thanks
- VEX Robotics Community
- FRC Design community
- All contributing students and mentors

---

## Roadmap

### Version 2.0 (In Progress)
- [ ] Interactive component playground
- [ ] Video tutorials for all lessons
- [ ] Printable worksheets and handouts
- [ ] Teacher dashboard with student progress tracking

### Version 2.1 (Planned)
- [ ] Multi-language support (French, Spanish)
- [ ] Onshape integration (live CAD viewer)
- [ ] Community robot showcase
- [ ] VEX competition calendar

### Version 3.0 (Future)
- [ ] AI-powered learning assistant
- [ ] Virtual robot simulator
- [ ] Team collaboration tools
- [ ] Competition preparation toolkit

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

## Support

### Need Help?

- **Documentation:** Check guides above
- **Search:** Use Cmd+K to search the site
- **Community:** Ask in [GitHub Discussions](https://github.com/ctrc/CTRC-Learning/discussions)
- **Bug Reports:** Open an [issue](https://github.com/ctrc/CTRC-Learning/issues)

### Contact

- **Email:** learning@cautiontaperobotics.ca
- **Discord:** [CTRC Discord Server](#)
- **GitHub:** [@ctrc](https://github.com/ctrc)

---

## Stats

| Metric | Count |
|--------|-------|
| **Lessons** | 31 |
| **Challenges** | 11 |
| **Project Modules** | 9 (BattleBots) |
| **Custom Components** | 9 |
| **Icons Replaced** | 100+ |
| **Documentation Files** | 50+ |
| **Total Learning Hours** | ~60 hours |

---

<div align="center">

**Learn It. Build It. Prove It.**

Built with passion by [Caution Tape Robotics Club](https://cautiontaperobotics.ca)

[Get Started](docs/foundation/index.md) • [View Projects](docs/projects/index.md) • [Browse Handbook](docs/design-handbook/index.md)

</div>
