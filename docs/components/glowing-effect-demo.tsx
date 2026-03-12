"use client";

import { GlowingEffect } from "./glowing-effect";
import { cn } from "@/lib/utils";

/**
 * Demo implementations of the GlowingEffect component for CTRC Learning
 */

// Hero Section Example
export function HeroGlowDemo() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] p-8">
      <div className="relative max-w-4xl">
        <div className="relative rounded-2xl border border-neutral-800 p-12 bg-black">
          <GlowingEffect
            variant="green"
            spread={40}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={3}
            blur={2}
          />

          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              CTRC Learning
            </h1>
            <p className="text-xl text-neutral-400 mb-8">
              Master robotics engineering with hands-on courses and real-world projects
            </p>
            <button className="px-8 py-3 bg-[#00ff00] text-black font-bold rounded-lg hover:bg-[#00cc00] transition-all duration-150">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Button with Glow
export function GlowingCTAButton() {
  return (
    <div className="relative w-fit">
      <button className="relative rounded-xl border border-neutral-800 px-8 py-4 bg-black overflow-hidden">
        <GlowingEffect
          variant="green"
          spread={30}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />

        <span className="relative z-10 text-white font-bold text-lg">
          Explore Courses
        </span>
      </button>
    </div>
  );
}

// Course Card Grid Example
export function CourseCardsDemo() {
  const courses = [
    {
      title: "Mechanical Design",
      description: "Learn CAD modeling, fabrication techniques, and mechanism design",
      level: "Foundation",
    },
    {
      title: "Programming & Control",
      description: "Master robot programming with VEXcode and autonomous systems",
      level: "Core",
    },
    {
      title: "Electrical Systems",
      description: "Understand motors, sensors, and circuit design fundamentals",
      level: "Core",
    },
    {
      title: "Competition Strategy",
      description: "Game analysis, strategy development, and team management",
      level: "Advanced",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-[#0a0a0a]">
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  );
}

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
}

const CourseCard = ({ title, description, level }: CourseCardProps) => {
  return (
    <div className="relative min-h-[220px]">
      <div className="relative h-full rounded-xl border border-neutral-800 p-6 bg-black">
        <GlowingEffect
          variant="green"
          spread={35}
          glow={true}
          disabled={false}
          proximity={56}
          inactiveZone={0.01}
          borderWidth={2}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-bold text-[#00ff00] bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-full">
              {level}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            {title}
          </h3>

          <p className="text-neutral-400 text-sm leading-relaxed flex-1">
            {description}
          </p>

          <div className="mt-4 pt-4 border-t border-neutral-800">
            <button className="text-[#00ff00] font-semibold text-sm hover:text-[#00cc00] transition-colors duration-150">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Feature Highlight
export function FeatureHighlight() {
  return (
    <div className="relative max-w-md">
      <div className="relative rounded-2xl border border-neutral-800 p-8 bg-black">
        <GlowingEffect
          variant="green"
          spread={45}
          glow={true}
          disabled={false}
          proximity={72}
          inactiveZone={0.01}
          borderWidth={3}
          blur={1}
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg bg-[#00ff00]/20 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#00ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Hands-On Learning
          </h3>

          <p className="text-neutral-400 leading-relaxed">
            Build real robots, solve real problems, and compete in VEX competitions with expert guidance
          </p>
        </div>
      </div>
    </div>
  );
}

// Complete Demo Showcase
export function GlowingEffectShowcase() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16">
      <div className="container mx-auto px-4 space-y-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4">
            Glowing Effect Component
          </h2>
          <p className="text-neutral-400">
            Interactive glowing borders for CTRC Learning
          </p>
        </div>

        <section>
          <h3 className="text-2xl font-bold text-white mb-6">Hero Section</h3>
          <HeroGlowDemo />
        </section>

        <section>
          <h3 className="text-2xl font-bold text-white mb-6">CTA Button</h3>
          <div className="flex justify-center p-12 bg-black/50 rounded-xl">
            <GlowingCTAButton />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-white mb-6">Course Cards</h3>
          <CourseCardsDemo />
        </section>

        <section>
          <h3 className="text-2xl font-bold text-white mb-6">Feature Highlight</h3>
          <div className="flex justify-center p-12 bg-black/50 rounded-xl">
            <FeatureHighlight />
          </div>
        </section>
      </div>
    </div>
  );
}

export default GlowingEffectShowcase;
