
import React from 'react';
import { Phone, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-locksmith-blue-dark text-white py-24">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/9ad01e84-6553-4d6e-b6ab-730a9c5e110b.png')" 
        }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Serviço de Chaveiro Rápido e Confiável
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Atendimento 24 horas para todas suas emergências
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Clock className="text-locksmith-gold mr-3" size={24} />
                <span>Atendimento rápido - em até 30 minutos</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-locksmith-gold mr-3" size={24} />
                <span>Profissionais qualificados e de confiança</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+5511999999999" 
                className="btn-emergency flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                <span>Ligue Agora</span>
              </a>
              <a 
                href="#contato" 
                className="btn-secondary flex items-center justify-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
          
          {/* Emergency Call Box */}
          <div className="bg-white text-locksmith-blue-dark p-8 rounded-lg shadow-xl max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold mb-4">Atendimento de Emergência</h2>
            <p className="mb-6">
              Trancado para fora? Perdeu suas chaves? Nós podemos ajudar a qualquer momento, 24 horas por dia, 7 dias por semana.
            </p>
            <div className="bg-locksmith-blue rounded-lg p-6 text-white mb-6">
              <h3 className="text-xl font-semibold mb-2">Ligue Agora</h3>
              <a href="tel:+5511999999999" className="text-2xl font-bold hover:text-locksmith-gold transition-colors">
                (11) 99999-9999
              </a>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium text-locksmith-blue-dark">Atendemos em toda São Paulo</p>
              <p>Tempo médio de chegada: 30 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
