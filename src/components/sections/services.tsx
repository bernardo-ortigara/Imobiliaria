"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion";
import { RollButton, SectionLabel } from "@/components/ui";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="bg-white px-wrap py-10">
      <div className="flex flex-col items-center gap-[70px] overflow-clip rounded-[2px] bg-night px-10 pb-20 pt-[70px]">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-[10px]">
            <Reveal className="w-full" delay={0.2}>
              <SectionLabel tone="dark">{services.label}</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="t-58 text-center text-white">{services.title}</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-18 max-w-[400px] text-center text-white/85">{services.text}</p>
          </Reveal>
        </div>

        <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.15}>
              <div className="relative flex aspect-[407/440] flex-col justify-end overflow-hidden rounded-[2px] p-7">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 407px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_22%,rgba(0,0,0,0.9)_75%,rgba(0,0,0,0.97)_100%)]" />
                <div className="relative flex flex-col gap-5">
                  <a href="#" className="flex flex-col gap-[6px]">
                    <h3 className="t-34 text-white">{item.title}</h3>
                    <p className="t-16 text-white/85">{item.text}</p>
                  </a>
                  <RollButton className="w-full border border-white/80" textClassName="text-white">
                    {item.cta}
                  </RollButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.4], [1.2, 1]);

  return (
    <section ref={ref} className="relative h-[615px] overflow-hidden bg-ink">
      <motion.div className="absolute inset-0 will-change-transform" style={{ scale }}>
        <Image src={services.band} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255,255,255)_0%,rgba(255,255,255,0.74)_15.56%,rgba(255,255,255,0)_38.6%)]" />
      </motion.div>
    </section>
  );
}
