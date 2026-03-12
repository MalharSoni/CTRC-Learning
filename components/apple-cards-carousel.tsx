/**
 * Apple Cards Carousel Component - Aceternity UI
 * Adapted for CTRC Learning
 *
 * Sleek carousel with expandable cards inspired by Apple's product presentations
 * Uses CTRC design system with Inter font and accent colors
 *
 * Dependencies:
 * - framer-motion
 * - React hooks
 *
 * Usage:
 * ```tsx
 * import { Carousel, Card } from './apple-cards-carousel'
 *
 * const cards = [
 *   {
 *     category: "Lesson 1",
 *     title: "Introduction to VEX Robotics",
 *     src: "/images/lesson1.jpg",
 *     content: <LessonContent />
 *   }
 * ]
 *
 * <Carousel items={cards.map((card, i) => <Card key={i} card={card} index={i} />)} />
 * ```
 */

"use client"

import React, { useEffect, useRef, useState, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Utility function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

// Outside click hook
export function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, callback])
}

// Types
export type CardType = {
  src: string
  title: string
  category: string
  content: React.ReactNode
}

export interface CardProps {
  card: CardType
  index: number
  layout?: boolean
}

export interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

// Carousel context
const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

// Main Carousel component
export function Carousel({ items, initialScroll = 0 }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 384 // w-96
      const gap = 16 // gap-4
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex gap-4 pl-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                className="last:pr-4"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="h-10 w-10 rounded-full bg-[#141414] border border-[rgba(255,255,255,0.08)] flex items-center justify-center disabled:opacity-50 hover:bg-[#1a1a1a] transition-colors"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <span className="text-[#a0aec0]">←</span>
          </button>
          <button
            className="h-10 w-10 rounded-full bg-[#141414] border border-[rgba(255,255,255,0.08)] flex items-center justify-center disabled:opacity-50 hover:bg-[#1a1a1a] transition-colors"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <span className="text-[#a0aec0]">→</span>
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

// Card component
export function Card({ card, index, layout = false }: CardProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onCardClose } = useContext(CarouselContext)

  useOutsideClick(containerRef, () => handleClose())

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    onCardClose(index)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-full flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
                onClick={handleClose}
              >
                <span className="text-[#a0aec0]">✕</span>
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-[#00ff88] text-sm font-medium"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-white text-2xl md:text-5xl font-bold mt-4"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] h-80 w-96 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 hover:border-[rgba(0,255,136,0.3)] transition-colors"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.title}` : undefined}
            className="text-[#00ff88] text-sm md:text-base font-medium"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-bold max-w-xs text-left mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute z-10 inset-0 w-full h-full"
        />
      </motion.button>
    </>
  )
}
