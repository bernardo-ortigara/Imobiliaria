import type { CitySlug } from "./cities";
import { img } from "./img";

export type AgentSlug = "daniel-brooks" | "marcus-rivera" | "olivia-grant" | "emily-carter" | "isabella-torres" | "ethan-miles";

export type Agent = {
  slug: AgentSlug;
  name: string;
  role: string;
  /** Display string, in the original's order. */
  cities: string;
  cityTags: CitySlug[];
  image: string;
};

// Order matches the original /agents grid (the Home shows the first 3).
// "olivia-grant" is displayed as "Oliver Grant" in the original — keep both as-is.
export const agents: Agent[] = [
  { slug: "daniel-brooks", name: "Daniel Brooks", role: "Consultor imobiliário", cities: "Orlando, Tampa", cityTags: ["orlando", "tampa"], image: img("WuPd0nCS70RQtJOJZrJXdiEKe2A.webp") },
  { slug: "marcus-rivera", name: "Marcus Rivera", role: "Assessor imobiliário", cities: "Miami, Orlando", cityTags: ["miami", "orlando"], image: img("V3uTK5qRVRKckpvhYTlkVwvqU.webp") },
  { slug: "olivia-grant", name: "Oliver Grant", role: "Assessor de investimentos", cities: "Jacksonville, Tampa", cityTags: ["jacksonville", "tampa"], image: img("CNNSjWYRKezz4GWWD65WmpRvk.webp") },
  { slug: "emily-carter", name: "Emily Carter", role: "Corretora sênior", cities: "Tampa, Jacksonville", cityTags: ["tampa", "jacksonville"], image: img("pFWmjh1MmUlHUjB5a37IqhjHfDc.webp") },
  { slug: "isabella-torres", name: "Isabella Torres", role: "Especialista em alto padrão", cities: "Miami, Tampa", cityTags: ["miami", "tampa"], image: img("mHbRnWoQrKXBFuw65fCMAM7vYpQ.webp") },
  { slug: "ethan-miles", name: "Ethan Miles", role: "Especialista em compradores", cities: "Miami, Orlando", cityTags: ["miami", "orlando"], image: img("atAym4TgVabeSH6aQrptLh0wZC8.webp") },
];

export const getAgent = (slug: string) => agents.find((a) => a.slug === slug);
