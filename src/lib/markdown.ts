import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import { preprocessAdmonitions } from './remark-admonitions'

const DOCS_DIR = path.join(process.cwd(), 'docs')

export async function getMarkdownContent(docPath: string) {
  const fullPath = path.join(DOCS_DIR, docPath)
  const raw = await fs.readFile(fullPath, 'utf-8')
  const { content, data } = matter(raw)

  // Preprocess MkDocs-specific syntax
  let processed = preprocessAdmonitions(content)

  // Fix image paths (relative to docs/)
  processed = processed.replace(/\(\.\.\/\.\.\/img\//g, '(/img/')
  processed = processed.replace(/\(\.\.\/img\//g, '(/img/')

  return { content: processed, frontmatter: data }
}

export async function compileMDXContent(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeHighlight],
      },
    },
  })

  return content
}

export function getHeadings(content: string) {
  const headings: { id: string; text: string; level: number }[] = []
  const lines = content.split('\n')
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/)
    if (match) {
      const level = match[1].length
      const text = match[2].replace(/\*\*/g, '').replace(/`/g, '').trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
      headings.push({ id, text, level })
    }
  }
  return headings
}
