import React, { useState } from 'react';

function ProductCard({ product, onAddToCart, onRemoveFromCart, isInCart, t, language }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: '1px solid #e8e8e8',
    borderRadius: '16px',
    padding: '16px',
    margin: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    backgroundColor: isInCart ? '#fce4ec' : 'white',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '12px',
    objectFit: 'cover'
  };

  const titleStyle = {
    margin: '12px 0 8px 0'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#777',
    flexGrow: 1,
    marginBottom: '12px'
  };

  const priceStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#e91e63',
    margin: '8px 0'
  };

  const buttonStyle = {
    backgroundColor: isInCart ? (isHovered ? '#e74c3c' : '#95a5a6') : '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    width: '100%',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-end'
  };

  const getText = (field) => {
    if (!field) return '';
    if (typeof field === 'object') {
      return field[language] || field.ru;
    }
    return field;
  };

  const getButtonText = () => {
    if (isInCart && isHovered) {
      return t.removeFromCart || '🗑️ Удалить';
    } else if (isInCart && !isHovered) {
      return t.inCart || '✅ В корзине';
    } else {
      return t.addToCart || '🌸 В корзину';
    }
  };

  const handleButtonClick = () => {
    if (isInCart && isHovered) {
      onRemoveFromCart(product.id);
    } else if (!isInCart) {
      onAddToCart(product);
    }
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    if (!isInCart) {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
    }
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.image} alt={getText(product.name)} style={imageStyle} />
      <h3 style={titleStyle}>{getText(product.name)}</h3>
      <p style={descriptionStyle}>{getText(product.description)}</p>
      <p style={priceStyle}>{product.price} ₽</p>
      
      <button 
        style={buttonStyle}
        onClick={handleButtonClick}
      >
        {getButtonText()}
      </button>
    </div>
  );
}

export default ProductCard;