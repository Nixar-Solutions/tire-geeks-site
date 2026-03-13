'use client';
import { useRef, useState, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  className = '',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  }, [updatePosition]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg select-none ${className}`}
      style={{ aspectRatio: '16/10' }}
    >
      {/* After image (full width behind) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span
        className="absolute top-4 left-4 font-nav text-[12px] font-semibold tracking-wider text-white bg-black/50 px-3 py-1 rounded"
      >
        {beforeLabel}
      </span>
      <span
        className="absolute top-4 right-4 font-nav text-[12px] font-semibold tracking-wider text-white bg-black/50 px-3 py-1 rounded"
      >
        {afterLabel}
      </span>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-[2px] h-full bg-[#D42B2B]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#D42B2B] flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8L1 5M4 8L1 11M4 8H1M12 8L15 5M12 8L15 11M12 8H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
