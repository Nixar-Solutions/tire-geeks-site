'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Target, Clock, CreditCard, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── data ─── */
const VALUES = [
  {
    icon: Target,
    title: 'Expert Fitment Knowledge',
    desc: 'Our team lives and breathes wheels and tires. We know bolt patterns, offsets, and ride specs inside-out so your setup looks right and performs even better.',
  },
  {
    icon: Clock,
    title: 'No Appointment Needed',
    desc: 'Roll up whenever it works for you. We operate on a walk-in basis so you spend less time waiting and more time on the road.',
  },
  {
    icon: CreditCard,
    title: 'Financing For Everyone',
    desc: 'Bad credit, no credit — no problem. We partner with multiple financing providers so every driver can get the tires and wheels they need today.',
  },
  {
    icon: DollarSign,
    title: "Sacramento's Best Prices",
    desc: "We keep overhead low and pass the savings on to you. Compare our prices anywhere in the Sacramento area — you won't find a better deal.",
  },
];

const TEAM = [
  { name: 'Coming Soon', role: 'Founder & Lead Technician' },
  { name: 'Coming Soon', role: 'Wheel & Tire Specialist' },
  { name: 'Coming Soon', role: 'Alignment Expert' },
  { name: 'Coming Soon', role: 'Customer Experience' },
];

/* ─── component ─── */
export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      /* fade-in every element with the data-animate attribute */
      const items = gsap.utils.toArray<HTMLElement>('[data-animate]');
      items.forEach((el) => {
        gsap.set(el, { y: 50, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: parseFloat(el.dataset.delay || '0'),
              ease: 'power3.out',
            });
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tiregeeks.com" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://tiregeeks.com/about" }
        ]
      }) }} />
      <Navbar />

      <main>
        {/* ══════════ HERO BANNER ══════════ */}
        <section
          className="relative flex items-center justify-center"
          style={{
            minHeight: 350,
            background:
              'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
          }}
        >
          {/* subtle overlay grain */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url(/noise.png)', backgroundRepeat: 'repeat' }} />

          <div className="relative z-10 text-center px-6 pt-28 pb-16">
            {/* red bar + label */}
            <div className="flex items-center justify-center gap-3 mb-4" data-animate>
              <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
              <span className="font-nav text-[13px] tracking-[0.2em] text-[#D42B2B] uppercase">
                About Us
              </span>
              <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
            </div>

            <h1
              className="font-display text-[clamp(36px,5vw,64px)] leading-[1.1] text-white uppercase"
              data-animate
              data-delay="0.1"
            >
              The Tire Geeks Story
            </h1>
          </div>
        </section>

        {/* ══════════ OUR STORY ══════════ */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* text — 3 of 5 cols (60 %) */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4" data-animate>
                  <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
                  <span className="font-nav text-[13px] tracking-[0.2em] text-[#D42B2B] uppercase">
                    Our Story
                  </span>
                </div>

                <div data-animate data-delay="0.1">
                  <p
                    className="font-body text-[18px] leading-[1.8] text-[#D4D4D4] mb-6"
                  >
                    Tire Geeks was born from a passion for cars and a frustration with
                    the status quo. We saw Sacramento drivers&nbsp;&mdash; from Pocket and
                    Land Park to Arden-Arcade and Carmichael&nbsp;&mdash; getting overcharged at
                    dealerships and underserved at chain shops. So we built something
                    different&nbsp;&mdash; a shop run by actual car enthusiasts who care
                    about fitment, quality, and doing right by every customer. Whether
                    you&rsquo;re building a show truck or just need new tires for your
                    daily driver, we treat every vehicle like it&rsquo;s our own.
                  </p>

                  <p className="font-body text-[18px] leading-[1.8] text-[#D4D4D4] mb-6">
                    From day one our mission has been simple: give Sacramento access to
                    premium wheels, tires, and suspension work at prices that
                    don&rsquo;t hurt. With two locations&nbsp;&mdash;{' '}
                    <a href="/locations/florin-road" className="text-[#D42B2B] hover:underline">Florin Road</a> serving
                    South Sacramento, Meadowview, Elk Grove, and Rancho Cordova, and{' '}
                    <a href="/locations/arden-way" className="text-[#D42B2B] hover:underline">Arden Way</a> serving
                    Arden-Arcade, Citrus Heights, Fair Oaks, Roseville, and North Highlands&nbsp;&mdash;
                    we&rsquo;ve made it easy for drivers across the greater Sacramento
                    area to get expert service close to home. That commitment shows in the
                    over 10,000 installations we&rsquo;ve completed and the
                    five-star reviews our customers leave behind.
                  </p>

                  <p className="font-body text-[18px] leading-[1.8] text-[#D4D4D4]">
                    But Tire Geeks is more than a business&nbsp;&mdash; it&rsquo;s a
                    community hub. We host car meets, sponsor local events, and open
                    our doors to anyone who wants to talk shop. From Natomas to
                    Midtown, East Sacramento to North Highlands, the car
                    culture in Sacramento deserves a home base, and we&rsquo;re proud
                    to be that place. When you walk through our doors you&rsquo;re not
                    just a ticket number; you&rsquo;re part of the crew.
                  </p>
                </div>
              </div>

              {/* store front image — 2 of 5 cols (40 %) */}
              <div className="lg:col-span-2" data-animate data-delay="0.2">
                <img
                  src="/images/store-front-florin.jpg"
                  alt="Tire Geeks store front on Florin Road, Sacramento"
                  className="w-full aspect-[4/5] rounded-2xl object-cover"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ WHY CHOOSE US ══════════ */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6">
            {/* heading */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4" data-animate>
                <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
                <span className="font-nav text-[13px] tracking-[0.2em] text-[#D42B2B] uppercase">
                  Why Choose Us
                </span>
                <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
              </div>
              <h2
                className="font-display text-[clamp(28px,4vw,48px)] text-white uppercase leading-[1.15]"
                data-animate
                data-delay="0.1"
              >
                What Sets Us Apart
              </h2>
            </div>

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    data-animate
                    data-delay={String(0.1 + i * 0.1)}
                    className="rounded-xl p-8"
                    style={{
                      background: '#1A1A1A',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 12,
                      padding: 32,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{ background: 'rgba(230,57,70,0.12)' }}
                    >
                      <Icon size={26} color="#D42B2B" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-heading font-semibold text-[20px] text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="font-body text-[15px] leading-[1.7] text-[#9E9E9E]">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ OUR TEAM ══════════ */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6">
            {/* heading */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4" data-animate>
                <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
                <span className="font-nav text-[13px] tracking-[0.2em] text-[#D42B2B] uppercase">
                  Our Team
                </span>
                <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
              </div>
              <h2
                className="font-display text-[clamp(28px,4vw,48px)] text-white uppercase leading-[1.15]"
                data-animate
                data-delay="0.1"
              >
                The People Behind the Geeks
              </h2>
            </div>

            {/* team cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  data-animate
                  data-delay={String(0.1 + i * 0.1)}
                  className="rounded-xl text-center"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: '40px 24px 32px',
                  }}
                >
                  {/* placeholder avatar */}
                  <div
                    className="w-28 h-28 mx-auto rounded-full mb-5 flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #222 0%, #181818 100%)',
                      border: '2px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span className="font-nav text-[11px] tracking-[0.12em] text-[#555] uppercase">
                      Photo
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-[18px] text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-[14px] text-[#9E9E9E]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ COMMUNITY ══════════ */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6">
            {/* heading */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4" data-animate>
                <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
                <span className="font-nav text-[13px] tracking-[0.2em] text-[#D42B2B] uppercase">
                  Community
                </span>
                <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
              </div>
              <h2
                className="font-display text-[clamp(28px,4vw,48px)] text-white uppercase leading-[1.15]"
                data-animate
                data-delay="0.1"
              >
                More Than Just a Tire Shop
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* text */}
              <div data-animate data-delay="0.15">
                <p className="font-body text-[18px] leading-[1.8] text-[#D4D4D4] mb-6">
                  At Tire Geeks we believe in giving back to the community that
                  supports us. We&rsquo;re proud to host car-show events that bring
                  Sacramento&rsquo;s automotive scene together&nbsp;&mdash; from
                  classic lowriders to lifted trucks, everyone is welcome.
                </p>
                <p className="font-body text-[18px] leading-[1.8] text-[#D4D4D4] mb-6">
                  One of our most meaningful events is{' '}
                  <span className="text-[#D42B2B] font-semibold">
                    &ldquo;Strong Tires, Stronger Fighters&rdquo;
                  </span>
                  &nbsp;&mdash; a breast cancer awareness car show where proceeds go
                  directly to local families battling the disease. It&rsquo;s a day
                  filled with incredible builds, good food, live music, and a
                  community that shows up for each other when it matters most.
                </p>
                <p className="font-body text-[18px] leading-[1.8] text-[#D4D4D4]">
                  Beyond car meets, we sponsor youth sports teams, partner with local
                  charities, and keep our doors open for anyone who wants to learn
                  about cars. Sacramento has given us everything, and we&rsquo;re
                  committed to pouring that energy right back into the neighborhoods
                  we serve.
                </p>
              </div>

              {/* event photo */}
              <div data-animate data-delay="0.25">
                <img
                  src="/images/event-breast-cancer.png"
                  alt="Tire Geeks Strong Tires Stronger Fighters - Breast Cancer Awareness Car Show"
                  className="w-full aspect-video rounded-2xl object-cover"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
