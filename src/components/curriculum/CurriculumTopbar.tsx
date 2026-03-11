'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { getBreadcrumbs } from '@/lib/navigation'
import { ChevronRight, LogOut } from 'lucide-react'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function hashColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const colors = [
    '#EF4444', '#F59E0B', '#22C55E', '#3B82F6',
    '#8B5CF6', '#EC4899', '#14B8A6', '#F97316',
  ]
  return colors[Math.abs(hash) % colors.length]
}

function getSlugFromPathname(pathname: string): string {
  const prefix = '/curriculum/'
  if (pathname === '/curriculum') return ''
  if (pathname.startsWith(prefix)) return pathname.slice(prefix.length)
  return ''
}

export function CurriculumTopbar({ userName }: { userName: string }) {
  const pathname = usePathname()
  const slug = getSlugFromPathname(pathname)
  const breadcrumbs = getBreadcrumbs(slug)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#D4D4D4] h-[52px] flex items-center justify-between px-5 flex-shrink-0">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-[13px] min-w-0">
        <Link
          href="/curriculum"
          className="text-[#737373] hover:text-[#171717] transition-colors font-medium"
        >
          Home
        </Link>
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.slug} className="flex items-center gap-1.5 min-w-0">
            <ChevronRight size={12} className="text-[#A3A3A3] flex-shrink-0" />
            {i === breadcrumbs.length - 1 ? (
              <span className="text-[#171717] font-semibold truncate">
                {crumb.title}
              </span>
            ) : (
              <Link
                href={`/curriculum/${crumb.slug}`}
                className="text-[#737373] hover:text-[#171717] transition-colors font-medium truncate"
              >
                {crumb.title}
              </Link>
            )}
          </span>
        ))}
      </nav>

      {/* User actions */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div
            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[11px] font-bold"
            style={{ backgroundColor: hashColor(userName) }}
          >
            {getInitials(userName)}
          </div>
          <span className="text-[13px] font-medium text-[#404040] hidden sm:block">
            {userName}
          </span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] font-medium text-[#737373] hover:text-[#171717] hover:bg-[#F5F5F5] rounded-md transition-colors"
          title="Sign out"
        >
          <LogOut size={14} />
          <span className="hidden sm:inline">Sign out</span>
        </button>
      </div>
    </header>
  )
}
