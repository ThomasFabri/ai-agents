import Hero from '@/components/Hero';
import WhatIsAI from '@/components/WhatIsAI';
import HowItWorks from '@/components/HowItWorks';
import Applications from '@/components/Applications';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';
import LazyFloatingLines from '@/components/LazyFloatingLines';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Background da pagina inteira */}
      <div className="fixed inset-0 z-0 opacity-40">
        <LazyFloatingLines />
      </div>

      {/* Conteudo por cima */}
      <div className="relative z-10">
        <Hero />
        <WhatIsAI />
        <HowItWorks />
        <Applications />
        <Impact />
        <Footer />
      </div>
    </main>
  );
}
