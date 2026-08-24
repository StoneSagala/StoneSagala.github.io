"use client";

import { motion, useReducedMotion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLHeadingElement>(null);
  const shipsRef = useRef<HTMLSpanElement>(null);
  const sticksRef = useRef<HTMLSpanElement>(null);
  const scalesRef = useRef<HTMLSpanElement>(null);

  const shipsControls = useAnimation();
  const sticksControls = useAnimation();
  const scalesControls = useAnimation();

  const isInView = useInView(heroRef, { once: true, amount: 0.5 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    if (!isInView || !isTouchDevice || reduceMotion) return;
    if (!shipsRef.current || !sticksRef.current || !scalesRef.current) return;

    const shipsColor = getComputedStyle(shipsRef.current).color;
    const sticksColor = getComputedStyle(sticksRef.current).color;
    const scalesColor = getComputedStyle(scalesRef.current).color;

    async function playSequence() {
      await new Promise<void>((r) => setTimeout(r, 700));

      await shipsControls.start({
        color: "#60A5FA",
        y: [0, -10, 0, -10, 0],
        rotate: [0, -3, 0, -3, 0],
        transition: { duration: 3.2, ease: "easeInOut" },
      });
      await shipsControls.start({
        color: shipsColor,
        y: 0,
        rotate: 0,
        transition: { duration: 0.4 },
      });

      await new Promise<void>((r) => setTimeout(r, 200));

      await sticksControls.start({
        color: "#34D399",
        scaleY: [1, 0.88, 1],
        scaleX: [1, 1.08, 1],
        transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
      });
      await sticksControls.start({ color: sticksColor, transition: { duration: 0.3 } });

      await new Promise<void>((r) => setTimeout(r, 150));

      await scalesControls.start({
        color: "#A78BFA",
        scale: [1, 1.1, 1],
        transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
      });
      await scalesControls.start({ color: scalesColor, transition: { duration: 0.3 } });
    }

    playSequence();
  }, [isInView, isTouchDevice, reduceMotion, shipsControls, sticksControls, scalesControls]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <Container>
        <div className="max-w-5xl">
          <motion.h1
            ref={heroRef}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl md:leading-tight"
          >
            I design enterprise <span className="whitespace-nowrap">software that</span>
            <br />
            <motion.span
              ref={shipsRef}
              className="inline-block cursor-default mx-1"
              style={{ transformOrigin: "bottom center" }}
              initial={{ y: 0, rotate: 0 }}
              animate={shipsControls}
              whileHover={reduceMotion ? {} : {
                color: "#60A5FA",
                y: [0, -10, 0],
                rotate: [0, -3, 0],
                transition: {
                  color: { duration: 0.2 },
                  y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                },
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              ships
            </motion.span>
            ,{" "}
            <motion.span
              ref={sticksRef}
              className="inline-block cursor-default ml-1 mr-1"
              style={{ transformOrigin: "bottom center" }}
              initial={{ scaleX: 1, scaleY: 1 }}
              animate={sticksControls}
              whileHover={reduceMotion ? {} : {
                color: "#34D399",
                scaleY: 0.88,
                scaleX: 1.08,
              }}
              transition={{ type: "spring", stiffness: 700, damping: 22 }}
            >
              sticks
            </motion.span>
            , and{" "}
            <motion.span
              ref={scalesRef}
              className="inline-block cursor-default ml-1 mr-1"
              initial={{ scale: 1 }}
              animate={scalesControls}
              whileHover={reduceMotion ? {} : {
                color: "#A78BFA",
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              scales
            </motion.span>
            .
          </motion.h1>

          <ScrollReveal delay={0.5}>
            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-text-secondary">
                A Product Designer based in Salt Lake City, currently designing B2B software at PDQ.com.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="outline">Get in Touch</Button>
              <Button href="#work">View Work</Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
