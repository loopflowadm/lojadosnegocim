import React from 'react';
import { 
  Sparkle, 
  ArrowRight, 
  Lightbulb, 
  ShieldCheck, 
  Handshake, 
  Eye, 
  Star,
  Tag
} from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import './Hero.css';

export const Hero: React.FC = () => {
  const { setSelectedProductForModal, products, setIsIdeaModalOpen } = useShop();

  const heroMainProduct = products.find(p => p.id === 'dragao-articulado-lunar') || products[0];
  const heroSecondProduct = products.find(p => p.id === 'porta-cabo-gatinho') || products[1];
  const heroThirdProduct = products.find(p => p.id === 'suporte-celular-astronauta') || products[2];

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Coluna Editorial / Mensagem de Posicionamento */}
        <div className="hero-text-col">
          <div className="hero-badge">
            <Sparkle size={15} weight="fill" className="hero-badge-icon" />
            <span>Coisas úteis, curiosas e divertidas</span>
          </div>

          <h1 className="hero-title">
            UM NEGOCIM <br className="hide-mobile" />
            PARA CADA <span className="text-highlight">IDEIA.</span>
          </h1>

          <p className="hero-description">
            Objetos táteis, suportes que resolvem a vida na mesa e presentes inesquecíveis. Tudo produzido com precisão e acabamento artesanal no Brasil.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary hero-btn-main" onClick={scrollToCatalog}>
              <span>Explorar Negocins</span>
              <ArrowRight size={18} weight="bold" />
            </button>

            <button 
              className="btn btn-outline hero-btn-sub"
              onClick={() => setIsIdeaModalOpen(true)}
            >
              <Lightbulb size={18} weight="bold" className="text-yellow" />
              <span>Tenho uma Ideia</span>
            </button>
          </div>

          {/* Garantias Reais */}
          <div className="hero-badges-row">
            <div className="hero-mini-feature">
              <ShieldCheck size={18} weight="regular" className="feature-icon" />
              <span>Peças resistentes & acabamento manual</span>
            </div>
            <div className="hero-mini-feature">
              <Handshake size={18} weight="regular" className="feature-icon" />
              <span>Atendimento direto pelo WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Coluna da Vitrine Física de Produtos */}
        <div className="hero-showcase-mosaic">
          {/* Card Principal de Vitrine */}
          <div 
            className="hero-main-card"
            onClick={() => setSelectedProductForModal(heroMainProduct)}
            role="button"
            tabIndex={0}
            aria-label={`Ver detalhes de ${heroMainProduct.name}`}
          >
            <div className="showcase-top-tag">
              <span className="badge badge-orange">
                <Tag size={12} weight="bold" /> Mais Vendido
              </span>
              <span className="showcase-rating">
                <Star size={13} weight="fill" color="#D9822B" /> 4.9 (142 avaliações)
              </span>
            </div>

            <div className="showcase-image-wrapper">
              <img 
                src={heroMainProduct.image} 
                alt={heroMainProduct.name}
                className="showcase-image"
              />
              <div className="showcase-floating-pill">
                <span className="pill-dot" />
                <span>Sensorial articulado com mais de 30 vértebras</span>
              </div>
            </div>

            <div className="showcase-footer">
              <div>
                <h3 className="showcase-name">{heroMainProduct.name}</h3>
                <span className="showcase-category">{heroMainProduct.categoryLabel}</span>
              </div>
              <div className="showcase-price-box">
                <span className="showcase-price">
                  R$ {heroMainProduct.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="btn btn-secondary btn-sm">
                  <Eye size={14} weight="bold" />
                  <span>Ver</span>
                </span>
              </div>
            </div>
          </div>

          {/* Mini Cards Laterais de Apoio na Vitrine */}
          <div className="hero-subcards-stack hide-mobile">
            {/* Sub-card 1 */}
            <div 
              className="hero-mini-card"
              onClick={() => setSelectedProductForModal(heroSecondProduct)}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes de ${heroSecondProduct.name}`}
            >
              <img src={heroSecondProduct.image} alt={heroSecondProduct.name} className="mini-card-img" />
              <div className="mini-card-info">
                <span className="badge-mini badge-green">Super Útil</span>
                <h4 className="mini-card-title">{heroSecondProduct.name}</h4>
                <span className="mini-card-price">R$ {heroSecondProduct.price.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            {/* Sub-card 2 */}
            <div 
              className="hero-mini-card"
              onClick={() => setSelectedProductForModal(heroThirdProduct)}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes de ${heroThirdProduct.name}`}
            >
              <img src={heroThirdProduct.image} alt={heroThirdProduct.name} className="mini-card-img" />
              <div className="mini-card-info">
                <span className="badge-mini badge-teal">Destaque Geek</span>
                <h4 className="mini-card-title">{heroThirdProduct.name}</h4>
                <span className="mini-card-price">R$ {heroThirdProduct.price.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
