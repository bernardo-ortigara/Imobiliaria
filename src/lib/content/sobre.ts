// Copy for /sobre (original: /about). Blocks repeated from the Home reuse `@/lib/content`.

import { about as homeAbout, agents as homeAgents, img, why as homeWhy } from "@/lib/content";

export const sobre = {
  metaTitle: "Sobre nós | Luxterra",
  metaDescription:
    "Guiamos compradores e vendedores na Flórida em cada etapa, com imóveis selecionados, análise de mercado e suporte dedicado.",

  hero: {
    label: homeAbout.label, // "Sobre nós"
    title: "Sua imobiliária de confiança na Flórida",
    text: "Guiamos compradores e vendedores em cada etapa com clareza, com imóveis selecionados, análise de mercado e suporte dedicado.",
    // Ticker images, in the original order (odd = 400px tall, even = 380px tall)
    gallery: [
      { src: img("MyrgI1vs894Rp9yfxsOSyZRcUM.webp"), position: "50% 50%", tall: true },
      { src: img("P0IKKWT3PjsidbfZPLGFRba6stU.webp"), position: "0% 50%", tall: false },
      { src: img("XEYRy0rbhdgHFHlK9K0fyQxQ.webp"), position: "0% 50%", tall: true },
      { src: img("lqwCPSh3RoZtdRP6tJd1GRldOo.webp"), position: "100% 50%", tall: false },
    ],
  },

  mission: {
    label: "Nossa missão",
    title: "Onde a experiência encontra um processo sem complicações",
    text: "Ajudamos proprietários, investidores e recém-chegados a decidir com confiança, com informação clara, apoio constante e conhecimento local.",
    pattern: img("N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg"),
    cards: [
      {
        step: "01",
        title: "Explore com confiança",
        text: "Com pesquisa de mercado, análise de imóveis e conhecimento dos bairros, ajudamos você a comparar opções, planejar visitas e entender o valor real.",
        image: img("7xAiW7QuclLgT9ngSePY0K6hzNk.webp"),
        position: "51.5% 15.2%",
      },
      {
        step: "02",
        title: "Recomendações sob medida",
        text: "Seus objetivos guiam nossa abordagem — oferecemos imóveis selecionados, atualizações rápidas e orientação especializada para você avançar sem estresse.",
        image: img("tz8mQp6A9VEmOspdBz5vm6uNZWY.webp"),
        position: "15.7% 51.4%",
      },
      {
        step: "03",
        title: "Apoio em cada etapa",
        text: "Do primeiro contato à assinatura final, simplificamos a comunicação, acompanhamos cada etapa e mantemos você informado durante todo o processo.",
        image: img("H9wZKQEyNQ8s1Vh1R1PRNRPVp9g.webp"),
        position: "50% 50%",
      },
    ],
  },

  // Same block as the Home "Por que nós", with a one-line title and another photo.
  // The original card title adds "Florida"; in pt-BR that breaks into 3 lines, so the Home title is kept.
  why: {
    ...homeWhy,
    title: "Especialistas em imóveis na Flórida",
    image: img("yGHyJrYiKw24r72HPZtLTS4WePo.webp"),
  },

  agents: {
    ...homeAgents,
    all: "Todos os corretores",
  },
};
