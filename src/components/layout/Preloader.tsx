'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.setAttribute('data-loaded', 'true');
        onComplete();
      },
    });

    tl.to(barFillRef.current, {
      width: '100%',
      duration: 1.8,
      ease: 'power2.inOut',
    })
      .to(
        logoRef.current,
        {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .to(overlayRef.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.2,
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={overlayRef} className="preloader" style={{ clipPath: 'inset(0 0 0 0)' }}>
      <div ref={logoRef} className="mb-8">
        {!imgError ? (
          <Image
            src="/images/tg-logo.png"
            alt="Tire Geeks"
            width={120}
            height={120}
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            className="font-display text-[120px] leading-none"
            style={{ color: 'var(--red)' }}
          >
            TG
          </span>
        )}
      </div>
      <div
        ref={barRef}
        className="w-48 h-[2px] overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.1)' }}
      >
        <div
          ref={barFillRef}
          className="h-full w-0"
          style={{ background: 'var(--red)' }}
        />
      </div>
    </div>
  );
}
