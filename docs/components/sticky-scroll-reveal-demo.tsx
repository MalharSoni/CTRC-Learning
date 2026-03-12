"use client";

import React from "react";
import { StickyScrollReveal } from "./sticky-scroll-reveal";
import { Code, Robot, Trophy, Users } from "@phosphor-icons/react";

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScrollReveal content={content} />
    </div>
  );
}

const content = [
  {
    title: "Learn Programming",
    description:
      "Master C++ programming for VEX V5 robotics. Start with basic motor control and progress to advanced autonomous routines. Our curriculum is designed for complete beginners with no coding experience required.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <Code size={80} weight="duotone" className="text-[var(--accent)]" />
          <p className="text-sm text-center text-neutral-400">
            Interactive coding lessons
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Build Real Robots",
    description:
      "Construct competition-grade robots using VEX V5 components. Learn mechanical design principles, gear ratios, and effective building techniques. Each lesson includes 3D CAD models and assembly instructions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <Robot size={80} weight="duotone" className="text-blue-400" />
          <p className="text-sm text-center text-neutral-400">
            Step-by-step build guides
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Compete & Win",
    description:
      "Apply your skills in VEX competitions. Learn game strategy, driver practice techniques, and how to work effectively with alliance partners. Includes match analysis and improvement frameworks.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <Trophy size={80} weight="duotone" className="text-yellow-400" />
          <p className="text-sm text-center text-neutral-400">
            Competition strategies
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Join the Community",
    description:
      "Connect with other VEX teams and mentors. Share your progress, ask questions, and collaborate on projects. Access our Discord community with 500+ active members and weekly office hours.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <Users size={80} weight="duotone" className="text-[var(--accent)]" />
          <p className="text-sm text-center text-neutral-400">
            Active community support
          </p>
        </div>
      </div>
    ),
  },
];

export default StickyScrollRevealDemo;
