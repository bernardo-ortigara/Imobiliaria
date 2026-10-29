import type { CitySlug } from "@/lib/data/cities";

// Copy for /cidades/[slug] (original: /cities/<slug>). Title lines mirror the original "Tampa / listings".
export const cidade = {
  label: "Nossos imóveis",
  titlePrefix: "Imóveis em",
  metaTitle: (name: string) => `Imóveis em ${name} | Luxterra`,
  intro: {
    tampa:
      "Viva o estilo de vida à beira-mar de Tampa, com bairros animados e boas oportunidades de investimento nas regiões mais desejadas.",
    jacksonville:
      "Descubra o charme litorâneo de Jacksonville, com bairros amplos e opções acessíveis para famílias, profissionais e investidores.",
    orlando:
      "Explore os subúrbios de Orlando, áreas residenciais cênicas e opções variadas de moradia, com ótimo custo-benefício o ano todo.",
    miami:
      "Conheça o litoral de luxo de Miami, bairros animados e imóveis disputados, perfeitos para viver bem e investir a longo prazo.",
  } satisfies Record<CitySlug, string>,
};
