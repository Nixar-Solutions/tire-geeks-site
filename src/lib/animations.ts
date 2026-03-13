import { gsap } from 'gsap';

export const EASE = {
  outExpo: 'expo.out',
  outQuart: 'power3.out',
  inOutQuart: 'power2.inOut',
} as const;

export const fadeInUp = (
  target: gsap.TweenTarget,
  vars?: gsap.TweenVars
): gsap.TweenVars => ({
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: EASE.outQuart,
  ...vars,
});

export const fadeInLeft = (
  target: gsap.TweenTarget,
  vars?: gsap.TweenVars
): gsap.TweenVars => ({
  x: -30,
  opacity: 0,
  duration: 0.8,
  ease: EASE.outQuart,
  ...vars,
});

export const fadeInRight = (
  target: gsap.TweenTarget,
  vars?: gsap.TweenVars
): gsap.TweenVars => ({
  x: 30,
  opacity: 0,
  duration: 0.8,
  ease: EASE.outQuart,
  ...vars,
});

export const staggerIn = (stagger = 0.1): gsap.TweenVars => ({
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: EASE.outQuart,
  stagger,
});

export const scaleIn = (vars?: gsap.TweenVars): gsap.TweenVars => ({
  scale: 0.9,
  opacity: 0,
  duration: 0.6,
  ease: EASE.outQuart,
  ...vars,
});

export const clipReveal = (
  direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom'
): gsap.TweenVars => {
  const clips: Record<string, string> = {
    left: 'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    top: 'inset(100% 0 0 0)',
    bottom: 'inset(0 0 100% 0)',
  };
  return {
    clipPath: clips[direction],
    duration: 0.8,
    ease: EASE.outQuart,
  };
};
