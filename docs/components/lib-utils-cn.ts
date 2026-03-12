/**
 * cn() - Class Name Utility
 *
 * Merges Tailwind CSS classes intelligently, handling conflicts.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 *
 * Usage:
 * cn('px-4 py-2', isActive && 'bg-blue-500', 'px-6') // → 'px-6 py-2 bg-blue-500'
 *
 * Install dependencies:
 * npm install clsx tailwind-merge
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * If your project already has lib/utils.ts with cn(), you can ignore this file.
 * If not, copy this to: /lib/utils.ts or /src/lib/utils.ts
 */
