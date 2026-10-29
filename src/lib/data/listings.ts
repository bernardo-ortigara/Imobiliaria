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
  price: string;
  area: string;
  beds: string;
  baths: string;
  type: string;
  image: string;
};

export const statusLabel: Record<ListingStatus, string> = {
  sale: "À venda",
  rent: "Para alugar",
};

// Order matches the original CMS. Agent per listing taken from each /listings/<slug> page.
export const listings: Listing[] = [
  { slug: "coastal-modern-residence", status: "sale", city: "tampa", agent: "emily-carter", title: "Residência Moderna no Litoral", address: "Bayshore Gardens, Tampa, FL", price: "$749,000", area: "63 m²", beds: "3 Quartos", baths: "2,5 Banheiros", type: "Apartamento", image: img("7qddMcFEDswacgycG4I3MRkL56o.webp") },
  { slug: "riverside-family-home", status: "sale", city: "tampa", agent: "emily-carter", title: "Casa de Família à Beira-Rio", address: "Seminole Heights, Tampa, FL", price: "$629,500", area: "124 m²", beds: "4 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("vS2CA5Cg9J9whGTYIJAYs6DfPs.webp") },
  { slug: "contemporary-urban-retreat", status: "sale", city: "tampa", agent: "emily-carter", title: "Refúgio Urbano Contemporâneo", address: "Hyde Park, Tampa, FL", price: "$835,000", area: "49 m²", beds: "3 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("NCe5u2vNkJTDq99aE4z9j4nnomw.webp") },
  { slug: "lakeside-craftsman-home", status: "sale", city: "tampa", agent: "olivia-grant", title: "Casa Artesanal à Beira do Lago", address: "Carrollwood, Tampa, FL", price: "$712,000", area: "22 m²", beds: "4 Quartos", baths: "2,5 Banheiros", type: "Sobrado", image: img("w5FoqrGf2ajYCpdOTgI4Rm4s1s.webp") },
  { slug: "luxury-bayfront-condo", status: "sale", city: "miami", agent: "marcus-rivera", title: "Condomínio de Luxo na Baía", address: "Brickell, Miami, FL", price: "$930,000", area: "55 m²", beds: "2 Quartos", baths: "2 Banheiros", type: "Condomínio", image: img("phjPBLFz2C2keKmrYPkV1hNS92Y.webp") },
  { slug: "modern-coastal-villa", status: "sale", city: "miami", agent: "marcus-rivera", title: "Villa Moderna no Litoral", address: "Coconut Grove, Miami, FL", price: "$889,000", area: "42 m²", beds: "4 Quartos", baths: "4,5 Banheiros", type: "Sobrado", image: img("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp") },
  { slug: "high-rise-city-residence", status: "sale", city: "miami", agent: "marcus-rivera", title: "Residência Urbana de Alto Padrão", address: "Downtown Miami, FL", price: "$859,000", area: "93 m²", beds: "2 Quartos", baths: "2 Banheiros", type: "Apartamento", image: img("PSKbxQ19IAeHVcKV76mEX7jNFSg.webp") },
  { slug: "riverside-contemporary-home", status: "sale", city: "jacksonville", agent: "isabella-torres", title: "Casa Contemporânea à Beira-Rio", address: "Riverside, Jacksonville, FL", price: "$870,000", area: "82 m²", beds: "3 Quartos", baths: "2 Banheiros", type: "Condomínio", image: img("waWK4WYu7GsknywLmZLBba4.webp") },
  { slug: "suburban-family-residence", status: "sale", city: "jacksonville", agent: "isabella-torres", title: "Residência Familiar no Subúrbio", address: "Mandarin, Jacksonville, FL", price: "$962,000", area: "60 m²", beds: "4 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("jL4FBYmOCekjED0jWCRDXfX91U.webp") },
  { slug: "modern-lakeview-home", status: "sale", city: "orlando", agent: "olivia-grant", title: "Casa Moderna com Vista para o Lago", address: "Lake Nona, Orlando, FL", price: "$650,000", area: "120 m²", beds: "3 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("9rxOqeqLXpgcRWHLKqey06en38.webp") },
  { slug: "oceanview-apartment", status: "rent", city: "miami", agent: "isabella-torres", title: "Apartamento com Vista para o Mar", address: "Miami Beach, Miami, FL", price: "$4,200/mês", area: "22 m²", beds: "1 Quarto", baths: "1 Banheiro", type: "Apartamento", image: img("lV7kqMe9VUddEoXCFzhQzSaNQ.webp") },
  { slug: "downtown-loft-apartment", status: "rent", city: "jacksonville", agent: "daniel-brooks", title: "Loft no Centro", address: "Downtown Jacksonville, FL", price: "$7,000/mês", area: "17 m²", beds: "1 Quarto", baths: "1 Banheiro", type: "Apartamento", image: img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp") },
  { slug: "garden-style-apartment", status: "rent", city: "jacksonville", agent: "daniel-brooks", title: "Apartamento com Jardim", address: "Southside, Jacksonville, FL", price: "$3,300/mês", area: "73 m²", beds: "2 Quartos", baths: "2 Banheiros", type: "Apartamento", image: img("G4YD2BizHvRF3WO5dGxnldAA34.webp") },
  { slug: "downtown-high-rise-apartment", status: "rent", city: "orlando", agent: "ethan-miles", title: "Apartamento em Edifício Alto", address: "Downtown Orlando, FL", price: "$1,900/mês", area: "27 m²", beds: "1 Quarto", baths: "1 Banheiro", type: "Apartamento", image: img("cepP00aJ0IdQavEivWSwJSPPAEQ.webp") },
  { slug: "suburban-townhome", status: "rent", city: "orlando", agent: "ethan-miles", title: "Sobrado no Subúrbio", address: "Winter Park, Orlando, FL", price: "$2,300/mês", area: "80 m²", beds: "2 Quartos", baths: "2,5 Banheiros", type: "Sobrado", image: img("NcXkdQactuuaPNAXEpZ1fJkqCR0.webp") },
];

export const saleListings = listings.filter((l) => l.status === "sale");
export const rentListings = listings.filter((l) => l.status === "rent");

export const getListing = (slug: string) => listings.find((l) => l.slug === slug);
export const listingsByCity = (city: string) => listings.filter((l) => l.city === city);
export const listingsByAgent = (agent: string) => listings.filter((l) => l.agent === agent);
