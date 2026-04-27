import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Leveling Kit Installation Sacramento | Trucks & SUVs | Tire Geeks',
  description:
    'Professional leveling kit installation in Sacramento. Level your truck or SUV for bigger tires and a better stance. Walk in today — no appointment needed. Financing available.',
  alternates: { canonical: 'https://tiregeeks.com/services/leveling-kits-sacramento' },
  openGraph: {
    title: 'Leveling Kit Installation Sacramento | Trucks & SUVs | Tire Geeks',
    description: 'Professional leveling kit installation in Sacramento. Level your truck or SUV for bigger tires and a better stance.',
    url: 'https://tiregeeks.com/services/leveling-kits-sacramento',
    siteName: 'Tire Geeks',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tiregeeks.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Leveling Kits Sacramento', item: 'https://tiregeeks.com/services/leveling-kits-sacramento' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Leveling Kit Installation Sacramento',
  description: 'Professional leveling kit installation for trucks and SUVs in Sacramento, CA. Strut spacers, coil spring spacers, and torsion bar key adjustments with post-level alignment included.',
  provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
  areaServed: { '@type': 'City', name: 'Sacramento, CA' },
  serviceType: 'Leveling Kit Installation',
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '199', description: 'Leveling kit installation from $199' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a leveling kit cost in Sacramento?',
      acceptedAnswer: { '@type': 'Answer', text: 'At Tire Geeks, leveling kit installation starts at $199 including parts and labor. A leveling kit with a post-level alignment is available from $278. Pricing varies depending on your vehicle and the type of kit (strut spacer, coil spacer, or torsion bar key). Walk in for a free quote.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a leveling kit and a lift kit?',
      acceptedAnswer: { '@type': 'Answer', text: 'A leveling kit raises only the front of your truck 1.5 to 2.5 inches to match the factory rear height, eliminating the front-to-rear rake. A lift kit raises the entire vehicle 3 to 6+ inches and typically involves more extensive suspension modifications. Leveling kits are simpler, more affordable, and maintain closer to factory ride quality.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need an alignment after installing a leveling kit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Raising the front of your truck changes the suspension geometry, which affects camber and toe angles. Driving without a post-level alignment will cause rapid and uneven tire wear. At Tire Geeks, we offer a discounted alignment when bundled with a leveling kit installation.' },
    },
    {
      '@type': 'Question',
      name: 'What size tires can I fit after leveling my truck?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 2-inch leveling kit typically allows you to fit 33-inch tires on most full-size trucks (F-150, Silverado, Sierra, RAM 1500) without rubbing. A 2.5-inch level may accommodate 33s or even 34s depending on wheel offset and fender clearance. Our team will verify the exact fitment for your specific vehicle.' },
    },
    {
      '@type': 'Question',
      name: 'Does Tire Geeks offer financing for leveling kits?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tire Geeks partners with Acima to offer lease-to-own financing with no credit check required. Get approved for up to $5,000 in minutes with no down payment and no interest for the first 100 days. Finance your leveling kit, wheels, and tires all together.' },
    },
    {
      '@type': 'Question',
      name: 'How long does leveling kit installation take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most leveling kit installations take 1.5 to 2.5 hours depending on the vehicle and kit type. Strut spacer kits are the quickest. If you add a post-level alignment, expect an additional 30 to 45 minutes. Walk-ins are welcome for same-day installation.' },
    },
    {
      '@type': 'Question',
      name: 'Which trucks and SUVs can get a leveling kit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Leveling kits are available for most popular trucks and SUVs including the Ford F-150, Chevrolet Silverado, GMC Sierra, RAM 1500, Toyota Tacoma, Toyota Tundra, Ford Ranger, Jeep Wrangler, Jeep Gladiator, Chevrolet Colorado, GMC Canyon, and many more. Our team can source the right kit for your specific year, make, and model.' },
    },
  ],
};

export default function LevelingKitsSacramentoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main>
        {/* BREADCRUMB */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-wider">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/services" className="text-[#6B7280] hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">Leveling Kits Sacramento</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="relative flex items-center justify-center text-center" style={{ height: '340px', background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111' }}>
          <div className="px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#1E88C7' }}>Leveling Kits</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
            </div>
            <h1 className="font-display uppercase text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}>
              Leveling Kit Installation in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto">
              Level your truck or SUV for bigger tires and a better stance. Professional installation at two Sacramento locations &mdash; walk in today.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="w-12 h-[3px] mb-3" style={{ background: '#1E88C7' }} />
                <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
                  Sacramento&apos;s Leveling Kit Experts
                </h2>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Looking for professional leveling kit installation in Sacramento? Tire Geeks is the go-to shop for truck and SUV owners who want to eliminate that factory front-to-rear rake, fit larger tires, and get a more aggressive stance &mdash; all without the cost and complexity of a full lift kit. Walk in today for same-day installation at either of our two Sacramento locations.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  What Is a Leveling Kit?
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Most trucks and SUVs come from the factory with the front end sitting 1.5 to 2.5 inches lower than the rear. This &ldquo;rake&rdquo; is designed to compensate for heavy loads in the bed, but it gives the truck a nose-down look that many owners dislike. A leveling kit raises the front to match the rear, creating a level stance from front to back. Unlike a <Link href="/services/lift-kits-sacramento" className="text-[#D42B2B] hover:underline">lift kit</Link>, which raises the entire vehicle 3 to 6+ inches with extensive suspension modifications, a leveling kit is a simpler and more affordable upgrade that maintains near-factory ride quality.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Leveling Kit Options
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks installs several types of leveling kits depending on your vehicle&apos;s suspension design:
                </p>
                <ul className="space-y-3">
                  {[
                    'Strut spacers — aluminum or polyurethane spacers that sit on top of the front strut assembly. The most common and affordable option for trucks like the F-150, Silverado, and RAM 1500.',
                    'Coil spring spacers — placed on top of the front coil springs for vehicles with coil-spring front suspensions. Common on Jeep Wrangler, Toyota Tacoma, and Toyota 4Runner.',
                    'Torsion bar keys — adjustable keys that replace the factory torsion bar keys to raise the front end. Used on older GM trucks (Silverado, Sierra) and some RAM models with torsion bar front suspension.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1E88C7' }} />
                      <span className="font-body text-white text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Benefits of Leveling Your Truck
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  A leveling kit delivers significant visual and functional improvements. First, it eliminates the factory rake for a more aggressive, level stance. Second, it creates clearance to fit larger tires &mdash; most 2-inch leveling kits allow 33-inch tires on full-size trucks without rubbing. Third, it improves headlight aim by correcting the downward angle caused by the factory rake. And fourth, it provides additional ground clearance for light off-road use, making your truck more capable on Sacramento&apos;s foothill trails and dirt roads.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Brands We Install
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks installs leveling kits from <strong className="text-white">ReadyLIFT, Rough Country, BDS Suspension, Bilstein, Superlift, Zone Off-Road, Supreme Suspensions</strong>, and more. We select the right kit for your vehicle and driving needs, whether you want a basic 2-inch level for aesthetics or a performance-oriented kit that maintains optimal suspension travel.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Alignment After Leveling
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  A <Link href="/services/alignment-sacramento" className="text-[#D42B2B] hover:underline">post-level alignment</Link> is not optional &mdash; it is mandatory. Raising the front of your truck changes the suspension geometry, altering camber and toe angles. Driving without a realignment after a leveling kit will cause rapid, uneven tire wear and can affect steering response. At Tire Geeks, we offer a discounted alignment when bundled with a leveling kit installation, and we use state-of-the-art 4-wheel alignment equipment to dial in your angles precisely.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Financing Available &mdash; No Credit Needed
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Want to level your truck and add new wheels and tires at the same time? Tire Geeks partners with <Link href="/financing" className="text-[#D42B2B] hover:underline">Acima and other financing providers</Link> to offer lease-to-own options with no credit check required. Get approved for up to $5,000 in minutes with no down payment and no interest for the first 100 days. Finance your entire leveling, wheel, and tire package together.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Serving All Sacramento Neighborhoods
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks serves truck and SUV owners across the entire Sacramento metro area. Our Florin Road location is convenient for residents of Pocket, Land Park, Meadowview, South Sacramento, and Elk Grove. Our Arden Way shop is ideal for drivers in Arden-Arcade, Carmichael, Citrus Heights, Fair Oaks, and Rancho Cordova. We also serve customers from Roseville, North Highlands, Natomas, Midtown, and East Sacramento. No matter where you are in Sacramento, there is a Tire Geeks near you.
                </p>
              </div>

              {/* SIDEBAR */}
              <div className="space-y-6">
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Leveling Kit Pricing</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Leveling Kit + Install', price: 'From $199' },
                      { label: 'Level + Alignment', price: 'From $278' },
                      { label: 'Level + Wheels & Tires', price: 'Custom Quote' },
                      { label: 'Post-Level Alignment', price: 'From $79' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{row.label}</span>
                        <span className="font-heading text-white text-[14px]">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/financing" className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block w-full text-center" style={{ textDecoration: 'none' }}>
                    APPLY FOR FINANCING
                  </Link>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">By the Numbers</h3>
                  <div className="space-y-4">
                    {[
                      { stat: '1.5–2.5"', desc: 'Front lift range' },
                      { stat: '1.5–2.5 hrs', desc: 'Average install time' },
                      { stat: '2', desc: 'Sacramento locations' },
                      { stat: '$0', desc: 'Down payment with financing' },
                    ].map((item) => (
                      <div key={item.desc} className="flex items-center gap-4">
                        <span className="font-display text-[#1E88C7] text-2xl" style={{ minWidth: '80px' }}>{item.stat}</span>
                        <span className="font-body text-[#AAAAAA] text-[14px]">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 text-center">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-3">Walk-Ins Welcome</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] mb-6">No appointment needed. Roll up and get your truck leveled the same day.</p>
                  <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2 w-full" style={{ textDecoration: 'none' }}>
                    <Phone className="w-4 h-4" /> CALL NOW
                  </a>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {[
                      { href: '/services/lift-kits-sacramento', label: 'Lift Kit Installation Sacramento' },
                      { href: '/services/alignment-sacramento', label: 'Wheel Alignment Sacramento' },
                      { href: '/services/tires-sacramento', label: 'Tires in Sacramento' },
                      { href: '/services/tires-and-wheels-sacramento', label: 'Tire & Wheel Packages' },
                    ].map((link) => (
                      <Link key={link.href} href={link.href} className="block font-body text-[#AAAAAA] text-[14px] hover:text-[#D42B2B] transition-colors">
                        {link.label} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#1E88C7' }}>Common Questions</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-[900px]">
              {[
                { q: 'How much does a leveling kit cost in Sacramento?', a: 'At Tire Geeks, leveling kit installation starts at $199 including parts and labor. A leveling kit with a post-level alignment is available from $278. Pricing varies by vehicle and kit type. Walk in for a free quote.' },
                { q: 'What is the difference between a leveling kit and a lift kit?', a: 'A leveling kit raises only the front 1.5 to 2.5 inches to match the rear. A lift kit raises the entire vehicle 3 to 6+ inches with more extensive suspension modifications. Leveling kits are simpler, more affordable, and maintain closer to factory ride quality.' },
                { q: 'Do I need an alignment after installing a leveling kit?', a: 'Yes. Raising the front changes suspension geometry, affecting camber and toe angles. Driving without a post-level alignment causes rapid tire wear. We offer a discounted alignment when bundled with a leveling kit installation.' },
                { q: 'What size tires can I fit after leveling my truck?', a: 'A 2-inch level typically fits 33-inch tires on full-size trucks (F-150, Silverado, Sierra, RAM 1500) without rubbing. A 2.5-inch level may fit 33s or 34s depending on wheel offset and fender clearance.' },
                { q: 'Does Tire Geeks offer financing for leveling kits?', a: 'Yes. We partner with Acima for lease-to-own financing with no credit check. Get approved for up to $5,000 in minutes with no down payment and no interest for 100 days.' },
                { q: 'How long does leveling kit installation take?', a: 'Most installations take 1.5 to 2.5 hours. Strut spacer kits are fastest. Add 30 to 45 minutes for a post-level alignment. Walk-ins welcome for same-day service.' },
                { q: 'Which trucks and SUVs can get a leveling kit?', a: 'Most popular trucks and SUVs including Ford F-150, Chevrolet Silverado, GMC Sierra, RAM 1500, Toyota Tacoma, Toyota Tundra, Ford Ranger, Jeep Wrangler, Jeep Gladiator, Chevrolet Colorado, GMC Canyon, and many more.' },
              ].map((faq) => (
                <div key={faq.q} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-[16px] uppercase tracking-wide mb-3">{faq.q}</h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#1E88C7' }}>Visit Us</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Both Sacramento Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BRAND.locations.map((location) => (
                <div key={location.name} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">Tire Geeks &mdash; {location.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1E88C7' }} /><span className="font-body text-[#AAAAAA] text-[15px]">{location.address}</span></div>
                    <div className="flex items-start gap-3"><Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1E88C7' }} /><a href={`tel:${location.phoneRaw}`} className="font-body text-white text-[15px] hover:text-[#1E88C7] transition-colors">{location.phone}</a></div>
                    <div className="flex items-start gap-3"><Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1E88C7' }} /><span className="font-body text-[#AAAAAA] text-[15px]">{location.hours}</span></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${location.phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}><Phone className="w-4 h-4" />CALL</a>
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}><MapPin className="w-4 h-4" />DIRECTIONS</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#1E88C7' }}>Explore More</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#1E88C7' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Related Services &amp; Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Lift Kit Installation Sacramento', href: '/services/lift-kits-sacramento' },
                { title: 'Wheel Alignment Sacramento', href: '/services/alignment-sacramento' },
                { title: 'Tires in Sacramento', href: '/services/tires-sacramento' },
                { title: 'Lift Kit Installation Guide', href: '/blog/lift-kit-installation-sacramento' },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="block p-5 rounded-xl transition-all hover:border-[#1E88C7]/50 group" style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="font-heading text-[16px] font-semibold text-[#F2F2F2] group-hover:text-[#1E88C7] transition-colors leading-snug block mb-2">{article.title}</span>
                  <span className="font-nav text-[12px] uppercase tracking-wider text-[#1E88C7]">Learn More &rarr;</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="font-nav text-[13px] uppercase tracking-wider text-[#D42B2B] hover:underline">All Services &rarr;</Link>
              <Link href="/locations/florin-road" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Florin Road Location &rarr;</Link>
              <Link href="/locations/arden-way" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Arden Way Location &rarr;</Link>
              <Link href="/contact" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Contact Us &rarr;</Link>
              <Link href="/financing" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Financing &rarr;</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
