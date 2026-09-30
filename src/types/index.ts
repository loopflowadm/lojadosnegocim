export type CategoryId = 
  | 'todos'
  | 'montar'
  | 'pintar'
  | 'sensorial'
  | 'casa'
  | 'geek'
  | 'brinquedos'
  | 'presentes'
  | 'personalizados'
  | 'ofertas';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  tagline: string;
  iconName: string;
  badge?: string;
  themeColor: string;
  bgColor: string;
  borderColor: string;
  description: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeType?: 'orange' | 'teal' | 'yellow' | 'green';
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  shortDescription: string;
  fullDescription: string;
  dimensions: string;
  material: string;
  weight: string;
  leadTime: string;
  colors: ProductColor[];
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isOffer?: boolean;
  highlightBenefit: string;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  quantity: number;
}

export interface CustomIdeaRequest {
  name: string;
  email: string;
  phone: string;
  description: string;
  dimensions?: string;
  referenceUrl?: string;
  estimatedBudget?: string;
}
