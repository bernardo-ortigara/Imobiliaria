import type { Metadata } from "next";
import { AgentsHero } from "@/components/pages/corretores/agents-hero";
import { corretores } from "@/lib/content/corretores";

export const metadata: Metadata = corretores.meta;

export default function CorretoresPage() {
  return (
    <main>
      <AgentsHero />
    </main>
  );
}
