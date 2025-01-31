import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Gallery from './components/Gallery';
import References from './components/References';
import About from './components/About';
import Contact from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Fleet />
        <Gallery />
        <References />
        <About />
        <Contact />
      </div>
    </ErrorBoundary>
  );
}

export default App;