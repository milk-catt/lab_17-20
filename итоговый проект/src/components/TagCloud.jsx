import React from 'react';

function TagCloud() {
  const tags = [
    { name: 'Мягкие игрушки', size: 5 },
    { name: 'Подарки', size: 4 },
    { name: 'Детям', size: 3 },
    { name: 'Развивающие', size: 2 },
    { name: 'Экологичные', size: 1 },
    { name: 'Хиты продаж', size: 4 },
    { name: 'Новинки', size: 3 },
    { name: 'Распродажа', size: 5 },
  ];

  return (
    <div className="tag-cloud">
      <h3>🏷️ Облако тегов</h3>
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