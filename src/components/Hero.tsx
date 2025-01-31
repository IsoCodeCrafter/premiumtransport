import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Shield, Star } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import toast from 'react-hot-toast';

export default function Hero() {
  const showQuoteInfo = () => {
    const toastId = toast.custom(
      (t) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-4"
        >
          <h3 className="text-xl font-semibold mb-3">Fiyat Bilgisi</h3>
          <p className="text-gray-600 mb-4">
            Şehir içi 4 saate kadar olan transferler ve tur hizmetleri için günlük  3000 TL'dir. 
            Araçlar müsaitlik durumuna göre değişiklik gösterebilir.
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                setTimeout(() => scrollToSection('contact'), 300);
              }}
              className="bg-[#C5A572] hover:bg-[#B89355] text-white px-4 py-2 rounded-lg transition"
            >
              Daha Fazla Detay
            </button>
          </div>
        </motion.div>
      ),
      {
        duration: 6000,
        position: 'top-center',
        onClose: () => {
          // Toast kapandığında iletişim formuna scroll et
          scrollToSection('contact');
        }
      }
    );
  };

  return (
    <div className="relative min-h-screen pt-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://denitsa.ru/wp-content/uploads/2019/10/airport-transfer.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-accent mr-2" />
              <span className="text-white text-sm">%100 Güvenli Transfer</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-accent mr-2" />
              <span className="text-white text-sm">Premium VIP Hizmet</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-accent mr-2" />
              <span className="text-white text-sm">7/24 Rezervasyon</span>
            </div>
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent font-playfair text-xl md:text-2xl block mb-4"
          >
            ANTALYA'NIN ÖNCÜ TRANSFER HİZMETİ
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6"
          >
            Antalya'da Lüks <br />
            <span className="text-accent italic">Transfer Deneyimi</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
          >
            Antalya Havalimanı transfer, şehir içi VIP taşımacılık ve özel tur hizmetlerimizle
            konforlu ve güvenli seyahat deneyimi sunuyoruz.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showQuoteInfo}
              className="btn-primary"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Hemen Teklif Al
            </motion.button>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Hizmetlerimizi Keşfedin
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={() => scrollToSection('services')}
      >
        <ChevronDown className="w-10 h-10 text-accent animate-bounce" />
      </motion.div>
    </div>
  );
}