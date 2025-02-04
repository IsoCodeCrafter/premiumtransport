import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// EmailJS'i initialize et
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster position="top-right" />
  </StrictMode>
);