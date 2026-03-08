"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/data/navigation";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const focusableRef = useRef<HTMLElement[]>([]);

  // Cache focusable elements once after mount
  useEffect(() => {
    if (menuRef.current) {
      focusableRef.current = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
      );
    }
  }, []);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const focusable = focusableRef.current;
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      ref={menuRef}
      className="fixed inset-0 z-50 bg-bg-primary"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex h-16 items-center justify-end px-6">
        <button
          ref={closeRef}
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center"
          aria-label="Close menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col items-center gap-8 pt-20">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...(link.download ? { download: true } : {})}
              className="text-3xl font-medium text-text-primary"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}
