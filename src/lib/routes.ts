// pt-BR routes. Slugs are kept identical to the original site.

export const routes = {
  home: "/",
  listings: "/imoveis",
  listing: (slug: string) => `/imoveis/${slug}`,
  city: (slug: string) => `/cidades/${slug}`,
  agents: "/corretores",
  agent: (slug: string) => `/corretores/${slug}`,
  about: "/sobre",
  contact: "/contato",
  blog: "/blog",
  post: (slug: string) => `/blog/${slug}`,
  notFound: "/404",
};
