"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowLeftIcon, QuoteIcon } from "@/components/icons";
import { CharReveal, EASE_SLIDE, Reveal } from "@/components/motion";
import { SectionLabel } from "@/components/ui";
import { testimonials } from "@/lib/content";

type Item = (typeof testimonials.items)[number];

function Card({ item, charReveal }: { item: Item; charReveal?: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-8 rounded-[2px] bg-white p-6">
      <QuoteIcon className="h-10 w-12" />
      <div className="flex flex-col justify-center gap-[60px]">
        {charReveal ? (
          <CharReveal text={item.quote} className="t-24 min-h-[146px] text-ink" />
        ) : (
          <p className="t-24 min-h-[146px] text-ink">{item.quote}</p>
        )}
        <div className="flex flex-col gap-[14px]">
          <div className="relative h-[72px] w-[100px] overflow-hidden rounded-[2px]">
            <Image src={item.image} alt={item.name} fill sizes="100px" className="object-cover" />
          </div>
          <div>
            <p className="t-16 text-ink">{item.name}</p>
            <p className="t-16 text-black/62">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Anterior" : "Próximo"}
      disabled={disabled}
      onClick={onClick}
      className="flex size-14 cursor-pointer items-center justify-center rounded-[3px] bg-white transition-opacity duration-300 hover:opacity-80 disabled:cursor-default disabled:opacity-35"
    >
      <ArrowLeftIcon className={`size-6 text-ink ${dir === "next" ? "rotate-180" : ""}`} />
    </button>
  );
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(testimonials.items.length / 2);
  const pair = testimonials.items.slice(page * 2, page * 2 + 2);

  return (
    <section className="bg-white px-wrap">
      <div className="rounded-[2px] bg-mist px-10 pb-20 pt-[60px]">
        <div className="flex flex-col gap-10 lg:flex-row">
          <Reveal className="flex flex-col justify-between gap-10 lg:w-[412px] lg:shrink-0">
            <div className="flex flex-col gap-[10px]">
              <SectionLabel lines="after">{testimonials.label}</SectionLabel>
              <h2 className="t-58 max-w-[330px] text-ink">{testimonials.title}</h2>
            </div>
            <div className="flex gap-3">
              <Arrow dir="prev" disabled={page === 0} onClick={() => setPage((p) => p - 1)} />
              <Arrow dir="next" disabled={page === pages - 1} onClick={() => setPage((p) => p + 1)} />
            </div>
          </Reveal>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page}
                className="flex flex-col gap-5 md:flex-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_SLIDE }}
              >
                {pair.map((item, i) => (
                  <Reveal key={item.name} kind="slide" x={40} className="flex flex-1">
                    <Card item={item} charReveal={i === 1} />
                  </Reveal>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
