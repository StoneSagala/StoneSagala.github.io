"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedText({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 0.5,
                  delay: delay + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
