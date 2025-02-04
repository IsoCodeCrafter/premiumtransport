import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Vehicle } from '../types';

const vehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Mercedes-Benz Sprinter',
    description: 'Konforlu grup seyahatleri için ideal çözüm',
    images: [
      '/public/assets/Mercedes-Benz Sprinter1.jpg',
      '/public/assets/Mercedes-Benz Sprinter2.jpg',
      '/public/assets/Mercedes-Benz Sprinter3.jpg'
    ],
    capacity: 22,
    features: [
      'Ergonomik Koltuklar',
      'Geniş Bagaj Alanı',
      'Klima Sistemi',
      'USB Şarj',
      'LED Aydınlatma',
      'Yüksek Tavan'
    ]
  },
  {
    id: 'v2',
    name: 'Volkswagen Crafter',
    description: 'Konforlu grup seyahatleri için ideal çözüm',
    images: [
      '/public/assets/Volkswagen Crafter1.jpg',
      '/public/assets/Volkswagen Crafter2.jpg',
      '/public/assets/Volkswagen Crafter3.jpg'
    ],
    capacity: 22,
    features: [
      'Ergonomik Koltuklar',
      'Geniş Bagaj Alanı',
      'Klima Sistemi',
      'USB Şarj',
      'LED Aydınlatma',
      'Yüksek Tavan'
    ]
  },
  {
    id: 'v3',
    name: 'Mercedes-Benz Vito VIP',
    description: 'Küçük gruplar için lüks transfer seçeneği',
    images: [
      '/public/assets/Mercedes-Benz Vito VIP 1.jpeg',
      '/public/assets/Mercedes-Benz Vito VIP 2.jpeg',
      '/public/assets/Mercedes-Benz Vito VIP 3.jpeg'
    ],
    capacity: 8,
    features: [
      'Kapitone Deri Koltuk',
      'Özel Ses Sistemi',
      'Tablet Ekranlar',
      'Mini Bar',
      'Ambient Aydınlatma',
      'Bagaj Bölümü'
    ]
  },
  {
    id: 'v4',
    name: 'Mercedes-Vito Maybach',
    description: 'Ultra lüks VIP transfer deneyimi',
    images: [
      '/public/assets/Mercedes-Vito Maybach1.jpeg',
      '/public/assets/Mercedes-Vito Maybach2.jpeg',
      '/public/assets/Mercedes-Vito Maybach3.jpeg'
    ],
    capacity: 8,
    features: [
      'Executive Koltuklar',
      'Masaj Fonksiyonu',
      'Özel Mini Bar',
      'Burmester Ses',
      'Panoramik Tavan',
      'Özel Şoför'
    ]
  }
];

function Fleet() {
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: string]: number }>({});

  const nextImage = (vehicleId: string) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [vehicleId]: ((prev[vehicleId] || 0) + 1) % vehicles.find(v => v.id === vehicleId)!.images.length
    }));
  };

  const prevImage = (vehicleId: string) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [vehicleId]: ((prev[vehicleId] || 0) - 1 + vehicles.find(v => v.id === vehicleId)!.images.length) % vehicles.find(v => v.id === vehicleId)!.images.length
    }));
  };

  return (
    <section id="fleet" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lüks Araç Filomuz</h2>
          <p className="text-lg text-gray-600">Premium araçlarımızla eşsiz konfor deneyimi yaşayın</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl overflow-hidden group"
            >
              <div className="relative h-64">
                <motion.img
                  key={activeImageIndexes[vehicle.id] || 0}
                  src={vehicle.images[activeImageIndexes[vehicle.id] || 0]}
                  alt={vehicle.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    prevImage(vehicle.id);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    nextImage(vehicle.id);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {vehicle.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        (activeImageIndexes[vehicle.id] || 0) === idx ? 'bg-white scale-110' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{vehicle.description}</p>
                  </div>
                  <div className="flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{vehicle.capacity} Kişilik</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-accent mr-1" />
                    <span>Tam Sigortalı</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-accent mr-1" />
                    <span>VIP</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fleet;