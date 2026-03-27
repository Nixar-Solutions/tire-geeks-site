'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPosts } from '@/data/blogPosts';
import SectionHeading from '@/components/ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLAnchorElement[];

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <SectionHeading label="FROM THE BLOG" title="LEARN FROM THE GEEKS" />
        <p className="font-body text-[15px] md:text-[18px] text-[#9E9E9E] mt-4 mb-8 md:mb-12">
          Expert guides, tips, and Sacramento-specific advice for every driver.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="bg-[#141414] rounded-xl overflow-hidden border border-white/5 group block"
            >
              {/* Image */}
              <div className="overflow-hidden h-40 md:h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="p-5">
                <span className="inline-block bg-[#D42B2B]/10 text-[#D42B2B] text-xs font-nav px-3 py-1 rounded-full uppercase mb-3">
                  {post.category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-white group-hover:text-[#D42B2B] transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-[#9E9E9E] mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex justify-between font-body text-xs text-[#6B7280]">
                  <span>{post.author}</span>
                  <span>
                    {post.date} &middot; {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="btn-ghost font-nav inline-block"
          >
            VIEW ALL POSTS &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
