// All copy for the home page (pt-BR). Images live in /public/images.

export const img = (file: string) => `/images/${file}`;

export const nav = {
  links: ["Imóveis", "Corretores", "Sobre nós", "Contato"],
  menu: "Menu",
  drawerLinks: ["Início", "Imóveis", "Corretores", "Sobre", "Blog", "Contato"],
  contactTitle: "Contato",
  email: "hi@luxterra.com",
  phone: "+1-404-80-100",
  socialsTitle: "Redes sociais",
  socials: ["X / Twitter", "Instagram", "Facebook"],
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

export type Listing = {
  title: string;
  address: string;
  price: string;
  area: string;
  beds: string;
  baths: string;
  type: string;
  image: string;
};

const sale = "À venda";
const rent = "Para alugar";

export const listings = {
  label: "Imóveis",
  title: "Nossos imóveis recentes",
  tabs: [sale, rent],
  loadMore: "Carregar mais",
  sale: [
    { title: "Residência Moderna no Litoral", address: "Bayshore Gardens, Tampa, FL", price: "$749,000", area: "63 m²", beds: "3 Quartos", baths: "2,5 Banheiros", type: "Apartamento", image: img("7qddMcFEDswacgycG4I3MRkL56o.webp") },
    { title: "Casa de Família à Beira-Rio", address: "Seminole Heights, Tampa, FL", price: "$629,500", area: "124 m²", beds: "4 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("vS2CA5Cg9J9whGTYIJAYs6DfPs.webp") },
    { title: "Refúgio Urbano Contemporâneo", address: "Hyde Park, Tampa, FL", price: "$835,000", area: "49 m²", beds: "3 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("NCe5u2vNkJTDq99aE4z9j4nnomw.webp") },
    { title: "Casa Artesanal à Beira do Lago", address: "Carrollwood, Tampa, FL", price: "$712,000", area: "22 m²", beds: "4 Quartos", baths: "2,5 Banheiros", type: "Sobrado", image: img("w5FoqrGf2ajYCpdOTgI4Rm4s1s.webp") },
    { title: "Condomínio de Luxo na Baía", address: "Brickell, Miami, FL", price: "$930,000", area: "55 m²", beds: "2 Quartos", baths: "2 Banheiros", type: "Condomínio", image: img("phjPBLFz2C2keKmrYPkV1hNS92Y.webp") },
    { title: "Villa Moderna no Litoral", address: "Coconut Grove, Miami, FL", price: "$889,000", area: "42 m²", beds: "4 Quartos", baths: "4,5 Banheiros", type: "Sobrado", image: img("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp") },
    { title: "Residência Urbana de Alto Padrão", address: "Downtown Miami, FL", price: "$859,000", area: "93 m²", beds: "2 Quartos", baths: "2 Banheiros", type: "Apartamento", image: img("PSKbxQ19IAeHVcKV76mEX7jNFSg.webp") },
    { title: "Casa Contemporânea à Beira-Rio", address: "Riverside, Jacksonville, FL", price: "$870,000", area: "82 m²", beds: "3 Quartos", baths: "2 Banheiros", type: "Condomínio", image: img("waWK4WYu7GsknywLmZLBba4.webp") },
    { title: "Residência Familiar no Subúrbio", address: "Mandarin, Jacksonville, FL", price: "$962,000", area: "60 m²", beds: "4 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("jL4FBYmOCekjED0jWCRDXfX91U.webp") },
    { title: "Casa Moderna com Vista para o Lago", address: "Lake Nona, Orlando, FL", price: "$650,000", area: "120 m²", beds: "3 Quartos", baths: "3 Banheiros", type: "Apartamento", image: img("9rxOqeqLXpgcRWHLKqey06en38.webp") },
  ] satisfies Listing[],
  rent: [
    { title: "Apartamento com Vista para o Mar", address: "Miami Beach, Miami, FL", price: "$4,200/mês", area: "22 m²", beds: "1 Quarto", baths: "1 Banheiro", type: "Apartamento", image: img("lV7kqMe9VUddEoXCFzhQzSaNQ.webp") },
    { title: "Loft no Centro", address: "Downtown Jacksonville, FL", price: "$7,000/mês", area: "17 m²", beds: "1 Quarto", baths: "1 Banheiro", type: "Apartamento", image: img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp") },
    { title: "Apartamento com Jardim", address: "Southside, Jacksonville, FL", price: "$3,300/mês", area: "73 m²", beds: "2 Quartos", baths: "2 Banheiros", type: "Apartamento", image: img("G4YD2BizHvRF3WO5dGxnldAA34.webp") },
    { title: "Apartamento em Edifício Alto", address: "Downtown Orlando, FL", price: "$1,900/mês", area: "27 m²", beds: "1 Quarto", baths: "1 Banheiro", type: "Apartamento", image: img("cepP00aJ0IdQavEivWSwJSPPAEQ.webp") },
    { title: "Sobrado no Subúrbio", address: "Winter Park, Orlando, FL", price: "$2,300/mês", area: "80 m²", beds: "2 Quartos", baths: "2,5 Banheiros", type: "Sobrado", image: img("NcXkdQactuuaPNAXEpZ1fJkqCR0.webp") },
  ] satisfies Listing[],
  saleTag: sale,
  rentTag: rent,
};

export const cities = {
  label: "Localizações",
  title: "Cidades em destaque",
  text: "Cidades da Flórida que nossos clientes amam pelo conforto, mercado forte e vida no litoral",
  items: [
    { name: "Tampa", text: "Vida à beira-mar, bairros animados e bons preços", image: img("8fFtFdelNtmUpvHVxzb5hMqYfK8.webp"), position: "50% 50%" },
    { name: "Jacksonville", text: "Explore bairros litorâneos e muitas áreas verdes", image: img("pUfhVbYewD1MibDQ5Y0Z9LsuQBs.webp"), position: "8.5% 60.1%" },
    { name: "Orlando", text: "Comunidades vibrantes, belas paisagens e estilo de vida", image: img("IKoqxtt8qK3DbVRrwyyLxuiA7r8.webp"), position: "50% 50%" },
    { name: "Miami", text: "Aproveite casas de luxo no litoral e estilo urbano", image: img("Wh50vBYScZqjQOgfqElUflDbYc.webp"), position: "50% 50%" },
  ],
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
    { title: "Venda", text: "Tornamos a busca pelo imóvel perfeito simples e rápida.", cta: "Ver imóveis", image: img("XKsmDQSogPzC6LtXHfPOGwsnCY8.jpg"), position: "50% 50%" },
    { title: "Aluguel", text: "Tornamos simples encontrar o aluguel ideal nos bairros da Flórida.", cta: "Ver imóveis", image: img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp"), position: "7.4% 91.3%" },
    { title: "Avaliação", text: "Tornamos simples entender o valor do seu imóvel e os melhores negócios.", cta: "Solicitar avaliação", image: img("7xAiW7QuclLgT9ngSePY0K6hzNk.webp"), position: "50% 50%" },
  ],
  band: img("bEDV64CvdngAwP4RJzVbYFidxmQ.webp"),
};

export const agents = {
  label: "Corretores",
  title: "Nossos melhores corretores",
  cta: "Saiba mais",
  items: [
    { name: "Daniel Brooks", role: "Consultor imobiliário", cities: "Orlando, Tampa", image: img("WuPd0nCS70RQtJOJZrJXdiEKe2A.webp") },
    { name: "Marcus Rivera", role: "Assessor imobiliário", cities: "Miami, Orlando", image: img("V3uTK5qRVRKckpvhYTlkVwvqU.webp") },
    { name: "Oliver Grant", role: "Assessor de investimentos", cities: "Jacksonville, Tampa", image: img("CNNSjWYRKezz4GWWD65WmpRvk.webp") },
  ],
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
  posts: [
    { tag: "Investimentos", date: "10 jul 2024", title: "As formas mais inteligentes de investir em imóveis na Flórida", image: img("8fzfbl09J7vNXlRZgjyaKMLK8Q.webp") },
    { tag: "Mercado imobiliário", date: "19 jun 2025", title: "O que vendedores na Flórida devem saber antes de anunciar", image: img("n9jzUZuNSxkgzqgWxnEUD2bHUS0.webp") },
    { tag: "Mercado imobiliário", date: "5 set 2024", title: "Por que a Flórida segue como a escolha preferida de novos moradores", image: img("tz8mQp6A9VEmOspdBz5vm6uNZWY.webp") },
  ],
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
  nav: ["Início", "Imóveis", "Imóvel (CMS)", "Corretores", "Corretores (CMS)", "Contato"],
  followTitle: "Siga-nos",
  socials: [
    { name: "Twitter", icon: img("NiQ8zZZvA5uSyYHG4blu8exRQRY.svg") },
    { name: "Facebook", icon: img("E3cEfzwUiGCYPj1rDZaNeRwxqw.svg") },
    { name: "Instagram", icon: img("VXbPz9XJZu7uTyhwsxjBKQe7RK8.svg") },
  ],
  newsletter: "Assine nossa newsletter para receber novidades do mercado, novos imóveis, análises exclusivas e muito mais",
  emailPlaceholder: "Seu endereço de e-mail",
  subscribe: "Assinar",
  pagesTitle: "Páginas",
  pages: ["Sobre nós", "Blog", "Blog (CMS)", "404"],
  contactTitle: "Contato",
  phone: "+1-404-506-100",
  email: "info@luxterra.com",
  address: "105 Hertha Road, Miami, Florida",
};
