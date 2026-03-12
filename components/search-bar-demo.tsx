"use client"

import { CTRCSearchBar } from "./search-bar"
import type { SearchItem } from "./search-bar"

export default function SearchBarDemo() {
  const handleSelect = (item: SearchItem) => {
    console.log("Selected:", item)
    // In a real Next.js app, use:
    // import { useRouter } from "next/navigation"
    // const router = useRouter()
    // router.push(item.url)
  }

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">CTRC Learning Search</h1>
          <p className="text-neutral-400">
            Press <kbd className="px-2 py-1 bg-neutral-800 rounded text-sm">⌘K</kbd> or{" "}
            <kbd className="px-2 py-1 bg-neutral-800 rounded text-sm">Ctrl+K</kbd> to open search
          </p>
        </div>

        <CTRCSearchBar onSelect={handleSelect} />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Features</h2>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Fuzzy search across lessons, projects, and handbook topics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Keyboard navigation with arrow keys</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Quick access with Cmd+K / Ctrl+K</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Dark theme with green highlights (CTRC brand colors)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Categorized results for easy scanning</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Try searching for:</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Unit 1.1",
                "BattleBots",
                "PID",
                "sensors",
                "autonomous",
                "gear ratios",
                "troubleshooting",
              ].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg text-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
