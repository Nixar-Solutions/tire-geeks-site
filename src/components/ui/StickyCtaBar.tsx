'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-40 hidden lg:block transition-transform duration-300 ease-out"
      style={{
        top: 'calc(2px + 72px)', // below red accent line + navbar height when scrolled
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        background: '#111111',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1600px] mx-auto h-[44px] flex items-center justify-between px-6 lg:px-8 xl:px-12">
        {/* Left */}
        <p className="font-nav text-[13px] font-semibold uppercase tracking-[0.08em] text-white whitespace-nowrap">
          Walk In Today{' '}
          <span className="text-[#D42B2B]">&mdash;</span>{' '}
          <span className="text-[var(--text-secondary)]">No Appointment Needed</span>
        </p>

        {/* Center */}
        <p className="font-body text-[12px] text-[var(--text-secondary)] tracking-wide whitespace-nowrap hidden xl:block">
          Open Mon&ndash;Sat 9AM&ndash;7PM{' '}
          <span className="mx-2 text-white/20">|</span>{' '}
          Two Sacramento Locations
        </p>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+19168008786"
            className="flex items-center gap-2 font-nav text-[13px] font-bold uppercase tracking-[0.06em]
              border border-white/20 hover:border-white/50 text-white
              px-4 h-[32px] rounded transition-all whitespace-nowrap"
          >
            <Phone size={14} style={{ color: '#D42B2B' }} />
            <span>(916) 800-8786</span>
          </a>
          <Link
            href="/locations"
            className="flex items-center gap-2 font-nav text-[13px] font-bold uppercase tracking-[0.06em]
              text-white px-4 h-[32px] rounded transition-all whitespace-nowrap
              hover:shadow-[0_0_16px_rgba(212,43,43,0.3)]"
            style={{
              background: 'linear-gradient(135deg, #D42B2B 0%, #FF1744 100%)',
            }}
          >
            <MapPin size={14} />
            <span>Get Directions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
