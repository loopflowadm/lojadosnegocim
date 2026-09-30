import React from 'react';
import { 
  Truck, 
  ShieldCheck, 
  ArrowCounterClockwise, 
  Heart, 
  WhatsappLogo,
  InstagramLogo,
  Lightning,
  Sparkle,
  CreditCard,
  Barcode
} from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import { Logo } from '../Logo/Logo';
import { CategoryId } from '../../types';
import './Footer.css';

export const Footer: React.FC = () => {
  const { setSelectedCategory, setIsIdeaModalOpen } = useShop();

  const handleCatClick = (cat: CategoryId) => {
    setSelectedCategory(cat);
    const catalogEl = document.getElementById('catalogo-section');
    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Banner de Benefícios & Confiança */}
      <div className="footer-benefits-bar">
        <div className="container footer-benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon-box">
              <Truck size={28} weight="bold" />
            </div>
            <div>
              <strong>Envio para Todo o Brasil</strong>
              <p>Rastreamento ponto a ponto e embalagem segura anti-impacto.</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon-box">
              <Lightning size={28} weight="fill" />
            </div>
            <div>
              <strong>Desconto no Pix</strong>
              <p>5% de desconto automático no Pix em todos os negocins.</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon-box">
              <ArrowCounterClockwise size={28} weight="bold" />
            </div>
            <div>
              <strong>Garantia & Troca Fácil</strong>
              <p>7 dias para trocas ou devoluções sem complicação.</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon-box">
              <ShieldCheck size={28} weight="bold" />
            </div>
            <div>
              <strong>Produção Maker Nacional</strong>
              <p>Peças com acabamento cuidadoso e controle de qualidade.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Principal de Links e Informações */}
      <div className="footer-main">
        <div className="container footer-main-grid">
          {/* Coluna Sobre */}
          <div className="footer-col-about">
            <div className="footer-logo-wrap">
              <Logo height={42} className="footer-logo-svg" />
            </div>

            <p className="footer-about-text">
              Uma loja de coisas legais, úteis, curiosas e divertidas. Criamos objetos para resolver pequenas necessidades do dia a dia, decorar seu espaço com personalidade e arrancar sorrisos.
            </p>

            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram da Loja dos Negocim">
                <InstagramLogo size={20} weight="bold" />
                <span>@lojadosnegocim</span>
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp da Loja dos Negocim">
                <WhatsappLogo size={20} weight="bold" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>

          {/* Coluna Universos */}
          <div className="footer-col">
            <h4 className="footer-col-title">Universos</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => handleCatClick('sensorial')}>Sensorial & Fidgets</button></li>
              <li><button onClick={() => handleCatClick('casa')}>Casa & Organização</button></li>
              <li><button onClick={() => handleCatClick('montar')}>Negocim de Montar</button></li>
              <li><button onClick={() => handleCatClick('pintar')}>Negocim de Pintar</button></li>
              <li><button onClick={() => handleCatClick('geek')}>Geek & Colecionáveis</button></li>
              <li><button onClick={() => handleCatClick('ofertas')}>Ofertas Especiais</button></li>
            </ul>
          </div>

          {/* Coluna Personalização & Ajuda */}
          <div className="footer-col">
            <h4 className="footer-col-title">Sob Medida & Ajuda</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => setIsIdeaModalOpen(true)} className="footer-highlight-link">
                  <Sparkle size={16} weight="fill" />
                  <span>Tenho uma Ideia (Personalizados)</span>
                </button>
              </li>
              <li><a href="#catalogo-section">Como Comprar</a></li>
              <li><a href="#catalogo-section">Prazos e Entregas</a></li>
              <li><a href="#catalogo-section">Política de Trocas</a></li>
              <li><a href="#catalogo-section">Materiais e Cuidados (PLA/PETG)</a></li>
            </ul>
          </div>

          {/* Coluna Pagamentos & Segurança */}
          <div className="footer-col">
            <h4 className="footer-col-title">Formas de Pagamento</h4>
            <div className="payment-badges-grid">
              <span className="pay-badge"><Lightning size={16} weight="fill" /> Pix (5% OFF)</span>
              <span className="pay-badge"><CreditCard size={16} weight="bold" /> Cartão de Crédito em até 3x</span>
              <span className="pay-badge"><Barcode size={16} weight="bold" /> Boleto Bancário</span>
            </div>
            <div className="footer-trust-badge">
              <ShieldCheck size={22} weight="bold" className="trust-icon" />
              <span>Ambiente Seguro com Criptografia SSL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Final */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="footer-copy-text">
            &copy; {new Date().getFullYear()} Loja dos Negocim — Feito com criatividade, um negocim de cada vez.
          </p>
          <div className="footer-made-in">
            <span>Orgulhosamente brasileiro</span>
            <Heart size={16} weight="fill" className="heart-icon-footer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
