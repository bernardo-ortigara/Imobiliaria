"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EASE_HERO } from "@/components/motion";
import { GridLines } from "@/components/ui";
import { contato } from "@/lib/content/contato";
import { ContactForm } from "./contact-form";

// Framer "appear" animations measured on /contact: 1s tween, ease [0.68,0,0,0.99]
const appear = (delay: number, y: number, scale: number) => ({
  initial: { opacity: 0, y, scale },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, ease: EASE_HERO, delay },
});

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white px-wrap pb-[60px] pt-20">
      <GridLines />
      <div className="relative flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-2 overflow-clip pt-[120px]">
          <div className="flex w-full items-center gap-4">
            <motion.span {...appear(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
            <motion.span {...appear(0.3, 150, 0.9)} className="flex shrink-0 items-center gap-[10px]">
              <span className="size-[7px] rounded-[5px] bg-purple" />
              <span className="t-16 text-black/62">{contato.label}</span>
            </motion.span>
            <motion.span {...appear(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
          </div>
          <motion.h1 {...appear(0.3, 150, 0.9)} className="t-82 max-w-[560px] text-center text-ink">
            {contato.title}
          </motion.h1>
        </div>

        <div className="flex w-full max-w-[1260px] flex-col items-start gap-[60px] lg:flex-row">
          <motion.div {...appear(0.5, 120, 0.8)} className="flex w-full flex-col items-start gap-9 lg:w-[458px] lg:shrink-0">
            <div className="flex flex-col gap-[10px]">
              <h2 className="t-34 text-ink">{contato.intro.title}</h2>
              <p className="t-19 text-black/62">{contato.intro.text}</p>
            </div>
            <div className="flex w-full flex-col gap-[18px]">
              {contato.details.map((d) => (
                <a
                  key={d.title}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-5 rounded-[2px] border border-line bg-white px-[19px] py-[23px] transition-opacity duration-300 hover:opacity-75"
                >
                  <Image src={d.icon} alt="" width={24} height={24} className="size-6 shrink-0 object-contain" />
                  <span className="flex min-w-0 flex-col gap-2">
                    <span className="t-19 text-ink">{d.title}</span>
                    <span className="t-18 text-black/62">{d.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div {...appear(0.6, 120, 0.8)} className="w-full min-w-0 flex-1">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
