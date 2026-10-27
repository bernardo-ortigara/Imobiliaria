import Image from "next/image";
import { Reveal } from "@/components/motion";
import { GridLines, SectionLabel } from "@/components/ui";
import { cities } from "@/lib/content";

export function Cities() {
  return (
    <section className="relative overflow-hidden bg-mist px-wrap">
      <GridLines left="bg-line-soft" right="bg-line-soft" />
      <div className="relative flex flex-col gap-[60px] pb-[120px] pt-[90px]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-3">
            <Reveal className="w-full" delay={0.2}>
              <SectionLabel>{cities.label}</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="t-58 text-center text-ink">{cities.title}</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-18 max-w-[400px] text-center text-black/70">{cities.text}</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cities.items.map((city) => (
            <Reveal key={city.name} kind="spring" y={40}>
              <a
                href="#"
                className="group/city relative flex aspect-[324/480] flex-col justify-end gap-[2px] overflow-hidden rounded-[2px] p-7"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(min-width: 1024px) 324px, 50vw"
                  className="zoom-img object-cover group-hover/city:scale-[1.03]"
                  style={{ objectPosition: city.position }}
                />
                <span className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_42%,rgba(0,0,0,0.9)_84%)]" />
                <span className="t-24 relative text-white">{city.name}</span>
                <span className="t-16 relative max-w-[241px] text-white/85">{city.text}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
