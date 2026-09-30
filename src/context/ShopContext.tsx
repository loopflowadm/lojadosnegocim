import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Product, CartItem, CategoryId, CustomIdeaRequest } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  favorites: string[];
  selectedCategory: CategoryId;
  searchQuery: string;
  isCartOpen: boolean;
  isIdeaModalOpen: boolean;
  selectedProductForModal: Product | null;
  activeToast: { message: string; type?: 'success' | 'info' | 'favorite' } | null;
  
  // Ações
  setSelectedCategory: (cat: CategoryId) => void;
  setSearchQuery: (query: string) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsIdeaModalOpen: (open: boolean) => void;
  setSelectedProductForModal: (product: Product | null) => void;
  
  // Carrinho
  addToCart: (product: Product, colorName?: string, quantity?: number) => void;
  updateCartQuantity: (productId: string, color: string, delta: number) => void;
  removeFromCart: (productId: string, color: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  freeShippingProgress: number;
  freeShippingRemaining: number;
  
  // Favoritos
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  
  // Toast & Ideia
  showToast: (message: string, type?: 'success' | 'info' | 'favorite') => void;
  submitCustomIdea: (data: CustomIdeaRequest) => boolean;
}

const FREE_SHIPPING_THRESHOLD = 99.00;
const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isIdeaModalOpen, setIsIdeaModalOpen] = useState<boolean>(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [activeToast, setActiveToast] = useState<{ message: string; type?: 'success' | 'info' | 'favorite' } | null>(null);

  // Carregar do localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('negocim_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('negocim_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('negocim_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('negocim_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const showToast = (message: string, type: 'success' | 'info' | 'favorite' = 'success') => {
    setActiveToast({ message, type });
    setTimeout(() => {
      setActiveToast(null);
    }, 3200);
  };

  const addToCart = (product: Product, colorName?: string, quantity = 1) => {
    const chosenColor = colorName || (product.colors[0] ? product.colors[0].name : 'Padrão');
    
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.selectedColor === chosenColor
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, selectedColor: chosenColor, quantity }];
      }
    });

    showToast(`+ ${quantity}x "${product.name}" adicionado ao carrinho!`, 'success');
  };

  const updateCartQuantity = (productId: string, color: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId && item.selectedColor === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (productId: string, color: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedColor === color)));
    showToast('Negocim removido do carrinho.', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removido dos seus favoritos.', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Guardado nos seus favoritos.', 'favorite');
        return [...prev, productId];
      }
    });
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingProgress = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const submitCustomIdea = (_data: CustomIdeaRequest): boolean => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B35', '#0D5C5B', '#FFB703', '#2A9D8F']
      });
    } catch {
      // Confetti opcional
    }
    showToast('Ideia recebida com sucesso! Vamos analisar e responder em breve.', 'success');
    return true;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        favorites,
        selectedCategory,
        searchQuery,
        isCartOpen,
        isIdeaModalOpen,
        selectedProductForModal,
        activeToast,
        setSelectedCategory,
        setSearchQuery,
        setIsCartOpen,
        setIsIdeaModalOpen,
        setSelectedProductForModal,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
        freeShippingProgress,
        freeShippingRemaining,
        toggleFavorite,
        isFavorite,
        showToast,
        submitCustomIdea
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop deve ser usado dentro de um ShopProvider');
  }
  return context;
};
