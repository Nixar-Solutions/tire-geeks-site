'use client';
import { useState } from 'react';

const MARQUEE_BRANDS = [
  { name: 'Goodyear', logo: '/images/brands/goodyear-tires.png' },
  { name: 'Fuel Off-Road', logo: '/images/brands/fuel.png' },
  { name: 'Nitto', logo: null },
  { name: 'Rough Country', logo: '/images/brands/rough-country.png' },
  { name: 'Toyo Tires', logo: '/images/brands/toyo-tires.png' },
  { name: 'American Force', logo: '/images/brands/american-force.png' },
  { name: 'Falken', logo: '/images/brands/falken-tires.png' },
  { name: 'Method Race', logo: '/images/brands/method.png' },
  { name: 'BFGoodrich', logo: null },
  { name: 'BDS Suspension', logo: '/images/brands/bds.png' },
  { name: 'Cooper', logo: null },
  { name: 'KMC Wheels', logo: '/images/brands/kmc.png' },
  { name: 'Kumho', logo: '/images/brands/kumho-tires.png' },
  { name: 'Bilstein', logo: '/images/brands/bilstein.png' },
  { name: 'Yokohama', logo: '/images/brands/yokohama-tires.png' },
  { name: 'Black Rhino', logo: '/images/brands/black-rhino.png' },
  { name: 'Nexen', logo: '/images/brands/nexen-tires.png' },
  { name: 'ReadyLIFT', logo: '/images/brands/readylift.png' },
  { name: 'Michelin', logo: null },
  { name: 'Lexani', logo: '/images/brands/lexani.png' },
  { name: 'Vogue', logo: '/images/brands/vogue-tires.png' },
  { name: 'Force Off-Road', logo: '/images/brands/force-offroad.png' },
  { name: 'Superlift', logo: '/images/brands/superlift.png' },
  { name: 'Continental', logo: null },
  { name: 'Motiv', logo: '/images/brands/motiv.png' },
  { name: 'Monroe', logo: '/images/brands/monroe.png' },
  { name: 'Zenith', logo: '/images/brands/zenith.png' },
  { name: 'Pirelli', logo: null },
  { name: 'Hankook', logo: null },
  { name: 'VenomPower', logo: '/images/brands/venompower-tires.png' },
  { name: 'Predator', logo: '/images/brands/predator-tires.png' },
];

function BrandItem({ brand }: { brand: (typeof MARQUEE_BRANDS)[number] }) {
  const [imgError, setImgError] = useState(false);

  if (!brand.logo || imgError) {
    return (
      <span
        className="font-nav whitespace-nowrap transition-opacity duration-300 hover:opacity-100 cursor-default"
        style={{ fontWeight: 600, fontSize: '18px', color: '#6B7280', opacity: 0.5 }}
      >
        {brand.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.logo}
      alt={brand.name}
      className="h-[44px] w-auto object-contain transition-all duration-300 hover:opacity-100 hover:brightness-100 hover:grayscale-0 cursor-default"
      style={{ filter: 'grayscale(1) brightness(1.8)', opacity: 0.45 }}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
}

export default function BrandsStrip() {
  return (
    <section
      style={{
        background: '#111111',
        padding: '48px 0',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <p
        className="font-nav text-center mb-8"
        style={{
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '0.15em',
          color: '#6B7280',
        }}
      >
        TRUSTED BY THE BEST BRANDS
      </p>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '56px',
            animation: 'marquee 90s linear infinite',
            width: 'max-content',
          }}
        >
          {MARQUEE_BRANDS.map((brand, i) => (
            <div key={`a-${i}`} className="flex-shrink-0">
              <BrandItem brand={brand} />
            </div>
          ))}
          {MARQUEE_BRANDS.map((brand, i) => (
            <div key={`b-${i}`} className="flex-shrink-0">
              <BrandItem brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
