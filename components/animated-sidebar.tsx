"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  X,
  House,
  BookOpen,
  FolderOpen,
  Palette,
  Wrench,
  Users
} from "@phosphor-icons/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Sidebar Context
interface SidebarContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// Sidebar Provider
interface SidebarProviderProps {
  children: ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Sidebar Body
interface SidebarBodyProps {
  children: ReactNode;
  className?: string;
}

export const SidebarBody: React.FC<SidebarBodyProps> = ({ children, className }) => {
  return (
    <>
      <DesktopSidebar className={className}>{children}</DesktopSidebar>
      <MobileSidebar className={className}>{children}</MobileSidebar>
    </>
  );
};

// Desktop Sidebar
export const DesktopSidebar: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const { open, setOpen, animate } = useSidebar();

  return (
    <motion.div
      className={cn(
        "hidden md:flex md:flex-col bg-[#171717] h-screen px-4 py-6 border-r border-neutral-700",
        className
      )}
      animate={{
        width: animate ? (open ? "240px" : "60px") : "240px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      transition={{
        duration: 0.15,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Mobile Sidebar
export const MobileSidebar: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const { open, setOpen } = useSidebar();

  return (
    <>
      {/* Menu Button */}
      <div className="flex md:hidden items-center justify-between px-4 py-4 border-b border-neutral-700 bg-[#171717]">
        <button
          onClick={() => setOpen(!open)}
          className="text-neutral-200 p-2 hover:bg-[#1e1e1e] rounded-md transition-colors"
        >
          <List size={24} weight="regular" />
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[90] md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed left-0 top-0 h-full w-[240px] bg-[#171717] z-[100] flex flex-col px-4 py-6 border-r border-neutral-700 md:hidden",
                className
              )}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <X size={20} weight="regular" />
              </button>

              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Sidebar Link
interface SidebarLinkProps {
  link: {
    label: string;
    href: string;
    icon: React.ReactNode;
  };
  active?: boolean;
  className?: string;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({ link, active = false, className }) => {
  const { open, animate } = useSidebar();

  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-150 group/sidebar",
        active
          ? "bg-[#00ff00]/10 text-[#00ff00]"
          : "text-neutral-400 hover:bg-[#1e1e1e] hover:text-neutral-200",
        className
      )}
    >
      <div className="flex-shrink-0">{link.icon}</div>

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeInOut",
        }}
        className="text-[13.5px] font-medium whitespace-nowrap group-hover/sidebar:translate-x-0.5 transition-transform"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

// Main Sidebar Component with CTRC Navigation
interface CTRCSidebarProps {
  currentPath?: string;
}

export const CTRCSidebar: React.FC<CTRCSidebarProps> = ({ currentPath = "/" }) => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "/",
      icon: <House size={18} weight="regular" />,
    },
    {
      label: "V5 Foundation Program",
      href: "/guides/v5-foundation",
      icon: <BookOpen size={18} weight="regular" />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <FolderOpen size={18} weight="regular" />,
    },
    {
      label: "Design Handbook",
      href: "/guides/design-handbook",
      icon: <Palette size={18} weight="regular" />,
    },
    {
      label: "Mechanism Examples",
      href: "/guides/mechanisms",
      icon: <Wrench size={18} weight="regular" />,
    },
    {
      label: "Contribution",
      href: "/guides/contribution",
      icon: <Users size={18} weight="regular" />,
    },
  ];

  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={true}>
      <SidebarBody>
        {/* Logo/Header */}
        <div className="mb-8">
          <motion.div
            animate={{
              display: open ? "block" : "none",
              opacity: open ? 1 : 0,
            }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
            }}
            className="text-white font-bold text-lg"
          >
            CTRC Learning
          </motion.div>

          {!open && (
            <div className="text-[#00ff00] font-black text-2xl text-center">
              C
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1.5 flex-1">
          {links.map((link) => (
            <SidebarLink
              key={link.href}
              link={link}
              active={currentPath === link.href}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          animate={{
            display: open ? "block" : "none",
            opacity: open ? 1 : 0,
          }}
          transition={{
            duration: 0.15,
            ease: "easeInOut",
          }}
          className="border-t border-neutral-700 pt-4 mt-4"
        >
          <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
            Caution Tape Robotics
          </div>
          <div className="text-[11px] text-neutral-600 mt-1">
            v1.0.0
          </div>
        </motion.div>
      </SidebarBody>
    </SidebarProvider>
  );
};

export default CTRCSidebar;
