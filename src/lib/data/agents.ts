import type { CitySlug } from "./cities";
import { img } from "./img";

export type AgentSlug = "horacio-santini";

export type Agent = {
  slug: AgentSlug;
  name: string;
  role: string;
  cities: string;
  cityTags: CitySlug[];
  image: string;
  avatar: string;
  instagram: string;
};

export const agents: Agent[] = [
  {
    slug: "horacio-santini",
    name: "Horácio Santini",
    role: "Corretor e fundador",
    cities: "Caxias do Sul e região",
    cityTags: [],
    image: img("horacio-santini.webp"),
    avatar: img("horacio-santini-avatar.webp"),
    instagram: "https://instagram.com/horaciosantini_corretor",
  },
];

export const broker = agents[0];

export const getAgent = (slug: string) => agents.find((a) => a.slug === slug);
