import React, { useState, useMemo } from 'react';
import { 
  SquaresFour, 
  Fire, 
  Heart, 
  Tag, 
  SlidersHorizontal,
  X,
  Lightbulb,
  Sparkle
} from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/categories';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductCatalog.css';

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'rating';

export const ProductCatalog: React.FC = () => {
  const { 
    products, 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    favorites,
    setIsIdeaModalOpen
  } = useShop();

  const [sortOption, setSortOption] = useState<SortOption>('relevance');
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Filtragem e Ordenação
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filtro de Categoria
      if (selectedCategory !== 'todos') {
        if (selectedCategory === 'ofertas') {
          if (!product.isOffer && !product.originalPrice) return false;
        } else if (product.category !== selectedCategory) {
          return false;
        }
      }

      // Filtro de Busca
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query) || product.fullDescription.toLowerCase().includes(query);
        const matchesCat = product.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      // Filtros rápidos
      if (onlyOffers && !product.isOffer && !product.originalPrice) return false;
      if (onlyBestSellers && !product.isBestSeller) return false;
      if (onlyFavorites && !favorites.includes(product.id)) return false;

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0; // relevance / default
    });
  }, [products, selectedCategory, searchQuery, onlyOffers, onlyBestSellers, onlyFavorites, favorites, sortOption]);

  const currentCategoryData = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];

  const clearAllFilters = () => {
    setSelectedCategory('todos');
    setSearchQuery('');
    setOnlyOffers(false);
    setOnlyBestSellers(false);
    setOnlyFavorites(false);
    setSortOption('relevance');
  };

  return (
    <section id="catalogo-section" className="catalog-section">
      <div className="container">
        {/* Cabeçalho do Catálogo */}
        <div className="catalog-top-header">
          <div>
            <div className="catalog-title-wrap">
              <h2 className="catalog-main-title">
                {searchQuery ? (
                  <>Resultados para "<strong>{searchQuery}</strong>"</>
                ) : onlyFavorites ? (
                  <>Meus <strong>Negocins Favoritos</strong> ({favorites.length})</>
                ) : (
                  <>{currentCategoryData.name}</>
                )}
              </h2>
              <span className="catalog-item-count">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'negocim' : 'negocins'}
              </span>
            </div>
            <p className="catalog-desc-tagline">
              {currentCategoryData.description}
            </p>
          </div>

          {/* Seletor de Ordenação */}
          <div className="catalog-sort-box">
            <SlidersHorizontal size={16} weight="bold" className="sort-icon" />
            <label htmlFor="sort-select" className="sr-only">Ordenar por</label>
            <select 
              id="sort-select"
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="sort-select"
            >
              <option value="relevance">Destaques da Loja</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="rating">Melhor Avaliados</option>
            </select>
          </div>
        </div>

        {/* Barra de Filtros Rápidos */}
        <div className="quick-filters-row">
          <div className="quick-filter-scroll">
            <button 
              className={`filter-pill ${selectedCategory === 'todos' && !onlyOffers && !onlyBestSellers && !onlyFavorites ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory('todos');
                setOnlyOffers(false);
                setOnlyBestSellers(false);
                setOnlyFavorites(false);
              }}
            >
              <SquaresFour size={16} weight="regular" />
              <span>Ver Todos</span>
            </button>

            <button 
              className={`filter-pill ${onlyBestSellers ? 'active' : ''}`}
              onClick={() => setOnlyBestSellers(!onlyBestSellers)}
            >
              <Fire size={16} weight={onlyBestSellers ? 'fill' : 'regular'} className="text-orange" />
              <span>Mais Vendidos</span>
            </button>

            <button 
              className={`filter-pill ${onlyOffers ? 'active' : ''}`}
              onClick={() => setOnlyOffers(!onlyOffers)}
            >
              <Tag size={16} weight={onlyOffers ? 'fill' : 'regular'} className="text-yellow" />
              <span>Em Oferta</span>
            </button>

            <button 
              className={`filter-pill ${onlyFavorites ? 'active' : ''}`}
              onClick={() => setOnlyFavorites(!onlyFavorites)}
            >
              <Heart size={16} weight={onlyFavorites ? 'fill' : 'regular'} className="text-red" />
              <span>Favoritos ({favorites.length})</span>
            </button>
          </div>

          {(searchQuery || selectedCategory !== 'todos' || onlyOffers || onlyBestSellers || onlyFavorites) && (
            <button className="clear-filters-btn" onClick={clearAllFilters}>
              <X size={14} weight="bold" />
              <span>Limpar Filtros</span>
            </button>
          )}
        </div>

        {/* Grid de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="catalog-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Estado Vazio Amigável com Call-to-Action */
          <div className="catalog-empty-state">
            <div className="empty-icon-box">
              <Sparkle size={36} weight="regular" />
            </div>
            <h3 className="empty-title">Nenhum negocim encontrado por aqui</h3>
            <p className="empty-desc">
              Não encontramos nenhum produto com esses filtros ou termo de busca. Mas a boa notícia é que fazemos negocins sob encomenda.
            </p>
            <div className="empty-actions">
              <button className="btn btn-secondary" onClick={clearAllFilters}>
                Ver Todos os Negocins
              </button>
              <button className="btn btn-primary" onClick={() => setIsIdeaModalOpen(true)}>
                <Lightbulb size={18} weight="bold" />
                <span>Pedir Negocim Personalizado</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
