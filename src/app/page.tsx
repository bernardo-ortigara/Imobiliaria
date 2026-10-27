import { About } from "@/components/sections/about";
import { Agents } from "@/components/sections/agents";
import { Blog } from "@/components/sections/blog";
import { Cities } from "@/components/sections/cities";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Listings } from "@/components/sections/listings";
import { ImageBand, Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Listings />
        <Cities />
        <WhyUs />
        <Services />
        <ImageBand />
        <Agents />
        <Testimonials />
        <Blog />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
