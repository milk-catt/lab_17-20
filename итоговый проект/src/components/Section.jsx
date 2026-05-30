import React from 'react';

function Section({ changePage, currentPage, onClearTag, t }) {
  const menuItems = [
    { id: 'new', name: `📰 ${t.news}` },
    { id: 'about', name: `👤 ${t.about}` },
    { id: 'feedback', name: `📞 ${t.contacts}` },
    { id: 'catalog', name: `💐 ${t.catalog}` },
    { id: 'cart', name: `🛒 ${t.cart}` }
  ];

  const handlePageChange = (pageId) => {
    if (pageId === 'catalog') {
      onClearTag();
    }
    changePage(pageId);
  };

  return (
    <div className="section">
      <div className="nav-menu">
        <h3>{t.navigation}</h3>
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
        <h4>{t.promotions}</h4>
        <div className="banner">{t.promo1}</div>
        <div className="banner">{t.promo2}</div>
        <div className="banner">{t.promo3}</div>
      </div>
    </div>
  );
}

export default Section;