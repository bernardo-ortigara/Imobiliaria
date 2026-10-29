"use client";

import { motion } from "motion/react";
import { GridLines } from "@/components/ui";
import { agents } from "@/lib/data/agents";
import { corretores } from "@/lib/content/corretores";
import { AgentCard } from "./agent-card";
import { appear } from "./appear";

/** /corretores: title block + grid with every agent. Everything animates on load (Framer "appear"). */
export function AgentsHero() {
  return (
    <section className="relative overflow-hidden bg-white px-wrap">
      <GridLines />
      <div className="relative flex flex-col items-center gap-[100px] pb-[140px] pt-20">
        <div className="flex w-full flex-col items-center gap-4 overflow-clip pt-[120px]">
          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex h-[22px] w-full items-center gap-4">
              <motion.span {...appear(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
              <motion.span {...appear(0.3, 150, 0.9)} className="flex shrink-0 items-center gap-[10px]">
                <span className="size-[7px] rounded-[5px] bg-purple" />
                <span className="t-16 text-black/62">{corretores.label}</span>
              </motion.span>
              <motion.span {...appear(0.3, 0, 0.9)} className="h-px flex-1 bg-line-soft" />
            </div>
            <motion.h1
              {...appear(0.3, 150, 0.9)}
              className="t-82 max-w-[560px] text-center text-ink"
            >
              {corretores.title}
            </motion.h1>
          </div>
          <motion.p {...appear(0.5, 120, 0.8)} className="t-19 h-[51px] max-w-[450px] overflow-hidden text-center text-black/70">
            {corretores.text}
          </motion.p>
        </div>

        <div className="grid w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <motion.div key={agent.slug} {...appear(0.8, 120, 0.8)}>
              <AgentCard agent={agent} cta={corretores.cta} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
