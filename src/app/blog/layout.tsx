import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire & Wheel Blog | Expert Tips & Guides | Tire Geeks Sacramento',
  description: 'Expert tire and wheel guides from Sacramento\'s top shop. Learn about tires, wheels, alignment, lift kits, brakes, and more from the Tire Geeks team.',
  openGraph: {
    title: 'Tire & Wheel Blog | Tire Geeks Sacramento',
    description: 'Expert tips and guides on tires, wheels, alignment, lifts, and more from Tire Geeks Sacramento.',
    url: 'https://tiregeeks.com/blog',
  },
  alternates: { canonical: 'https://tiregeeks.com/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
