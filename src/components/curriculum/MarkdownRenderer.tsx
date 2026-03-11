'use client'

import { cn } from '@/lib/utils'

interface MarkdownRendererProps {
  children: React.ReactNode
  className?: string
}

export function MarkdownRenderer({ children, className }: MarkdownRendererProps) {
  return (
    <article
      className={cn(
        'prose prose-neutral max-w-none',
        // Headings
        'prose-headings:font-bold prose-headings:tracking-tight',
        'prose-h1:text-[22px] prose-h1:font-extrabold',
        'prose-h2:text-[18px] prose-h2:mt-10 prose-h2:mb-4',
        'prose-h3:text-[15px] prose-h3:mt-8 prose-h3:mb-3',
        // Links
        'prose-a:text-[#FFD600] prose-a:no-underline hover:prose-a:underline prose-a:font-medium',
        // Code
        'prose-code:text-[13px] prose-code:font-medium prose-code:bg-[#F5F5F5] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:bg-[#1e1e1e] prose-pre:text-[13px] prose-pre:rounded-lg prose-pre:border prose-pre:border-[#D4D4D4]',
        // Tables
        'prose-th:text-[11px] prose-th:font-bold prose-th:uppercase prose-th:tracking-wide prose-th:text-[#737373] prose-th:bg-[#F5F5F5]',
        'prose-td:text-[13px]',
        // Images
        'prose-img:rounded-lg prose-img:border prose-img:border-[#D4D4D4]',
        // Lists
        'prose-li:text-[14px]',
        // Paragraphs
        'prose-p:text-[14px] prose-p:leading-relaxed',
        // Strong
        'prose-strong:font-semibold',
        className
      )}
    >
      {children}
    </article>
  )
}
