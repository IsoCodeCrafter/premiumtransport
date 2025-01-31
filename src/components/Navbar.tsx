import React, { useState, useEffect } from 'react';
import { Menu, MapPin, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE_NUMBER, NAV_ITEMS } from '../utils/constants';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Aktif bölümü belirleme
      const sections = NAV_ITEMS.map(item => item.href);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Biraz daha geniş bir aralık
          return rect.top <= offset && rect.bottom >= 0;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    // Önce menüyü kapat
    setIsOpen(false);
    
    // Scroll işlemini hemen gerçekleştir
    requestAnimationFrame(() => {
      scrollToSection(href);
    });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gradient-luxury shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 group"
          >
            <MapPin className="w-7 h-7 text-accent group-hover:text-accent-light transition-colors" />
            <div className="flex flex-col">
              <span className="text-xl font-playfair text-white font-bold tracking-wide group-hover:text-accent-light transition-colors">
                CALLIOĞLU
              </span>
              <span className="text-sm text-accent tracking-wider group-hover:text-accent-light transition-colors">
                TAŞIMACILIK
              </span>
            </div>
          </motion.a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link text-white ${
                  activeSection === item.href ? 'text-accent after:w-full' : ''
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Phone Number - Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center"
          >
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="flex items-center space-x-2 pl-8 border-l border-white/20 text-white hover:text-accent transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 group-hover:text-accent-light transition-colors" />
              <span className="font-medium group-hover:text-accent-light transition-colors">
                {PHONE_NUMBER}
              </span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-gradient-luxury border-t border-white/10"
            >
              <div className="space-y-1 p-4">
                {NAV_ITEMS.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors ${
                      activeSection === item.href ? 'text-accent bg-white/5' : ''
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center space-x-2 px-4 py-2 text-accent mt-4 border-t border-white/10"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">{PHONE_NUMBER}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}