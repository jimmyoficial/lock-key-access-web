import React, { useState } from 'react';
import { Menu, X, Phone, Key, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-locksmith-blue-dark flex items-center">
              <Key className="mr-2" size={24} />
              Chaveiro Perto de Você
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium">
              Início
            </Link>
            <Link to="/sobre" className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium">
              Sobre
            </Link>
            <Link to="/servicos" className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium">
              Serviços
            </Link>
            <Link to="/contato" className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium">
              Contato
            </Link>
          </nav>

          {/* Call Us Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+5511999999999" 
              className="flex items-center bg-locksmith-blue text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span>(11) 99999-9999</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-locksmith-blue-dark"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium px-4 py-2"
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                onClick={() => setIsMenuOpen(false)}
                className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium px-4 py-2"
              >
                Sobre
              </Link>
              <Link 
                to="/servicos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium px-4 py-2"
              >
                Serviços
              </Link>
              <Link 
                to="/contato" 
                onClick={() => setIsMenuOpen(false)}
                className="text-locksmith-blue-dark hover:text-locksmith-blue font-medium px-4 py-2"
              >
                Contato
              </Link>
              <a 
                href="tel:+5511999999999" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center bg-locksmith-blue text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors mx-4"
              >
                <Phone size={18} className="mr-2" />
                <span>(11) 99999-9999</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
