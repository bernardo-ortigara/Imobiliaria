"use client";

import { motion } from "motion/react";
import { ListingCard } from "@/components/cards";
import { EASE_HERO, Reveal } from "@/components/motion";
import type { Listing } from "@/lib/data/listings";

// Lines scale/fade in on load (Framer appear, delay 0.3s); label, title and cards fade in when scrolled into view.
const lineAppear = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: EASE_HERO, delay: 0.3 },
};

export function RelatedListings({ label, title, items }: { label: string; title: string; items: Listing[] }) {
  return (
    <section className="bg-white px-wrap pb-[130px] pt-5">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col items-center gap-2">
          <div className="flex w-full items-center gap-4">
            <motion.span {...lineAppear} className="h-px flex-1 bg-line-soft" />
            <Reveal className="flex shrink-0 items-center gap-[10px]">
              <span className="size-[7px] rounded-[5px] bg-purple" />
              <span className="t-16 text-black/62">{label}</span>
            </Reveal>
            <motion.span {...lineAppear} className="h-px flex-1 bg-line-soft" />
          </div>
          <Reveal>
            <h2 className="t-58 text-center text-ink">{title}</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.slug}>
              <ListingCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
