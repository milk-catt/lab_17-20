import React from 'react';

function TagCloud({ onTagClick }) {
  const tags = [
    { name: 'Розы', value: 'розы', size: 5 },
    { name: 'Хризантемы', value: 'хризантемы', size: 4 },
    { name: 'Сирень', value: 'сирень', size: 3 },
    { name: 'Цветочные корзинки', value: 'цветочные корзинки', size: 2 },
    { name: 'Хиты продаж', value: 'хит продаж', size: 4 },
    { name: 'Новинки', value: 'новинки', size: 3 },
    { name: 'Распродажа', value: 'распродажа', size: 5 },
  ]

  const handleTagClick = (tagValue) => {
    onTagClick(tagValue);
  };

  return (
    <div className="tag-cloud">
      <h3>🏷️ Навигация</h3>
      <div className="tags">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className={`tag size-${tag.size}`}
            onClick={() => handleTagClick(tag.value)}
            style={{ cursor: 'pointer' }}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagCloud;