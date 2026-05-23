import React from 'react';

function About() {
  return (
    <div>
      <div>
        <h2 className="page-title">👤 О Нас</h2>
        <div style={{ lineHeight: 1.6, fontSize: '16px' }}>
          <p>
            <strong style={{ color: '#972874', fontSize: '1.2rem' }}>Бонсай . BONSSAI</strong> — 
            <strong style={{ color: '#8f1838', fontSize: '16px' }}> цветочный рай.</strong>
          </p>
          <p>
            В каждом цветке — частичка души, в каждом букете — история любви.  
            <strong style={{ color: '#5f1180', fontSize: '16px' }}> Бонсай</strong> — там, где расцветают чувства.
          </p>
          <p>
            У нас за плечами — флористическое образование.
            А это значит, что мы не просто ставим цветы в вазу.
            Мы знаем, как подружить розу с эвкалиптом, почему пион поворачивается 
            к солнцу и какой букет скажет 
            <strong style={{ color: '#068606', fontStyle: 'italic', fontSize: '16px' }}> «спасибо»</strong> без единого слова.
          </p>
          <p style={{ fontSize: '16px' }}>Мы умеем собирать:
            — монобукеты, которые кричат о любви,
            — каскадные композиции для особых дней,
            — полевые, свободные, асимметричные, свадебные, мужские, детские — любые.
          </p>
          <p>
            <strong style={{ color: '#af0f4c', fontSize: '1.2rem' }}>Цветы — это язык.</strong> 
            <span style={{ fontSize: '16px' }}> Мы на нём говорим свободно.</span>
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f4f8', borderRadius: '15px' }}>
        <h3 style={{ fontSize: '1.3rem' }}>🎓 Наше образование</h3>
        <p style={{ fontSize: '16px' }}>
          <a href="/Наше образование.docx" download style={{ fontSize: '16px' }}>
             Скачать документ «Наше образование»
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;