# Loja dos Negocim — Design System

> **Versão:** 1.0.0  
> **Status:** Ativo / Fonte de Verdade Visual  
> **Conceito:** "Uma loja de coisas legais, úteis, curiosas, divertidas e diferentes."

---

## 1. Conceito da Marca

A **Loja dos Negocim** não é "mais uma loja de impressão 3D". A impressão 3D e manufatura aditiva são as tecnologias de produção de ponta dos bastidores, mas para o cliente final, a loja é um **espaço de descoberta, utilidade e encantamento**. 

É a loja do objeto que resolve um problema diário do qual você nem tinha se dado conta, do presente inesquecível para um amigo geek, do brinquedo tátil que relaxa a mente, do suporte perfeito para o café da manhã ou da peça decorativa que vira assunto na sala de estar.

---

## 2. Personalidade

- **Curiosa & Divertida:** Instiga o usuário a explorar ("O que será que esse negocim faz?").
- **Próxima & Calorosa (Brasilidade):** Usa linguagem informal, inteligente e natural do dia a dia brasileiro, sem jargões corporativos empostados.
- **Autêntica & Maker:** Valoriza o processo físico, a textura, o encaixe perfeito e a criatividade.
- **Confiável & Comercial:** O visual é divertido, mas a transação, a clareza de preços, prazos e navegação são 100% profissionais e seguros.

---

## 3. Princípios de Design

1. **O Produto é o Protagonista:** Imagens nítidas, iluminação de produto real, sombras de contato naturais e valorização das formas físicas.
2. **Anti-IA & Anti-Template Genérico:** Proibido o visual "SaaS genérico" com fundo roxo/azul gradiente, cards brancos flutuantes idênticos com blur excessivo e ilustrações vazias.
3. **Ritmo Editorial & Comercial:** Alternância inteligente de densidade de informação — vitrines compactas de produtos rápidos mescladas com blocos editoriais imersivos de categorias/universos.
4. **Microinterações com Propósito:** Animações sutis e táteis (clique físico, feedback ao favoritar, gaveta suave do carrinho, badges com peso visual).
5. **Acessibilidade e Desempenho:** Contraste WCAG AAA/AA em textos, navegação por teclado, foco visível e carregamento instantâneo.

---

## 4. Público

- **Curiosos & Entusiastas de Design/Geek:** Pessoas que adoram gadgets, decorações únicas e itens que expressam sua personalidade.
- **Buscadores de Presentes:** Quem quer dar uma lembrança única, personalizada ou criativa que fuja do shopping convencional.
- **Pessoas Práticas & Organizadas:** Interessados em suportes, organizadores de cabos, ganchos inteligentes e soluções ergonômicas para casa/home office.
- **Público Sensorial & Pais:** Pessoas que buscam fidget toys articulados, peças antiestresse táteis e brinquedos educativos de montar/pintar.

---

## 5. Arquitetura Visual

A estética funde a energia do **Design Brasileiro Contemporâneo** com a praticidade de um **e-commerce moderno de alta conversão**:
- **Fundo Principal:** Off-white acolhedor (`#F9F8F5`), remetendo a papel craft e ateliê criativo, intercalado com blocos com contraste forte em Teal e Laranja.
- **Estrutura:** Layout modular com cantos harmonizados (`12px` a `20px` para cards, `8px` para tags/badges, pílulas suaves apenas em botões específicos de ação).
- **Profundidade:** Sombras táteis e suaves (`box-shadow: 0 4px 20px -2px rgba(13, 92, 91, 0.08)`), sem efeito de vidro artificial (glassmorphism desnecessário banido).

---

## 6. Cores

### 6.1. Cores Primárias da Marca
- **Laranja Negocim (Energia, Ação & Conversão):**  
  `--color-primary: #FF6B35;`  
  `--color-primary-hover: #E85924;`  
  `--color-primary-light: #FFF0EB;`
- **Teal Petróleo (Identidade Institucional & Confiança):**  
  `--color-secondary: #0D5C5B;`  
  `--color-secondary-dark: #073B3A;`  
  `--color-secondary-light: #E6F2F2;`

### 6.2. Cores de Apoio & Categorias (Universos)
- **Amarelo Criativo (Destaques & Ofertas):** `--color-accent-yellow: #FFB703;`
- **Terracota / Tijolo (De Montar / Kits):** `--color-cat-montar: #D9480F;`
- **Azul Índigo (Geek & Colecionáveis):** `--color-cat-geek: #2B6CB0;`
- **Verde Menta / Tátil (Sensorial & Fidgets):** `--color-cat-sensorial: #2A9D8F;`
- **Púrpura / Lavanda (De Pintar & Arte):** `--color-cat-pintar: #7B2CBF;`
- **Oliva Suave (Casa & Organização):** `--color-cat-casa: #588157;`

### 6.3. Neutros & Superfícies
- **Fundo da Página:** `--color-bg-main: #F9F8F5;`
- **Superfície Card / Elevada:** `--color-surface: #FFFFFF;`
- **Superfície Suave / Input:** `--color-surface-subtle: #F1EFEA;`
- **Borda Suave:** `--color-border: #E5E1D8;`
- **Borda Forte / Divisor:** `--color-border-strong: #CEC7B9;`
- **Texto Principal (Grafite Profundo):** `--color-text-main: #191C1D;`
- **Texto Secundário (Grafite Médio):** `--color-text-muted: #5C6467;`
- **Texto Esmaecido / Legendas:** `--color-text-subtle: #8C969A;`

---

## 7. Tipografia

- **Família Display & Títulos (Personalidade):** `Bricolage Grotesque`, com pesos `700`, `800` e `900`, tracking equilibrado (`-0.01em`) e altura de linha confortável (`1.15` a `1.25`) para valorizar o calor visual, formas expressivas e carisma brasileiro.
- **Família de Interface & Leitura (Usabilidade):** `Manrope`, com pesos `400`, `500`, `600` e `700`, com clareza cristalina para preços, descrições, especificações e navegação.
- **Escala Modular:**
  - **Display Hero:** `clamp(2.4rem, 4.5vw, 3.6rem)` / Line-height: `1.15`
  - **H1:** `2.25rem (36px)` / Line-height: `1.2`
  - **H2:** `1.75rem (28px)` / Line-height: `1.25`
  - **H3:** `1.25rem (20px)` / Line-height: `1.3`
  - **Body Large:** `1.125rem (18px)` / Line-height: `1.55`
  - **Body:** `1rem (16px)` / Line-height: `1.55`
  - **Small / UI:** `0.875rem (14px)` / Line-height: `1.45`
  - **Caption / Tag:** `0.75rem (12px)` / Line-height: `1.35` / Weight: `700`
  - **Preço Destaque:** `1.4rem (22px)` a `1.85rem (30px)` / Weight: `800`

---

## 7.1. Iconografia Oficial

- **Biblioteca Oficial:** `Phosphor Icons` (`@phosphor-icons/react`).
- **Família Única:** Todos os ícones da interface devem vir exclusivamente do Phosphor Icons para garantir unidade de traço, proporção e geometria.
- **Pesos e Aplicação:**
  - **Regular:** Elementos padrão de interface, badges sutis, metadados e navegação (18px a 20px).
  - **Bold:** Ações primárias, botões e controles diretos.
  - **Fill:** Estados selecionados/ativos (ex: item favoritado `Heart weight="fill"`, notas de avaliação `Star weight="fill"`).
- **Regra Anti-Emoji:** Proibido o uso de emojis na interface do usuário (botões, títulos, tags, menus ou rodapés). A comunicação visual deve ser sempre gráfica, limpa e profissional.

---

## 8. Grid & Container

- **Container Máximo Desktop:** `1200px` (faixa ótima de 1120px–1240px) com padding lateral de `24px` a `32px` (mobile: `16px`).
- **Sistema de Colunas Desktop:** 12 colunas com `gap: 24px` ou `gap: 32px`.
- **Grid de Produtos:**
  - Desktop: 4 colunas (`repeat(4, 1fr)`) balanceadas.
  - Tablet (768px a 1024px): 3 ou 2 colunas.
  - Mobile (< 768px): 2 colunas compactas com gap de `12px` para navegação fluida.

---

## 9. Espaçamento

- Escala de 4px:
  - `space-1: 4px`
  - `space-2: 8px`
  - `space-3: 12px`
  - `space-4: 16px`
  - `space-6: 24px`
  - `space-8: 32px`
  - `space-12: 48px`
  - `space-16: 64px`
  - `space-20: 80px`

---

## 10. Border Radius

- **Tags e Badges:** `6px` a `8px`
- **Botões e Inputs:** `10px` a `12px` (tátil e amigável)
- **Cards de Produto:** `16px`
- **Banners e Containers Maiores:** `20px` a `24px`
- **Pills de Status/Filtros:** `999px` (utilizado com parcimônia apenas para chips interativos)

---

## 11. Sombras

- **Sombra Baixa (Cards em repouso):** `0 2px 8px rgba(13, 92, 91, 0.05), 0 1px 2px rgba(0,0,0,0.03)`
- **Sombra Média (Hover & Modais):** `0 12px 28px -4px rgba(13, 92, 91, 0.12), 0 4px 10px -2px rgba(0,0,0,0.04)`
- **Sombra Destacada (Botões Flutuantes / CTA):** `0 8px 20px -2px rgba(255, 107, 53, 0.35)`

---

## 12. Botões

- **Primário (Laranja):** Fundo Laranja Vibrante, texto Branco, peso 700. Usado para "Adicionar ao Carrinho", "Comprar Agora", "Mandar Ideia".
- **Secundário (Teal):** Fundo Teal Petróleo, texto Branco, peso 600. Usado para "Ver Todos", "Filtrar".
- **Outline / Neutro:** Fundo transparente, borda sólida de 1.5px em `--color-border-strong`, texto grafite.
- **Ghost:** Fundo transparente com hover em `--color-surface-subtle`.
- **Efeito de Clique:** Micro-escala (`transform: scale(0.97)`) com transição de 120ms para sensação física.

---

## 13. Cards

- **Card Padrão de Produto:** Imagem centralizada com proporção 1:1 ou 4:5, fundo do produto neutro limpo, tag de categoria/status no topo, título claro, avaliação com estrelas douradas, bloco de preço (com "de/por" quando promocional) e botão tátil de adicionar rápido.
- **Card Destaque Editorial:** Card horizontal ou 2x2 com espaço para narrativa do "Por que você vai adorar esse negocim".

---

## 14. Inputs

- Fundo branco ou cinza suave com borda sutil de 1.5px.
- Focus com anel de 2px na cor Teal (`rgba(13, 92, 91, 0.25)`).
- Ícones de apoio (ex: lupa na busca, régua na personalização).

---

## 15. Navegação

- Navegação intuitiva com links diretos:
  - **Início**
  - **Negocins (Catálogo Completo)**
  - **Categorias (Universos)**
  - **Tenho uma Ideia (Personalizados)**
  - **Ofertas**

---

## 16. Header

- **Barra de Anúncio Superior (Topbar):** Mensagem de frete ou novidade com copy amigável ("📦 Enviamos para todo o Brasil | Compre 2 negocins e ganhe brinde surpresa").
- **Barra Principal:**
  - Esquerda: Logo oficial da Loja dos Negocim com elemento lúdico e tipografia acolhedora.
  - Centro: Barra de busca inteligente em tempo real com sugestões imediatas.
  - Direita: Links de categorias rápidas, botão de Favoritos com badge e Carrinho interativo com contador dinâmico.
- **Mobile:** Menu Drawer limpo, logo centralizado/à esquerda, busca rápida acessível com um toque e botão de carrinho fixo ou no header.

---

## 17. Hero

- **Manchete:** *"UM NEGOCIM PARA CADA IDEIA."*
- **Subtítulo:** *"Coisas úteis, divertidas e diferentes para sua casa, mesa de trabalho ou para presentear quem você gosta."*
- **Ações:** Botão Primário *"VER NEGOCINS"* + Botão Secundário *"TENHO UMA IDEIA"*.
- **Composição Visual:** Vitrine física com negocins reais em destaque (Dragão Articulado, Suporte de Celular Astronauta, Porta-Cabos Gatinho, Fidget Cube Tátil) com tags de preço e micro-detalhes de fabricação e material de alta durabilidade.

---

## 18. Categorias (Universos)

Apresentadas como universos visuais únicos com identidades e cores temáticas:
1. 🔧 **Negocim de Montar:** Kits de engrenagens, articulados e mecânicos.
2. 🎨 **Negocim de Pintar:** Miniaturas, estátuas DIY prontas para pintar com tintas acrílicas.
3. 🧠 **Negocim Sensorial:** Fidget toys, peças táteis antiestresse com movimento hipnótico.
4. 🏠 **Casa & Organização:** Suportes, organizadores de cabos, ganchos e utilitários criativos.
5. 👾 **Geek & Colecionáveis:** Suportes de controle, luminárias temáticas e itens de cultura pop.
6. 🎁 **Presentes & Lembrancinhas:** Itens curiosos que arrancam sorrisos.
7. ✨ **Personalizados (Tenho uma Ideia):** Feito sob encomenda para o seu projeto.

---

## 19. Produto (Página & Modal de Detalhes)

- **Galeria:** Foto principal com zoom suave + miniaturas em carrossel/grid.
- **Informações:**
  - Tag de categoria e badge de destaque ("Mais Vendido", "Novidade", "Feito no Brasil").
  - Nome do produto e nota de avaliação com quantidade de reviews reais.
  - Preço à vista com desconto Pix + parcelamento em até 3x sem juros.
  - Seletor de cores/acabamentos (ex: Preto Fosco, Laranja Neon, Verde Menta, Mármore Silk).
  - Seletor de quantidade e botão "Adicionar ao Carrinho" com feedback visual imediato.
  - Calculadora de Frete e Prazos com simulação de CEP.
  - Acordeão de detalhes: Dimensões, Material (PLA Biodegradável Premium / PETG), Cuidados e Garantia.

---

## 20. Carrinho (Drawer Lateral Deslizante)

- Acesso rápido sem sair da página atual.
- Lista de itens com foto miniatura, nome, cor escolhida, controle de quantidade (+ / -) e botão excluir.
- Barra de progresso para Frete Grátis ("Faltam apenas R$ X para frete grátis!").
- Cupom de desconto aplicável em tempo real.
- Resumo de valores (Subtotal, Descontos, Total).
- CTA vibrante: "FINALIZAR COMPRA NEGOCIM".

---

## 21. Checkout (Fluxo Claro e Sem Atrito)

- Etapas claras: Dados de Entrega -> Opção de Envio -> Pagamento (Pix / Cartão / Boleto).
- Resumo lateral fixo com os itens do pedido.
- Selos de segurança, proteção de dados e garantia de entrega.

---

## 22. Estados Vazios (Empty States)

- **Carrinho Vazio:** Ilustração amigável + *"Seu carrinho ainda está sem nenhum negocim."* + Botão *"Explorar Negocins Legais"*.
- **Busca Sem Resultados:** *"Não achamos nenhum negocim com esse nome... Que tal pedir na seção 'Tenho uma Ideia'?"* + Sugestões de produtos populares.
- **Favoritos Vazios:** *"Você ainda não guardou nenhum negocim favorito."*

---

## 23. Loading States

- Skeleton screens refinados que espelham a estrutura exata dos cards de produto e textos (fundo pulsante suave em `#EFECE6`), evitando spinners genéricos no meio da tela.

---

## 24. Responsividade

- **Mobile First:** Totalmente adaptado para polegares (touch targets com mínimo de `44px`).
- Breakpoints oficiais:
  - `xs`: 360px (mobile pequeno)
  - `sm`: 640px (mobile grande)
  - `md`: 768px (tablets)
  - `lg`: 1024px (laptops)
  - `xl`: 1280px (desktop)
  - `2xl`: 1536px (telas ultra-wide com container contido em 1280px)

---

## 25. Microinterações

- Efeito de elevação suave em cards de produto (`translateY(-4px)`).
- Animação de explosão de confetes sutis ao concluir um pedido ou adicionar à sacola.
- Efeito de pulsar suave no badge do carrinho ao adicionar um novo item.
- Transições de cor e borda de 150ms a 200ms `ease-out`.

---

## 26. Acessibilidade

- Contraste de cor mínimo de 4.5:1 para texto normal e 3:1 para texto grande.
- Atributos `aria-label` em botões de ícone (fechar, carrinho, favoritos, busca).
- Teclado: navegação sequencial por Tab e foco visível com outline contrastante.
- Todas as imagens com texto alternativo `alt` descritivo do produto físico.

---

## 27. Regras para Evitar Aparência Genérica de IA

1. **Nunca use copy clichê de marketing de IA:** Evite "Revolucione seu dia a dia", "Potencialize seus resultados", "Tecnologia de ponta ao seu alcance". Use: *"Aquele suporte que não deixa seu celular cair na cara de noite"*, *"O dragãozinho que você vai ficar mexendo durante a reunião"*.
2. **Sem fundos de degradê roxo/azul-ciano com esferas flutuantes.**
3. **Sem repetição monótona de 10 cards idênticos em fila.** As seções têm ritmos visuais diferentes: carrossel em destaque, grid 2x2 com história de produto, vitrine temática por cores.
4. **Sem botões transparentes com blur excessivo sobre fundos ilegíveis.**
5. **Comunicação natural em português brasileiro.**

---

## 28. Exemplos de Uso & Tom de Voz

- **Badges:** `🔥 Mais Vendido`, `✨ Lançamento`, `🎁 Ótimo p/ Presente`, `🧠 Tátil Relaxante`.
- **Botões:** `Adicionar ao carrinho`, `Ver todos os negocins`, `Quero meu negocim personalizado`, `Calcular Frete`.
- **Copy de Rodapé:** *"Feito com criatividade e precisão, um negocim de cada vez. Feito no Brasil."*
