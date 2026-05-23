import React from 'react';

function Section({ changePage, currentPage, onClearTag }) {  // ← добавить onClearTag
  const menuItems = [
    { id: 'new', name: '📰 Новости' },
    { id: 'about', name: '👤 О магазине' },
    { id: 'feedback', name: '📞 Обратная связь' },
    { id: 'catalog', name: '💐 Каталог товаров' },
    { id: 'cart', name: '🛒 Корзина' }
  ];

  const handlePageChange = (pageId) => {
    if (pageId === 'catalog') {
      onClearTag();  // ← сбрасываем тег при переходе в каталог
    }
    changePage(pageId);
  };

  return (
    <div className="section">
      <div className="nav-menu">
        <h3>Главное меню</h3>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <button 
                onClick={() => handlePageChange(item.id)}
                className={currentPage === item.id ? 'active' : ''}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="banners">
        <h4>🎁 Акции</h4>
        <div className="banner">Скидка 10% на первый заказ</div>
        <div className="banner">Бесплатная доставка от 3000₽</div>
        <div className="banner">Открытки с любовью к каждому букету</div>
      </div>
    </div>
  );
}

export default Section;