import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Builds Gallery | Trucks, Cars & SUVs | Tire Geeks Sacramento',
  description: 'Browse our gallery of custom truck, car, and SUV builds in Sacramento. Lifted trucks, lowered cars, custom wheels & tires by Tire Geeks.',
  openGraph: {
    title: 'Custom Builds Gallery | Tire Geeks Sacramento',
    description: 'See our custom truck, car, and SUV builds. Lifted trucks, lowered cars, custom wheels & tires.',
    url: 'https://tiregeeks.com/gallery',
  },
  alternates: { canonical: 'https://tiregeeks.com/gallery' },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
