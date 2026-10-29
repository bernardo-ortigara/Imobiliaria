import Image from "next/image";
import Link from "next/link";
import { AreaIcon, BathIcon, BedIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { RollButton } from "@/components/ui";
import type { Agent } from "@/lib/data/agents";
import { statusLabel, type Listing } from "@/lib/data/listings";
import type { Post } from "@/lib/data/posts";
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

/** Agent card (photo, name + socials, role, cities, "Saiba mais"). */
export function AgentCard({ agent, cta = "Saiba mais" }: { agent: Agent; cta?: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Link href={routes.agent(agent.slug)} className="relative block aspect-[439/372] overflow-hidden rounded-[2px]">
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

/** Blog post card. Hover: image zoom 1.05. */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={routes.post(post.slug)} className="group/post flex flex-col gap-5">
      <div className="relative aspect-[436/363] overflow-hidden rounded-[2px]">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 768px) 436px, 100vw"
          className="zoom-img object-cover object-right group-hover/post:scale-[1.05]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-[10px]">
          <span className="t-15 rounded-[1px] bg-mist px-3 py-[7px] text-ink">{post.tag}</span>
          <span className="size-[5px] rounded-full bg-purple" />
          <span className="t-15 text-black/70">{post.date}</span>
        </div>
        <h3 className="t-26 text-ink">{post.title}</h3>
      </div>
    </Link>
  );
}
