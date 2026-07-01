import React from 'react';
import Link from 'next/link';
import { Baby } from 'lucide-react';

export default function PercentileCurve() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-6 sm:mb-8 md:mb-12 border-b border-lacivert/10 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-lacivert leading-snug">Persentil Eğrisi</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Link href="/saglik-hesaplamalari/kiz-cocuk-persentil" className="group">
          <div className="flex flex-col items-center">
            <h2 className="text-bordo text-xl font-medium mb-6 text-center group-hover:text-bordo-dark transition-colors">
              KIZ ÇOCUKLAR İÇİN PERSENTİL EĞRİSİ
            </h2>
            <div className="w-full aspect-[4/3] bg-bordo-light rounded-lg overflow-hidden flex items-center justify-center border-2 border-transparent group-hover:border-bordo/30 transition-all shadow-sm group-hover:shadow-md relative">
              <div className="absolute inset-0 bg-linear-to-br from-bordo-light to-white opacity-50"></div>
              <Baby size={80} className="text-bordo/40 relative z-10" />
              <span className="sr-only">Kız Çocuklar İçin Persentil Tablosu</span>
            </div>
          </div>
        </Link>

        <Link href="/saglik-hesaplamalari/erkek-cocuk-persentil" className="group">
          <div className="flex flex-col items-center">
            <h2 className="text-lacivert text-xl font-medium mb-6 text-center group-hover:text-lacivert-dark transition-colors">
              ERKEK ÇOCUKLAR İÇİN PERSENTİL EĞRİSİ
            </h2>
            <div className="w-full aspect-[4/3] bg-lacivert/5 rounded-lg overflow-hidden flex items-center justify-center border-2 border-transparent group-hover:border-lacivert/20 transition-all shadow-sm group-hover:shadow-md relative">
              <div className="absolute inset-0 bg-linear-to-br from-lacivert/10 to-white opacity-50"></div>
              <Baby size={80} className="text-lacivert/40 relative z-10" />
              <span className="sr-only">Erkek Çocuklar İçin Persentil Tablosu</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
