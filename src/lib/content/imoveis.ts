// Copy for the /imoveis page (original: luxterra.framer.website/listings).

import type { Metadata } from "next";
import { agents } from "@/lib/data/agents";
import { cities } from "@/lib/data/cities";
import { listings, priceOnRequest, statusLabel, type Listing } from "@/lib/data/listings";
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
  /** Filter options, from the listings themselves. */
  types: [...new Set(listings.map((l) => l.type))],
  empty: "Nenhum imóvel encontrado",
  loadMore: "Carregar mais",
  pageSize: 6,
  search: {
    placeholder: "Pesquisar...",
    clear: "Limpar busca",
    noResults: "Nenhum resultado",
  },
};

// Grid order = data order (same as the old site).
export const orderedListings = listings;

// Only statuses that have listings (e.g. no "Para alugar" option while nothing is for rent).
export const statusOptions = (Object.keys(statusLabel) as (keyof typeof statusLabel)[])
  .filter((value) => listings.some((l) => l.status === value))
  .map((value) => ({
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
    keywords: [l.address, l.type, statusLabel[l.status], l.price ?? priceOnRequest].join(" "),
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
