/**
 * Glowing Effect Component - Preset Configurations
 * Ready-to-use prop combinations for common use cases
 */

import { GlowingEffectProps } from "./glowing-effect";

/**
 * Preset configurations for different component types
 */
export const GlowPresets = {
  /**
   * Hero Section - Large welcome cards with title and CTA
   * Use on: Homepage hero, landing page headers
   */
  hero: {
    variant: "green",
    spread: 40,
    glow: true,
    disabled: false,
    proximity: 80,
    inactiveZone: 0.01,
    borderWidth: 3,
    blur: 2,
    movementDuration: 2,
  } as GlowingEffectProps,

  /**
   * CTA Button - Primary action buttons
   * Use on: "Start Learning", "Explore Courses", "Sign Up"
   */
  ctaButton: {
    variant: "green",
    spread: 30,
    glow: true,
    disabled: false,
    proximity: 48,
    inactiveZone: 0.01,
    borderWidth: 2,
    movementDuration: 1.5,
  } as GlowingEffectProps,

  /**
   * Course Card - Grid items for learning modules
   * Use on: Course listings, module cards
   */
  courseCard: {
    variant: "green",
    spread: 35,
    glow: true,
    disabled: false,
    proximity: 56,
    inactiveZone: 0.01,
    borderWidth: 2,
    movementDuration: 2,
  } as GlowingEffectProps,

  /**
   * Feature Highlight - Key selling points or features
   * Use on: "Why Choose Us", feature grids
   */
  featureHighlight: {
    variant: "green",
    spread: 45,
    glow: true,
    disabled: false,
    proximity: 72,
    inactiveZone: 0.01,
    borderWidth: 3,
    blur: 1,
    movementDuration: 2,
  } as GlowingEffectProps,

  /**
   * Subtle Card - Minimal glow for secondary content
   * Use on: Testimonials, stats, info cards
   */
  subtleCard: {
    variant: "green",
    spread: 25,
    glow: true,
    disabled: false,
    proximity: 48,
    inactiveZone: 0.01,
    borderWidth: 1,
    blur: 1,
    movementDuration: 2,
  } as GlowingEffectProps,

  /**
   * Navigation Item - Nav links or menu items
   * Use on: Sidebar nav, header links
   */
  navItem: {
    variant: "green",
    spread: 20,
    glow: false,
    disabled: false,
    proximity: 32,
    inactiveZone: 0.01,
    borderWidth: 1,
    movementDuration: 1,
  } as GlowingEffectProps,

  /**
   * Large Container - Full-width sections
   * Use on: Content sections, newsletter signup
   */
  largeContainer: {
    variant: "green",
    spread: 50,
    glow: true,
    disabled: false,
    proximity: 96,
    inactiveZone: 0.01,
    borderWidth: 4,
    blur: 3,
    movementDuration: 2.5,
  } as GlowingEffectProps,

  /**
   * Badge/Pill - Small accent elements
   * Use on: Status badges, tags
   */
  badge: {
    variant: "green",
    spread: 15,
    glow: false,
    disabled: false,
    proximity: 24,
    inactiveZone: 0.01,
    borderWidth: 1,
    movementDuration: 1,
  } as GlowingEffectProps,
};

/**
 * Usage Example:
 *
 * import { GlowingEffect } from "./glowing-effect";
 * import { GlowPresets } from "./glowing-effect-presets";
 *
 * // Simple usage
 * <GlowingEffect {...GlowPresets.hero} />
 *
 * // Override specific props
 * <GlowingEffect {...GlowPresets.ctaButton} spread={35} />
 *
 * // Mix presets
 * <GlowingEffect {...GlowPresets.courseCard} blur={2} />
 */

/**
 * Color variant helpers
 */
export const ColorVariants = {
  green: "green" as const,
  white: "white" as const,
  colorful: "default" as const,
};

/**
 * Recommended proximity values based on element size
 */
export const ProximityGuide = {
  small: 32,   // Badges, pills, small buttons
  medium: 56,  // Cards, medium buttons
  large: 80,   // Hero sections, large cards
  xlarge: 96,  // Full-width containers
};

/**
 * Recommended spread values based on desired effect
 */
export const SpreadGuide = {
  subtle: 20,     // Minimal, focused glow
  normal: 35,     // Standard glow
  prominent: 45,  // Bold, eye-catching
  dramatic: 60,   // Maximum impact
};

/**
 * Recommended border width based on element size
 */
export const BorderWidthGuide = {
  thin: 1,     // Subtle borders, small elements
  standard: 2, // Default for most cards
  bold: 3,     // Hero sections, emphasized elements
  thick: 4,    // Large containers, maximum impact
};

export default GlowPresets;
