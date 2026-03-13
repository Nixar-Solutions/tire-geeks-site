import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Tire Geeks | Sacramento's Car Enthusiast Tire Shop",
  description: 'Learn about Tire Geeks — Sacramento\'s community-driven tire and wheel shop. Expert fitment, walk-in service, and a passion for cars. Two locations serving the Sacramento area.',
  openGraph: {
    title: "About Tire Geeks | Sacramento's Car Enthusiast Tire Shop",
    description: 'Community-driven tire and wheel shop. Expert fitment, walk-in service, and a passion for cars.',
    url: 'https://tiregeeks.com/about',
  },
  alternates: { canonical: 'https://tiregeeks.com/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
