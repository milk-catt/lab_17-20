import React from 'react';

function TagCloud() {
  const tags = [
    { name: 'Розы', size: 5 },
    { name: 'Пионы', size: 4 },
    { name: 'Сирень', size: 3 },
    { name: 'Цветочные корзинки', size: 2 },
    { name: 'Букеты из бабочек', size: 1 },
    { name: 'Хиты продаж', size: 4 },
    { name: 'Новинки', size: 3 },
    { name: 'Распродажа', size: 5 },
  ];

  return (
    <div className="tag-cloud">
      <h3>Навигация</h3>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className={`tag size-${tag.size}`}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagCloud;