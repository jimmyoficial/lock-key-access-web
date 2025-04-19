
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20" id="sobre">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1613018199828-539592bf91f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chaveiro profissional trabalhando" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-locksmith-gold text-locksmith-blue-dark p-4 rounded-lg shadow-lg md:w-40 text-center">
              <span className="block text-3xl font-bold">15+</span>
              <span className="text-sm font-medium">Anos de Experiência</span>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-locksmith-blue-dark">Sobre a Chaveiro 24h</h2>
            <p className="text-gray-600 mb-6">
              Somos uma empresa especializada em serviços de chaveiro, com mais de 15 anos de experiência no mercado. 
              Nossa equipe é formada por profissionais altamente qualificados e treinados para oferecer soluções rápidas e eficientes.
            </p>
            <p className="text-gray-600 mb-8">
              Trabalhamos com os melhores produtos e equipamentos, garantindo um serviço de qualidade e durabilidade. 
              Nosso compromisso é com a segurança e satisfação dos nossos clientes, por isso oferecemos atendimento 24 horas, 
              inclusive em feriados e fins de semana.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-locksmith-blue mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Profissionais Qualificados</h3>
                  <p className="text-sm text-gray-600">Equipe treinada e certificada</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-locksmith-blue mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Atendimento 24h</h3>
                  <p className="text-sm text-gray-600">Sempre disponíveis quando você precisar</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-locksmith-blue mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Preços Justos</h3>
                  <p className="text-sm text-gray-600">Orçamento transparente e sem surpresas</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-locksmith-blue mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Garantia de Serviço</h3>
                  <p className="text-sm text-gray-600">Satisfação garantida ou seu dinheiro de volta</p>
                </div>
              </div>
            </div>

            <a href="#contato" className="btn-primary">Entre em Contato</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
