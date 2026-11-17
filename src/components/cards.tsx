import Image from "next/image";
import Link from "next/link";
import { AreaIcon, BathIcon, BedIcon } from "@/components/icons";
import { statusLabel, type Listing } from "@/lib/data/listings";
import { routes } from "@/lib/routes";

/** Listing card (image + chips, title/address/price, area/beds/baths). Hover: image zoom 1.02. */
export function ListingCard({ item }: { item: Listing }) {
  const href = routes.listing(item.slug);
  return (
    <article className="flex flex-col gap-[18px]">
      <Link href={href} className="group/card relative block aspect-[436/313] overflow-hidden rounded-[2px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 436px, 100vw"
          className="zoom-img object-cover group-hover/card:scale-[1.02]"
        />
        <span className="absolute left-3 top-3 flex gap-2">
          {[statusLabel[item.status], item.type].map((chip) => (
            <span key={chip} className="t-13 rounded-[24px] bg-chip px-3 py-[6px] text-ink shadow-[inset_0_0_0_1px_rgb(231,231,233)]">
              {chip}
            </span>
          ))}
        </span>
      </Link>
      <div className="flex flex-col gap-[6px] px-[6px]">
        <div className="flex items-start justify-center gap-5">
          <div className="flex min-w-0 flex-1 flex-col gap-px">
            <Link href={href} className="t-17 text-ink-soft">
              {item.title}
            </Link>
            <p className="t-15 text-black/62">{item.address}</p>
          </div>
          <p className="t-17 shrink-0 text-black/70">{item.price}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-black/62">
          {[
            [AreaIcon, item.area],
            [BedIcon, item.beds],
            [BathIcon, item.baths],
          ].map(([Icon, label]) => {
            const I = Icon as typeof AreaIcon;
            return (
              <span key={label as string} className="flex items-center gap-2">
                <I className="size-5 text-[#73737d]" />
                <span className="t-15">{label as string}</span>
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}
