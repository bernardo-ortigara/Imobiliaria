"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { EASE_REVEAL, Reveal } from "@/components/motion";
import { GridLines, RollButton, SectionLabel } from "@/components/ui";
import { faq } from "@/lib/content";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex size-[46px] shrink-0 items-center justify-center rounded-full bg-white">
      <motion.span
        className="relative size-[17px]"
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-[40px] bg-[#29292b]" />
        <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-[40px] bg-[#29292b]" />
      </motion.span>
    </span>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-mist px-wrap">
      <GridLines left="bg-line-soft" right="bg-transparent" />
      <div className="relative flex flex-col gap-10 pb-[150px] pt-[120px] lg:flex-row">
        <Reveal className="flex flex-col justify-between gap-16 lg:w-[439px] lg:shrink-0">
          <div className="flex flex-col gap-[10px]">
            <SectionLabel lines="after">{faq.label}</SectionLabel>
            <h2 className="t-58 max-w-[395px] text-ink">{faq.title}</h2>
          </div>
          <div className="flex flex-col items-start gap-[14px]">
            <div className="relative h-[110px] w-[140px] overflow-hidden rounded-[2px]">
              <Image src={faq.image} alt="" fill sizes="140px" className="object-cover object-[18.2%_39.7%]" />
            </div>
            <p className="t-18 max-w-[307px] text-black/70">{faq.text}</p>
            <RollButton className="border border-black/15 bg-white">{faq.cta}</RollButton>
          </div>
        </Reveal>

        <Reveal kind="spring" y={40} className="flex flex-1 flex-col">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center gap-5 py-[30px] text-left"
                >
                  <span className="t-24 flex-1 text-ink">{item.q}</span>
                  <PlusIcon open={isOpen} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, marginTop: 0, opacity: 0 }}
                      animate={{ height: "auto", marginTop: -20, opacity: 1 }}
                      exit={{ height: 0, marginTop: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE_REVEAL }}
                      className="overflow-hidden"
                    >
                      <p className="t-18 pb-8 pr-4 text-black/70">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
