"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/#work", label: "Work", external: false },
  { href: "/resume.pdf", label: "Resume", external: true },
  { href: "/#contact", label: "Contact", external: false },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-bg-primary/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-wider text-text-primary uppercase"
          >
            Stone Sagala
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-text-primary" />
              <span className="block h-0.5 w-5 bg-text-primary" />
              <span className="block h-0.5 w-5 bg-text-primary" />
            </div>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
