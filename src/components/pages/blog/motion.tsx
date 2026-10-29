"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_HERO } from "@/components/motion";

// On-load ("appear") animations measured on the original /blog and /blog/<slug> pages.

/** Fades in while rising `y` px and growing from `scale`: 1s tween, ease [0.68,0,0,0.99]. */
export function Rise({
  children,
  className,
  delay,
  y = 0,
  scale = 1,
}: {
  children?: ReactNode;
  className?: string;
  delay: number;
  y?: number;
  scale?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: EASE_HERO, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Post body: rises 170px with a spring (stiffness 121, damping 27, mass 1) after 0.4s. */
export function SpringUp({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 170 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 121, damping: 27, mass: 1, delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

/** Post hero cover: settles from scale 1.05 to 1 and dims from opacity 1 to 0.5 over 2s. */
export function HeroCover({ src }: { src: string }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 1, scale: 1.05 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 2, ease: [0.12, 0.23, 0.5, 1] }}
    >
      <Image src={src} alt="" fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
    </motion.div>
  );
}

/** Purple-dot label flanked by hairlines; the lines grow from 0.9 and the label rises 150px (clipped by the row). */
export function AnimatedLabel({ children }: { children: string }) {
  const line = (
    <Rise delay={0.3} scale={0.9} className="h-px flex-1 bg-line-soft">
      {null}
    </Rise>
  );
  return (
    <div className="flex w-full items-center gap-4 overflow-clip">
      {line}
      <Rise delay={0.3} y={150} scale={0.9} className="flex shrink-0 items-center gap-[10px]">
        <span className="size-[7px] rounded-[5px] bg-purple" />
        <span className="t-16 text-black/62">{children}</span>
      </Rise>
      {line}
    </div>
  );
}
