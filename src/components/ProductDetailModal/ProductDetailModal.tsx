import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  Ruler, 
  Cube, 
  Clock, 
  Sparkle,
  Check,
  Lightning
} from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import './ProductDetailModal.css';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProductForModal, 
    setSelectedProductForModal, 
    addToCart, 
    toggleFavorite, 
    isFavorite,
    setIsCartOpen
  } = useShop();

  const product = selectedProductForModal;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors[0]?.name || 'Padrão'
  );
  const [quantity, setQuantity] = useState(1);
  const [cepInput, setCepInput] = useState('');
  const [shippingResult, setShippingResult] = useState<string | null>(null);

  if (!product) return null;

  const isFav = isFavorite(product.id);
  const images = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.image];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, quantity);
    setSelectedProductForModal(null);
    setIsCartOpen(true);
  };

  const handleCalcShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (cepInput.length >= 8) {
      setShippingResult('Chega em 3 a 5 dias úteis • R$ 14,90 (Grátis acima de R$ 99)');
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setSelectedProductForModal(null)}>
      <div 
        className="modal-dialog product-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button 
          className="modal-close-btn"
          onClick={() => setSelectedProductForModal(null)}
          aria-label="Fechar detalhes do produto"
        >
          <X size={20} weight="bold" />
        </button>

        <div className="product-modal-grid">
          {/* Galeria de Fotos */}
          <div className="product-modal-gallery">
            <div className="gallery-main-image-box">
              <img 
                src={images[activeImageIndex] || product.image} 
                alt={product.name}
                className="gallery-main-img"
              />
              {product.badge && (
                <span className={`gallery-badge badge-${product.badgeType || 'orange'}`}>
                  {product.badge}
                </span>
              )}
            </div>

            {images.length > 1 && (
              <div className="gallery-thumbs-row">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`gallery-thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Ver foto ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} miniatura ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações de Compra */}
          <div className="product-modal-info">
            <div className="product-meta-header">
              <span className="product-cat-pill">{product.categoryLabel}</span>
              <div className="product-rating-box">
                <Star size={15} weight="fill" color="#D9822B" />
                <span className="rating-score">{product.rating}</span>
                <span className="rating-reviews">({product.reviewCount} opiniões)</span>
              </div>
            </div>

            <h2 className="product-modal-title">{product.name}</h2>

            <div className="product-modal-prices">
              {product.originalPrice && (
                <span className="price-strike">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <div className="price-main-row">
                <span className="price-current">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="price-pix-badge">
                  <Lightning size={13} weight="fill" /> 5% off no Pix (R$ {(product.price * 0.95).toFixed(2).replace('.', ',')})
                </span>
              </div>
              <span className="price-installment">
                ou até 3x de R$ {(product.price / 3).toFixed(2).replace('.', ',')} sem juros
              </span>
            </div>

            <p className="product-modal-desc">{product.fullDescription}</p>

            {/* Seletor de Cores */}
            {product.colors && product.colors.length > 0 && (
              <div className="product-color-selector">
                <label className="selector-label">
                  Cor escolhida: <strong>{selectedColor}</strong>
                </label>
                <div className="color-options-row">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      className={`color-choice-btn ${selectedColor === c.name ? 'selected' : ''}`}
                      style={{ '--color-hex': c.hex } as React.CSSProperties}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                    >
                      <span className="color-preview-circle" style={{ backgroundColor: c.hex }}>
                        {selectedColor === c.name && <Check size={12} weight="bold" color="#FFFFFF" />}
                      </span>
                      <span className="color-choice-name">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantidade & Botões de Ação */}
            <div className="product-modal-actions">
              <div className="qty-selector">
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Diminuir quantidade"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <button className="btn btn-primary btn-modal-add" onClick={handleAddToCart}>
                <ShoppingCart size={18} weight="bold" />
                <span>Adicionar à Sacola</span>
              </button>

              <button 
                className={`btn-fav-detail ${isFav ? 'active' : ''}`}
                onClick={() => toggleFavorite(product.id)}
                aria-label="Favoritar este produto"
                title="Favoritar"
              >
                <Heart size={20} weight={isFav ? "fill" : "regular"} className={isFav ? 'heart-filled' : ''} />
              </button>
            </div>

            <button className="btn btn-secondary btn-buy-now" onClick={handleBuyNow}>
              Comprar Agora (Checkout Rápido)
            </button>

            {/* Calculador de Frete Simulado */}
            <div className="shipping-calc-box">
              <form onSubmit={handleCalcShipping} className="shipping-form">
                <div className="shipping-input-wrap">
                  <Truck size={16} weight="regular" className="shipping-icon" />
                  <input 
                    type="text" 
                    placeholder="Calcular frete: Digite seu CEP"
                    value={cepInput}
                    onChange={(e) => setCepInput(e.target.value.replace(/\D/g, '').slice(0, 8))}
                    className="shipping-input"
                  />
                </div>
                <button type="submit" className="btn btn-outline btn-calc">
                  Calcular
                </button>
              </form>
              {shippingResult && (
                <div className="shipping-result-msg animate-fade-in">
                  <Sparkle size={14} weight="fill" />
                  <span>{shippingResult}</span>
                </div>
              )}
            </div>

            {/* Ficha Técnica Rápida */}
            <div className="product-specs-accordion">
              <div className="spec-item">
                <Ruler size={16} weight="regular" className="spec-icon" />
                <span><strong>Dimensões:</strong> {product.dimensions}</span>
              </div>
              <div className="spec-item">
                <Cube size={16} weight="regular" className="spec-icon" />
                <span><strong>Material:</strong> {product.material}</span>
              </div>
              <div className="spec-item">
                <Clock size={16} weight="regular" className="spec-icon" />
                <span><strong>Produção & Envio:</strong> {product.leadTime}</span>
              </div>
              <div className="spec-item">
                <ShieldCheck size={16} weight="regular" className="spec-icon" />
                <span><strong>Garantia:</strong> 30 dias contra defeitos de fabricação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
