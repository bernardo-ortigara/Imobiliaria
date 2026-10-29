"use client";

import Image from "next/image";
import { motion, type MotionProps } from "motion/react";
import { EASE_HERO } from "@/components/motion";
import { GridLines } from "@/components/ui";
import { sobre } from "@/lib/content/sobre";

const { hero } = sobre;

// Load sequence measured on the original (Framer "appear" JSON): 1s tween, ease [0.68,0,0,0.99].
const rise = (delay: number, y: number, scale: number): MotionProps => ({
  initial: { opacity: 0, y, scale },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, ease: EASE_HERO, delay },
});

// Ticker: 4 images of 360px + 40px gap = one 1600px loop, moving left at 100px/s.
const LOOP = 1600;
const SPEED = 100;
const COPIES = 4;

function Gallery() {
  const items = Array.from({ length: COPIES }, () => hero.gallery).flat();
  return (
    <motion.div {...rise(0.8, 120, 0.8)} className="h-[400px] w-full">
      <div className="flex h-full items-center overflow-hidden p-[10px] [mask-image:linear-gradient(to_right,transparent_0%,#000_6%,#000_94%,transparent_100%)]">
        <motion.ul
          className="flex h-full shrink-0 items-center gap-10 will-change-transform"
          animate={{ x: [0, -LOOP] }}
          transition={{ duration: LOOP / SPEED, ease: "linear", repeat: Infinity }}
        >
          {items.map((item, i) => (
            <li key={i} aria-hidden={i >= hero.gallery.length || undefined} className="shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.1, duration: 1.2, delay: 0.8 }}
                className={`relative w-[360px] overflow-hidden rounded-[2px] ${item.tall ? "h-[400px]" : "h-[380px]"}`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  priority={i < hero.gallery.length}
                  sizes="360px"
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                />
              </motion.div>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export function SobreHero() {
  return (
    <section className="relative overflow-hidden bg-white px-wrap pb-10 pt-20">
      <GridLines />
      <div className="relative flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-4 overflow-clip pt-[120px]">
          <div className="flex w-full flex-col items-center gap-2 overflow-clip">
            <div className="flex w-full items-center gap-4">
              <motion.span {...rise(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
              <motion.span {...rise(0.3, 150, 0.9)} className="flex shrink-0 items-center gap-[10px]">
                <span className="size-[7px] rounded-[5px] bg-purple" />
                <span className="t-16 text-black/62">{hero.label}</span>
              </motion.span>
              <motion.span {...rise(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
            </div>
            <motion.h1 {...rise(0.3, 150, 0.9)} className="t-58 max-w-[560px] text-center text-ink">
              {hero.title}
            </motion.h1>
          </div>
          <motion.p {...rise(0.5, 120, 0.8)} className="t-19 max-w-[450px] text-center text-black/70">
            {hero.text}
          </motion.p>
        </div>
        <Gallery />
      </div>
    </section>
  );
}
