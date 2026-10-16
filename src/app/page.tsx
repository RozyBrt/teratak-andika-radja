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
  PhoneCall, 
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
    url: 'https://teratakandikaraja.com',
    telephone: '+6282284903333',
    priceRange: 'Rp 3.000 - Rp 1.650.000',
    areaServed: 'Indonesia',
    serviceType: 'Penyewaan Tenda dan Perlengkapan Pesta',
  };

  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-16 bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION - ROYAL MELAYU & WARM GOLD */}
      <section className="relative overflow-hidden emerald-gradient text-white pt-14 sm:pt-20 pb-20 sm:pb-28 border-b-2 border-[#C29B38]/50 shadow-md">
        
        {/* Subtle patterned backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
            alt="Pemasangan Tenda Resepsi Melayu"
            fill
            priority
            className="object-cover opacity-15 filter brightness-90 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-[#022C22]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            
            {/* Traditional Subtitle Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#022C22]/80 border border-[#C29B38]/60 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
              <span>Perlengkapan Acara & Hajatan Terpercaya</span>
            </div>

            {/* Main Headline (Editorial Serif Typography) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-stone-50 leading-tight">
              Memuliakan Tamu Hajatan dengan Tenda Rapi dan Kokoh
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal">
              Menyediakan sewa tenda teratak dengan kain slayar berkelas, pentas pelaminan, serta kursi pesta bersih untuk perhelatan pernikahan, khitanan, syukuran keluarga, dan acara formal.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-base text-stone-900 gold-gradient hover:brightness-105 border border-[#C29B38] shadow-md transition-all"
              >
                <span>Lihat Ukuran & Katalog Sewa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-base text-white bg-[#064E3B] hover:bg-[#022C22] border border-[#C29B38]/60 shadow-md transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>Konsultasi Ukuran via WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#C29B38]/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#022C22] border border-[#C29B38]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-300">Rangka & Terpal</p>
                  <p className="text-sm font-bold text-stone-100">Besi Pipa Kokoh & Rapi</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#022C22] border border-[#C29B38]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-300">Waktu Pemasangan</p>
                  <p className="text-sm font-bold text-stone-100">Tiba H-1 Sesuai Jadwal</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#022C22] border border-[#C29B38]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <BadgePercent className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-300">Harga Transparan</p>
                  <p className="text-sm font-bold text-stone-100">Jelas Per Unit/Hari</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. KATEGORI SEWA (Royal Frames) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-[#C29B38]/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7422]">
              Pilihan Perlengkapan
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#064E3B] tracking-tight">
              Koleksi Peralatan Acara
            </h2>
          </div>
          <Link
            href="/katalog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#064E3B] hover:text-[#9A7422] transition-colors"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/katalog?kategori=${cat.slug}`}
              className="p-5 bg-white rounded-xl border border-[#C29B38]/30 shadow-xs hover:border-[#C29B38] hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-3 group"
            >
              <div className="w-13 h-13 rounded-lg bg-[#FAF7F2] text-[#064E3B] group-hover:bg-[#064E3B] group-hover:text-[#D4AF37] border border-[#C29B38]/30 flex items-center justify-center transition-all">
                {cat.slug === 'teratak' && <Tent className="w-6 h-6 stroke-[1.8]" />}
                {cat.slug === 'pentas' && <Layers className="w-6 h-6 stroke-[1.8]" />}
                {cat.slug === 'kursi-meja' && <Armchair className="w-6 h-6 stroke-[1.8]" />}
                {cat.slug === 'dekorasi' && <Palette className="w-6 h-6 stroke-[1.8]" />}
                {cat.slug === 'paket-bundling' && <PackageCheck className="w-6 h-6 stroke-[1.8]" />}
              </div>
              <div>
                <h3 className="font-heading font-bold text-stone-900 text-sm sm:text-base group-hover:text-[#064E3B] transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Lihat varian sewa
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. PRODUK UNGGULAN & PAKET RESEPSI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-[#C29B38]/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7422]">
              Paling Sering Digunakan
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#064E3B] tracking-tight">
              Ukuran Tenda & Paket Hajatan Pilihan
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Pilihan tenda teratak dan set hajatan yang paling sering dipesan untuk pekarangan rumah warga dan jalan lingkungan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. PANDUAN UKURAN TENDA PEKARANGAN (Editorial Layout, No Slop) */}
      <section className="bg-[#F4EFE6] border-y border-[#C29B38]/30 py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7422]">
              Panduan Praktis Tuan Rumah
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#064E3B] tracking-tight mt-1">
              Panduan Menyesuaikan Ukuran Tenda dengan Halaman Rumah
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Kerapian acara berawal dari ukuran tenda yang tepat. Berikut panduan praktis untuk memperkirakan kebutuhan Anda sebelum memesan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-[#C29B38]/30 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#C29B38]/20 pb-2.5">
                <span className="text-base font-heading font-bold text-[#064E3B]">Ukuran 4 x 4 atau 4 x 5 M</span>
                <span className="text-[11px] bg-[#FAF7F2] text-[#9A7422] border border-[#C29B38]/40 px-2 py-0.5 rounded font-semibold">Halaman Rumah</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Cocok untuk pekarangan rumah standar atau area garasi. Mampu menampung sekitar 30 sampai 50 kursi tamu untuk acara arisan keluarga, syukuran aqiqah, atau takziah.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#C29B38]/30 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#C29B38]/20 pb-2.5">
                <span className="text-base font-heading font-bold text-[#064E3B]">Ukuran 4 x 6 M atau Gandeng</span>
                <span className="text-[11px] bg-[#FAF7F2] text-[#9A7422] border border-[#C29B38]/40 px-2 py-0.5 rounded font-semibold">Jalan / Halaman Luas</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Cocok dipasang di jalan lingkungan depan rumah atau halaman memanjang. Dapat digandeng 2 hingga 4 unit untuk acara resepsi dengan jalur prasmanan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#C29B38]/30 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#C29B38]/20 pb-2.5">
                <span className="text-base font-heading font-bold text-[#064E3B]">Pentas Panggung 3 x 4 M</span>
                <span className="text-[11px] bg-[#FAF7F2] text-[#9A7422] border border-[#C29B38]/40 px-2 py-0.5 rounded font-semibold">Pelaminan / Hiburan</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Panggung modular kokoh dengan lantai kayu multiplek 18 mm dan karpet jarum rapi. Ketinggian ideal 50 cm sampai 80 cm untuk pelaminan atau tempat pembawa acara.
              </p>
            </div>

          </div>

          <div className="mt-8 p-5 bg-white rounded-xl border border-[#C29B38]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <Truck className="w-5 h-5 text-[#064E3B] shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs sm:text-sm text-stone-700">
                <strong>Ingin memastikan ukuran langsung di lokasi?</strong> Kami siap membantu survei lokasi pekarangan Anda secara gratis sebelum memutuskan.
              </p>
            </div>
            <a
              href={getWhatsAppUrl({
                customMessage: 'Halo Teratak Andika Raja, saya ingin menanyakan rekomendasi ukuran tenda untuk lokasi rumah saya.'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#064E3B] hover:bg-[#022C22] text-[#D4AF37] font-bold text-xs sm:text-sm rounded-lg whitespace-nowrap text-center transition-colors border border-[#C29B38]/50 shadow-xs"
            >
              Konsultasi Ukuran via WA
            </a>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION - ROYAL INVITATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-2xl emerald-gradient text-white p-8 sm:p-12 lg:p-14 border-2 border-[#C29B38]/60 shadow-lg">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
              Layanan Sewa Berpengalaman
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-stone-50">
              Siapkan Acara Anda Bersama Teratak Andika Raja
            </h2>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Hubungi pengelola kami melalui WhatsApp untuk mengecek ketersediaan tanggal, memilih kombinasi warna kain slayar dekorasi, dan mendapatkan rincian harga sewa yang jelas.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-bold text-sm text-stone-900 gold-gradient hover:brightness-105 border border-[#C29B38] shadow-md transition-all"
              >
                <PhoneCall className="w-4 h-4 text-stone-900" />
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
