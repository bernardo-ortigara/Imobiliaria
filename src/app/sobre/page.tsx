import type { Metadata } from "next";
import { SobreHero } from "@/components/pages/sobre/hero";
import { Mission } from "@/components/pages/sobre/mission";
import { SobreWhyUs } from "@/components/pages/sobre/why-us";
import { Agents } from "@/components/sections/agents";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { ImageBand } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { sobre } from "@/lib/content/sobre";
import { routes } from "@/lib/routes";
import { openGraphBase } from "@/lib/site";

export const metadata: Metadata = {
  title: sobre.metaTitle,
  description: sobre.metaDescription,
  alternates: { canonical: routes.about },
  openGraph: { ...openGraphBase, url: routes.about },
};

export default function SobrePage() {
  return (
    <main>
      <SobreHero />
      <Mission />
      <Stats />
      <SobreWhyUs />
      <ImageBand />
      <Agents />
      <Faq />
      <Cta />
    </main>
  );
}
