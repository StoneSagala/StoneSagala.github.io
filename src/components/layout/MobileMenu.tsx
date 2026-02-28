"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/#work", label: "Work", external: false },
  { href: "/resume.pdf", label: "Resume", external: true },
  { href: "/#contact", label: "Contact", external: false },
];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
