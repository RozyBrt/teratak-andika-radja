import Link from 'next/link';
import { Tent, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#022C22] text-stone-300 pt-16 pb-12 border-t-2 border-[#C29B38]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#C29B38]/20">
          
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg emerald-gradient flex items-center justify-center text-[#D4AF37] border border-[#C29B38]/40 shadow-xs">
                <Tent className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-xl font-heading font-bold text-[#D4AF37] tracking-wide">
                Teratak Andika Raja
              </span>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Jasa penyewaan tenda teratak pesta, pentas pelaminan, kursi, meja, dan perlengkapan hajatan terpercaya. Mengedepankan kerapian, kekokohan rangka, dan pelayanan tepat waktu.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Pemasangan Rapi & Kokoh Terstandar</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] font-heading font-bold text-base mb-4 tracking-wide">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-[#D4AF37] transition-colors">
                  Katalog Tenda Teratak
                </Link>
              </li>
              <li>
                <Link href="/katalog?kategori=pentas" className="hover:text-[#D4AF37] transition-colors">
                  Pentas & Panggung Acara
                </Link>
              </li>
              <li>
                <Link href="/katalog?kategori=kursi-meja" className="hover:text-[#D4AF37] transition-colors">
                  Sewa Kursi & Meja Pesta
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-[#D4AF37] transition-colors">
                  Dokumentasi Terpasang
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#D4AF37] transition-colors">
                  Peta Lokasi & Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan & Keunggulan */}
          <div>
            <h4 className="text-[#D4AF37] font-heading font-bold text-base mb-4 tracking-wide">
              Layanan Acara Warga
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>• Resepsi Pernikahan & Akad</li>
              <li>• Syukuran Khitanan & Aqiqah</li>
              <li>• Doa Bersama & Pengajian</li>
              <li>• Acara Organisasi & Sekolah</li>
              <li>• Panggung Hiburan & Upacara</li>
            </ul>
          </div>

          {/* Kontak & Lokasi */}
          <div className="space-y-4">
            <h4 className="text-[#D4AF37] font-heading font-bold text-base mb-4 tracking-wide">
              Hubungi Pengelola
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  Jl. Teuku Umar, Penanggalan, Kec. Penanggalan, Kota Subulussalam, Aceh 24782.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-stone-300">
                  Layanan Konsultasi: 07.00 - 22.00 WIB
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp: +62 822-8490-3333
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            © {new Date().getFullYear()} Teratak Andika Raja. Hak Cipta Dilindungi.
          </p>
          <p className="text-[#D4AF37]">
            Usaha Persewaan Perlengkapan Pesta & Resepsi
          </p>
        </div>
      </div>
    </footer>
  );
}
