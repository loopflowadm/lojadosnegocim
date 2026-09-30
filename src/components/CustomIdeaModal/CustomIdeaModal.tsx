import React, { useState } from 'react';
import { 
  X, 
  Lightbulb, 
  PaperPlaneRight, 
  CheckCircle, 
  Ruler, 
  Paperclip,
  Lock
} from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import { CustomIdeaRequest } from '../../types';
import './CustomIdeaModal.css';

export const CustomIdeaModal: React.FC = () => {
  const { isIdeaModalOpen, setIsIdeaModalOpen, submitCustomIdea } = useShop();

  const [formData, setFormData] = useState<CustomIdeaRequest>({
    name: '',
    email: '',
    phone: '',
    description: '',
    dimensions: '',
    referenceUrl: '',
    estimatedBudget: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isIdeaModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.description) return;

    submitCustomIdea(formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsIdeaModalOpen(false);
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      description: '',
      dimensions: '',
      referenceUrl: '',
      estimatedBudget: ''
    });
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-dialog idea-modal-dialog" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-header">
          <div className="modal-header-title">
            <div className="idea-icon-badge">
              <Lightbulb size={20} weight="bold" />
            </div>
            <div>
              <h3 className="modal-title">Tenho uma Ideia de Negocim</h3>
              <span className="modal-subtitle">Fabricação personalizada & projetos sob medida</span>
            </div>
          </div>
          <button className="btn-icon" onClick={handleClose} aria-label="Fechar janela">
            <X size={20} weight="bold" />
          </button>
        </div>

        <div className="modal-body">
          {isSubmitted ? (
            <div className="idea-success-box">
              <CheckCircle size={56} weight="fill" className="success-icon" />
              <h4>Ideia Enviada com Sucesso!</h4>
              <p>
                Nossa equipe vai analisar seu projeto e entrar em contato pelo WhatsApp em até 24 horas úteis.
              </p>
              <button className="btn btn-primary" onClick={handleClose}>
                Continuar Navegando
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="idea-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="idea-name">Seu Nome *</label>
                  <input 
                    id="idea-name"
                    type="text" 
                    required 
                    placeholder="Ex: Ana Clara"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="idea-phone">WhatsApp / Telefone *</label>
                  <input 
                    id="idea-phone"
                    type="tel" 
                    required 
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="idea-email">E-mail</label>
                <input 
                  id="idea-email"
                  type="email" 
                  placeholder="seuemail@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="idea-desc">O que você gostaria de criar? *</label>
                <textarea 
                  id="idea-desc"
                  required 
                  rows={3}
                  placeholder="Descreva o que é: suporte específico para monitor, peça decorativa com seu nome, miniatura colecionável, organizador sob medida..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="idea-dim">
                    <Ruler size={14} weight="regular" /> Dimensões Aproximadas
                  </label>
                  <input 
                    id="idea-dim"
                    type="text" 
                    placeholder="Ex: 10 x 5 x 8 cm"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="idea-ref">
                    <Paperclip size={14} weight="regular" /> Link ou Referência
                  </label>
                  <input 
                    id="idea-ref"
                    type="url" 
                    placeholder="Ex: link do Pinterest, Instagram, 3D model..."
                    value={formData.referenceUrl}
                    onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="idea-form-footer">
                <p className="idea-privacy-note">
                  <Lock size={12} weight="bold" /> Seus dados são protegidos e usados apenas para enviar o orçamento.
                </p>
                <div className="idea-btn-group">
                  <button type="button" className="btn btn-outline" onClick={handleClose}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <PaperPlaneRight size={16} weight="bold" />
                    <span>Enviar Minha Ideia</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
