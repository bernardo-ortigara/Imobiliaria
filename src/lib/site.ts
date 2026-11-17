import { footer, nav } from "./content";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hsantiniimoveis.com.br").replace(/\/$/, "");

export const indexable = process.env.SITE_INDEXABLE === "true";

export const siteName = "HSantini Imóveis";
export const slogan = "Seu sonho imobiliário, nossa prioridade";
export const siteDescription =
  "Experiência, transparência e atendimento personalizado em Caxias do Sul. Encontre o imóvel ideal ou realize a melhor venda com segurança e confiança.";

export const contact = {
  phone: footer.phone,
  email: footer.email,
  instagram: nav.socials[0].href,
  street: "Rua Dom José Baréa, 2126",
  city: "Caxias do Sul",
  region: "RS",
  country: "BR",
};

export const whatsappNumber = `55${footer.phone.replace(/\D/g, "")}`;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export function openWhatsApp(text: string) {
  window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
}

export const openGraphBase = { type: "website", locale: "pt_BR", siteName } as const;

export const ogImage = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=1200&q=75`;
