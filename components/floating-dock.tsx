/**
 * Floating Dock Component - Aceternity UI
 * Adapted for CTRC Learning
 *
 * macOS-style floating navigation dock with smooth hover animations
 * Uses Phosphor Icons and CTRC design system
 *
 * Dependencies:
 * - @phosphor-icons/react
 * - framer-motion
 *
 * Usage:
 * ```tsx
 * import { FloatingDock } from './floating-dock'
 * import { House, BookOpen, Trophy } from '@phosphor-icons/react'
 *
 * const links = [
 *   { title: "Home", icon: <House size={20} />, href: "/" },
 *   { title: "Learn", icon: <BookOpen size={20} />, href: "/lessons" },
 *   { title: "Compete", icon: <Trophy size={20} />, href: "/competition" },
 * ]
 *
 * <FloatingDock items={links} />
 * ```
 */

"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

// Utility function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

// Types
export interface DockItem {
  title: string
  icon: React.ReactNode
  href: string
}

export interface FloatingDockProps {
  items: DockItem[]
  desktopClassName?: string
  mobileClassName?: string
}

// Main component with responsive variants
export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  )
}

// Desktop variant with magnification effect
function FloatingDockDesktop({
  items,
  className,
}: {
  items: DockItem[]
  className?: string
}) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex h-16 gap-4 items-end rounded-2xl bg-[#0a0a0a] dark:bg-[#0a0a0a] px-4 pb-3",
        "border border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
        "backdrop-blur-md bg-opacity-60",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

// Mobile variant - simple horizontal list
function FloatingDockMobile({
  items,
  className,
}: {
  items: DockItem[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex md:hidden h-14 gap-3 items-center justify-center rounded-2xl bg-[#0a0a0a] px-4",
        "border border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
        "backdrop-blur-md bg-opacity-60",
        className
      )}
    >
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          aria-label={item.title}
        >
          <div className="text-[#a0aec0] hover:text-[#00ff88] transition-colors">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  )
}

// Individual icon with magnification effect
function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: any
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <a href={href} ref={ref}>
      <motion.div
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-center relative rounded-lg bg-[#141414] hover:bg-[#1a1a1a] transition-colors"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-[#a0aec0] hover:text-[#00ff88] transition-colors"
        >
          {icon}
        </motion.div>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute left-1/2 -translate-x-1/2 -top-8 w-fit whitespace-pre rounded-md bg-[#141414] border border-[rgba(255,255,255,0.08)] px-2 py-0.5 text-xs text-[#a0aec0]"
          >
            {title}
          </motion.div>
        )}
      </motion.div>
    </a>
  )
}
