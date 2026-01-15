'use client';

import { Brain } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function WhatIsAI() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="what-is-ai"
      ref={sectionRef}
      className="py-24 px-6 bg-white"
    >
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Ícone e Título */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que são Agentes de IA?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Agentes de Inteligência Artificial são sistemas capazes de{' '}
            <span className="font-semibold text-blue-600">perceber o ambiente</span>,{' '}
            <span className="font-semibold text-purple-600">tomar decisões</span> e{' '}
            <span className="font-semibold text-blue-600">executar ações</span> de forma 
            autônoma ou semi-autônoma.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-6">
            Eles utilizam dados, regras e modelos de aprendizado para agir com base em objetivos definidos.
          </p>
        </div>
      </div>
    </section>
  );
}
