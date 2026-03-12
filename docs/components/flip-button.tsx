'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FlipButtonProps {
  frontText: string
  backText: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
}

/**
 * FlipButton - 3D flip animation button component
 *
 * Features:
 * - Smooth 3D flip animation on hover
 * - Green primary color scheme (#00ff00)
 * - Dark mode friendly
 * - Keyboard accessible (Space/Enter to activate)
 * - Scale animations on interaction
 *
 * Usage:
 * <FlipButton
 *   frontText="Start Learning"
 *   backText="Let's Go!"
 *   onClick={() => router.push('/learning')}
 * />
 */
export function FlipButton({
  frontText,
  backText,
  onClick,
  className,
  variant = 'primary'
}: FlipButtonProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    onClick?.()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  // Variant styles
  const variants = {
    primary: {
      front: {
        background: '#00ff00',
        color: '#171717',
        border: '2px solid #00ff00'
      },
      back: {
        background: '#00dd00',
        color: '#171717',
        border: '2px solid #00dd00'
      }
    },
    secondary: {
      front: {
        background: '#171717',
        color: '#00ff00',
        border: '2px solid #00ff00'
      },
      back: {
        background: '#262626',
        color: '#00ff00',
        border: '2px solid #00ff00'
      }
    },
    outline: {
      front: {
        background: 'transparent',
        color: '#00ff00',
        border: '2px solid #00ff00'
      },
      back: {
        background: 'rgba(0, 255, 0, 0.1)',
        color: '#00ff00',
        border: '2px solid #00ff00'
      }
    }
  }

  const currentVariant = variants[variant]

  return (
    <div
      className={cn('perspective-1000', className)}
      style={{ perspective: '1000px' }}
    >
      <motion.button
        className="relative w-full cursor-pointer px-6 py-3.5 font-semibold text-sm rounded-lg overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          ...currentVariant.front
        }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onHoverStart={() => {
          setIsHovered(true)
          setIsFlipped(true)
        }}
        onHoverEnd={() => {
          setIsHovered(false)
          setIsFlipped(false)
        }}
        animate={{
          rotateX: isFlipped ? 180 : 0,
          ...currentVariant[isFlipped ? 'back' : 'front']
        }}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 100,
          damping: 15
        }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        tabIndex={0}
        role="button"
        aria-label={frontText}
      >
        {/* Front face */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          animate={{
            opacity: isFlipped ? 0 : 1,
            rotateX: 0
          }}
          transition={{ duration: 0.3 }}
        >
          {frontText}
        </motion.div>

        {/* Back face */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            rotateX: '180deg'
          }}
          animate={{
            opacity: isFlipped ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {backText}
        </motion.div>
      </motion.button>
    </div>
  )
}

/**
 * Pre-configured CTA buttons for CTRC Learning
 */
export function StartLearningButton({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <FlipButton
      frontText="Start Learning"
      backText="Let's Go! →"
      onClick={onClick}
      className={className}
      variant="primary"
    />
  )
}

export function ViewProjectsButton({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <FlipButton
      frontText="View Projects"
      backText="Explore Now →"
      onClick={onClick}
      className={className}
      variant="secondary"
    />
  )
}

export function ExploreHandbookButton({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <FlipButton
      frontText="Explore Handbook"
      backText="Read More →"
      onClick={onClick}
      className={className}
      variant="outline"
    />
  )
}
