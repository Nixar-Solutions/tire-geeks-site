'use client';
import { useState } from 'react';
import { VEHICLE_MAKES, BRAND } from '@/lib/constants';
import GlassCard from '@/components/ui/GlassCard';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const YEARS = Array.from({ length: 37 }, (_, i) => 2026 - i);

const PLACEHOLDER_MODELS = [
  'Camry', 'Corolla', 'RAV4', 'Civic', 'Accord', 'CR-V', 'F-150', 'Silverado',
  'Sierra', 'Wrangler', 'Cherokee', 'Altima', 'Sentra', 'Pathfinder',
];

const PLACEHOLDER_TRIMS = ['Base', 'Sport', 'Limited', 'Premium', 'SE', 'XLE', 'SR', 'Touring'];

export default function VehicleFinder() {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [trim, setTrim] = useState('');
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <GlassCard solid={isMobile} className="p-6 lg:p-8 w-full">
      <h3 className="font-heading text-[24px] font-bold uppercase text-[var(--text-primary)] mb-1">
        FIND YOUR FIT
      </h3>
      <p className="font-body text-[14px] text-[var(--text-secondary)] mb-6">
        Select your vehicle to see what fits
      </p>

      <div className="flex flex-col gap-3">
        <select
          className="vehicle-select font-body"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setMake('');
            setModel('');
            setTrim('');
          }}
        >
          <option value="" disabled>Year</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <select
          className="vehicle-select font-body"
          value={make}
          onChange={(e) => {
            setMake(e.target.value);
            setModel('');
            setTrim('');
          }}
          disabled={!year}
        >
          <option value="" disabled>Make</option>
          {VEHICLE_MAKES.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          className="vehicle-select font-body"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
            setTrim('');
          }}
          disabled={!make}
        >
          <option value="" disabled>Model</option>
          {PLACEHOLDER_MODELS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          className="vehicle-select font-body"
          value={trim}
          onChange={(e) => setTrim(e.target.value)}
          disabled={!model}
        >
          <option value="" disabled>Trim</option>
          {PLACEHOLDER_TRIMS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <button
          className="btn-cta font-nav font-bold text-[16px] uppercase tracking-[0.08em] h-[52px] rounded-[6px] w-full mt-1"
        >
          SHOP TIRES & WHEELS
        </button>
      </div>

      <p className="text-center mt-4 font-body text-[13px] text-[var(--text-muted)]">
        Or call us:{' '}
        <a
          href={`tel:${BRAND.locations[0].phoneRaw}`}
          className="text-[var(--text-primary)] hover:text-[var(--red)] transition-colors"
        >
          {BRAND.locations[0].phone}
        </a>
      </p>
    </GlassCard>
  );
}
