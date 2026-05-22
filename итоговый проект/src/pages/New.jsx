import React from 'react';

function New() {
  const newsItems = [
    { id: 1, title: 'Новая коллекция плюшевых друзей!', date: '18.05.2026', text: 'Мягкие, тёплые и готовы обниматься — уже в магазине.' },
    { id: 2, title: 'Панды «Бамбук» снова в наличии', date: '15.05.2026', text: 'Большая и маленькая панда — мягкий парный набор для подарка.' },
    { id: 3, title: 'Скоро открытие нового магазина', date: '10.05.2026', text: 'Ждём вас по новому адресу с 1 июня!' }
  ];

  return (
    <div>
      <h2 className="page-title">📰 Новости</h2>
      <div className="news-list">
        {newsItems.map(item => (
          <div key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default New;