"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AreaIcon, BathIcon, BedIcon } from "@/components/icons";
import { EASE_REVEAL, Reveal } from "@/components/motion";
import { GridLines, SectionLabel } from "@/components/ui";
import { listings, type Listing } from "@/lib/content";

const PAGE = 6;

function ListingCard({ item, tag }: { item: Listing; tag: string }) {
  return (
    <article className="flex flex-col gap-[18px]">
      <a href="#" className="group/card relative block aspect-[436/313] overflow-hidden rounded-[2px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 436px, 100vw"
          className="zoom-img object-cover group-hover/card:scale-[1.02]"
        />
        <span className="absolute left-3 top-3 flex gap-2">
          {[tag, item.type].map((chip) => (
            <span key={chip} className="t-13 rounded-[24px] bg-chip px-3 py-[6px] text-ink">
              {chip}
            </span>
          ))}
        </span>
      </a>
      <div className="flex flex-col gap-[6px] px-[6px]">
        <div className="flex items-start justify-center gap-5">
          <div className="flex min-w-0 flex-1 flex-col gap-px">
            <a href="#" className="t-17 text-ink-soft">
              {item.title}
            </a>
            <p className="t-15 text-black/62">{item.address}</p>
          </div>
          <p className="t-17 shrink-0 text-black/70">{item.price}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-black/62">
          {[
            [AreaIcon, item.area],
            [BedIcon, item.beds],
            [BathIcon, item.baths],
          ].map(([Icon, label]) => {
            const I = Icon as typeof AreaIcon;
            return (
              <span key={label as string} className="flex items-center gap-2">
                <I className="size-5 text-[#73737d]" />
                <span className="t-15">{label as string}</span>
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function Listings() {
  const [tab, setTab] = useState<"sale" | "rent">("sale");
  const [expanded, setExpanded] = useState(false);
  const items = tab === "sale" ? listings.sale : listings.rent;
  const visible = expanded ? items : items.slice(0, PAGE);
  const tag = tab === "sale" ? listings.saleTag : listings.rentTag;

  return (
    <section id="imoveis" className="relative bg-white px-wrap">
      <GridLines />
      <div className="relative flex flex-col items-center gap-[50px] pb-[90px] pt-[100px]">
        <div className="flex w-full flex-col items-center gap-3">
          <Reveal className="w-full">
            <SectionLabel lineClassName="bg-line">{listings.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="t-58 text-center text-ink">{listings.title}</h2>
          </Reveal>
        </div>

        <div className="flex w-full flex-col items-center gap-[30px]">
          <Reveal className="flex gap-[10px]">
            {(["sale", "rent"] as const).map((key, i) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setTab(key);
                    setExpanded(false);
                  }}
                  className={`cursor-pointer rounded-[1px] px-4 py-[6px] transition-colors duration-300 ${
                    active ? "bg-ink text-white" : "bg-mist text-ink"
                  }`}
                >
                  <span className={`t-15 block transition-opacity duration-300 ${active ? "hover:opacity-80" : "opacity-80 hover:opacity-100"}`}>
                    {listings.tabs[i]}
                  </span>
                </button>
              );
            })}
          </Reveal>

          <Reveal className="w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                className="grid w-full grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_REVEAL }}
              >
                {visible.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={i >= PAGE ? { opacity: 0, y: 20 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_REVEAL, delay: i >= PAGE ? (i - PAGE) * 0.06 : 0 }}
                  >
                    <ListingCard item={item} tag={tag} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Reveal>

          {!expanded && items.length > PAGE && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="t-16 cursor-pointer rounded-[2px] border border-black/15 bg-white px-5 py-2 text-ink"
            >
              {listings.loadMore}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
