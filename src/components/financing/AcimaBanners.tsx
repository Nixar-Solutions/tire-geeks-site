'use client';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const BANNERS = [
  {
    src: '/images/acima/rven1-300x600.png',
    alt: 'Acima Leasing - Lease Now, Buy Later',
    utm: 'rven1300X600',
    size: 'large' as const,
  },
  {
    src: '/images/acima/sten1-300x600.png',
    alt: 'Acima Leasing - Shop Without Perfect Credit',
    utm: 'sten1300X600',
    size: 'large' as const,
  },
  {
    src: '/images/acima/rven2-300x250.png',
    alt: 'Acima Leasing - Shop Without Perfect Credit',
    utm: 'rven2300X250',
    size: 'small' as const,
  },
  {
    src: '/images/acima/sten1-300x250.png',
    alt: 'Acima Leasing - No Credit Needed',
    utm: 'sten1300X250',
    size: 'small' as const,
  },
];

const largeBanners = BANNERS.filter((b) => b.size === 'large');
const smallBanners = BANNERS.filter((b) => b.size === 'small');
const allBanners = [...largeBanners, ...smallBanners];

export default function AcimaBanners() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % allBanners.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + allBanners.length) % allBanners.length);
  }, []);

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex flex-col gap-6">
      {/* Desktop: single banner carousel that cycles through all banners */}
      <div className="hidden lg:flex flex-col items-center gap-4">
        <div className="relative w-full max-w-[300px]">
          {/* Banner display */}
          <div className="relative overflow-hidden rounded-[12px]" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>
            {allBanners.map((banner, i) => (
              <a
                key={banner.utm}
                href={`${BRAND.acima.applyUrl}&utm_content=${banner.utm}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity duration-500"
                style={{
                  opacity: i === current ? 1 : 0,
                  position: i === current ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.src}
                  alt={banner.alt}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </a>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-[-44px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: 'rgba(30, 136, 199, 0.15)',
              border: '1px solid rgba(30, 136, 199, 0.3)',
            }}
            aria-label="Previous banner"
          >
            <ChevronLeft size={18} color="#1E88C7" />
          </button>
          <button
            onClick={next}
            className="absolute right-[-44px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: 'rgba(30, 136, 199, 0.15)',
              border: '1px solid rgba(30, 136, 199, 0.3)',
            }}
            aria-label="Next banner"
          >
            <ChevronRight size={18} color="#1E88C7" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {allBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === current ? '#1E88C7' : 'rgba(255,255,255,0.2)',
                transform: i === current ? 'scale(1.3)' : 'scale(1)',
              }}
              aria-label={`Go to banner ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: only small banners side by side */}
      <div className="flex lg:hidden gap-4 justify-center">
        {smallBanners.map((banner) => (
          <a
            key={banner.utm}
            href={`${BRAND.acima.applyUrl}&utm_content=${banner.utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[12px] overflow-hidden"
            style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banner.src}
              alt={banner.alt}
              loading="lazy"
              className="w-full h-auto max-w-[300px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
