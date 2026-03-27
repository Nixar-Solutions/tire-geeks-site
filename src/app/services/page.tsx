'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CircleDot,
  Disc,
  Crosshair,
  ArrowUpDown,
  ArrowDownUp,
  Wrench,
  Check,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Service Data                                                       */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    id: 'tires',
    icon: CircleDot,
    label: 'Tire Services',
    title: 'TIRES',
    bg: '#0A0A0A',
    price: 'Tires from $79/set of 4',
    paragraphs: [
      "Your tires are the only thing between your vehicle and the road. At Tire Geeks, we carry a massive selection of premium and budget-friendly tires from the brands you trust — Nitto, Toyo, Falken, BFGoodrich, Cooper, and more. Whether you're building a show truck, daily-driving your sedan, or outfitting your fleet, we've got the rubber to match.",
      'Every tire purchase includes professional mounting and computer spin-balancing so your ride is smooth from the moment you leave the shop. We use nitrogen inflation on request and handle valve stem replacement as part of our standard service.',
      'Picked up a nail on the highway? We do flat repairs and plug-patches while you wait. Our techs also service and reset TPMS sensors — no dealer visit required.',
      "Need help choosing? Walk in or call and we'll match you with the perfect tire for your driving style, climate, and budget. We keep a deep inventory in stock for same-day installation.",
    ],
    bullets: [
      'New tire sales — all major brands in stock',
      'Professional mounting & computer balancing',
      'Flat repair & plug-patch service',
      'TPMS sensor service & reset',
      'Nitrogen inflation available',
      'Seasonal tire changeovers',
    ],
  },
  {
    id: 'wheels',
    icon: Disc,
    label: 'Wheel Services',
    title: 'WHEELS',
    bg: '#111111',
    price: null,
    paragraphs: [
      "Nothing transforms the look of your vehicle faster than a fresh set of wheels. Tire Geeks stocks hundreds of styles from Fuel, Moto Metal, XD Series, Hostile, American Force, Vision, and more. Whether you want aggressive off-road beadlocks or clean street concave designs, we'll get you rolling.",
      'Fitment matters. Our team verifies every bolt pattern, offset, hub bore, and brake clearance before anything goes on the vehicle. We run test-fits and use hub-centric rings where needed so you get zero vibration and a factory feel.',
      "Looking for a complete package? We build wheel-and-tire combos in-house — mounted, balanced, and ready to bolt on. We'll even handle the lug nuts and center caps so nothing gets overlooked.",
      "Have curb rash or corroded wheels? We offer refinishing referrals and can source OEM-replacement wheels for most makes and models. Don't let damaged wheels ruin an otherwise clean build.",
    ],
    bullets: [
      'Custom aftermarket wheels — 100s of styles',
      'Expert fitment consultation',
      'Wheel & tire combo packages',
      'Hub-centric ring installation',
      'OEM wheel sourcing & replacement',
      'Wheel refinishing referrals',
    ],
  },
  {
    id: 'alignment',
    icon: Crosshair,
    label: 'Alignment Services',
    title: 'ALIGNMENT',
    bg: '#0A0A0A',
    price: 'Alignment from $79',
    paragraphs: [
      "A proper alignment is one of the most overlooked maintenance items — and one of the most important. Misaligned wheels cause uneven tire wear, pulling, vibration, and poor handling. At Tire Geeks, we use state-of-the-art 4-wheel alignment equipment to dial in your camber, caster, and toe to manufacturer spec or your custom preference.",
      "If you've recently installed new tires, wheels, a lift kit, or lowering springs, an alignment isn't optional — it's mandatory. Skipping it will chew through your new rubber in weeks and void any tread-life warranties.",
      'Our alignment techs are trained to handle everything from bone-stock daily drivers to heavily modified trucks and slammed builds. We adjust for aftermarket control arms, adjustable links, and custom ride-height setups.',
      "Every alignment includes a printout of before-and-after angles so you can see exactly what was corrected. We recommend a re-check every 6,000 miles or after any suspension work.",
    ],
    bullets: [
      'Full 4-wheel alignment',
      'Camber, caster & toe adjustment',
      'Steering wheel centering',
      'Suspension geometry inspection',
      'Before & after printout included',
      'Post-lift / post-lower re-alignment',
    ],
  },
  {
    id: 'lift-kits',
    icon: ArrowUpDown,
    label: 'Lift & Leveling',
    title: 'LIFT & LEVELING KITS',
    bg: '#111111',
    price: 'Lift Kits from $299 installed',
    paragraphs: [
      "Want to run bigger tires, improve ground clearance, or just give your truck that aggressive stance it deserves? Tire Geeks installs body lifts, suspension lifts, and leveling kits for trucks, Jeeps, and SUVs. From a simple 2\" level to a full 6\"+ suspension lift, we've done it all.",
      "We carry kits from Rough Country, ReadyLIFT, Superlift, BDS, Zone, and more. Every installation includes a post-lift alignment and a full inspection of brake lines, driveshaft angles, and steering components to make sure everything is safe and dialed.",
      "Leveling kits are perfect if you want to eliminate that factory rake without changing the ride quality. Most 2\" leveling installs take under two hours and let you fit a significantly larger tire without rubbing.",
      "Building a full off-road rig? We can coordinate your lift, wheels, tires, and fender modifications into a single visit. Walk in with a stock truck and drive out with a complete build — that's the Tire Geeks way.",
    ],
    bullets: [
      'Body lifts (2"–6"+)',
      'Suspension lift kit installation',
      'Leveling kit installation',
      'Post-lift 4-wheel alignment included',
      'Brake line & driveshaft angle inspection',
      'Full build coordination available',
    ],
  },
  {
    id: 'lowering',
    icon: ArrowDownUp,
    label: 'Lowering Services',
    title: 'LOWERING KITS',
    bg: '#0A0A0A',
    price: null,
    paragraphs: [
      "Low is a lifestyle. Whether you're going for a subtle 1.5\" drop on your daily or slamming your show car to the ground, Tire Geeks has the parts and expertise to make it happen. We install coilovers, lowering springs, and air-ride suspension systems for cars, trucks, and SUVs.",
      'We work with top brands like BC Racing, KW, Eibach, H&R, Tein, and Air Lift Performance. Our techs understand the nuances of each platform — from strut-style front ends to multi-link rears — so your drop is even, safe, and rides the way you want.',
      'Every lowering installation includes a 4-wheel alignment and a suspension inspection. We check for proper bump-stop clearance, CV angle limits, and exhaust clearance so you don\'t run into issues down the road.',
      "Want a custom stance? We do aggressive wheel fitment, fender rolling, and can advise on camber kits and adjustable arms to get that perfect flush or tucked look. Bring us your vision — we'll make it real.",
    ],
    bullets: [
      'Coilover installation & setup',
      'Lowering spring installation',
      'Air suspension systems',
      'Fender rolling & modification',
      'Custom stance & fitment consulting',
      'Post-drop alignment included',
    ],
  },
  {
    id: 'brakes',
    icon: Wrench,
    label: 'Brakes & Suspension',
    title: 'BRAKES & SUSPENSION',
    bg: '#111111',
    price: null,
    paragraphs: [
      "Your brakes and suspension aren't just comfort features — they're safety-critical systems. Tire Geeks offers a full menu of brake and suspension services to keep your vehicle stopping straight and riding smooth. From basic pad-and-rotor swaps to full suspension overhauls, we handle it all.",
      "Hearing squealing, grinding, or feeling a pulsation when you brake? Don't wait. We inspect and replace brake pads, rotors, calipers, and hardware. We also do brake fluid flushes and line inspections to make sure your entire braking system is in top shape.",
      'On the suspension side, we replace worn struts, shocks, control arms, ball joints, tie rod ends, sway bar links, and bushings. If your vehicle is bouncing, clunking, or wandering in the lane, odds are something in the suspension needs attention.',
      "We also install performance upgrades — big brake kits, upgraded sway bars, polyurethane bushings, and more. Whether you're restoring ride quality or building something special, our suspension techs have you covered.",
    ],
    bullets: [
      'Brake pad & rotor replacement',
      'Caliper service & replacement',
      'Strut & shock replacement',
      'Control arm & ball joint service',
      'Tie rod & sway bar link replacement',
      'Performance brake & suspension upgrades',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero entrance */
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll('.hero-anim'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }

      /* Each service section fades in */
      sectionRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el.querySelectorAll('.svc-anim'), {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        });
      });

      /* Bottom CTA */
      if (ctaRef.current) {
        gsap.from(ctaRef.current.querySelectorAll('.cta-anim'), {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const serviceSchemas = [
    {
      "@type": "Service",
      "name": "Tires",
      "description": "Tire sales, professional mounting, computer balancing, flat repair, and TPMS sensor service.",
      "provider": { "@type": "LocalBusiness", "name": "Tire Geeks" },
      "areaServed": { "@type": "City", "name": "Sacramento, CA" },
      "serviceType": "Tire Sales & Installation"
    },
    {
      "@type": "Service",
      "name": "Custom Wheels",
      "description": "Aftermarket wheel sales, expert fitment consultation, wheel and tire combo packages, and hub-centric ring installation.",
      "provider": { "@type": "LocalBusiness", "name": "Tire Geeks" },
      "areaServed": { "@type": "City", "name": "Sacramento, CA" },
      "serviceType": "Custom Wheel Sales & Fitment"
    },
    {
      "@type": "Service",
      "name": "Wheel Alignment",
      "description": "Full 4-wheel alignment service with camber, caster, and toe adjustment. Before and after printout included. Starting at $79.",
      "provider": { "@type": "LocalBusiness", "name": "Tire Geeks" },
      "areaServed": { "@type": "City", "name": "Sacramento, CA" },
      "serviceType": "4-Wheel Alignment"
    },
    {
      "@type": "Service",
      "name": "Lift & Leveling Kits",
      "description": "Body lifts, suspension lifts, and leveling kit installation for trucks, Jeeps, and SUVs. Post-lift alignment included. Starting at $299.",
      "provider": { "@type": "LocalBusiness", "name": "Tire Geeks" },
      "areaServed": { "@type": "City", "name": "Sacramento, CA" },
      "serviceType": "Lift & Leveling Kit Installation"
    },
    {
      "@type": "Service",
      "name": "Lowering Kits",
      "description": "Coilover installation, lowering springs, and air suspension systems. Custom stance and fitment consulting with post-drop alignment included.",
      "provider": { "@type": "LocalBusiness", "name": "Tire Geeks" },
      "areaServed": { "@type": "City", "name": "Sacramento, CA" },
      "serviceType": "Lowering Kit Installation"
    },
    {
      "@type": "Service",
      "name": "Brakes & Suspension",
      "description": "Brake pad and rotor replacement, caliper service, strut and shock replacement, control arm and ball joint service, and performance upgrades.",
      "provider": { "@type": "LocalBusiness", "name": "Tire Geeks" },
      "areaServed": { "@type": "City", "name": "Sacramento, CA" },
      "serviceType": "Brake & Suspension Service"
    }
  ];

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": serviceSchemas
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tiregeeks.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://tiregeeks.com/services" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      <main>
        {/* ====== HERO BANNER ====== */}
        <div
          ref={heroRef}
          className="relative flex items-center justify-center text-center"
          style={{
            height: '300px',
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111',
          }}
        >
          <div className="px-4">
            <div className="hero-anim flex items-center justify-center gap-3 mb-4">
              <span
                className="inline-block w-8 h-[3px]"
                style={{ background: '#D42B2B' }}
              />
              <span
                className="font-heading text-sm tracking-[0.25em] uppercase"
                style={{ color: '#D42B2B' }}
              >
                Our Services
              </span>
              <span
                className="inline-block w-8 h-[3px]"
                style={{ background: '#D42B2B' }}
              />
            </div>
            <h1
              className="hero-anim font-display uppercase text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}
            >
              Everything Your Ride Needs
            </h1>
          </div>
        </div>

        {/* ====== SERVICE SECTIONS ====== */}
        {SERVICES.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <section
              key={svc.id}
              id={svc.id}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              style={{ background: svc.bg, padding: '80px 0' }}
            >
              <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                {/* Icon + label */}
                <div className="svc-anim flex items-center gap-3 mb-4">
                  <Icon
                    className="w-6 h-6"
                    style={{ color: '#D42B2B' }}
                  />
                  <span
                    className="font-heading text-sm tracking-[0.2em] uppercase"
                    style={{ color: '#D42B2B' }}
                  >
                    {svc.label}
                  </span>
                </div>

                {/* Red bar + title */}
                <div className="svc-anim mb-8">
                  <div
                    className="w-12 h-[3px] mb-3"
                    style={{ background: '#D42B2B' }}
                  />
                  <h2
                    className="font-display text-white uppercase"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      lineHeight: 1.1,
                    }}
                  >
                    {svc.title}
                  </h2>
                </div>

                {/* Content grid: text left, bullets right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                  {/* Paragraphs */}
                  <div className="space-y-5">
                    {svc.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="svc-anim font-body text-[#AAAAAA] text-[15px] leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Bullets + price + CTA */}
                  <div>
                    <ul className="space-y-3 mb-8">
                      {svc.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="svc-anim flex items-start gap-3"
                        >
                          <Check
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{ color: '#D42B2B' }}
                          />
                          <span className="font-body text-white text-[15px]">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {svc.price && (
                      <div
                        className="svc-anim mb-6 inline-block px-5 py-3 rounded"
                        style={{
                          background: 'rgba(227,24,55,0.1)',
                          border: '1px solid rgba(227,24,55,0.25)',
                        }}
                      >
                        <span
                          className="font-heading text-lg tracking-wide uppercase"
                          style={{ color: '#D42B2B' }}
                        >
                          {svc.price}
                        </span>
                      </div>
                    )}

                    <div className="svc-anim">
                      <a href="/contact" className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block no-underline" style={{ textDecoration: 'none' }}>
                        GET A QUOTE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ====== BOTTOM CTA ====== */}
        <section
          ref={ctaRef}
          className="text-center"
          style={{ background: '#0A0A0A', padding: '80px 0' }}
        >
          <div className="max-w-[800px] mx-auto px-6">
            <div
              className="cta-anim w-12 h-[3px] mx-auto mb-4"
              style={{ background: '#D42B2B' }}
            />
            <h2
              className="cta-anim font-display text-white uppercase mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Ready to Get Started?
            </h2>
            <p className="cta-anim font-body text-[#AAAAAA] text-lg mb-8">
              Call us or walk in today. No appointment needed for most services.
            </p>
            <div className="cta-anim flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+19168008786" className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2 no-underline" style={{ textDecoration: 'none' }}>
                <Phone className="w-5 h-5" />
                CALL (916) 800-8786
              </a>
              <a href="/contact" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block no-underline" style={{ textDecoration: 'none' }}>
                GET A QUOTE
              </a>
            </div>
          </div>
        </section>

        {/* ====== RELATED ARTICLES ====== */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                From Our Blog
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Best Tire Shop in Sacramento', href: '/blog/best-tire-shop-sacramento' },
                { title: 'Custom Wheels Guide', href: '/blog/custom-wheels-sacramento' },
                { title: 'Wheel Alignment: Signs You Need One', href: '/blog/wheel-alignment-sacramento' },
                { title: 'Lift Kit Installation Guide', href: '/blog/lift-kit-installation-sacramento' },
                { title: 'Lowering Your Car: Complete Guide', href: '/blog/lowering-your-car-guide' },
                { title: 'Brake Replacement Costs', href: '/blog/brake-replacement-cost-sacramento' },
                { title: 'Tire Financing with No Credit Check', href: '/blog/tire-financing-no-credit-check-sacramento' },
                { title: 'Wheels & Tires Package Deals', href: '/blog/new-wheels-and-tires-package-deals' },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block p-5 rounded-xl transition-all hover:border-[#D42B2B]/50 group"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <span className="font-heading text-[16px] font-semibold text-[#F2F2F2] group-hover:text-[#D42B2B] transition-colors leading-snug block mb-2">
                    {article.title}
                  </span>
                  <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                    Read Article &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
