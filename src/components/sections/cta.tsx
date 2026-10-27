"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowCtaIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { TextRoll } from "@/components/ui";
import { cta } from "@/lib/content";

export function Cta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.05]);

  return (
    <section ref={ref} id="contato" className="relative flex flex-col items-center gap-[6px] overflow-hidden px-8 pb-[170px] pt-20">
      <motion.div className="absolute inset-0 will-change-transform" style={{ scale }}>
        <Image src={cta.image} alt="" fill sizes="100vw" className="object-cover object-left" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_0%,rgba(17,17,18,0.8)_75%,rgb(17,17,18)_100%)]" />

      <Reveal className="relative size-[90px]">
        <div className="relative size-full overflow-hidden rounded-full">
          <Image src={cta.avatar} alt="" fill sizes="90px" className="object-cover" />
        </div>
        <motion.span
          className="absolute right-[6px] top-[6px] size-[15px] rounded-full bg-[rgba(7,209,0,0.53)]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </Reveal>

      <div className="relative flex flex-col items-center gap-10">
        <Reveal className="flex max-w-[470px] flex-col gap-2 text-center">
          <h2 className="t-58 text-white">{cta.title}</h2>
          <p className="t-19 text-white/85">{cta.text}</p>
        </Reveal>
        <Reveal>
          <a
            href="#"
            className="group relative flex h-[50px] items-center gap-4 overflow-hidden rounded-[2px] bg-white py-[5px] pl-[6px] pr-[26px]"
          >
            <span className="absolute bottom-[3px] left-1 top-[3px] w-[44px] rounded-[2px] bg-purple transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-9px)]" />
            <span className="relative flex size-10 items-center rounded-[35px] p-[11px]">
              <span className="block size-[18px] overflow-hidden">
                <span className="flex gap-[10px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[28px]">
                  <ArrowCtaIcon className="size-[18px] shrink-0 text-white" />
                  <ArrowCtaIcon className="size-[18px] shrink-0 text-white" />
                </span>
              </span>
            </span>
            <span className="relative">
              <TextRoll text={cta.button} className="t-18 text-ink" secondClassName="t-18 text-white" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
