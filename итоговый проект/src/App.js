import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Contacts from './pages/FeedBack';
import About from './pages/About';
import New from './pages/New';
import FeedBack from './pages/FeedBack'


function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('flower_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('flower_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`🌷 ${product.name} добавлен в корзину!`);
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
    if (window.confirm('Вы уверены, что хотите очистить корзину?')) {
      setCart([]);
    }
  };

  const headerStyle = {
    backgroundColor: '#ff69b4',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white'
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.1rem',
    padding: '8px 16px',
    borderRadius: '25px'
  };

  const cartLinkStyle = {
    ...linkStyle,
    backgroundColor: '#ff1493'
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '25px',
    marginTop: '50px'
  };

  const mainStyle = {
    minHeight: 'calc(100vh - 200px)',
    padding: '20px'
  };

  return (
    <BrowserRouter>
      <div>
        <header style={headerStyle}>
          <div style={logoStyle}>🌸 Весеннее настроение</div>
          <nav style={navStyle}>
            <Link to="/" style={linkStyle}>Каталог</Link>
            <Link to="/new" style={linkStyle}>Новости</Link>
            <Link to="/about" style={linkStyle}>О нас</Link>
            <Link to="/feedback" style={linkStyle}>Обратная связь</Link>
            <Link to="/cart" style={cartLinkStyle}>🛒 Корзина ({cart.length})</Link>
          </nav>
        </header>

        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Catalog addToCart={addToCart} />} />
            <Route path="/cart" element={
              <Cart 
                cartItems={cart} 
                removeFromCart={removeFromCart} 
                clearCart={clearCart} 
              />
            } />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </main>

        <footer style={footerStyle}>
          <p>© 2025 Магазин цветов «Весеннее настроение»</p>
          <p>🌸 С любовью к цветам и к вам 🌸</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;