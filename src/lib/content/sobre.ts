import { about as homeAbout, img } from "@/lib/content";

export const sobre = {
  metaTitle: "Sobre nós",
  metaDescription:
    "Serviço imobiliário completo em Caxias do Sul, com experiência, transparência e atendimento personalizado em cada etapa.",

  hero: {
    label: homeAbout.label,
    title: "Imobiliária de confiança em Caxias do Sul",
    text: "Vamos além da intermediação e guiamos você da avaliação precisa à consultoria especializada.",
    gallery: [
      { src: img("MyrgI1vs894Rp9yfxsOSyZRcUM.webp"), position: "50% 50%", tall: true },
      { src: img("P0IKKWT3PjsidbfZPLGFRba6stU.webp"), position: "0% 50%", tall: false },
      { src: img("XEYRy0rbhdgHFHlK9K0fyQxQ.webp"), position: "0% 50%", tall: true },
      { src: img("lqwCPSh3RoZtdRP6tJd1GRldOo.webp"), position: "100% 50%", tall: false },
    ],
  },

  mission: {
    label: "Nossa missão",
    title: "Nosso processo, passo a passo",
    text: "Simplificamos cada etapa da sua jornada imobiliária, garantindo clareza e eficiência do início ao fim.",
    pattern: img("N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg"),
    cards: [
      {
        step: "01",
        title: "Entendimento da necessidade",
        text: "Compreendemos seus objetivos e expectativas para encontrar a solução imobiliária perfeita, com conhecimento profundo dos bairros e do mercado local.",
        image: img("7xAiW7QuclLgT9ngSePY0K6hzNk.webp"),
        position: "51.5% 15.2%",
      },
      {
        step: "02",
        title: "Análise e proposta",
        text: "Apresentamos as melhores opções, com avaliações precisas e estratégias personalizadas, para você decidir com segurança e sem estresse.",
        image: img("tz8mQp6A9VEmOspdBz5vm6uNZWY.webp"),
        position: "15.7% 51.4%",
      },
      {
        step: "03",
        title: "Concretização segura",
        text: "Cuidamos de toda a documentação e burocracia, com verificação completa dos documentos, para uma transação tranquila e sem surpresas.",
        image: img("H9wZKQEyNQ8s1Vh1R1PRNRPVp9g.webp"),
        position: "50% 50%",
      },
    ],
  },
};
