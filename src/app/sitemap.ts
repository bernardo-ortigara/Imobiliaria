import type { MetadataRoute } from "next";
import { broker } from "@/lib/data/agents";
import { cities } from "@/lib/data/cities";
import { listings } from "@/lib/data/listings";
import { routes } from "@/lib/routes";
import { siteUrl } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

const entry = (path: string, priority: number, changeFrequency: Entry["changeFrequency"]): Entry => ({
  url: `${siteUrl}${path === "/" ? "" : path}`,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry(routes.home, 1, "weekly"),
    entry(routes.listings, 0.9, "daily"),
    ...listings.map((l) => entry(routes.listing(l.slug), 0.8, "weekly")),
    ...cities.map((c) => entry(routes.city(c.slug), 0.6, "weekly")),
    entry(routes.agent(broker.slug), 0.6, "monthly"),
    entry(routes.about, 0.5, "monthly"),
    entry(routes.contact, 0.5, "yearly"),
  ];
}
