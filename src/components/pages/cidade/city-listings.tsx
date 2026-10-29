"use client";

import { motion, type Transition } from "motion/react";
import { ListingCard } from "@/components/cards";
import { EASE_HERO, Reveal } from "@/components/motion";
import { GridLines } from "@/components/ui";
import type { Listing } from "@/lib/data/listings";

// On-load "appear" animations measured on the original /cities/<slug> (Framer appear JSON).
const appear = (delay: number, y: number, scale: number) => ({
  initial: { opacity: 0, y, scale },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, ease: EASE_HERO, delay } satisfies Transition,
});

// Grid lines fade/rise in late (delay 3.4s, soft spring).
const GRID_SPRING: Transition = { type: "spring", stiffness: 70, damping: 27, mass: 0.3, delay: 3.4 };

type Props = {
  label: string;
  titlePrefix: string;
  name: string;
  intro: string;
  items: Listing[];
};

export function CityListings({ label, titlePrefix, name, intro, items }: Props) {
  return (
    <section className="relative bg-white px-wrap">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={GRID_SPRING}
      >
        <GridLines />
      </motion.div>

      <div className="relative flex flex-col items-end gap-[100px] pb-[130px] pt-[60px]">
        <div className="flex w-full flex-col items-center gap-[18px] overflow-clip pt-[120px]">
          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex w-full items-center gap-4 overflow-clip">
              <motion.span {...appear(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
              <motion.span {...appear(0.3, 150, 0.9)} className="flex shrink-0 items-center gap-[10px]">
                <span className="size-[7px] rounded-[5px] bg-purple" />
                <span className="t-16 text-black/62">{label}</span>
              </motion.span>
              <motion.span {...appear(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
            </div>
            <motion.h1
              {...appear(0.3, 150, 0.9)}
              className="w-full max-w-[800px] text-center text-[52px] leading-[0.98] tracking-[-0.07em] text-ink [font-variation-settings:'opsz'_14,'wght'_420] md:text-[82px]"
            >
              <span className="block">{titlePrefix}</span>
              <span className="block">{name}</span>
            </motion.h1>
          </div>
          <motion.p {...appear(0.5, 120, 0.8)} className="t-19 w-full max-w-[450px] text-center text-black/70">
            {intro}
          </motion.p>
        </div>

        <motion.div
          {...appear(0.8, 120, 0.8)}
          className="grid w-full grid-cols-1 gap-x-6 gap-y-10 pb-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <Reveal key={item.slug}>
              <ListingCard item={item} />
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
