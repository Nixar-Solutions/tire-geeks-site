import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: 'Tires in Sacramento | Best Tire Prices | Tire Geeks',
  description:
    "Shop Sacramento's best tire prices at Tire Geeks. All major brands in stock — Nitto, Toyo, BFGoodrich, Falken & more. Professional mounting & balancing included. Two locations, walk-ins welcome.",
  alternates: {
    canonical: 'https://tiregeeks.com/services/tires-sacramento',
  },
  openGraph: {
    title: 'Tires in Sacramento | Best Tire Prices | Tire Geeks',
    description:
      "Shop Sacramento's best tire prices at Tire Geeks. All major brands in stock — Nitto, Toyo, BFGoodrich, Falken & more. Professional mounting & balancing included. Two locations, walk-ins welcome.",
    url: 'https://tiregeeks.com/services/tires-sacramento',
    siteName: 'Tire Geeks',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

/* ------------------------------------------------------------------ */
/*  Schema Markup                                                      */
/* ------------------------------------------------------------------ */

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tiregeeks.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Tires in Sacramento', item: 'https://tiregeeks.com/services/tires-sacramento' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tire Sales & Installation Sacramento',
  description:
    'New tire sales, professional mounting, computer spin-balancing, flat repair, TPMS sensor service, nitrogen inflation, and seasonal tire changeovers in Sacramento, CA.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Tire Geeks',
    url: 'https://tiregeeks.com',
  },
  areaServed: { '@type': 'City', name: 'Sacramento' },
  serviceType: 'Tire Sales & Installation',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '79',
    description: 'Tires from $79/set of 4',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do new tires cost in Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Tire Geeks, tire prices start at $79 for a set of four budget-friendly options. Mid-range all-season tires typically run $400-$600 per set, and premium performance tires range from $600-$1,200+ per set. Every purchase includes professional mounting, computer spin-balancing, valve stems, and TPMS reset at no additional charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tire brands does Tire Geeks carry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tire Geeks carries all major tire brands including Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, Kumho, Nexen, Ironman, and many more. We stock all-season, all-terrain, mud-terrain, performance, and highway tires to fit cars, trucks, SUVs, and Jeeps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tire Geeks offer tire financing with no credit check?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tire Geeks partners with Acima and other financing providers that offer lease-to-own options with no credit needed. You can get approved for up to $5,000 in minutes with no down payment required and no interest for the first 100 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does tire installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard four-tire installation at Tire Geeks takes approximately 45 minutes to 1 hour. This includes mounting, computer spin-balancing, valve stem replacement, and TPMS sensor reset. Walk-ins are welcome and same-day installation is available when your tires are in stock.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the best tire for Sacramento weather?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most Sacramento drivers, a high-quality all-season tire is the best choice. Sacramento's hot summers (regularly exceeding 100 degrees F) require a compound that resists heat degradation, while mild, wet winters demand reliable traction on wet roads. If you frequently drive to the Sierra for snow sports, consider a set of dedicated winter tires or all-weather tires with the three-peak mountain snowflake rating.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function TiresSacramentoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main>
        {/* ====== BREADCRUMB ====== */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-wider">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/services" className="text-[#6B7280] hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">Tires in Sacramento</span>
            </nav>
          </div>
        </div>

        {/* ====== HERO ====== */}
        <section
          className="relative flex items-center justify-center text-center"
          style={{
            height: '340px',
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111',
          }}
        >
          <div className="px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Tire Services
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Tires in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto">
              Sacramento&apos;s best tire prices with professional mounting and balancing included. Two locations, walk-ins welcome.
            </p>
          </div>
        </section>

        {/* ====== MAIN CONTENT ====== */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left column: expert content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="w-12 h-[3px] mb-3" style={{ background: '#D42B2B' }} />
                <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
                  Your Complete Guide to Buying Tires in Sacramento
                </h2>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Choosing the right tires in Sacramento is not just about finding the lowest price &mdash; it&apos;s about finding the right combination of performance, longevity, and value for the unique conditions Sacramento drivers face. With summer temperatures regularly exceeding 100&deg;F, the intense Central Valley heat accelerates rubber compound degradation faster than in cooler climates. According to the National Highway Traffic Safety Administration, tire-related crashes account for approximately 33,000 injuries annually in the United States, making proper tire selection and maintenance a genuine safety issue.
                </p>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  At Tire Geeks, we have built Sacramento&apos;s most driver-focused tire shop. We stock a massive inventory of premium and budget-friendly tires from the brands you trust and install them with the precision your vehicle deserves. Every tire purchase includes professional mounting, computer spin-balancing, new valve stems, and a TPMS sensor reset at no additional charge. That is not an upsell &mdash; it is our standard.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Sacramento&apos;s Climate and Your Tires
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Sacramento&apos;s weather puts tires through a demanding cycle. The scorching summers that push pavement temperatures above 150&deg;F soften and wear rubber compounds faster than national averages &mdash; studies show tires in hot climates can lose up to 25% of their tread life compared to moderate climates. Winter brings wet, slick roads that demand reliable traction. And if you are one of the thousands of Sacramento residents who make weekend trips to Lake Tahoe or the Sierra foothills, you need tires that can handle mountain passes and chain-control zones.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The I-5 and Highway 99 corridor is the daily reality for hundreds of thousands of Sacramento commuters. These high-speed, stop-and-go freeways chew through tires that are not suited for the task. A quality all-season tire rated for high heat resistance will outlast a bargain tire by 15,000 to 20,000 miles in Sacramento conditions, making the slightly higher upfront cost a smarter investment.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Tire Types We Carry
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">All-Season Tires</strong> &mdash; The go-to choice for most Sacramento daily drivers. These tires deliver balanced performance in dry heat, wet winter roads, and light off-road conditions. Brands like Falken, Cooper, and Hankook offer excellent all-season options that we keep in stock for same-day installation.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">All-Terrain Tires</strong> &mdash; Perfect for Sacramento truck and SUV owners who split time between city streets and dirt roads in the foothills. Nitto Ridge Grappler, Toyo Open Country A/T III, and BFGoodrich KO2 are among the most popular all-terrain tires we sell. They deliver aggressive traction without excessive road noise.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">Mud-Terrain Tires</strong> &mdash; For serious off-roaders who hit Rubicon Trail, Prairie City SVRA, or the Fordyce Creek area, mud-terrain tires from Nitto, Toyo, and BFGoodrich provide the aggressive bite you need. We help you choose the right size to avoid rubbing and ensure proper clearance.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">Performance Tires</strong> &mdash; Sacramento has a thriving car culture, and our selection of performance tires matches it. From Falken Azenis to Nitto NT555, we stock ultra-high-performance summer tires for sports cars, tuner builds, and weekend track days at Thunderhill or Sonoma Raceway.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Brands We Carry
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks stocks tires from <strong className="text-white">Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, Kumho, Nexen, Ironman, Lexani, Atturo, Vercelli</strong>, and many more. We keep deep inventory at both Sacramento locations so you can walk in and drive out with new rubber the same day. If we do not have your exact size in stock, we can typically source it within 24 to 48 hours.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Pricing &amp; What&apos;s Included
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks offers tires starting at <strong className="text-white">$79 per set of four</strong> for budget-friendly options. Mid-range all-season tires run $400&ndash;$600 per set, and premium performance or off-road tires range from $600&ndash;$1,200+ per set. The average Sacramento driver spends between $500 and $800 on a quality set of four tires installed. Every purchase at Tire Geeks includes:
                </p>
                <ul className="space-y-3">
                  {[
                    'Professional mounting on your wheels',
                    'Computer spin-balancing for a smooth ride',
                    'New valve stems installed',
                    'TPMS sensor reset and service',
                    'Old tire disposal',
                    'Visual brake and suspension inspection',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-white text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Additional Tire Services
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Beyond new tire sales, Tire Geeks offers a full suite of tire services. <strong className="text-white">Flat repair and plug-patch service</strong> is available while you wait &mdash; no appointment needed. We also offer <strong className="text-white">nitrogen inflation</strong> for drivers who want more stable tire pressure across Sacramento&apos;s wide temperature swings. Seasonal tire changeovers are quick and affordable if you run a dedicated set of winter tires for Sierra trips.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Financing Available &mdash; No Credit Needed
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Do not let budget constraints keep you driving on unsafe tires. Tire Geeks partners with <Link href="/financing" className="text-[#D42B2B] hover:underline">Acima and other financing providers</Link> that offer lease-to-own options with no credit check required. Get approved for up to $5,000 in minutes, with no down payment and no interest for the first 100 days. Apply in-store or online.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Why Sacramento Drivers Choose Tire Geeks
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  With over 2 million residents in the greater Sacramento metropolitan area, there is no shortage of tire shops. What sets Tire Geeks apart is our combination of deep inventory, expert fitment knowledge, transparent pricing, and walk-in convenience. We do not push unnecessary services. We do not charge hidden shop fees. And we treat every vehicle &mdash; from a daily-driver Camry to a built-out Tacoma &mdash; with the same level of care. Our two Sacramento locations make it easy to find a shop near you, and our no-appointment-needed policy means you can get new tires on your schedule, not ours.
                </p>
              </div>

              {/* Right column: sidebar */}
              <div className="space-y-6">
                {/* Pricing card */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Tire Pricing</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Budget Tires', price: 'From $79/set of 4' },
                      { label: 'Mid-Range All-Season', price: '$400 – $600/set' },
                      { label: 'Premium / Performance', price: '$600 – $1,200+/set' },
                      { label: 'Mounting & Balancing', price: 'Included' },
                      { label: 'Flat Repair', price: 'From $20' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{row.label}</span>
                        <span className="font-heading text-white text-[14px]">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/financing"
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block w-full text-center"
                    style={{ textDecoration: 'none' }}
                  >
                    APPLY FOR FINANCING
                  </Link>
                </div>

                {/* Quick stats */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">By the Numbers</h3>
                  <div className="space-y-4">
                    {[
                      { stat: '100+', desc: 'Tire models in stock' },
                      { stat: '45 min', desc: 'Average install time' },
                      { stat: '2', desc: 'Sacramento locations' },
                      { stat: '$0', desc: 'Down payment with financing' },
                    ].map((item) => (
                      <div key={item.desc} className="flex items-center gap-4">
                        <span className="font-display text-[#D42B2B] text-2xl" style={{ minWidth: '70px' }}>{item.stat}</span>
                        <span className="font-body text-[#AAAAAA] text-[14px]">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Walk-in CTA */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 text-center">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-3">Walk-Ins Welcome</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] mb-6">
                    No appointment needed. Roll up and get new tires installed the same day.
                  </p>
                  <a
                    href={`tel:${BRAND.locations[0].phoneRaw}`}
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2 w-full"
                    style={{ textDecoration: 'none' }}
                  >
                    <Phone className="w-4 h-4" />
                    CALL NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FAQ SECTION ====== */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Common Questions
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-[900px]">
              {[
                {
                  q: 'How much do new tires cost in Sacramento?',
                  a: 'At Tire Geeks, tire prices start at $79 for a set of four budget-friendly options. Mid-range all-season tires typically run $400-$600 per set, and premium performance tires range from $600-$1,200+ per set. Every purchase includes professional mounting, computer spin-balancing, valve stems, and TPMS reset at no additional charge.',
                },
                {
                  q: 'What tire brands does Tire Geeks carry?',
                  a: 'We carry all major brands including Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, Kumho, Nexen, Ironman, Lexani, and many more. We stock all-season, all-terrain, mud-terrain, performance, and highway tires to fit cars, trucks, SUVs, and Jeeps.',
                },
                {
                  q: 'Does Tire Geeks offer tire financing with no credit check?',
                  a: 'Yes. We partner with Acima and other financing providers that offer lease-to-own options with no credit needed. Get approved for up to $5,000 in minutes with no down payment required and no interest for the first 100 days.',
                },
                {
                  q: 'How long does tire installation take?',
                  a: 'A standard four-tire installation takes approximately 45 minutes to 1 hour. This includes mounting, computer spin-balancing, valve stem replacement, and TPMS sensor reset. Walk-ins are welcome and same-day installation is available when your tires are in stock.',
                },
                {
                  q: "What's the best tire for Sacramento weather?",
                  a: "For most Sacramento drivers, a high-quality all-season tire is the best choice. Sacramento's hot summers require a compound that resists heat degradation, while mild, wet winters demand reliable traction on wet roads. If you frequently drive to the Sierra for snow sports, consider dedicated winter tires or all-weather tires with the three-peak mountain snowflake rating.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-[16px] uppercase tracking-wide mb-3">{faq.q}</h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== BOTH LOCATIONS ====== */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Visit Us
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
              Both Sacramento Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BRAND.locations.map((location) => (
                <div key={location.name} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Tire Geeks &mdash; {location.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-[#AAAAAA] text-[15px]">{location.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <a href={`tel:${location.phoneRaw}`} className="font-body text-white text-[15px] hover:text-[#D42B2B] transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-[#AAAAAA] text-[15px]">{location.hours}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${location.phoneRaw}`}
                      className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                      style={{ textDecoration: 'none' }}
                    >
                      <Phone className="w-4 h-4" />
                      CALL
                    </a>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                      style={{ textDecoration: 'none' }}
                    >
                      <MapPin className="w-4 h-4" />
                      DIRECTIONS
                    </a>
                  </div>
                </div>
              ))}
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
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Best Tires for Sacramento Weather', href: '/blog/best-tires-sacramento-weather' },
                { title: 'Sacramento Tire Buying Guide', href: '/blog/sacramento-tire-buying-guide' },
                { title: 'How to Read Tire Size', href: '/blog/how-to-read-tire-size' },
                { title: 'Tire Rotation Guide', href: '/blog/tire-rotation-guide' },
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
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="font-nav text-[13px] uppercase tracking-wider text-[#D42B2B] hover:underline">
                All Services &rarr;
              </Link>
              <Link href="/locations/florin-road" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">
                Florin Road Location &rarr;
              </Link>
              <Link href="/locations/arden-way" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">
                Arden Way Location &rarr;
              </Link>
              <Link href="/contact" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">
                Contact Us &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
