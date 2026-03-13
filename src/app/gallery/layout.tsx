import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Builds Gallery | Custom Trucks & Cars | Tire Geeks Sacramento',
  description: 'Browse 30+ custom vehicle builds from Tire Geeks Sacramento. Lifted trucks, lowered cars, custom wheels, and more. See real customer rides.',
  openGraph: {
    title: 'Customer Builds Gallery | Tire Geeks Sacramento',
    description: 'Real customer builds — lifted trucks, lowered cars, custom wheels and more.',
    url: 'https://tiregeeks.com/gallery',
  },
  alternates: { canonical: 'https://tiregeeks.com/gallery' },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
