import React from 'react';
import { Plane, Car, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Antalya Havalimanı Transfer",
    description: "7/24 havalimanı transfer hizmeti",
    details: [
      "Antalya Havalimanı - Otel transferi",
      "VIP karşılama hizmeti",
      "Bagaj taşıma desteği",
      "Uçuş takip sistemi",
      "Özel karşılama salonu",
      "Hızlı geçiş hizmeti"
    ]
  },
  {
    icon: <Car className="w-12 h-12" />,
    title: "Antalya VIP Transfer",
    description: "Şehir içi ve şehirler arası özel transfer",
    details: [
      "Lüks araç filosu",
      "Profesyonel şoförler",
      "Şehir içi transfer",
      "Şehirler arası transfer",
      "Otel - AVM transferi",
      "Özel etkinlik transferi"
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Antalya Tur Hizmetleri",
    description: "Özel tur ve gezi organizasyonları",
    details: [
      "Antalya şehir turu",
      "Side - Manavgat turu",
      "Alanya turu",
      "Köprülü Kanyon turu",
      "Demre - Myra turu",
      "Özel yat turları"
    ]
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Araç Kiralama",
    description: "Günlük ve haftalık araç kiralama",
    details: [
      "Şoförlü kiralama",
      "Uzun dönem kiralama",
      "Düğün arabası",
      "Özel etkinlik",
      "Kurumsal kiralama",
      "Havalimanı teslim"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Hizmetlerimiz</h2>
          <p className="text-lg text-gray-600">İhtiyaçlarınıza özel lüks taşımacılık deneyimi</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:bg-stone group"
            >
              <div className="text-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-300 ${
                      idx % 2 === 0 ? 'bg-accent group-hover:bg-white' : 'bg-accent'
                    }`} />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}