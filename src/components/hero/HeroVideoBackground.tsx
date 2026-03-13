'use client';

export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ zIndex: 2 }}
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Mobile poster */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: 'url(/images/hero-poster.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 5,
          pointerEvents: 'none',
          background: `
            linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.8) 100%),
            linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 60%)
          `,
        }}
      />
    </div>
  );
}
