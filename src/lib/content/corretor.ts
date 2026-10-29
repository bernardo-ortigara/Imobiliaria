// pt-BR copy for /corretores/[slug] (original: /agents/<slug>).
import type { AgentSlug } from "@/lib/data/agents";

export const corretor = {
  contactTitle: "Fale conosco",
  contactCta: "Fale conosco",
  aboutTitle: "Sobre",
  experienceTitle: "Experiência",
  /** "<name>'s listings" */
  listingsTitle: (name: string) => `Imóveis de ${name}`,
  linkedin: "https://www.linkedin.com",
  x: "https://x.com",
};

export type AgentProfile = {
  /** Short line in the contact card. */
  bio: string;
  phone: string;
  email: string;
  /** Paragraphs. */
  about: string[];
  experience: string[];
};

// Phones/e-mails as in the original (olivia-grant keeps "olivia@", as on the site).
export const profiles: Record<AgentSlug, AgentProfile> = {
  "daniel-brooks": {
    bio: "Apoia novos compradores com etapas claras e confiança.",
    phone: "+1 813-555-7710",
    email: "daniel@luxterra.com",
    about: [
      "Daniel se dedica a fazer os clientes se sentirem à vontade e bem informados em toda a jornada imobiliária. Seja orientando quem compra pela primeira vez ou famílias em busca de mais espaço, ele oferece clareza, paciência e conselhos estratégicos.",
      "Sua abordagem garante que os clientes entendam cada etapa e se sintam seguros para tomar boas decisões.",
    ],
    experience: [
      "Daniel construiu uma reputação de pesquisa de mercado minuciosa, análise de imóveis e comunicação confiável. Sua experiência abrange bairros residenciais de Tampa, Miami e Orlando. Os clientes valorizam sua capacidade de simplificar o processo com resultados sólidos e orientação segura.",
    ],
  },
  "marcus-rivera": {
    bio: "Ajuda compradores a explorar o mercado da Flórida com orientação segura.",
    phone: "+1 904-555-4472",
    email: "marcus@luxterra.com",
    about: [
      "Marcus é conhecido pela abordagem analítica e pela capacidade de simplificar decisões imobiliárias complexas. Ele trabalha lado a lado com os clientes para entender seus objetivos, com recomendações precisas apoiadas em profundo conhecimento de mercado. Seu processo calmo e organizado garante apoio da primeira conversa até o fechamento.",
    ],
    experience: [
      "Com anos de sucesso em diversos bairros da Flórida, Marcus é especialista em estratégia de preços, avaliação e seleção de imóveis.",
      "Sua visão estratégica e seu conhecimento do mercado ajudam os clientes a aproveitar oportunidades e evitar erros caros. É reconhecido pela confiabilidade, pelo profissionalismo e por resultados consistentes.",
    ],
  },
  "olivia-grant": {
    bio: "Orienta investidores sobre oportunidades estratégicas na Flórida",
    phone: "+1 239-555-6654",
    email: "olivia@luxterra.com",
    about: [
      "Oliver une visão financeira a um profundo conhecimento imobiliário, ajudando os clientes a avaliar oportunidades com confiança.",
      "Seu estilo analítico identifica imóveis promissores, avalia o valor no longo prazo e guia os clientes em decisões baseadas em dados, com precisão, transparência e comunicação constante.",
    ],
    experience: [
      "Com experiência na gestão de carteiras imobiliárias diversificadas, Oliver é especialista em locação, potencial de valorização e projeções de investimento. É respeitado pela capacidade de revelar valor oculto e estruturar negócios com estratégia. Sua assessoria garante aos clientes ganhos relevantes e duradouros.",
    ],
  },
  "emily-carter": {
    bio: "Ajuda famílias e quem compra pela primeira vez com orientação tranquila.",
    phone: "+1 305-555-0183",
    email: "emily@luxterra.com",
    about: [
      "Com ampla experiência no mercado imobiliário da Flórida, Emily ajuda compradores e vendedores a tomar decisões informadas e com confiança.",
      "Ela oferece orientação sob medida para simplificar o processo, garantindo que os clientes entendam cada opção e oportunidade ao longo do caminho. Sua abordagem se baseia em transparência, conhecimento e um compromisso genuíno com os melhores resultados.",
    ],
    experience: [
      "Emily traz mais de uma década de experiência no mercado imobiliário, com foco em casas residenciais, imóveis no litoral e carteiras de investimento. Conhecida pela negociação e pelo pensamento estratégico, ela ajuda os clientes a fechar bons negócios em mercados competitivos. Seu profissionalismo e dedicação conquistaram a confiança de proprietários, investidores e novos compradores.",
    ],
  },
  "isabella-torres": {
    bio: "Foca em imóveis de luxo com atendimento sob medida.",
    phone: "+1 786-555-9021",
    email: "isabella@luxterra.com",
    about: [
      "Isabella tem um olhar refinado sobre o mercado de luxo da Flórida e ajuda os clientes a encontrar casas excepcionais, alinhadas ao seu estilo de vida e aos seus objetivos de investimento.",
      "Ela oferece um atendimento próximo, baseado em comunicação, conhecimento e atenção aos detalhes. Os clientes valorizam seu equilíbrio entre profissionalismo e uma orientação calorosa e atenciosa.",
    ],
    experience: [
      "Sua trajetória inclui anos de dedicação exclusiva a imóveis de luxo no litoral, casas de arquitetura assinada e imóveis de alto valor. O conhecimento de mercado, a negociação e o olhar para o design fazem de Isabella uma assessora de confiança. Ela ajuda os clientes a conquistar imóveis excepcionais com uma experiência tranquila.",
    ],
  },
  "ethan-miles": {
    bio: "Orienta compradores com clareza e planejamento personalizado",
    phone: "+1 407-555-3298",
    email: "ethan@luxterra.com",
    about: [
      "Ethan se concentra em entender os objetivos de cada cliente, com uma orientação direta, atenciosa e confiável. Ele simplifica o processo de compra com explicações claras e suporte constante, ajudando os clientes a se sentirem seguros tanto nas decisões quanto em toda a jornada.",
    ],
    experience: [
      "Ethan já ajudou centenas de compradores a conquistar sua casa na Flórida, com foco em bairros residenciais e comunidades voltadas para famílias.",
      "Seus pontos fortes incluem negociação, avaliação e planejamento passo a passo. Os clientes valorizam sua confiabilidade, sua comunicação objetiva e seu compromisso com a satisfação no longo prazo.",
    ],
  },
};
