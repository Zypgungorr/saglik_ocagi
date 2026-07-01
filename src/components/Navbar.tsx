"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '@/lib/nav-config';

const OPEN_DELAY = 200;
const CLOSE_DELAY = 150;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    openTimerRef.current = null;
    closeTimerRef.current = null;
  };

  const closeDropdown = () => {
    clearTimers();
    setOpenDropdown(null);
  };

  const handleMouseEnter = (name: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    openTimerRef.current = setTimeout(() => setOpenDropdown(name), OPEN_DELAY);
  };

  const handleMouseLeave = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), CLOSE_DELAY);
  };

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const toggleMobileSection = (name: string) => {
    setOpenMobileSection(openMobileSection === name ? null : name);
  };

  return (
    <div key={pathname} className="bg-white border-b border-lacivert/10 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`md:hidden px-4 flex justify-between items-center min-h-[52px] border-b transition-colors ${
            isOpen ? 'bg-lacivert border-lacivert' : 'bg-white border-lacivert/10'
          }`}
        >
          <span className={`font-semibold text-sm tracking-wide ${isOpen ? 'text-white' : 'text-lacivert'}`}>
            Menü
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm transition-colors ${
              isOpen ? 'text-white hover:bg-white/10' : 'text-lacivert hover:bg-lacivert/5'
            }`}
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex flex-wrap">
          {navItems.map((item, index) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`
                    py-4 px-6 text-lacivert-light hover:text-bordo hover:bg-bordo-light/40 transition-colors text-sm font-medium flex items-center gap-1
                    ${index !== navItems.length - 1 ? 'border-r border-gray-100' : ''}
                    ${openDropdown === item.name ? 'text-bordo bg-bordo-light/40' : ''}
                  `}
                >
                  {item.name} »
                </button>
                <div
                  className={`
                    absolute left-0 top-full min-w-[260px] bg-white border border-gray-200 shadow-lg
                    transition-all duration-500 ease-out
                    ${openDropdown === item.name
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
                  `}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      target={child.external ? '_blank' : undefined}
                      rel={child.external ? 'noopener noreferrer' : undefined}
                      onClick={closeDropdown}
                      className="block px-4 py-3 text-sm text-lacivert-light hover:bg-bordo-light/40 hover:text-bordo border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href!}
                className={`
                  py-4 px-6 text-lacivert-light hover:text-bordo hover:bg-bordo-light/40 transition-colors text-sm font-medium
                  ${index !== navItems.length - 1 ? 'border-r border-gray-100' : ''}
                `}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {isOpen && (
          <div
            className="md:hidden fixed inset-0 bg-lacivert/50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />
        )}

        <div
          className={`
            md:hidden relative z-50 flex flex-col bg-white
            transition-all duration-300 ease-in-out overflow-hidden shadow-lg
            ${isOpen ? 'max-h-[calc(100dvh-140px)] opacity-100 overflow-y-auto overscroll-contain' : 'max-h-0 opacity-0'}
          `}
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="border-b border-lacivert/10">
                <button
                  type="button"
                  onClick={() => toggleMobileSection(item.name)}
                  className={`w-full py-4 px-5 text-sm font-medium flex justify-between items-center min-h-[48px] transition-colors ${
                    openMobileSection === item.name
                      ? 'text-bordo bg-lacivert/[0.04]'
                      : 'text-lacivert hover:bg-lacivert/[0.03]'
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-lacivert-light transition-transform duration-200 ${
                      openMobileSection === item.name ? 'rotate-180 text-bordo' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openMobileSection === item.name ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="bg-lacivert/[0.03] border-t border-lacivert/10 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        target={child.external ? '_blank' : undefined}
                        rel={child.external ? 'noopener noreferrer' : undefined}
                        className="py-3 pl-8 pr-5 text-sm text-lacivert-light hover:text-bordo active:bg-lacivert/5 min-h-[44px] flex items-center border-l-2 border-transparent hover:border-bordo/40"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenMobileSection(null);
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href!}
                className="py-4 px-5 text-lacivert hover:text-bordo hover:bg-lacivert/[0.03] border-b border-lacivert/10 text-sm font-medium min-h-[48px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
