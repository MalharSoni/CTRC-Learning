import { notFound } from 'next/navigation'
import {
  navigation,
  findNavItem,
  flattenNav,
} from '@/lib/navigation'
import {
  getMarkdownContent,
  compileMDXContent,
  getHeadings,
} from '@/lib/markdown'
import { MarkdownRenderer } from '@/components/curriculum/MarkdownRenderer'
import { TableOfContents } from '@/components/curriculum/TableOfContents'
import { PageNavigation } from '@/components/curriculum/PageNavigation'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export default async function CurriculumSlugPage({ params }: PageProps) {
  const { slug } = await params
  const joinedSlug = slug.join('/')

  // Find the nav item
  const navItem = findNavItem(joinedSlug)
  if (!navItem) {
    notFound()
  }

  // Read and compile the markdown
  let markdownContent: string
  let headings: { id: string; text: string; level: number }[]
  let compiledContent: React.ReactNode

  try {
    const { content } = await getMarkdownContent(navItem.path)
    headings = getHeadings(content)
    compiledContent = await compileMDXContent(content)
    markdownContent = content
  } catch {
    notFound()
  }

  // Get prev/next navigation
  const allLeaves = flattenNav(navigation)
  const currentIndex = allLeaves.findIndex((leaf) => leaf.slug === joinedSlug)
  const prev = currentIndex > 0 ? allLeaves[currentIndex - 1] : null
  const next =
    currentIndex < allLeaves.length - 1 ? allLeaves[currentIndex + 1] : null

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex gap-8">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <MarkdownRenderer>{compiledContent}</MarkdownRenderer>
          <PageNavigation
            prev={prev ? { title: prev.title, slug: prev.slug } : null}
            next={next ? { title: next.title, slug: next.slug } : null}
          />
        </div>

        {/* Table of Contents sidebar */}
        {headings.length > 0 && (
          <div className="hidden lg:block w-[200px] flex-shrink-0">
            <TableOfContents headings={headings} />
          </div>
        )}
      </div>
    </div>
  )
}
