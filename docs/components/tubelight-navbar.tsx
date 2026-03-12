"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Icon as PhosphorIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon?: React.ComponentType<{ size?: number; weight?: string; className?: string }>
}

interface TubelightNavbarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function TubelightNavbar({
  items,
  className,
  defaultActive
}: TubelightNavbarProps) {
  const [activeTab, setActiveTab] = useState(defaultActive || items[0]?.name)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name
        const isHovered = hoveredTab === item.name

        return (
          <Link
            key={item.name}
            href={item.url}
            onClick={() => setActiveTab(item.name)}
            onMouseEnter={() => setHoveredTab(item.name)}
            onMouseLeave={() => setHoveredTab(null)}
            className={cn(
              "relative cursor-pointer text-[13.5px] font-medium px-4 py-2 rounded-md transition-colors duration-150",
              isActive
                ? "text-white"
                : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              {Icon && <Icon size={16} weight="regular" />}
              {item.name}
            </span>

            {/* Active state with green tubelight glow */}
            {isActive && (
              <motion.div
                layoutId="tubelight"
                className="absolute inset-0 bg-neutral-800/50 rounded-md -z-0"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              >
                {/* Bottom tubelight bar */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#00ff00] rounded-full">
                  {/* Layered green glow effect */}
                  <div className="absolute w-full h-8 bg-[#00ff00]/30 rounded-full blur-lg -top-4" />
                  <div className="absolute w-full h-6 bg-[#00ff00]/40 rounded-full blur-md -top-3" />
                  <div className="absolute w-full h-4 bg-[#00ff00]/60 rounded-full blur-sm -top-2" />
                  <div className="absolute w-full h-2 bg-[#00ff00] rounded-full" />
                </div>
              </motion.div>
            )}

            {/* Hover state with subtle green glow */}
            {isHovered && !isActive && (
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#00ff00]/40 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute w-full h-4 bg-[#00ff00]/20 rounded-full blur-sm -top-2" />
              </motion.div>
            )}
          </Link>
        )
      })}
    </div>
  )
}

// Export default for easier imports
export default TubelightNavbar
