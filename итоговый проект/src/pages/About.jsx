import React from 'react';

function About({ t, language }) {
  return (
    <div>
      <div>
        <h2 className="page-title" style={{ fontSize: '2.5rem' }}>
          {language === 'en' ? "👤 About Us" : "👤 О Нас"}
        </h2>
        <div style={{ lineHeight: 1.8, fontSize: '20px' }}>
          {language === 'en' ? (
            <>
              <p>
                <strong style={{ color: '#972874', fontSize: '1.5rem' }}>Bonsai . BONSSAI</strong> — 
                <strong style={{ color: '#8f1838', fontSize: '20px' }}> flower paradise.</strong>
              </p>
              <p style={{ fontSize: '20px' }}>
                In every flower there is a piece of soul, in every bouquet there is a love story.
                <strong style={{ color: '#5f1180', fontSize: '20px' }}> Bonsai</strong> — where feelings bloom.
              </p>
              <p style={{ fontSize: '20px' }}>
                We have a floristic education. This means that we don't just put flowers in a vase. We know how to make friends between a rose and eucalyptus, why a peony turns to the sun and what bouquet will say
                <strong style={{ color: '#068606', fontStyle: 'italic', fontSize: '20px' }}> «thank you»</strong> without a single word.
              </p>
              <p style={{ fontSize: '20px' }}>
                We can create: monobouquets that scream about love, cascading compositions for special days, field, free, asymmetrical, wedding, men's, children's — any kind.
              </p>
              <p style={{ fontSize: '20px' }}>
                <strong style={{ color: '#af0f4c', fontSize: '1.5rem' }}>Flowers are a language.</strong>
                <span style={{ fontSize: '20px' }}> We speak it fluently.</span>
              </p>
            </>
          ) : (
            <>
              <p>
                <strong style={{ color: '#972874', fontSize: '1.5rem' }}>Бонсай . BONSSAI</strong> — 
                <strong style={{ color: '#8f1838', fontSize: '20px' }}> цветочный рай.</strong>
              </p>
              <p style={{ fontSize: '20px' }}>
                В каждом цветке — частичка души, в каждом букете — история любви.
                <strong style={{ color: '#5f1180', fontSize: '20px' }}> Бонсай</strong> — там, где расцветают чувства.
              </p>
              <p style={{ fontSize: '20px' }}>
                У нас за плечами — флористическое образование. А это значит, что мы не просто ставим цветы в вазу. Мы знаем, как подружить розу с эвкалиптом, почему пион поворачивается к солнцу и какой букет скажет
                <strong style={{ color: '#068606', fontStyle: 'italic', fontSize: '20px' }}> «спасибо»</strong> без единого слова.
              </p>
              <p style={{ fontSize: '20px' }}>
                Мы умеем собирать: монобукеты, которые кричат о любви, каскадные композиции для особых дней, полевые, свободные, асимметричные, свадебные, мужские, детские — любые.
              </p>
              <p style={{ fontSize: '20px' }}>
                <strong style={{ color: '#af0f4c', fontSize: '1.5rem' }}>Цветы — это язык.</strong>
                <span style={{ fontSize: '20px' }}> Мы на нём говорим свободно.</span>
              </p>
            </>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <img 
          src="/images/magaz.jpg"
          alt={language === 'en' ? "Our flower shop" : "Наш цветочный магазин"}
          style={{ 
            width: '100%', 
            maxWidth: '800px',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }} 
        />
      </div> 

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
          {language === 'en' ? "Our florist team" : "Наша команда флористов"}
          <span style={{ fontSize: '2rem', marginLeft: '15px' }}>🌸</span>
        </h3>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '30px', 
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/alex.jpg"
              alt="Alexandra" 
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
              🌹 {language === 'en' ? "Alexandra - florist" : "Александра - флорист"}
            </p>
          </div>

          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/nastya.jpg" 
              alt="Anastasia" 
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
              🌸 {language === 'en' ? "Anastasia - florist" : "Анастасия - флорист"}
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '30px', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/din.jpg" 
              alt="Dinara" 
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
              👑 {language === 'en' ? "Dean - employee of the month" : "Дин - лучший сотрудник месяца"}
            </p>
          </div>

          <div style={{ textAlign: 'center', flex: '1 1 300px', maxWidth: '350px' }}>
            <img 
              src="/images/luntic.jpg" 
              alt="Luntik" 
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
              💎 {language === 'en' ? "Luntik - our strictest expert" : "Лунтик - наш самый строгий эксперт"}
            </p>
          </div>
        </div>
      </div>

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
          {language === 'en' ? "Download document «Our Education»" : "Скачать документ «Наше образование»"}
          <span style={{ fontSize: '24px' }}>🎓</span>
        </a>
      </div>
    </div>
  );
}

export default About;