'use client';

import { Brain } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedContent from './reactbits/AnimatedContent';

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
      className="py-24 px-6 bg-transparent"
    >
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={3}
        ease="elastic.out(1, 0.3)"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Ícone e Título */}

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>

            <div className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-black text-shadow-md">
              O que são Agentes de IA?
            </div>

          </div>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-200 border-white border bg-white/30 hover:bg-white/10 transition duration-300 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-black text-center justify-self-center">
            <p className="text-xl text-white leading-relaxed">
              Agentes de Inteligência Artificial são sistemas capazes de{' '}
              <span className="font-semibold text-blue-300">perceber o ambiente</span>,{' '}
              <span className="font-semibold text-[#fdc668]">tomar decisões</span> e{' '}
              <span className="font-semibold text-blue-300">executar ações</span> de forma
              autônoma ou semi-autônoma.
            </p>
            <p className="text-xl text-white leading-relaxed mt-6">
              Eles utilizam dados, regras e modelos de aprendizado para agir com base em objetivos definidos.
            </p>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
