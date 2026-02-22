"use client";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-lg bg-accent px-4 py-2 font-medium text-bg-primary transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
