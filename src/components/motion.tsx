"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  type Transition,
} from "motion/react";
import { Fragment, useEffect, useRef, type ReactNode } from "react";

// Easings/springs measured from the original Framer site
export const EASE_REVEAL = [0.33, 1, 0.68, 1] as const;
export const EASE_HERO = [0.68, 0, 0, 0.99] as const;
export const EASE_SLIDE = [0.44, 0, 0.56, 1] as const;
export const SPRING_NAV: Transition = { type: "spring", stiffness: 125, damping: 27, mass: 0.3 };
export const SPRING_CARD: Transition = { type: "spring", stiffness: 160, damping: 22, mass: 1 };

type Kind = "fade" | "spring" | "slide";

const transitions: Record<Kind, Transition> = {
  fade: { duration: 0.9, ease: EASE_REVEAL },
  spring: SPRING_CARD,
  slide: { duration: 0.8, ease: EASE_SLIDE },
};

type RevealProps = {
  children?: ReactNode;
  className?: string;
  kind?: Kind;
  delay?: number;
  x?: number;
  y?: number;
  amount?: number;
};

/** Fades (and optionally slides) its content in the first time it enters the viewport. */
export function Reveal({ children, className, kind = "fade", delay = 0, x = 0, y = 0, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ...transitions[kind], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Character-by-character reveal used on the testimonial quotes. */
export function CharReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");
  let index = 0;

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => (
        <Fragment key={w}>
          <span aria-hidden className="inline-block whitespace-nowrap">
            {word.split("").map((char) => {
              const i = index++;
              return (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 4 }}
                  animate={inView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.8, ease: EASE_SLIDE, delay: i * 0.004 }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
          {w < words.length - 1 && " "}
        </Fragment>
      ))}
    </p>
  );
}

/** Counts from 0 up to `value` once visible, keeping the suffix (e.g. "+", "k", "%"). */
export function Counter({ value, suffix, className }: { value: number; suffix: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const label = useTransform(count, (v) => Math.round(v));
  // word suffixes ("mil") get normal tracking; the -9px number tracking would crush them
  const suffixEl = /^\s/.test(suffix) ? <span className="tracking-[-3px]">{suffix}</span> : suffix;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, count, value]);

  return (
    <span className="relative inline-block">
      {/* invisible final value reserves the width so the layout never shifts */}
      <span className={`${className} invisible block`}>
        {value}
        {suffixEl}
      </span>
      <span ref={ref} className={`${className} absolute inset-0 block`}>
        <motion.span>{label}</motion.span>
        {suffixEl}
      </span>
    </span>
  );
}
