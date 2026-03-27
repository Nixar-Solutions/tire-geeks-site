import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Tire Geeks | Sacramento's Trusted Tire & Wheel Experts",
  description: "Meet the team behind Sacramento's top-rated tire & wheel shop. Expert technicians, honest pricing, and a passion for custom builds since day one.",
  openGraph: {
    title: "About Tire Geeks | Sacramento's Trusted Tire & Wheel Experts",
    description: "Sacramento's trusted tire and wheel experts. Learn about our team, values, and commitment to quality.",
    url: 'https://tiregeeks.com/about',
  },
  alternates: { canonical: 'https://tiregeeks.com/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
