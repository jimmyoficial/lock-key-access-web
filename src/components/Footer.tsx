
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-locksmith-blue-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Chaveiro<span className="text-locksmith-blue">24h</span></h3>
            <p className="text-gray-300 mb-4">
              Serviço de chaveiro profissional com atendimento 24 horas para emergências. Oferecemos soluções rápidas e confiáveis para todas as suas necessidades.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-locksmith-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-locksmith-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-locksmith-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/abertura-portas" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Abertura de Portas
                </Link>
              </li>
              <li>
                <Link to="/servicos/troca-segredos" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Troca de Segredos
                </Link>
              </li>
              <li>
                <Link to="/servicos/instalacao-fechaduras" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Instalação de Fechaduras
                </Link>
              </li>
              <li>
                <Link to="/servicos/copia-chaves" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Cópias de Chaves
                </Link>
              </li>
              <li>
                <Link to="/servicos/automotivos" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Serviços Automotivos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-locksmith-gold mt-1" />
                <div>
                  <p className="font-medium">Atendimento 24h</p>
                  <a href="tel:+5511999999999" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-locksmith-gold mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contato@chaveiro24h.com.br" className="text-gray-300 hover:text-locksmith-gold transition-colors">
                    contato@chaveiro24h.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-locksmith-gold mt-1" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <address className="text-gray-300 not-italic">
                    Av. Paulista, 1000<br />
                    São Paulo - SP
                  </address>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 text-locksmith-gold mt-1" />
                <div>
                  <p className="font-medium">Horário</p>
                  <p className="text-gray-300">
                    Segunda - Sexta: 8h às 18h<br />
                    <span className="text-locksmith-gold">Emergências: 24h</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chaveiro24h. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
