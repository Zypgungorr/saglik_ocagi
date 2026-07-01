import React from 'react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-lacivert-dark text-white text-[11px] sm:text-xs py-2 px-4">
      <div className="container mx-auto flex justify-between items-center max-w-6xl gap-2">
        <Link href="/" className="hover:text-bordo-light transition-colors shrink-0">
          Ana Sayfa
        </Link>
        <span className="truncate text-right text-white/90">Çekmeköy Efsun ASM</span>
      </div>
    </div>
  );
}
