// src/pages/Cart.jsx
import React from 'react';

function Cart({ cartItems, removeFromCart, clearCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const containerStyle = {
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    minHeight: '400px'
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#e91e63',
    marginBottom: '30px',
    textAlign: 'center'
  };

  const cartItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    margin: '12px 0',
    borderRadius: '12px',
    border: '1px solid #eee'
  };

  const removeButtonStyle = {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const totalStyle = {
    textAlign: 'right',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '2px solid #eee'
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginTop: '20px'
  };

  const clearButtonStyle = {
    backgroundColor: '#95a5a6',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  const checkoutButtonStyle = {
    backgroundColor: '#ff69b4',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'white'
  };

  if (cartItems.length === 0) {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>🛒 Корзина пуста</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#888' }}>
          Добавьте цветы, чтобы сделать заказ
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🌸 Ваша корзина</h1>
      
      {cartItems.map((item, index) => (
        <div key={index} style={cartItemStyle}>
          <div>
            <strong>{item.name}</strong>
            <br />
            <span style={{ color: '#e91e63', fontSize: '1.1rem' }}>{item.price} ₽</span>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)}
            style={removeButtonStyle}
          >
            ✖ Удалить
          </button>
        </div>
      ))}
      
      <div style={totalStyle}>
        <span>Итого: </span>
        <span style={{ color: '#e91e63' }}>{totalPrice} ₽</span>
      </div>
      
      <div style={buttonGroupStyle}>
        <button onClick={clearCart} style={clearButtonStyle}>
          🗑 Очистить корзину
        </button>
        <button style={checkoutButtonStyle}>
          💐 Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Cart;