// src/pages/Catalog.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Catalog({ addToCart, selectedTag, cartItems }) {
  
  const filteredProducts = selectedTag 
    ? products.filter(product => 
        product.tags && product.tags.includes(selectedTag)
      )
    : products;

  // Проверка, находится ли товар в корзине
  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: '2rem',
    marginBottom: '20px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    justifyContent: 'center'
  };

  const emptyStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#888',
    padding: '50px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        {selectedTag ? `🌸 Букеты с тегом: ${selectedTag}` : '🌸 Наши букеты'}
      </h1>
      
      {filteredProducts.length === 0 ? (
        <div style={emptyStyle}>
          😢 Товары с тегом "{selectedTag}" не найдены<br />
          Попробуйте выбрать другой тег
        </div>
      ) : (
        <div style={gridStyle}>
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              isInCart={isProductInCart(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;