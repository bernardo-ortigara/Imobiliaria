"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { CloseIcon } from "./icons";

type Props = {
  images: string[];
  index: number | null;
  alt: string;
  labels: { close: string; prev: string; next: string };
  onChange: (index: number | null) => void;
};

const SWIPE = 60;

const subscribe = () => () => {};
const useMounted = () => useSyncExternalStore(subscribe, () => true, () => false);

export function Lightbox({ images, index, alt, labels, onChange }: Props) {
  const lenis = useLenis();
  const mounted = useMounted();
  const touchX = useRef<number | null>(null);
  const open = index !== null;
  const count = images.length;

  const close = useCallback(() => onChange(null), [onChange]);
  const step = useCallback(
    (dir: number) => {
      if (index === null) return;
      onChange((index + dir + count) % count);
    },
    [index, count, onChange],
  );

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
    };
  }, [open, lenis, close, step]);

  const control =
    "absolute z-10 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/25";

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[70] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black/90" onClick={close} />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="relative h-[calc(100svh-140px)] w-[calc(100vw-32px)] md:w-[calc(100vw-160px)]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
              onTouchStart={(e) => {
                const zoomed = (window.visualViewport?.scale ?? 1) > 1.01;
                touchX.current = e.touches.length === 1 && !zoomed ? e.touches[0].clientX : null;
              }}
              onTouchMove={(e) => {
                if (e.touches.length > 1) touchX.current = null;
              }}
              onTouchEnd={(e) => {
                if (touchX.current === null || count < 2) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                touchX.current = null;
                if (dx < -SWIPE) step(1);
                else if (dx > SWIPE) step(-1);
              }}
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <Image
                src={images[index]}
                alt={alt}
                fill
                sizes="100vw"
                draggable={false}
                className="pointer-events-none select-none object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <button type="button" onClick={close} aria-label={labels.close} className={`${control} right-4 top-4`}>
            <CloseIcon className="size-5" />
          </button>

          {count > 1 && (
            <>
              <button type="button" onClick={() => step(-1)} aria-label={labels.prev} className={`${control} left-4 top-1/2 hidden -translate-y-1/2 md:flex`}>
                <ArrowLeftIcon className="size-5" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label={labels.next} className={`${control} right-4 top-1/2 hidden -translate-y-1/2 md:flex`}>
                <ArrowRightIcon className="size-5" />
              </button>
              <p className="t-15 absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80">
                {index + 1} / {count}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
