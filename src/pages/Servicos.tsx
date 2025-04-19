
import React from 'react';
import EmergencyBanner from '@/components/EmergencyBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';

const Servicos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <EmergencyBanner />
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-locksmith-blue-dark text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-xl text-gray-300">Conheça nossos serviços profissionais para todas as suas necessidades.</p>
          </div>
        </div>
        
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
