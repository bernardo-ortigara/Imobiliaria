// All copy for the home page (pt-BR). Shared CMS-like data lives in ./data/*.

import { img } from "./data/img";
import { routes } from "./routes";

export { img };

export const nav = {
  links: [
    { label: "Imóveis", href: routes.listings },
    { label: "Corretores", href: routes.agents },
    { label: "Sobre nós", href: routes.about },
    { label: "Contato", href: routes.contact },
  ],
  menu: "Menu",
  drawerLinks: [
    { label: "Início", href: routes.home },
    { label: "Imóveis", href: routes.listings },
    { label: "Corretores", href: routes.agents },
    { label: "Sobre", href: routes.about },
    { label: "Blog", href: routes.blog },
    { label: "Contato", href: routes.contact },
  ],
  contactTitle: "Contato",
  email: "hi@luxterra.com",
  phone: "+1-404-80-100",
  socialsTitle: "Redes sociais",
  socials: [
    { label: "X / Twitter", href: "https://x.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com" },
  ],
};

export const hero = {
  text: "Ajudamos compradores e vendedores na Flórida com clareza—com imóveis selecionados e suporte do início ao fim.",
  cta: "Ver imóveis",
  cardEyebrow: "Vamos te ajudar",
  cardTitle: "Fale com um corretor",
  image: img("I5TK0E5MrO84hanvd42um4tv0.webp"),
  avatar: img("pFWmjh1MmUlHUjB5a37IqhjHfDc.webp"),
};

export const about = {
  label: "Sobre nós",
  title: "Nossa missão é levar você a viver melhor",
  text: "Apoiamos compradores, vendedores e proprietários com ferramentas que agilizam decisões e trazem clareza.",
  items: [
    {
      icon: "bank",
      title: "Análise de mercado",
      text: "Analisamos tendências locais, preços e demanda. Cada análise é pensada para orientar suas decisões.",
    },
    {
      icon: "doc",
      title: "Avaliação do imóvel",
      text: "Avaliamos o estado do imóvel, os pontos fortes da localização e comparamos vendas recentes. Cada detalhe é revisado com precisão.",
    },
  ],
  image: img("GWjQzjMp1XmOB5JsfRvqcRke3E.webp"),
} as const;

export const stats = {
  label: "Em números",
  title: "Clareza em cada passo do caminho",
  image: img("Jw214vO1mG6pgbDZntulBn5w9uA.jpg"),
  items: [
    { value: 320, suffix: "+", label: "Negócios fechados" },
    { value: 3, suffix: " mil", label: "Clientes atendidos" },
    { value: 78, suffix: "+", label: "Imóveis avaliados" },
    { value: 95, suffix: "%", label: "Satisfação dos clientes" },
  ],
};

export const listings = {
  label: "Imóveis",
  title: "Nossos imóveis recentes",
  loadMore: "Carregar mais",
};

export const cities = {
  label: "Localizações",
  title: "Cidades em destaque",
  text: "Cidades da Flórida que nossos clientes amam pelo conforto, mercado forte e vida no litoral",
};

export const why = {
  label: "Por que nós",
  title: "Os maiores especialistas em imóveis da Flórida",
  cardLabel: "A melhor imobiliária da Flórida",
  cardTitle: "2 mil clientes confiam na nossa imobiliária",
  cardText:
    "Escolher bem faz diferença — experiência e orientação clara guiam cada decisão imobiliária. Ajudamos nossos clientes a avançar com confiança.",
  image: img("RaxVOpZHxB9OK3LWaCEa2t0ICcU.webp"),
  stats: [
    { icon: "refresh", value: "84%", label: "Fecham mais rápido", text: "Clientes com corretores experientes concluem suas negociações mais rápido." },
    { icon: "building", value: "3 em 5", label: "Vencem propostas", text: "Mais da metade dos clientes conquista o imóvel ideal na primeira ou segunda proposta." },
    { icon: "briefcase", value: "$5M+", label: "Economia por ano", text: "Ajudamos compradores a não pagar a mais e a garantir valor nos mercados da Flórida." },
    { icon: "users", value: "95%", label: "Indicam amigos", text: "A maioria dos clientes recomenda nossa equipe após um fechamento tranquilo." },
  ],
} as const;

export const services = {
  label: "Nossos serviços",
  title: "O que oferecemos",
  text: "Simplificamos as decisões imobiliárias na Flórida com um serviço confiável, ágil e transparente",
  items: [
    { title: "Venda", text: "Tornamos a busca pelo imóvel perfeito simples e rápida.", cta: "Ver imóveis", href: routes.listings, image: img("XKsmDQSogPzC6LtXHfPOGwsnCY8.jpg"), position: "50% 50%" },
    { title: "Aluguel", text: "Tornamos simples encontrar o aluguel ideal nos bairros da Flórida.", cta: "Ver imóveis", href: routes.listings, image: img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp"), position: "7.4% 91.3%" },
    { title: "Avaliação", text: "Tornamos simples entender o valor do seu imóvel e os melhores negócios.", cta: "Solicitar avaliação", href: routes.contact, image: img("7xAiW7QuclLgT9ngSePY0K6hzNk.webp"), position: "50% 50%" },
  ],
  band: img("bEDV64CvdngAwP4RJzVbYFidxmQ.webp"),
};

export const agents = {
  label: "Corretores",
  title: "Nossos melhores corretores",
  cta: "Saiba mais",
};

export const testimonials = {
  label: "Depoimentos",
  title: "O que dizem os clientes",
  items: [
    { quote: "A Luxterra tornou nossa busca muito simples. A orientação, a agilidade e o conhecimento local nos ajudaram a achar o lugar ideal.", name: "Maria Thompson", role: "Compradora", image: img("gA1SCU5nhjQJUNwN4dAS9raqw.webp") },
    { quote: "Nos sentimos apoiados em cada etapa. Orientação clara, retornos rápidos e cuidado genuíno tornaram toda a compra tranquila e sem estresse.", name: "Brian Ruiz", role: "Comprador do 1º imóvel", image: img("2dvCOPoaEniJFuC835ZxLdqZ0.webp") },
    { quote: "Vender nosso imóvel foi tranquilo. A equipe cuidou do preço, da apresentação e da negociação com total profissionalismo.", name: "Kevin Adams", role: "Vendedor", image: img("4rwqWDnB1SHrRcrhRbxhsOwd6g4.webp") },
    { quote: "Atendimento excepcional do início ao fim. A Luxterra entendeu nossas necessidades e achou ótimas opções para o nosso orçamento.", name: "Michael Brown", role: "Cliente em mudança", image: img("1BVmvoe7as3QjXN6kSDy48F90w.webp") },
  ],
};

export const blog = {
  label: "Blog",
  title: "Análises recentes",
  text: "Novidades e orientações práticas sobre o mercado imobiliário da Flórida",
};

export const faq = {
  label: "Dúvidas",
  title: "Perguntas frequentes",
  text: "Ainda tem dúvidas? Nossa equipe terá prazer em ajudar.",
  cta: "Fale conosco",
  image: img("iv87QVFz8fU7Ehqwdtr429bPNmo.webp"),
  items: [
    {
      q: "Como funciona o processo de compra?",
      a: "Começamos com uma conversa para entender seus objetivos, regiões preferidas e orçamento. Depois, selecionamos imóveis sob medida, agendamos visitas e orientamos você nas propostas, vistorias e no fechamento. Cada etapa é conduzida com clareza e transparência, do início ao fim.",
    },
    {
      q: "Vocês ajudam com a pré-aprovação do financiamento?",
      a: "Sim. Conectamos você a credores de confiança que agilizam a pré-aprovação, ajudando a entender seu orçamento e a fortalecer sua proposta.",
    },
    {
      q: "Vocês coordenam vistorias e avaliações?",
      a: "Com certeza. Providenciamos vistoriadores e avaliadores credenciados para garantir que o imóvel atenda às expectativas antes de seguir em frente.",
    },
    {
      q: "Vocês ajudam a vender meu imóvel atual?",
      a: "Sim. Oferecemos estratégia de preço, marketing, fotografia e gestão completa do anúncio para você vender rápido e com segurança.",
    },
    {
      q: "Há tours virtuais para compradores de outros estados?",
      a: "Sim. Oferecemos tours virtuais em HD, visitas guiadas por vídeo ao vivo e consultorias remotas para quem não pode visitar pessoalmente.",
    },
  ],
};

export const cta = {
  title: "Encontre a casa dos seus sonhos",
  text: "Pronto para se mudar? Nossos corretores te ajudam",
  button: "Fale conosco",
  image: img("nMjqmhT2Oe3KiMkktCf7hsSVQ.jpg"),
  avatar: img("pFWmjh1MmUlHUjB5a37IqhjHfDc.webp"),
};

export const footer = {
  navTitle: "Menu de navegação",
  nav: [
    { label: "Início", href: routes.home },
    { label: "Imóveis", href: routes.listings },
    { label: "Imóvel (CMS)", href: routes.listing("coastal-modern-residence") },
    { label: "Corretores", href: routes.agents },
    { label: "Corretores (CMS)", href: routes.agent("emily-carter") },
    { label: "Contato", href: routes.contact },
  ],
  followTitle: "Siga-nos",
  socials: [
    { name: "Twitter", href: "https://x.com/", icon: img("NiQ8zZZvA5uSyYHG4blu8exRQRY.svg") },
    { name: "Facebook", href: "https://www.facebook.com", icon: img("E3cEfzwUiGCYPj1rDZaNeRwxqw.svg") },
    { name: "Instagram", href: "https://www.instagram.com/", icon: img("VXbPz9XJZu7uTyhwsxjBKQe7RK8.svg") },
  ],
  newsletter: "Assine nossa newsletter para receber novidades do mercado, novos imóveis, análises exclusivas e muito mais",
  emailPlaceholder: "Seu endereço de e-mail",
  subscribe: "Assinar",
  pagesTitle: "Páginas",
  pages: [
    { label: "Sobre nós", href: routes.about },
    { label: "Blog", href: routes.blog },
    { label: "Blog (CMS)", href: routes.post("how-florida-buyers-navigate-today-s-shifting-housing-market") },
    { label: "404", href: routes.notFound },
  ],
  contactTitle: "Contato",
  phone: "+1-404-506-100",
  email: "info@luxterra.com",
  address: "105 Hertha Road, Miami, Florida",
};
