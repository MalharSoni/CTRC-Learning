'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, BookOpen, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Lesson {
  title: string
  slug: string
  type: 'lesson' | 'challenge'
}

interface CourseSectionProps {
  title: string
  lessons: Lesson[]
  defaultOpen?: boolean
}

export function CourseSection({ title, lessons, defaultOpen = false }: CourseSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const lessonCount = lessons.filter((l) => l.type === 'lesson').length
  const challengeCount = lessons.filter((l) => l.type === 'challenge').length

  return (
    <div className="border border-[#E5E5E5] rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center justify-between px-5 py-4 text-left transition-colors',
          'bg-[#F8F8F8] hover:bg-[#F0F0F0]',
          isOpen && 'border-b border-[#E5E5E5]'
        )}
      >
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-semibold text-[#171717]">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[12px] font-medium text-[#737373]">
            {lessonCount} Lesson{lessonCount !== 1 ? 's' : ''}
            {challengeCount > 0 && (
              <> &middot; {challengeCount} Challenge{challengeCount !== 1 ? 's' : ''}</>
            )}
          </span>
          <ChevronDown
            size={18}
            className={cn(
              'text-[#A3A3A3] transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </div>
      </button>

      {/* Lesson list */}
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-200 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <ul>
            {lessons.map((lesson, i) => (
              <li
                key={lesson.slug}
                className={cn(
                  'group',
                  i < lessons.length - 1 && 'border-b border-[#F0F0F0]'
                )}
              >
                <Link
                  href={`/curriculum/${lesson.slug}`}
                  className="flex items-center gap-3.5 px-5 py-3 hover:bg-[#FAFAFA] transition-colors"
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      'w-[30px] h-[30px] rounded-md flex items-center justify-center flex-shrink-0',
                      lesson.type === 'challenge'
                        ? 'bg-[#FFFBEB] text-[#92400E]'
                        : 'bg-[#F5F5F5] text-[#737373]'
                    )}
                  >
                    {lesson.type === 'challenge' ? (
                      <Wrench size={15} />
                    ) : (
                      <BookOpen size={15} />
                    )}
                  </div>

                  {/* Title */}
                  <span className="flex-1 text-[14px] font-medium text-[#404040] group-hover:text-[#171717] transition-colors">
                    {lesson.title}
                  </span>

                  {/* Badge */}
                  <span
                    className={cn(
                      'text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 uppercase tracking-wide',
                      lesson.type === 'challenge'
                        ? 'bg-[#FFFBEB] text-[#92400E]'
                        : 'bg-[#F5F5F5] text-[#737373]'
                    )}
                  >
                    {lesson.type === 'challenge' ? 'Challenge' : 'Lesson'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
