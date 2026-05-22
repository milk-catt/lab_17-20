import React from 'react';
import TagCloud from './TagCloud';

function Aside() {
  return (
    <div className="aside">
      {/* ОБЛАКО ТЕГОВ */}
      <TagCloud />

      {/* БАННЕРЫ ВНИЗУ ASIDE */}
      <div className="aside-banners">
        <div className="aside-banner">📢 Подпишись на новости</div>
        <div className="aside-banner">💳 Принимаем все карты</div>
        <div className="aside-banner">⭐ Нас рекомендуют 500+ клиентов</div>
      </div>
    </div>
  );
}

export default Aside;