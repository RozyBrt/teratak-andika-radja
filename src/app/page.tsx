import Link from 'next/link';
import Image from 'next/image';
import { 
  Tent, 
  Layers, 
  Armchair, 
  PackageCheck, 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  MessageSquare, 
  ArrowRight, 
  Palette,
  Truck,
  Check
} from 'lucide-react';
import { getCategories, getProducts, getWhatsAppUrl } from '@/lib/data';
import ProductCard from '@/components/catalog/ProductCard';

export const revalidate = 60; // ISR 1 minute

export default async function HomePage() {
  const [categories, featuredProducts] = await Promise.all([
    getCategories(),
    getProducts({ featuredOnly: true })
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Teratak Andika Raja',
    description: 'Jasa penyewaan perlengkapan acara: teratak, tenda dekorasi slayar, pentas panggung, kursi, dan meja pesta.',
    url: 'https://teratak-andika-radja.vercel.app',
    telephone: '+6282284903333',
    priceRange: 'Hubungi Pengelola',
    areaServed: 'Kota Subulussalam, Aceh',
    serviceType: 'Penyewaan Tenda dan Perlengkapan Pesta',
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-18 pb-16 bg-[#FBFBFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION : CLEAN MODERN ARCHITECTURAL CATALOG */}
      <section className="relative overflow-hidden bg-white border-b border-zinc-200 pt-10 sm:pt-16 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Katalog Sewa Tenda & Perlengkapan Acara</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
                Sewa Tenda Teratak Rapi, Kokoh, dan Berstandar Pesta
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-normal">
                Penyedia sewa tenda teratak dengan rangka pipa kokoh, pilihan kain slayar dekorasi rapi, pentas pelaminan, dan kursi pesta untuk hajatan warga, pernikahan, serta acara formal di Subulussalam.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/katalog"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-2xs"
                >
                  <span>Jelajahi Katalog Sewa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <a
                  href={getWhatsAppUrl({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-semibold text-sm text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Konsultasi Ukuran via WhatsApp</span>
                </a>
              </div>

              {/* Mini trust checklist */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Pemasangan Tiba H-1
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Rangka Pipa Galvanis Kokoh
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Tarif Transparan Tanpa Biaya Tersembunyi
                </span>
              </div>

            </div>

            {/* Right Column: Featured Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xs bg-zinc-100 aspect-4/3 sm:aspect-16/11">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                  alt="Tenda Teratak Pesta Bersih dan Rapi"
                  fill
                  priority
                  className="object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">Pangkalan</span>
                    <span className="text-xs font-bold text-zinc-900">Penanggalan, Kota Subulussalam</span>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Siap Survei Lokasi
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6 sm:-mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-5 sm:p-6 rounded-xl border border-zinc-200 shadow-2xs">
          
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-medium">Konstruksi Teruji</p>
              <p className="text-sm font-bold text-zinc-900">Besi Pipa Kokoh & Anti-Bocor</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:border-l sm:border-zinc-200 sm:pl-6">
            <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0">
              <Clock className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-medium">Jadwal Tepat Waktu</p>
              <p className="text-sm font-bold text-zinc-900">Pemasangan H-1 Sesuai Janji</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:border-l sm:border-zinc-200 sm:pl-6">
            <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0">
              <BadgePercent className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-medium">Harga Pasti</p>
              <p className="text-sm font-bold text-zinc-900">Tarif Transparan Per Unit/Hari</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. KATEGORI SEWA (Clean Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-zinc-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Koleksi Peralatan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              Pilihan Kategori Sewa
            </h2>
          </div>
          <Link
            href="/katalog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <span>Semua Katalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/katalog?kategori=${cat.slug}`}
              className="p-4 sm:p-5 bg-white rounded-xl border border-zinc-200 hover:border-zinc-400 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center justify-center text-center gap-2.5 group"
            >
              <div className="w-11 h-11 rounded-lg bg-zinc-100 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white border border-zinc-200 flex items-center justify-center transition-colors">
                {cat.slug === 'teratak' && <Tent className="w-5 h-5 stroke-[2]" />}
                {cat.slug === 'pentas' && <Layers className="w-5 h-5 stroke-[2]" />}
                {cat.slug === 'kursi-meja' && <Armchair className="w-5 h-5 stroke-[2]" />}
                {cat.slug === 'dekorasi' && <Palette className="w-5 h-5 stroke-[2]" />}
                {cat.slug === 'paket-bundling' && <PackageCheck className="w-5 h-5 stroke-[2]" />}
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-xs sm:text-sm group-hover:text-zinc-700 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-zinc-500 block mt-0.5">
                  Lihat varian
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. PRODUK UNGGULAN & PAKET RESEPSI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-zinc-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Paling Sering Digunakan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              Ukuran Tenda & Paket Hajatan Pilihan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
            Pilihan tenda teratak dan set hajatan yang paling sering disewa untuk pekarangan rumah warga dan jalan lingkungan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. PANDUAN UKURAN TENDA PEKARANGAN (Clean Schematic Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 shadow-2xs">
          
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Panduan Praktis Tuan Rumah
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mt-1">
              Panduan Menyesuaikan Ukuran Tenda dengan Luas Halaman
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              Kerapian acara berawal dari ukuran tenda yang tepat. Berikut panduan praktis untuk memperkirakan kebutuhan Anda sebelum memesan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2.5">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span className="text-sm font-bold text-zinc-950">Ukuran 4 x 4 atau 4 x 5 M</span>
                <span className="text-[10px] bg-white text-zinc-700 border border-zinc-200 px-2 py-0.5 rounded font-semibold">Halaman Rumah</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Cocok untuk pekarangan rumah standar atau area garasi. Mampu menampung sekitar 30 sampai 50 kursi tamu untuk acara arisan keluarga, syukuran aqiqah, atau takziah.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2.5">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span className="text-sm font-bold text-zinc-950">Ukuran 4 x 6 M atau Gandeng</span>
                <span className="text-[10px] bg-white text-zinc-700 border border-zinc-200 px-2 py-0.5 rounded font-semibold">Jalan / Halaman Luas</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Cocok dipasang di jalan lingkungan depan rumah atau halaman memanjang. Dapat digandeng 2 hingga 4 unit untuk acara resepsi dengan jalur prasmanan.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2.5">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span className="text-sm font-bold text-zinc-950">Pentas Panggung 3 x 4 M</span>
                <span className="text-[10px] bg-white text-zinc-700 border border-zinc-200 px-2 py-0.5 rounded font-semibold">Pelaminan / Hiburan</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Panggung modular kokoh dengan lantai kayu multiplek 18 mm dan karpet jarum rapi. Ketinggian ideal 50 cm sampai 80 cm untuk pelaminan atau tempat pembawa acara.
              </p>
            </div>

          </div>

          <div className="mt-6 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <Truck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs sm:text-sm text-zinc-700">
                <strong>Ragu dengan ukuran halaman Anda?</strong> Tim kami siap survei lokasi langsung ke pekarangan Anda di Subulussalam sebelum memutuskan sewa.
              </p>
            </div>
            <a
              href={getWhatsAppUrl({
                customMessage: 'Halo Teratak Andika Raja, saya ingin menanyakan rekomendasi ukuran tenda untuk lokasi rumah saya.'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4.5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm rounded-lg whitespace-nowrap text-center transition-colors shadow-2xs"
            >
              Konsultasi Ukuran via WA
            </a>
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION : CLEAN STUDIO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="rounded-2xl bg-zinc-950 text-white p-8 sm:p-12 border border-zinc-850 shadow-md">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Layanan Sewa Terpercaya Subulussalam
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Siapkan Kebutuhan Acara Anda Sekarang
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Konsultasikan jadwal acara, ukuran pekarangan, serta kombinasi kain slayar tenda langsung bersama pengelola melalui WhatsApp untuk mendapatkan estimasi harga transparan.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-zinc-950 bg-white hover:bg-zinc-100 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Hubungi Pengelola via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
