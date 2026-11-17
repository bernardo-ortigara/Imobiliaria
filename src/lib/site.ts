// Site-wide settings used by SEO (metadata, sitemap, robots, JSON-LD) and the WhatsApp contact flow.

import { footer, nav } from "./content";

/** Production origin. Override with NEXT_PUBLIC_SITE_URL (e.g. a preview domain). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hsantiniimoveis.com.br").replace(/\/$/, "");

/**
 * Search engines are kept out (noindex + robots Disallow) until the real listings replace the
 * template ones. Set SITE_INDEXABLE=true in Vercel and redeploy to go public.
 */
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

/** E.164 digits for wa.me (from "(54) 99692-1770"). */
export const whatsappNumber = `55${footer.phone.replace(/\D/g, "")}`;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Opens WhatsApp with the message ready to send (new tab on desktop, the app on phones). */
export function openWhatsApp(text: string) {
  window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
}

/**
 * Next replaces (doesn't merge) a parent's `openGraph` when a page sets its own,
 * so every page spreads these shared fields.
 */
export const openGraphBase = { type: "website", locale: "pt_BR", siteName } as const;

/**
 * Social-preview URL for a /public image. Goes through the Next image optimizer, which serves
 * JPEG to crawlers that don't send `Accept: image/webp` (WhatsApp ignores WebP previews).
 */
export const ogImage = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=1200&q=75`;
