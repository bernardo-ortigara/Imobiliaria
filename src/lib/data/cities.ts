import { img } from "./img";

export type CitySlug = "caxias-do-sul";

export type City = {
  slug: CitySlug;
  name: string;
  text: string;
  image: string;
  position: string;
};

export const cities: City[] = [
  {
    slug: "caxias-do-sul",
    name: "Caxias do Sul",
    text: "Imóveis selecionados em Caxias do Sul e região",
    image: img("apartamento-via-condotti.webp"),
    position: "50% 50%",
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
