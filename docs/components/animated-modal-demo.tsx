"use client";

import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./animated-modal";
import { RocketLaunch, CheckCircle, Lightning, Trophy } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function AnimatedModalDemo() {
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Start Learning VEX V5
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
            <RocketLaunch size={20} weight="bold" />
          </div>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              V5 Foundation Program
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mb-8">
              Master VEX V5 robotics from zero to competition-ready. Our comprehensive
              curriculum covers everything from basic mechanics to advanced programming.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-dark-3)] border border-[var(--border)]"
                >
                  <div className="flex-shrink-0 mt-1 text-[var(--accent)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, rotateZ: -5 }}
                  animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative h-24 rounded-lg overflow-hidden border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/10 to-transparent"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-xs font-semibold">
                    {img.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ModalContent>

          <ModalFooter>
            <button className="px-4 py-2 text-sm rounded-md border border-[var(--border)] text-neutral-400 hover:text-white hover:border-neutral-600 transition-all">
              Learn More
            </button>
            <button className="px-4 py-2 text-sm rounded-md bg-[var(--accent)] text-[#0a0a0a] font-semibold hover:bg-[var(--accent-dim)] transition-all">
              Start Course →
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const features = [
  {
    title: "Hands-On Projects",
    description: "Build real robots with guided step-by-step instructions",
    icon: <CheckCircle size={20} weight="fill" />,
  },
  {
    title: "Competition Ready",
    description: "Learn strategies used by championship teams",
    icon: <Trophy size={20} weight="fill" />,
  },
  {
    title: "Fast Track Learning",
    description: "Go from zero to autonomous in weeks, not months",
    icon: <Lightning size={20} weight="fill" />,
  },
  {
    title: "Expert Mentorship",
    description: "Learn from experienced VEX competitors and mentors",
    icon: <RocketLaunch size={20} weight="fill" />,
  },
];

const images = [
  { label: "Robot Build" },
  { label: "Code Editor" },
  { label: "Competition" },
];

export default AnimatedModalDemo;
