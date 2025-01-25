import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '📦' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header" data-aos="fade-up">
          <h2>İletişim</h2>
          <p className="subtitle">Benimle İletişime Geçin</p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>E-posta</h3>
              <p>example@example.com</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h3>Telefon</h3>
              <p>+90 (XXX) XXX XX XX</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <h3>Konum</h3>
              <p>İstanbul, Türkiye</p>
            </div>
          </div>

          <div className="contact-form-container" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-posta Adresiniz"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınız"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Gönder
              </button>
              {isSubmitted && (
                <div className="success-message">
                  Mesajınız başarıyla gönderildi!
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="social-links" data-aos="fade-up">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">{link.icon}</span>
              <span className="social-name">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
