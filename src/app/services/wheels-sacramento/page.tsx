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
  title: 'Custom Wheels Sacramento | Aftermarket Wheels | Tire Geeks',
  description:
    "Sacramento's largest selection of custom aftermarket wheels. Fuel, Moto Metal, XD Series, American Force & more. Expert fitment, wheel & tire packages. Two locations, walk-ins welcome.",
  alternates: {
    canonical: 'https://tiregeeks.com/services/wheels-sacramento',
  },
  openGraph: {
    title: 'Custom Wheels Sacramento | Aftermarket Wheels | Tire Geeks',
    description:
      "Sacramento's largest selection of custom aftermarket wheels. Fuel, Moto Metal, XD Series, American Force & more. Expert fitment, wheel & tire packages. Two locations, walk-ins welcome.",
    url: 'https://tiregeeks.com/services/wheels-sacramento',
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
    { '@type': 'ListItem', position: 3, name: 'Custom Wheels Sacramento', item: 'https://tiregeeks.com/services/wheels-sacramento' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Wheels Sales & Installation Sacramento',
  description:
    'Aftermarket wheel sales, expert fitment consultation, wheel and tire combo packages, hub-centric ring installation, and OEM wheel sourcing in Sacramento, CA.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Tire Geeks',
    url: 'https://tiregeeks.com',
  },
  areaServed: { '@type': 'City', name: 'Sacramento, CA' },
  serviceType: 'Custom Wheel Sales & Fitment',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do custom wheels cost in Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom aftermarket wheels at Tire Geeks start around $150 per wheel for entry-level styles and range up to $800+ per wheel for premium forged options like American Force. A complete set of four wheels typically costs between $600 and $3,200+ depending on the brand, size, and finish. Wheel and tire combo packages offer the best value with bundled pricing on mounting, balancing, and installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What wheel brands does Tire Geeks carry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tire Geeks carries an extensive selection of aftermarket wheel brands including Fuel Off-Road, Moto Metal, XD Series, Hostile, American Force, Vision, Mayhem, Dirty Life, KMC, Method Race Wheels, and many more. We stock wheels for trucks, Jeeps, SUVs, and cars in sizes from 17 inches to 26 inches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I finance custom wheels with no credit check?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tire Geeks partners with Acima and other financing providers that offer lease-to-own options with no credit needed. You can get approved for up to $5,000 in minutes with no down payment required and no interest for the first 100 days. This covers wheels, tires, and installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know what wheels fit my truck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proper fitment depends on four key specifications: bolt pattern (e.g., 6x135 or 5x114.3), wheel offset (how far the mounting surface sits from the centerline), hub bore (the center hole diameter), and wheel diameter/width. The Tire Geeks team verifies all of these measurements before installation to ensure zero vibration and proper brake caliper clearance. Walk in and we will measure your vehicle for free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tire Geeks install wheels I bought elsewhere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we install customer-supplied wheels. We will verify fitment, mount and balance your tires, install hub-centric rings if needed, and torque your lug nuts to spec. Please note that we cannot warranty fitment on wheels we did not sell, so we always recommend a pre-purchase consultation to avoid compatibility issues.',
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function WheelsSacramentoPage() {
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
              <span className="text-[#D42B2B]">Custom Wheels Sacramento</span>
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
                Wheel Services
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Custom Wheels in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto">
              Sacramento&apos;s largest selection of aftermarket wheels with expert fitment and wheel-tire combo packages.
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
                  Your Expert Guide to Custom Wheels in Sacramento
                </h2>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Nothing transforms a vehicle faster than a fresh set of wheels. In Sacramento&apos;s vibrant car and truck culture &mdash; from the lifted trucks cruising Arden Way to the slammed imports at local meets &mdash; custom wheels are the foundation of every standout build. At Tire Geeks, we stock hundreds of aftermarket wheel styles from the most in-demand brands in the industry and back every sale with expert fitment knowledge that ensures your new setup looks right and performs flawlessly.
                </p>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The aftermarket wheel industry generates over $7 billion annually in the United States, and Sacramento is one of the strongest markets in Northern California. With a car culture that spans lifted diesel trucks, Jeep builds, sport compact imports, classic muscle, and luxury SUVs, the demand for quality wheels and expert installation is constant. Tire Geeks meets that demand with an inventory and fitment process that rivals shops twice our size.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Brands We Carry
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">Fuel Off-Road</strong> &mdash; The number-one selling off-road wheel brand in America. Fuel wheels are known for aggressive designs, durable construction, and a wide range of finishes. Popular models like the Fuel Rebel, Blitz, and Maverick are consistently in stock at both Tire Geeks locations.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">Moto Metal &amp; XD Series</strong> &mdash; Two powerhouse brands from the same family, offering heavy-duty truck and SUV wheels. Moto Metal focuses on bold, chrome and black designs, while XD Series delivers rugged, trail-ready styles. Both brands are hugely popular with Sacramento&apos;s F-150, Silverado, and RAM community.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">Hostile Wheels</strong> &mdash; Premium forged and cast wheels built for trucks that demand attention. Hostile&apos;s multi-piece forged lineup offers unlimited custom finish options and is a favorite among Sacramento&apos;s show truck crowd.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">American Force</strong> &mdash; Fully forged, American-made wheels that represent the pinnacle of the truck wheel market. American Force wheels are CNC-machined from a single block of 6061 aluminum and are available in dozens of designs with custom finish and sizing options. These wheels start around $500 per wheel and are worth every penny.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  <strong className="text-white">Vision, Mayhem, Dirty Life, KMC, Method</strong> &mdash; We also carry a deep selection from these brands to cover every style and budget, from budget-friendly daily-driver upgrades to competition-grade off-road wheels.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Why Fitment Matters More Than Style
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Buying wheels online based on looks alone is one of the most common and costly mistakes we see. A wheel that does not match your vehicle&apos;s bolt pattern, offset, and hub bore will cause vibration, premature bearing wear, and in worst cases, wheel separation at highway speeds. According to NHTSA data, improper wheel installation is a contributing factor in thousands of vehicle incidents each year.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  At Tire Geeks, fitment is not a suggestion &mdash; it is a requirement. Before any wheel goes on a vehicle, our team verifies four critical specifications:
                </p>
                <ul className="space-y-3">
                  {[
                    'Bolt pattern (lug count and spacing, e.g., 6x135, 5x114.3)',
                    'Offset (how far the mounting surface is from wheel center)',
                    'Hub bore (center hole diameter for hub-centric fit)',
                    'Brake caliper clearance (ensuring no contact with spokes)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-white text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  We install hub-centric rings when the wheel&apos;s center bore does not exactly match your vehicle&apos;s hub. This eliminates vibration and ensures the weight of the vehicle is carried by the hub &mdash; not the lug studs. It is a small detail that makes a massive difference in ride quality.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Wheel &amp; Tire Combo Packages
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The best way to buy wheels is as part of a complete <Link href="/blog/new-wheels-and-tires-package-deals" className="text-[#D42B2B] hover:underline">wheel and tire combo package</Link>. At Tire Geeks, we build packages in-house &mdash; your tires are mounted and balanced on your new wheels, and the complete assemblies are ready to bolt directly onto your vehicle. This saves time, reduces the chance of installation errors, and often costs less than buying wheels and tires separately. Most wheel and tire packages include mounting, balancing, new lug nuts, center caps, and hub-centric rings where needed.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Sacramento&apos;s Car &amp; Truck Culture
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Sacramento has one of the most active automotive scenes in California. From the truck meets at Cal Expo to the car shows at Sleep Train Arena, there is always an event where builds are on display. Lifted Cummins trucks on 22x12 Fuels, Jeep Wranglers on 37s with Method beadlocks, slammed Accords on 18-inch Enkeis &mdash; Sacramento&apos;s diversity of builds is what makes this market so exciting to serve. Tire Geeks is proud to be a part of this community, and our team members are enthusiasts who build their own vehicles.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Financing Available &mdash; No Credit Needed
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Custom wheels are an investment, and Tire Geeks makes them accessible to every budget. We partner with <Link href="/financing" className="text-[#D42B2B] hover:underline">Acima and other financing providers</Link> that offer lease-to-own options with no credit check required. Get approved for up to $5,000 in minutes, with no down payment and no interest for the first 100 days. Finance your entire wheel and tire package and drive out the same day.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Why Choose Tire Geeks for Wheels
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Sacramento has no shortage of wheel shops, but Tire Geeks stands apart with the combination of massive inventory, rigorous fitment verification, competitive combo pricing, and a walk-in-friendly atmosphere. We do not pressure you into a sale. We educate you on what fits, what looks right, and what stays within your budget. Our two Sacramento locations are staffed by people who genuinely care about your build &mdash; because we build our own rides too.
                </p>
              </div>

              {/* Right column: sidebar */}
              <div className="space-y-6">
                {/* Pricing card */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Wheel Pricing</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Cast Wheels', price: 'From $150/wheel' },
                      { label: 'Flow-Forged Wheels', price: 'From $250/wheel' },
                      { label: 'Forged Wheels', price: 'From $500/wheel' },
                      { label: 'Wheel & Tire Packages', price: 'Custom Quote' },
                      { label: 'Installation', price: 'Included w/ purchase' },
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
                      { stat: '500+', desc: 'Wheel styles available' },
                      { stat: '17"–26"', desc: 'Size range in stock' },
                      { stat: '10+', desc: 'Premium brands carried' },
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
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-3">Walk-Ins Welcome</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] mb-6">
                    No appointment needed. Come see our wheel wall and get a free fitment consultation.
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
                  q: 'How much do custom wheels cost in Sacramento?',
                  a: 'Custom aftermarket wheels at Tire Geeks start around $150 per wheel for entry-level cast styles and range up to $800+ per wheel for premium forged options like American Force. A complete set of four wheels typically costs between $600 and $3,200+ depending on the brand, size, and finish. Wheel and tire combo packages offer the best value.',
                },
                {
                  q: 'What wheel brands does Tire Geeks carry?',
                  a: 'We carry Fuel Off-Road, Moto Metal, XD Series, Hostile, American Force, Vision, Mayhem, Dirty Life, KMC, Method Race Wheels, and many more. We stock wheels for trucks, Jeeps, SUVs, and cars in sizes from 17 inches to 26 inches.',
                },
                {
                  q: 'Can I finance custom wheels with no credit check?',
                  a: 'Yes. We partner with Acima and other financing providers that offer lease-to-own options with no credit needed. Get approved for up to $5,000 in minutes with no down payment and no interest for the first 100 days.',
                },
                {
                  q: 'How do I know what wheels fit my truck?',
                  a: 'Proper fitment depends on bolt pattern, offset, hub bore, and wheel diameter/width. Our team verifies all of these measurements before installation to ensure zero vibration and proper brake caliper clearance. Walk in and we will measure your vehicle for free.',
                },
                {
                  q: 'Does Tire Geeks install wheels I bought elsewhere?',
                  a: 'Yes, we install customer-supplied wheels. We verify fitment, mount and balance your tires, install hub-centric rings if needed, and torque lug nuts to spec. We recommend a pre-purchase consultation to avoid compatibility issues.',
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
                { title: 'Custom Wheels Sacramento Guide', href: '/blog/custom-wheels-sacramento' },
                { title: 'Wheel Offset Explained', href: '/blog/wheel-offset-explained' },
                { title: 'Wheels & Tires Package Deals', href: '/blog/new-wheels-and-tires-package-deals' },
                { title: 'Wheel Bolt Pattern Guide', href: '/blog/wheel-bolt-pattern-guide' },
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
