import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Tire Geeks | Sacramento Tire Shop | (916) 800-8786',
  description: 'Contact Tire Geeks Sacramento for tires, wheels, alignment, and more. Call (916) 800-8786 or visit us at 3020 Florin Road or 2245 Arden Way.',
  openGraph: {
    title: 'Contact Tire Geeks | Sacramento',
    description: 'Get in touch — call, visit, or send us a message. Two Sacramento locations.',
    url: 'https://tiregeeks.com/contact',
  },
  alternates: { canonical: 'https://tiregeeks.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
