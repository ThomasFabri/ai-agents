import Hero from '@/components/Hero';
import WhatIsAI from '@/components/WhatIsAI';
import HowItWorks from '@/components/HowItWorks';
import Applications from '@/components/Applications';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhatIsAI />
      <HowItWorks />
      <Applications />
      <Impact />
      <Footer />
    </main>
  );
}
