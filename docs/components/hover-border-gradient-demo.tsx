"use client";

import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { ArrowRight, Download, Play, Sparkle } from "@phosphor-icons/react";

export function HoverBorderGradientDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Example 1: Default Button */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white font-semibold text-sm">Default Style</h3>
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-[var(--bg-dark-2)] text-white flex items-center gap-2 font-semibold"
          >
            <Sparkle size={16} weight="fill" />
            <span>Get Started</span>
          </HoverBorderGradient>
        </div>

        {/* Example 2: With Icon Arrow */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white font-semibold text-sm">With Arrow Icon</h3>
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-[var(--bg-dark-2)] text-white flex items-center gap-2 font-semibold"
          >
            <span>Start Course</span>
            <ArrowRight size={16} weight="bold" />
          </HoverBorderGradient>
        </div>

        {/* Example 3: Slow Animation */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white font-semibold text-sm">Slow Animation (2s)</h3>
          <HoverBorderGradient
            containerClassName="rounded-md"
            duration={2}
            className="bg-[var(--bg-dark-2)] text-white flex items-center gap-2 font-semibold"
          >
            <Download size={16} weight="bold" />
            <span>Download Resources</span>
          </HoverBorderGradient>
        </div>

        {/* Example 4: Counter-Clockwise */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white font-semibold text-sm">Counter-Clockwise</h3>
          <HoverBorderGradient
            containerClassName="rounded-md"
            clockwise={false}
            className="bg-[var(--bg-dark-2)] text-white flex items-center gap-2 font-semibold"
          >
            <Play size={16} weight="fill" />
            <span>Watch Demo</span>
          </HoverBorderGradient>
        </div>

        {/* Example 5: Large Pill Button */}
        <div className="flex flex-col items-center gap-4 md:col-span-2">
          <h3 className="text-white font-semibold text-sm">Large CTA Button</h3>
          <HoverBorderGradient
            containerClassName="rounded-full"
            duration={1.5}
            className="bg-[var(--bg-dark-2)] text-white flex items-center gap-3 font-bold text-base px-8 py-4"
          >
            <Sparkle size={20} weight="fill" className="text-[var(--accent)]" />
            <span>Join CTRC Learning Platform</span>
            <ArrowRight size={20} weight="bold" className="text-[var(--accent)]" />
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}

export default HoverBorderGradientDemo;
