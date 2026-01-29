'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = () => {
    document.getElementById('what-is-ai')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-transparent">
      <div className="relative z-20 max-w-4xl mx-auto text-center text-white space-y-8 pointer-events-auto text-shadow-black text-shadow-md">
        <h1 className="text-5xl md:text-7xl font-sans leading-tight">
          Agentes de <br />
          <span className="font-bold mix-blend-difference">
            Inteligência
          </span>{' '}
          <span className="font-bold mix-blend-difference">
            Artificial
          </span>
        </h1>

        <div className=''>
          <p className="text-xl md:text-2xl text-gray max-w-3xl mx-auto">
            Tecnologia que aprende, decide e age de forma autônoma.
          </p>

          <p className="text-lg md:text-2xl text-gray max-w-2xl mx-auto">
            Entenda o que são agentes de IA, como funcionam e onde estão sendo aplicados no mundo real.
          </p>
        </div>

        <div className="pt-8">
          <button
            onClick={scrollToSection}
            className="group inline-flex items-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/30  rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-white/60 text-shadow-lg text-shadow-black/20"
          >
            Entender como funcionam os Agentes de IA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
