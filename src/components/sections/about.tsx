import Image from "next/image";
import { BankIcon, DocumentIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { GridLines, SectionLabel } from "@/components/ui";
import { about } from "@/lib/content";

const icons = { bank: BankIcon, doc: DocumentIcon };

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white px-wrap pb-[140px] pt-[150px]">
      <GridLines left="bg-transparent" right="bg-line" />
      <div className="relative flex flex-col gap-[60px] lg:flex-row">
        <div className="flex flex-col justify-center gap-14 lg:w-[576px] lg:shrink-0">
          <div className="flex flex-col gap-3">
            <Reveal>
              <SectionLabel lines="after" lineClassName="bg-line">
                {about.label}
              </SectionLabel>
            </Reveal>
            <div className="flex flex-col gap-[14px]">
              <Reveal>
                <h2 className="t-58 text-ink">{about.title}</h2>
              </Reveal>
              <Reveal>
                <p className="t-19 text-black/62">{about.text}</p>
              </Reveal>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            {about.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <Reveal key={item.title}>
                  <div className="flex items-center gap-6 rounded-[2px] bg-mist p-[30px]">
                    <Icon className="size-14 shrink-0 text-black/62" />
                    <div className="flex flex-col gap-[3px]">
                      <h3 className="t-18 text-ink">{item.title}</h3>
                      <p className="t-16 text-black/70">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <Reveal className="relative aspect-[634/568] w-full overflow-hidden rounded-[2px] lg:max-w-[634px]">
            <Image src={about.image} alt="" fill sizes="(min-width: 1024px) 634px, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
