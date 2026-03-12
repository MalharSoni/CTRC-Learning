"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "./lib-utils-cn";

type HoverBorderGradientProps = {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Component = "button",
  duration = 1,
  clockwise = true,
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection: string) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  const movingMap: Record<string, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(0, 255, 136, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(0, 255, 136, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(0, 255, 136, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, rgba(0, 255, 136, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight = movingMap[direction];

  return (
    <Component
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-md border border-[var(--border)] content-center items-center justify-center overflow-visible p-px transition duration-500",
        "bg-[var(--bg-dark-2)] hover:bg-[var(--bg-dark-3)]",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 rounded-[inherit] px-4 py-2",
          "bg-[var(--bg-dark-2)]",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className={cn(
          "absolute inset-0 z-0 flex-none rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap["TOP"] }}
        animate={{
          background: hovered
            ? [movingMap["TOP"], movingMap["LEFT"], movingMap["BOTTOM"], movingMap["RIGHT"], movingMap["TOP"]]
            : highlight,
        }}
        transition={
          hovered
            ? {
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
              }
            : {
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
              }
        }
      />

      <div className="absolute inset-[2px] z-1 rounded-[inherit] bg-[var(--bg-dark-2)]" />
    </Component>
  );
}
