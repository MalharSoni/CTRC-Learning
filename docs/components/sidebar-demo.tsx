"use client";

import React from "react";
import { CTRCSidebar } from "./animated-sidebar";

/**
 * Demo page showing the CTRC Animated Sidebar in action
 *
 * Usage:
 * 1. Import CTRCSidebar into your layout
 * 2. Pass currentPath prop to highlight active route
 * 3. Sidebar auto-collapses on desktop (hover to expand)
 * 4. Mobile: hamburger menu triggers slide-in
 */
export default function SidebarDemo() {
  return (
    <div className="flex h-screen bg-neutral-900">
      {/* Sidebar */}
      <CTRCSidebar currentPath="/" />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            CTRC Learning Platform
          </h1>
          <p className="text-neutral-400 mb-6">
            Animated sidebar component with expand/collapse on hover.
          </p>

          <div className="bg-[#171717] border border-neutral-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Features
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li>✓ Smooth expand/collapse animation (240px → 60px)</li>
              <li>✓ Green active state (#00ff00)</li>
              <li>✓ Hover transitions (#1e1e1e)</li>
              <li>✓ Mobile slide-in drawer</li>
              <li>✓ Framer Motion powered</li>
              <li>✓ CTRC navigation items</li>
            </ul>
          </div>

          <div className="mt-8 bg-[#171717] border border-neutral-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Navigation Items
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-neutral-500 font-semibold mb-2">Page</div>
                <div className="text-neutral-300">Home</div>
                <div className="text-neutral-300">V5 Foundation Program</div>
                <div className="text-neutral-300">Projects</div>
              </div>
              <div>
                <div className="text-neutral-500 font-semibold mb-2">Resources</div>
                <div className="text-neutral-300">Design Handbook</div>
                <div className="text-neutral-300">Mechanism Examples</div>
                <div className="text-neutral-300">Contribution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
