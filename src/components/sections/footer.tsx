"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GridLines, TextRoll } from "@/components/ui";
import { footer } from "@/lib/content";

function FooterLink({ children, href = "#" }: { children: string; href?: string }) {
  return (
    <a href={href} className="group block pb-px">
      <TextRoll text={children} direction="down" gap={18} className="t-18 text-white" />
    </a>
  );
}

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const opacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.4, 1], [40, 0]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink px-wrap pt-20">
      <GridLines left="bg-white/12" right="bg-white/12" />
      <div className="relative flex flex-col items-center gap-20">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="t-18 text-white/60">{footer.navTitle}</p>
              <nav className="flex flex-col items-start gap-[5px]">
                {footer.nav.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <p className="t-18 text-white/60">{footer.followTitle}</p>
              <div className="flex items-center gap-4">
                {footer.socials.map((s) => (
                  <a key={s.name} href="#" aria-label={s.name} className="transition-transform duration-300 hover:scale-110">
                    <Image src={s.icon} alt="" width={20} height={20} className="size-5 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <p className="t-18 max-w-[320px] text-center text-white">{footer.newsletter}</p>
            <form className="flex w-full max-w-[380px] items-center gap-[10px] border-b border-white/50 pb-3 pt-[10px]">
              <input
                type="email"
                required
                placeholder={footer.emailPlaceholder}
                className="t-15 min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/50"
              />
              <button type="submit" className="t-15 cursor-pointer text-white">
                {footer.subscribe}
              </button>
            </form>
          </div>

          <div className="flex flex-col items-end gap-8 text-right">
            <div className="flex flex-col items-end gap-2">
              <p className="t-18 text-white/60">{footer.pagesTitle}</p>
              <nav className="flex flex-col items-end gap-1">
                {footer.pages.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </nav>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="t-18 text-white/60">{footer.contactTitle}</p>
              <div className="flex flex-col items-end gap-1">
                <FooterLink href={`tel:${footer.phone}`}>{footer.phone}</FooterLink>
                <FooterLink href={`mailto:${footer.email}`}>{footer.email}</FooterLink>
                <p className="t-18 max-w-[180px] text-white">{footer.address}</p>
              </div>
            </div>
          </div>
        </div>

        <motion.p
          aria-hidden
          style={{
            opacity,
            y,
            fontSize: "calc(var(--content) * 0.2697)",
            lineHeight: 0.889,
            letterSpacing: "-0.05em",
            fontVariationSettings: '"opsz" 14, "wght" 520',
          }}
          className="w-full whitespace-nowrap text-center"
        >
          {/* gradient on the inline box (taller than the line box), as in the original */}
          <span className="bg-[linear-gradient(181deg,rgb(255,255,255)_30%,rgba(17,17,18,0.91)_74%)] bg-clip-text text-transparent">
            Luxterra
          </span>
        </motion.p>
      </div>
    </footer>
  );
}
