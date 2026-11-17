import type { AgentSlug } from "./agents";
import type { CitySlug } from "./cities";
import { img } from "./img";

export type ListingStatus = "sale" | "rent";

export type Listing = {
  slug: string;
  status: ListingStatus;
  city: CitySlug;
  agent: AgentSlug;
  title: string;
  address: string;
  price?: string;
  area?: string;
  beds?: string;
  baths?: string;
  parking?: string;
  type: string;
  image: string;
};

export const statusLabel: Record<ListingStatus, string> = {
  sale: "À venda",
  rent: "Para alugar",
};

export const priceOnRequest = "Sob consulta";

export const listings: Listing[] = [
  {
    slug: "cobertura-duplex-madureira",
    status: "sale",
    city: "caxias-do-sul",
    agent: "horacio-santini",
    title: "Cobertura Duplex",
    address: "Madureira, Caxias do Sul - RS",
    price: "R$ 540.000",
    area: "145,35 m²",
    beds: "3 Quartos",
    parking: "2 Vagas",
    type: "Cobertura",
    image: img("cobertura-duplex-madureira.webp"),
  },
  {
    slug: "apartamento-via-condotti",
    status: "sale",
    city: "caxias-do-sul",
    agent: "horacio-santini",
    title: "Apartamento Via Condotti",
    address: "Caxias do Sul - RS",
    area: "126 m²",
    beds: "2 Quartos",
    parking: "2 Vagas",
    type: "Apartamento",
    image: img("apartamento-via-condotti.webp"),
  },
  {
    slug: "apartamento-boulevard-egeo",
    status: "sale",
    city: "caxias-do-sul",
    agent: "horacio-santini",
    title: "Apartamento Edifício Boulevard Egeo",
    address: "Caxias do Sul - RS",
    beds: "3 Quartos",
    parking: "2 Vagas",
    type: "Apartamento",
    image: img("apartamento-boulevard-egeo.webp"),
  },
];

export const saleListings = listings.filter((l) => l.status === "sale");
export const rentListings = listings.filter((l) => l.status === "rent");

export const getListing = (slug: string) => listings.find((l) => l.slug === slug);
export const listingsByCity = (city: string) => listings.filter((l) => l.city === city);
export const listingsByAgent = (agent: string) => listings.filter((l) => l.agent === agent);
