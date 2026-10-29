import Link from "next/link";
import { ArrowCtaIcon } from "@/components/icons";
import type { CSSProperties, ReactNode } from "react";

type RollProps = {
  text: string;
  className?: string;
  /** "up" for buttons, "down" for nav/footer links */
  direction?: "up" | "down";
  gap?: number;
  /** optional different style for the copy that rolls in */
  secondClassName?: string;
};

/** Two stacked copies of a label; hovering the closest `.group` rolls one out and the other in. */
export function TextRoll({ text, className = "", direction = "up", gap = 5, secondClassName }: RollProps) {
  return (
    <span className={`roll roll-${direction}`} style={{ "--roll-gap": `${gap}px` } as CSSProperties}>
      <span className="roll-track">
        <span className={`block whitespace-nowrap ${className}`}>{text}</span>
        <span aria-hidden className={`roll-second block whitespace-nowrap ${secondClassName ?? className}`}>
          {text}
        </span>
      </span>
    </span>
  );
}

type Tone = "light" | "dark" | "onDark";

const toneText: Record<Tone, string> = {
  light: "text-black/62",
  dark: "text-white/60",
  onDark: "text-white",
};
const toneLine: Record<Tone, string> = {
  light: "bg-line-soft",
  dark: "bg-white/10",
  onDark: "bg-white/10",
};

/** Purple dot + small label, optionally flanked by hairlines (the Framer "Dot small" component). */
export function SectionLabel({
  children,
  tone = "light",
  lines = "both",
  lineClassName,
}: {
  children: ReactNode;
  tone?: Tone;
  lines?: "both" | "after" | "none";
  lineClassName?: string;
}) {
  const line = <span className={`h-px flex-1 ${lineClassName ?? toneLine[tone]}`} />;
  const label = (
    <span className="flex shrink-0 items-center gap-[10px]">
      <span className="size-[7px] rounded-[5px] bg-purple" />
      <span className={`t-16 ${toneText[tone]}`}>{children}</span>
    </span>
  );
  return (
    <div className="flex w-full items-center gap-4">
      {lines === "both" && line}
      {label}
      {lines !== "none" && line}
    </div>
  );
}

/** The two vertical hairlines that split most sections into thirds. */
export function GridLines({ left = "bg-line", right = "bg-line" }: { left?: string; right?: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-y-0 inset-x-wrap hidden lg:block">
      <span className={`absolute inset-y-0 left-1/3 w-px ${left}`} />
      <span className={`absolute inset-y-0 left-2/3 w-px ${right}`} />
    </div>
  );
}

/** White/transparent rectangular button with the rolling label. */
export function RollButton({
  children,
  href = "#",
  className = "",
  textClassName = "text-ink",
}: {
  children: string;
  href?: string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center overflow-hidden rounded-[2px] px-[22px] pb-2 pt-2 ${className}`}
    >
      <TextRoll text={children} className={`t-15 ${textClassName}`} />
    </Link>
  );
}

const arrowTones = {
  // Framer "Primary": light grey button, dark filler that grows on hover (404 "Voltar ao início")
  primary: {
    root: "bg-mist",
    filler: "bg-ink",
    arrow: "text-white",
    text: "text-ink",
    textHover: "text-white",
  },
  // Framer "Alt": dark button, white filler that grows on hover ("Todos os corretores")
  alt: {
    root: "bg-ink shadow-[inset_0_0_4px_rgba(0,0,0,0.05)]",
    filler: "bg-white",
    arrow: "text-ink",
    text: "text-white",
    textHover: "text-ink",
  },
} as const;

/** Button with an arrow tile that expands behind the label on hover (same motion as the Home CTA). */
export function ArrowButton({ href, children, tone }: { href: string; children: string; tone: keyof typeof arrowTones }) {
  const t = arrowTones[tone];
  return (
    <Link
      href={href}
      className={`group relative flex h-[50px] items-center gap-4 overflow-hidden rounded-[2px] py-[5px] pl-[6px] pr-[26px] ${t.root}`}
    >
      <span
        className={`absolute bottom-[3px] left-1 top-[3px] w-[44px] rounded-[2px] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-9px)] ${t.filler}`}
      />
      <span className="relative flex size-10 items-center rounded-[35px] p-[11px]">
        <span className="block size-[18px] overflow-hidden">
          <span className="flex gap-[10px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[28px]">
            <ArrowCtaIcon className={`size-[18px] shrink-0 ${t.arrow}`} />
            <ArrowCtaIcon className={`size-[18px] shrink-0 ${t.arrow}`} />
          </span>
        </span>
      </span>
      <span className="relative">
        <TextRoll text={children} className={`t-18 ${t.text}`} secondClassName={`t-18 ${t.textHover}`} />
      </span>
    </Link>
  );
}
