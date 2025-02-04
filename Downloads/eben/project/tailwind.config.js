/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937',
          light: '#374151',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#D4AF37',
          light: '#E9C767',
          dark: '#B3912E',
        },
        cream: '#FDF8F3',
        stone: '#1C1917',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(to right, #1F2937, #111827)',
        'gradient-gold': 'linear-gradient(to right, #D4AF37, #B3912E)',
      }
    },
  },
  plugins: [],
}