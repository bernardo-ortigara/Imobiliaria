import { img } from "@/lib/data/img";

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
  lightbox: { open: "Ampliar imagem", close: "Fechar", prev: "Imagem anterior", next: "Próxima imagem" },
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

export type ImovelDetail = {
  photos: string[];
  description: string;
  details: string[];
  location?: string;
  features?: string[];
  mapQuery?: string;
};

export const imovelDetails: Record<string, ImovelDetail> = {
  "voc-house-antonella": {
    photos: [
      img("voc-house-piscina-living.webp"),
      img("voc-house-piscina.webp"),
      img("voc-house-fachada-dia.webp"),
      img("voc-house-sacada.webp"),
      img("voc-house-jardim.webp"),
      img("voc-house-planta-terreo.webp"),
      img("voc-house-planta-superior.webp"),
    ],
    description:
      "A VOC House foi projetada para oferecer uma experiência premium com sofisticação, conforto e segurança, além de tecnologia de ponta. Tudo isso em uma das localizações mais nobres da cidade, no Antonella Condomínio Club.",
    details: [
      "Casa pronta, entregue em julho de 2026",
      "Mais de 415 m² de área construída",
      "4 amplas suítes, incluindo suíte master com closet espaçoso, banheira freestanding de imersão e sacada privativa",
      "Garagem coberta para 3 veículos, mais 2 vagas descobertas e carregador de veículos elétricos",
      "Hall de entrada com pé-direito duplo e escada com iluminação própria degrau a degrau",
      "Living integrado com sala de estar, jantar e espaço gourmet, que se abre para a piscina e a área de lazer por um vão livre de 8,2 m",
      "Cozinha com porcelanato Portinari Classe A de 1,2 x 1,2 m, integrada ao espaço externo pela grande abertura aos fundos",
      "Home office com privacidade, ar-condicionado e acesso direto pela área externa, podendo ser um cômodo coringa",
      "Adega/depósito no térreo com acesso independente; a divisória em drywall com o home office pode ser retirada para unir os dois ambientes",
      "Lavanderia completa com piso aquecido, acesso independente, esquadrias em PVC com vidros duplos insulados e fechadura biométrica",
      "Área de lazer privativa: piscina sem cloro (purificada com sais) com hidromassagem, cascata e iluminação, espera para aquecimento por bomba de calor, amplo deck e jardim exuberante",
      "Banheiro completo exclusivo para a área da piscina e lazer",
      "Investimento de R$ 3.887.000,00. Aceita imóvel na entrada, financiamento bancário e parcelamento direto (a avaliar)",
    ],
    location: "No Antonella Condomínio Club, uma das localizações mais nobres da cidade.",
    features: [
      "Automação residencial já instalada para som, iluminação, climatização, persianas, piscina, câmeras de segurança, entre outros itens",
      "Alexa com monitor touchscreen de 15\" e comando de voz como central multimídia e de automação da casa",
      "Aplicativo de controle da casa inteligente, inclusive para abrir os vidros das janelas",
      "Três emissores de Wi-Fi pela casa e internet cabeada em todos os ambientes",
      "Porta principal em ACM robusto com identificação facial, digital e por senha; fechadura biométrica na porta da área de serviço; fechaduras anti-arrombamento que suportam 3 toneladas",
      "Esquadrias alemãs Salamander em PVC com vidros duplos insulados",
      "Paredes duplas com câmara de ar para isolamento termoacústico",
      "Piso aquecido radiante com termostato digital em toda a área social, serviço e suítes, entregue em funcionamento",
      "Esperas para ar-condicionado em todos os ambientes",
      "Recirculação de água quente: água aquecida no exato momento em que a torneira é aberta",
      "Esperas completas para placas fotovoltaicas",
      "100% dos porcelanatos Portinari Classe A; revestimentos externos em pedra natural e ripados em Bwood na fachada",
      "Paisagismo diferenciado e iluminado, com lavandas e alecrim florido",
      "Pontos de irrigação do jardim com água da chuva reaproveitada (cisterna de 2 mil litros)",
      "Alto-falantes instalados no living e na área da piscina, além de esperas de som em todas as suítes",
    ],
  },
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
