import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { authors } from '@/data/authors';

export const metadata: Metadata = {
  title: 'Meet the Tire Geeks Team | Sacramento Tire & Wheel Shop',
  description:
    'Meet the team behind Tire Geeks. Moni Tariq, owner with 20 years of lift, lowering, and alignment experience. Erika, tire and wheel specialist with 10 years walking Sacramento drivers through fitment and Acima financing.',
  alternates: { canonical: 'https://tiregeeks.com/team' },
};

// Headshot files are not yet uploaded. Once /public/images/team/<slug>.jpg
// exists for an author, set hasHeadshot[slug] = true to render the photo
// instead of the initials placeholder.
const hasHeadshot: Record<string, boolean> = {
  'moni-tariq': false,
  erika: false,
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Team', item: 'https://tiregeeks.com/team' },
    ],
  };

  const personGraph = {
    '@context': 'https://schema.org',
    '@graph': authors.map((a) => ({
      '@type': 'Person',
      '@id': `https://tiregeeks.com/team#${a.slug}`,
      name: a.fullName,
      jobTitle: a.title,
      description: a.shortBio,
      worksFor: {
        '@type': 'Organization',
        name: 'Tire Geeks',
        url: 'https://tiregeeks.com',
      },
      knowsAbout: a.expertise,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personGraph) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative flex items-center justify-center"
          style={{
            minHeight: 350,
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'url(/noise.png)', backgroundRepeat: 'repeat' }}
          />
          <div className="relative z-10 text-center px-6 pt-28 pb-16 max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
              <span className="font-nav text-[13px] tracking-[0.2em] text-[#D42B2B] uppercase">
                Our Team
              </span>
              <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
            </div>
            <h1 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.1] text-white uppercase">
              Meet the People Behind Tire Geeks
            </h1>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-[#9E9E9E] mt-6">
              Two real people, two Sacramento shops, thirty combined years in the trade.
              Moni runs the wrenches across Florin Road and Arden Way. Erika runs the counter
              and walks customers through tire selection, fitment math, and Acima financing.
              No call centers, no scripts, no database lookups.
            </p>
          </div>
        </section>

        {/* Author sections */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-20">
            {authors.map((author, idx) => {
              const hasImage = hasHeadshot[author.slug] === true;
              const isReversed = idx % 2 === 1;
              return (
                <article
                  key={author.slug}
                  id={author.slug}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start scroll-mt-28"
                >
                  {/* Image / fallback */}
                  <div className={`lg:col-span-2 ${isReversed ? 'lg:order-last' : ''}`}>
                    {hasImage ? (
                      <img
                        src={author.imagePath}
                        alt={`${author.fullName}, ${author.title}`}
                        className="w-full aspect-[4/5] rounded-2xl object-cover"
                        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full aspect-[4/5] rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        aria-label={`${author.fullName} photo placeholder`}
                      >
                        <span
                          className="font-display uppercase"
                          style={{
                            fontSize: 'clamp(64px, 10vw, 120px)',
                            color: '#D42B2B',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {getInitials(author.name)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bio block */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="block w-10 h-[3px] rounded-full bg-[#D42B2B]" />
                      <span className="font-nav text-[12px] tracking-[0.2em] text-[#D42B2B] uppercase">
                        {author.title}
                      </span>
                    </div>
                    <h2 className="font-display text-[clamp(32px,4.5vw,48px)] leading-[1.1] text-white uppercase mb-3">
                      {author.name}
                    </h2>
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full"
                      style={{ background: 'rgba(30,136,199,0.1)', border: '1px solid rgba(30,136,199,0.3)' }}
                    >
                      <span className="font-nav text-[12px] tracking-[0.12em] text-[#1E88C7] uppercase font-semibold">
                        {author.yearsInIndustry} Years in the Industry
                      </span>
                    </div>
                    <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-[#D4D4D4] mb-6">
                      {author.bio}
                    </p>
                    <div>
                      <p className="font-nav text-[12px] tracking-[0.2em] text-[#9E9E9E] uppercase mb-3">
                        Areas of Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {author.expertise.map((tag) => (
                          <span
                            key={tag}
                            className="font-nav text-[13px] px-3 py-1.5 rounded-full"
                            style={{
                              background: '#1A1A1A',
                              border: '1px solid rgba(212,43,43,0.25)',
                              color: '#F2F2F2',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="flex flex-col items-center text-center py-20 px-6"
          style={{ background: '#111111' }}
        >
          <div className="mx-auto mb-6" style={{ width: 48, height: 3, background: '#D42B2B' }} />
          <h2
            className="font-display uppercase text-white mb-4"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}
          >
            Walk In, Meet the Team
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-[#9E9E9E] max-w-2xl mb-8">
            Two Sacramento locations, Mon–Sat 9AM–7PM. No appointment needed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/locations"
              className="px-8 py-3 rounded-full bg-[#D42B2B] text-white font-nav text-sm font-semibold tracking-widest uppercase hover:bg-[#B52525] transition-colors"
            >
              Find a Location
            </a>
            <a
              href="tel:+19168008786"
              className="px-8 py-3 rounded-full border border-[#D42B2B] text-[#D42B2B] font-nav text-sm font-semibold tracking-widest uppercase hover:bg-[#D42B2B]/10 transition-colors"
            >
              Call (916) 800-8786
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
