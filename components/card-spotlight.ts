/**
 * Card Spotlight Component
 * Adapted from Aceternity UI for CTRC Learning
 *
 * A card with a spotlight effect that follows the mouse cursor,
 * revealing a radial gradient background.
 *
 * @example
 * ```html
 * <div class="card-spotlight" data-spotlight-radius="400" data-spotlight-color="#00ff88">
 *   <h3>Your Content Here</h3>
 *   <p>The spotlight will follow your mouse cursor</p>
 * </div>
 * ```
 */

export interface CardSpotlightOptions {
  /** Spotlight effect radius in pixels */
  radius?: number;
  /** Background color for the spotlight gradient */
  color?: string;
  /** Additional CSS class names */
  className?: string;
}

export class CardSpotlight {
  private card: HTMLElement;
  private spotlightDiv: HTMLDivElement;
  private options: Required<CardSpotlightOptions>;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private isHovering: boolean = false;

  constructor(
    cardSelector: string | HTMLElement,
    options: CardSpotlightOptions = {}
  ) {
    // Default options
    this.options = {
      radius: options.radius ?? 350,
      color: options.color ?? '#262626',
      className: options.className ?? ''
    };

    // Get card element
    this.card =
      typeof cardSelector === 'string'
        ? document.querySelector(cardSelector)!
        : cardSelector;

    if (!this.card) {
      throw new Error('Card element not found');
    }

    // Setup card
    this.setupCard();

    // Create spotlight element
    this.spotlightDiv = document.createElement('div');
    this.setupSpotlight();

    // Attach event listeners
    this.attachEventListeners();
  }

  private setupCard() {
    // Ensure card is positioned
    const position = window.getComputedStyle(this.card).position;
    if (position === 'static') {
      this.card.style.position = 'relative';
    }

    // Ensure overflow hidden for spotlight clipping
    this.card.style.overflow = 'hidden';

    // Add base styles
    if (!this.card.classList.contains('card-spotlight')) {
      this.card.classList.add('card-spotlight');
    }

    // Apply additional classes
    if (this.options.className) {
      this.options.className.split(' ').forEach((cls) => {
        if (cls) this.card.classList.add(cls);
      });
    }
  }

  private setupSpotlight() {
    // Base spotlight styles
    this.spotlightDiv.className = 'card-spotlight-effect';
    this.spotlightDiv.style.position = 'absolute';
    this.spotlightDiv.style.pointerEvents = 'none';
    this.spotlightDiv.style.opacity = '0';
    this.spotlightDiv.style.transition = 'opacity 0.3s ease';
    this.spotlightDiv.style.top = '0';
    this.spotlightDiv.style.left = '0';
    this.spotlightDiv.style.right = '0';
    this.spotlightDiv.style.bottom = '0';
    this.spotlightDiv.style.zIndex = '1';

    // Insert as first child (behind content)
    this.card.insertBefore(this.spotlightDiv, this.card.firstChild);

    // Ensure content is above spotlight
    Array.from(this.card.children).forEach((child, index) => {
      if (child !== this.spotlightDiv) {
        (child as HTMLElement).style.position = 'relative';
        (child as HTMLElement).style.zIndex = '2';
      }
    });
  }

  private updateSpotlight() {
    if (!this.isHovering) return;

    const rect = this.card.getBoundingClientRect();
    const x = ((this.mouseX - rect.left) / rect.width) * 100;
    const y = ((this.mouseY - rect.top) / rect.height) * 100;

    // Create radial gradient centered on mouse position
    const gradient = `radial-gradient(${this.options.radius}px circle at ${x}% ${y}%, ${this.options.color}, transparent 100%)`;
    this.spotlightDiv.style.background = gradient;
  }

  private attachEventListeners() {
    // Mouse move
    this.card.addEventListener('mousemove', (e: MouseEvent) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.updateSpotlight();
    });

    // Mouse enter
    this.card.addEventListener('mouseenter', () => {
      this.isHovering = true;
      this.spotlightDiv.style.opacity = '1';
    });

    // Mouse leave
    this.card.addEventListener('mouseleave', () => {
      this.isHovering = false;
      this.spotlightDiv.style.opacity = '0';
    });
  }

  public setRadius(radius: number) {
    this.options.radius = radius;
    this.updateSpotlight();
  }

  public setColor(color: string) {
    this.options.color = color;
    this.updateSpotlight();
  }

  public destroy() {
    this.spotlightDiv.remove();
  }
}

// Auto-initialize for data attributes
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-card-spotlight]');
  elements.forEach((el) => {
    const options: CardSpotlightOptions = {};

    // Parse data attributes
    if (el.hasAttribute('data-spotlight-radius')) {
      options.radius = parseFloat(el.getAttribute('data-spotlight-radius')!);
    }
    if (el.hasAttribute('data-spotlight-color')) {
      options.color = el.getAttribute('data-spotlight-color')!;
    }
    if (el.hasAttribute('data-spotlight-class')) {
      options.className = el.getAttribute('data-spotlight-class')!;
    }

    new CardSpotlight(el as HTMLElement, options);
  });
});
