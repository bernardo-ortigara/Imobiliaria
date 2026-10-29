import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, TwitterIcon } from "@/components/icons";
import { RollButton } from "@/components/ui";
import type { Agent } from "@/lib/data/agents";
import { routes } from "@/lib/routes";

/**
 * /corretores variant of the shared AgentCard: on this page the photo is 439x342 (372 on Home/Sobre)
 * and the "Saiba mais" button is 150x35 with an inner 1px rgba(0,0,0,0.3) border.
 */
export function AgentCard({ agent, cta }: { agent: Agent; cta: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Link href={routes.agent(agent.slug)} className="relative block aspect-[439/342] overflow-hidden rounded-[2px]">
        <Image src={agent.image} alt={agent.name} fill sizes="(min-width: 1024px) 439px, 100vw" className="object-cover object-top" />
      </Link>
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-col gap-px pb-[6px]">
          <div className="flex items-center gap-[10px]">
            <p className="t-19 flex-1 text-ink">{agent.name}</p>
            <div className="flex items-center gap-[10px] text-black/70">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-opacity duration-300 hover:opacity-80">
                <LinkedinIcon className="size-[25px]" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-opacity duration-300 hover:opacity-80">
                <TwitterIcon className="size-[25px]" />
              </a>
            </div>
          </div>
          <p className="t-15 text-black/70">{agent.role}</p>
          <p className="t-15 text-black/70">{agent.cities}</p>
        </div>
        <RollButton href={routes.agent(agent.slug)} className="h-[35px] w-[150px] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.3)]">
          {cta}
        </RollButton>
      </div>
    </div>
  );
}
