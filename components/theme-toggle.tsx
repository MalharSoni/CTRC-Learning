"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "@phosphor-icons/react"

interface ThemeToggleProps {
  className?: string
}

/**
 * Animated theme toggle component for MkDocs Material theme integration
 *
 * Features:
 * - Smooth slide/fade animations
 * - Sun/moon icons from Lucide
 * - Green accent in dark mode (#22C55E)
 * - Syncs with MkDocs __palette data attribute
 *
 * @example
 * <ThemeToggle />
 */
export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false)

  // Sync with MkDocs Material theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentTheme = document.documentElement.getAttribute('data-md-color-scheme')
      setIsDark(currentTheme === 'slate')

      // Watch for theme changes from MkDocs controls
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'data-md-color-scheme') {
            const newTheme = document.documentElement.getAttribute('data-md-color-scheme')
            setIsDark(newTheme === 'slate')
          }
        })
      })

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-md-color-scheme']
      })

      return () => observer.disconnect()
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'default' : 'slate'

    // Update MkDocs theme
    document.documentElement.setAttribute('data-md-color-scheme', newTheme)

    // Store preference
    localStorage.setItem('theme', newTheme)

    // Update state
    setIsDark(!isDark)
  }

  return (
    <button
      className={`
        relative flex items-center w-16 h-8 p-1 rounded-full
        cursor-pointer transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark
          ? 'bg-neutral-900 border border-neutral-800 focus:ring-green-500'
          : 'bg-white border border-gray-300 focus:ring-blue-500'
        }
        ${className}
      `}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      role="switch"
      aria-checked={isDark}
    >
      {/* Slider background track */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className={`
            absolute inset-0 transition-opacity duration-300
            ${isDark ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            background: 'linear-gradient(135deg, #171717 0%, #262626 100%)'
          }}
        />
      </div>

      {/* Sliding toggle container */}
      <div className="relative flex justify-between items-center w-full h-full">
        {/* Moon icon (dark mode) */}
        <div
          className={`
            absolute left-0 flex justify-center items-center
            w-6 h-6 rounded-full transition-all duration-300 ease-in-out
            ${isDark
              ? 'translate-x-0 bg-green-500 shadow-lg shadow-green-500/50 opacity-100 scale-100'
              : 'translate-x-8 bg-transparent opacity-0 scale-75'
            }
          `}
        >
          <Moon
            size={16}
            weight="fill"
            className="text-white"
          />
        </div>

        {/* Sun icon (light mode) */}
        <div
          className={`
            absolute right-0 flex justify-center items-center
            w-6 h-6 rounded-full transition-all duration-300 ease-in-out
            ${!isDark
              ? 'translate-x-0 bg-amber-400 shadow-lg shadow-amber-400/50 opacity-100 scale-100'
              : '-translate-x-8 bg-transparent opacity-0 scale-75'
            }
          `}
        >
          <Sun
            size={16}
            weight="fill"
            className="text-white"
          />
        </div>
      </div>

      {/* Inactive icon hints */}
      <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none">
        <Sun
          size={14}
          weight="regular"
          className={`
            transition-opacity duration-300
            ${isDark ? 'opacity-30 text-gray-600' : 'opacity-0'}
          `}
        />
        <Moon
          size={14}
          weight="regular"
          className={`
            transition-opacity duration-300
            ${!isDark ? 'opacity-30 text-gray-400' : 'opacity-0'}
          `}
        />
      </div>
    </button>
  )
}

export default ThemeToggle
