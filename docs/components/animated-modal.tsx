"use client";

import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { cn } from "./lib-utils-cn";

// Hook for detecting clicks outside an element
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

// Modal Context
interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

// Modal Components
export function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { setOpen } = useModal();
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-sm font-semibold transition-all duration-150",
        "bg-[var(--accent)] text-[#0a0a0a] hover:bg-[var(--accent-dim)]",
        "active:scale-97",
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

export const ModalBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { open, setOpen } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => setOpen(false));

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <Overlay />
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className={cn(
              "relative z-[101] max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl",
              "bg-[var(--bg-dark-2)] border border-[var(--border)]",
              "shadow-[0_20px_60px_rgba(0,0,0,0.6)]",
              className
            )}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 text-neutral-400 hover:text-white transition-colors"
            >
              <X size={24} weight="bold" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 px-8 py-6 border-t border-[var(--border)] bg-[var(--bg-dark-3)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Overlay = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm",
        className
      )}
    />
  );
};
