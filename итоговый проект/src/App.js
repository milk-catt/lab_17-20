import React, { useState } from 'react';
import Section from './components/Section';
import Aside from './components/Aside';
import New from './pages/New';
import About from './pages/About';
import FeedBack from './pages/FeedBack';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import './style.css';
import { translations } from './translations';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState('new');
  const [cart, setCart] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [language, setLanguage] = useState('ru');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const t = translations[language];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 2500);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    const productName = typeof product.name === 'object' ? product.name.ru : product.name;
    const message = language === 'ru' 
      ? `🌸 ${productName} добавлен в корзину!` 
      : `🌸 ${productName} added to cart!`;
    showToast(message, 'success');
  };

  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id);
    const productName = typeof product?.name === 'object' ? product.name[language] : product?.name;
    
    if (window.confirm(language === 'ru' 
      ? `Удалить "${productName}" из корзины?` 
      : `Remove "${productName}" from cart?`)) {
      const index = cart.findIndex(item => item.id === id);
      if (index !== -1) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        const message = language === 'ru' 
          ? `🗑️ ${productName} удалён из корзины` 
          : `🗑️ ${productName} removed from cart`;
        showToast(message, 'remove');
      }
    }
  };

  const clearCart = () => {
    if (window.confirm(language === 'ru' ? 'Очистить корзину?' : 'Clear cart?')) {
      setCart([]);
      const message = language === 'ru' ? '🗑️ Корзина очищена' : '🗑️ Cart cleared';
      showToast(message, 'remove');
    }
  };

  const clearCartSilently = () => {
    setCart([]);
  };

  const filterByTag = (tag) => {
    setSelectedTag(tag);
    setCurrentPage('catalog');
  };

  const clearTag = () => {
    setSelectedTag(null);
    setCurrentPage('catalog');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const goToCatalog = () => {
    setCurrentPage('catalog');
    clearTag(); 
  };

  const renderArticle = () => {
    switch(currentPage) {
      case 'new':
        return <New t={t} language={language} />;
      case 'about':
        return <About t={t} language={language} />;
      case 'feedback':
        return <FeedBack t={t} language={language} />;
      case 'catalog':
        return <Catalog 
          addToCart={addToCart} 
          removeFromCart={removeFromCart}
          selectedTag={selectedTag} 
          cartItems={cart} 
          t={t} 
          language={language} 
        />;
      case 'cart':
        return <Cart 
          cartItems={cart} 
          removeFromCart={removeFromCart} 
          clearCart={clearCart}
          clearCartSilently={clearCartSilently}
          language={language}
          onBackToCatalog={goToCatalog}
        />;
      default:
        return <New t={t} language={language} />;
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="logo">
            <div className="logo-text" style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              fontFamily: "'Playfair Display', 'Segoe UI', 'Georgia', serif",
              letterSpacing: '2px',
              color: '#8B0000'
            }}>
              {t.logo}
            </div>
            <div className="logo-sub" style={{ 
              fontSize: '1.2rem', 
              fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
              fontStyle: 'italic',
              letterSpacing: '1px',
              marginTop: '8px',
              color: '#680141'
            }}>
              {t.logoSub}
            </div>
          </div>
          
          <div className="language-switcher">
            <button 
              onClick={toggleLanguage}
              style={{
                backgroundColor: language === 'ru' ? '#f57ed3' : '#e1bef7',
                color: language === 'ru' ? 'white' : '#680141',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
            >
              {language === 'ru' ? '🇷🇺 RU' : '🇬🇧 EN'}
            </button>
          </div>
        </header>

        <div className="main-container">
          <Section 
          changePage={setCurrentPage} 
          currentPage={currentPage} 
          onClearTag={clearTag} 
          t={t} 
          language={language} 
          />
          <article className="article">
            {renderArticle()}
          </article>
          <Aside 
          onTagClick={filterByTag} 
          t={t} 
          language={language} 
          />
        </div>

        <footer className="footer">
          <p>📞 {t.phone}</p>
          <p>📧 aleolei@sfedu.ru | chekrizova@sfedu.ru</p>
          <p>{t.address}</p>
          <p>{t.copyright}</p>
        </footer>

        {toast.show && (
          <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: toast.type === 'remove' ? '#ff6b6b' : '#4caf50',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 10000,
            animation: 'slideIn 0.3s ease'
          }}>
            {toast.message}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </BrowserRouter>
  );
}

export default App;