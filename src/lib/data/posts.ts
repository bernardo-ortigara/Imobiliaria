import { img } from "./img";

export type Post = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  image: string;
};

// Order matches the original /blog grid (the Home shows the first 3).
export const posts: Post[] = [
  { slug: "the-smartest-ways-investors-approach-florida-properties", tag: "Investimentos", date: "10 jul 2024", title: "As formas mais inteligentes de investir em imóveis na Flórida", image: img("8fzfbl09J7vNXlRZgjyaKMLK8Q.webp") },
  { slug: "what-florida-sellers-should-know-before-listing-homes", tag: "Mercado imobiliário", date: "19 jun 2025", title: "O que vendedores na Flórida devem saber antes de anunciar", image: img("n9jzUZuNSxkgzqgWxnEUD2bHUS0.webp") },
  { slug: "why-florida-remains-a-top-choice-for-new-residents", tag: "Mercado imobiliário", date: "5 set 2024", title: "Por que a Flórida segue como a escolha preferida de novos moradores", image: img("tz8mQp6A9VEmOspdBz5vm6uNZWY.webp") },
  { slug: "how-florida-buyers-navigate-today-s-shifting-housing-market", tag: "Estilo de vida", date: "9 jun 2025", title: "Como compradores na Flórida enfrentam o mercado atual", image: img("iEwSH9WcEcZoBBg1vSIkEJVVmo.webp") },
  { slug: "how-buyers-evaluate-florida-neighborhoods-before-moving", tag: "Estilo de vida", date: "30 nov 2025", title: "Como compradores avaliam bairros da Flórida antes da mudança", image: img("EMSJ7nrVYZX1VmVtZ6MABfXRwHk.webp") },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
