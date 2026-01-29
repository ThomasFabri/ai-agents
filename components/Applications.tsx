'use client';

import { MessageSquare, Briefcase, Star, BarChart3, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Applications() {
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

  const applications = [
    {
      icon: MessageSquare,
      title: 'Assistentes virtuais e chatbots',
      description: 'Atendimento automatizado e interação natural com usuários',
    },
    {
      icon: Briefcase,
      title: 'Automação de processos empresariais',
      description: 'Otimização de tarefas repetitivas e fluxos de trabalho',
    },
    {
      icon: Star,
      title: 'Sistemas de recomendação',
      description: 'Sugestões personalizadas baseadas em comportamento e preferências',
    },
    {
      icon: BarChart3,
      title: 'Análise de dados e tomada de decisão',
      description: 'Insights inteligentes para decisões estratégicas baseadas em dados',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16 text-shadow-black text-shadow-md">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Onde são utilizados?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Os agentes de IA estão presentes em diversos setores, transformando a forma como 
            empresas e pessoas interagem com a tecnologia.
          </p>
        </div>

        {/* Lista de Aplicações */}
        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className={`group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:shadow-lg ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-800 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <app.icon className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
