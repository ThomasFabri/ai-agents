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
      className="py-16 px-6 bg-transparent"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-black text-shadow-md">
            Impacto e futuro
          </h2>
        </div>

        {/* Conteúdo Principal */}
        <div className={`bg-white/20 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-lg shadow-black/70 border border-gray-100 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-xl text-white leading-relaxed mb-8">
            Os agentes de IA estão transformando a forma como interagimos com a tecnologia, 
            tornando processos mais eficientes e acessíveis.
          </p>

          {/* Cards de Destaque */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4 p-6 bg-white/30 backdrop-blur-md hover:bg-white/10 hover:shadow-2xl hover:shadow-black transition duration-500 rounded-2xl border border-blue-100 shadow-lg shadow-black/40">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Transformação</h3>
                <p className="text-white">Processos mais eficientes e acessíveis para todos</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white/30 backdrop-blur-md hover:bg-white/10 hover:shadow-2xl hover:shadow-black transition duration-500 rounded-2xl border border-purple-100 shadow-lg shadow-black/40">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#ffaa17] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Ética e Responsabilidade</h3>
                <p className="text-white">Uso consciente para benefícios sociais e profissionais</p>
              </div>
            </div>
          </div>

          {/* Mensagem Final */}
          <div className="bg-linear-to-r from-[#ffaa174d] to-[#ffaa174d] via-slate-900/10 rounded-2xl p-8 text-center text-white shadow-lg shadow-black/50 text-shadow-md">
            <p className="text-lg font-medium">
              O uso consciente e ético desses sistemas é essencial para garantir benefícios sociais e profissionais.
            </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScHTymVDX5z7hsee05sWcpe1UrU0z5jM5sVwbAuBSFSj28T6A/viewform?usp=header">
            <button className="text-2xl font-sans px-6 py-3 bg-linear-to-r from-[#ffaa174d] to-[#ffaa174d] via-slate-900/10 text-white font-medium rounded-full hover:scale-120 border-2 border-white/30 hover:border-white  transition duration-600 shadow-lg shadow-black/80">
              Dar um Feedback
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
