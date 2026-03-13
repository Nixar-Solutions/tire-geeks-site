'use client';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4 mb-4">
        <span className="red-bar" />
        <span
          className="font-nav text-[13px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--red)' }}
        >
          {label}
        </span>
      </div>
      <h2 className="font-display section-headline uppercase text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-heading text-[22px] font-normal text-[var(--text-secondary)] mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
