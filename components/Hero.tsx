'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById('what-is-ai');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/Hero.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xs z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Agentes de{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-br from-teal-700 to-blue-700">
            Inteligência 
          </span>{' '}
                    <span className="text-transparent bg-clip-text bg-linear-to-bl from-teal-700 to-blue-700">
            Artificial
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray max-w-3xl mx-auto leading-relaxed">
          Tecnologia que aprende, decide e age de forma autônoma.
        </p>

        <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto">
          Entenda o que são agentes de IA, como funcionam e onde estão sendo aplicados no mundo real.
        </p>

        <div className="pt-8">
          <button
            onClick={scrollToSection}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-bl from-teal-600 to-blue-700 hover:from-teal-500 hover:to-blue-800 text-white rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Entender como funcionam os Agentes de IA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
