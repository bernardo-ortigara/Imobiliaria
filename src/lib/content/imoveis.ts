// Copy for the /imoveis page (original: luxterra.framer.website/listings).

import type { Metadata } from "next";
import { agents } from "@/lib/data/agents";
import { cities } from "@/lib/data/cities";
import { listings, statusLabel, type Listing } from "@/lib/data/listings";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Imóveis",
  description:
    "Explore as melhores opções de imóveis para venda e locação em Caxias do Sul, selecionadas com a expertise e confiança da HSantini Imóveis.",
};

export const imoveis = {
  label: "Nossas propriedades",
  title: "Nossos imóveis em destaque",
  text: "Explore as melhores opções para venda e locação, selecionadas com expertise e confiança.",
  searchPlaceholder: "Pesquisar...",
  filters: {
    all: "Todos",
    status: "Status",
    type: "Tipo",
    city: "Cidade",
  },
  types: ["Apartamento", "Sobrado", "Condomínio"],
  empty: "Nenhum imóvel encontrado",
  loadMore: "Carregar mais",
  pageSize: 6,
  search: {
    placeholder: "Pesquisar...",
    clear: "Limpar busca",
    noResults: "Nenhum resultado",
  },
};

// Grid order of the original /listings page (CMS order, sale and rent mixed).
const ORDER = [
  "coastal-modern-residence",
  "riverside-family-home",
  "contemporary-urban-retreat",
  "lakeside-craftsman-home",
  "luxury-bayfront-condo",
  "modern-coastal-villa",
  "high-rise-city-residence",
  "oceanview-apartment",
  "riverside-contemporary-home",
  "suburban-family-residence",
  "downtown-loft-apartment",
  "garden-style-apartment",
  "modern-lakeview-home",
  "downtown-high-rise-apartment",
  "suburban-townhome",
];
const rank = (l: Listing) => {
  const i = ORDER.indexOf(l.slug);
  return i === -1 ? ORDER.length : i;
};
export const orderedListings = [...listings].sort((a, b) => rank(a) - rank(b));

export const statusOptions = (Object.keys(statusLabel) as (keyof typeof statusLabel)[]).map((value) => ({
  value,
  label: statusLabel[value],
}));
export const cityOptions = cities.map((c) => ({ value: c.slug, label: c.name }));

/** Site-wide search index (the original uses Framer's site search modal). */
export type SearchEntry = { title: string; href: string; keywords: string };

const titlesWhere = (pred: (l: Listing) => boolean) => listings.filter(pred).map((l) => l.title).join(" ");

export const searchIndex: SearchEntry[] = [
  ...listings.map((l) => ({
    title: l.title,
    href: routes.listing(l.slug),
    keywords: [l.address, l.type, statusLabel[l.status], l.price].join(" "),
  })),
  ...cities.map((c) => ({
    title: c.name,
    href: routes.city(c.slug),
    keywords: [c.text, titlesWhere((l) => l.city === c.slug)].join(" "),
  })),
  ...agents.map((a) => ({
    title: a.name,
    href: routes.agent(a.slug),
    keywords: ["corretor", a.role, a.cities].join(" "),
  })),
  { title: "HSantini Imóveis", href: routes.home, keywords: `imóveis Caxias do Sul ${titlesWhere(() => true)}` },
  { title: "Nossos imóveis em destaque", href: routes.listings, keywords: "imóveis à venda para alugar" },
  { title: "Imobiliária de confiança em Caxias do Sul", href: routes.about, keywords: "sobre nós HSantini Imóveis" },
  { title: "Fale com nossa equipe", href: routes.contact, keywords: "contato e-mail telefone whatsapp" },
];
