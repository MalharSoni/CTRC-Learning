import type { NavSection, NavGroup, NavLeaf, NavItem } from '@/types/navigation'

// ---------------------------------------------------------------------------
// Complete navigation tree — mirrors mkdocs.yml nav: section
// ---------------------------------------------------------------------------

export const navigation: NavSection[] = [
  // ── Home ──────────────────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Home',
    slug: '',
    path: 'index.md',
    children: [],
  },

  // ── Website Feature Guide ─────────────────────────────────────────────
  {
    type: 'section',
    title: 'Website Feature Guide',
    slug: 'website-feature-guide',
    path: 'website-feature-guide.md',
    children: [],
  },

  // ── V5 Foundation Program ─────────────────────────────────────────────
  {
    type: 'section',
    title: 'V5 Foundation Program',
    slug: 'foundation',
    path: 'foundation/index.md',
    children: [
      // Unit 1 — Drivetrain Mastery
      {
        type: 'group',
        title: 'Unit 1 - Drivetrain Mastery',
        slug: 'foundation/unit1',
        path: 'foundation/unit1/index.md',
        children: [
          {
            type: 'leaf',
            title: '1.1 Safety & Common Parts',
            slug: 'foundation/unit1/safety-and-parts',
            path: 'foundation/unit1/safety-and-parts.md',
          },
          {
            type: 'leaf',
            title: '1.2 Structure & Bracing',
            slug: 'foundation/unit1/structure-and-bracing',
            path: 'foundation/unit1/structure-and-bracing.md',
          },
          {
            type: 'leaf',
            title: '1.3 Gear Ratios & Friction',
            slug: 'foundation/unit1/gear-ratios-and-friction',
            path: 'foundation/unit1/gear-ratios-and-friction.md',
          },
          {
            type: 'leaf',
            title: '1.4 Drivetrain Build',
            slug: 'foundation/unit1/drivetrain-build',
            path: 'foundation/unit1/drivetrain-build.md',
          },
          {
            type: 'leaf',
            title: 'Free Spin Challenge',
            slug: 'foundation/unit1/challenge-free-spin',
            path: 'foundation/unit1/challenge-free-spin.md',
          },
          {
            type: 'leaf',
            title: 'Obstacle Course Time Trial',
            slug: 'foundation/unit1/challenge-time-trial',
            path: 'foundation/unit1/challenge-time-trial.md',
          },
        ],
      },

      // Unit 2 — Programming (LemLib)
      {
        type: 'group',
        title: 'Unit 2 - Programming (LemLib)',
        slug: 'foundation/unit2',
        path: 'foundation/unit2/index.md',
        children: [
          {
            type: 'leaf',
            title: '2.1 VSCode & LemLib Setup',
            slug: 'foundation/unit2/vscode-lemlib-setup',
            path: 'foundation/unit2/vscode-lemlib-setup.md',
          },
          {
            type: 'leaf',
            title: '2.2 Drive Config & Controls',
            slug: 'foundation/unit2/drive-config-controls',
            path: 'foundation/unit2/drive-config-controls.md',
          },
          {
            type: 'leaf',
            title: '2.3 Motorized Shovel',
            slug: 'foundation/unit2/motorized-shovel',
            path: 'foundation/unit2/motorized-shovel.md',
          },
          {
            type: 'leaf',
            title: '2.4 PID Tuning',
            slug: 'foundation/unit2/pid-tuning',
            path: 'foundation/unit2/pid-tuning.md',
          },
          {
            type: 'leaf',
            title: '2.5 Autonomous Routing',
            slug: 'foundation/unit2/autonomous-routing',
            path: 'foundation/unit2/autonomous-routing.md',
          },
          {
            type: 'leaf',
            title: 'Pickup Relay',
            slug: 'foundation/unit2/challenge-pickup-relay',
            path: 'foundation/unit2/challenge-pickup-relay.md',
          },
          {
            type: 'leaf',
            title: 'Auton Showdown',
            slug: 'foundation/unit2/challenge-auton-showdown',
            path: 'foundation/unit2/challenge-auton-showdown.md',
          },
        ],
      },

      // Unit 3 — Onshape CAD
      {
        type: 'group',
        title: 'Unit 3 - Onshape CAD',
        slug: 'foundation/unit3',
        path: 'foundation/unit3/index.md',
        children: [
          {
            type: 'leaf',
            title: '3.1 Interface & Sketching',
            slug: 'foundation/unit3/interface-and-sketching',
            path: 'foundation/unit3/interface-and-sketching.md',
          },
          {
            type: 'leaf',
            title: '3.2 3D Modeling & Printing',
            slug: 'foundation/unit3/3d-modeling-and-printing',
            path: 'foundation/unit3/3d-modeling-and-printing.md',
          },
          {
            type: 'leaf',
            title: '3.3 Advanced Features',
            slug: 'foundation/unit3/advanced-features',
            path: 'foundation/unit3/advanced-features.md',
          },
          {
            type: 'leaf',
            title: '3.4 VEX Parts & Mates',
            slug: 'foundation/unit3/vex-parts-and-mates',
            path: 'foundation/unit3/vex-parts-and-mates.md',
          },
          {
            type: 'leaf',
            title: '3.5 Render & Present',
            slug: 'foundation/unit3/render-and-present',
            path: 'foundation/unit3/render-and-present.md',
          },
          {
            type: 'leaf',
            title: '3D Print Keychain',
            slug: 'foundation/unit3/challenge-3d-print-keychain',
            path: 'foundation/unit3/challenge-3d-print-keychain.md',
          },
          {
            type: 'leaf',
            title: 'CAD Battle',
            slug: 'foundation/unit3/challenge-cad-battle',
            path: 'foundation/unit3/challenge-cad-battle.md',
          },
          {
            type: 'leaf',
            title: 'CAD vs Real',
            slug: 'foundation/unit3/challenge-cad-vs-real',
            path: 'foundation/unit3/challenge-cad-vs-real.md',
          },
        ],
      },

      // Unit 4 — Mechanisms
      {
        type: 'group',
        title: 'Unit 4 - Mechanisms',
        slug: 'foundation/unit4',
        path: 'foundation/unit4/index.md',
        children: [
          {
            type: 'leaf',
            title: '4.1 Wedge & Pushing',
            slug: 'foundation/unit4/wedge-and-pushing',
            path: 'foundation/unit4/wedge-and-pushing.md',
          },
          {
            type: 'leaf',
            title: '4.2 Intakes',
            slug: 'foundation/unit4/intakes',
            path: 'foundation/unit4/intakes.md',
          },
          {
            type: 'leaf',
            title: '4.3 Linear Slider',
            slug: 'foundation/unit4/linear-slider',
            path: 'foundation/unit4/linear-slider.md',
          },
          {
            type: 'leaf',
            title: 'Sumo Bots',
            slug: 'foundation/unit4/challenge-sumo-bots',
            path: 'foundation/unit4/challenge-sumo-bots.md',
          },
          {
            type: 'leaf',
            title: 'Sack Attack',
            slug: 'foundation/unit4/challenge-sack-attack',
            path: 'foundation/unit4/challenge-sack-attack.md',
          },
          {
            type: 'leaf',
            title: 'Ball Sweep',
            slug: 'foundation/unit4/challenge-ball-sweep',
            path: 'foundation/unit4/challenge-ball-sweep.md',
          },
        ],
      },

      // Unit 5 — Competition Ready
      {
        type: 'group',
        title: 'Unit 5 - Competition Ready',
        slug: 'foundation/unit5',
        path: 'foundation/unit5/index.md',
        children: [
          {
            type: 'leaf',
            title: '5.1 Robot Integration',
            slug: 'foundation/unit5/robot-integration',
            path: 'foundation/unit5/robot-integration.md',
          },
          {
            type: 'leaf',
            title: '5.2 Autonomous Strategy',
            slug: 'foundation/unit5/autonomous-strategy',
            path: 'foundation/unit5/autonomous-strategy.md',
          },
          {
            type: 'leaf',
            title: '5.3 Match Strategy',
            slug: 'foundation/unit5/match-strategy',
            path: 'foundation/unit5/match-strategy.md',
          },
          {
            type: 'leaf',
            title: '2v2 Matches',
            slug: 'foundation/unit5/challenge-2v2-matches',
            path: 'foundation/unit5/challenge-2v2-matches.md',
          },
        ],
      },
    ],
  },

  // ── Projects ──────────────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Projects',
    slug: 'projects',
    path: 'projects/index.md',
    children: [
      {
        type: 'group',
        title: 'BattleBots',
        slug: 'projects/battlebots',
        path: 'projects/battlebots/index.md',
        children: [
          {
            type: 'leaf',
            title: 'Rules & Overview',
            slug: 'projects/battlebots/rules-and-overview',
            path: 'projects/battlebots/rules-and-overview.md',
          },
          {
            type: 'leaf',
            title: 'Robot Archetypes',
            slug: 'projects/battlebots/robot-archetypes',
            path: 'projects/battlebots/robot-archetypes.md',
          },
          {
            type: 'leaf',
            title: 'Weapon Design',
            slug: 'projects/battlebots/weapon-design',
            path: 'projects/battlebots/weapon-design.md',
          },
          {
            type: 'leaf',
            title: 'Drivetrain (N20 Motors)',
            slug: 'projects/battlebots/drivetrain-design',
            path: 'projects/battlebots/drivetrain-design.md',
          },
          {
            type: 'leaf',
            title: 'CAD Your Bot',
            slug: 'projects/battlebots/cad-your-bot',
            path: 'projects/battlebots/cad-your-bot.md',
          },
          {
            type: 'leaf',
            title: '3D Printing Guide',
            slug: 'projects/battlebots/3d-printing-guide',
            path: 'projects/battlebots/3d-printing-guide.md',
          },
          {
            type: 'leaf',
            title: 'Malenki Nano Setup',
            slug: 'projects/battlebots/malenki-nano-setup',
            path: 'projects/battlebots/malenki-nano-setup.md',
          },
          {
            type: 'leaf',
            title: 'Assembly & Wiring',
            slug: 'projects/battlebots/assembly-and-wiring',
            path: 'projects/battlebots/assembly-and-wiring.md',
          },
          {
            type: 'leaf',
            title: 'Testing & Safety',
            slug: 'projects/battlebots/testing-and-safety',
            path: 'projects/battlebots/testing-and-safety.md',
          },
        ],
      },
    ],
  },

  // ── Design Handbook ───────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Design Handbook',
    slug: 'design-handbook',
    path: 'design-handbook/index.md',
    children: [
      {
        type: 'group',
        title: 'Structure',
        slug: 'design-handbook/structure',
        path: 'design-handbook/structure/index.md',
        children: [],
      },
      {
        type: 'group',
        title: 'Power Transmission',
        slug: 'design-handbook/power-transmission',
        path: 'design-handbook/power-transmission/index.md',
        children: [],
      },
      {
        type: 'group',
        title: 'Mechanisms',
        slug: 'design-handbook/mechanisms',
        path: 'design-handbook/mechanisms/index.md',
        children: [],
      },
    ],
  },

  // ── Mechanism Examples ────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Mechanism Examples',
    slug: 'mechanism-examples',
    path: 'mechanism-examples/index.md',
    children: [],
  },

  // ── Best Practices ────────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Best Practices',
    slug: 'best-practices',
    path: 'best-practices/index.md',
    children: [],
  },

  // ── Other Resources ───────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Other Resources',
    slug: 'resources',
    path: 'resources/index.md',
    children: [],
  },

  // ── Educator's Guide ──────────────────────────────────────────────────
  {
    type: 'section',
    title: "Educator's Guide",
    slug: 'educators-guide',
    path: 'educators-guide/index.md',
    children: [],
  },

  // ── Changelog ─────────────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Changelog',
    slug: 'changelog',
    path: 'changelog.md',
    children: [],
  },

  // ── Contribution ──────────────────────────────────────────────────────
  {
    type: 'section',
    title: 'Contribution',
    slug: 'contribution',
    path: 'contribution/index.md',
    children: [],
  },
]

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/**
 * Returns all leaf nodes in document order.
 * Sections/groups that have no children are treated as leaves themselves.
 */
export function flattenNav(nav: NavSection[]): NavLeaf[] {
  const leaves: NavLeaf[] = []

  function walk(items: NavItem[]) {
    for (const item of items) {
      if (item.type === 'leaf') {
        leaves.push(item)
      } else {
        // Include the section/group itself as a leaf entry
        leaves.push({
          type: 'leaf',
          title: item.title,
          slug: item.slug,
          path: item.path,
        })
        if (item.children.length > 0) {
          walk(item.children)
        }
      }
    }
  }

  walk(nav)
  return leaves
}

/**
 * Finds any nav item by its slug. Searches the full tree by default.
 */
export function findNavItem(
  slug: string,
  nav: NavItem[] = navigation
): NavItem | null {
  for (const item of nav) {
    if (item.slug === slug) return item

    if (item.type !== 'leaf' && item.children.length > 0) {
      const found = findNavItem(slug, item.children)
      if (found) return found
    }
  }

  return null
}

/**
 * Returns the ancestor chain (breadcrumbs) for a given slug.
 * The returned array goes from root → target (inclusive).
 */
export function getBreadcrumbs(
  slug: string,
  nav: NavItem[] = navigation
): NavItem[] {
  function search(items: NavItem[], trail: NavItem[]): NavItem[] | null {
    for (const item of items) {
      const currentTrail = [...trail, item]

      if (item.slug === slug) return currentTrail

      if (item.type !== 'leaf' && item.children.length > 0) {
        const found = search(item.children, currentTrail)
        if (found) return found
      }
    }

    return null
  }

  return search(nav, []) ?? []
}

/**
 * Returns the docs-relative file path for a given slug, or null if not found.
 */
export function getNavItemPath(slug: string): string | null {
  const item = findNavItem(slug)
  return item ? item.path : null
}
