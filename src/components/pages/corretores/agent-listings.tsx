import { ListingCard } from "@/components/cards";
import { Reveal } from "@/components/motion";
import type { Listing } from "@/lib/data/listings";

/** "<name>'s listings": every listing of the agent (no pagination on the original), fading in on scroll. */
export function AgentListings({ title, items }: { title: string; items: Listing[] }) {
  if (items.length === 0) return null;
  return (
    <section className="bg-white px-wrap pb-[130px]">
      <div className="flex flex-col gap-[60px] pt-[60px] shadow-[inset_0_1px_0_#ededed]">
        <Reveal>
          <h2 className="t-42 text-center text-ink">{title}</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.slug}>
              <ListingCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
