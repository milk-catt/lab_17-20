import React from 'react';
import TagCloud from './TagCloud';

function Aside({ onTagClick, t, language }) {  // ← ДОБАВИТЬ language
  return (
    <div className="aside">
      <TagCloud onTagClick={onTagClick} t={t} language={language} />  {/* ← ДОБАВИТЬ language */}
      <div className="aside-banners">
        <div className="aside-banner">{t.subscribe}</div>
        <div className="aside-banner">{t.cards}</div>
        <div className="aside-banner">{t.recommended}</div>
      </div>
    </div>
  );
}

export default Aside;