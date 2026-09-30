import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'todos',
    name: 'Todos os Negocins',
    shortName: 'Todos',
    tagline: 'O catálogo completo de coisas legais',
    iconName: 'SquaresFour',
    themeColor: '#FF6B35',
    bgColor: '#FFF0EB',
    borderColor: '#FFD9CC',
    description: 'Navegue por todas as nossas criações, invenções e utilitários.'
  },
  {
    id: 'sensorial',
    name: 'Negocim Sensorial',
    shortName: 'Sensorial & Fidgets',
    tagline: 'Peças articuladas, táteis e antiestresse',
    iconName: 'Brain',
    badge: 'Popular',
    themeColor: '#2A9D8F',
    bgColor: '#E6FFFA',
    borderColor: '#B2F5EA',
    description: 'Dragões articulados, fidget toys biomecânicos e brinquedos táteis com movimento fluido que relaxam a mente.'
  },
  {
    id: 'casa',
    name: 'Casa & Organização',
    shortName: 'Casa & Mesa',
    tagline: 'Utilitários inteligentes para seu dia a dia',
    iconName: 'House',
    badge: 'Útil',
    themeColor: '#407B53',
    bgColor: '#EBF5EE',
    borderColor: '#C3E6CB',
    description: 'Suportes de celular que não tombam, organizadores de cabos, vasos geométricos e ganchos inteligentes.'
  },
  {
    id: 'montar',
    name: 'Negocim de Montar',
    shortName: 'De Montar',
    tagline: 'Mecanismos, kits DIY e peças articuladas',
    iconName: 'Wrench',
    themeColor: '#D9480F',
    bgColor: '#FFE8CC',
    borderColor: '#FFD8A8',
    description: 'Kits de engrenagens planetárias, esqueletos colecionáveis e quebra-cabeças mecânicos com encaixes precisos.'
  },
  {
    id: 'pintar',
    name: 'Negocim de Pintar',
    shortName: 'De Pintar',
    tagline: 'Miniaturas e esculturas prontas para personalizar',
    iconName: 'PaintBrush',
    badge: 'Criativo',
    themeColor: '#7B2CBF',
    bgColor: '#F3E8FF',
    borderColor: '#E9D8FD',
    description: 'Peças com primer de alta adesão prontas para você soltar o artista interior com tintas acrílicas.'
  },
  {
    id: 'geek',
    name: 'Geek & Colecionáveis',
    shortName: 'Geek & Games',
    tagline: 'Itens de cultura pop, gamers e decoração',
    iconName: 'GameController',
    themeColor: '#2B6CB0',
    bgColor: '#EBF8FF',
    borderColor: '#BEE3F8',
    description: 'Suportes para controle de console, luminárias e réplicas colecionáveis ricas em detalhes.'
  },
  {
    id: 'presentes',
    name: 'Presentes & Curiosidades',
    shortName: 'Presentes',
    tagline: 'Objetos inesperados que arrancam sorrisos',
    iconName: 'Gift',
    themeColor: '#E63946',
    bgColor: '#FFEBEB',
    borderColor: '#FED7D7',
    description: 'Presentes diferentes e memoráveis que ninguém mais vai dar igual.'
  },
  {
    id: 'ofertas',
    name: 'Negocins em Oferta',
    shortName: 'Ofertas',
    tagline: 'Preços especiais por tempo limitado',
    iconName: 'Tag',
    badge: 'Desconto',
    themeColor: '#FF6B35',
    bgColor: '#FFF5F0',
    borderColor: '#FED7C3',
    description: 'Negocins selecionados com preços promocionais para você levar mais por menos.'
  }
];
