import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-14 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-zinc-850">
          
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-700 shadow-2xs bg-[#0a192f] shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo Teratak Andika Raja"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Teratak Andika Raja
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Penyedia sewa tenda teratak pesta, pentas pelaminan, kursi pesta, dan perlengkapan acara berstandar rapi, konstruksi kokoh, dan tarif transparan.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pemasangan Rapi & Tepat Waktu</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3.5 tracking-tight">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Katalog Sewa Tenda
                </Link>
              </li>
              <li>
                <Link href="/katalog?kategori=pentas" className="hover:text-white transition-colors">
                  Pentas & Panggung Acara
                </Link>
              </li>
              <li>
                <Link href="/katalog?kategori=kursi-meja" className="hover:text-white transition-colors">
                  Sewa Kursi & Meja Pesta
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-white transition-colors">
                  Dokumentasi Terpasang
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Peta Lokasi & Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan & Keunggulan */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3.5 tracking-tight">
              Layanan Acara
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>• Resepsi Pernikahan & Akad</li>
              <li>• Syukuran Khitanan & Aqiqah</li>
              <li>• Doa Bersama & Pengajian</li>
              <li>• Acara Organisasi & Sekolah</li>
              <li>• Panggung Hiburan & Upacara</li>
            </ul>
          </div>

          {/* Kontak & Lokasi */}
          <div className="space-y-3.5">
            <h3 className="text-white font-semibold text-sm mb-3.5 tracking-tight">
              Pangkalan & Kontak
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  Jl. Teuku Umar, Penanggalan, Kec. Penanggalan, Kota Subulussalam, Aceh 24782.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-zinc-300">
                  Konsultasi: 07.00 - 22.00 WIB
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: +62 822-8490-3333
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <p>
            © {new Date().getFullYear()} Teratak Andika Raja. Hak Cipta Dilindungi.
          </p>
          <p className="text-zinc-400">
            Katalog Sewa Tenda & Perlengkapan Acara Subulussalam
          </p>
        </div>
      </div>
    </footer>
  );
}
