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
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Background da página inteira */}
      <div className="fixed inset-0 z-0 opacity-40">
        <FloatingLines
  linesGradient={['#ffaa17', '#0e1027', '#0f1b4e']}
  enabledWaves = {['middle']}
  lineCount = {[10]}
  lineDistance = {[50]}
  animationSpeed = {1.0}
  bendRadius = {5.0}
  bendStrength = {2.0}
  mouseDamping = {0.05}
  parallax = {true}
  parallaxStrength = {0.2}
  mixBlendMode = 'screen'
></FloatingLines>
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
