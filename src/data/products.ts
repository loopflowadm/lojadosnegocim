import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'dragao-articulado-lunar',
    name: 'Dragão Imperial Articulado Lunar',
    category: 'sensorial',
    categoryLabel: 'Sensorial & Fidget',
    price: 39.90,
    originalPrice: 49.90,
    badge: 'Mais Vendido',
    badgeType: 'orange',
    rating: 4.9,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Dragão com mais de 30 vértebras articuladas que se movem suavemente na mão.',
    fullDescription: 'O clássico dos negocins! Este dragão possui articulações impressas em peça única (sem emendas ou colas frágeis), permitindo que ele deslize pelas mãos com uma sensação tátil hipnótica e extremamente relaxante. Perfeito para manter na mesa de trabalho, estante ou para aliviar a ansiedade durante reuniões.',
    dimensions: '45 cm (comprimento esticado) x 4 cm (largura)',
    material: 'PLA Silk Biopolímero de Alta Densidade (Brilho Metálico Suave)',
    weight: '110g',
    leadTime: 'Pronta entrega ou até 2 dias úteis de produção artesanal',
    colors: [
      { name: 'Ouro Seda', hex: '#D4AF37', inStock: true },
      { name: 'Roxo Galáxia', hex: '#4A154B', inStock: true },
      { name: 'Verde Esmeralda', hex: '#0D5C5B', inStock: true },
      { name: 'Preto Ônix', hex: '#1C1C1E', inStock: true }
    ],
    isBestSeller: true,
    isFeatured: true,
    isOffer: true,
    highlightBenefit: 'Sensação tátil antiestresse e movimento fluido contínuo'
  },
  {
    id: 'porta-cabo-gatinho',
    name: 'Porta-Cabo Gatinho Preguiçoso',
    category: 'casa',
    categoryLabel: 'Casa & Organização',
    price: 16.90,
    badge: 'Super Útil',
    badgeType: 'green',
    rating: 5.0,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Gatinho simpático que segura seu cabo de celular na borda da mesa.',
    fullDescription: 'Chega de cabo de carregador caindo atrás da mesa ou no chão toda vez que você desconecta o celular. O gatinho abraça o cabo com as patinhas e mantém a ponta sempre ao alcance da sua mão com muito charme.',
    dimensions: '3.5 x 3 x 4 cm',
    material: 'PLA Biodegradável Atóxico',
    weight: '25g',
    leadTime: 'Pronta entrega',
    colors: [
      { name: 'Laranja Garfield', hex: '#FF6B35', inStock: true },
      { name: 'Branco Neve', hex: '#F8F9FA', inStock: true },
      { name: 'Preto Sombrio', hex: '#212529', inStock: true }
    ],
    isBestSeller: true,
    isFeatured: true,
    highlightBenefit: 'Acaba de vez com cabos caídos atrás da mesa'
  },
  {
    id: 'suporte-celular-astronauta',
    name: 'Suporte de Celular Astronauta Lunar',
    category: 'geek',
    categoryLabel: 'Geek & Colecionáveis',
    price: 34.90,
    originalPrice: 42.00,
    badge: 'Destaque Geek',
    badgeType: 'teal',
    rating: 4.9,
    reviewCount: 84,
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Base estável e esculpida que segura smartphones na vertical e horizontal.',
    fullDescription: 'Um astronauta flutuando sobre uma cratera lunar que serve de apoio perfeito para o seu smartphone. O ângulo de visualização foi calculado para chamadas de vídeo, leitura de receitas na cozinha ou assistir vídeos sem reflexos.',
    dimensions: '11 x 8 x 9.5 cm',
    material: 'PLA Matte Premium de Alta Resistência',
    weight: '85g',
    leadTime: 'Pronta entrega',
    colors: [
      { name: 'Branco Espacial & Ouro', hex: '#F0EFEB', inStock: true },
      { name: 'Cinzento Lunar', hex: '#8D99AE', inStock: true },
      { name: 'Preto Cósmico', hex: '#1B263B', inStock: true }
    ],
    isFeatured: true,
    isOffer: true,
    highlightBenefit: 'Ângulo ergonômico ideal para chamadas e vídeos'
  },
  {
    id: 'engrenagens-planetarias-diy',
    name: 'Kit Mecânico Engrenagens Planetárias',
    category: 'montar',
    categoryLabel: 'Negocim de Montar',
    price: 59.90,
    badge: 'Kit Educativo',
    badgeType: 'orange',
    rating: 4.9,
    reviewCount: 53,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Monte seu próprio sistema de transmissão mecânica funcional sem cola.',
    fullDescription: 'Para quem adora entender como as coisas funcionam! Este kit vem com todas as engrenagens soltas, eixo central e manivela de giro suave. Os encaixes são projetados com tolerância milimétrica (0.15mm), permitindo montagem e desmontagem quantas vezes quiser.',
    dimensions: '14 x 14 x 5 cm',
    material: 'PETG Industrial Durável',
    weight: '160g',
    leadTime: '1 a 2 dias úteis',
    colors: [
      { name: 'Laranja Mecânico & Grafite', hex: '#FF6B35', inStock: true },
      { name: 'Teal & Amarelo', hex: '#0D5C5B', inStock: true }
    ],
    isFeatured: true,
    highlightBenefit: 'Encaixe de precisão mecânica sem cola ou parafusos'
  },
  {
    id: 'miniatura-samurai-pintar',
    name: 'Escultura Ronin Samurai (Kit de Pintura)',
    category: 'pintar',
    categoryLabel: 'Negocim de Pintar',
    price: 44.90,
    originalPrice: 52.90,
    badge: 'Pronto p/ Pintar',
    badgeType: 'yellow',
    rating: 4.8,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Escultura rica em detalhes com primer fosco cinza especial para tintas.',
    fullDescription: 'Miniatura detalhada em alta resolução de camadas (0.08mm). Já enviamos a peça lavada, curada e revestida com uma camada uniforme de primer profissional que aceita qualquer tinta acrílica, guache ou marcadores Posca.',
    dimensions: '16 cm (altura) x 8 cm (base)',
    material: 'Resina de Alta Definição / PLA Ultra Detail',
    weight: '95g',
    leadTime: 'Pronta entrega',
    colors: [
      { name: 'Cinza Primer Fosco', hex: '#6C757D', inStock: true },
      { name: 'Branco Canvas', hex: '#E9ECEF', inStock: true }
    ],
    isOffer: true,
    highlightBenefit: 'Camada de primer profissional inclusa para pintura perfeita'
  },
  {
    id: 'vaso-espiral-origami',
    name: 'Vaso Escultural Espiral Origami',
    category: 'casa',
    categoryLabel: 'Casa & Organização',
    price: 49.90,
    badge: 'Design Exclusivo',
    badgeType: 'teal',
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Geometria paramétrica inspirada em dobras de papel para flores secas.',
    fullDescription: 'Um vaso que parece uma escultura de museu de arte moderna. A estrutura espiralada reflete a luz ambiente criando sombras dinâmicas conforme o horário do dia. Ideal para flores secas, lavandas, pincéis ou como peça solitária de centro de mesa.',
    dimensions: '20 cm (altura) x 12 cm (diâmetro)',
    material: 'PLA Seda Fosco de Origem Vegetal',
    weight: '140g',
    leadTime: 'Pronta entrega',
    colors: [
      { name: 'Terracota Quente', hex: '#C85A32', inStock: true },
      { name: 'Verde Sálvia', hex: '#778873', inStock: true },
      { name: 'Off-White Areia', hex: '#EAE6DF', inStock: true },
      { name: 'Preto Grafite', hex: '#2B2D42', inStock: true }
    ],
    isBestSeller: true,
    highlightBenefit: 'Geometria escultural paramétrica que transforma o ambiente'
  },
  {
    id: 'polvo-emocoes-flex',
    name: 'Polvo Articulado Polvo-Flex',
    category: 'sensorial',
    categoryLabel: 'Sensorial & Fidget',
    price: 24.90,
    badge: 'Popular',
    badgeType: 'green',
    rating: 4.9,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Tentáculos com juntas articuladas que balançam com extrema leveza.',
    fullDescription: 'Os tentáculos são compostos por dezenas de elos microscópicos que ondulam como água quando você o segura. É o favorito absoluto de crianças e adultos em mesas de escritório.',
    dimensions: '9 cm (diâmetro) x 5 cm (altura)',
    material: 'PLA Premium Flexível e Resistente',
    weight: '45g',
    leadTime: 'Pronta entrega',
    colors: [
      { name: 'Laranja Citrus', hex: '#FF6B35', inStock: true },
      { name: 'Azul Turquesa', hex: '#2A9D8F', inStock: true },
      { name: 'Amarelo Sol', hex: '#FFB703', inStock: true },
      { name: 'Roxo Lavanda', hex: '#9B5DE5', inStock: true }
    ],
    isBestSeller: true,
    highlightBenefit: 'Tentáculos com movimento hipnótico e textura tátil'
  },
  {
    id: 'karate-apoio-livros',
    name: 'Par de Aparadores de Livro Karatê Ninja',
    category: 'presentes',
    categoryLabel: 'Presentes & Curiosidades',
    price: 54.90,
    originalPrice: 65.00,
    badge: 'Ideia de Presente',
    badgeType: 'orange',
    rating: 4.8,
    reviewCount: 38,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Ilusão de ótica divertida de um lutador quebrando sua pilha de livros ao meio.',
    fullDescription: 'Um lado tem o mestre de artes marciais dando um golpe no ar, e do outro a base que segura os livros com firmeza total. Feito com base antiderrapante emborrachada para não escorregar na estante.',
    dimensions: '15 x 12 x 10 cm (cada lado)',
    material: 'PLA Maciço com Pés Emborrachados de Silicone',
    weight: '220g',
    leadTime: '1 dia útil',
    colors: [
      { name: 'Preto Ninja Fosco', hex: '#1A1A1A', inStock: true },
      { name: 'Branco Karatê', hex: '#EDEDED', inStock: true }
    ],
    isOffer: true,
    highlightBenefit: 'Pés emborrachados que seguram até 15 livros pesados'
  }
];
