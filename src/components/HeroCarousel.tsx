"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, heroImageVersion } from '@/data/hero-slides';

const INTERVAL_MS = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const goTo = useCallback((index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full bg-white">
      <div className="relative w-full overflow-hidden bg-lacivert-dark">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {heroSlides.map((item) => (
            <div key={item.id} className="relative w-full shrink-0">
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[440px]">
                {!imageErrors[item.id] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${item.image}?v=${heroImageVersion}`}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading={item.id === 1 ? 'eager' : 'lazy'}
                    onError={() => setImageErrors((prev) => ({ ...prev, [item.id]: true }))}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      item.id === 1
                        ? 'from-lacivert to-lacivert-dark'
                        : item.id === 2
                          ? 'from-bordo/80 to-lacivert'
                          : item.id === 3
                            ? 'from-lacivert-light to-lacivert'
                            : 'from-bordo-dark to-lacivert-dark'
                    }`}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-lacivert-dark/90 via-lacivert-dark/40 to-lacivert-dark/20 sm:bg-gradient-to-r sm:from-lacivert-dark/85 sm:via-lacivert-dark/50 sm:to-transparent" />

                <div className="absolute inset-0 flex items-end sm:items-center pb-3 sm:pb-0">
                  <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="max-w-xl md:max-w-2xl text-white pr-8 sm:pr-0">
                      <h2 className="text-base sm:text-2xl md:text-4xl font-light leading-snug mb-0.5 sm:mb-2">
                        {item.title}{' '}
                        <span className="font-bold text-bordo-light">{item.highlight}</span>
                      </h2>
                      <h3 className="text-sm sm:text-xl md:text-2xl font-light leading-snug mb-1 sm:mb-4 text-white/90 line-clamp-2 sm:line-clamp-none">
                        {item.subtitle}
                      </h3>
                      {item.note && (
                        <p className="hidden sm:block text-sm md:text-base text-bordo-light font-medium">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Önceki görsel"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/25 hover:bg-black/40 text-white backdrop-blur-sm transition-colors flex items-center justify-center"
        >
          <ChevronLeft size={18} className="sm:w-[22px] sm:h-[22px]" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Sonraki görsel"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/25 hover:bg-black/40 text-white backdrop-blur-sm transition-colors flex items-center justify-center"
        >
          <ChevronRight size={18} className="sm:w-[22px] sm:h-[22px]" />
        </button>
      </div>

      <div className="flex flex-row justify-center items-center gap-2.5 py-2.5 bg-white border-b border-lacivert/10">
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`${index + 1}. görsele git`}
            aria-current={index === current ? 'true' : undefined}
            className={`shrink-0 p-0 border-0 min-h-0 min-w-0 rounded-full transition-colors duration-200 ${
              index === current
                ? 'w-[10px] h-[10px] bg-bordo'
                : 'w-[8px] h-[8px] bg-lacivert/25 hover:bg-lacivert/45'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
