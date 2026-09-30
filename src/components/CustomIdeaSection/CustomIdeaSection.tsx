import React from 'react';
import { Lightbulb, Wrench, Sparkle, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import './CustomIdeaSection.css';

export const CustomIdeaSection: React.FC = () => {
  const { setIsIdeaModalOpen } = useShop();

  return (
    <section className="custom-idea-section" aria-labelledby="custom-idea-title">
      <div className="container">
        <div className="custom-idea-card">
          {/* Coluna de Conteúdo */}
          <div className="custom-idea-content">
            <div className="idea-badge">
              <Sparkle size={15} weight="fill" />
              <span>Fabricação sob Medida & Projetos Especiais</span>
            </div>

            <h2 id="custom-idea-title" className="idea-title">
              NÃO ENCONTROU O <span>NEGOCIM</span> QUE QUERIA?
            </h2>

            <p className="idea-text">
              Tem um suporte específico que precisa para sua mesa? Quer uma peça com seu nome, logo ou formato exclusivo? A gente desenha e produz seu negocim personalizado.
            </p>

            <div className="idea-steps-row">
              <div className="idea-step-item">
                <span className="step-number">1</span>
                <div>
                  <strong>Você conta a ideia</strong>
                  <p>Manda um rascunho, foto ou medidas.</p>
                </div>
              </div>

              <div className="idea-step-item">
                <span className="step-number">2</span>
                <div>
                  <strong>A gente modela</strong>
                  <p>Ajustamos o encaixe e a resistência.</p>
                </div>
              </div>

              <div className="idea-step-item">
                <span className="step-number">3</span>
                <div>
                  <strong>Negocim na sua mão</strong>
                  <p>Produzido e enviado com carinho.</p>
                </div>
              </div>
            </div>

            <div className="idea-action-box">
              <button 
                className="btn btn-primary idea-cta-btn"
                onClick={() => setIsIdeaModalOpen(true)}
              >
                <Lightbulb size={20} weight="bold" />
                <span>Mandar Minha Ideia</span>
                <ArrowRight size={18} weight="bold" />
              </button>
              
              <a 
                href="https://wa.me/5511999999999?text=Olá!%20Tenho%20uma%20ideia%20de%20negocim%20para%20fazer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn idea-whatsapp-btn"
              >
                <WhatsappLogo size={22} weight="fill" className="text-whatsapp-green" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna Visual de Alta Amplitude */}
          <div className="custom-idea-visual hide-tablet">
            <div className="idea-visual-wrapper">
              <div className="idea-floating-badge badge-1">
                <Wrench size={16} weight="bold" />
                <span>Tolerância de 0.1mm</span>
              </div>
              <div className="idea-floating-badge badge-2">
                <Sparkle size={16} weight="fill" />
                <span>Acabamento Premium</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=80" 
                alt="Ateliê de criação e fabricação sob medida da Loja dos Negocim"
                className="idea-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
