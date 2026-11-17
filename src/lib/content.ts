// All copy for the home page (pt-BR). Shared CMS-like data lives in ./data/*.

import { broker } from "./data/agents";
import { img } from "./data/img";
import { routes } from "./routes";

export { img };

export const nav = {
  links: [
    { label: "Imóveis", href: routes.listings },
    { label: "Corretor", href: routes.agent(broker.slug) },
    { label: "Sobre nós", href: routes.about },
    { label: "Contato", href: routes.contact },
  ],
  menu: "Menu",
  drawerLinks: [
    { label: "Início", href: routes.home },
    { label: "Imóveis", href: routes.listings },
    { label: "Corretor", href: routes.agent(broker.slug) },
    { label: "Sobre", href: routes.about },
    { label: "Contato", href: routes.contact },
  ],
  contactTitle: "Contato",
  email: "horacio.santini@gmail.com",
  phone: "(54) 99692-1770",
  socialsTitle: "Redes sociais",
  socials: [
    { label: "Instagram", href: "https://instagram.com/horaciosantini_corretor" },
  ],
};

export const hero = {
  text: "Experiência, transparência e atendimento personalizado para você encontrar o imóvel ideal em Caxias do Sul.",
  cta: "Ver imóveis",
  cardEyebrow: "Vamos te ajudar",
  cardTitle: "Fale com um corretor",
  image: img("I5TK0E5MrO84hanvd42um4tv0.webp"),
  avatar: img("pFWmjh1MmUlHUjB5a37IqhjHfDc.webp"),
};

export const about = {
  label: "Sobre nós",
  title: "Sua jornada imobiliária com confiança",
  text: "Vamos além da intermediação para que cada negociação em Caxias do Sul seja uma experiência positiva e segura.",
  items: [
    {
      icon: "bank",
      title: "Avaliação imobiliária",
      text: "Determinamos o valor justo do seu imóvel com análises precisas e detalhadas do mercado local.",
    },
    {
      icon: "doc",
      title: "Certificação documental",
      text: "Garantimos a segurança jurídica da sua transação com a verificação completa de todos os documentos.",
    },
  ],
  image: img("GWjQzjMp1XmOB5JsfRvqcRke3E.webp"),
} as const;

export const stats = {
  label: "Em números",
  title: "Experiência que gera confiança",
  image: img("Jw214vO1mG6pgbDZntulBn5w9uA.jpg"),
  items: [
    // Same figures as the old site (hsantiniimoveis.com.br).
    { value: 8, suffix: "+", label: "Anos de experiência" },
    { value: 100, suffix: "+", label: "Imóveis avaliados" },
    { value: 99, suffix: "%", label: "Clientes satisfeitos" },
  ],
};

export const listings = {
  label: "Imóveis",
  title: "Nossos imóveis recentes",
  loadMore: "Carregar mais",
};

export const why = {
  label: "Por que nós",
  title: "Por que escolher a HSantini?",
  cardLabel: "Corretor independente",
  cardTitle: "Seu sonho imobiliário, nossa prioridade",
  cardText:
    "Serviço personalizado, transparência total e conhecimento do mercado local guiam cada decisão. Acompanhamos você do primeiro contato à escritura.",
  image: img("RaxVOpZHxB9OK3LWaCEa2t0ICcU.webp"),
  stats: [
    { icon: "refresh", value: "8+", label: "Anos de experiência", text: "Serviço personalizado: cada cliente recebe atenção dedicada do início ao fim." },
    { icon: "building", value: "100+", label: "Imóveis avaliados", text: "Expertise local: conhecimento aprofundado do mercado de Caxias do Sul e região." },
    { icon: "briefcase", value: "100%", label: "Segurança jurídica", text: "Transparência total: cuidamos da documentação para uma transação sem surpresas." },
    { icon: "users", value: "99%", label: "Clientes satisfeitos", text: "Profissionalismo e dedicação que superam as expectativas de quem compra e vende." },
  ],
} as const;

export const services = {
  label: "Nossos serviços",
  title: "O que oferecemos",
  text: "Serviço imobiliário completo em Caxias do Sul, com segurança e transparência",
  items: [
    { title: "Venda", text: "Encontre o imóvel ideal ou realize a melhor venda com segurança.", cta: "Ver imóveis", href: routes.listings, image: img("XKsmDQSogPzC6LtXHfPOGwsnCY8.jpg"), position: "50% 50%" },
    { title: "Aluguel", text: "Opções de locação selecionadas nos melhores bairros de Caxias do Sul.", cta: "Ver imóveis", href: routes.listings, image: img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp"), position: "7.4% 91.3%" },
    { title: "Avaliação", text: "Descubra o valor justo do seu imóvel com uma análise precisa do mercado.", cta: "Solicitar avaliação", href: routes.contact, image: img("7xAiW7QuclLgT9ngSePY0K6hzNk.webp"), position: "50% 50%" },
  ],
  band: img("bEDV64CvdngAwP4RJzVbYFidxmQ.webp"),
};

export const agents = {
  label: "Corretor",
  title: "Conheça seu corretor",
  cta: "Ver perfil",
};

// Verbatim from the old site (hsantiniimoveis.com.br), which shows only quote + name.
export const testimonials = {
  label: "Depoimentos",
  title: "O que nossos clientes dizem",
  items: [
    { quote: "A experiência com o HSantini Imóveis foi excepcional. Profissionalismo e dedicação que superaram minhas expectativas na venda.", name: "Ana Paula S." },
    { quote: "Encontrei meu imóvel ideal em Caxias do Sul graças à consultoria atenciosa e ao profundo conhecimento do mercado.", name: "Carlos M." },
    { quote: "Transparência e segurança em todo o processo de compra. Recomendo o HSantini Imóveis para todos que buscam confiança.", name: "Mariana L." },
  ],
};

export const faq = {
  label: "Dúvidas",
  title: "Perguntas frequentes",
  text: "Ainda tem dúvidas? Fale com um especialista, teremos prazer em ajudar.",
  cta: "Fale conosco",
  image: img("iv87QVFz8fU7Ehqwdtr429bPNmo.webp"),
  items: [
    {
      q: "Como funciona o processo de compra?",
      a: "Começamos entendendo seus objetivos e expectativas. Depois, apresentamos as melhores opções, com avaliações precisas e estratégias personalizadas, e cuidamos de toda a documentação e burocracia para uma transação tranquila e sem surpresas.",
    },
    {
      q: "Como é feita a avaliação de imóveis?",
      a: "Nossa avaliação é detalhada, baseada em conhecimento profundo do mercado local, tendências e características únicas de cada propriedade.",
    },
    {
      q: "Vocês auxiliam com financiamento?",
      a: "Sim. Oferecemos consultoria especializada para orientar sobre as melhores estratégias de financiamento imobiliário.",
    },
    {
      q: "Vocês ajudam a vender meu imóvel?",
      a: "Sim. Avaliamos o imóvel, definimos a melhor estratégia de venda e acompanhamos toda a negociação, com verificação completa da documentação e segurança jurídica.",
    },
    {
      q: "Qual a área de atuação?",
      a: "Atuamos com paixão e dedicação em Caxias do Sul e região, com foco no mercado imobiliário local.",
    },
  ],
};

export const cta = {
  title: "Pronto para realizar seu sonho?",
  text: "Entre em contato e fale com um especialista",
  button: "Fale conosco",
  image: img("nMjqmhT2Oe3KiMkktCf7hsSVQ.jpg"),
  avatar: img("pFWmjh1MmUlHUjB5a37IqhjHfDc.webp"),
};

export const footer = {
  navTitle: "Menu de navegação",
  nav: [
    { label: "Início", href: routes.home },
    { label: "Imóveis", href: routes.listings },
    { label: "Corretor", href: routes.agent(broker.slug) },
    { label: "Contato", href: routes.contact },
  ],
  followTitle: "Siga-nos",
  socials: [
    { name: "Instagram", href: "https://instagram.com/horaciosantini_corretor", icon: img("VXbPz9XJZu7uTyhwsxjBKQe7RK8.svg") },
  ],
  whatsappText: "Tem alguma dúvida ou quer avaliar seu imóvel? Fale direto com o Horácio pelo WhatsApp",
  whatsappLabel: "WhatsApp (54) 99692-1770",
  whatsappAction: "Conversar",
  whatsappMessage: "Olá, Horácio! Vim pelo site da HSantini Imóveis e gostaria de mais informações.",
  pagesTitle: "Páginas",
  pages: [
    { label: "Sobre nós", href: routes.about },
  ],
  contactTitle: "Contato",
  phone: "(54) 99692-1770",
  email: "horacio.santini@gmail.com",
  address: "Rua Dom José Baréa, 2126 - Caxias do Sul",
};
