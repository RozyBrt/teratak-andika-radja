'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/data';

const NAV_LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/katalog', label: 'Katalog Sewa' },
  { href: '/galeri', label: 'Dokumentasi' },
  { href: '/kontak', label: 'Kontak & Lokasi' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 sm:w-11 h-10 sm:h-11 rounded-full overflow-hidden border border-zinc-200 shadow-2xs group-hover:scale-105 transition-transform bg-[#0a192f] shrink-0">
              <Image
                src="/logo.png"
                alt="Logo Teratak Andika Raja"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-zinc-900 group-hover:text-zinc-700 transition-colors">
                Teratak Andika Raja
              </span>
              <span className="block text-[10px] sm:text-[11px] font-semibold text-zinc-500 tracking-wider uppercase">
                Katalog Sewa Tenda & Pesta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg font-semibold text-sm text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Hubungi Pengelola</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 focus:outline-none transition-colors border border-zinc-200"
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold text-sm text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Tanya Sewa via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
