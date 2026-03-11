/**
 * Preprocessor that converts MkDocs admonition syntax to HTML div blocks
 * before MDX processing.
 *
 * Supports:
 *   !!! type "Title"     → static admonition
 *   !!! type             → static admonition, title derived from type
 *   ???  type "Title"    → collapsible (closed by default)  → <details>
 *   ???+ type "Title"    → collapsible (open by default)    → <details open>
 */

type AdmonitionVariant = 'static' | 'collapsible' | 'collapsible-open'

interface ParsedAdmonition {
  variant: AdmonitionVariant
  type: string
  title: string
  contentLines: string[]
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Parse a single admonition block starting at `startIndex`.
 * Returns the parsed admonition and the index of the first line that is NOT
 * part of the block (i.e. the line after the block ends).
 */
function parseAdmonition(
  lines: string[],
  startIndex: number,
  headerMatch: RegExpMatchArray
): { admonition: ParsedAdmonition; endIndex: number } {
  const prefix = headerMatch[1] // '!!!', '???', or '???+'
  const type = headerMatch[2]
  const rawTitle = headerMatch[3] // may be undefined

  let variant: AdmonitionVariant = 'static'
  if (prefix.startsWith('???+')) {
    variant = 'collapsible-open'
  } else if (prefix.startsWith('???')) {
    variant = 'collapsible'
  }

  const title = rawTitle ? rawTitle.trim() : capitalize(type)

  // Collect indented content lines (4-space indent)
  const contentLines: string[] = []
  let i = startIndex + 1

  while (i < lines.length) {
    const line = lines[i]

    // A line that is part of the admonition body:
    // - indented by 4 spaces, OR
    // - completely blank (preserves paragraph breaks inside the block)
    if (line.startsWith('    ')) {
      contentLines.push(line.slice(4)) // strip the 4-space indent
      i++
    } else if (line.trim() === '') {
      // Blank line: could be internal to the admonition or a terminator.
      // Peek ahead to see if the next non-blank line is still indented.
      let peekIndex = i + 1
      while (peekIndex < lines.length && lines[peekIndex].trim() === '') {
        peekIndex++
      }
      if (peekIndex < lines.length && lines[peekIndex].startsWith('    ')) {
        // Still inside the admonition — preserve the blank line(s)
        contentLines.push('')
        i++
      } else {
        // End of the admonition block
        break
      }
    } else {
      // Non-indented, non-blank line → end of admonition
      break
    }
  }

  return {
    admonition: { variant, type, title, contentLines },
    endIndex: i,
  }
}

function renderAdmonition(adm: ParsedAdmonition): string[] {
  const content = adm.contentLines.join('\n').trim()
  const out: string[] = []

  if (adm.variant === 'static') {
    out.push(`<div class="admonition admonition-${adm.type}">`)
    out.push(`<div class="admonition-title">${adm.title}</div>`)
    out.push(`<div class="admonition-content">`)
    out.push('')
    out.push(content)
    out.push('')
    out.push('</div>')
    out.push('</div>')
  } else {
    const openAttr = adm.variant === 'collapsible-open' ? ' open' : ''
    out.push(`<details class="admonition admonition-${adm.type}"${openAttr}>`)
    out.push(`<summary class="admonition-title">${adm.title}</summary>`)
    out.push(`<div class="admonition-content">`)
    out.push('')
    out.push(content)
    out.push('')
    out.push('</div>')
    out.push('</details>')
  }

  return out
}

// Regex to match the opening line of an admonition.
// Groups: (1) prefix  (2) type  (3) optional quoted title
const ADMONITION_RE = /^(!!!|\?\?\?\+|\?\?\?)\s+(\w+)(?:\s+"([^"]*)")?$/

/**
 * Pre-process raw markdown content, converting MkDocs admonition blocks
 * into HTML that MDX can render.
 */
export function preprocessAdmonitions(markdown: string): string {
  const lines = markdown.split('\n')
  const output: string[] = []
  let i = 0

  while (i < lines.length) {
    const match = lines[i].match(ADMONITION_RE)
    if (match) {
      const { admonition, endIndex } = parseAdmonition(lines, i, match)
      output.push(...renderAdmonition(admonition))
      i = endIndex
    } else {
      output.push(lines[i])
      i++
    }
  }

  return output.join('\n')
}
