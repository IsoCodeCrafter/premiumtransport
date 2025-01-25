import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">LOGO</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Ana Sayfa</a></li>
            <li><a href="#services" className="nav-link">Hizmetler</a></li>
            <li><a href="#about" className="nav-link">Hakkımızda</a></li>
            <li><a href="#contact" className="nav-link">İletişim</a></li>
          </ul>
        </div>

        <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
