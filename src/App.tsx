import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection';
import { ProductCatalog } from './components/ProductCatalog/ProductCatalog';
import { CustomIdeaSection } from './components/CustomIdeaSection/CustomIdeaSection';
import { Footer } from './components/Footer/Footer';
import { CartDrawer } from './components/CartDrawer/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal/ProductDetailModal';
import { CustomIdeaModal } from './components/CustomIdeaModal/CustomIdeaModal';
import { Toast } from './components/Toast/Toast';

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <div className="app-layout">
        <Header />
        <main>
          <Hero />
          <CategoriesSection />
          <ProductCatalog />
          <CustomIdeaSection />
        </main>
        <Footer />

        {/* Overlays, Modais e Gavetas */}
        <CartDrawer />
        <ProductDetailModal />
        <CustomIdeaModal />
        <Toast />
      </div>
    </ShopProvider>
  );
};

export default App;
