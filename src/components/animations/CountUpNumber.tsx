'use client';
import { useRef, useEffect } from 'react';
import { CountUp } from 'countup.js';

interface CountUpNumberProps {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUpNumber({
  end,
  decimals = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<CountUp | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const counter = new CountUp(ref.current, end, {
      duration,
      decimalPlaces: decimals,
      prefix,
      suffix,
      enableScrollSpy: true,
      scrollSpyOnce: true,
      useGrouping: true,
    });
    if (!counter.error) {
      counterRef.current = counter;
    }
    return () => {
      counterRef.current = null;
    };
  }, [end, decimals, duration, prefix, suffix]);

  return <span ref={ref} className={className}>0</span>;
}
