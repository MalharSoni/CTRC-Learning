import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageNavigationProps {
  prev: { title: string; slug: string } | null
  next: { title: string; slug: string } | null
}

function getHref(slug: string) {
  if (slug === '') return '/curriculum'
  return `/curriculum/${slug}`
}

export function PageNavigation({ prev, next }: PageNavigationProps) {
  if (!prev && !next) return null

  return (
    <nav className="grid grid-cols-2 gap-4 mt-12 pt-6 border-t border-[#D4D4D4]">
      {prev ? (
        <Link
          href={getHref(prev.slug)}
          className={cn(
            'group flex items-center gap-3 p-4 rounded-[10px] border border-[#D4D4D4] bg-white',
            'hover:shadow-md hover:border-[#A3A3A3] transition-all duration-150'
          )}
        >
          <ArrowLeft
            size={16}
            className="text-[#A3A3A3] group-hover:text-[#FFD600] transition-colors flex-shrink-0"
          />
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#A3A3A3] mb-0.5">
              Previous
            </div>
            <div className="text-[13px] font-semibold text-[#171717] truncate">
              {prev.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={getHref(next.slug)}
          className={cn(
            'group flex items-center justify-end gap-3 p-4 rounded-[10px] border border-[#D4D4D4] bg-white text-right',
            'hover:shadow-md hover:border-[#A3A3A3] transition-all duration-150'
          )}
        >
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#A3A3A3] mb-0.5">
              Next
            </div>
            <div className="text-[13px] font-semibold text-[#171717] truncate">
              {next.title}
            </div>
          </div>
          <ArrowRight
            size={16}
            className="text-[#A3A3A3] group-hover:text-[#FFD600] transition-colors flex-shrink-0"
          />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
