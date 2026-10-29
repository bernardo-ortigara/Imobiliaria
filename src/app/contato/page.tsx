import type { Metadata } from "next";
import { ContactHero } from "@/components/pages/contato/contact-hero";
import { Agents } from "@/components/sections/agents";
import { ImageBand } from "@/components/sections/services";
import { contato } from "@/lib/content/contato";

export const metadata: Metadata = {
  title: contato.metaTitle,
  description: contato.metaDescription,
};

export default function ContatoPage() {
  return (
    <main>
      <ContactHero />
      <ImageBand />
      <Agents allLabel={contato.agents.all} />
    </main>
  );
}
