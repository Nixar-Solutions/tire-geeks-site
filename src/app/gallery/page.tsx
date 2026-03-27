'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { galleryBuilds, getBuildsByCategory } from '@/data/galleryBuilds';

const categories = [
  { key: 'all', label: 'ALL' },
  { key: 'trucks', label: 'TRUCKS' },
  { key: 'cars', label: 'CARS' },
  { key: 'suvs', label: 'SUVS' },
  { key: 'lifted', label: 'LIFTED' },
  { key: 'lowered', label: 'LOWERED' },
  { key: 'classic', label: 'CLASSIC' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBuilds = getBuildsByCategory(activeCategory);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tiregeeks.com" },
          { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://tiregeeks.com/gallery" }
        ]
      }) }} />
      <Navbar />

      {/* ── Page Hero ── */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center"
        style={{
          minHeight: 300,
          background: 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
        }}
      >
        <div className="mx-auto mb-6" style={{ width: 48, height: 3, background: '#D42B2B' }} />
        <p
          className="font-nav uppercase tracking-[0.2em] text-[#D42B2B] text-[13px] mb-3"
          style={{ fontWeight: 600 }}
        >
          Our Gallery
        </p>
        <h1
          className="font-display uppercase text-white"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1 }}
        >
          Customer Builds
        </h1>
      </section>

      {/* ── Category Filter Bar ── */}
      <div className="sticky top-[64px] z-40 bg-[#111111] border-b border-white/5 py-4">
        <div className="flex items-center justify-center gap-3 overflow-x-auto px-6 max-w-[1400px] mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full font-nav text-xs font-semibold tracking-widest uppercase whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#D42B2B] text-white'
                    : 'bg-transparent border border-[#2A2A2A] text-[#9E9E9E] hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <section style={{ background: '#0D0D0D' }}>
        {/* Build count */}
        <p className="text-[#6B7280] text-sm font-body mt-8 mb-4 max-w-[1400px] mx-auto px-6">
          Showing {filteredBuilds.length} of {galleryBuilds.length} builds
        </p>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-24">
          {filteredBuilds.map((build) => (
            <Link
              key={build.id}
              href={`/gallery/${build.slug}`}
              className="group relative overflow-hidden rounded-lg"
              style={{ height: 340 }}
            >
              <img
                src={build.images[0]}
                alt={`${build.vehicle} - ${build.wheels}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                style={{
                  height: '100%',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                }}
              >
                <h3 className="font-heading text-lg font-bold uppercase text-white">
                  {build.shortName}
                </h3>
                <p className="font-body text-sm text-gray-400">
                  {build.wheels} | {build.suspension}
                </p>
                <span className="text-[#D42B2B] text-sm font-nav font-semibold tracking-wider mt-2">
                  VIEW BUILD &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Submit Your Build CTA ── */}
      <section
        style={{
          background: '#0D0D0D',
          paddingBottom: 96,
          paddingTop: 16,
        }}
        className="flex flex-col items-center text-center"
      >
        <div className="mx-auto mb-5" style={{ width: 48, height: 3, background: '#D42B2B' }} />
        <h2
          className="font-display uppercase text-white mb-3"
          style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
        >
          Show Off Your Ride
        </h2>
        <p
          className="font-body mb-8"
          style={{ color: '#9E9E9E', fontSize: 15, maxWidth: 480 }}
        >
          Got a fresh set of wheels? Submit your build and get featured in our gallery.
        </p>
        <Link href="/contact" className="btn-cta">
          SUBMIT YOUR BUILD
        </Link>
      </section>

      <Footer />
    </>
  );
}
