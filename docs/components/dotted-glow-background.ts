/**
 * Dotted Glow Background Component
 * Adapted from Aceternity UI for CTRC Learning
 *
 * Creates an animated background with glowing dots that pulse at varying speeds.
 * Uses Canvas API for performance with many dots.
 *
 * @example
 * ```typescript
 * const bg = new DottedGlowBackground('#my-container', {
 *   gap: 12,
 *   radius: 2,
 *   color: 'rgba(255, 255, 255, 0.15)',
 *   glowColor: 'rgba(0, 255, 136, 0.6)',
 *   opacity: 1,
 *   speedMin: 0.3,
 *   speedMax: 1.6
 * });
 * ```
 */

export interface DottedGlowBackgroundOptions {
  /** Distance between dot centers in pixels */
  gap?: number;
  /** Base radius of each dot */
  radius?: number;
  /** Dot color (will pulse by varying alpha) */
  color?: string;
  /** Dark mode dot color (optional) */
  darkColor?: string;
  /** Shadow/glow color around dots */
  glowColor?: string;
  /** Dark mode glow color (optional) */
  darkGlowColor?: string;
  /** Global opacity multiplier */
  opacity?: number;
  /** Radial fade background opacity (0-1) */
  backgroundOpacity?: number;
  /** Minimum dot pulse speed (radians/second) */
  speedMin?: number;
  /** Maximum dot pulse speed (radians/second) */
  speedMax?: number;
  /** Global speed multiplier */
  speedScale?: number;
  /** Container class name for styling */
  className?: string;
}

interface Dot {
  x: number;
  y: number;
  speed: number;
  phase: number;
}

export class DottedGlowBackground {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private container: HTMLElement;
  private dots: Dot[] = [];
  private animationId: number | null = null;
  private lastTime: number = 0;
  private options: Required<DottedGlowBackgroundOptions>;
  private isDark: boolean = true;

  constructor(
    containerSelector: string | HTMLElement,
    options: DottedGlowBackgroundOptions = {}
  ) {
    // Default options
    this.options = {
      gap: options.gap ?? 12,
      radius: options.radius ?? 2,
      color: options.color ?? 'rgba(255, 255, 255, 0.15)',
      darkColor: options.darkColor ?? 'rgba(255, 255, 255, 0.15)',
      glowColor: options.glowColor ?? 'rgba(0, 255, 136, 0.6)',
      darkGlowColor: options.darkGlowColor ?? 'rgba(0, 255, 136, 0.8)',
      opacity: options.opacity ?? 1,
      backgroundOpacity: options.backgroundOpacity ?? 0,
      speedMin: options.speedMin ?? 0.4,
      speedMax: options.speedMax ?? 1.3,
      speedScale: options.speedScale ?? 1,
      className: options.className ?? ''
    };

    // Get container
    this.container =
      typeof containerSelector === 'string'
        ? document.querySelector(containerSelector)!
        : containerSelector;

    if (!this.container) {
      throw new Error('Container not found');
    }

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '0';

    if (this.options.className) {
      this.canvas.className = this.options.className;
    }

    this.ctx = this.canvas.getContext('2d')!;
    this.container.style.position = 'relative';
    this.container.insertBefore(this.canvas, this.container.firstChild);

    // Detect theme
    this.detectTheme();

    // Initialize
    this.resize();
    this.createDots();
    this.start();

    // Handle resize
    window.addEventListener('resize', () => this.resize());

    // Watch for theme changes
    this.watchThemeChanges();
  }

  private detectTheme() {
    const body = document.body;
    this.isDark = !body.classList.contains('light-theme');
  }

  private watchThemeChanges() {
    const observer = new MutationObserver(() => {
      this.detectTheme();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  private resize() {
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.createDots();
  }

  private createDots() {
    this.dots = [];
    const { gap } = this.options;
    const cols = Math.ceil(this.canvas.width / gap);
    const rows = Math.ceil(this.canvas.height / gap);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.dots.push({
          x: col * gap,
          y: row * gap,
          speed:
            this.options.speedMin +
            Math.random() * (this.options.speedMax - this.options.speedMin),
          phase: Math.random() * Math.PI * 2
        });
      }
    }
  }

  private render(time: number) {
    const delta = this.lastTime ? (time - this.lastTime) / 1000 : 0;
    this.lastTime = time;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Get colors based on theme
    const dotColor = this.isDark ? this.options.darkColor : this.options.color;
    const glowColor = this.isDark
      ? this.options.darkGlowColor
      : this.options.glowColor;

    // Draw dots
    this.dots.forEach((dot) => {
      // Update phase
      dot.phase += dot.speed * this.options.speedScale * delta;

      // Calculate opacity (pulse between 0.2 and 1.0)
      const pulseOpacity = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(dot.phase));
      const finalOpacity = pulseOpacity * this.options.opacity;

      // Parse base color and apply opacity
      const colorMatch = dotColor.match(/rgba?\(([^)]+)\)/);
      if (!colorMatch) return;

      const [r, g, b] = colorMatch[1].split(',').map(v => parseFloat(v.trim()));

      // Draw glow
      this.ctx.save();
      this.ctx.globalAlpha = finalOpacity * 0.5;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = glowColor;
      this.ctx.fillStyle = glowColor;
      this.ctx.beginPath();
      this.ctx.arc(dot.x, dot.y, this.options.radius * 1.5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      // Draw dot
      this.ctx.save();
      this.ctx.globalAlpha = finalOpacity;
      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
      this.ctx.beginPath();
      this.ctx.arc(dot.x, dot.y, this.options.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });

    // Optional radial fade overlay
    if (this.options.backgroundOpacity > 0) {
      const gradient = this.ctx.createRadialGradient(
        this.canvas.width / 2,
        this.canvas.height / 2,
        0,
        this.canvas.width / 2,
        this.canvas.height / 2,
        Math.max(this.canvas.width, this.canvas.height) / 2
      );
      gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
      gradient.addColorStop(1, `rgba(0, 0, 0, ${this.options.backgroundOpacity})`);
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.animationId = requestAnimationFrame((t) => this.render(t));
  }

  public start() {
    if (!this.animationId) {
      this.animationId = requestAnimationFrame((t) => this.render(t));
    }
  }

  public stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  public destroy() {
    this.stop();
    this.canvas.remove();
  }
}

// Auto-initialize for data attributes
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-dotted-glow-background]');
  elements.forEach((el) => {
    const options: DottedGlowBackgroundOptions = {};

    // Parse data attributes
    if (el.hasAttribute('data-gap')) {
      options.gap = parseFloat(el.getAttribute('data-gap')!);
    }
    if (el.hasAttribute('data-radius')) {
      options.radius = parseFloat(el.getAttribute('data-radius')!);
    }
    if (el.hasAttribute('data-color')) {
      options.color = el.getAttribute('data-color')!;
    }
    if (el.hasAttribute('data-glow-color')) {
      options.glowColor = el.getAttribute('data-glow-color')!;
    }
    if (el.hasAttribute('data-opacity')) {
      options.opacity = parseFloat(el.getAttribute('data-opacity')!);
    }
    if (el.hasAttribute('data-speed-min')) {
      options.speedMin = parseFloat(el.getAttribute('data-speed-min')!);
    }
    if (el.hasAttribute('data-speed-max')) {
      options.speedMax = parseFloat(el.getAttribute('data-speed-max')!);
    }

    new DottedGlowBackground(el as HTMLElement, options);
  });
});
