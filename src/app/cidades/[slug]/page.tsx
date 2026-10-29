import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityListings } from "@/components/pages/cidade/city-listings";
import { Cta } from "@/components/sections/cta";
import { cidade } from "@/lib/content/cidade";
import { cities, getCity } from "@/lib/data/cities";
import { listingsByCity } from "@/lib/data/listings";

type Props = { params: Promise<{ slug: string }> };

// All slugs are known (generateStaticParams), so blocking on params is fine; this
// clears the partial-prefetching "URL data outside of Suspense" insight.
export const instant = false;

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return { title: cidade.metaTitle(city.name), description: cidade.intro[city.slug] };
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
