'use client';

import Hero from '@/components/Hero';
import WhatIsAI from '@/components/WhatIsAI';
import HowItWorks from '@/components/HowItWorks';
import Applications from '@/components/Applications';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';
import FloatingLines from '@/components/FloatingLines';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background da página inteira */}
      <div className="fixed inset-0 z-0">
        <FloatingLines
          linesGradient={["#ffaa17", "#000000", "#0f1b4e"]}
          animationSpeed={1.4}
          interactive={false}
          bendRadius={1}
          bendStrength={-2}
          mouseDamping={0}
          parallax={false}
          parallaxStrength={0}
          lineCount={10}
        />
      </div>

      {/* Conteúdo por cima */}
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
