"use client"

/**
 * CTRC Learning Icon System
 *
 * Professional icon library using Phosphor Icons.
 * Replaces generic Lucide icons and emoji with consistent, robotics-focused iconography.
 *
 * Installation:
 * npm install @phosphor-icons/react
 *
 * Usage:
 * import { icons, Icon } from './icons'
 * <Icon name="learning" size="md" variant="green" />
 */

import React from 'react'
import {
  // Navigation
  House,
  BookOpen,
  FolderOpen,
  Palette,
  Wrench,
  Users,

  // Learning & Education
  GraduationCap,
  Chalkboard,
  Student,
  Certificate,

  // Building & Tools
  Hammer,
  Screwdriver,
  Toolbox,
  Gear,
  GearSix,
  Robot,

  // Competition & Achievement
  Trophy,
  Medal,
  Target,
  Flag,
  Lightning,
  Fire,

  // Progress & Status
  CheckCircle,
  Circle,
  CircleDashed,
  Warning,

  // Time & Difficulty
  Clock,
  Timer,
  HourglassMedium,
  ChartBar,

  // Actions & UI
  MagnifyingGlass,
  X,
  List,
  CaretRight,
  ArrowRight,

  // Theme
  Moon,
  Sun,

  // Technical
  Code,
  Terminal,
  GitBranch,
  Cpu,
  CircuitBoard,

  // Content Types
  VideoCamera,
  FileText,
  Image as ImageIcon,
  Folder,

  // Social
  DiscordLogo,
  GithubLogo,

} from '@phosphor-icons/react'

// Icon mapping for consistent usage across the app
export const icons = {
  // Navigation
  home: House,
  foundation: BookOpen,
  projects: FolderOpen,
  design: Palette,
  mechanisms: Wrench,
  community: Users,

  // Learning concepts
  learning: BookOpen,
  education: GraduationCap,
  student: Student,
  educator: Chalkboard,
  mentor: Toolbox,
  certificate: Certificate,

  // Building & hands-on
  build: Hammer,
  tool: Screwdriver,
  toolbox: Toolbox,
  gear: Gear,
  gearComplex: GearSix,
  robot: Robot,
  wrench: Wrench,

  // Competition & achievement
  competition: Trophy,
  trophy: Trophy,
  medal: Medal,
  target: Target,
  flag: Flag,
  power: Lightning,
  fire: Fire,

  // Progress & status
  completed: CheckCircle,
  pending: Circle,
  current: CircleDashed,
  warning: Warning,

  // Time & difficulty
  clock: Clock,
  timer: Timer,
  duration: HourglassMedium,
  difficulty: ChartBar,

  // Actions & UI
  search: MagnifyingGlass,
  close: X,
  menu: List,
  next: CaretRight,
  arrow: ArrowRight,

  // Theme
  moon: Moon,
  sun: Sun,

  // Technical
  code: Code,
  terminal: Terminal,
  git: GitBranch,
  cpu: Cpu,
  circuit: CircuitBoard,

  // Content
  video: VideoCamera,
  document: FileText,
  image: ImageIcon,
  folder: Folder,

  // Social
  discord: DiscordLogo,
  github: GithubLogo,
} as const

// Icon size presets (matches CTRC design system)
export const iconSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
} as const

// Icon weight presets
export const iconWeights = {
  thin: 'thin',
  light: 'light',
  regular: 'regular',
  bold: 'bold',
  fill: 'fill',
  duotone: 'duotone',
} as const

// Color variants (CTRC design system)
export const iconColors = {
  green: '#00ff00',      // Primary accent (CTRC green)
  greenDim: '#00cc00',   // Dimmed green
  yellow: '#f5d000',     // Secondary accent (CTRC yellow)
  white: '#FFFFFF',      // Light theme primary
  black: '#171717',      // Dark theme primary
  gray1: '#737373',      // Secondary text
  gray2: '#A3A3A3',      // Tertiary text
  gray3: '#D4D4D4',      // Borders
} as const

// Icon component props
export interface IconProps {
  name: keyof typeof icons
  size?: keyof typeof iconSizes | number
  weight?: keyof typeof iconWeights
  color?: keyof typeof iconColors | string
  className?: string
}

/**
 * Unified Icon component with CTRC design system presets
 *
 * @example
 * // Standard usage
 * <Icon name="learning" size="md" color="green" />
 *
 * // Custom size and color
 * <Icon name="trophy" size={28} color="#00ff00" />
 *
 * // With Tailwind classes
 * <Icon name="robot" size="lg" className="text-green-500" />
 */
export function Icon({
  name,
  size = 'md',
  weight = 'regular',
  color,
  className = ''
}: IconProps) {
  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon library`)
    return null
  }

  const iconSize = typeof size === 'number' ? size : iconSizes[size]
  const iconWeight = iconWeights[weight]
  const iconColor = color && color in iconColors
    ? iconColors[color as keyof typeof iconColors]
    : color

  return (
    <IconComponent
      size={iconSize}
      weight={iconWeight as any}
      color={iconColor}
      className={className}
    />
  )
}

// Preset icon components for common use cases
export function LearningIcon(props: Omit<IconProps, 'name'>) {
  return <Icon name="learning" {...props} />
}

export function BuildIcon(props: Omit<IconProps, 'name'>) {
  return <Icon name="build" {...props} />
}

export function CompetitionIcon(props: Omit<IconProps, 'name'>) {
  return <Icon name="competition" {...props} />
}

export function RobotIcon(props: Omit<IconProps, 'name'>) {
  return <Icon name="robot" {...props} />
}

export function TimeIcon(props: Omit<IconProps, 'name'>) {
  return <Icon name="clock" {...props} />
}

export function DifficultyIcon(props: Omit<IconProps, 'name'>) {
  return <Icon name="difficulty" {...props} />
}

// Export everything for flexibility
export default Icon
