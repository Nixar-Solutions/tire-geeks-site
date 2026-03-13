import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire Geeks Locations | 3020 Florin Rd & 2245 Arden Way Sacramento',
  description: 'Visit Tire Geeks at two Sacramento locations: 3020 Florin Road (916-800-8786) and 2245 Arden Way (916-913-8786). Open Mon-Sat 9AM-7PM, no appointment needed.',
  openGraph: {
    title: 'Tire Geeks Locations | Sacramento',
    description: 'Two Sacramento locations — Florin Road & Arden Way. Open Mon-Sat 9AM-7PM.',
    url: 'https://tiregeeks.com/locations',
  },
  alternates: { canonical: 'https://tiregeeks.com/locations' },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
