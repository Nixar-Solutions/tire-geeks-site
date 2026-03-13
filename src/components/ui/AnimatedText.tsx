'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  trigger?: boolean;
  stagger?: number;
}

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  trigger = true,
  stagger = 0.03,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current || !trigger) return;

    const split = new SplitType(ref.current, { types: 'chars' });
    const chars = split.chars;
    if (!chars) return;

    gsap.set(chars, { y: '100%', opacity: 0 });
    gsap.to(chars, {
      y: '0%',
      opacity: 1,
      duration: 0.5,
      stagger,
      delay,
      ease: 'power3.out',
    });

    return () => split.revert();
  }, [trigger, delay, stagger]);

  return (
    <span ref={ref} className={`overflow-hidden inline-block ${className}`}>
      {children}
    </span>
  );
}
