import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImovelContent } from "@/components/pages/imovel/imovel-content";
import { ImovelHero } from "@/components/pages/imovel/imovel-hero";
import { RelatedListings } from "@/components/pages/imovel/related-listings";
import { getImovelDetail, imovel } from "@/lib/content/imovel";
import { getAgent } from "@/lib/data/agents";
import { getListing, listings } from "@/lib/data/listings";

type Props = { params: Promise<{ slug: string }> };

// All slugs are known (generateStaticParams), so blocking on params is fine; this
// clears the partial-prefetching "URL data outside of Suspense" insight.
export const instant = false;

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);
  const detail = getImovelDetail(slug);
  if (!listing || !detail) return {};
  return { title: imovel.metaTitle(listing.title), description: detail.description };
}

export default async function ImovelPage({ params }: Props) {
  const { slug } = await params;
  const listing = getListing(slug);
  const detail = getImovelDetail(slug);
  const agent = listing && getAgent(listing.agent);
  if (!listing || !detail || !agent) notFound();

  // Original rule: the first 3 listings in CMS order, skipping the current one.
  const related = listings.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <main>
      <ImovelHero
        title={listing.title}
        images={[listing.image, ...detail.hero]}
        count={detail.gallery.length}
        showAll={imovel.showAll}
      />
      <ImovelContent listing={listing} detail={detail} agent={agent} />
      <RelatedListings label={imovel.related.label} title={imovel.related.title} items={related} />
    </main>
  );
}
