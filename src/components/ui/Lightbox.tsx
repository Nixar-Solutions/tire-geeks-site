'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFading, setIsFading] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Sync initialIndex when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const goTo = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= images.length || newIndex === currentIndex) return;
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsFading(false);
      }, 200);
    },
    [currentIndex, images.length]
  );

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) goTo(currentIndex + 1);
  }, [currentIndex, images.length, goTo]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goNext, goPrev]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (delta > 50) goPrev();
      if (delta < -50) goNext();
      touchStartX.current = null;
    },
    [goNext, goPrev]
  );

  // Click overlay to close
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <X size={28} />
      </button>

      {/* Left arrow */}
      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Right arrow */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={goNext}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1} of ${images.length}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          objectFit: 'contain',
          opacity: isFading ? 0 : 1,
          transition: 'opacity 0.2s ease',
          userSelect: 'none',
          pointerEvents: 'auto',
        }}
        draggable={false}
      />

      {/* Counter */}
      {images.length > 1 && (
        <span
          style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#9E9E9E',
            userSelect: 'none',
          }}
        >
          {currentIndex + 1} / {images.length}
        </span>
      )}
    </div>
  );
}
