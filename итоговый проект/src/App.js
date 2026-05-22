import React, { useState } from 'react';
import Section from './components/Section';
import Aside from './components/Aside';
import New from './pages/New';
import About from './pages/About';
import FeedBack from './pages/FeedBack';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import './style.css';

function App() {
  const [currentPage, setCurrentPage] = useState('new');
  const [cart, setCart] = useState([]);

  // Функции для корзины
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`🧸 ${product.name} добавлен в корзину!`);
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const clearCart = () => {
    if (window.confirm('Очистить корзину?')) {
      setCart([]);
    }
  };

  // Рендер страницы в ARTICLE
  const renderArticle = () => {
    switch(currentPage) {
      case 'new':
        return <New />;
      case 'about':
        return <About />;
      case 'feedback':
        return <FeedBack />;
      case 'catalog':
        return <Catalog addToCart={addToCart} />;
      case 'cart':
        return <Cart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} />;
      default:
        return <New />;
    }
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-text">🧸 Мягкий мир</div>
          <div className="logo-sub">Мягкие игрушки с душой</div>
        </div>
      </header>

      {/* MAIN — 3 колонки 1:4:1 */}
      <div className="main-container">
        <Section changePage={setCurrentPage} currentPage={currentPage} />
        <article className="article">
          {renderArticle()}
        </article>
        <Aside />
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>📞 8-(800)-555-35-35 | 📧 chekrizova@sfedu.ru, aleolei@sfedu.ru</p>
        <p>📍 Яблоновский, ул. Гагарина, 114.</p>
        <p>© 2026 Все права защищены</p>
      </footer>
    </div>
  );
}

export default App;