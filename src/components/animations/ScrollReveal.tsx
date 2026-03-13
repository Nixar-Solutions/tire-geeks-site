'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 60,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const axes: Record<string, { x?: number; y?: number }> = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    };

    gsap.set(ref.current, { ...axes[direction], opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      once,
      onEnter: () => {
        gsap.to(ref.current, {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
        });
      },
    });

    return () => trigger.kill();
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
