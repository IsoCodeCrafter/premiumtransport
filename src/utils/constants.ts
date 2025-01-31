export const PHONE_NUMBER = "0543 880 45 75";
export const EMAIL = "info@callioglutasimacilik.com";
export const ADDRESS = "Kızıltoprak Mah. A. Çetinkaya Cad. Gebizli Apt. No:167/3 Muratpaşa / ANTALYA";

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/callioglutransfer",
  instagram: "https://instagram.com/callioglutransfer",
  whatsapp: "https://wa.me/905438804575"
};

export const SERVICE_TYPES = [
  "Havalimanı Transfer",
  "Günlük Tur",
  "Haftalık Kiralama",
  "VIP Servis"
] as const;

export const BOOKING_HOURS = Array.from({ length: 24 }, (_, i) => 
  `${String(i).padStart(2, '0')}:00`
);

export const MAX_PASSENGERS = 16;

export const SCROLL_OFFSET = 80;

export const NAV_ITEMS = [
  { href: 'services', label: 'Hizmetler' },
  { href: 'fleet', label: 'Filomuz' },
  { href: 'gallery', label: 'Galeri' },
  { href: 'references', label: 'Referanslar' },
  { href: 'about', label: 'Hakkımızda' },
  { href: 'contact', label: 'İletişim' }
] as const;

export const VEHICLES = [
  { 
    id: 'v1', 
    name: 'Mercedes-Benz Sprinter VIP',
    pricePerHour: 1200
  },
  { 
    id: 'v2', 
    name: 'Volkswagen Crafter Premium',
    pricePerHour: 900
  },
  { 
    id: 'v3', 
    name: 'Mercedes-Benz Vito VIP',
    pricePerHour: 750
  },
  { 
    id: 'v4', 
    name: 'Mercedes-Maybach S-Class',
    pricePerHour: 2000
  }
];

export const DURATIONS = [
  { id: 'd1', name: '4 Saat', value: 4 },
  { id: 'd2', name: '8 Saat', value: 8 },
  { id: 'd3', name: '12 Saat', value: 12 },
  { id: 'd4', name: 'Tam Gün (24 Saat)', value: 24 }
];