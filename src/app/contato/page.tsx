import type { Metadata } from "next";
import { ContactHero } from "@/components/pages/contato/contact-hero";
import { Agents } from "@/components/sections/agents";
import { ImageBand } from "@/components/sections/services";
import { contato } from "@/lib/content/contato";
import { routes } from "@/lib/routes";
import { openGraphBase } from "@/lib/site";

export const metadata: Metadata = {
  title: contato.metaTitle,
  description: contato.metaDescription,
  alternates: { canonical: routes.contact },
  openGraph: { ...openGraphBase, url: routes.contact },
};

export default function ContatoPage() {
  return (
    <main>
      <ContactHero />
      <ImageBand />
      <Agents />
    </main>
  );
}
