export interface NavLeaf {
  type: 'leaf'
  title: string
  slug: string // URL path segment e.g. 'foundation/unit1/safety-and-parts'
  path: string // file path relative to docs/ e.g. 'foundation/unit1/safety-and-parts.md'
}

export interface NavGroup {
  type: 'group'
  title: string
  slug: string
  path: string // index.md for the group
  children: NavItem[]
}

export interface NavSection {
  type: 'section'
  title: string
  slug: string
  path: string
  children: NavItem[]
}

export type NavItem = NavLeaf | NavGroup | NavSection
