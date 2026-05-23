// src/components/ProductCard.jsx
import React, { useState } from 'react';

function ProductCard({ product, onAddToCart, isInCart }) {
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
    width: '260px'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '12px',
    objectFit: 'cover'
  };

  const titleStyle = {
    fontSize: '1.2rem',
    margin: '12px 0 8px 0',
    color: '#4a4a4a'
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
    transition: 'all 0.3s ease'
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

  const handleButtonClick = () => {
    onAddToCart(product);
  };

  const getButtonText = () => {
    if (isInCart && isHovered) {
      return '🗑️ Удалить из корзины';
    } else if (isInCart && !isHovered) {
      return '✅ В корзине';
    } else {
      return '🌸 В корзину';
    }
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h3 style={titleStyle}>{product.name}</h3>
      <p style={{ fontSize: '14px', color: '#777' }}>{product.description}</p>
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