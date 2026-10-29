"use client";

import { motion, type Transition } from "motion/react";
import { useCallback, useMemo, useState, type CSSProperties } from "react";
import { ListingCard } from "@/components/cards";
import { EASE_HERO } from "@/components/motion";
import { GridLines } from "@/components/ui";
import { cityOptions, imoveis, orderedListings, statusOptions } from "@/lib/content/imoveis";
import { ChevronIcon, SearchIcon } from "./icons";
import { SearchModal } from "./search-modal";

// On-load "appear" animations measured on the original /listings page.
const tween = (delay: number): Transition => ({ duration: 1, ease: EASE_HERO, delay });
const GRID_SPRING: Transition = { type: "spring", stiffness: 70, damping: 27, mass: 0.3, delay: 0.4 };

const H1_STYLE: CSSProperties = { fontVariationSettings: '"opsz" 14, "wght" 420' };
const SHADOW =
  "shadow-[0_0.6px_0.6px_-1.25px_rgba(0,0,0,0.09),0_2.29px_2.29px_-2.5px_rgba(0,0,0,0.08),0_10px_10px_-3.75px_rgba(0,0,0,0.03)]";

type Filters = { status: string; type: string; city: string };
const ALL = "";

export function ListingsPage() {
  const [filters, setFilters] = useState<Filters>({ status: ALL, type: ALL, city: ALL });
  // Like Framer's CMS "Load more", the page count survives filter changes.
  const [limit, setLimit] = useState(imoveis.pageSize);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const matches = useMemo(
    () =>
      orderedListings.filter(
        (l) =>
          (!filters.status || l.status === filters.status) &&
          (!filters.type || l.type === filters.type) &&
          (!filters.city || l.city === filters.city),
      ),
    [filters],
  );
  const visible = matches.slice(0, limit);

  const selects = [
    { key: "status", label: imoveis.filters.status, options: statusOptions },
    { key: "type", label: imoveis.filters.type, options: imoveis.types.map((t) => ({ value: t, label: t })) },
    { key: "city", label: imoveis.filters.city, options: cityOptions },
  ] as const;

  return (
    <section className="relative bg-white px-wrap">
      <motion.div className="absolute inset-0" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={GRID_SPRING}>
        <GridLines />
      </motion.div>

      <div className="relative flex flex-col items-end gap-[70px] pb-[130px] pt-[60px]">
        {/* Heading: clipped box, so the rising label/title appear from below its edge */}
        <div className="flex w-full flex-col items-center gap-4 overflow-clip pt-[120px]">
          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex w-full items-center gap-4 overflow-clip">
              <motion.span className="h-px flex-1 bg-line-soft" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={tween(0.3)} />
              <motion.span
                className="flex shrink-0 items-center gap-[10px]"
                initial={{ opacity: 0, y: 150, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={tween(0.3)}
              >
                <span className="size-[7px] rounded-[5px] bg-purple" />
                <span className="t-16 text-black/62">{imoveis.label}</span>
              </motion.span>
              <motion.span className="h-px flex-1 bg-line-soft" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={tween(0.3)} />
            </div>
            <motion.h1
              className="max-w-[560px] text-center text-[52px] leading-[0.98] tracking-[-0.07em] text-ink md:text-[82px] md:leading-[80.36px]"
              style={H1_STYLE}
              initial={{ opacity: 0, y: 150, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={tween(0.3)}
            >
              {imoveis.title}
            </motion.h1>
          </div>
          <motion.p
            className="t-19 max-w-[450px] text-center text-black/70"
            initial={{ opacity: 0, y: 120, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={tween(0.5)}
          >
            {imoveis.text}
          </motion.p>
        </div>

        <motion.div
          className="flex w-full flex-col items-center gap-[30px] overflow-hidden"
          initial={{ opacity: 0, y: 120, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={tween(0.8)}
        >
          {/* Toolbar: search trigger + filters */}
          <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:gap-[100px]">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={`flex h-[46px] w-full cursor-text items-center gap-[10px] rounded-[3px] bg-mist pb-[13px] pl-[15px] pr-5 pt-[13px] md:w-[220px] ${SHADOW}`}
            >
              <SearchIcon className="size-[17px] shrink-0 text-black opacity-75" />
              <span className="text-[15px] leading-[19.5px] tracking-[-0.15px] text-black opacity-70" style={{ fontVariationSettings: '"opsz" 14, "wght" 460' }}>
                {imoveis.searchPlaceholder}
              </span>
            </button>

            <div className="flex flex-1 flex-wrap items-center gap-2 md:justify-end">
              {selects.map((s) => (
                <label key={s.key} className="flex w-[140px] flex-col items-start gap-[6px]">
                  <span className="text-[14px] leading-[15px] tracking-[-0.14px] text-ink opacity-75" style={{ fontVariationSettings: '"opsz" 14, "wght" 440' }}>
                    {s.label}
                  </span>
                  <span className="relative block h-10 w-full rounded-[3px] bg-mist pr-3">
                    <select
                      value={filters[s.key]}
                      onChange={(e) => setFilters((f) => ({ ...f, [s.key]: e.target.value }))}
                      className="block h-10 w-full appearance-none bg-transparent p-3 text-[14px] leading-[16.8px] text-black/62 outline-none"
                    >
                      <option value={ALL}>{imoveis.filters.all}</option>
                      <hr />
                      {s.options.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#999]" />
                  </span>
                </label>
              ))}
            </div>
          </div>

          {visible.length ? (
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((item) => (
                <ListingCard key={item.slug} item={item} />
              ))}
              {matches.length > limit && (
                <button
                  type="button"
                  onClick={() => setLimit((n) => n + imoveis.pageSize)}
                  className="t-16 col-span-full cursor-pointer justify-self-center rounded-[2px] border border-black/30 bg-white px-[19px] py-[7px] text-ink"
                >
                  {imoveis.loadMore}
                </button>
              )}
            </div>
          ) : (
            <div className="w-full pb-10">
              <div className="flex h-[200px] w-full items-center justify-center rounded-[4px] border border-dashed border-black/12 bg-mist">
                <p className="t-17 text-black/46">{imoveis.empty}</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <SearchModal open={searchOpen} onClose={closeSearch} />
    </section>
  );
}
