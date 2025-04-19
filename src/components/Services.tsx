
import React from 'react';
import { Key, DoorClosed, Lock, Car, Briefcase, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    icon: <DoorClosed className="text-locksmith-blue" size={36} />,
    title: 'Abertura de Portas',
    description: 'Abertura de emergência para residências e comércios, sem danificar a estrutura da porta.',
    link: '/servicos/abertura-portas'
  },
  {
    icon: <Lock className="text-locksmith-blue" size={36} />,
    title: 'Troca de Segredos',
    description: 'Troca e manutenção de segredos de fechaduras para maior segurança.',
    link: '/servicos/troca-segredos'
  },
  {
    icon: <Key className="text-locksmith-blue" size={36} />,
    title: 'Cópias de Chaves',
    description: 'Duplicação de chaves comuns, tetra, codificadas e controles remotos.',
    link: '/servicos/copia-chaves'
  },
  {
    icon: <Car className="text-locksmith-blue" size={36} />,
    title: 'Serviços Automotivos',
    description: 'Abertura de veículos, cópia de chaves, codificação e programação.',
    link: '/servicos/automotivos'
  },
  {
    icon: <Briefcase className="text-locksmith-blue" size={36} />,
    title: 'Serviços Comerciais',
    description: 'Instalação e manutenção de fechaduras, cofres e sistemas de segurança para empresas.',
    link: '/servicos/comerciais'
  },
  {
    icon: <ShieldCheck className="text-locksmith-blue" size={36} />,
    title: 'Consultoria de Segurança',
    description: 'Avaliação e recomendação dos melhores sistemas de segurança para sua residência ou empresa.',
    link: '/servicos/consultoria'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="servicos">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-locksmith-blue-dark">Nossos Serviços</h2>
          <p className="text-lg text-gray-600">
            Oferecemos uma ampla gama de serviços profissionais para atender todas as suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-locksmith-blue-dark">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-locksmith-blue font-medium hover:text-locksmith-gold transition-colors inline-flex items-center"
              >
                Saiba mais
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
