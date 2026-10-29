import { img } from "./img";

export type CitySlug = "tampa" | "jacksonville" | "orlando" | "miami";

export type City = {
  slug: CitySlug;
  name: string;
  text: string;
  image: string;
  position: string;
};

export const cities: City[] = [
  { slug: "tampa", name: "Tampa", text: "Vida à beira-mar, bairros animados e bons preços", image: img("8fFtFdelNtmUpvHVxzb5hMqYfK8.webp"), position: "50% 50%" },
  { slug: "jacksonville", name: "Jacksonville", text: "Explore bairros litorâneos e muitas áreas verdes", image: img("pUfhVbYewD1MibDQ5Y0Z9LsuQBs.webp"), position: "8.5% 60.1%" },
  { slug: "orlando", name: "Orlando", text: "Comunidades vibrantes, belas paisagens e estilo de vida", image: img("IKoqxtt8qK3DbVRrwyyLxuiA7r8.webp"), position: "50% 50%" },
  { slug: "miami", name: "Miami", text: "Aproveite casas de luxo no litoral e estilo urbano", image: img("Wh50vBYScZqjQOgfqElUflDbYc.webp"), position: "50% 50%" },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
