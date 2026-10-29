import { img } from "@/lib/data/img";

// pt-BR copy for /contato (original: luxterra.framer.website/contact)
export const contato = {
  metaTitle: "Contato | Luxterra",
  metaDescription: "Fale com a equipe da Luxterra na Flórida para comprar, vender ou avaliar seu imóvel.",

  label: "Contato",
  title: "Fale com nossa equipe",

  intro: {
    title: "Entre em contato:",
    text: "Ajudamos você a comprar, vender ou avaliar seu imóvel na Flórida. Envie sua mensagem hoje",
  },

  details: [
    { title: "Telefone", value: "+1 (555) 123-4567", href: "tel:+1 (555) 123-4567", icon: img("2expEAtwESx4bR7KGBTovjyxjE.svg") },
    { title: "E-mail", value: "contact@luxterra.com", href: "mailto:contact@luxterra.com", icon: img("aaG1gmKunbN9D2iFHz74UiGs9s.svg") },
    { title: "Endereço", value: "120 Brickell Avenue, Suite 450, Miami, FL", href: "https://www.google.com/maps", icon: img("1HAsiVvEkdqlN5U5wAyBVWPFOE.svg") },
  ],

  form: {
    enquiry: {
      label: "Tipo de solicitação",
      options: ["Comprar imóvel", "Vender imóvel", "Consultoria", "Avaliação de imóvel"],
    },
    name: { label: "Nome completo", placeholder: "João Silva" },
    phone: { label: "Telefone", placeholder: "+0 000 000 00" },
    email: { label: "E-mail", placeholder: "joao@gmail.com" },
    message: { label: "Mensagem", placeholder: "Sua mensagem" },
    submit: "Enviar",
    success: "Obrigado!",
  },

  agents: {
    label: "Corretores",
    title: "Nossos melhores corretores",
    cta: "Saiba mais",
    all: "Todos os corretores",
  },
};
