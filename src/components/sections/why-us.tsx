"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BriefcaseIcon, BuildingIcon, RefreshIcon, UsersIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { SectionLabel } from "@/components/ui";
import { why } from "@/lib/content";

const icons = { refresh: RefreshIcon, building: BuildingIcon, briefcase: BriefcaseIcon, users: UsersIcon };

function StatCard({ stat }: { stat: (typeof why.stats)[number] }) {
  const Icon = icons[stat.icon];
  return (
    <div className="flex min-h-[331px] flex-1 flex-col justify-between gap-10 rounded-[2px] bg-mist p-6">
      <div className="flex items-start justify-between">
        <p className="t-24 text-ink">
          {stat.value}
          <br />
          {stat.label}
        </p>
        <Icon className="size-[52px] shrink-0 text-black/46" />
      </div>
      <p className="t-16 max-w-[240px] text-black/70">{stat.text}</p>
    </div>
  );
}

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="overflow-hidden bg-white px-wrap pb-[90px] pt-[100px]">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex w-full flex-col items-center gap-3">
          <Reveal className="w-full">
            <SectionLabel>{why.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="t-58 max-w-[700px] text-center text-ink">{why.title}</h2>
          </Reveal>
        </div>

        <div ref={ref} className="flex w-full flex-col gap-5 lg:flex-row">
          <Reveal className="relative flex min-h-[683px] flex-1 flex-col justify-between overflow-hidden rounded-[2px] bg-ink p-6">
            <motion.div className="absolute inset-0 will-change-transform" style={{ scale }}>
              <Image src={why.image} alt="" fill sizes="(min-width: 1024px) 633px, 100vw" className="object-cover object-[50%_100%]" />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.9)_100%)]" />
            <div className="relative flex flex-col gap-[10px]">
              <SectionLabel tone="onDark" lines="none">
                {why.cardLabel}
              </SectionLabel>
              <h3 className="t-42 max-w-[400px] text-white">{why.cardTitle}</h3>
            </div>
            <p className="t-18 relative max-w-[440px] text-white">{why.cardText}</p>
          </Reveal>

          <div className="flex flex-col gap-5 lg:w-[703px]">
            <Reveal className="flex flex-col gap-5 sm:flex-row" delay={0.2}>
              <StatCard stat={why.stats[0]} />
              <StatCard stat={why.stats[1]} />
            </Reveal>
            <Reveal className="flex flex-col gap-5 sm:flex-row">
              <StatCard stat={why.stats[2]} />
              <StatCard stat={why.stats[3]} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
