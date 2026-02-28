import { useEffect, useRef, useState, ReactNode } from 'react';
import * as THREE from 'three';
// @ts-ignore
import BIRDS from 'vanta/dist/vanta.birds.min';

export default function VantaBackground({ children }: { children: ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x0f172a, // Slate-900 base
          color1: 0xff00de, // Neon Pink
          color2: 0x00ffff, // Cyan
          birdSize: 1.50,
          wingSpan: 30.00,
          speedLimit: 5.00,
          separation: 20.00,
          alignment: 20.00,
          cohesion: 20.00,
          quantity: 4.00
        });
        setVantaEffect(effect);
      } catch (error) {
        console.error("Failed to initialize Vanta effect:", error);
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="min-h-screen w-full relative overflow-x-hidden">
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
