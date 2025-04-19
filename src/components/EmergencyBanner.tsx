
import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyBanner = () => {
  return (
    <div className="bg-red-600 text-white py-3">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <Phone size={20} className="mr-2" />
            <span className="font-medium">Atendimento de Emergência 24h</span>
          </div>
          <a 
            href="tel:+5511999999999" 
            className="text-white font-bold text-lg hover:underline"
          >
            (11) 99999-9999
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
