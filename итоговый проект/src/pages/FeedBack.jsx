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
      
      <div style={{ marginBottom: 20 }}>
        <p>📱 Телефон: <strong>+7 908 517 50 43</strong></p>
        <p>💬 Telegram: <strong>@softtoys</strong></p>
        <p>📧 Email: <strong>info@softtoys.ru</strong></p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          placeholder="Ваше имя" 
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
        <input 
          type="email" 
          placeholder="Ваш Email" 
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