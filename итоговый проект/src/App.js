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
  const [selectedTag, setSelectedTag] = useState(null);

  const addToCart = (product) => {
  // Проверяем, есть ли уже товар в корзине
  const isAlreadyInCart = cart.some(item => item.id === product.id);
  
  if (isAlreadyInCart) {
    // Если товар уже в корзине - удаляем его
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    alert(`🗑️ ${product.name} удалён из корзины!`);
  } else {
    // Если товара нет - добавляем
    setCart([...cart, product]);
    alert(`🌸 ${product.name} добавлен в корзину!`);
  }
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

  const filterByTag = (tag) => {
    setSelectedTag(tag);
    setCurrentPage('catalog');
  };

  const clearTag = () => {
    setSelectedTag(null);
    setCurrentPage('catalog');
  };

  const renderArticle = () => {
    switch(currentPage) {
      case 'new':
        return <New />;
      case 'about':
        return <About />;
      case 'feedback':
        return <FeedBack />;
      case 'catalog':
  return <Catalog 
    addToCart={addToCart} 
    selectedTag={selectedTag}
    cartItems={cart}  // ← ДОБАВИТЬ ЭТУ СТРОКУ
  />;
      case 'cart':
        return <Cart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} />;
      default:
        return <New />;
    }
  };

  return (
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
            Бонсай 🌸 BONSSAI
          </div>
          <div className="logo-sub" style={{ 
            fontSize: '1.2rem', 
            fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
            fontStyle: 'italic',
            letterSpacing: '1px',
            marginTop: '8px',
            color: '#680141'
          }}>
            Скажи «люблю» без единого слова.
          </div>
        </div>
      </header>

      <div className="main-container">
        <Section 
          changePage={setCurrentPage} 
          currentPage={currentPage}
          onClearTag={clearTag}
        />
        <article className="article">
          {renderArticle()}
        </article>
        <Aside onTagClick={filterByTag} />
      </div>

      <footer className="footer">
        <p>📞 8-(800)-555-35-35 | 📧 chekrizova@sfedu.ru, aleolei@sfedu.ru</p>
        <p>📍 Яблоновский, ул. Гагарина, 114.</p>
        <p>© 2026 Все права защищены</p>
      </footer>
    </div>
  );
}

export default App;