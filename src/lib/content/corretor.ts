// pt-BR copy for /corretores/[slug] (original: /agents/<slug>).
import type { AgentSlug } from "@/lib/data/agents";

export const corretor = {
  contactTitle: "Fale conosco",
  contactCta: "Fale conosco",
  aboutTitle: "Sobre",
  experienceTitle: "Experiência",
  /** "<name>'s listings" */
  listingsTitle: (name: string) => `Imóveis de ${name}`,
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

export const profiles: Record<AgentSlug, AgentProfile> = {
  "horacio-santini": {
    bio: "Corretor independente e fundador da HSantini Imóveis.",
    phone: "(54) 99692-1770",
    email: "horacio.santini@gmail.com",
    about: [
      "Como corretor independente, Horácio atua com paixão e dedicação em Caxias do Sul, oferecendo um serviço imobiliário completo. Sua missão é ir além da intermediação, garantindo que cada transação seja uma experiência positiva e segura para o cliente.",
      "Ele acompanha pessoalmente cada etapa: entende os objetivos de quem compra, vende ou aluga, apresenta as melhores opções e cuida de toda a documentação até a escritura.",
    ],
    experience: [
      "Com mais de 8 anos de experiência e mais de 100 imóveis avaliados, Horácio conhece a fundo o mercado imobiliário de Caxias do Sul e região.",
      "Seu trabalho vai da avaliação precisa do imóvel à certificação documental e à consultoria especializada em investimentos e financiamento, sempre com transparência e atendimento personalizado.",
    ],
  },
};
