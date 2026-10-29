"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ListingCard } from "@/components/cards";
import { EASE_REVEAL, Reveal } from "@/components/motion";
import { GridLines, SectionLabel } from "@/components/ui";
import { listings } from "@/lib/content";
import { rentListings, saleListings, statusLabel } from "@/lib/data/listings";

const PAGE = 6;

export function Listings() {
  const [tab, setTab] = useState<"sale" | "rent">("sale");
  const [expanded, setExpanded] = useState(false);
  const items = tab === "sale" ? saleListings : rentListings;
  const visible = expanded ? items : items.slice(0, PAGE);

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
            {(["sale", "rent"] as const).map((key) => {
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
                    {statusLabel[key]}
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
                    key={item.slug}
                    initial={i >= PAGE ? { opacity: 0, y: 20 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_REVEAL, delay: i >= PAGE ? (i - PAGE) * 0.06 : 0 }}
                  >
                    <ListingCard item={item} />
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
