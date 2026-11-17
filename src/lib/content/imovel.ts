import type { AgentSlug } from "@/lib/data/agents";

// Copy for /imoveis/[slug] (original: /listings/<slug>).
// Template strings are shared; per-listing fields come from each original CMS page.

export const imovel = {
  metaTitle: (title: string) => title,
  showAll: "Ver todas as imagens",
  priceLabel: "Preço do imóvel",
  details: { area: "Área (m²)", beds: "Quartos", baths: "Banheiros", parking: "Vagas", type: "Tipo" },
  description: "Descrição",
  accordion: {
    details: "Detalhes do imóvel",
    location: "Localização e arredores",
    features: "Características e comodidades",
  },
  gallery: "Galeria",
  map: "Mapa de localização",
  rating: "5 estrelas",
  form: {
    name: "Nome completo",
    namePlaceholder: "Ana Souza",
    email: "E-mail",
    emailPlaceholder: "seunome@gmail.com",
    message: "Mensagem",
    messagePlaceholder: "Sua mensagem aqui!!",
    submit: "Enviar",
    sent: "Mensagem enviada!",
    /** Text pre-filled in WhatsApp when the listing form is sent. */
    whatsappMessage: (d: { title: string; url: string; name: string; email: string; message: string }) =>
      [
        `Olá, Horácio! Tenho interesse no imóvel *${d.title}*.`,
        d.url,
        ``,
        `*Nome:* ${d.name}`,
        `*E-mail:* ${d.email}`,
        d.message ? `\n${d.message}` : null,
      ]
        .filter((l) => l !== null)
        .join("\n"),
  },
  related: { label: "Nossos imóveis", title: "Mais imóveis" },
};

/** Avatar crop used by the original contact card (object-position per agent photo). */
export const agentAvatarPosition: Record<AgentSlug, string> = {
  "horacio-santini": "52.6% 30.1%",
};

export type ImovelDetail = {
  /** Extra photos after the listing cover image (the header mosaic needs 2+). */
  photos: string[];
  description: string;
  details: string[];
  location?: string;
  features?: string[];
  /** Google Maps search for the embed; omitted when the address isn't public. */
  mapQuery?: string;
};

// From the old site (hsantiniimoveis.com.br/imoveis-disponiveis). The cobertura's numbers and
// "semimobiliado" come from its flyer photo; nothing beyond what was published is added.
export const imovelDetails: Record<string, ImovelDetail> = {
  "cobertura-duplex-madureira": {
    photos: [],
    description:
      "Cobertura duplex semimobiliada no bairro Madureira, em Caxias do Sul: 145,35 m² de área privativa, 3 quartos (1 suíte), varandas e 2 vagas de garagem. Espaço, conforto e estilo.",
    details: ["Cobertura duplex semimobiliada", "145,35 m² de área privativa", "3 dormitórios (1 suíte)", "Varandas", "2 vagas de garagem"],
    mapQuery: "Madureira, Caxias do Sul - RS",
  },
  "apartamento-via-condotti": {
    photos: [],
    description:
      "Apartamento de 126 m² no Via Condotti, em Caxias do Sul, com 2 dormitórios (1 suíte), varanda fechada e 2 vagas de garagem.",
    details: ["126 m²", "2 dormitórios (1 suíte)", "Varanda fechada", "2 vagas de garagem"],
  },
  "apartamento-boulevard-egeo": {
    photos: [],
    description:
      "Investimento estratégico no Edifício Boulevard Egeo, em Caxias do Sul: 3 dormitórios (1 suíte), 2 vagas, vista norte panorâmica e área gourmet. Sol privilegiado.",
    details: ["3 dormitórios (1 suíte)", "2 vagas de garagem", "Vista norte panorâmica", "Área gourmet", "Sol privilegiado"],
  },
};

export const getImovelDetail = (slug: string) => imovelDetails[slug];
