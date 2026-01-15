'use client';

import { Rocket, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Impact() {
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
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impacto e futuro
          </h2>
        </div>

        {/* Conteúdo Principal */}
        <div className={`bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Os agentes de IA estão transformando a forma como interagimos com a tecnologia, 
            tornando processos mais eficientes e acessíveis.
          </p>

          {/* Cards de Destaque */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transformação</h3>
                <p className="text-gray-700">Processos mais eficientes e acessíveis para todos</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ética e Responsabilidade</h3>
                <p className="text-gray-700">Uso consciente para benefícios sociais e profissionais</p>
              </div>
            </div>
          </div>

          {/* Mensagem Final */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
            <p className="text-lg font-medium">
              O uso consciente e ético desses sistemas é essencial para garantir benefícios sociais e profissionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
