'use client';

import { Heart, BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Conteúdo Principal */}
        <div className="text-center justify-items-center">
          <h1 className="text-xs font-bold text-white">
              Em colaboração com:
            </h1>
          <img src="https://agenciarei.com/wp-content/uploads/2023/07/rei-logo-rodape.svg" alt="Logo" className='mb-8 w-50 h-auto' />
          <div>
            <p className="text-gray-200">Conteúdo educacional e acessível</p>
          </div>

          {/* Propósito */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span>Propósito educacional</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-4"></div>

          {/* Créditos */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-400">
            <span>© {currentYear} Agentes de IA.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-current" /> para educação
            </span>
          </div>

          {/* Link ou informação adicional */}
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Este site tem como objetivo apresentar conceitos de Inteligência Artificial de forma 
            clara e acessível, contribuindo para a educação e democratização do conhecimento tecnológico.
          </p>
        </div>
      </div>
    </footer>
  );
}
