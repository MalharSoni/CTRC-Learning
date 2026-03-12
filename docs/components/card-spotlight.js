/**
 * Card Spotlight Component
 * Adapted from Aceternity UI for CTRC Learning
 *
 * A card with a spotlight effect that follows the mouse cursor,
 * revealing a radial gradient background.
 */

export class CardSpotlight {
  constructor(cardSelector, options = {}) {
    // Default options
    this.options = {
      radius: options.radius ?? 350,
      color: options.color ?? '#262626',
      className: options.className ?? ''
    };

    this.mouseX = 0;
    this.mouseY = 0;
    this.isHovering = false;

    // Get card element
    this.card =
      typeof cardSelector === 'string'
        ? document.querySelector(cardSelector)
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

  setupCard() {
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

  setupSpotlight() {
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
        child.style.position = 'relative';
        child.style.zIndex = '2';
      }
    });
  }

  updateSpotlight() {
    if (!this.isHovering) return;

    const rect = this.card.getBoundingClientRect();
    const x = ((this.mouseX - rect.left) / rect.width) * 100;
    const y = ((this.mouseY - rect.top) / rect.height) * 100;

    // Create radial gradient centered on mouse position
    const gradient = `radial-gradient(${this.options.radius}px circle at ${x}% ${y}%, ${this.options.color}, transparent 100%)`;
    this.spotlightDiv.style.background = gradient;
  }

  attachEventListeners() {
    // Mouse move
    this.card.addEventListener('mousemove', (e) => {
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

  setRadius(radius) {
    this.options.radius = radius;
    this.updateSpotlight();
  }

  setColor(color) {
    this.options.color = color;
    this.updateSpotlight();
  }

  destroy() {
    this.spotlightDiv.remove();
  }
}

// Auto-initialize for data attributes
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-card-spotlight]');
  elements.forEach((el) => {
    const options = {};

    // Parse data attributes
    if (el.hasAttribute('data-spotlight-radius')) {
      options.radius = parseFloat(el.getAttribute('data-spotlight-radius'));
    }
    if (el.hasAttribute('data-spotlight-color')) {
      options.color = el.getAttribute('data-spotlight-color');
    }
    if (el.hasAttribute('data-spotlight-class')) {
      options.className = el.getAttribute('data-spotlight-class');
    }

    new CardSpotlight(el, options);
  });
});
