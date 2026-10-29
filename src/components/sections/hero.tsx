"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/icons";
import { EASE_HERO } from "@/components/motion";
import { TextRoll } from "@/components/ui";
import { hero } from "@/lib/content";
import { routes } from "@/lib/routes";

const MotionLink = motion.create(Link);

const rise = (delay: number, y: number, scale: number) => ({
  initial: { opacity: 0, y, scale },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, ease: EASE_HERO, delay },
});

export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[560px] flex-col overflow-hidden bg-white px-wrap pb-8 pt-[60px]">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.12, 0.23, 0.5, 1] }}
        >
          <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover object-[37.9%_59.8%]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_16%,rgba(0,0,0,0.5)_61.48%,rgba(0,0,0,0.83)_100%)]" />
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col items-end gap-[70px]">
        <div className="flex min-h-0 w-full flex-1 flex-col items-start justify-end gap-8 overflow-clip pt-[120px]">
          <div className="flex flex-col items-start justify-center gap-7 overflow-clip md:w-[500px]">
            <motion.p {...rise(0.5, 120, 0.8)} className="t-24 max-w-[450px] origin-left text-white">
              {hero.text}
            </motion.p>
            <MotionLink
              {...rise(0.7, 120, 0.8)}
              href={routes.listings}
              className="group inline-flex items-center overflow-hidden rounded-[40px] bg-white pb-[10px] pl-[30px] pr-[40px] pt-[9px]"
            >
              <TextRoll text={hero.cta} className="t-15 text-ink" />
            </MotionLink>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end">
          <motion.p
            {...rise(0.3, 150, 0.9)}
            aria-label="Luxterra"
            className="min-w-0 flex-1 origin-bottom-left whitespace-nowrap text-white"
            style={{
              fontSize: "calc((var(--content) - 352px) * 0.28366)",
              lineHeight: 0.76,
              letterSpacing: "-0.07em",
              fontVariationSettings: '"opsz" 14, "wght" 450',
            }}
          >
            Luxterra
          </motion.p>

          <MotionLink
            {...rise(0.9, 180, 0.8)}
            href={routes.contact}
            className="group relative flex h-[151px] w-[320px] shrink-0 items-end rounded-[2px] bg-white p-4 shadow-[0_0.6px_0.6px_-1.25px_rgba(0,0,0,0.18),0_2.29px_2.29px_-2.5px_rgba(0,0,0,0.16),0_10px_10px_-3.75px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:bg-ink"
          >
            <div className="flex flex-col items-start gap-[30px]">
              <div className="relative h-[47px] w-[52px] overflow-hidden rounded-[2px]">
                <Image src={hero.avatar} alt="" fill sizes="52px" className="object-cover" />
              </div>
              <div className="w-[230px]">
                <p className="t-15 text-black/62 transition-colors duration-300 group-hover:text-white">{hero.cardEyebrow}</p>
                <p className="t-16 text-ink transition-colors duration-300 group-hover:text-white">{hero.cardTitle}</p>
              </div>
            </div>
            <span className="absolute bottom-4 right-4 size-10 overflow-hidden rounded-[2px] bg-ink transition-colors duration-300 group-hover:bg-white">
              <span className="absolute left-[-20px] top-1/2 flex -translate-y-1/2 gap-[10px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[30px]">
                <ArrowRightIcon className="size-5 text-ink" />
                <ArrowRightIcon className="size-5 text-white" />
              </span>
            </span>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
