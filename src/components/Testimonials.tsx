
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    location: 'São Paulo, SP',
    text: 'Fiquei trancada para fora de casa às 22h e o chaveiro chegou em menos de 20 minutos. Serviço rápido, profissional e por um preço justo. Recomendo fortemente!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/67.jpg'
  },
  {
    name: 'Carlos Oliveira',
    location: 'São Paulo, SP',
    text: 'Perdi as chaves do meu carro e precisava urgentemente de uma nova. O atendimento foi excelente, rápido e eficiente. A chave nova funcionou perfeitamente.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Mariana Costa',
    location: 'São Paulo, SP',
    text: 'Contratei o serviço para instalar fechaduras mais seguras em minha casa. O profissional foi muito atencioso, explicou tudo sobre os produtos e fez um trabalho impecável.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50" id="depoimentos">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-locksmith-blue-dark">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-600">
            A satisfação dos nossos clientes é nossa maior prioridade. Confira alguns depoimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-locksmith-gold" : "text-gray-300"} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-locksmith-blue-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
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

export default Testimonials;
