'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis(callback?: (lenis: Lenis) => void) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current && callback) {
      callback(lenisRef.current);
    }
  }, [callback]);

  return lenisRef;
}
