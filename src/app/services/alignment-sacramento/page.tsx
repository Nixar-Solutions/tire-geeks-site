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
  title: 'Wheel Alignment Sacramento | $79 4-Wheel Alignment | Tire Geeks',
  description:
    '4-wheel alignment in Sacramento starting at $79. State-of-the-art equipment, before & after printout included. Essential after new tires, lift kits, or lowering. Two locations, no appointment needed.',
  alternates: {
    canonical: 'https://tiregeeks.com/services/alignment-sacramento',
  },
  openGraph: {
    title: 'Wheel Alignment Sacramento | $79 4-Wheel Alignment | Tire Geeks',
    description:
      '4-wheel alignment in Sacramento starting at $79. State-of-the-art equipment, before & after printout included. Essential after new tires, lift kits, or lowering. Two locations, no appointment needed.',
    url: 'https://tiregeeks.com/services/alignment-sacramento',
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
    { '@type': 'ListItem', position: 3, name: 'Wheel Alignment Sacramento', item: 'https://tiregeeks.com/services/alignment-sacramento' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wheel Alignment Sacramento',
  description:
    'Full 4-wheel alignment with camber, caster, and toe adjustment. Before and after printout included. Suspension geometry inspection. Starting at $79.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Tire Geeks',
    url: 'https://tiregeeks.com',
  },
  areaServed: { '@type': 'City', name: 'Sacramento' },
  serviceType: '4-Wheel Alignment',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '79',
    description: '4-Wheel Alignment from $79',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a wheel alignment cost in Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average wheel alignment in Sacramento costs between $89 and $129 at most shops. Tire Geeks offers 4-wheel alignments starting at just $79, which includes a full suspension inspection, camber, caster, and toe adjustment, steering wheel centering, and a before-and-after printout of all angles. Lifted or lowered vehicles with aftermarket suspension components may cost more depending on the complexity of adjustment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I get an alignment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most vehicle manufacturers recommend a wheel alignment check every 6,000 to 12,000 miles, or at least once per year. However, Sacramento road conditions — including potholes, railroad crossings, and uneven pavement on older city streets — can knock your alignment out of spec sooner. You should also get an alignment any time you install new tires, hit a major pothole, or have suspension work performed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an alignment after new tires?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, getting a wheel alignment after installing new tires is strongly recommended. Misaligned wheels cause uneven tread wear that can reduce tire life by 25% or more, effectively wasting your investment. At Tire Geeks, we offer discounted alignment pricing when bundled with a new tire purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are signs my car needs an alignment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common signs your vehicle needs a wheel alignment include: the vehicle pulling to one side on a straight, flat road; uneven or rapid tire wear on one side of the tread; a steering wheel that is off-center when driving straight; vibration or shaking in the steering wheel; and squealing tires during turns. Sacramento\'s flat, grid-style streets make steering pull particularly noticeable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tire Geeks do alignments on lifted trucks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tire Geeks specializes in alignments on lifted and lowered vehicles. Whether you have a 2-inch leveling kit or a 6-inch suspension lift, our alignment equipment and techs handle modified suspension geometry, aftermarket control arms, adjustable track bars, and custom ride-height setups. A post-lift alignment is mandatory to prevent premature tire wear and unsafe handling.',
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function AlignmentSacramentoPage() {
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
              <span className="text-[#D42B2B]">Wheel Alignment Sacramento</span>
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
                Alignment Services
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Wheel Alignment in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto">
              4-wheel alignment starting at $79. Before &amp; after printout included. No appointment needed.
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
                  Your Complete Guide to Wheel Alignment in Sacramento
                </h2>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  A wheel alignment is one of the most critical &mdash; and most overlooked &mdash; maintenance services for any vehicle. When your wheels are out of alignment, the consequences compound quickly: uneven tire wear, steering pull, vibration, reduced fuel economy, and compromised handling. The Tire Industry Association estimates that misaligned wheels can reduce tire life by up to 25%, meaning a set of tires that should last 50,000 miles may wear out before 38,000. At Tire Geeks, we use state-of-the-art 4-wheel alignment equipment to measure and adjust your camber, caster, and toe angles to manufacturer specifications &mdash; or to your custom preference for modified vehicles.
                </p>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  While the average wheel alignment in Sacramento costs between $89 and $129, Tire Geeks starts at just <strong className="text-white">$79 for a full 4-wheel alignment</strong>. Every alignment includes a complete suspension inspection, precise angle adjustments, steering wheel centering, and a printed before-and-after report so you can see exactly what was corrected. No hidden fees, no upsells.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  What Is a Wheel Alignment?
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  A wheel alignment adjusts the angles of your wheels relative to each other and to the vehicle body. There are three primary angles that alignment technicians measure and correct:
                </p>
                <ul className="space-y-3">
                  {[
                    { term: 'Camber', desc: 'The inward or outward tilt of the tire when viewed from the front. Negative camber (top of tire tilting inward) is common on performance setups, while excessive positive or negative camber on a daily driver causes rapid inner or outer edge wear.' },
                    { term: 'Caster', desc: 'The angle of the steering pivot when viewed from the side. Proper caster ensures straight-line stability and steering wheel return-to-center. Incorrect caster causes pulling and wandering at highway speeds.' },
                    { term: 'Toe', desc: 'Whether the front of the tires point inward (toe-in) or outward (toe-out) when viewed from above. Toe is the most common alignment adjustment and has the biggest impact on tire wear. Even a fraction of a degree off can cause significant feathering wear across the tread.' },
                  ].map((item) => (
                    <li key={item.term} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-[#AAAAAA] text-[15px]">
                        <strong className="text-white">{item.term}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Signs You Need a Wheel Alignment
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Sacramento&apos;s flat, grid-style street layout makes alignment problems especially noticeable. On a straight, level road like a stretch of Florin Road or Arden Way, any steering pull becomes immediately obvious. Here are the most common signs your vehicle needs an alignment:
                </p>
                <ul className="space-y-3">
                  {[
                    'Vehicle pulls to the left or right on a straight road',
                    'Steering wheel is off-center when driving straight',
                    'Uneven tire wear — one side of the tread wearing faster',
                    'Steering feels loose, vague, or wanders',
                    'Vibration or shaking in the steering wheel',
                    'Squealing tires when turning at low speeds',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-white text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Sacramento Road Conditions &amp; Your Alignment
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Sacramento&apos;s roads are hard on alignment. The city&apos;s infrastructure includes dozens of railroad crossings that create jarring impacts, aging streets in neighborhoods like Oak Park and South Sacramento with potholes and uneven pavement, and freeway on-ramps with sharp transitions. The Sacramento Transportation Department processes thousands of pothole repair requests annually, but the reality is that hitting even one significant pothole can knock your alignment out of spec.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The flat, grid-style layout of Sacramento&apos;s streets is actually an advantage when it comes to detecting alignment issues. Unlike hilly cities where road crown and slopes mask steering pull, Sacramento&apos;s level roads make it immediately apparent when your vehicle is not tracking straight. If you notice your car drifting on J Street, Stockton Boulevard, or any of Sacramento&apos;s major corridors, do not ignore it &mdash; bring it in for an alignment check.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  When You Must Get an Alignment
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Certain events make a wheel alignment mandatory, not optional. Skipping an alignment in these situations will cause rapid tire wear and potentially unsafe handling:
                </p>
                <ul className="space-y-3">
                  {[
                    'After installing new tires — protect your investment from day one',
                    'After a lift kit or leveling kit installation — changed geometry requires recalibration',
                    'After lowering springs or coilovers — new ride height changes all angles',
                    'After replacing suspension components (control arms, tie rods, ball joints)',
                    'After hitting a major pothole or curb impact',
                    'Every 6,000 miles as preventive maintenance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-white text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Alignments for Lifted &amp; Lowered Vehicles
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Sacramento&apos;s truck and car modification scene is one of the most active in Northern California, and Tire Geeks is built to serve it. Whether you have just installed a <Link href="/blog/lift-kit-installation-sacramento" className="text-[#D42B2B] hover:underline">2-inch leveling kit</Link> on your Tacoma or a full 6-inch suspension lift on your F-250, a post-modification alignment is not optional. Changing your vehicle&apos;s ride height alters every suspension angle, and driving without an alignment after a lift or lower will chew through new tires in weeks.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Our alignment techs are experienced with aftermarket control arms, adjustable track bars, adjustable tie rod ends, cam bolts, and <Link href="/blog/lowering-your-car-guide" className="text-[#D42B2B] hover:underline">custom ride-height setups</Link>. We handle everything from bone-stock daily drivers to heavily modified show trucks and slammed builds. If your setup requires alignment specs outside of factory range, we work with you to dial in the angles that deliver the best tire wear and handling for your specific build.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  What&apos;s Included in Every Alignment at Tire Geeks
                </h3>
                <ul className="space-y-3">
                  {[
                    'Full 4-wheel alignment (camber, caster, and toe on all four corners)',
                    'Steering wheel centering',
                    'Suspension geometry inspection',
                    'Tire wear pattern analysis',
                    'Before-and-after printout of all alignment angles',
                    'Road test to verify straight tracking',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-white text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Financing &amp; Bundled Services
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Need new tires and an alignment? Tire Geeks offers <Link href="/financing" className="text-[#D42B2B] hover:underline">financing with no credit check</Link> through Acima and other providers. Bundle your tires, wheels, alignment, and suspension work into a single financed package with no down payment and no interest for the first 100 days. Get everything your vehicle needs today and pay over time.
                </p>
              </div>

              {/* Right column: sidebar */}
              <div className="space-y-6">
                {/* Pricing card */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Alignment Pricing</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: '4-Wheel Alignment', price: 'From $79' },
                      { label: 'Post-Lift Alignment', price: 'From $99' },
                      { label: 'Post-Lower Alignment', price: 'From $99' },
                      { label: 'Alignment Check', price: 'Free w/ service' },
                      { label: 'Before & After Printout', price: 'Included' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{row.label}</span>
                        <span className="font-heading text-white text-[14px]">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mb-6 inline-block px-5 py-3 rounded w-full text-center"
                    style={{
                      background: 'rgba(227,24,55,0.1)',
                      border: '1px solid rgba(227,24,55,0.25)',
                    }}
                  >
                    <span className="font-heading text-lg tracking-wide uppercase" style={{ color: '#D42B2B' }}>
                      Sacramento Avg: $89&ndash;$129
                    </span>
                    <br />
                    <span className="font-body text-[#AAAAAA] text-[13px]">Tire Geeks starts at $79</span>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block w-full text-center"
                    style={{ textDecoration: 'none' }}
                  >
                    GET A QUOTE
                  </Link>
                </div>

                {/* Quick stats */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">By the Numbers</h3>
                  <div className="space-y-4">
                    {[
                      { stat: '$79', desc: 'Starting alignment price' },
                      { stat: '25%', desc: 'Tire life lost from misalignment' },
                      { stat: '6K mi', desc: 'Recommended recheck interval' },
                      { stat: '2', desc: 'Sacramento locations' },
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
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-3">No Appointment Needed</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] mb-6">
                    Walk in for a 4-wheel alignment at either Sacramento location. Most alignments take under an hour.
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
                  q: 'How much does a wheel alignment cost in Sacramento?',
                  a: 'The average wheel alignment in Sacramento costs between $89 and $129. Tire Geeks offers 4-wheel alignments starting at just $79, which includes a full suspension inspection, camber, caster, and toe adjustment, steering wheel centering, and a before-and-after printout.',
                },
                {
                  q: 'How often should I get an alignment?',
                  a: 'Most manufacturers recommend an alignment check every 6,000 to 12,000 miles, or at least once per year. Sacramento road conditions — including potholes and railroad crossings — can knock your alignment out of spec sooner. Get one any time you install new tires or have suspension work done.',
                },
                {
                  q: 'Do I need an alignment after new tires?',
                  a: 'Yes. Misaligned wheels cause uneven tread wear that can reduce tire life by 25% or more. Getting an alignment with new tires protects your investment from day one. Tire Geeks offers discounted alignment pricing when bundled with a tire purchase.',
                },
                {
                  q: 'What are signs my car needs an alignment?',
                  a: "Common signs include the vehicle pulling to one side, uneven tire wear, an off-center steering wheel, loose or vague steering feel, and squealing tires during turns. Sacramento's flat, grid-style streets make steering pull particularly easy to notice.",
                },
                {
                  q: 'Does Tire Geeks do alignments on lifted trucks?',
                  a: 'Yes. We specialize in alignments on lifted and lowered vehicles. Whether you have a 2-inch leveling kit or a 6-inch suspension lift, our equipment and techs handle modified suspension geometry, aftermarket control arms, and custom ride-height setups.',
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
                { title: 'Wheel Alignment: Signs You Need One', href: '/blog/wheel-alignment-sacramento' },
                { title: 'Tire Rotation Guide', href: '/blog/tire-rotation-guide' },
                { title: 'Lift Kit Installation Guide', href: '/blog/lift-kit-installation-sacramento' },
                { title: 'Lowering Your Car: Complete Guide', href: '/blog/lowering-your-car-guide' },
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
