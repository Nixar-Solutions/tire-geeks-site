'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Phone, MapPin, DollarSign, Menu, Grid3X3 } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import MobileMenu from './MobileMenu';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);
  const line3 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        gsap.to(line1.current, { rotate: 45, y: 8, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(line2.current, { opacity: 0, duration: 0.2 });
        gsap.to(line3.current, { rotate: -45, y: -8, duration: 0.3, ease: 'power2.inOut' });
      } else {
        gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(line2.current, { opacity: 1, duration: 0.2, delay: 0.1 });
        gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      return next;
    });
  }, []);

  return (
    <>
      {/* Red accent line at the very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[101]" style={{ background: 'var(--red)' }} />

      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-[2px] left-0 right-0 z-[100] transition-all duration-300"
        style={{
          height: scrolled ? 64 : 80,
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {!logoError ? (
              <Image
                src="/images/tg-icon.png"
                alt="Tire Geeks"
                width={40}
                height={40}
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-display text-[28px]" style={{ color: 'var(--red)' }}>
                TG
              </span>
            )}
            <span className="hidden lg:inline font-nav text-[18px] font-bold tracking-[0.05em]">
              <span style={{ color: 'var(--red)' }}>TIRE</span>{' '}
              <span style={{ color: 'var(--blue)' }}>GEEKS</span>
            </span>
          </Link>

          {/* Center: Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-nav text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative group transition-colors"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'var(--red)' }}
                />
              </Link>
            ))}
          </div>

          {/* Right: Desktop actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND.locations[0].phoneRaw}`}
              className="flex items-center gap-2 font-nav text-[14px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Phone size={16} style={{ color: 'var(--red)' }} />
              {BRAND.locations[0].phone}
            </a>
            <Button href={BRAND.locations[0].mapUrl} external variant="ghost" size="sm">
              GET DIRECTIONS
            </Button>
            <Button href={BRAND.acima.applyUrl} external variant="cta" size="sm">
              APPLY FOR FINANCING
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span ref={line1} className="block w-6 h-[2px] bg-white origin-center" />
            <span ref={line2} className="block w-6 h-[2px] bg-white origin-center" />
            <span ref={line3} className="block w-6 h-[2px] bg-white origin-center" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={menuOpen} onClose={() => {
        setMenuOpen(false);
        gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(line2.current, { opacity: 1, duration: 0.2, delay: 0.1 });
        gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
      }} />

      {/* Mobile bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[99] lg:hidden flex items-center justify-around"
        style={{
          height: 60,
          background: 'var(--bg-secondary)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <a
          href={`tel:${BRAND.locations[0].phoneRaw}`}
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
        >
          <Phone size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-wider">Call</span>
        </a>
        <a
          href={BRAND.locations[0].mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
        >
          <MapPin size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-wider">Directions</span>
        </a>
        <a
          href={BRAND.acima.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[var(--blue)]"
        >
          <DollarSign size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-wider">Financing</span>
        </a>
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
        >
          <Grid3X3 size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-wider">Menu</span>
        </button>
      </div>
    </>
  );
}
