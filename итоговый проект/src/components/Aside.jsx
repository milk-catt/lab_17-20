import React from 'react';
import TagCloud from './TagCloud';

function Aside({ onTagClick }) {  // ← принимаем функцию
  return (
    <div className="aside">
      {/* ОБЛАКО ТЕГОВ */}
      <TagCloud onTagClick={onTagClick} />  {/* ← передаём дальше */}

      {/* БАННЕРЫ */}
      <div className="aside-banners">
        <div className="aside-banner">📢 Подпишись на новости</div>
        <div className="aside-banner">💳 Принимаем все способы оплаты</div>
        <div className="aside-banner">⭐ Нас рекомендуют 500+ клиентов</div>
      </div>
    </div>
  );
}

export default Aside;