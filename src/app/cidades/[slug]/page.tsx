import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityListings } from "@/components/pages/cidade/city-listings";
import { Cta } from "@/components/sections/cta";
import { cidade } from "@/lib/content/cidade";
import { cities, getCity } from "@/lib/data/cities";
import { listingsByCity } from "@/lib/data/listings";
import { routes } from "@/lib/routes";
import { ogImage, openGraphBase } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const url = routes.city(city.slug);
  return {
    title: cidade.metaTitle(city.name),
    description: cidade.intro[city.slug],
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url, images: [{ url: ogImage(city.image), alt: city.name }] },
  };
}

export default async function CidadePage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <main>
      <CityListings
        label={cidade.label}
        titlePrefix={cidade.titlePrefix}
        name={city.name}
        intro={cidade.intro[city.slug]}
        items={listingsByCity(city.slug)}
      />
      <Cta />
    </main>
  );
}
