export const routes = {
  home: "/",
  listings: "/imoveis",
  listing: (slug: string) => `/imoveis/${slug}`,
  city: (slug: string) => `/cidades/${slug}`,
  agents: "/corretores",
  agent: (slug: string) => `/corretores/${slug}`,
  about: "/sobre",
  contact: "/contato",
  notFound: "/404",
};
