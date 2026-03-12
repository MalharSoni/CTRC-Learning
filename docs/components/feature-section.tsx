"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { BookOpen, Wrench, Trophy, CheckCircle } from "@phosphor-icons/react"

interface Feature {
  id: string
  title: string
  description: string
  longDescription: string
  icon: React.ReactNode
  iconColor: string
  stats: {
    label: string
    value: string
  }[]
}

interface FeatureSectionProps {
  className?: string
  autoPlayInterval?: number
}

const features: Feature[] = [
  {
    id: "learn-it",
    title: "Learn It",
    description: "Structured curriculum designed for VEX robotics excellence",
    longDescription:
      "Master the fundamentals through our expertly crafted learning paths. From basic programming to advanced autonomous routines, every lesson builds real competition skills.",
    icon: <BookOpen size={32} weight="regular" />,
    iconColor: "text-green-500",
    stats: [
      { label: "Learning Modules", value: "12+" },
      { label: "Skill Levels", value: "3" },
      { label: "Completion Rate", value: "94%" },
    ],
  },
  {
    id: "build-it",
    title: "Build It",
    description: "Hands-on projects that turn theory into tournament-ready robots",
    longDescription:
      "Apply your knowledge through guided builds and open-ended challenges. Work with real hardware, sensors, and competition constraints to create championship-level designs.",
    icon: <Wrench size={32} weight="regular" />,
    iconColor: "text-green-600",
    stats: [
      { label: "Build Projects", value: "8+" },
      { label: "Design Patterns", value: "15+" },
      { label: "CAD Resources", value: "20+" },
    ],
  },
  {
    id: "prove-it",
    title: "Prove It",
    description: "Competition challenges that test your skills under pressure",
    longDescription:
      "Validate your abilities through timed challenges, mock tournaments, and skill certifications. Track your progress and earn recognition for mastery at every level.",
    icon: <Trophy size={32} weight="regular" />,
    iconColor: "text-green-700",
    stats: [
      { label: "Challenges", value: "25+" },
      { label: "Certifications", value: "6" },
      { label: "Team Competitions", value: "Monthly" },
    ],
  },
]

export function FeatureSection({
  className,
  autoPlayInterval = 4000,
}: FeatureSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setActiveFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, autoPlayInterval])

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index)
    setProgress(0)
  }

  return (
    <section
      className={cn(
        "relative py-20 px-4 md:px-8 lg:px-12 overflow-hidden",
        className
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-green-50/30 -z-10" />

      {/* Decorative blur elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-4"
          >
            Your Path to{" "}
            <span className="text-green-600">VEX Mastery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            A proven three-step framework used by championship teams
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const isActive = index === activeFeature

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleFeatureClick(index)}
                className={cn(
                  "relative cursor-pointer group",
                  "rounded-2xl p-8",
                  "border-2 transition-all duration-300",
                  "backdrop-blur-sm",
                  isActive
                    ? "bg-white/90 border-green-500 shadow-xl shadow-green-100/50 scale-105"
                    : "bg-white/60 border-neutral-200 hover:bg-white/80 hover:border-green-300 hover:shadow-lg"
                )}
              >
                {/* Progress indicator (active only) */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-100 rounded-t-2xl overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  </div>
                )}

                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex p-4 rounded-xl mb-6",
                    "transition-all duration-300",
                    isActive
                      ? "bg-green-50 shadow-lg shadow-green-100/50"
                      : "bg-neutral-50 group-hover:bg-green-50/50"
                  )}
                >
                  <div className={feature.iconColor}>{feature.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stats grid */}
                <div className="space-y-2">
                  {feature.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-neutral-500 font-medium">
                        {stat.label}
                      </span>
                      <span className="font-bold text-neutral-900">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-8 right-8"
                  >
                    <CheckCircle size={24} weight="fill" className="text-green-600" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Feature detail panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            "relative rounded-3xl p-10 md:p-14",
            "bg-gradient-to-br from-green-50 via-white to-green-50/50",
            "border-2 border-green-200/50",
            "backdrop-blur-sm",
            "shadow-2xl shadow-green-100/30"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl"
            >
              {/* Icon badge */}
              <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 rounded-full bg-white/80 border border-green-200/50 shadow-sm">
                <div className={features[activeFeature].iconColor}>
                  {features[activeFeature].icon}
                </div>
                <span className="font-bold text-lg text-neutral-900">
                  {features[activeFeature].title}
                </span>
              </div>

              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-medium">
                {features[activeFeature].longDescription}
              </p>

              {/* Call to action */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className={cn(
                    "px-6 py-3 rounded-xl font-semibold text-sm",
                    "bg-green-600 text-white",
                    "hover:bg-green-700 active:scale-95",
                    "transition-all duration-150",
                    "shadow-lg shadow-green-600/30"
                  )}
                >
                  Start {features[activeFeature].title}
                </button>
                <button
                  className={cn(
                    "px-6 py-3 rounded-xl font-semibold text-sm",
                    "bg-white text-neutral-700",
                    "border-2 border-neutral-200",
                    "hover:border-neutral-300 hover:bg-neutral-50 active:scale-95",
                    "transition-all duration-150"
                  )}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-10">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => handleFeatureClick(index)}
              className={cn(
                "relative rounded-full transition-all duration-300",
                index === activeFeature
                  ? "w-12 h-3 bg-green-600"
                  : "w-3 h-3 bg-neutral-300 hover:bg-neutral-400"
              )}
              aria-label={`Go to ${feature.title}`}
            >
              {index === activeFeature && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-600"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
