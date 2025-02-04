import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Güvenilir Hizmet",
    description: "2014'ten bu yana binlerce müşteriye güvenli transfer hizmeti sunuyoruz. Tüm araçlarımız tam sigortalı ve düzenli bakımlıdır."
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Profesyonel Ekip",
    description: "Deneyimli, yabancı dil bilen, şehri iyi tanıyan ve müşteri memnuniyetini ön planda tutan uzman sürücü kadromuz"
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "7/24 Hizmet",
    description: "Günün her saati ulaşabileceğiniz müşteri hizmetleri ve kesintisiz transfer desteği. Uçuş takip sistemiyle dakik karşılama"
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Müşteri Odaklı",
    description: "Her müşterimize özel VIP hizmet anlayışı. Kişiselleştirilmiş transfer çözümleri ve esnek rezervasyon imkanı"
  }
];

const achievements = [
  { number: "10+", text: "Yıllık Deneyim" },
  { number: "50+", text: "Araç Filosu" },
  { number: "100K+", text: "Mutlu Müşteri" },
  { number: "4.9/5", text: "Müşteri Memnuniyeti" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h2>
          <p className="text-lg text-gray-600">Antalya'nın güvenilir transfer şirketi</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                2014 yılından bu yana, Callıoğlu Transfer olarak Antalya ve çevresinde premium ulaşım 
                hizmetleri sunuyoruz. Modern araç filomuz ve profesyonel ekibimizle, 
                seyahatlerinizi konforlu ve güvenli hale getiriyoruz.
              </p>
              <ul className="space-y-3">
                {[
                  "ISO 9001:2015 Kalite Belgeli Hizmet",
                  "Tam Sigortalı Premium Araç Filosu",
                  "Profesyonel ve Deneyimli Sürücü Kadrosu",
                  "7/24 Türkçe ve İngilizce Müşteri Desteği",
                  "Özel Transfer ve Tur Çözümleri"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="luxury-card"
                >
                  <div className="text-accent mb-3">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Antalya Transfer Hizmeti"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg text-center shadow-lg"
                >
                  <div className="text-3xl font-bold text-accent mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}