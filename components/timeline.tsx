"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Circle, CircleDashed } from "@phosphor-icons/react";

interface TimelineEntry {
  title: string;
  subtitle: string;
  description: string;
  content: React.ReactNode;
  status: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  data: TimelineEntry[];
}

export function Timeline({ data }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-20"
          >
            <div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full md:left-3">
                {item.status === "completed" && (
                  <CheckCircle size={32} weight="fill" className="text-[#00ff00]" />
                )}
                {item.status === "current" && (
                  <CircleDashed size={32} weight="bold" className="text-[#f5d000] animate-spin" />
                )}
                {item.status === "upcoming" && (
                  <Circle size={32} weight="regular" className="text-[#737373]" />
                )}
              </div>
              <h3
                className={`hidden text-xl font-bold md:ml-20 md:block md:pl-20 md:text-4xl lg:text-5xl ${
                  item.status === "completed"
                    ? "text-[#00ff00]"
                    : item.status === "current"
                    ? "text-[#f5d000]"
                    : "text-[#737373]"
                }`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3
                className={`mb-4 block text-left text-2xl font-bold md:hidden ${
                  item.status === "completed"
                    ? "text-[#00ff00]"
                    : item.status === "current"
                    ? "text-[#f5d000]"
                    : "text-[#737373]"
                }`}
              >
                {item.title}
              </h3>
              <div className="mb-2">
                <p
                  className={`text-base font-semibold md:text-lg ${
                    item.status === "completed"
                      ? "text-[#00ff00]"
                      : item.status === "current"
                      ? "text-[#f5d000]"
                      : "text-[#737373]"
                  }`}
                >
                  {item.subtitle}
                </p>
                <p className="mt-1 text-sm text-[#737373] md:text-base">
                  {item.description}
                </p>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#D4D4D4] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#f5d000] from-[0%] via-[#00ff00] via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
}

// CTRC Learning Timeline Data
export const ctrcLearningData: TimelineEntry[] = [
  {
    title: "Unit 1",
    subtitle: "Drivetrain Mastery",
    description: "Master the foundation of robot movement",
    status: "completed",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-[#00ff00]/20 bg-[#00ff00]/5 p-6">
          <h4 className="mb-3 text-lg font-bold text-[#171717]">
            What You'll Learn
          </h4>
          <ul className="space-y-2 text-sm text-[#404040]">
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>Build and configure 4-motor and 6-motor drivetrains</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>Understand gear ratios and torque vs speed tradeoffs</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>Master tank drive and arcade drive control</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>Driver practice and precision maneuvering</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-md bg-[#171717] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Completed
          </span>
          <span className="inline-flex items-center rounded-md bg-[#D4D4D4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#404040]">
            Mechanical
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Unit 2",
    subtitle: "Programming Fundamentals",
    description: "Code your robot to think and act",
    status: "completed",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-[#00ff00]/20 bg-[#00ff00]/5 p-6">
          <h4 className="mb-3 text-lg font-bold text-[#171717]">
            What You'll Learn
          </h4>
          <ul className="space-y-2 text-sm text-[#404040]">
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>VEXcode basics: motors, sensors, and controllers</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>Autonomous routines and path planning</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>PID control for precise movements</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} weight="fill" className="mr-2 mt-0.5 shrink-0 text-[#00ff00]" />
              <span>Debugging and testing strategies</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-md bg-[#171717] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Completed
          </span>
          <span className="inline-flex items-center rounded-md bg-[#D4D4D4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#404040]">
            Software
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Unit 3",
    subtitle: "CAD & Design",
    description: "Design before you build",
    status: "current",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-[#f5d000]/20 bg-[#f5d000]/5 p-6">
          <h4 className="mb-3 text-lg font-bold text-[#171717]">
            What You'll Learn
          </h4>
          <ul className="space-y-2 text-sm text-[#404040]">
            <li className="flex items-start">
              <CircleDashed size={16} weight="bold" className="mr-2 mt-0.5 shrink-0 text-[#f5d000]" />
              <span>Fusion 360 basics and VEX part library</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Sketching, constraints, and assemblies</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Design for manufacturability and strength</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Rendering and documentation</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-md bg-[#f5d000] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#171717]">
            In Progress
          </span>
          <span className="inline-flex items-center rounded-md bg-[#D4D4D4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#404040]">
            Design
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Unit 4",
    subtitle: "Advanced Mechanisms",
    description: "Build competition-winning systems",
    status: "upcoming",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-[#D4D4D4] bg-[#F5F5F5] p-6">
          <h4 className="mb-3 text-lg font-bold text-[#737373]">
            What You'll Learn
          </h4>
          <ul className="space-y-2 text-sm text-[#737373]">
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Lift systems: 4-bar, 6-bar, DR4B, chain-bar</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Intake design: rollers, claws, conveyors</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Pneumatics and advanced actuators</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Integration and packaging strategies</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-md bg-[#D4D4D4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#404040]">
            Upcoming
          </span>
          <span className="inline-flex items-center rounded-md bg-[#D4D4D4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#404040]">
            Mechanical
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Unit 5",
    subtitle: "Competition Ready",
    description: "From garage to podium",
    status: "upcoming",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-[#D4D4D4] bg-[#F5F5F5] p-6">
          <h4 className="mb-3 text-lg font-bold text-[#737373]">
            What You'll Learn
          </h4>
          <ul className="space-y-2 text-sm text-[#737373]">
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Tournament strategy and match analysis</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Scouting, alliance selection, and game theory</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Field setup, practice sessions, and driver training</span>
            </li>
            <li className="flex items-start">
              <Circle size={16} weight="regular" className="mr-2 mt-0.5 shrink-0 text-[#737373]" />
              <span>Engineering notebook and judging presentations</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-md bg-[#D4D4D4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#404040]">
            Upcoming
          </span>
          <span className="inline-flex items-center rounded-md bg-[#D4D4D4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#404040]">
            Strategy
          </span>
        </div>
      </div>
    ),
  },
];
