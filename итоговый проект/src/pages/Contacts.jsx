// src/pages/Contacts.jsx
import React, { useState } from 'react';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🌷 Спасибо, ${formData.name}! Мы свяжемся с вами.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '30px'
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#e91e63',
    textAlign: 'center',
    marginBottom: '30px'
  };

  const infoCardStyle = {
    backgroundColor: '#fff0f5',
    padding: '25px',
    borderRadius: '20px',
    marginBottom: '30px',
    textAlign: 'center'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const inputStyle = {
    padding: '14px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '16px',
    fontFamily: 'inherit'
  };

  const buttonStyle = {
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>📞 Свяжитесь с нами</h1>
      
      <div style={infoCardStyle}>
        <p>📱 Телефон: <strong>+7 908 517 50 43</strong></p>
        <p>📧 Email: <strong>flowers@spring.ru</strong></p>
        <p>📍 Адрес: <strong>г. Москва, ул. Цветочная, д. 7</strong></p>
        <p>⏰ Режим работы: <strong>Ежедневно 9:00 - 21:00</strong></p>
      </div>
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Напишите нам</h2>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Отправить сообщение
        </button>
      </form>
    </div>
  );
}

export default Contacts;