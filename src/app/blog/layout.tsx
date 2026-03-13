import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire & Wheel Knowledge Base | Fitment Guides & Tips | Tire Geeks',
  description: 'Expert guides on tire sizes, wheel offset, bolt patterns, fitment, and more. Learn everything you need to know before buying tires and wheels.',
  openGraph: {
    title: 'Tire & Wheel Knowledge Base | Tire Geeks',
    description: 'Expert guides on tire sizes, wheel offset, bolt patterns, and fitment.',
    url: 'https://tiregeeks.com/blog',
  },
  alternates: { canonical: 'https://tiregeeks.com/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
