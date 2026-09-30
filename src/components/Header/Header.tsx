import React, { useState } from 'react';
import { 
  MagnifyingGlass, 
  ShoppingCart, 
  Heart, 
  Lightbulb, 
  Truck, 
  ShieldCheck, 
  Lightning, 
  List, 
  X, 
  SquaresFour, 
  Brain, 
  House, 
  Wrench, 
  PaintBrush, 
  GameController, 
  Tag, 
  Gift 
} from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import { Logo } from '../Logo/Logo';
import { CategoryId } from '../../types';
import './Header.css';

export const Header: React.FC = () => {
  const { 
    cartCount, 
    favorites, 
    setIsCartOpen, 
    setIsIdeaModalOpen, 
    searchQuery, 
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleCategoryClick = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setIsMobileMenuOpen(false);
    
    const catalogEl = document.getElementById('catalogo-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      {/* Topbar Oficial */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-item">
            <Truck size={17} weight="bold" className="topbar-icon" />
            <span>Enviamos para todo o Brasil &bull; <strong>Frete Grátis</strong> acima de R$ 99</span>
          </div>
          <div className="topbar-item hide-mobile">
            <Lightning size={17} weight="fill" className="topbar-icon" />
            <span>5% de desconto no Pix à vista</span>
          </div>
          <div className="topbar-item hide-mobile">
            <ShieldCheck size={17} weight="bold" className="topbar-icon" />
            <span>Produção artesanal maker &bull; Peças testadas</span>
          </div>
        </div>
      </div>

      {/* Barra Principal do Header */}
      <div className="main-header">
        <div className="container header-container">
          {/* Logo Oficial */}
          <a href="#" className="logo-link" onClick={() => handleCategoryClick('todos')} aria-label="Loja dos Negocim - Início">
            <Logo height={48} className="header-logo-svg" />
          </a>

          {/* Barra de Busca Inteligente */}
          <div className={`search-wrapper ${isSearchFocused ? 'focused' : ''}`}>
            <MagnifyingGlass size={20} weight="bold" className="search-icon" />
            <input 
              type="text"
              placeholder="Qual negocim você está procurando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="search-input"
              aria-label="Buscar negocins"
            />
            {searchQuery && (
              <button 
                className="search-clear-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Limpar busca"
              >
                <X size={16} weight="bold" />
              </button>
            )}
          </div>

          {/* Ações do Header */}
          <div className="header-actions">
            <button 
              className="btn-custom-idea hide-tablet"
              onClick={() => setIsIdeaModalOpen(true)}
              title="Tem um projeto exclusivo? Criamos para você"
            >
              <Lightbulb size={20} weight="bold" className="btn-idea-icon" />
              <span>Tenho uma Ideia</span>
            </button>

            <button 
              className="header-icon-btn"
              onClick={() => {
                const favEl = document.getElementById('catalogo-section');
                if (favEl) favEl.scrollIntoView({ behavior: 'smooth' });
              }}
              title="Meus Favoritos"
              aria-label={`Ver favoritos (${favorites.length})`}
            >
              <Heart 
                size={24} 
                weight={favorites.length > 0 ? "fill" : "bold"} 
                className={favorites.length > 0 ? 'heart-filled' : ''} 
              />
              {favorites.length > 0 && (
                <span className="badge-count badge-count-fav">{favorites.length}</span>
              )}
            </button>

            <button 
              className="header-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Abrir carrinho (${cartCount} itens)`}
            >
              <div className="cart-icon-wrap">
                <ShoppingCart size={24} weight="bold" />
                {cartCount > 0 && (
                  <span className="badge-count badge-count-cart pulse-badge">{cartCount}</span>
                )}
              </div>
              <span className="cart-btn-label hide-mobile">Sacola</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Navegação de Categorias - Estilo Menu Comercial Sem Cortes */}
      <nav className="category-nav hide-mobile" aria-label="Navegação de Categorias">
        <div className="container category-nav-container">
          <button 
            className={`nav-item-btn ${selectedCategory === 'todos' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('todos')}
          >
            <SquaresFour size={18} weight={selectedCategory === 'todos' ? 'bold' : 'regular'} />
            <span>Todos</span>
          </button>

          <button 
            className={`nav-item-btn ${selectedCategory === 'sensorial' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('sensorial')}
          >
            <Brain size={18} weight={selectedCategory === 'sensorial' ? 'bold' : 'regular'} />
            <span>Sensorial</span>
          </button>

          <button 
            className={`nav-item-btn ${selectedCategory === 'casa' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('casa')}
          >
            <House size={18} weight={selectedCategory === 'casa' ? 'bold' : 'regular'} />
            <span>Casa & Organização</span>
          </button>

          <button 
            className={`nav-item-btn ${selectedCategory === 'montar' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('montar')}
          >
            <Wrench size={18} weight={selectedCategory === 'montar' ? 'bold' : 'regular'} />
            <span>De Montar</span>
          </button>

          <button 
            className={`nav-item-btn ${selectedCategory === 'pintar' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('pintar')}
          >
            <PaintBrush size={18} weight={selectedCategory === 'pintar' ? 'bold' : 'regular'} />
            <span>De Pintar</span>
          </button>

          <button 
            className={`nav-item-btn ${selectedCategory === 'geek' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('geek')}
          >
            <GameController size={18} weight={selectedCategory === 'geek' ? 'bold' : 'regular'} />
            <span>Geek & Games</span>
          </button>

          <button 
            className={`nav-item-btn ${selectedCategory === 'presentes' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('presentes')}
          >
            <Gift size={18} weight={selectedCategory === 'presentes' ? 'bold' : 'regular'} />
            <span>Presentes</span>
          </button>

          <button 
            className={`nav-item-btn nav-item-offer ${selectedCategory === 'ofertas' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('ofertas')}
          >
            <Tag size={18} weight={selectedCategory === 'ofertas' ? 'bold' : 'regular'} />
            <span>Ofertas</span>
          </button>
        </div>
      </nav>

      {/* Menu Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="font-display font-bold">Navegar Negocins</span>
              <button className="btn-icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Fechar menu">
                <X size={22} weight="bold" />
              </button>
            </div>

            <div className="mobile-menu-list">
              <button 
                className={`mobile-nav-item ${selectedCategory === 'todos' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('todos')}
              >
                <SquaresFour size={20} />
                <span>Todos os Negocins</span>
              </button>
              <button 
                className={`mobile-nav-item ${selectedCategory === 'sensorial' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('sensorial')}
              >
                <Brain size={20} />
                <span>Sensorial & Fidgets</span>
              </button>
              <button 
                className={`mobile-nav-item ${selectedCategory === 'casa' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('casa')}
              >
                <House size={20} />
                <span>Casa & Organização</span>
              </button>
              <button 
                className={`mobile-nav-item ${selectedCategory === 'montar' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('montar')}
              >
                <Wrench size={20} />
                <span>Negocim de Montar</span>
              </button>
              <button 
                className={`mobile-nav-item ${selectedCategory === 'pintar' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('pintar')}
              >
                <PaintBrush size={20} />
                <span>Negocim de Pintar</span>
              </button>
              <button 
                className={`mobile-nav-item ${selectedCategory === 'geek' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('geek')}
              >
                <GameController size={20} />
                <span>Geek & Colecionáveis</span>
              </button>
              <button 
                className={`mobile-nav-item ${selectedCategory === 'presentes' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('presentes')}
              >
                <Gift size={20} />
                <span>Presentes Inesperados</span>
              </button>
              <button 
                className={`mobile-nav-item ${selectedCategory === 'ofertas' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('ofertas')}
              >
                <Tag size={20} />
                <span>Ofertas Especiais</span>
              </button>

              <div className="mobile-menu-divider" />

              <button 
                className="btn btn-primary w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsIdeaModalOpen(true);
                }}
              >
                <Lightbulb size={20} weight="bold" />
                <span>Tenho uma Ideia Personalizada</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
