import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire Services Sacramento | Tires, Wheels, Alignment, Lifts | Tire Geeks',
  description: 'Full-service tire shop in Sacramento. Tires, custom wheels, alignment, lift kits, lowering kits, brakes & suspension. Walk-in service, no appointment needed.',
  openGraph: {
    title: 'Tire Services Sacramento | Tire Geeks',
    description: 'Full-service tire shop — tires, wheels, alignment, lifts, lowering, brakes. Two Sacramento locations.',
    url: 'https://tiregeeks.com/services',
  },
  alternates: { canonical: 'https://tiregeeks.com/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
