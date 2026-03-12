"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  FileCode,
  Lightbulb,
  MagnifyingGlass,
  Command,
  ArrowRight,
  X,
} from "@phosphor-icons/react"

// Search item type
export interface SearchItem {
  id: string
  label: string
  description: string
  category: "lesson" | "project" | "handbook"
  icon: React.ReactNode
  shortcut?: string
  url: string
}

interface SearchBarProps {
  items?: SearchItem[]
  onSelect?: (item: SearchItem) => void
}

// Default CTRC Learning search items
const defaultItems: SearchItem[] = [
  // Lessons
  {
    id: "unit-1-1",
    label: "Unit 1.1 - Introduction to Robotics",
    description: "Basic robotics concepts and VEX hardware",
    category: "lesson",
    icon: <BookOpen size={16} weight="regular" className="text-emerald-500" />,
    url: "/lessons/unit-1-1",
  },
  {
    id: "unit-1-2",
    label: "Unit 1.2 - Building Basics",
    description: "Structural engineering and building techniques",
    category: "lesson",
    icon: <BookOpen size={16} weight="regular" className="text-emerald-500" />,
    url: "/lessons/unit-1-2",
  },
  {
    id: "unit-2-1",
    label: "Unit 2.1 - Programming Fundamentals",
    description: "VEXcode basics and autonomous programming",
    category: "lesson",
    icon: <BookOpen size={16} weight="regular" className="text-emerald-500" />,
    url: "/lessons/unit-2-1",
  },
  {
    id: "unit-2-3",
    label: "Unit 2.3 - Advanced Sensors",
    description: "Vision sensors, GPS, and inertial sensors",
    category: "lesson",
    icon: <BookOpen size={16} weight="regular" className="text-emerald-500" />,
    url: "/lessons/unit-2-3",
  },
  {
    id: "unit-3-1",
    label: "Unit 3.1 - Competition Strategy",
    description: "Game analysis and strategic planning",
    category: "lesson",
    icon: <BookOpen size={16} weight="regular" className="text-emerald-500" />,
    url: "/lessons/unit-3-1",
  },

  // Projects
  {
    id: "battlebots",
    label: "BattleBots Project",
    description: "Build and program a combat robot",
    category: "project",
    icon: <FileCode size={16} weight="regular" className="text-blue-500" />,
    shortcut: "⌘B",
    url: "/projects/battlebots",
  },
  {
    id: "autonomous-challenge",
    label: "Autonomous Challenge",
    description: "Navigate obstacle course autonomously",
    category: "project",
    icon: <FileCode size={16} weight="regular" className="text-blue-500" />,
    url: "/projects/autonomous-challenge",
  },
  {
    id: "high-stakes-bot",
    label: "High Stakes Competition Bot",
    description: "Season 2024-2025 competition robot",
    category: "project",
    icon: <FileCode size={16} weight="regular" className="text-blue-500" />,
    url: "/projects/high-stakes",
  },

  // Design Handbook
  {
    id: "design-process",
    label: "Design Process",
    description: "Engineering design cycle and iteration",
    category: "handbook",
    icon: <Lightbulb size={16} weight="regular" className="text-amber-500" />,
    url: "/handbook/design-process",
  },
  {
    id: "gear-ratios",
    label: "Gear Ratios Guide",
    description: "Understanding torque and speed calculations",
    category: "handbook",
    icon: <Lightbulb size={16} weight="regular" className="text-amber-500" />,
    url: "/handbook/gear-ratios",
  },
  {
    id: "pid-control",
    label: "PID Control",
    description: "Proportional-Integral-Derivative tuning",
    category: "handbook",
    icon: <Lightbulb size={16} weight="regular" className="text-amber-500" />,
    url: "/handbook/pid-control",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting Guide",
    description: "Common issues and solutions",
    category: "handbook",
    icon: <Lightbulb size={16} weight="regular" className="text-amber-500" />,
    url: "/handbook/troubleshooting",
  },
]

// Fuzzy search function
function fuzzyMatch(text: string, query: string): boolean {
  const textLower = text.toLowerCase()
  const queryLower = query.toLowerCase()

  if (textLower.includes(queryLower)) return true

  let queryIndex = 0
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex++
    }
  }
  return queryIndex === queryLower.length
}

export function CTRCSearchBar({ items = defaultItems, onSelect }: SearchBarProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Filter items based on fuzzy search
  const filteredItems = React.useMemo(() => {
    if (!search) return items

    return items.filter((item) => {
      return (
        fuzzyMatch(item.label, search) ||
        fuzzyMatch(item.description, search) ||
        fuzzyMatch(item.category, search)
      )
    })
  }, [items, search])

  // Group filtered items by category
  const groupedItems = React.useMemo(() => {
    const groups: Record<string, SearchItem[]> = {
      lesson: [],
      project: [],
      handbook: [],
    }

    filteredItems.forEach((item) => {
      groups[item.category].push(item)
    })

    return groups
  }, [filteredItems])

  // Keyboard shortcut to open (Cmd+K / Ctrl+K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }

      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Focus input when opened
  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  // Reset state when closed
  React.useEffect(() => {
    if (!open) {
      setSearch("")
      setSelectedIndex(0)
    }
  }, [open])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex])
      }
    }
  }

  const handleSelect = (item: SearchItem) => {
    onSelect?.(item)
    setOpen(false)
    // Navigate to URL (in a real app, use Next.js router)
    console.log("Navigate to:", item.url)
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "lesson":
        return "Lessons"
      case "project":
        return "Projects"
      case "handbook":
        return "Design Handbook"
      default:
        return category
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 h-9 px-3 rounded-lg border border-neutral-700 bg-neutral-900/50 text-sm text-neutral-400 hover:bg-neutral-800/50 hover:border-neutral-600 transition-colors"
      >
        <MagnifyingGlass size={16} weight="regular" />
        <span>Search CTRC Learning...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 ml-auto text-xs font-medium text-neutral-500">
          <Command size={12} weight="regular" />K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Search Dialog */}
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl mx-4 bg-neutral-900 rounded-xl shadow-2xl border border-neutral-700 overflow-hidden pointer-events-auto"
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
                  <MagnifyingGlass size={20} weight="regular" className="text-neutral-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search lessons, projects, handbook..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value)
                      setSelectedIndex(0)
                    }}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-white placeholder:text-neutral-500 outline-none text-base"
                  />
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1 rounded-md hover:bg-neutral-800 transition-colors"
                  >
                    <X size={16} weight="regular" className="text-neutral-400" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {filteredItems.length === 0 ? (
                    <div className="px-4 py-12 text-center text-neutral-500">
                      <MagnifyingGlass size={48} weight="regular" className="mx-auto mb-3 opacity-20" />
                      <p>No results found for "{search}"</p>
                    </div>
                  ) : (
                    <div className="py-2">
                      {Object.entries(groupedItems).map(([category, categoryItems]) => {
                        if (categoryItems.length === 0) return null

                        return (
                          <div key={category} className="mb-4 last:mb-0">
                            <div className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                              {getCategoryLabel(category)}
                            </div>
                            {categoryItems.map((item, index) => {
                              const globalIndex = filteredItems.indexOf(item)
                              const isSelected = globalIndex === selectedIndex

                              return (
                                <button
                                  key={item.id}
                                  onClick={() => handleSelect(item)}
                                  onMouseEnter={() => setSelectedIndex(globalIndex)}
                                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                                    isSelected
                                      ? "bg-emerald-500/10 border-l-2 border-emerald-500"
                                      : "hover:bg-neutral-800/50 border-l-2 border-transparent"
                                  }`}
                                >
                                  <div className="flex-shrink-0">{item.icon}</div>
                                  <div className="flex-1 text-left min-w-0">
                                    <div className="text-sm font-medium text-white truncate">
                                      {item.label}
                                    </div>
                                    <div className="text-xs text-neutral-400 truncate">
                                      {item.description}
                                    </div>
                                  </div>
                                  {item.shortcut && (
                                    <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs font-medium text-neutral-500 bg-neutral-800 rounded">
                                      {item.shortcut}
                                    </kbd>
                                  )}
                                  {isSelected && (
                                    <ArrowRight size={16} weight="regular" className="text-emerald-500 flex-shrink-0" />
                                  )}
                                </button>
                              )
                            })}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-neutral-800 bg-neutral-900/50">
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <div className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded text-neutral-400">↑</kbd>
                      <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded text-neutral-400">↓</kbd>
                      <span>Navigate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded text-neutral-400">↵</kbd>
                      <span>Select</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded text-neutral-400">Esc</kbd>
                      <span>Close</span>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-600">
                    {filteredItems.length} {filteredItems.length === 1 ? "result" : "results"}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// Export default for convenience
export default CTRCSearchBar
