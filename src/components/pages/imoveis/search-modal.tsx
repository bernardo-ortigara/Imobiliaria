"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useMemo, useState } from "react";
import { imoveis, searchIndex, type SearchEntry } from "@/lib/content/imoveis";
import { ClearIcon, SearchIcon } from "./icons";

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

const INDEX = searchIndex.map((e) => ({ ...e, nTitle: normalize(e.title), nKeys: normalize(e.keywords) }));

function search(query: string): SearchEntry[] {
  const q = normalize(query.trim());
  if (!q) return [];
  const inTitle = INDEX.filter((e) => e.nTitle.includes(q));
  const inKeys = INDEX.filter((e) => !e.nTitle.includes(q) && e.nKeys.includes(q));
  return [...inTitle, ...inKeys];
}

const SANS = 'var(--font-inter), Inter, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

/** Site search modal (recreates Framer's built-in search: dark backdrop, 500px white panel at 195px from the top). */
export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
    };
  }, [open, lenis, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[195px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black/80" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-[500px]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
          >
            <SearchPanel onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const results = useMemo(() => search(query), [query]);
  const hasQuery = query.trim().length > 0;

  const go = (entry: SearchEntry | undefined) => {
    if (!entry) return;
    onClose();
    router.push(entry.href);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imoveis.search.placeholder}
      className="flex max-h-[min(496px,calc(100vh-30px))] flex-col overflow-hidden rounded-[16px] bg-white text-[#333] shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
      style={{ fontFamily: SANS }}
    >
      <div role="search" className="flex shrink-0 items-center gap-3 px-5 py-3">
        <SearchIcon className="size-[18px] shrink-0 text-black/45" />
        <input
          autoFocus
          spellCheck={false}
          value={query}
          placeholder={imoveis.search.placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(i + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter") {
              go(results[active]);
            }
          }}
          className="h-8 w-full bg-transparent p-0 text-[16px] font-medium leading-8 text-[#333] outline-none placeholder:text-black/40"
        />
        {hasQuery && (
          <button
            type="button"
            aria-label={imoveis.search.clear}
            onClick={() => setQuery("")}
            className="flex shrink-0 cursor-pointer text-black/45"
          >
            <ClearIcon className="size-[18px]" />
          </button>
        )}
      </div>

      {hasQuery && (
        <>
          <div className="h-px shrink-0 bg-[#333] opacity-5" />
          {results.length ? (
            <ul aria-live="polite" data-lenis-prevent className="-mt-px flex flex-col gap-px overflow-y-auto overscroll-contain">
              {results.map((r, i) => (
                <li key={r.href} className="relative">
                  <Link
                    href={r.href}
                    onClick={onClose}
                    onMouseEnter={() => setActive(i)}
                    className="relative block px-5 py-4 font-medium text-[#333]"
                  >
                    <span className={`absolute inset-0 bg-[#333] ${i === active ? "opacity-[0.06]" : "opacity-0"}`} />
                    <span className="relative flex flex-col gap-1 overflow-hidden">
                      <span className="truncate text-[14px] leading-[1.4em]">{r.title}</span>
                      <span className="truncate text-[12px] leading-[1.4em] text-black/40"> {r.href}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-[18px] text-center text-[14px] font-medium leading-[1.4em] text-black/40">{imoveis.search.noResults}</p>
          )}
        </>
      )}
    </div>
  );
}
