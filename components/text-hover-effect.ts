/**
 * Text Hover Effect Component
 * Adapted from Aceternity UI for CTRC Learning
 *
 * A text hover effect that animates and outlines gradient on hover.
 * Creates a large, bold text display with an animated stroke effect.
 *
 * @example
 * ```html
 * <div id="hero-text" data-text-hover-effect data-text="CTRC"></div>
 * ```
 *
 * Or programmatically:
 * ```typescript
 * new TextHoverEffect('#hero-text', { text: 'CTRC', duration: 0.5 });
 * ```
 */

export interface TextHoverEffectOptions {
  /** The text to display */
  text: string;
  /** Duration of the mask transition animation in seconds */
  duration?: number;
  /** Stroke color (defaults to accent color) */
  strokeColor?: string;
  /** Fill color on hover */
  fillColor?: string;
}

export class TextHoverEffect {
  private container: HTMLElement;
  private svg: SVGSVGElement;
  private textElement: SVGTextElement;
  private options: Required<TextHoverEffectOptions>;
  private isHovering: boolean = false;
  private animationProgress: number = 0;
  private animationId: number | null = null;

  constructor(
    containerSelector: string | HTMLElement,
    options: TextHoverEffectOptions
  ) {
    // Default options
    this.options = {
      text: options.text,
      duration: options.duration ?? 0.5,
      strokeColor: options.strokeColor ?? '#00ff88',
      fillColor: options.fillColor ?? 'transparent'
    };

    // Get container
    this.container =
      typeof containerSelector === 'string'
        ? document.querySelector(containerSelector)!
        : containerSelector;

    if (!this.container) {
      throw new Error('Container not found');
    }

    // Setup container
    this.setupContainer();

    // Create SVG
    this.svg = this.createSVG();
    this.textElement = this.createText();

    // Attach events
    this.attachEventListeners();
  }

  private setupContainer() {
    this.container.style.position = 'relative';
    this.container.style.display = 'flex';
    this.container.style.alignItems = 'center';
    this.container.style.justifyContent = 'center';
    this.container.style.cursor = 'pointer';
    this.container.style.userSelect = 'none';
  }

  private createSVG(): SVGSVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 800 200');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.style.overflow = 'visible';

    this.container.appendChild(svg);
    return svg;
  }

  private createText(): SVGTextElement {
    // Create text element
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '50%');
    text.setAttribute('y', '50%');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('font-family', 'Inter, sans-serif');
    text.setAttribute('font-weight', '900');
    text.setAttribute('font-size', '140');
    text.setAttribute('letter-spacing', '-0.05em');
    text.textContent = this.options.text;

    // Styles
    text.style.fill = this.options.fillColor;
    text.style.stroke = this.options.strokeColor;
    text.style.strokeWidth = '2';
    text.style.paintOrder = 'stroke fill';
    text.style.transition = `all ${this.options.duration}s cubic-bezier(0.4, 0, 0.2, 1)`;

    this.svg.appendChild(text);
    return text;
  }

  private attachEventListeners() {
    this.container.addEventListener('mouseenter', () => {
      this.isHovering = true;
      this.animateIn();
    });

    this.container.addEventListener('mouseleave', () => {
      this.isHovering = false;
      this.animateOut();
    });
  }

  private animateIn() {
    // Increase stroke width
    this.textElement.style.strokeWidth = '4';

    // Add glow effect
    this.textElement.style.filter = `drop-shadow(0 0 20px ${this.options.strokeColor})`;

    // Optional: fill with gradient
    this.textElement.style.fill = this.options.strokeColor;
    this.textElement.style.fillOpacity = '0.1';
  }

  private animateOut() {
    // Reset stroke width
    this.textElement.style.strokeWidth = '2';

    // Remove glow
    this.textElement.style.filter = 'none';

    // Reset fill
    this.textElement.style.fill = this.options.fillColor;
    this.textElement.style.fillOpacity = '0';
  }

  public setText(text: string) {
    this.options.text = text;
    this.textElement.textContent = text;
  }

  public setStrokeColor(color: string) {
    this.options.strokeColor = color;
    this.textElement.style.stroke = color;
  }

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.svg.remove();
  }
}

// Auto-initialize for data attributes
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-text-hover-effect]');
  elements.forEach((el) => {
    const text = el.getAttribute('data-text') || 'TEXT';
    const options: TextHoverEffectOptions = { text };

    // Parse data attributes
    if (el.hasAttribute('data-duration')) {
      options.duration = parseFloat(el.getAttribute('data-duration')!);
    }
    if (el.hasAttribute('data-stroke-color')) {
      options.strokeColor = el.getAttribute('data-stroke-color')!;
    }
    if (el.hasAttribute('data-fill-color')) {
      options.fillColor = el.getAttribute('data-fill-color')!;
    }

    new TextHoverEffect(el as HTMLElement, options);
  });
});
