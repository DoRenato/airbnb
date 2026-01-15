# Airbnb (Clone UI) — Next.js

Projeto de estudo que recria partes da interface do Airbnb usando **Next.js (App Router)**, **React**, **TypeScript** e **Tailwind CSS**.

A aplicação consome um endpoint público para listar categorias (ícones) e acomodações, além de uma página de detalhes por `slug`.

## Demo local

- Página inicial: lista de acomodações e navegação horizontal de categorias
- Página de detalhes: `/[slug]`

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS** (via PostCSS)
- **Swiper** (carrossel/abas horizontais)
- **@tabler/icons-react** (ícones)

## Fonte de dados

Os dados são buscados via `fetch` em:

- `https://web.codans.com.br/airbnb`

A tipagem do payload está em `types/AirbnbDados.ts`.

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

- `http://localhost:3000`

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera build de produção
- `npm run start` — inicia o servidor em modo produção (após build)
- `npm run lint` — executa o ESLint

## Estrutura de pastas (resumo)

- `app/`
  - `page.tsx` — home (Server Component): carrega dados e renderiza widgets
  - `[slug]/page.tsx` — detalhes da acomodação por `slug`
  - `layout.tsx` — layout raiz e metadados
- `widgets/` — blocos de UI (barra superior, busca, navegação, galeria, etc.)
- `components/` — componentes menores reutilizáveis (ex.: `Logo`, `BotaoIcone`, `Acomodacao`)
- `utils/api.ts` — funções de acesso aos dados (`fetchData`, `fetchDataBySlug`)
- `types/` — interfaces TypeScript do payload

## Observações

- O domínio de imagens remoto (`web.codans.com.br`) está liberado em `next.config.ts` para uso com `next/image`.
- Não há autenticação e não há backend próprio neste repositório; o foco é UI e consumo de dados.
