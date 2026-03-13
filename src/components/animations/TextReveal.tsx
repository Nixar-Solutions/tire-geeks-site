'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  stagger?: number;
  duration?: number;
  scrollTrigger?: boolean;
}

export default function TextReveal({
  children,
  className = '',
  stagger = 0.03,
  duration = 0.5,
  scrollTrigger = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: 'chars,words' });
    const chars = split.chars;
    if (!chars) return;

    gsap.set(chars, { y: '110%', opacity: 0 });

    if (scrollTrigger) {
      gsap.to(chars, {
        y: '0%',
        opacity: 1,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      });
    }

    return () => split.revert();
  }, [stagger, duration, scrollTrigger]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
