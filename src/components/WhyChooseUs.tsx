
import React from 'react';
import { Clock, Shield, DollarSign, Award } from 'lucide-react';

const features = [
  {
    icon: <Clock className="text-locksmith-gold" size={48} />,
    title: 'Atendimento Rápido',
    description: 'Chegamos em até 30 minutos em qualquer lugar da cidade para atendimentos de emergência.'
  },
  {
    icon: <Shield className="text-locksmith-gold" size={48} />,
    title: 'Profissionais Qualificados',
    description: 'Nossa equipe é formada por técnicos treinados, credenciados e com anos de experiência.'
  },
  {
    icon: <DollarSign className="text-locksmith-gold" size={48} />,
    title: 'Preço Justo',
    description: 'Oferecemos orçamentos transparentes, sem custos adicionais ou surpresas na hora do pagamento.'
  },
  {
    icon: <Award className="text-locksmith-gold" size={48} />,
    title: 'Qualidade Garantida',
    description: 'Todos os nossos serviços possuem garantia, assegurando sua total satisfação e tranquilidade.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-locksmith-blue-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Nos Escolher?</h2>
          <p className="text-gray-300 text-lg">
            Descubra o que nos torna a melhor escolha para todos os seus serviços de chaveiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
