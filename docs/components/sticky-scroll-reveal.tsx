"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "./lib-utils-cn";

export interface StickyScrollContent {
  title: string;
  description: string;
  content?: ReactNode;
}

export const StickyScrollReveal = ({
  content,
  contentClassName,
}: {
  content: StickyScrollContent[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useEffect(() => {
    const updateActiveCard = (latest: number) => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0
      );
      setActiveCard(closestBreakpointIndex);
    };

    const unsubscribe = scrollYProgress.on("change", updateActiveCard);
    return () => unsubscribe();
  }, [scrollYProgress, content, cardLength]);

  const backgroundColors = [
    "var(--bg-dark-2)",
    "var(--bg-dark-3)",
    "var(--bg-dark-2)",
    "var(--bg-dark-3)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgba(0, 255, 136, 0.1), rgba(0, 204, 106, 0.1))",
    "linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))",
    "linear-gradient(to bottom right, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1))",
    "linear-gradient(to bottom right, rgba(0, 255, 136, 0.1), rgba(0, 204, 106, 0.1))",
  ];

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
      style={{
        background: useTransform(
          scrollYProgress,
          content.map((_, i) => i / cardLength),
          backgroundColors
        ) as any,
      }}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base text-neutral-400 max-w-sm mt-4"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <motion.div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
        style={{
          background: useTransform(
            scrollYProgress,
            content.map((_, i) => i / cardLength),
            linearGradients
          ) as any,
        }}
      >
        <AnimatePresence mode="wait">
          {content[activeCard].content ? (
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center p-8"
            >
              {content[activeCard].content}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
