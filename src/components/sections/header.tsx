"use client";

import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { SPRING_NAV } from "@/components/motion";
import { TextRoll } from "@/components/ui";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  return (
    <>
      <motion.header
        className="absolute inset-x-0 top-[18px] z-40 px-wrap"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING_NAV, delay: 0.3 }}
      >
        <nav className="flex h-[52px] items-center justify-between rounded-[3px] bg-white px-[26px] py-3 shadow-[0_0.6px_0.6px_-1.25px_rgba(0,0,0,0.09),0_2.29px_2.29px_-2.5px_rgba(0,0,0,0.08),0_10px_10px_-3.75px_rgba(0,0,0,0.03)]">
          <a href="#" aria-label="Luxterra" className="flex w-[85px] items-start transition-opacity duration-300 hover:opacity-80">
            <LogoMark className="h-[28px] w-[44px]" />
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <li key={link}>
                <a href="#" className="group block pb-px">
                  <TextRoll text={link} direction="down" gap={18} className="t-18 text-ink" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex cursor-pointer items-center gap-[10px] transition-opacity duration-300 hover:opacity-80"
          >
            <span className="flex w-[30px] flex-col items-end gap-[5.5px]">
              <span className="h-[2px] w-[30px] bg-ink" />
              <span className="h-[2px] w-[18px] bg-ink" />
            </span>
            <span className="t-19 text-ink">{nav.menu}</span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-[rgba(41,41,41,0.83)]"
            />
            <motion.aside
              data-lenis-prevent
              className="absolute inset-y-0 right-0 flex w-full max-w-[570px] flex-col gap-14 overflow-y-auto bg-ink p-[55px]"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 150, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="relative size-[55px] shrink-0 cursor-pointer rounded-[2px] bg-white"
              >
                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[26px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink" />
                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[26px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ink" />
              </button>
              <ul className="flex flex-col gap-4">
                {nav.drawerLinks.map((link) => (
                  <li key={link}>
                    <a href="#" onClick={() => setOpen(false)} className="group block w-fit pb-px">
                      <TextRoll text={link} direction="down" gap={18} className="t-34 text-white" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-[6px]">
                <p className="t-18 text-white/60">{nav.contactTitle}</p>
                <a href={`mailto:${nav.email}`} className="t-18 text-white underline">
                  {nav.email}
                </a>
                <a href={`tel:${nav.phone}`} className="t-18 text-white underline">
                  {nav.phone}
                </a>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="t-18 text-white/60">{nav.socialsTitle}</p>
                {nav.socials.map((s) => (
                  <a key={s} href="#" className="t-18 text-white underline">
                    {s}
                  </a>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
