import { EASE_HERO } from "@/components/motion";

/**
 * Framer "appear" (on-load) animation used on /agents and /agents/<slug>:
 * opacity 0 → 1, rises `y`px and grows from `scale`, 1s tween with the hero ease.
 */
export const appear = (delay: number, y: number, scale: number) => ({
  initial: { opacity: 0.001, y, scale },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, ease: EASE_HERO, delay },
});
