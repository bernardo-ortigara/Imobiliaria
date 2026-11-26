import Image from "next/image";
import Link from "next/link";
import { AreaIcon, BathIcon, BedIcon, CarIcon } from "@/components/icons";
import { ArrowButton } from "@/components/ui";
import { featuredLabel, priceOnRequest, statusLabel, type Listing } from "@/lib/data/listings";
import { routes } from "@/lib/routes";

function Chips({ item }: { item: Listing }) {
  const chips = [item.featured ? featuredLabel : null, statusLabel[item.status], item.type].filter((c): c is string => Boolean(c));
  return (
    <span className="absolute left-3 top-3 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip}
          className={`t-13 rounded-[24px] px-3 py-[6px] ${
            chip === featuredLabel ? "bg-ink text-white" : "bg-chip text-ink shadow-[inset_0_0_0_1px_rgb(231,231,233)]"
          }`}
        >
          {chip}
        </span>
      ))}
    </span>
  );
}

function Specs({ item }: { item: Listing }) {
  return (
    <div className="flex flex-wrap items-center gap-5 text-black/62">
      {(
        [
          [AreaIcon, item.area],
          [BedIcon, item.beds],
          [BathIcon, item.baths],
          [CarIcon, item.parking],
        ] as const
      )
        .filter((spec): spec is [typeof AreaIcon, string] => Boolean(spec[1]))
        .map(([Icon, label]) => (
          <span key={label} className="flex items-center gap-2">
            <Icon className="size-5 text-[#73737d]" />
            <span className="t-15">{label}</span>
          </span>
        ))}
    </div>
  );
}

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
        <Chips item={item} />
      </Link>
      <div className="flex flex-col gap-[6px] px-[6px]">
        <div className="flex items-start justify-center gap-5">
          <div className="flex min-w-0 flex-1 flex-col gap-px">
            <Link href={href} className="t-17 text-ink-soft">
              {item.title}
            </Link>
            <p className="t-15 text-black/62">{item.address}</p>
          </div>
          <p className="t-17 shrink-0 text-black/70">{item.price ?? priceOnRequest}</p>
        </div>
        <Specs item={item} />
      </div>
    </article>
  );
}

export function FeaturedListingCard({ item, text, cta }: { item: Listing; text?: string; cta: string }) {
  const href = routes.listing(item.slug);
  return (
    <article className="grid w-full grid-cols-1 items-center gap-x-6 gap-y-8 lg:grid-cols-3">
      <Link href={href} className="group/card relative block aspect-[4/3] overflow-hidden rounded-[2px] md:aspect-[16/10] lg:col-span-2">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="zoom-img object-cover group-hover/card:scale-[1.02]"
        />
        <Chips item={item} />
      </Link>
      <div className="flex flex-col items-start gap-6 px-[6px] lg:pl-5">
        <div className="flex flex-col gap-2">
          <p className="t-15 text-black/62">{item.address}</p>
          <Link href={href} className="t-42 text-ink">
            {item.title}
          </Link>
          <p className="t-24 text-ink">{item.price ?? priceOnRequest}</p>
        </div>
        {text && <p className="t-18 text-black/70">{text}</p>}
        <Specs item={item} />
        <ArrowButton href={href} tone="alt">
          {cta}
        </ArrowButton>
      </div>
    </article>
  );
}
