import React from 'react';

function TagCloud({ onTagClick, language }) {
  const tags = [
    { ru: ' Розы', en: ' Roses', value: 'розы', size: 5 },
    { ru: ' Хризантемы', en: ' Chrysanthemums', value: 'хризантемы', size: 4 },
    { ru: ' Сирень', en: ' Lilac', value: 'сирень', size: 3 },
    { ru: ' Цветочные корзинки', en: ' Flower Baskets', value: 'цветочные корзинки', size: 2 },
    { ru: ' Хиты продаж', en: ' Bestsellers', value: 'хит продаж', size: 4 },
    { ru: ' Новинки', en: ' New', value: 'новинки', size: 3 },
    { ru: ' Распродажа', en: ' Sale', value: 'распродажа', size: 5 },
  ];

  const handleTagClick = (tagValue) => {
    onTagClick(tagValue);
  };

  return (
    <div className="tag-cloud">
      <h3>{language === 'en' ? '🏷️ Navigation' : '🏷️ Навигация'}</h3>
      <div className="tags">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className={`tag size-${tag.size}`}
            onClick={() => handleTagClick(tag.value)}
            style={{ cursor: 'pointer' }}
          >
            {language === 'en' ? tag.en : tag.ru}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagCloud;