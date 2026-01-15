'use client';

import { Cog, Eye, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
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

  const steps = [
    {
      icon: Eye,
      title: 'Percepção',
      description: 'Analisa informações do ambiente através de sensores e dados',
    },
    {
      icon: Cog,
      title: 'Processamento',
      description: 'Processa dados por meio de algoritmos e modelos de aprendizado',
    },
    {
      icon: Zap,
      title: 'Ação',
      description: 'Escolhe e executa a melhor ação possível com base nos objetivos',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como funcionam?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um agente de IA analisa informações do ambiente, processa esses dados por meio de 
            algoritmos e escolhe a melhor ação possível. Esse ciclo pode acontecer continuamente, 
            permitindo aprendizado e adaptação ao longo do tempo.
          </p>
        </div>

        {/* Cards dos Passos */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
