import Image from "next/image";
import { Fragment } from "react";
import { Counter, Reveal } from "@/components/motion";
import { SectionLabel } from "@/components/ui";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-white px-wrap">
      <div className="relative flex flex-col items-center gap-14 overflow-clip rounded-[2px] bg-night px-10 py-20">
        <div className="absolute inset-0 opacity-[0.018]">
          <Image src={stats.image} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative flex w-full flex-col items-center gap-[10px]">
          <Reveal className="w-full" delay={0.2}>
            <SectionLabel tone="dark">{stats.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <p className="t-34 text-center text-white">{stats.title}</p>
          </Reveal>
        </div>
        <Reveal className="relative grid w-full max-w-[1100px] grid-cols-2 gap-10 lg:flex lg:flex-row">
          {stats.items.map((item, i) => (
            <Fragment key={item.label}>
              {i > 0 && <span className="hidden w-px self-stretch bg-white/10 lg:block" />}
              <div className="flex flex-1 flex-col">
                <Counter value={item.value} suffix={item.suffix} className="t-counter text-white" />
                <p className="t-18 text-white/60">{item.label}</p>
              </div>
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
