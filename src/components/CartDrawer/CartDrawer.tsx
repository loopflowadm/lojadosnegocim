import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  Trash, 
  ArrowRight, 
  Truck, 
  Sparkle, 
  Tag, 
  ShieldCheck,
  Check
} from '@phosphor-icons/react';
import confetti from 'canvas-confetti';
import { useShop } from '../../context/ShopContext';
import './CartDrawer.css';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    cartTotal, 
    cartCount,
    freeShippingProgress,
    freeShippingRemaining,
    clearCart,
    showToast
  } = useShop();

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'NEGOCIM10' || clean === 'PRIMEIRACOMPRA') {
      setDiscountPercent(10);
      setAppliedCoupon(clean);
      showToast('Cupom de 10% aplicado com sucesso!', 'success');
    } else {
      showToast('Cupom inválido. Tente "NEGOCIM10"', 'info');
    }
  };

  const discountAmount = (cartTotal * discountPercent) / 100;
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const handleFinishOrder = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#FF6B35', '#146C6C', '#FFB703']
        });
      } catch {
        // Confetti
      }
    }, 1200);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setOrderComplete(false);
  };

  return (
    <div className="cart-drawer-overlay" onClick={handleClose}>
      <aside 
        className="cart-drawer" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Carrinho de Compras"
      >
        {/* Cabeçalho */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <ShoppingCart size={22} weight="bold" className="cart-header-icon" />
            <span className="font-display font-bold">Sua Sacola de Negocins</span>
            <span className="cart-count-badge">({cartCount})</span>
          </div>
          <button className="btn-icon" onClick={handleClose} aria-label="Fechar sacola">
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Barra de Frete Grátis */}
        <div className="shipping-progress-box">
          <div className="shipping-progress-text">
            <Truck size={16} weight="regular" />
            {freeShippingRemaining > 0 ? (
              <span>
                Faltam <strong>R$ {freeShippingRemaining.toFixed(2).replace('.', ',')}</strong> para <strong>Frete Grátis</strong>
              </span>
            ) : (
              <span className="text-frete-gratis">
                Parabéns! Você ganhou <strong>Frete Grátis</strong>!
              </span>
            )}
          </div>
          <div className="shipping-progress-bar">
            <div 
              className="shipping-progress-fill" 
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Conteúdo: Lista ou Vazio */}
        <div className="cart-drawer-body">
          {orderComplete ? (
            <div className="order-success-drawer">
              <div className="order-success-icon-wrap">
                <Check size={40} weight="bold" />
              </div>
              <h3>Pedido Confirmado com Sucesso!</h3>
              <p>
                Obrigado por apoiar a produção criativa e maker da Loja dos Negocim! Você receberá as atualizações no seu WhatsApp.
              </p>
              <button className="btn btn-primary w-full" onClick={handleClose}>
                Continuar Comprando Negocins
              </button>
            </div>
          ) : cart.length > 0 ? (
            <div className="cart-items-list">
              {cart.map((item, index) => (
                <div key={`${item.product.id}-${item.selectedColor}-${index}`} className="cart-item-row">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="cart-item-img"
                  />

                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.product.name}</h4>
                    <span className="cart-item-color">Cor: <strong>{item.selectedColor}</strong></span>
                    <span className="cart-item-unit-price">
                      R$ {item.product.price.toFixed(2).replace('.', ',')} cada
                    </span>

                    <div className="cart-item-controls">
                      <div className="cart-qty-mini">
                        <button 
                          onClick={() => updateCartQuantity(item.product.id, item.selectedColor, -1)}
                          aria-label="Diminuir"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateCartQuantity(item.product.id, item.selectedColor, 1)}
                          aria-label="Aumentar"
                        >
                          +
                        </button>
                      </div>

                      <button 
                        className="cart-remove-btn"
                        onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                        title="Remover produto"
                        aria-label={`Remover ${item.product.name}`}
                      >
                        <Trash size={16} weight="regular" />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal">
                    R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cart-empty-drawer">
              <div className="cart-empty-icon">
                <Sparkle size={40} weight="regular" />
              </div>
              <h4>Sua sacola está vazia</h4>
              <p>Você ainda não escolheu nenhum negocim legal para levar.</p>
              <button className="btn btn-primary" onClick={handleClose}>
                Ver Negocins da Loja
              </button>
            </div>
          )}
        </div>

        {/* Rodapé / Resumo de Valores */}
        {cart.length > 0 && !orderComplete && (
          <div className="cart-drawer-footer">
            {/* Cupom */}
            <form onSubmit={handleApplyCoupon} className="coupon-form">
              <Tag size={16} weight="regular" className="coupon-icon" />
              <input 
                type="text" 
                placeholder="Cupom: NEGOCIM10" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
              <button type="submit" className="btn-apply-coupon">
                Aplicar
              </button>
            </form>

            {appliedCoupon && (
              <div className="applied-coupon-tag">
                <span>Cupom <strong>{appliedCoupon}</strong> ativo (-10%)</span>
              </div>
            )}

            <div className="cart-summary-table">
              <div className="summary-line">
                <span>Subtotal ({cartCount} itens)</span>
                <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="summary-line discount-line">
                  <span>Desconto (10%)</span>
                  <span>- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}
              <div className="summary-line">
                <span>Frete</span>
                <span>{freeShippingRemaining === 0 ? <strong className="text-free">GRÁTIS</strong> : 'Calculado no checkout'}</span>
              </div>
              <div className="summary-line total-line">
                <span>Total Estimado</span>
                <span className="total-value">R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <button 
              className="btn btn-primary w-full btn-checkout"
              onClick={handleFinishOrder}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <span>Processando Negocins...</span>
              ) : (
                <>
                  <span>Finalizar Pedido Negocim</span>
                  <ArrowRight size={18} weight="bold" />
                </>
              )}
            </button>

            <div className="cart-security-badge">
              <ShieldCheck size={15} weight="regular" />
              <span>Compra Segura &bull; Garantia de Entrega</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
