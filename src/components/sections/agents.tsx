import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowButton, GridLines, SectionLabel } from "@/components/ui";
import { agents } from "@/lib/content";
import { profiles } from "@/lib/content/corretor";
import { broker } from "@/lib/data/agents";
import { routes } from "@/lib/routes";

/** "Seu corretor": the agency has a single broker, shown as photo + short bio + link to his profile. */
export function Agents() {
  const href = routes.agent(broker.slug);
  return (
    <section id="corretor" className="relative overflow-hidden bg-white px-wrap">
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
        <div className="grid w-full grid-cols-1 items-center gap-x-5 gap-y-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Link href={href} className="relative block aspect-[4/3] overflow-hidden rounded-[2px] md:aspect-[16/10]">
              <Image
                src={broker.image}
                alt={broker.name}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="zoom-img object-cover object-[50%_25%] hover:scale-[1.02]"
              />
            </Link>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-start gap-6 lg:pl-5">
              <div className="flex flex-col gap-1">
                <p className="t-42 text-ink">{broker.name}</p>
                <p className="t-19 text-black/62">{broker.role}</p>
                <p className="t-15 text-black/70">{broker.cities}</p>
              </div>
              <p className="t-18 text-black/70">{profiles[broker.slug].about[0]}</p>
              <ArrowButton href={href} tone="alt">
                {agents.cta}
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
