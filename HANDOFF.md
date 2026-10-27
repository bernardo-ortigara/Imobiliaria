# Handoff: Luxterra em pt-BR (Figma + Next.js)

Objetivo: recriar **todas as páginas** de https://luxterra.framer.website em código (Next.js) e no Figma. O visual e as animações devem ficar iguais ao original, com os textos em pt-BR.
A **Home está pronta** nos dois. Esta sessão vai cuidar das outras páginas, com um agente por página trabalhando em paralelo e mais um agente só para o Figma.

---

## 1. Estado atual

### Código: `/Users/bernardoalves/Desktop/IMOBILIARIA`
- Next.js 16.4 (App Router, Turbopack), React 19, Tailwind v4, `motion` (Framer Motion) e `lenis`.
- **Leia `AGENTS.md`**: este Next tem breaking changes. A documentação fica em `node_modules/next/dist/docs/`.
- A Home em 1440px foi verificada lado a lado com o original, seção por seção. O hero ocupa 100% da altura da janela.
- **Nada foi commitado ainda.** Só existe o commit inicial do create-next-app.

| Caminho | O que é |
|---|---|
| `src/app/page.tsx` | Monta a Home. Header e Footer ainda estão aqui, não no layout. |
| `src/app/layout.tsx` | Fonte Inter (`next/font`, eixo `opsz`) e `<SmoothScroll>` (Lenis) |
| `src/app/globals.css` | Tokens de cor, escala tipográfica (`t-58`, `t-34`, `t-24`, `t-18`, `t-16`, `t-15`, `t-13`, `t-counter`…), `px-wrap`/`inset-x-wrap` (conteúdo com no máximo 1356px, centralizado, margem mínima de 32px) e CSS do "text roll" |
| `src/components/smooth-scroll.tsx` | Lenis rodando dentro do loop de quadros do Motion (`frame.update`) |
| `src/components/motion.tsx` | `Reveal` (fade/spring/slide ao entrar na tela), `CharReveal`, `Counter`, easings medidos (`EASE_REVEAL`, `EASE_HERO`, `EASE_SLIDE`, `SPRING_NAV`, `SPRING_CARD`) |
| `src/components/ui.tsx` | `TextRoll` (hover dos links e botões), `SectionLabel` (bolinha roxa + linhas), `GridLines` (linhas verticais nos terços), `RollButton` |
| `src/components/icons.tsx` | SVGs extraídos do site (logo, setas, ícones de área/quarto/banheiro, sociais…) |
| `src/components/sections/*.tsx` | Seções da Home: header (menu lateral), hero, about, stats, listings, cities, why-us, services (+ `ImageBand`), agents, testimonials, blog, faq, cta, footer |
| `src/lib/content.ts` | **Todo** o texto pt-BR da Home e os dados (10 imóveis à venda, 5 para alugar, corretores, posts, depoimentos, FAQ) |
| `public/images/` | Imagens do site, já reduzidas: no máximo 2880px nas de largura total e 1400px nas demais |
| `tools/recon/` | Scripts de engenharia reversa (ver seção 4) |

### Figma: arquivo `Zhmkq4ZkC9k6jx3r41DahZ`
- Página **"Home"**, frame `4:2` "Home — Desktop 1440". Feito a partir de uma captura do site original e depois traduzido e corrigido à mão.
- Falta nesse frame o **logo grande "Luxterra" do rodapé**: ele está quase transparente no momento da captura.

---

## 2. Páginas que faltam (seções mapeadas com `tools/recon/dump-dom.mjs`)

| Original | Rota pt-BR sugerida | Blocos do original | Reaproveita da Home |
|---|---|---|---|
| `/listings` | `/imoveis` | Listings (grade completa + abas), CTA | `Listings`, `Cta` |
| `/listings/<slug>` (CMS) | `/imoveis/[slug]` | Header (galeria/topo), Content (detalhes), Listings (relacionados) | card de imóvel |
| `/cities/<slug>` (CMS: tampa, jacksonville, orlando, miami) | `/cidades/[slug]` | Listings (filtrados pela cidade), CTA | `Listings`, `Cta` |
| `/agents` | `/corretores` | Hero (grade de corretores) | card de corretor |
| `/agents/<slug>` (CMS: daniel-brooks, marcus-rivera, olivia-grant, emily-carter) | `/corretores/[slug]` | Hero (perfil), Listings (imóveis do corretor) | card de imóvel |
| `/about` | `/sobre` | Hero, About, Stats, Why us, Image, Agents, FAQ, CTA | quase tudo: `Stats`, `WhyUs`, `ImageBand`, `Agents`, `Faq`, `Cta` |
| `/contact` | `/contato` | Hero (formulário), Image, Agents | `ImageBand`, `Agents` |
| `/blog` | `/blog` | lista de posts | card de post |
| `/blog/<slug>` (CMS: 4 posts) | `/blog/[slug]` | Hero, Content (rich text), More (relacionados) | card de post |
| `/404` | `not-found.tsx` | texto + grid | `GridLines` |

As árvores completas (layout e tipografia computados) já estão em `tools/recon/out/*.txt`. Regenere se precisar.

---

## 3. Orquestração (nova conversa)

### Passo 0: só o orquestrador, em sequência, antes de criar os agentes
1. `git add -A && git commit -m "Home pt-BR + recon tools"` (pergunte ao usuário antes).
2. Mover `Header` e `Footer` para `src/app/layout.tsx` e trocar os `href="#"` pelas rotas pt-BR acima. Isso vale para a navegação, o menu lateral e o rodapé.
3. Extrair os dados compartilhados de `content.ts` para `src/lib/data/{listings,agents,posts,cities}.ts`, cada item com `slug` (use os mesmos slugs do original) e as tags de cidade/corretor. Ajustar os imports da Home.
4. Subir **um único** `npm run dev -- -p 3123`. Os agentes **não** sobem outro servidor: dois `next dev` na mesma pasta brigam pelo `.next`.

### Regras para os agentes de página (rodam em paralelo)
- **Arquivos de cada um:** `src/app/<rota>/**`, `src/components/pages/<pagina>/**` e `src/lib/content/<pagina>.ts`.
- **Não editar** arquivos compartilhados: `globals.css`, `motion.tsx`, `ui.tsx`, `icons.tsx`, `sections/*`, `lib/data/*` e `layout.tsx`. Se precisar mudar algo neles, pedir ao orquestrador. Para criar uma variação, copiar o componente para a pasta da página.
- Imagens novas: `node tools/recon/images.mjs <url>` (baixa e reduz automaticamente, sem duplicar).
- Ícones novos: criar em `src/components/pages/<pagina>/icons.tsx`. Use `tools/recon/extract-icons.reference.mjs` como modelo, porque ele resolve o `stroke-width` real.
- **Antes de dizer que terminou:**
  - `npx tsc --noEmit` e `npm run lint` limpos;
  - `node tools/recon/compare.mjs <url original> http://localhost:3123/<rota> out/<pagina>` e conferir as imagens;
  - testar hovers e interações.

Divisão sugerida, com 7 agentes de código:

| Agente | Páginas |
|---|---|
| A1 | `/imoveis` |
| A2 | `/imoveis/[slug]` |
| A3 | `/cidades/[slug]` |
| A4 | `/corretores` + `/corretores/[slug]` |
| A5 | `/sobre` |
| A6 | `/contato` + `not-found` |
| A7 | `/blog` + `/blog/[slug]` |

### Agente Figma (um só, em paralelo)
- Ferramentas: Figma MCP (`create_session`, `generate_figma_design`, `use_figma`, `get_screenshot`). Carregue as skills `figma:figma-use` e `figma:figma-generate-design` antes de chamar `use_figma`.
- **Recomendado:** capturar as **páginas locais já prontas** (`http://localhost:3123/<rota>`) assim que cada agente terminar. Elas já estão em pt-BR e foram conferidas com o original, então não precisa traduzir no Figma. Alternativa: capturar o original e traduzir, como foi feito na Home.
- Como capturar: `generate_figma_design` só com `fileKey` → pega o `captureId` → `node tools/recon/capture-figma.mjs <url> <captureId>` → consulta o `captureId` até `completed` → renomeia a página e o frame (ex.: "Imóveis — Desktop 1440").
- Correções que foram necessárias na Home e devem se repetir:
  - **Fonte:** trocar "Inter Variable" por "Inter" (mesmo estilo) em todos os nós de texto. O Figma não tem a variável.
  - **Texto cortado:** labels e botões em auto-layout com largura fixa cortam o texto traduzido. Nos ancestrais FIXED que estouram, setar `layoutSizingHorizontal = 'HUG'`. Os frames de borda (`"Text"` absolutos com stroke) devem acompanhar a largura do pai.
  - **Linhas de grade:** as que têm opacidade 0 somem, e as do meio vão parar nas bordas. Reposicionar em `x = 1/3` e `2/3` do container (494 e 945 em 1440px).
  - **Animações no meio:** elementos capturados no meio da animação. O script já rola a página inteira antes de capturar. Se algo sair deslocado (ex.: escala), corrigir na mão comparando com o original.
  - **Logos "fit-text":** o "Luxterra" grande é um `<svg><foreignObject>` e não é capturado. Recriar como texto Inter com tamanho = largura × 0,2837, letter-spacing −7% e line-height 76%.
  - **Texto letra a letra:** texto animado por caractere vem com um nó por letra. Substituir por um nó de texto só.
- Validar com `get_screenshot` lado a lado com o site (o padrão de script está em `tools/recon/compare.mjs`).

---

## 4. Ferramentas (`tools/recon`, rode `npm i` lá dentro: Playwright 1.56.1, usa o chromium-1194 em cache)

| Script | Uso |
|---|---|
| `dump-dom.mjs <url> <out>` | Árvore de layout + tipografia computada por bloco |
| `animations.mjs <url>` | Animações de entrada no load (JSON embutido do Framer), estado inicial dos reveals ao rolar e amostragem de tempo |
| `hover.mjs <url>` | O que muda no hover de cada link e botão |
| `images.mjs <url>` | Baixa as imagens do original para `public/images` e reduz o tamanho |
| `compare.mjs <orig> <local> <prefixo>` | Prints lado a lado, em fatias de 900px |
| `capture-figma.mjs <url> <captureId>` | Captura a página para o Figma |

## 5. Animações medidas no original (padrão do site)

**Ao rolar (na primeira vez que entra na tela):**

| O quê | Como anima | Implementação |
|---|---|---|
| Textos e blocos | Fade de ~0,9s, ease-out | `Reveal` |
| Rótulo de seção | Atraso de 0,2s quando acompanha título centralizado | `Reveal delay={0.2}` |
| Cards | Sobem 40px com mola | `Reveal kind="spring" y={40}` |
| Depoimentos | Entram 40px pela direita, 0,8s, ease-in-out | `Reveal kind="slide" x={40}` |

**Hover:**

| Elemento | Efeito |
|---|---|
| Links | O texto rola para baixo |
| Botões | O texto rola para cima (`TextRoll`) |
| Imagem do imóvel | Zoom de 1,02 |
| Imagem do blog | Zoom de 1,05 |
| Imagem da cidade | Zoom de 1,03 |
| Ícones sociais | Escala 1,1 |
| Logo e "Menu" | Opacidade 0,8 |

**Ligadas à rolagem:**

| Elemento | Efeito |
|---|---|
| Faixa de imagem | Escala de 1,2 para 1 |
| CTA | Escala de 1 para 1,05 |
| Foto do "Por que nós" | Escala de 1 para 1,05 |
| Logo do rodapé | Opacidade de 0 para 1 e sobe 40px até 0 |

**Load:** o hero entra em sequência com atrasos de 0,3 a 0,9s, tween de 1s com ease `[0.68,0,0,0.99]` (ver `hero.tsx`).

Em páginas novas, **meça antes** com `animations.mjs` e `hover.mjs`, sem supor que são iguais às da Home.

## 6. Tradução (manter consistente)
- Não traduzir: Luxterra, nomes de pessoas e cidades, endereços. Preços ficam em `$` (aluguel: `$4,200/mês`).
- `sq.ft` vira m² (÷ 10,764, arredondado). "3 Bed / 2.5 Bath" vira "3 Quartos / 2,5 Banheiros". Datas no formato "10 jul 2024".
- Termos: Listings = Imóveis · Agents = Corretores · For sale/For rent = À venda/Para alugar · Load More = Carregar mais · Get in touch = Fale conosco · More info = Saiba mais · View listings = Ver imóveis · Apartment/Townhouse/Condo = Apartamento/Sobrado/Condomínio.
- Se o português quebrar uma linha a mais que o original, **encurte o texto**. Não mexa no layout.

## 7. Pendências conhecidas
- Responsivo: só o desktop (≥1024px) está fiel. Tablet e mobile apenas empilham, não seguem os breakpoints do Framer (810px e 1200px).
- As imagens são do template do Framer. Conferir a licença antes de publicar.
- Opcional: adicionar o logo grande do rodapé no frame Home do Figma.
