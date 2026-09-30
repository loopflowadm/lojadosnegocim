import React from 'react';
import { 
  Brain, 
  House, 
  Wrench, 
  PaintBrush, 
  GameController, 
  Gift, 
  SquaresFour,
  ArrowUpRight
} from '@phosphor-icons/react';
import { CATEGORIES } from '../../data/categories';
import { useShop } from '../../context/ShopContext';
import { CategoryId } from '../../types';
import './CategoriesSection.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain size={36} weight="bold" />,
  House: <House size={36} weight="bold" />,
  Wrench: <Wrench size={36} weight="bold" />,
  PaintBrush: <PaintBrush size={36} weight="bold" />,
  GameController: <GameController size={36} weight="bold" />,
  Gift: <Gift size={36} weight="bold" />,
  SquaresFour: <SquaresFour size={36} weight="bold" />
};

export const CategoriesSection: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useShop();

  const handleSelectCategory = (id: CategoryId) => {
    setSelectedCategory(id);
    const catalogEl = document.getElementById('catalogo-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayCategories = CATEGORIES.filter(c => c.id !== 'todos' && c.id !== 'ofertas');

  return (
    <section className="universes-section" aria-labelledby="universes-title">
      <div className="container">
        <div className="universes-header">
          <div>
            <span className="badge badge-teal">Universos de Criação</span>
            <h2 id="universes-title" className="universes-title">
              Escolha seu tipo de <span>negocim</span>
            </h2>
          </div>
          <p className="universes-subtitle">
            Cada categoria é um mundo de utilidade, arte e curiosidade para você explorar.
          </p>
        </div>

        <div className="universes-grid">
          {displayCategories.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`universe-card ${isSelected ? 'selected' : ''}`}
                style={{
                  '--cat-accent': cat.themeColor,
                  '--cat-bg': cat.bgColor,
                  '--cat-border': cat.borderColor
                } as React.CSSProperties}
                onClick={() => handleSelectCategory(cat.id)}
                aria-pressed={isSelected}
              >
                <div className="universe-card-top">
                  <div className="universe-icon-wrap" style={{ color: cat.themeColor }}>
                    {ICON_MAP[cat.iconName] || <SquaresFour size={36} weight="bold" />}
                  </div>
                  {cat.badge && (
                    <span className="universe-badge">{cat.badge}</span>
                  )}
                  <span className="universe-arrow">
                    <ArrowUpRight size={22} weight="bold" />
                  </span>
                </div>

                <div className="universe-card-body">
                  <h3 className="universe-name">{cat.name}</h3>
                  <p className="universe-tagline">{cat.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
