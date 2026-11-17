"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { EASE_HERO } from "@/components/motion";

type Props = {
  title: string;
  images: string[];
  showAll: string;
};

const appear = {
  initial: { opacity: 0, scale: 0.9, y: 120 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 1, ease: EASE_HERO, delay: 0.8 },
} as const;

export function ImovelHero({ title, images, showAll }: Props) {
  if (images.length < 3) return <SingleHero title={title} src={images[0]} />;
  return <MosaicHero title={title} images={images} showAll={showAll} />;
}

function SingleHero({ title, src }: { title: string; src: string }) {
  return (
    <section className="bg-white px-wrap pt-[90px]">
      <motion.div {...appear} className="relative h-[70svh] max-h-[560px] min-h-[360px] overflow-hidden rounded-[2px] bg-ink">
        <Image src={src} alt="" fill sizes="10vw" className="scale-110 object-cover opacity-60 blur-2xl" />
        <Image src={src} alt={title} fill priority sizes="(min-width: 1024px) 1356px, 100vw" className="object-contain" />
      </motion.div>
    </section>
  );
}

function MosaicHero({ title, images, showAll }: Props) {
  const lenis = useLenis();
  const [main, second, third] = images;
  const count = images.length;

  return (
    <section className="bg-white px-wrap pt-[90px]">
      <motion.div {...appear} className="flex flex-col gap-3 lg:h-[560px] lg:flex-row">
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
