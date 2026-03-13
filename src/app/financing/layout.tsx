import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire Financing No Credit Needed | Acima Leasing | Tire Geeks Sacramento',
  description: 'Get tires and wheels now, pay later with Acima lease-to-own financing. No credit check, $0 down, 100 days same as cash. Apply in seconds at Tire Geeks Sacramento.',
  openGraph: {
    title: 'Tire Financing No Credit Needed | Tire Geeks',
    description: 'Acima lease-to-own: no credit needed, $0 down, 100 days same as cash. Apply in seconds.',
    url: 'https://tiregeeks.com/financing',
  },
  alternates: { canonical: 'https://tiregeeks.com/financing' },
};

export default function FinancingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
