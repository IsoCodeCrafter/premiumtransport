import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hakkımızda</h3>
            <p>
              20 yılı aşkın deneyimimizle, sektörde öncü hizmet anlayışımızla
              çalışıyoruz. Müşteri memnuniyetini en üst düzeyde tutarak, 
              profesyonel ekibimizle 7/24 hizmet veriyoruz.
            </p>
          </div>

          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <ul>
              <li><a href="#home">Ana Sayfa</a></li>
              <li><a href="#about">Hakkımızda</a></li>
              <li><a href="#services">Hizmetler</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>İletişim</h3>
            <ul>
              <li> +90 (XXX) XXX XX XX</li>
              <li> info@example.com</li>
              <li> Antalya, Türkiye</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
