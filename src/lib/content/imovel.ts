import type { AgentSlug } from "@/lib/data/agents";
import { img } from "@/lib/data/img";

// Copy for /imoveis/[slug] (original: /listings/<slug>).
// Template strings are shared; per-listing fields come from each original CMS page.

export const imovel = {
  metaTitle: (title: string) => `${title} | Luxterra`,
  showAll: "Ver todas as imagens",
  priceLabel: "Preço do imóvel",
  details: { area: "Área (m²)", beds: "Quartos", baths: "Banheiros", type: "Tipo" },
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
  },
  related: { label: "Nossos imóveis", title: "Mais imóveis" },
};

/** Avatar crop used by the original contact card (object-position per agent photo). */
export const agentAvatarPosition: Record<AgentSlug, string> = {
  "emily-carter": "49.1% 31%",
  "olivia-grant": "53.8% 30%",
  "marcus-rivera": "48.6% 28.9%",
  "isabella-torres": "52.5% 29.6%",
  "daniel-brooks": "52.6% 30.1%",
  "ethan-miles": "52.7% 29.4%",
};

export type ImovelDetail = {
  /** Header: 2nd and 3rd photos (the 1st is the listing cover image). */
  hero: [string, string];
  gallery: string[];
  description: string;
  details: string[];
  location: string;
  features: string[];
  /** "lat,lng" for the Google Maps embed. */
  coords: string;
};

const g = (...files: string[]) => files.map(img);

export const imovelDetails: Record<string, ImovelDetail> = {
  "coastal-modern-residence": {
    hero: [img("NCe5u2vNkJTDq99aE4z9j4nnomw.webp"), img("lqwCPSh3RoZtdRP6tJd1GRldOo.webp")],
    gallery: g("7qddMcFEDswacgycG4I3MRkL56o.webp", "NCe5u2vNkJTDq99aE4z9j4nnomw.webp", "lqwCPSh3RoZtdRP6tJd1GRldOo.webp", "vS2CA5Cg9J9whGTYIJAYs6DfPs.webp"),
    description:
      "Uma casa clara de inspiração litorânea, com interiores modernos, ambientes amplos e acabamentos elegantes. Ideal para quem busca conforto, estilo e um imóvel bem localizado, perto do melhor que Tampa oferece.",
    details: ["3 quartos", "2,5 banheiros", "Garagem para 2 carros", "Cozinha integrada", "Quintal privativo", "Construído em 2018"],
    location:
      "Perto de parques à beira-mar, cafés conhecidos e áreas de compras a pé, combina lazer, praticidade e o charme do bairro, apreciado por moradores de Tampa e recém-chegados.",
    features: ["Eletrodomésticos em inox", "Bancadas de quartzo", "Janelas anti-impacto", "Closets", "Pátio externo", "Casa inteligente", "Projeto com eficiência energética"],
    coords: "27.91786, -82.48722",
  },
  "riverside-family-home": {
    hero: [img("7qddMcFEDswacgycG4I3MRkL56o.webp"), img("NCe5u2vNkJTDq99aE4z9j4nnomw.webp")],
    gallery: g("vS2CA5Cg9J9whGTYIJAYs6DfPs.webp", "w5FoqrGf2ajYCpdOTgI4Rm4s1s.webp", "lqwCPSh3RoZtdRP6tJd1GRldOo.webp", "NCe5u2vNkJTDq99aE4z9j4nnomw.webp"),
    description:
      "Uma casa acolhedora para a família, com interiores amplos, acabamentos renovados e um projeto bem pensado. Perfeita para quem quer conforto, praticidade e estar perto das escolas, parques e atrações de Tampa.",
    details: ["4 quartos", "3 banheiros", "Cozinha reformada", "Quintal cercado", "Cômodo extra", "Telhado novo (2021)"],
    location:
      "Em um bairro animado, cheio de restaurantes, áreas verdes e mercados locais, oferece acesso fácil e uma vida tranquila perto dos distritos em expansão do centro de Tampa.",
    features: ["Deck amplo", "Piso renovado", "Marcenaria sob medida", "Iluminação econômica", "Muito espaço para guardar", "Acabamentos modernos", "Lavanderia ampla", "Área externa com assentos"],
    coords: "27.99541, -82.45130",
  },
  "contemporary-urban-retreat": {
    hero: [img("vS2CA5Cg9J9whGTYIJAYs6DfPs.webp"), img("w5FoqrGf2ajYCpdOTgI4Rm4s1s.webp")],
    gallery: g("w5FoqrGf2ajYCpdOTgI4Rm4s1s.webp", "vS2CA5Cg9J9whGTYIJAYs6DfPs.webp", "NCe5u2vNkJTDq99aE4z9j4nnomw.webp", "lqwCPSh3RoZtdRP6tJd1GRldOo.webp"),
    description:
      "Um refúgio contemporâneo e elegante, com pé-direito alto, acabamentos refinados e janelas amplas que enchem a casa de luz natural. Feito para quem busca conforto premium e acesso rápido à vida cultural de Tampa.",
    details: ["3 quartos", "3 banheiros", "Terraço na cobertura", "Cozinha gourmet", "Escritório", "Construído em 2020"],
    location:
      "Em uma das áreas mais desejadas e caminháveis de Tampa, com lojas-butique, alta gastronomia, lazer ao ar livre e ótima proximidade dos melhores pontos de entretenimento da cidade.",
    features: ["Eletrodomésticos de alto padrão", "Cozinha externa", "Despensa", "Piso de madeira", "Termostato inteligente", "Iluminação de design", "Duas varandas", "Acabamentos premium"],
    coords: "27.93684, -82.48141",
  },
  "lakeside-craftsman-home": {
    hero: [img("lqwCPSh3RoZtdRP6tJd1GRldOo.webp"), img("NCe5u2vNkJTDq99aE4z9j4nnomw.webp")],
    gallery: g("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp", "lqwCPSh3RoZtdRP6tJd1GRldOo.webp", "NCe5u2vNkJTDq99aE4z9j4nnomw.webp", "vS2CA5Cg9J9whGTYIJAYs6DfPs.webp"),
    description:
      "Uma charmosa casa artesanal à beira do lago, com interiores acolhedores, planta ampla e arredores tranquilos. Ideal para quem busca vista, vida ao ar livre e acesso fácil às principais vias de Tampa.",
    details: ["4 quartos", "2,5 banheiros", "Frente para o lago", "Lareira", "Interior reformado", "Garagem para 2 carros"],
    location:
      "Em um bairro tranquilo e consolidado, com ruas arborizadas, parques e boa vizinhança, oferece sossego a poucos minutos das principais compras e restaurantes de Tampa.",
    features: ["Deck à beira d'água", "Cozinha renovada", "Proteção contra tempestades", "Closets amplos", "Jardim paisagístico", "Varanda coberta", "Sistemas eficientes"],
    coords: "28.07722, -82.50763",
  },
  "luxury-bayfront-condo": {
    hero: [img("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp"), img("NcXkdQactuuaPNAXEpZ1fJkqCR0.webp")],
    gallery: g("phjPBLFz2C2keKmrYPkV1hNS92Y.webp", "P0IKKWT3PjsidbfZPLGFRba6stU.webp", "D2Rosu46lk7tmVyYhuODw5KE6Qs.webp", "NcXkdQactuuaPNAXEpZ1fJkqCR0.webp"),
    description:
      "Um condomínio deslumbrante de frente para a baía, com vista panorâmica para o mar, interiores modernos e lazer de resort. Ideal para quem quer viver com luxo e acesso imbatível ao melhor da gastronomia e diversão de Miami.",
    details: ["2 quartos", "2 banheiros", "Varanda privativa", "Vaga demarcada", "Janelas do piso ao teto"],
    location:
      "No movimentado distrito financeiro de Miami, a passos de parques à beira-mar, lojas de luxo e restaurantes renomados, para uma rotina dinâmica e muito bem conectada.",
    features: ["Piscina e spa", "Academia", "Concierge 24 horas", "Manobrista", "Eletrodomésticos de alto padrão", "Acesso controlado", "Salas de reunião", "Lounges"],
    coords: "25.76021, -80.19101",
  },
  "modern-coastal-villa": {
    hero: [img("phjPBLFz2C2keKmrYPkV1hNS92Y.webp"), img("P0IKKWT3PjsidbfZPLGFRba6stU.webp")],
    gallery: g("phjPBLFz2C2keKmrYPkV1hNS92Y.webp", "P0IKKWT3PjsidbfZPLGFRba6stU.webp", "D2Rosu46lk7tmVyYhuODw5KE6Qs.webp", "lV7kqMe9VUddEoXCFzhQzSaNQ.webp"),
    description:
      "Uma villa litorânea impressionante, com ambientes amplos, acabamentos premium e grandes áreas externas. Feita para quem busca privacidade, elegância e acesso excepcional às atrações e ao estilo de vida do litoral de Miami.",
    details: ["4 quartos", "4,5 banheiros", "Piscina", "Cozinha gourmet", "Suíte de hóspedes", "Terraço amplo"],
    location:
      "Cercado de verde, cafés charmosos e lazer à beira-mar, este bairro muito procurado une charme, exclusividade e acesso rápido aos destinos culturais e comerciais de Miami.",
    features: ["Cozinha externa", "Adega", "Segurança inteligente", "Eletrodomésticos premium", "Marcenaria sob medida", "Banheiros estilo spa", "Carregador para carro elétrico", "Jardim paisagístico"],
    coords: "25.72715, -80.24218",
  },
  "high-rise-city-residence": {
    hero: [img("lV7kqMe9VUddEoXCFzhQzSaNQ.webp"), img("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp")],
    gallery: g("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp", "lV7kqMe9VUddEoXCFzhQzSaNQ.webp", "phjPBLFz2C2keKmrYPkV1hNS92Y.webp", "NcXkdQactuuaPNAXEpZ1fJkqCR0.webp"),
    description:
      "Uma residência elegante em edifício alto, com vista ampla da cidade, design moderno e interiores renovados. Perfeita para quem quer praticidade, sofisticação e tudo a pé no centro animado de Miami.",
    details: ["2 quartos", "2 banheiros", "Varanda", "Acesso à academia", "Estacionamento fechado"],
    location:
      "Perto de arenas, lojas e espaços culturais, oferece aos moradores grande proximidade do estilo de vida dinâmico de Miami e conexão fácil com as principais vias de transporte.",
    features: ["Eletrodomésticos novos", "Deck da piscina", "Salão de convivência", "Aceita pets", "Elevadores rápidos", "Acesso controlado", "Equipe no local", "Business center"],
    coords: "25.78096, -80.19545",
  },
  "riverside-contemporary-home": {
    hero: [img("KAxIq0ofUJ6qcP1AtgMQeeT3gw.webp"), img("9rxOqeqLXpgcRWHLKqey06en38.webp")],
    gallery: g("waWK4WYu7GsknywLmZLBba4.webp", "9rxOqeqLXpgcRWHLKqey06en38.webp", "KAxIq0ofUJ6qcP1AtgMQeeT3gw.webp", "6gdg8oLZEwV9zeCgwDGTOt2c.webp"),
    description:
      "Uma casa em Riverside totalmente renovada, com ambientes integrados, melhorias modernas e arquitetura de muito charme. Excelente para quem valoriza personalidade, praticidade e a cena em expansão de Jacksonville.",
    details: ["3 quartos", "2 banheiros", "Cozinha reformada", "Jardim de inverno", "Quintal amplo", "Construído em 1950"],
    location:
      "Em um bairro histórico conhecido pela arte, pelos cafés e pelas ruas caminháveis, une o charme do passado ao apelo contemporâneo, muito procurado pelos moradores de Jacksonville.",
    features: ["Encanamento renovado", "Iluminação moderna", "Piso de madeira", "Pátio coberto", "Pintura nova", "Closets amplos", "Climatização eficiente"],
    coords: "30.31153, -81.68117",
  },
  "suburban-family-residence": {
    hero: [img("6gdg8oLZEwV9zeCgwDGTOt2c.webp"), img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp")],
    gallery: g("jL4FBYmOCekjED0jWCRDXfX91U.webp", "waWK4WYu7GsknywLmZLBba4.webp", "YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp", "6gdg8oLZEwV9zeCgwDGTOt2c.webp"),
    description:
      "Uma residência espaçosa no subúrbio, pensada para famílias que querem conforto e praticidade. Tem interiores integrados, quintal cercado e acesso fácil às escolas, lojas e serviços de Jacksonville.",
    details: ["4 quartos", "3 banheiros", "Garagem para 2 carros", "Cômodo extra", "Cozinha renovada"],
    location:
      "Em uma área residencial tranquila, com parques, escolas e comércio do dia a dia por perto, é um ótimo ambiente para famílias que buscam estabilidade e vida em comunidade.",
    features: ["Bancadas de granito", "Despensa", "Varanda coberta", "Banheiros renovados", "Muita luz natural", "Ventiladores de teto", "Closets amplos"],
    coords: "30.14670, -81.62214",
  },
  "modern-lakeview-home": {
    hero: [img("waWK4WYu7GsknywLmZLBba4.webp"), img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp")],
    gallery: g("9rxOqeqLXpgcRWHLKqey06en38.webp", "KAxIq0ofUJ6qcP1AtgMQeeT3gw.webp", "YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp", "6gdg8oLZEwV9zeCgwDGTOt2c.webp"),
    description:
      "Uma casa moderna e marcante, com ampla vista para o lago, interiores integrados e acabamentos de alto padrão. Ideal para quem busca paisagem e acesso excelente aos melhores destinos de Orlando.",
    details: ["3 quartos", "3 banheiros", "Frente para o lago", "Escritório", "Pátio coberto"],
    location:
      "Perto de escolas bem avaliadas, trilhas para caminhada e polos gastronômicos, oferece uma experiência de alto padrão no distrito de Lake Nona, que cresce rápido em Orlando.",
    features: ["Janelas anti-impacto", "Cozinha de design", "Automação residencial", "Lounge externo", "Closets", "Acabamentos modernos", "Garagem para dois carros"],
    coords: "28.37913, -81.27301",
  },
  "oceanview-apartment": {
    hero: [img("phjPBLFz2C2keKmrYPkV1hNS92Y.webp"), img("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp")],
    gallery: g("lV7kqMe9VUddEoXCFzhQzSaNQ.webp", "D2Rosu46lk7tmVyYhuODw5KE6Qs.webp", "NcXkdQactuuaPNAXEpZ1fJkqCR0.webp", "XEYRy0rbhdgHFHlK9K0fyQxQ.webp"),
    description:
      "Um apartamento claro com vista para o mar, interiores contemporâneos, acabamentos modernos e tudo a pé. Perfeito para quem quer alugar perto da praia, com praticidade e o estilo de vida litorâneo de Miami.",
    details: ["1 quarto", "1 banheiro", "Varanda com vista para o mar", "Interior reformado", "Vaga demarcada"],
    location:
      "A poucos passos da orla, cercado de restaurantes, cafés e opções de lazer, oferece um ambiente animado e ao mesmo tempo tranquilo, com ótimo acesso ao essencial de Miami Beach.",
    features: ["Acesso à praia", "Piscina", "Academia", "Acesso controlado", "Cozinha moderna", "Internet de alta velocidade", "Lavanderia no prédio"],
    coords: "25.81733, -80.12238",
  },
  "downtown-loft-apartment": {
    hero: [img("KAxIq0ofUJ6qcP1AtgMQeeT3gw.webp"), img("waWK4WYu7GsknywLmZLBba4.webp")],
    gallery: g("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp", "6gdg8oLZEwV9zeCgwDGTOt2c.webp", "waWK4WYu7GsknywLmZLBba4.webp", "KAxIq0ofUJ6qcP1AtgMQeeT3gw.webp"),
    description:
      "Um loft moderno, com planta aberta, toques industriais e interiores renovados. Perfeito para quem quer alugar com a praticidade da cidade, perto dos polos de lazer e negócios do centro de Jacksonville.",
    details: ["1 quarto", "1 banheiro", "Loft de planta aberta", "Cozinha moderna", "Vista da cidade"],
    location:
      "Perto dos caminhos à beira do rio, de cafés e de polos de trabalho, dá acesso fácil ao lazer e ao essencial do dia a dia em uma região metropolitana em pleno crescimento.",
    features: ["Acesso à academia", "Lounge na cobertura", "Pé-direito alto", "Eletrodomésticos em inox", "Acesso controlado", "Lavanderia no apartamento", "Vaga reservada"],
    coords: "30.32564, -81.65560",
  },
  "garden-style-apartment": {
    hero: [img("KAxIq0ofUJ6qcP1AtgMQeeT3gw.webp"), img("YxxFm1LTRfwFGlA3h8r1cXZD3NM.webp")],
    gallery: g("G4YD2BizHvRF3WO5dGxnldAA34.webp", "waWK4WYu7GsknywLmZLBba4.webp", "6gdg8oLZEwV9zeCgwDGTOt2c.webp", "jL4FBYmOCekjED0jWCRDXfX91U.webp"),
    description:
      "Um apartamento confortável em meio a jardins, com interiores claros, muito verde ao redor e acesso prático às áreas de compras de Jacksonville. Ideal para quem quer simplicidade, conforto e o essencial por perto.",
    details: ["2 quartos", "2 banheiros", "Varanda", "Piso renovado", "Planta aberta"],
    location:
      "Em um condomínio residencial tranquilo, com acesso fácil a lojas, restaurantes e às principais vias, oferece uma vida suburbana sem pressa.",
    features: ["Piscina", "Academia", "Aceita pets", "Vaga demarcada", "Playground", "Trilhas para caminhada", "Eletrodomésticos modernos"],
    coords: "30.24980, -81.56066",
  },
  "downtown-high-rise-apartment": {
    hero: [img("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp"), img("NcXkdQactuuaPNAXEpZ1fJkqCR0.webp")],
    gallery: g("P0IKKWT3PjsidbfZPLGFRba6stU.webp", "phjPBLFz2C2keKmrYPkV1hNS92Y.webp", "D2Rosu46lk7tmVyYhuODw5KE6Qs.webp", "XEYRy0rbhdgHFHlK9K0fyQxQ.webp"),
    description:
      "Um apartamento refinado em edifício alto, com vista da cidade, interiores modernos e acesso rápido à vida noturna e à gastronomia de Orlando. Perfeito para profissionais que buscam praticidade e estilo.",
    details: ["1 quarto", "1 banheiro", "Varanda", "Vaga de garagem", "Interior renovado"],
    location:
      "Cercado de lojas, teatros, parques e transporte público, oferece enorme praticidade para quem quer alugar e viver a energia urbana no coração da cidade.",
    features: ["Deck da piscina", "Estúdio fitness", "Lounge para moradores", "Elevadores rápidos", "Aceita pets", "Acesso controlado", "Lavanderia no apartamento"],
    coords: "28.54277, -81.38112",
  },
  "suburban-townhome": {
    hero: [img("D2Rosu46lk7tmVyYhuODw5KE6Qs.webp"), img("P0IKKWT3PjsidbfZPLGFRba6stU.webp")],
    gallery: g("NcXkdQactuuaPNAXEpZ1fJkqCR0.webp", "PSKbxQ19IAeHVcKV76mEX7jNFSg.webp", "lV7kqMe9VUddEoXCFzhQzSaNQ.webp", "P0IKKWT3PjsidbfZPLGFRba6stU.webp"),
    description:
      "Um sobrado aconchegante no subúrbio, com planta funcional, melhorias modernas e um entorno tranquilo. Ótimo para quem quer alugar com conforto, privacidade e perto das atrações para a família em Orlando.",
    details: ["2 quartos", "2,5 banheiros", "Quintal", "Cozinha renovada", "Vaga reservada"],
    location:
      "Perto de ruas comerciais charmosas, parques à beira do lago, cafés bem avaliados e escolas, oferece uma vida tranquila com acesso rápido ao centro de Orlando e ao dia a dia.",
    features: ["Eletrodomésticos modernos", "Pátio privativo", "Banheiros renovados", "Piscina do condomínio", "Depósito", "Ventiladores de teto", "Sistemas eficientes", "Aceita pets"],
    coords: "28.60016, -81.33980",
  },
};

export const getImovelDetail = (slug: string) => imovelDetails[slug];
