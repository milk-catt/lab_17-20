import React from 'react';

function New({ t, language }) {
  const newsItems = [
    { 
      id: 1, 
      title: { ru: '🌹 Новое поступление: Эквадорские розы!', en: '🌹 New arrival: Ecuadorian roses!' }, 
      date: '22.05.2026', 
      text: { 
        ru: 'Привезли свежие розы из Эквадора! Огромные бутоны диаметром до 7 сантиметров, более 60 оттенков на выбор. Эти розы радуют свежестью до 3 недель. Цены от 2.400 рублей за букет.',
        en: 'Fresh roses from Ecuador have arrived! Huge buds up to 7 centimeters in diameter, more than 60 shades to choose from. These roses stay fresh for up to 3 weeks. Prices from 2,400 rubles per bouquet.'
      }
    },
    { 
      id: 2, 
      title: { ru: '🌸 Сезон пионов открыт!', en: '🌸 Peony season is open!' }, 
      date: '20.05.2026', 
      text: { 
        ru: 'Нежные пионы из Голландии уже в продаже! В наличии молочные, розовые, бордовые и коралловые сорта. Идеальный подарок для любимых женщин. Заказывайте заранее — пионы разлетаются очень быстро!',
        en: 'Delicate peonies from Holland are now on sale! Available in milky, pink, burgundy and coral varieties. The perfect gift for beloved women. Order in advance — peonies sell out very quickly!'
      }
    },
    { 
      id: 3, 
      title: { ru: '🎁 Подарочные сертификаты теперь доступны', en: '🎁 Gift certificates are now available' }, 
      date: '15.05.2026', 
      text: { 
        ru: 'Подарите близким возможность самим выбрать букет! Теперь у нас есть подарочные сертификаты на любую сумму от 1000 до 10000 рублей. Срок действия сертификата — 6 месяцев.',
        en: 'Give your loved ones the opportunity to choose their own bouquet! We now have gift certificates for any amount from 1000 to 10000 rubles. The certificate is valid for 6 months.'
      }
    },
    { 
      id: 4, 
      title: { ru: '🌈 Тренд сезона: Эндорфиновые букеты специально для вас!', en: '🌈 Season trend: Endorphin bouquets especially for you!' }, 
      date: '13.05.2026', 
      text: { 
        ru: 'Букеты из цветов всех цветов радуги! Красные розы, оранжевые лилии, жёлтые подсолнухи, зелёные гортензии, голубые дельфиниумы, синие ирисы и фиолетовые флоксы. Выглядит невероятно!',
        en: 'Bouquets of flowers in all the colors of the rainbow! Red roses, orange lilies, yellow sunflowers, green hydrangeas, blue delphiniums, blue irises and purple phlox. It looks incredible!'
      }
    },
    { 
      id: 5, 
      title: { ru: '💐 Букеты «Как с луга» — DIY-наборы', en: '💐 Meadow-style bouquets — DIY kits' }, 
      date: '09.05.2026', 
      text: { 
        ru: 'Продаём наборы полевых цветов для самостоятельной сборки: ромашки, васильки, колокольчики, клевер, злаки. В комплекте — лента и крафтовая бумага. Соберите букет своими руками! Набор — 800 рублей',
        en: 'We sell wildflower kits for self-assembly: daisies, cornflowers, bells, clover, cereals. The kit includes ribbon and craft paper. Make a bouquet with your own hands! Kit — 800 rubles'
      }
    },
    { 
      id: 6, 
      title: { ru: '💍 Свадебное оформление со скидкой 10%', en: '💍 Wedding decoration with 10% discount' }, 
      date: '06.05.2026', 
      text: { 
        ru: 'При заказе свадебного оформления от 15000 рублей — скидка 10% на букет невесты. Поможем создать идеальную атмосферу на вашем празднике!',
        en: 'When ordering wedding decoration from 15000 rubles — 10% discount on the bridal bouquet. We will help create the perfect atmosphere for your celebration!'
      }
    },
    { 
      id: 7, 
      title: { ru: '⚡ Акция: «Приведи друга и получи скидку 20%»', en: '⚡ Promotion: Bring a friend and get 20% off' }, 
      date: '02.05.2026', 
      text: { 
        ru: 'Порекомендуйте наш магазин другу. Когда ваш друг сделает первый заказ от 1500 рублей, вы оба получите скидку 20% на следующий букет!',
        en: 'Recommend our store to a friend. When your friend makes their first order over 1500 rubles, you both get 20% off your next bouquet!'
      }
    },
    { 
      id: 8, 
      title: { ru: '🎓 Букеты для выпускников со скидкой 15%', en: '🎓 Graduation bouquets with 15% discount' }, 
      date: '30.04.2026', 
      text: { 
        ru: 'Закажите букет для выпускного до 20 мая и получите скидку 15%! Мы подготовили тематические композиции с бантами, лентами и воздушными шариками. Идеальный подарок для школьников и студентов.',
        en: 'Order a graduation bouquet before May 20 and get a 15% discount! We have prepared themed compositions with bows, ribbons and balloons. The perfect gift for schoolchildren and students.'
      }
    },
    { 
      id: 9, 
      title: { ru: '🚚 Бесплатная доставка при заказе от 3000 рублей', en: '🚚 Free delivery on orders over 3000 rubles' }, 
      date: '25.04.2026', 
      text: { 
        ru: 'В честь открытия цветочного сезона мы дарим бесплатную доставку по Краснодару при заказе от 3000 рублей!',
        en: 'In honor of the opening of the flower season, we offer free delivery in Krasnodar on orders over 3000 rubles!'
      }
    },
    { 
      id: 10, 
      title: { ru: '💜 Свежая сирень', en: '💜 Fresh lilac' }, 
      date: '20.04.2026', 
      text: { 
        ru: 'Ароматная сирень свежего среза теперь доступна для заказа! Стоимость одной ветки — 175 рублей, букет из 5 веток — 600 рублей.',
        en: 'Fragrant freshly cut lilacs are now available for order! Price per branch — 175 rubles, bouquet of 5 branches — 600 rubles.'
      }
    },
    { 
      id: 11, 
      title: { ru: '💐 Мастер-класс «Собери букет своими руками»', en: '💐 Master class "Make a bouquet with your own hands"' }, 
      date: '15.04.2026', 
      text: { 
        ru: 'Приглашаем всех желающих на бесплатный мастер-класс, который состоится 30 мая в 12:00. Вы научитесь собирать букеты как настоящий флорист! Все материалы предоставляются бесплатно. Запись по телефону +7 908 517 50 43. Количество мест ограничено!',
        en: 'We invite everyone to a free master class on May 30 at 12:00. You will learn how to arrange bouquets like a real florist! All materials are provided free of charge. Registration by phone +7 908 517 50 43. Limited spots available!'
      }
    },
    { 
      id: 12, 
      title: { ru: '🦋 Букеты из бабочек — тренд сезона', en: '🦋 Butterfly bouquets — season trend' }, 
      date: '05.04.2026', 
      text: { 
        ru: 'Эффектные букеты с искусственными бабочками на проволоке! Они создают впечатление, что букет парит в воздухе. Отличная альтернатива живым цветам — стоит годами. Цены от 2500 рублей.',
        en: 'Spectacular bouquets with artificial butterflies on wire! They give the impression that the bouquet is floating in the air. A great alternative to live flowers — lasts for years. Prices from 2500 rubles.'
      }
    },
    { 
      id: 13, 
      title: { ru: '🧼 Мыльные букеты — не вянут и дарят радость', en: '🧼 Soap bouquets — don\'t wilt and bring joy' }, 
      date: '01.04.2026', 
      text: { 
        ru: 'Букеты из мыла ручной работы появились в нашем магазине! Они выглядят как настоящие цветы, но не требуют полива и не вызывают аллергию. Отличный подарок для тех, у кого аллергия на живые цветы. Цены от 1200 рублей.',
        en: 'Handmade soap bouquets have appeared in our store! They look like real flowers, but do not require watering and do not cause allergies. A great gift for those who are allergic to live flowers. Prices from 1200 rubles.'
      }
    }
  ];

  const getText = (field) => {
    if (!field) return '';
    if (typeof field === 'object') {
      return field[language] || field.ru;
    }
    return field;
  };

  return (
    <div>
      <h2 className="page-title">
        {language === 'en' ? '📰 News' : '📰 Новости'}
      </h2>
      <div className="news-list">
        {newsItems.map(item => (
          <div key={item.id} className="news-item">
            <h3>{getText(item.title)}</h3>
            <p className="news-date">{item.date}</p>
            <p>{getText(item.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default New;