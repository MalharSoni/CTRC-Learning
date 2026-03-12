import { FeatureSection } from "./feature-section"

/**
 * Feature Section Demo
 *
 * This component showcases the CTRC Learning three-step framework:
 * - Learn It: Structured curriculum
 * - Build It: Hands-on projects
 * - Prove It: Competition challenges
 *
 * Features:
 * - Auto-rotating cards with progress indicators
 * - Glassmorphic design with green accents
 * - Click any card to view details
 * - Fully responsive (3 columns → 1 on mobile)
 * - Smooth Framer Motion animations
 */
export default function FeatureSectionDemo() {
  return (
    <div className="min-h-screen bg-white">
      <FeatureSection />
    </div>
  )
}
