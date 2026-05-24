import React, { useState } from 'react';

function FeedBack() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${form.name}! Ваше сообщение отправлено.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2 className="page-title">📞 Обратная связь</h2>
      
      <div className="feedback-content" style={{ marginBottom: 20 }}>
        <p>📱 Телефон: <strong> 
          <a href="tel:88005553535">8-(800)-555-35-35</a> 
          - Проще позвонить чем у кого-то занимать!😘</strong></p>
        <p>💬 Telegram: <strong>
          <a href="https://t.me/saitostroeniethisidisgusting">https://t.me/saitostroeniethisidisgusting</a>
          </strong>
        </p>
        <p>💬 ВКонтакте: <strong><a href="https://vk.me/join/q_xeuvYt3EAAjQB5yPUr154ddd7VtPbfZno=">заходите в общий чатик</a></strong></p>
        <p>📧 Email: <strong>
          <a href="mailto:aleolei@sfedu.ru">aleolei@sfedu.ru </a>
            |
          <a href="mailto:chekrizova@sfedu.ru"> chekrizova@sfedu.ru</a>
          </strong></p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          placeholder="ФИО" 
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
        />
        <textarea 
          placeholder="Ваш вопрос" 
          rows="5"
          value={form.message}
          onChange={(e) => setForm({...form, message: e.target.value})}
          required
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default FeedBack;