'use client';

import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section
      className="w-full px-6 py-16 md:px-20 md:py-20 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0A0A0A 50%, rgba(212,43,43,0.08) 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 90% 20%, rgba(212,43,43,0.15) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <h2
          className="font-display uppercase"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          READY TO UPGRADE YOUR RIDE?
        </h2>

        <p
          className="font-body mx-auto mb-8 md:mb-10"
          style={{
            fontSize: 'clamp(16px, 3vw, 20px)',
            color: '#9E9E9E',
            maxWidth: '600px',
          }}
        >
          Walk in today — no appointment needed. Financing available with no
          credit check.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/services"
            className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded no-underline w-full sm:w-auto text-center"
            style={{ textDecoration: 'none' }}
          >
            SHOP TIRES &amp; WHEELS
          </Link>

          <Link
            href="tel:+19168008786"
            className="btn-ghost font-nav text-[13px] font-semibold tracking-wider px-8 py-4 w-full sm:w-auto text-center"
          >
            CALL (916) 800-8786
          </Link>

          <Link
            href={BRAND.acima.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-nav text-[13px] font-semibold tracking-wider px-8 py-4 text-white w-full sm:w-auto text-center block sm:inline-block"
            style={{
              background: 'linear-gradient(135deg, #1E88C7 0%, #29B6F6 100%)',
              borderRadius: '6px',
              transition: 'opacity 0.2s ease',
            }}
          >
            APPLY FOR FINANCING
          </Link>

          <Link
            href="/locations"
            className="font-nav text-[13px] font-semibold tracking-wider px-8 py-4 w-full sm:w-auto text-center text-[#9E9E9E] hover:text-white transition-colors"
          >
            FIND A LOCATION &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
