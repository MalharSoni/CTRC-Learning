'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navigation } from '@/lib/navigation'
import type { NavItem, NavSection } from '@/types/navigation'
import {
  BookOpen,
  Wrench,
  Trophy,
  FolderOpen,
  Home,
  FileText,
  Users,
  BookMarked,
  Lightbulb,
  Link as LinkIcon,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  History,
  GitPullRequest,
} from 'lucide-react'

const sectionIcons: Record<string, React.ReactNode> = {
  '': <Home size={16} />,
  'website-feature-guide': <FileText size={16} />,
  'foundation': <BookOpen size={16} />,
  'projects': <FolderOpen size={16} />,
  'design-handbook': <Wrench size={16} />,
  'mechanism-examples': <Lightbulb size={16} />,
  'best-practices': <Trophy size={16} />,
  'resources': <LinkIcon size={16} />,
  'educators-guide': <GraduationCap size={16} />,
  'changelog': <History size={16} />,
  'contribution': <GitPullRequest size={16} />,
}

function getHref(slug: string) {
  if (slug === '') return '/curriculum'
  return `/curriculum/${slug}`
}

function NavLeafItem({
  item,
  isActive,
  depth,
}: {
  item: NavItem
  isActive: boolean
  depth: number
}) {
  return (
    <Link
      href={getHref(item.slug)}
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors duration-150',
        depth === 0 && 'pl-3',
        depth === 1 && 'pl-8',
        depth === 2 && 'pl-12',
        isActive
          ? 'text-white border-l-2 border-l-[#FFD600] bg-[#262626]'
          : 'text-gray-400 hover:text-white hover:bg-[#262626]'
      )}
    >
      {depth === 0 && sectionIcons[item.slug] && (
        <span className="flex-shrink-0">{sectionIcons[item.slug]}</span>
      )}
      <span className="truncate">{item.title}</span>
    </Link>
  )
}

function NavGroupItem({
  item,
  pathname,
  depth,
}: {
  item: NavItem
  pathname: string
  depth: number
}) {
  const isActiveDescendant =
    item.type !== 'leaf' &&
    'children' in item &&
    item.children.length > 0 &&
    (pathname === getHref(item.slug) ||
      pathname.startsWith(getHref(item.slug) + '/'))

  const [isOpen, setIsOpen] = useState(isActiveDescendant)
  const isActive = pathname === getHref(item.slug)

  if (item.type === 'leaf' || ('children' in item && item.children.length === 0)) {
    return <NavLeafItem item={item} isActive={isActive} depth={depth} />
  }

  const children = 'children' in item ? item.children : []

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={getHref(item.slug)}
          className={cn(
            'flex-1 flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors duration-150',
            depth === 0 && 'pl-3',
            depth === 1 && 'pl-8',
            depth === 2 && 'pl-12',
            isActive
              ? 'text-white border-l-2 border-l-[#FFD600] bg-[#262626]'
              : 'text-gray-400 hover:text-white hover:bg-[#262626]'
          )}
        >
          {depth === 0 && sectionIcons[item.slug] && (
            <span className="flex-shrink-0">{sectionIcons[item.slug]}</span>
          )}
          <span className="truncate">{item.title}</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 mr-2 text-gray-500 hover:text-gray-300 transition-colors"
          aria-label={isOpen ? 'Collapse' : 'Expand'}
        >
          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-0.5">
          {children.map((child) => (
            <NavTreeItem
              key={child.slug}
              item={child}
              pathname={pathname}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function NavTreeItem({
  item,
  pathname,
  depth,
}: {
  item: NavItem
  pathname: string
  depth: number
}) {
  if (item.type === 'leaf') {
    const isActive = pathname === getHref(item.slug)
    return <NavLeafItem item={item} isActive={isActive} depth={depth} />
  }

  return <NavGroupItem item={item} pathname={pathname} depth={depth} />
}

function SectionBlock({
  section,
  pathname,
}: {
  section: NavSection
  pathname: string
}) {
  const hasChildren = section.children.length > 0
  const isActiveDescendant =
    pathname === getHref(section.slug) ||
    pathname.startsWith(getHref(section.slug) + '/')
  const [isOpen, setIsOpen] = useState(isActiveDescendant)

  if (!hasChildren) {
    const isActive = pathname === getHref(section.slug)
    return (
      <div className="mb-1">
        <NavLeafItem item={section} isActive={isActive} depth={0} />
      </div>
    )
  }

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between px-3 mb-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 w-full group"
        >
          {sectionIcons[section.slug] && (
            <span className="text-gray-500 flex-shrink-0">
              {sectionIcons[section.slug]}
            </span>
          )}
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 group-hover:text-gray-400 transition-colors">
            {section.title}
          </span>
          <span className="ml-auto text-gray-600">
            {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="space-y-0.5">
          {/* Link to section index */}
          <Link
            href={getHref(section.slug)}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 pl-8 text-[13px] font-medium rounded-md transition-colors duration-150',
              pathname === getHref(section.slug)
                ? 'text-white border-l-2 border-l-[#FFD600] bg-[#262626]'
                : 'text-gray-400 hover:text-white hover:bg-[#262626]'
            )}
          >
            Overview
          </Link>
          {section.children.map((child) => (
            <NavTreeItem
              key={child.slug}
              item={child}
              pathname={pathname}
              depth={1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function CurriculumSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 z-40 w-[240px] h-full bg-[#171717] flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 h-[52px] border-b border-[#262626] flex-shrink-0">
        <div className="w-7 h-7 rounded-md bg-[#FFD600] flex items-center justify-center">
          <BookMarked size={16} className="text-[#171717]" />
        </div>
        <span className="text-white text-[15px] font-bold tracking-tight">
          CTRC Learning
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-1">
        {navigation.map((section) => (
          <SectionBlock
            key={section.slug}
            section={section}
            pathname={pathname}
          />
        ))}
      </nav>
    </aside>
  )
}
