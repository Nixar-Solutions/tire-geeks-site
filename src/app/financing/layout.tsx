import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire Financing No Credit Check Sacramento | Acima at Tire Geeks',
  description: 'Get tires, wheels, and auto services now — pay over time with Acima. No credit check, $0 down, 100 days same as cash. Apply at Tire Geeks Sacramento.',
  openGraph: {
    title: 'Tire Financing No Credit Check | Acima at Tire Geeks',
    description: 'No credit check financing for tires, wheels, lifts & more. $0 down, 100 days same as cash at Tire Geeks.',
    url: 'https://tiregeeks.com/financing',
  },
  alternates: { canonical: 'https://tiregeeks.com/financing' },
};

export default function FinancingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
