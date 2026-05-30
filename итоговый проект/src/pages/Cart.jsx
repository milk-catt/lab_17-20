import React, { useState } from 'react';

function Cart({ cartItems, removeFromCart, clearCart, clearCartSilently, language }) {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const getProductName = (product) => {
    if (typeof product.name === 'object') {
      return product.name[language] || product.name.ru;
    }
    return product.name;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert(language === 'en' ? 'Cart is empty! Add items to checkout.' : 'Корзина пуста! Добавьте товары для оформления заказа.');
      return;
    }
    setShowPhoneModal(true);
  };

  const confirmOrder = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert(language === 'en' ? 'Please enter a valid phone number' : 'Пожалуйста, укажите корректный номер телефона');
      return;
    }
    setShowPhoneModal(false);
    clearCartSilently(); 
    setOrderPlaced(true);
  };

  const backToCart = () => {
    setOrderPlaced(false);
    setPhoneNumber('');
  };

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

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '30px',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
  };

  const modalTitleStyle = {
    fontSize: '1.5rem',
    color: '#e91e63',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const modalButtonStyle = {
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%'
  };

  const cancelButtonStyle = {
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    marginTop: '10px'
  };

  const thankYouStyle = {
    textAlign: 'center',
    padding: '50px 20px'
  };

  const thankYouTitleStyle = {
    fontSize: '2rem',
    color: '#e91e63',
    marginBottom: '20px'
  };

  const thankYouTextStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6'
  };

  const backButtonStyle = {
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  if (orderPlaced) {
    return (
      <div style={containerStyle}>
        <div style={thankYouStyle}>
          <div style={thankYouTitleStyle}>
            {language === 'en' ? '🌸 Thank you for your order!' : '🌸 Спасибо за заказ!'}
          </div>
          <div style={thankYouTextStyle}>
            {language === 'en' 
              ? 'The seller will contact you to clarify the details at the number:' 
              : 'Продавец свяжется с вами для уточнения деталей по номеру:'}<br />
            <strong style={{ fontSize: '1.3rem', color: '#e91e63' }}>{phoneNumber}</strong>
          </div>
          <button onClick={backToCart} style={backButtonStyle}>
            🛍️ {language === 'en' ? 'Back to catalog' : 'Вернуться в каталог'}
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>🛒 {language === 'en' ? 'Cart is empty' : 'Корзина пуста'}</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#888' }}>
          {language === 'en' ? 'Add flowers to make an order' : 'Добавьте цветы, чтобы сделать заказ'}
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🌸 {language === 'en' ? 'Your cart' : 'Ваша корзина'}</h1>
      
      {cartItems.map((item, index) => (
        <div key={index} style={cartItemStyle}>
          <div>
            <strong>{getProductName(item)}</strong>
            <br />
            <span style={{ color: '#e91e63', fontSize: '1.1rem' }}>{item.price} ₽</span>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)}
            style={removeButtonStyle}
          >
            ✖ {language === 'en' ? 'Remove' : 'Удалить'}
          </button>
        </div>
      ))}
      
      <div style={totalStyle}>
        <span>{language === 'en' ? 'Total' : 'Итого'}: </span>
        <span style={{ color: '#e91e63' }}>{totalPrice} ₽</span>
      </div>
      
      <div style={buttonGroupStyle}>
        <button onClick={clearCart} style={clearButtonStyle}>
          🗑 {language === 'en' ? 'Clear cart' : 'Очистить корзину'}
        </button>
        <button onClick={handleCheckout} style={checkoutButtonStyle}>
          💐 {language === 'en' ? 'Checkout' : 'Оформить заказ'}
        </button>
      </div>

      {showPhoneModal && (
        <div style={modalOverlayStyle} onClick={() => setShowPhoneModal(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h3 style={modalTitleStyle}>
              📞 {language === 'en' ? 'Enter your contact phone number' : 'Укажите свой контактный телефон'}
            </h3>
            <input
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={inputStyle}
              autoFocus
            />
            <button onClick={confirmOrder} style={modalButtonStyle}>
              ✅ {language === 'en' ? 'Confirm order' : 'Подтвердить заказ'}
            </button>
            <button onClick={() => setShowPhoneModal(false)} style={cancelButtonStyle}>
              ❌ {language === 'en' ? 'Cancel' : 'Отмена'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;