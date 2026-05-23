import React from 'react';

function Section({ changePage, currentPage }) {
  const menuItems = [
    { id: 'new', name: '📰 Новости' },
    { id: 'about', name: '👤 О магазине' },
    { id: 'feedback', name: '📞 Обратная связь' },
    { id: 'catalog', name: '💐 Каталог товаров' },
    { id: 'cart', name: '🛒 Корзина' }
  ];

  return (
    <div className="section">
      {/* МЕНЮ САЙТА */}
      <div className="nav-menu">
        <h3>Главное меню</h3>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <button 
                onClick={() => changePage(item.id)}
                className={currentPage === item.id ? 'active' : ''}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* БАННЕРЫ ВНИЗУ SECTION */}
      <div className="banners">
        <h4>🏷️ Акции</h4>
        <div className="banner">Скидка 10% на первый заказ</div>
        <div className="banner">Бесплатная доставка от 3000₽</div>
        <div className="banner">Открытка с любовью к каждому букету</div>
      </div>
    </div>
  );
}

export default Section;