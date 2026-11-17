import { img } from "@/lib/data/img";

export const contato = {
  metaTitle: "Contato",
  metaDescription: "Fale com a HSantini Imóveis em Caxias do Sul para comprar, vender, alugar ou avaliar seu imóvel.",

  label: "Contato",
  title: "Fale com nossa equipe",
  band: img("lqwCPSh3RoZtdRP6tJd1GRldOo.webp"),

  intro: {
    title: "Entre em contato:",
    text: "Envie sua mensagem ou visite nosso escritório. Atendemos de segunda a sexta, das 8h às 18h",
  },

  details: [
    { title: "WhatsApp", value: "(54) 99692-1770", href: "https://wa.me/5554996921770", icon: img("2expEAtwESx4bR7KGBTovjyxjE.svg") },
    { title: "E-mail", value: "horacio.santini@gmail.com", href: "mailto:horacio.santini@gmail.com", icon: img("aaG1gmKunbN9D2iFHz74UiGs9s.svg") },
    { title: "Endereço", value: "Rua Dom José Baréa, 2126, Exposição, Caxias do Sul - RS", href: "https://www.google.com/maps/search/?api=1&query=Rua+Dom+Jos%C3%A9+Bar%C3%A9a+2126+Caxias+do+Sul+RS", icon: img("1HAsiVvEkdqlN5U5wAyBVWPFOE.svg") },
  ],

  form: {
    enquiry: {
      label: "Tipo de solicitação",
      options: ["Comprar imóvel", "Vender imóvel", "Avaliação de imóvel", "Consultoria"],
    },
    name: { label: "Nome completo", placeholder: "João Silva" },
    phone: { label: "Telefone", placeholder: "(54) 90000-0000" },
    email: { label: "E-mail", placeholder: "joao@gmail.com" },
    message: { label: "Mensagem", placeholder: "Sua mensagem" },
    submit: "Enviar",
    success: "Obrigado!",
    whatsappMessage: (d: { enquiry: string; name: string; phone: string; email: string; message: string }) =>
      [
        `Olá, Horácio! Vim pelo site da HSantini Imóveis.`,
        ``,
        `*Solicitação:* ${d.enquiry}`,
        `*Nome:* ${d.name}`,
        d.phone ? `*Telefone:* ${d.phone}` : null,
        `*E-mail:* ${d.email}`,
        ``,
        d.message,
      ]
        .filter((l) => l !== null)
        .join("\n"),
  },
};
