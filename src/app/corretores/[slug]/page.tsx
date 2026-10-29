import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AgentListings } from "@/components/pages/corretores/agent-listings";
import { AgentProfile } from "@/components/pages/corretores/agent-profile";
import { agents, getAgent } from "@/lib/data/agents";
import { listingsByAgent } from "@/lib/data/listings";
import { corretor, profiles } from "@/lib/content/corretor";

type Props = { params: Promise<{ slug: string }> };

// All slugs are known (generateStaticParams), so blocking on params is fine; this
// clears the partial-prefetching "URL data outside of Suspense" insight.
export const instant = false;

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const agent = getAgent((await params).slug);
  if (!agent) return {};
  return {
    title: `${agent.name} | Luxterra`,
    description: profiles[agent.slug].bio,
  };
}

export default async function CorretorPage({ params }: Props) {
  const agent = getAgent((await params).slug);
  if (!agent) notFound();

  return (
    <main>
      <AgentProfile agent={agent} profile={profiles[agent.slug]} />
      <AgentListings title={corretor.listingsTitle(agent.name)} items={listingsByAgent(agent.slug)} />
    </main>
  );
}
