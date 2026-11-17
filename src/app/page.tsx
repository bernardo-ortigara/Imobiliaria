import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Agents } from "@/components/sections/agents";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Listings } from "@/components/sections/listings";
import { ImageBand, Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Listings />
      <WhyUs />
      <Services />
      <ImageBand />
      <Agents />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
}
