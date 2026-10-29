import Image from "next/image";
import { Reveal } from "@/components/motion";
import { GridLines, SectionLabel } from "@/components/ui";
import { sobre } from "@/lib/content/sobre";

const { mission } = sobre;

/** "Our mission" block of the original /about: heading row + three numbered cards. */
export function Mission() {
  return (
    <section className="relative overflow-hidden bg-white px-wrap pb-[120px] pt-[140px]">
      <GridLines />
      <div className="relative flex flex-col gap-14">
        <div className="flex flex-col gap-[60px] lg:flex-row">
          <Reveal className="lg:w-[480px] lg:shrink-0">
            <SectionLabel lines="after" lineClassName="bg-line">
              {mission.label}
            </SectionLabel>
          </Reveal>
          <div className="flex flex-col gap-2 lg:w-[816px]">
            <Reveal>
              <h2 className="t-58 text-ink">{mission.title}</h2>
            </Reveal>
            <Reveal>
              <p className="t-19 max-w-[650px] text-black/62">{mission.text}</p>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {mission.cards.map((card, i) => (
            <Reveal key={card.step} delay={i * 0.12} amount={0}>
              <div className="relative flex h-full min-h-[394px] flex-col justify-between gap-[72px] overflow-hidden rounded-[2px] bg-mist p-6">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-5"
                  style={{ backgroundImage: `url(${mission.pattern})`, backgroundSize: "20px" }}
                />
                <div className="relative flex items-start justify-between">
                  <p className="t-24 text-black/62">{card.step}</p>
                  <div className="relative h-[150px] w-[160px] overflow-hidden rounded-[2px]">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover"
                      style={{ objectPosition: card.position }}
                    />
                  </div>
                </div>
                <div className="relative flex flex-col gap-2">
                  <h3 className="t-24 text-ink">{card.title}</h3>
                  <p className="t-16 max-w-[340px] text-ink">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
