'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { signOut } from 'next-auth/react' // Bypassed pending Azure AD setup
import { LogOut, Bot } from 'lucide-react'
import { cn } from '@/lib/utils'

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

const navLinks = [
  { label: 'Foundation', href: '/curriculum' },
  { label: 'Projects', href: '/curriculum/projects' },
  { label: 'Handbook', href: '/curriculum/design-handbook' },
]

export function CurriculumNav({ userName }: { userName: string }) {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/curriculum') {
      return pathname === '/curriculum' || pathname.startsWith('/curriculum/foundation')
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
      {/* Green accent bar */}
      <div className="h-[3px] bg-[#54AC58]" />

      <div className="max-w-[1100px] mx-auto px-6 h-[56px] flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#171717] hover:opacity-80 transition-opacity"
          >
            <Bot size={22} className="text-[#54AC58]" />
            <span className="text-[15px] font-bold tracking-tight">
              CTRC Learning
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-1.5 rounded-md text-[13.5px] font-medium transition-colors',
                  isActive(link.href)
                    ? 'text-[#171717] bg-[#F0F0F0]'
                    : 'text-[#737373] hover:text-[#171717] hover:bg-[#F5F5F5]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: User */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-white text-[10px] font-bold"
              style={{ backgroundColor: hashColor(userName) }}
            >
              {getInitials(userName)}
            </div>
            <span className="text-[13px] font-medium text-[#404040] hidden md:block">
              {userName}
            </span>
          </div>
          <button
            onClick={() => { window.location.href = '/' }} // Bypass: was signOut()
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] font-medium text-[#737373] hover:text-[#171717] hover:bg-[#F5F5F5] rounded-md transition-colors"
            title="Sign out"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </div>
      </div>
    </header>
  )
}
