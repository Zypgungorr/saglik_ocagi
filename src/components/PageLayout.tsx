import React from 'react';
import Link from 'next/link';
import { NavChild } from '@/lib/nav-config';

type PageLayoutProps = {
  title: string;
  section?: string;
  sidebarLinks?: NavChild[];
  children: React.ReactNode;
};

export default function PageLayout({ title, section, sidebarLinks, children }: PageLayoutProps) {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 sm:py-10 md:py-12">
      {section && (
        <p className="text-xs sm:text-sm text-gray-400 mb-2 truncate">
          <Link href="/" className="hover:text-bordo transition-colors">Ana Sayfa</Link>
          {' » '}
          <span className="text-gray-500">{section}</span>
        </p>
      )}
      <div className="mb-6 sm:mb-8 border-b border-gray-200 pb-3 sm:pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">{title}</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {sidebarLinks && sidebarLinks.length > 0 && (
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <nav className="border border-gray-200 rounded-sm overflow-hidden">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block px-4 py-3 text-sm text-lacivert-light hover:bg-bordo-light/50 hover:text-bordo border-b border-lacivert/10 last:border-b-0 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        )}
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-sm shadow-sm prose prose-gray max-w-none prose-sm sm:prose-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
