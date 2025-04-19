
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    console.log('Form data submitted:', formData);
    
    // Exibir mensagem de sucesso
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
      variant: "default",
    });
    
    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-20" id="contato">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-locksmith-blue-dark">Entre em Contato</h2>
          <p className="text-lg text-gray-600">
            Estamos disponíveis 24 horas por dia, 7 dias por semana, para atender todas as suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-locksmith-blue-dark">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-locksmith-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-locksmith-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-locksmith-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço Desejado</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-locksmith-blue focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="abertura">Abertura de Portas</option>
                    <option value="troca">Troca de Segredos</option>
                    <option value="instalacao">Instalação de Fechaduras</option>
                    <option value="copia">Cópias de Chaves</option>
                    <option value="automotivo">Serviços Automotivos</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-locksmith-blue focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">Enviar Mensagem</button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-locksmith-blue-dark text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone size={24} className="text-locksmith-gold mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-lg">Telefone</p>
                    <a href="tel:+5511999999999" className="text-gray-300 hover:text-locksmith-gold transition-colors text-lg">
                      (11) 99999-9999
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Atendimento 24 horas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={24} className="text-locksmith-gold mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <a href="mailto:contato@chaveiro24h.com.br" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                      contato@chaveiro24h.com.br
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={24} className="text-locksmith-gold mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-lg">Endereço</p>
                    <address className="text-gray-300 not-italic">
                      Av. Paulista, 1000<br />
                      São Paulo - SP
                    </address>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={24} className="text-locksmith-gold mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-lg">Horário de Funcionamento</p>
                    <p className="text-gray-300">
                      Segunda - Sexta: 8h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                    <p className="text-locksmith-gold font-medium mt-1">Emergências: 24h / 7 dias</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Coverage Area */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-locksmith-blue-dark">Área de Atendimento</h3>
              <p className="text-gray-600 mb-4">
                Atendemos em toda a cidade de São Paulo e região metropolitana, incluindo:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-locksmith-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm">Zona Norte</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-locksmith-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm">Zona Sul</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-locksmith-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm">Zona Leste</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-locksmith-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm">Zona Oeste</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-locksmith-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm">Centro</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-locksmith-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm">Grande São Paulo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
