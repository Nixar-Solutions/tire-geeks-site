'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Disc, CircleDot, ArrowUpDown, Wrench, Phone } from 'lucide-react';
import type { GalleryBuild } from '@/data/galleryBuilds';
import { getRelatedBuilds } from '@/data/galleryBuilds';
import Lightbox from '@/components/ui/Lightbox';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BuildDetailClient({ build }: { build: GalleryBuild | undefined }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!build) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#0A0A0A' }}>
          <h1 className="font-display text-4xl text-white uppercase mb-6">Build Not Found</h1>
          <p className="font-body text-[#9E9E9E] text-lg mb-8">The build you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/gallery" className="font-nav text-sm uppercase tracking-wider text-[#D42B2B] hover:text-white transition-colors">&larr; Back to Gallery</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedBuilds = getRelatedBuilds(build, 4);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full" style={{ minHeight: '50vh', minBlockSize: '350px' }}>
        <img src={build.images[0]} alt={build.vehicle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, transparent 100%)' }} />
        <Link href="/gallery" className="absolute font-nav font-semibold text-sm uppercase tracking-wider text-[#D42B2B] hover:text-white transition-colors z-10" style={{ top: '100px', left: '24px' }}>&larr; BACK TO GALLERY</Link>
        <div className="absolute z-10 flex items-center gap-4 flex-wrap" style={{ bottom: '40px', left: '24px' }}>
          <h1 className="font-display text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>{build.vehicle}</h1>
          <span className="font-nav text-xs uppercase" style={{ background: 'rgba(212,43,43,0.15)', color: '#D42B2B', padding: '6px 14px', borderRadius: '999px', fontSize: '12px' }}>{build.category}</span>
        </div>
      </section>

      {/* Build Details Section */}
      <section style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left Column — Photo Gallery */}
            <div className="lg:col-span-3">
              {build.images.length > 1 ? (
                <div className="grid grid-cols-2 gap-3">
                  {build.images.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden cursor-pointer" onClick={() => openLightbox(i)}>
                      <img src={img} alt={`${build.vehicle} photo ${i + 1}`} className="w-full h-64 object-cover transition-all duration-300 hover:scale-[1.03] hover:brightness-110" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => openLightbox(0)}>
                  <img src={build.images[0]} alt={build.vehicle} className="w-full rounded-lg" />
                </div>
              )}
            </div>

            {/* Right Column — Build Spec Card */}
            <div className="lg:col-span-2">
              <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '32px' }}>
                <h2 className="font-heading font-bold text-white uppercase" style={{ fontSize: '24px' }}>{build.vehicle}</h2>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '20px 0' }} />

                <div className="flex items-center gap-3 py-3">
                  <Disc size={20} color="#D42B2B" className="flex-shrink-0" />
                  <div><div className="font-body text-sm text-[#6B7280]">Wheels</div><div className="font-body text-base text-white">{build.wheels}</div></div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <CircleDot size={20} color="#D42B2B" className="flex-shrink-0" />
                  <div><div className="font-body text-sm text-[#6B7280]">Tires</div><div className="font-body text-base text-white">{build.tires}</div></div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <ArrowUpDown size={20} color="#D42B2B" className="flex-shrink-0" />
                  <div><div className="font-body text-sm text-[#6B7280]">Suspension</div><div className="font-body text-base text-white">{build.suspension}</div></div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <Wrench size={20} color="#D42B2B" className="flex-shrink-0" />
                  <div>
                    <div className="font-body text-sm text-[#6B7280] mb-1">Services</div>
                    <div className="flex flex-wrap gap-2">
                      {build.services.map((service, i) => (
                        <span key={i} className="border border-[#D42B2B]/30 bg-[#D42B2B]/10 text-[#D42B2B] text-xs font-nav px-3 py-1 rounded-full">{service}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '20px 0' }} />
                <p className="font-body text-base" style={{ color: '#9E9E9E', lineHeight: 1.7 }}>{build.description}</p>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '20px 0' }} />

                <h3 className="font-heading font-semibold text-white uppercase mb-4" style={{ fontSize: '20px' }}>WANT A BUILD LIKE THIS?</h3>
                <Link href="tel:9168008786" className="flex items-center justify-center gap-2 w-full text-center py-3 rounded-lg font-nav uppercase tracking-wider text-white font-bold bg-gradient-to-r from-[#D42B2B] to-[#B71C1C] hover:opacity-90 transition-opacity">
                  <Phone size={18} /> CALL (916) 800-8786
                </Link>
                <Link href="/financing" className="block w-full text-center py-3 rounded-lg font-nav uppercase tracking-wider text-white border border-white/10 hover:border-white/20 transition-colors mt-3">APPLY FOR FINANCING</Link>
                <Link href="/locations" className="block w-full text-center py-3 rounded-lg font-nav uppercase tracking-wider text-white border border-white/10 hover:border-white/20 transition-colors mt-3">VISIT US</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Builds */}
      {relatedBuilds.length > 0 && (
        <section style={{ background: '#0A0A0A' }} className="py-16">
          <h2 className="font-display text-3xl text-white uppercase text-center mb-10">MORE BUILDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-6">
            {relatedBuilds.map((related) => (
              <Link key={related.id} href={`/gallery/${related.slug}`} className="relative rounded-lg overflow-hidden group" style={{ height: '280px' }}>
                <img src={related.images[0]} alt={related.vehicle} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)' }}>
                  <span className="font-heading text-base font-bold uppercase text-white">{related.shortName}</span>
                  <span className="font-body text-xs text-gray-400">{related.wheels} &middot; {related.tires}</span>
                  <span className="text-[#D42B2B] text-xs font-nav opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">VIEW BUILD &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Lightbox images={build.images} initialIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
      <Footer />
    </>
  );
}
