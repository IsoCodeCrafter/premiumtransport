import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="animated-background"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Merhaba, Ben <span className="text-gradient">[İsim]</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Web Developer
          </p>
          <p className="description">
            Modern ve kullanıcı dostu web uygulamaları geliştiriyorum
          </p>
          <div className="hero-buttons">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="primary-button"
            >
              Projelerimi İncele
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="secondary-button"
            >
              İletişime Geç
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="scroll-down">
        <Link to="about" smooth={true} duration={500}>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            ↓
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
