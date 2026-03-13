'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia('(hover: none)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;

    if (isTouch || reducedMotion || !isDesktop) return;

    setVisible(true);
    document.documentElement.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnterInteractive = () => {
      if (ringRef.current) {
        gsap.to(ringRef.current, { width: 48, height: 48, borderColor: '#D42B2B', duration: 0.3 });
      }
    };

    const onMouseLeaveInteractive = () => {
      if (ringRef.current) {
        gsap.to(ringRef.current, { width: 32, height: 32, borderColor: 'rgba(212,43,43,0.5)', duration: 0.3 });
        ringRef.current.textContent = '';
      }
    };

    const onMouseEnterGallery = () => {
      if (ringRef.current) {
        gsap.to(ringRef.current, { width: 64, height: 64, borderColor: '#D42B2B', duration: 0.3 });
        ringRef.current.textContent = 'VIEW';
        ringRef.current.style.fontSize = '11px';
        ringRef.current.style.fontWeight = '600';
        ringRef.current.style.color = 'white';
        ringRef.current.style.display = 'flex';
        ringRef.current.style.alignItems = 'center';
        ringRef.current.style.justifyContent = 'center';
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Add hover listeners to interactive elements
    const interactiveEls = document.querySelectorAll('a, button, .btn-cta, .btn-ghost, [role="button"]');
    const galleryEls = document.querySelectorAll('.gallery-card');

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
      (el as HTMLElement).style.cursor = 'none';
    });

    galleryEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterGallery);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    // GSAP ticker for smooth following
    const tickerFn = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
      if (dotRef.current) {
        gsap.set(dotRef.current, { x: mousePos.current.x, y: mousePos.current.y });
      }
      if (ringRef.current) {
        gsap.set(ringRef.current, { x: ringPos.current.x, y: ringPos.current.y });
      }
    };
    gsap.ticker.add(tickerFn);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(tickerFn);
      document.documentElement.style.cursor = '';
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      galleryEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterGallery);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#D42B2B',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: -16,
          left: -16,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(212,43,43,0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          fontFamily: 'var(--font-nav)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.3s, height 0.3s',
        }}
      />
    </>
  );
}
