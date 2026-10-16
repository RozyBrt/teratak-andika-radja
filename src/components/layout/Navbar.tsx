'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, Tent } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/data';

const NAV_LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/katalog', label: 'Katalog Sewa' },
  { href: '/galeri', label: 'Galeri Terpasang' },
  { href: '/kontak', label: 'Kontak & Lokasi' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#C29B38]/30 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-lg emerald-gradient flex items-center justify-center text-[#D4AF37] border border-[#C29B38]/50 shadow-sm group-hover:scale-105 transition-transform">
              <Tent className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="block text-xl font-heading font-bold tracking-tight text-[#064E3B] group-hover:text-[#9A7422] transition-colors">
                Teratak Andika Raja
              </span>
              <span className="block text-[11px] font-semibold text-[#9A7422] tracking-wider uppercase">
                Perlengkapan Pesta & Resepsi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#064E3B] text-[#D4AF37] shadow-xs'
                      : 'text-stone-700 hover:text-[#064E3B] hover:bg-[#F4EFE6]'
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white bg-[#064E3B] hover:bg-[#022C22] border border-[#C29B38]/40 shadow-sm hover:shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Hubungi Pengelola</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-stone-800 hover:text-[#064E3B] hover:bg-[#F4EFE6] focus:outline-none transition-colors border border-transparent hover:border-[#C29B38]/30"
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#C29B38]/20 bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#064E3B] text-[#D4AF37]'
                    : 'text-stone-800 hover:bg-[#F4EFE6] hover:text-[#064E3B]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg font-bold text-sm text-white bg-[#064E3B] hover:bg-[#022C22] border border-[#C29B38]/50 shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Tanya Sewa via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
