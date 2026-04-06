'use client';

import { Star, Shield, Clock, Wrench } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Star, text: '4.9\u2605 Google Rating' },
  { icon: Wrench, text: '10,000+ Installations' },
  { icon: Clock, text: 'No Appointment Needed' },
  { icon: Shield, text: 'Financing Available' },
];

export default function TrustStripCompact() {
  return (
    <section
      className="w-full py-3"
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Desktop: single row with dot separators */}
        <div className="hidden lg:flex items-center justify-center gap-0">
          {TRUST_ITEMS.map((item, i) => (
            <div key={item.text} className="flex items-center">
              {i > 0 && (
                <span className="mx-5 text-white/20 text-[10px] select-none">&bull;</span>
              )}
              <div className="flex items-center gap-2">
                <item.icon size={14} style={{ color: '#D42B2B' }} className="flex-shrink-0" />
                <span className="font-nav text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:hidden">
          {TRUST_ITEMS.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={13} style={{ color: '#D42B2B' }} className="flex-shrink-0" />
              <span className="font-nav text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
