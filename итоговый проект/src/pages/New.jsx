import React from 'react';

function New() {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px'
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#e91e63',
    textAlign: 'center',
    marginBottom: '30px'
  };

  const textStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#444'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🌺 О нашем магазине</h1>
      
      <div style={textStyle}>
        <p>Магазин цветов «Весеннее настроение» работает с 2015 года.</p>
        <p>Мы привозим цветы напрямую из лучших хозяйств России и Голландии.</p>
        <p>Наши флористы создают букеты с душой и вниманием к деталям.</p>
        <p>🌷 Дарите цветы — дарите настроение! 🌷</p>
      </div>
    </div>
  );
}

export default New;