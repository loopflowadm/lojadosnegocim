import React from 'react';
import { Heart, ShoppingCart, Eye, Star } from '@phosphor-icons/react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    addToCart, 
    toggleFavorite, 
    isFavorite, 
    setSelectedProductForModal 
  } = useShop();

  const isFav = isFavorite(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, product.colors[0]?.name, 1);
  };

  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <article 
      className="product-card" 
      onClick={() => setSelectedProductForModal(product)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setSelectedProductForModal(product);
        }
      }}
      aria-label={`Ver detalhes de ${product.name}`}
    >
      {/* Topo da Imagem com Badges e Favorito */}
      <div className="product-image-box">
        {product.badge && (
          <span className={`product-badge badge-${product.badgeType || 'orange'}`}>
            {product.badge}
          </span>
        )}

        <button 
          className={`btn-fav-card ${isFav ? 'active' : ''}`}
          onClick={handleFavClick}
          aria-label={isFav ? `Remover ${product.name} dos favoritos` : `Favoritar ${product.name}`}
          title="Favoritar"
        >
          <Heart size={22} weight={isFav ? "fill" : "bold"} className={isFav ? 'heart-filled' : ''} />
        </button>

        <img 
          src={product.image} 
          alt={product.name}
          className="product-thumb"
          loading="lazy"
        />

        <div className="product-overlay-action">
          <span className="btn-peek">
            <Eye size={18} weight="bold" />
            <span>Espiar Detalhes</span>
          </span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="product-info-box">
        <div className="product-cat-rating">
          <span className="product-category-name">{product.categoryLabel}</span>
          <div className="product-rating-inline">
            <Star size={13} weight="fill" className="star-icon-filled" />
            <span>{product.rating}</span>
            <span className="product-review-count">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="product-name">{product.name}</h3>

        <p className="product-short-desc">{product.shortDescription}</p>

        {/* Cores disponíveis */}
        {product.colors && product.colors.length > 0 && (
          <div className="product-color-dots">
            {product.colors.slice(0, 4).map((c, i) => (
              <span 
                key={i} 
                className="color-dot" 
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="color-more">+{product.colors.length - 4}</span>
            )}
          </div>
        )}

        {/* Bloco de Preço e CTA */}
        <div className="product-footer-row">
          <div className="product-price-block">
            {product.originalPrice && (
              <span className="product-original-price">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <div className="product-current-price">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
            <span className="product-pix-tip">5% off no Pix</span>
          </div>

          <button 
            className="btn-add-quick"
            onClick={handleQuickAdd}
            aria-label={`Adicionar ${product.name} ao carrinho`}
            title="Adicionar à sacola"
          >
            <ShoppingCart size={19} weight="bold" />
            <span className="hide-mobile">Adicionar</span>
          </button>
        </div>
      </div>
    </article>
  );
};
