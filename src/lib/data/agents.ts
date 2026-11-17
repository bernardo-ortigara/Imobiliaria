import type { CitySlug } from "./cities";
import { img } from "./img";

export type AgentSlug = "horacio-santini";

export type Agent = {
  slug: AgentSlug;
  name: string;
  role: string;
  /** Display string. */
  cities: string;
  cityTags: CitySlug[];
  image: string;
  instagram: string;
};

// HSantini Imóveis has a single broker: the owner, Horácio Santini.
// Photo is a placeholder from the template until the real one is provided.
export const agents: Agent[] = [
  {
    slug: "horacio-santini",
    name: "Horácio Santini",
    role: "Corretor e fundador",
    cities: "Caxias do Sul e região",
    cityTags: [],
    image: img("WuPd0nCS70RQtJOJZrJXdiEKe2A.webp"),
    instagram: "https://instagram.com/horaciosantini_corretor",
  },
];

/** The only broker; used by nav links and the Home/Sobre/Contato broker section. */
export const broker = agents[0];

export const getAgent = (slug: string) => agents.find((a) => a.slug === slug);
