import type { CitySlug } from "@/lib/data/cities";

export const cidade = {
  label: "Nossos imóveis",
  titlePrefix: "Imóveis em",
  metaTitle: (name: string) => `Imóveis em ${name}`,
  intro: {
    "caxias-do-sul":
      "Imóveis selecionados em Caxias do Sul e região, com a experiência, a transparência e o conhecimento do mercado local da HSantini Imóveis.",
  } satisfies Record<CitySlug, string>,
};
