
import React from 'react';
import EmergencyBanner from '@/components/EmergencyBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contato = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <EmergencyBanner />
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-locksmith-blue-dark text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
            <p className="text-xl text-gray-300">Entre em contato conosco para qualquer dúvida ou solicitação de serviço.</p>
          </div>
        </div>
        
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
