'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { Star, Wrench, CreditCard } from 'lucide-react';
import HeroVideoBackground from './HeroVideoBackground';
import VehicleFinder from './VehicleFinder';
import Button from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

const TRUST_ITEMS = [
  { icon: Star, text: '4.9 Google Rating' },
  { icon: Wrench, text: 'No Appointment Needed' },
  { icon: CreditCard, text: '0% Interest 100 Days' },
];

export default function HeroSection({ loaded }: { loaded: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineBarRef = useRef<HTMLSpanElement>(null);
  const taglineTextRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const finderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Split headline text
    let split1: SplitType | null = null;
    let split2: SplitType | null = null;

    if (line1Ref.current) {
      split1 = new SplitType(line1Ref.current, { types: 'chars' });
      if (split1.chars) gsap.set(split1.chars, { y: '100%', opacity: 0 });
    }
    if (line2Ref.current) {
      split2 = new SplitType(line2Ref.current, { types: 'chars' });
      if (split2.chars) gsap.set(split2.chars, { y: '100%', opacity: 0 });
    }

    // Set initial states
    gsap.set(taglineBarRef.current, { width: 0 });
    gsap.set(taglineTextRef.current, { x: -20, opacity: 0 });
    gsap.set(subtitleRef.current, { y: 20, opacity: 0 });
    gsap.set(ctaRef.current, { y: 30, opacity: 0 });
    gsap.set(trustRef.current, { opacity: 0 });
    gsap.set(finderRef.current, { x: 60, opacity: 0 });

    // Timeline
    tl.to(taglineBarRef.current, { width: 40, duration: 0.4 }, 0)
      .to(taglineTextRef.current, { x: 0, opacity: 1, duration: 0.5 }, 0.1);

    if (split1?.chars) {
      tl.to(split1.chars, { y: '0%', opacity: 1, duration: 0.5, stagger: 0.03 }, 0.3);
    }
    if (split2?.chars) {
      tl.to(split2.chars, { y: '0%', opacity: 1, duration: 0.5, stagger: 0.03 }, 0.6);
    }

    tl.to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.6 }, 1.0)
      .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, 1.2)
      .to(trustRef.current, { opacity: 1, duration: 0.5 }, 1.5)
      .to(finderRef.current, { x: 0, opacity: 1, duration: 0.7 }, 1.3);

    return () => {
      tl.kill();
      split1?.revert();
      split2?.revert();
    };
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[600px] h-screen flex items-center overflow-hidden"
    >
      <HeroVideoBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8 pt-[120px]">
        {/* Left side */}
        <div className="w-full lg:w-[60%]">
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-6">
            <span
              ref={taglineBarRef}
              className="inline-block h-[2px]"
              style={{ background: 'var(--red)', width: 0 }}
            />
            <span
              ref={taglineTextRef}
              className="font-nav text-[14px] font-medium uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)' }}
            >
              SACRAMENTO&apos;S PREMIER TIRE & WHEEL SPECIALISTS
            </span>
          </div>

          {/* Headlines */}
          <div className="mb-6">
            <div ref={line1Ref} className="overflow-hidden">
              <h1 className="font-display hero-headline uppercase text-[var(--text-primary)]">
                RIDE NOW.
              </h1>
            </div>
            <div ref={line2Ref} className="overflow-hidden">
              <h1 className="font-display hero-headline uppercase text-[var(--text-primary)]">
                PAY LATER.
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-heading text-[18px] lg:text-[20px] font-normal text-[var(--text-secondary)] mb-8"
          >
            {BRAND.tagline.split('•').join(' • ')} • Lifts • Lowering Kits
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button href="/services" variant="cta" size="lg">
              SHOP NOW
            </Button>
            <Button href={BRAND.acima.applyUrl} external variant="ghost" size="lg">
              APPLY FOR FINANCING
            </Button>
          </div>

          {/* Trust strip */}
          <div
            ref={trustRef}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0"
          >
            {TRUST_ITEMS.map((item, i) => (
              <div key={item.text} className="flex items-center">
                {i > 0 && (
                  <div
                    className="hidden sm:block w-px h-5 mx-5"
                    style={{ background: 'rgba(255,255,255,0.15)' }}
                  />
                )}
                <div className="flex items-center gap-2">
                  <item.icon size={16} style={{ color: 'var(--red)' }} />
                  <span className="font-body text-[14px] font-medium text-[var(--text-secondary)]">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — Vehicle Finder */}
        <div ref={finderRef} className="w-full lg:w-[40%] lg:pt-4">
          <VehicleFinder />
        </div>
      </div>
    </section>
  );
}
