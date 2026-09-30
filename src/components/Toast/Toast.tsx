import React from 'react';
import { CheckCircle, Heart, Info } from '@phosphor-icons/react';
import { useShop } from '../../context/ShopContext';
import './Toast.css';

export const Toast: React.FC = () => {
  const { activeToast } = useShop();

  if (!activeToast) return null;

  const renderIcon = () => {
    switch (activeToast.type) {
      case 'favorite':
        return <Heart size={18} weight="fill" className="toast-icon toast-heart" />;
      case 'info':
        return <Info size={18} weight="bold" className="toast-icon toast-info" />;
      default:
        return <CheckCircle size={18} weight="fill" className="toast-icon toast-success" />;
    }
  };

  return (
    <div className="toast-container animate-fade-in" role="status" aria-live="polite">
      <div className="toast-bubble">
        {renderIcon()}
        <span className="toast-message">{activeToast.message}</span>
      </div>
    </div>
  );
};
