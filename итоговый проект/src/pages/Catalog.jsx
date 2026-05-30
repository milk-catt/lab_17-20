import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';



function Catalog({ addToCart, removeFromCart, selectedTag, cartItems, t, language }) {  
  
  const filteredProducts = selectedTag 
    ? products.filter(product => 
        product.tags && product.tags.includes(selectedTag)
      )
    : products;

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
        {selectedTag ? `${t.ourBouquets} с тегом: ${selectedTag}` : t.ourBouquets}
      </h1>
      
      {filteredProducts.length === 0 ? (
        <div style={emptyStyle}>
          😢 {t.ourBouquets} с тегом "{selectedTag}" не найдены<br />
          Попробуйте выбрать другой тег
        </div>
      ) : (
        <div style={gridStyle}>
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
              isInCart={isProductInCart(product.id)}
              t={t}
              language={language}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;