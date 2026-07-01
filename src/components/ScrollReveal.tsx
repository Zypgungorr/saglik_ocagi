"use client";

import React, { useEffect, useRef, useState } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${variant} ${visible ? 'scroll-reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
