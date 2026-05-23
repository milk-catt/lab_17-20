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
    const isAlreadyInCart = cart.some(item => item.id === product.id);
    
    if (isAlreadyInCart) {
      const newCart = cart.filter(item => item.id !== product.id);
      setCart(newCart);
      alert(`🗑️ ${product.name} удалён из корзины!`);
    } else {
      setCart([...cart, product]);
      alert(`🌸 ${product.name} добавлен в корзину!`);
    }
  };

  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id);
    
    if (window.confirm(`❓ Вы уверены, что хотите удалить "${product?.name}" из корзины?`)) {
      const newCart = cart.filter(item => item.id !== id);
      setCart(newCart);
      alert(`🗑️ ${product?.name} удалён из корзины!`);
    }
  };

  // Очистка корзины С ПОДТВЕРЖДЕНИЕМ (для кнопки "Очистить корзину")
  const clearCart = () => {
    if (window.confirm('Очистить корзину?')) {
      setCart([]);
    }
  };

  // Очистка корзины БЕЗ ПОДТВЕРЖДЕНИЯ (для оформления заказа)
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
          cartItems={cart}
        />;
      case 'cart':
        return <Cart 
          cartItems={cart} 
          removeFromCart={removeFromCart} 
          clearCart={clearCart}
          clearCartSilently={clearCartSilently}
        />;
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
            Скажи «люблю» без единого слова
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
        <p>
          📞 <a href="tel:88005553535">8-(800)-555-35-35  </a> 
           📧 <a href="mailto:chekrizova@sfedu.ru">chekrizova@sfedu.ru </a>
          |<a href="mailto:aleolei@sfedu.ru"> aleolei@sfedu.ru</a>
        </p>
        <p>📍 пгт. Яблоновский, ул. Гагарина, 114.</p>
        <p>© 2026 Все права защищены</p>
      </footer>
    </div>
  );
}

export default App;