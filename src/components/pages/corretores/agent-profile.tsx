"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowCtaIcon } from "@/components/icons";
import { GridLines, TextRoll } from "@/components/ui";
import type { Agent } from "@/lib/data/agents";
import { corretor, type AgentProfile as Profile } from "@/lib/content/corretor";
import { routes } from "@/lib/routes";
import { appear } from "./appear";
import { EnvelopeIcon, InfoIcon, LinkedinLogoIcon, MapPinIcon, PhoneIcon, XLogoIcon } from "./icons";

const EASE_BTN = "ease-[cubic-bezier(0.22,1,0.36,1)]";

/** /corretores/[slug] hero: name card with round photo, socials, contact card and bio. */
export function AgentProfile({ agent, profile }: { agent: Agent; profile: Profile }) {
  return (
    <section className="relative overflow-hidden bg-white px-wrap pb-[110px] pt-20">
      <GridLines right="bg-transparent" />
      <div className="relative flex flex-col gap-12">
        <motion.div {...appear(0.3, 150, 0.9)} className="flex flex-col items-end gap-3 pb-[18px]">
          <div className="relative flex w-full flex-col items-center justify-center gap-[6px] rounded-[2px] bg-white px-6 py-[120px] shadow-[inset_0_0_0_1px_#f5f5f5]">
            <h1 className="t-42 text-center text-ink">{agent.name}</h1>
            <p className="t-19 text-black/62">{agent.role}</p>
            <div className="absolute left-10 top-[198px] size-[180px] overflow-hidden rounded-full">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                sizes="180px"
                className="object-cover object-[52.6%_30.1%]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SocialLink href={corretor.linkedin} label="LinkedIn">
              <LinkedinLogoIcon className="size-6" />
            </SocialLink>
            <SocialLink href={corretor.x} label="X">
              <XLogoIcon className="size-6" />
            </SocialLink>
          </div>
        </motion.div>

        <motion.div {...appear(0.5, 150, 0.9)} className="grid grid-cols-1 gap-x-[60px] gap-y-10 lg:grid-cols-3">
          <div className="sticky top-[100px] flex flex-col items-start justify-center gap-6 self-start rounded-[2px] bg-white p-6 shadow-[inset_0_0_0_1px_#f5f5f5]">
            <h2 className="t-24 text-ink">{corretor.contactTitle}</h2>
            <ul className="flex w-full flex-col gap-[18px]">
              <ContactRow icon={InfoIcon}>{profile.bio}</ContactRow>
              <ContactRow icon={MapPinIcon}>{agent.cities}</ContactRow>
              <ContactRow icon={PhoneIcon}>
                <a href={`tel:${profile.phone}`} className="transition-colors duration-300 hover:text-black/46">
                  {profile.phone}
                </a>
              </ContactRow>
              <ContactRow icon={EnvelopeIcon}>
                <a href={`mailto:${profile.email}`} className="transition-colors duration-300 hover:text-black/46">
                  {profile.email}
                </a>
              </ContactRow>
            </ul>
            <ContactButton />
          </div>

          <div className="flex flex-col gap-[42px] lg:col-span-2">
            <TextBlock title={corretor.aboutTitle} paragraphs={profile.about} />
            <TextBlock title={corretor.experienceTitle} paragraphs={profile.experience} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex size-8 items-center justify-center overflow-hidden rounded-[8px] text-ink transition-colors duration-300 hover:text-[#333]"
    >
      {children}
    </a>
  );
}

function ContactRow({ icon: Icon, children }: { icon: ComponentType<SVGProps<SVGSVGElement>>; children: ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <Icon className="size-5 shrink-0 text-ink" />
      <p className="t-18 min-w-0 flex-1 text-black/70">{children}</p>
    </li>
  );
}

function TextBlock({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-[14px]">
      <h2 className="t-24 text-ink">{title}</h2>
      <div className="flex flex-col gap-5">
        {paragraphs.map((p) => (
          <p key={p} className="t-18 text-black/70">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

/** Dark "Fale conosco" button: the white square behind the arrow grows to fill it on hover and the label rolls to dark. */
function ContactButton() {
  return (
    <Link
      href={routes.contact}
      className="group relative flex h-[50px] items-center gap-4 overflow-hidden rounded-[2px] bg-ink py-[5px] pl-[6px] pr-[26px] shadow-[inset_0_0_4px_rgba(0,0,0,0.05)]"
    >
      <span
        className={`absolute bottom-[3px] left-1 top-[3px] w-[44px] rounded-[2px] bg-white transition-[width] duration-500 group-hover:w-[calc(100%-9px)] ${EASE_BTN}`}
      />
      <span className="relative flex size-10 items-center rounded-[35px] p-[11px]">
        <span className="block size-[18px] overflow-hidden">
          <span className={`flex gap-[10px] transition-transform duration-500 group-hover:-translate-x-[28px] ${EASE_BTN}`}>
            <ArrowCtaIcon className="size-[18px] shrink-0 text-ink" />
            <ArrowCtaIcon className="size-[18px] shrink-0 text-ink" />
          </span>
        </span>
      </span>
      <span className="relative">
        <TextRoll text={corretor.contactCta} className="t-18 text-white" secondClassName="t-18 text-ink" />
      </span>
    </Link>
  );
}
