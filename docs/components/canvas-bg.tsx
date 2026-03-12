'use client'

import { useEffect, useRef } from 'react'

/**
 * Canvas Background Component
 *
 * Animated particle trail system with mouse-reactive physics.
 * Optimized for performance using requestAnimationFrame and lazy initialization.
 *
 * Based on: https://21st.dev/aliimam/canvas/default
 * Customized: Dark bg (#0a0a0a), green particles (#00ff00, 20% opacity)
 */

// Oscillator class for smooth phase-based animations
class Oscillator {
  phase: number
  offset: number
  frequency: number
  amplitude: number

  constructor(opts: { phase?: number; offset?: number; frequency?: number; amplitude?: number } = {}) {
    this.phase = opts.phase || 0
    this.offset = opts.offset || 0
    this.frequency = opts.frequency || 0.001
    this.amplitude = opts.amplitude || 1
  }

  update() {
    this.phase += this.frequency
    return this.offset + Math.sin(this.phase) * this.amplitude
  }

  value() {
    return this.offset + Math.sin(this.phase) * this.amplitude
  }
}

// Node represents a single particle with position and velocity
class Node {
  x: number
  y: number
  vx: number
  vy: number

  constructor() {
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
  }
}

// Line manages a trail of connected particles with spring physics
class Line {
  spring: number
  friction: number
  nodes: Node[]

  constructor(opts: { spring: number }) {
    this.spring = opts.spring + 0.1 * Math.random() - 0.05
    this.friction = config.friction + 0.01 * Math.random() - 0.005
    this.nodes = []

    for (let i = 0; i < config.size; i++) {
      this.nodes.push(new Node())
    }
  }

  update() {
    let spring = this.spring
    let node = this.nodes[0]

    // First node follows mouse position
    node.vx += (mousePos.x - node.x) * spring
    node.vy += (mousePos.y - node.y) * spring

    // Apply physics to all nodes
    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i]

      if (i > 0) {
        const prev = this.nodes[i - 1]
        node.vx += (prev.x - node.x) * spring
        node.vy += (prev.y - node.y) * spring
        node.vx += prev.vx * config.dampening
        node.vy += prev.vy * config.dampening
      }

      node.vx *= this.friction
      node.vy *= this.friction
      node.x += node.vx
      node.y += node.vy

      spring *= config.tension
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let x = this.nodes[0].x
    let y = this.nodes[0].y

    ctx.beginPath()
    ctx.moveTo(x, y)

    for (let i = 1; i < this.nodes.length - 2; i++) {
      const a = this.nodes[i]
      const b = this.nodes[i + 1]
      x = (a.x + b.x) * 0.5
      y = (a.y + b.y) * 0.5

      ctx.quadraticCurveTo(a.x, a.y, x, y)
    }

    const i = this.nodes.length - 2
    const a = this.nodes[i]
    const b = this.nodes[i + 1]

    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y)
    ctx.stroke()
    ctx.closePath()
  }
}

// Configuration
const config = {
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
}

// Global state
const mousePos = { x: 0, y: 0 }
let lines: Line[] = []
let isInitialized = false
let animationId: number | null = null

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Initialize lines with spring physics
    const initLines = () => {
      lines = []
      for (let i = 0; i < config.trails; i++) {
        lines.push(
          new Line({
            spring: 0.45 + (i / config.trails) * 0.025,
          })
        )
      }
    }

    // Render loop
    const render = () => {
      if (!ctx || !canvas) return

      // Fade previous frame (creates trail effect)
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)' // Dark background fade
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw lines with additive blending
      ctx.globalCompositeOperation = 'lighter'
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)' // Green with 20% opacity
      ctx.lineWidth = 1

      // Update and draw each line
      for (let i = 0; i < lines.length; i++) {
        lines[i].update()
        lines[i].draw(ctx)
      }

      animationId = requestAnimationFrame(render)
    }

    // Mouse/touch event handlers
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isInitialized) {
        initLines()
        isInitialized = true
        render()
      }

      if (e instanceof MouseEvent) {
        mousePos.x = e.clientX
        mousePos.y = e.clientY
      } else if (e.touches && e.touches.length > 0) {
        mousePos.x = e.touches[0].clientX
        mousePos.y = e.touches[0].clientY
      }
    }

    const handleResize = () => {
      resizeCanvas()
    }

    // Pause animation when window loses focus (performance optimization)
    const handleVisibilityChange = () => {
      if (document.hidden && animationId !== null) {
        cancelAnimationFrame(animationId)
        animationId = null
      } else if (!document.hidden && isInitialized && animationId === null) {
        render()
      }
    }

    // Event listeners
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchstart', handleMove)
    window.addEventListener('touchmove', handleMove)
    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Initial canvas clear
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Cleanup
    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
      }
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchstart', handleMove)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: '#0a0a0a' }}
    />
  )
}
