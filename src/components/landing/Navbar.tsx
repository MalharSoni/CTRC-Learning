"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Foundation", href: "/curriculum" },
  { label: "Projects", href: "/curriculum/projects" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/curriculum") {
      return pathname === "/curriculum" || pathname.startsWith("/curriculum/foundation");
    }
    return pathname.startsWith(href);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E5E5E5] bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ctrc-logo.jpg"
            alt="Caution Tape Robotics"
            width={180}
            height={40}
            className="h-[36px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-md px-4 py-2 text-[14px] font-medium transition-colors",
                isActive(link.href)
                  ? "text-[#171717] bg-[#F0F0F0]"
                  : "text-[#525252] hover:bg-[#F5F5F5] hover:text-[#171717]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/auth/signin"
            className="rounded-[8px] bg-[#54AC58] px-5 py-[9px] text-[13px] font-semibold text-white transition-all hover:bg-[#489A4C] active:scale-[0.97]"
          >
            Student Login
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-[#525252] transition-colors hover:bg-[#F5F5F5] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-[#E5E5E5] bg-white transition-all duration-200 md:hidden",
          mobileOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-md px-3 py-2.5 text-[14px] font-medium transition-colors",
                isActive(link.href)
                  ? "text-[#171717] bg-[#F0F0F0]"
                  : "text-[#525252] hover:bg-[#F5F5F5] hover:text-[#171717]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-[#E5E5E5] pt-3">
            <Link
              href="/auth/signin"
              onClick={() => setMobileOpen(false)}
              className="inline-flex rounded-[8px] bg-[#54AC58] px-5 py-[9px] text-[13px] font-semibold text-white transition-all hover:bg-[#489A4C]"
            >
              Student Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
