// src/pages/Catalog.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Catalog({ addToCart }) {
  const containerStyle = {
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#e91e63',
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontFamily: "'Segoe UI', 'Arial', sans-serif"
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    justifyContent: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🌷 Наши букеты</h1>
      <div style={gridStyle}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;