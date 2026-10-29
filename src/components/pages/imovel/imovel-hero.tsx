"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { EASE_HERO } from "@/components/motion";

type Props = {
  title: string;
  images: [string, string, string];
  count: number;
  showAll: string;
};

/** Top photo mosaic (1 large + 2 stacked). Appears on load: fade + scale 0.9 + rise 120px, 1s, delay 0.8s. */
export function ImovelHero({ title, images, count, showAll }: Props) {
  const lenis = useLenis();
  const [main, second, third] = images;

  return (
    <section className="bg-white px-wrap pt-[90px]">
      <motion.div
        className="flex flex-col gap-3 lg:h-[560px] lg:flex-row"
        initial={{ opacity: 0, scale: 0.9, y: 120 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE_HERO, delay: 0.8 }}
      >
        <div className="relative aspect-[864/560] overflow-hidden rounded-[2px] lg:aspect-auto lg:flex-[864]">
          <Image src={main} alt={title} fill priority sizes="(min-width: 1024px) 864px, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-3 lg:flex-[480]">
          <div className="relative aspect-[480/274] overflow-hidden rounded-[2px] lg:aspect-auto lg:flex-1">
            <Image src={second} alt="" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[480/274] overflow-hidden rounded-[2px] lg:aspect-auto lg:flex-1">
            <Image src={third} alt="" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            <div className="absolute bottom-0 right-0 flex p-6">
              <a
                href="#images"
                onClick={(e) => {
                  if (!lenis) return;
                  e.preventDefault();
                  lenis.scrollTo("#images");
                }}
                className="flex items-center gap-1 rounded-[2px] bg-white px-[18px] py-[10px] text-[14px] leading-[15px] tracking-[-0.14px] text-ink transition-opacity duration-200 [font-variation-settings:'opsz'_14,'wght'_440] hover:opacity-85"
              >
                <span>{showAll}</span>
                <span className="flex gap-px">
                  <span>(</span>
                  <span>{count}</span>
                  <span>)</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
