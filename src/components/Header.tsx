import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-white via-white to-bordo-light/50 py-5 sm:py-6 border-b border-lacivert/10">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left group">
          <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 drop-shadow-sm">
            <img
              src="/logo.png"
              alt="Sağlık Bakanlığı logosu"
              width={72}
              height={72}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col border-l-0 sm:border-l-4 border-bordo sm:pl-5 py-0.5">
            <h1 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-lacivert leading-tight tracking-tight">
              Çekmeköy{' '}
              <span className="text-bordo">Efsun</span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-lacivert-light mt-1 leading-snug">
              Aile Sağlığı Merkezi
            </h2>
            <span className="block sm:hidden w-14 h-0.5 bg-bordo mt-2 mx-auto rounded-full" />
            <span className="hidden sm:block w-12 h-0.5 bg-bordo mt-2 rounded-full group-hover:w-16 transition-all duration-300" />
          </div>
        </Link>

        <div className="flex gap-2 sm:gap-3">
          {/* <a href="#" aria-label="Facebook" className="bg-lacivert-light text-white p-2.5 rounded-full hover:bg-bordo transition-colors shadow-sm">
            <Facebook size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="bg-lacivert-light text-white p-2.5 rounded-full hover:bg-bordo transition-colors shadow-sm">
            <Twitter size={18} className="sm:w-5 sm:h-5" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
