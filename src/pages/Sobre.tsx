
import React from 'react';
import EmergencyBanner from '@/components/EmergencyBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';

const Sobre = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <EmergencyBanner />
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-locksmith-blue-dark text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-xl text-gray-300">Conheça mais sobre nossa história e nossos valores.</p>
          </div>
        </div>
        
        <About />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
