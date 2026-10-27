import Image from "next/image";
import { LinkedinIcon, TwitterIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { GridLines, RollButton, SectionLabel } from "@/components/ui";
import { agents } from "@/lib/content";

export function Agents() {
  return (
    <section id="corretores" className="relative overflow-hidden bg-white px-wrap">
      <GridLines />
      <div className="relative flex flex-col items-center gap-10 pb-[120px] pt-[100px]">
        <div className="flex w-full flex-col items-center gap-3">
          <Reveal className="w-full">
            <SectionLabel>{agents.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="t-58 text-center text-ink">{agents.title}</h2>
          </Reveal>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {agents.items.map((agent) => (
            <Reveal key={agent.name} className="flex flex-col gap-4">
              <div className="relative aspect-[439/372] overflow-hidden rounded-[2px]">
                <Image src={agent.image} alt={agent.name} fill sizes="(min-width: 1024px) 439px, 100vw" className="object-cover object-top" />
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="flex flex-col gap-px pb-[6px]">
                  <div className="flex items-center gap-[10px]">
                    <p className="t-19 flex-1 text-ink">{agent.name}</p>
                    <div className="flex items-center gap-[10px] text-black/70">
                      <a href="#" aria-label="LinkedIn" className="transition-opacity duration-300 hover:opacity-80">
                        <LinkedinIcon className="size-[25px]" />
                      </a>
                      <a href="#" aria-label="Twitter" className="transition-opacity duration-300 hover:opacity-80">
                        <TwitterIcon className="size-[25px]" />
                      </a>
                    </div>
                  </div>
                  <p className="t-15 text-black/70">{agent.role}</p>
                  <p className="t-15 text-black/70">{agent.cities}</p>
                </div>
                <RollButton className="w-[150px] border border-black/15 bg-white">{agents.cta}</RollButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
