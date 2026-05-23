import React from 'react';

function About() {
  return (
    <div>
      <div>
        <h2 className="page-title" style={{ fontSize: '2.5rem' }}>👤 О Нас</h2>
        <div style={{ lineHeight: 1.8, fontSize: '20px' }}>
          <p>
            <strong style={{ color: '#972874', fontSize: '1.5rem' }}>Бонсай . BONSSAI</strong> — 
            <strong style={{ color: '#8f1838', fontSize: '20px' }}> цветочный рай.</strong>
          </p>
          <p style={{ fontSize: '20px' }}>
            В каждом цветке — частичка души, в каждом букете — история любви.  
            <strong style={{ color: '#5f1180', fontSize: '20px' }}> Бонсай</strong> — там, где расцветают чувства.
          </p>
          <p style={{ fontSize: '20px' }}>
            У нас за плечами — флористическое образование.
            А это значит, что мы не просто ставим цветы в вазу.
            Мы знаем, как подружить розу с эвкалиптом, почему пион поворачивается 
            к солнцу и какой букет скажет 
            <strong style={{ color: '#068606', fontStyle: 'italic', fontSize: '20px' }}> «спасибо»</strong> без единого слова.
          </p>
          <p style={{ fontSize: '20px' }}>Мы умеем собирать:
            — монобукеты, которые кричат о любви,
            — каскадные композиции для особых дней,
            — полевые, свободные, асимметричные, свадебные, мужские, детские — любые.
          </p>
          <p style={{ fontSize: '20px' }}>
            <strong style={{ color: '#af0f4c', fontSize: '1.5rem' }}>Цветы — это язык.</strong> 
            <span style={{ fontSize: '20px' }}> Мы на нём говорим свободно.</span>
          </p>
        </div>
      </div>

      {/* ФОТО МАГАЗИНА */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <img 
          src="/images/magaz.jpg"
          alt="Наш цветочный магазин"
          style={{ 
            width: '100%', 
            maxWidth: '800px',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }} 
        />
      </div> 

      {/* ГАЛЕРЕЯ КОМАНДЫ - ПО 2 ФОТО В РЯДУ */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ 
  textAlign: 'center', 
  color: '#8B0000', 
  marginBottom: '20px', 
  fontSize: '2rem',
  fontFamily: "'Playfair Display', 'Georgia', serif",
  fontWeight: 'normal',
  letterSpacing: '1px'
}}>
  <span style={{ fontSize: '2rem', marginRight: '15px' }}>🌸</span>
  Наша команда флористов
  <span style={{ fontSize: '2rem', marginLeft: '15px' }}>🌸</span>
</h3>
        
        {/* ПЕРВЫЙ РЯД - 2 фотографии */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '30px', 
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          {/* КАРТИНКА 1 - Александра */}
          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/alex.jpg"
              alt="Александра" 
              style={{ 
                width: '100%', 
                maxWidth: '300px',
                height: '300px',
                objectFit: 'cover', 
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }} 
            />
            <p style={{ marginTop: '12px', color: '#666', fontSize: '18px' }}>
              🌹 Александра - флорист
            </p>
          </div>

          {/* КАРТИНКА 2 - Анастасия */}
          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/nastya.jpg" 
              alt="Анастасия" 
              style={{ 
                width: '100%', 
                maxWidth: '300px',
                height: '300px',
                objectFit: 'cover', 
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }} 
            />
            <p style={{ marginTop: '12px', color: '#666', fontSize: '18px' }}>
              🌸 Анастасия - флорист
            </p>
          </div>
        </div>

        {/* ВТОРОЙ РЯД - 2 фотографии */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '30px', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* КАРТИНКА 3 - Динара */}
          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/din.jpg" 
              alt="Динара" 
              style={{ 
                width: '100%', 
                maxWidth: '300px',
                height: '300px',
                objectFit: 'cover', 
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }} 
            />
            <p style={{ marginTop: '12px', color: '#666', fontSize: '18px' }}>
              👑 Дин - лучший сотрудник месяца
            </p>
          </div>

          {/* КАРТИНКА 4 - Лунтик */}
          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/luntic.jpg" 
              alt="Лунтик" 
              style={{ 
                width: '100%', 
                maxWidth: '300px',
                height: '300px',
                objectFit: 'cover', 
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }} 
            />
            <p style={{ marginTop: '12px', color: '#666', fontSize: '18px' }}>
              💎 Лунтик - наш самый строгий эксперт
            </p>
          </div>
        </div>
      </div>

      {/* БЛОК ОБРАЗОВАНИЯ */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a 
          href="/Наше образование.docx" 
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'linear-gradient(135deg, #ff69b4, #e91e63)',
            color: 'white',
            textDecoration: 'none',
            padding: '18px 40px',
            borderRadius: '50px',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(233, 30, 99, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(233, 30, 99, 0.3)';
          }}
        >
          <span style={{ fontSize: '28px' }}>📥</span>
          Скачать документ «Наше образование»
          <span style={{ fontSize: '24px' }}>🎓</span>
        </a>
      </div>
    </div>
  );
}

export default About;