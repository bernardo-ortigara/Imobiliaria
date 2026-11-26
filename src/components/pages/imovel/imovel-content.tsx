"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Transition } from "motion/react";
import { useState, type FormEvent, type ReactNode } from "react";
import { AreaIcon, BathIcon, BedIcon, CarIcon } from "@/components/icons";
import { EASE_HERO, EASE_SLIDE } from "@/components/motion";
import type { Agent } from "@/lib/data/agents";
import { priceOnRequest, type Listing } from "@/lib/data/listings";
import { routes } from "@/lib/routes";
import { openWhatsApp, siteUrl } from "@/lib/site";
import { imovel, type ImovelDetail } from "@/lib/content/imovel";
import { CaretDownIcon, LocationPinIcon, StarIcon } from "./icons";
import { Lightbox } from "./lightbox";

const appear = (delay: number) => ({
  initial: { opacity: 0, scale: 0.9, y: 120 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 1, ease: EASE_HERO, delay } satisfies Transition,
});

const T28 = "text-[28px] leading-[34.16px] tracking-[-1.12px] text-ink [font-variation-settings:'opsz'_14,'wght'_420]";
const T14 = "text-[14px] leading-[15px] tracking-[-0.14px] text-ink [font-variation-settings:'opsz'_14,'wght'_440]";

const firstWord = (s: string) => s.split(" ")[0];

type Props = { listing: Listing; detail: ImovelDetail; agent: Agent };

export function ImovelContent({ listing, detail, agent }: Props) {
  const specs: [string, string | undefined, typeof AreaIcon][] = [
    [imovel.details.area, listing.area, AreaIcon],
    [imovel.details.beds, listing.beds, BedIcon],
    [imovel.details.baths, listing.baths, BathIcon],
    [imovel.details.parking, listing.parking, CarIcon],
  ];
  const stats: [string, string, typeof AreaIcon | null][] = [
    ...specs.flatMap(([label, value, Icon]) => (value ? [[label, firstWord(value), Icon] as [string, string, typeof AreaIcon]] : [])),
    [imovel.details.type, listing.type, null],
  ];
  const photos = [listing.image, ...detail.photos];
  const [zoomed, setZoomed] = useState<number | null>(null);

  return (
    <section className="bg-white px-8 pb-[120px] pt-[90px]">
      <div className="mx-auto flex max-w-[1170px] flex-col items-start gap-20 lg:flex-row">
        <motion.div {...appear(0.9)} className="flex w-full min-w-0 flex-col gap-10 lg:flex-1">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-8">
              <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
                <p className="flex items-center gap-[10px]">
                  <LocationPinIcon className="size-[18px] shrink-0 text-black/70" />
                  <span className="t-16 text-black/62">{listing.address}</span>
                </p>
                <h1 className={T28}>{listing.title}</h1>
              </div>
              <div className="flex shrink-0 flex-col gap-[6px]">
                <p className="t-16 text-black/62">{imovel.priceLabel}</p>
                <p className={T28}>{listing.price ?? priceOnRequest}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-5 py-4 shadow-[inset_0_1px_0_var(--color-line),inset_0_-1px_0_var(--color-line)]">
              {stats.map(([label, value, Icon]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="t-15 text-black/62">{label}</span>
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="size-[17px] text-ink" />}
                    <span className="t-15 text-ink">{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="t-19 text-ink">{imovel.description}</h2>
            <p className="t-18 text-black/70">{detail.description}</p>
          </div>

          <div className="flex flex-col">
            <AccordionItem title={imovel.accordion.details}>
              <Bullets items={detail.details} />
            </AccordionItem>
            {detail.location && (
              <AccordionItem title={imovel.accordion.location}>
                <p className="t-18 text-black/70">{detail.location}</p>
              </AccordionItem>
            )}
            {detail.features && (
              <AccordionItem title={imovel.accordion.features}>
                <Bullets items={detail.features} />
              </AccordionItem>
            )}
          </div>

          {photos.length > 1 && (
            <div id="images" className="flex flex-col gap-7 pb-[50px] pt-5 shadow-[inset_0_-1px_0_var(--color-line-soft)]">
              <h2 className={T28}>{imovel.gallery}</h2>
              <div className="grid grid-cols-2 gap-4">
                {photos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setZoomed(i)}
                    aria-label={`${imovel.lightbox.open} ${i + 1}`}
                    className="group/photo relative aspect-[332/214] cursor-zoom-in overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 333px, 50vw"
                      className="zoom-img object-cover group-hover/photo:scale-[1.02]"
                    />
                  </button>
                ))}
              </div>
              <Lightbox images={photos} index={zoomed} alt={listing.title} labels={imovel.lightbox} onChange={setZoomed} />
            </div>
          )}

          {detail.mapQuery && (
            <div className="flex flex-col gap-7">
              <h2 className={T28}>{imovel.map}</h2>
              <div className="h-[400px] overflow-hidden rounded-[2px]">
                <iframe
                  title={`${imovel.map}: ${listing.address}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(detail.mapQuery)}&z=15&output=embed`}
                  className="size-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </motion.div>

        <motion.aside {...appear(1)} className="w-full lg:sticky lg:top-10 lg:w-[410px] lg:shrink-0">
          <ContactCard agent={agent} listing={listing} />
        </motion.aside>
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-[22.76px]">
      {items.map((item) => (
        <li key={item} className="t-18 text-black/70 marker:text-black/70">
          {item}
        </li>
      ))}
    </ul>
  );
}

function AccordionItem({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line-soft py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center gap-[10px] text-left"
      >
        <span className="t-19 flex-1 text-ink">{title}</span>
        <CaretDownIcon className={`size-6 shrink-0 text-ink ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_SLIDE }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactCard({ agent, listing }: { agent: Agent; listing: Listing }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    openWhatsApp(
      imovel.form.whatsappMessage({
        title: listing.title,
        url: `${siteUrl}${routes.listing(listing.slug)}`,
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      }),
    );
    e.currentTarget.reset();
    setSent(true);
  };
  const field = "w-full rounded-[2px] bg-white px-[14px] text-[15px] leading-[16.5px] tracking-[-0.3px] text-black outline-none placeholder:text-black/46";

  return (
    <div className="flex flex-col gap-10 rounded-[2px] bg-mist px-[22px] py-7 shadow-[0_1px_1px_0_rgba(14,14,14,0.04),0_4px_4px_0_rgba(211,211,211,0.06)]">
      <Link href={routes.agent(agent.slug)} className="flex items-center gap-5">
        <span className="relative size-[60px] shrink-0 overflow-hidden rounded-full">
          <Image
            src={agent.avatar}
            alt={agent.name}
            fill
            sizes="60px"
            className="object-cover"
          />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="t-19 text-ink">{agent.name}</span>
          <span className="flex items-center gap-2">
            <span className="flex gap-[2px] text-ink">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} className="size-[15px]" />
              ))}
            </span>
            <span className="t-16 text-black/62">{imovel.rating}</span>
          </span>
        </span>
      </Link>

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <span className={T14}>{imovel.form.name}</span>
          <input name="name" type="text" required placeholder={imovel.form.namePlaceholder} className={`${field} h-[42px]`} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={T14}>{imovel.form.email}</span>
          <input name="email" type="email" required placeholder={imovel.form.emailPlaceholder} className={`${field} h-[42px]`} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={T14}>{imovel.form.message}</span>
          <textarea name="message" placeholder={imovel.form.messagePlaceholder} className={`${field} h-[100px] resize-y py-[10px]`} />
        </label>
        <button
          type="submit"
          className="t-15 h-10 cursor-pointer rounded-[2px] bg-ink px-[34px] text-white transition-colors duration-200 hover:bg-black/70"
        >
          {sent ? imovel.form.sent : imovel.form.submit}
        </button>
      </form>
    </div>
  );
}
