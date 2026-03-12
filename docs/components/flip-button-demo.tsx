'use client'

import {
  FlipButton,
  StartLearningButton,
  ViewProjectsButton,
  ExploreHandbookButton
} from './flip-button'

/**
 * Demo page showcasing FlipButton component variants
 */
export default function FlipButtonDemo() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black tracking-tight">
            Flip Button Component
          </h1>
          <p className="text-neutral-400 text-lg">
            3D flip animation buttons for CTRC Learning CTAs
          </p>
        </div>

        {/* Pre-configured CTA Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-200">
            Pre-configured CTAs
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <StartLearningButton
                onClick={() => console.log('Start Learning clicked')}
              />
              <p className="text-xs text-neutral-500 text-center">
                Primary variant
              </p>
            </div>
            <div className="space-y-3">
              <ViewProjectsButton
                onClick={() => console.log('View Projects clicked')}
              />
              <p className="text-xs text-neutral-500 text-center">
                Secondary variant
              </p>
            </div>
            <div className="space-y-3">
              <ExploreHandbookButton
                onClick={() => console.log('Explore Handbook clicked')}
              />
              <p className="text-xs text-neutral-500 text-center">
                Outline variant
              </p>
            </div>
          </div>
        </section>

        {/* All Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-200">
            All Variants
          </h2>
          <div className="grid gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">
                Primary
              </h3>
              <FlipButton
                frontText="Primary Button"
                backText="Click Me!"
                variant="primary"
                onClick={() => console.log('Primary clicked')}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">
                Secondary
              </h3>
              <FlipButton
                frontText="Secondary Button"
                backText="Let's Go!"
                variant="secondary"
                onClick={() => console.log('Secondary clicked')}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">
                Outline
              </h3>
              <FlipButton
                frontText="Outline Button"
                backText="Explore Now →"
                variant="outline"
                onClick={() => console.log('Outline clicked')}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-200">
            Features
          </h2>
          <ul className="space-y-2 text-neutral-400">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Smooth 3D flip animation on hover</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Green primary color (#00ff00) with dark mode support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Keyboard accessible (Space/Enter to activate)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Scale animations on hover and tap</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Three variants: Primary, Secondary, Outline</span>
            </li>
          </ul>
        </section>

        {/* Usage Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-200">
            Usage
          </h2>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6">
            <pre className="text-sm text-green-400 overflow-x-auto">
{`import {
  FlipButton,
  StartLearningButton
} from '@/components/flip-button'

// Pre-configured CTA
<StartLearningButton
  onClick={() => router.push('/learning')}
/>

// Custom flip button
<FlipButton
  frontText="Get Started"
  backText="Let's Go! →"
  variant="primary"
  onClick={handleClick}
/>`}
            </pre>
          </div>
        </section>

        {/* Installation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-200">
            Installation
          </h2>
          <div className="space-y-3">
            <p className="text-neutral-400">
              Install framer-motion dependency:
            </p>
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
              <code className="text-sm text-green-400">
                npm install framer-motion
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
