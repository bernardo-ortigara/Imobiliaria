import { AgentCard } from "@/components/cards";
import { Reveal } from "@/components/motion";
import { ArrowButton, GridLines, SectionLabel } from "@/components/ui";
import { agents } from "@/lib/content";
import { agents as agentList } from "@/lib/data/agents";
import { routes } from "@/lib/routes";

/** `allLabel` adds the right-aligned "Todos os corretores" button used on /sobre and /contato. */
export function Agents({ allLabel }: { allLabel?: string }) {
  return (
    <section id="corretores" className="relative overflow-hidden bg-white px-wrap">
      <GridLines />
      <div className={`relative flex flex-col gap-10 pb-[120px] pt-[100px] ${allLabel ? "items-end" : "items-center"}`}>
        <div className="flex w-full flex-col items-center gap-3">
          <Reveal className="w-full">
            <SectionLabel>{agents.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="t-58 text-center text-ink">{agents.title}</h2>
          </Reveal>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {agentList.slice(0, 3).map((agent) => (
            <Reveal key={agent.slug}>
              <AgentCard agent={agent} cta={agents.cta} />
            </Reveal>
          ))}
        </div>
        {allLabel && (
          <ArrowButton href={routes.agents} tone="alt">
            {allLabel}
          </ArrowButton>
        )}
      </div>
    </section>
  );
}
