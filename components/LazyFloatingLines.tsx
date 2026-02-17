'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });

export default function LazyFloatingLines() {
  const [canRender, setCanRender] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMediaChange = () => setReducedMotion(media.matches);

    onMediaChange();
    media.addEventListener('change', onMediaChange);

    const run = () => setCanRender(true);
    const idleId = 'requestIdleCallback' in window
      ? (window as Window & { requestIdleCallback: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number }).requestIdleCallback(run, { timeout: 1800 })
      : undefined;
    const timeoutId = window.setTimeout(run, 1800);

    return () => {
      media.removeEventListener('change', onMediaChange);
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
      }
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!canRender || reducedMotion) {
    return null;
  }

  return (
    <FloatingLines
      linesGradient={['#ffaa17', '#0e1027', '#0f1b4e']}
      enabledWaves={['middle']}
      lineCount={[10]}
      lineDistance={[50]}
      animationSpeed={0.7}
      bendRadius={5}
      bendStrength={2}
      mouseDamping={0.08}
      interactive={false}
      parallax={false}
      parallaxStrength={0.2}
      mixBlendMode="screen"
    />
  );
}
