import { EASE_HERO } from "@/components/motion";

export const appear = (delay: number, y: number, scale: number) => ({
  initial: { opacity: 0.001, y, scale },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, ease: EASE_HERO, delay },
});
