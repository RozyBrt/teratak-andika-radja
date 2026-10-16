import type { Metadata } from 'next';
import Image from 'next/image';
import { Camera, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Galeri Dokumentasi Pemasangan Acara: Teratak Andika Raja',
  description: 'Lihat bukti nyata kerapian pemasangan tenda teratak, pentas panggung, dan dekorasi slayar di berbagai acara warga dan instansi.',
};

const GALLERY_ITEMS = [
  {
    title: 'Teratak Pernikahan Nuansa Putih Emas',
    category: 'Resepsi Pernikahan',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'Pemasangan 3 unit teratak 4x6 dengan full slayar plafon kombinasi broken white dan gold anggun.'
  },
  {
    title: 'Tenda Syukuran Khitanan Keluarga',
    category: 'Syukuran Keluarga',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    description: 'Teratak 4x5 semi dekorasi dengan lampu sorot penerangan lengkap untuk malam syukuran.'
  },
  {
    title: 'Pentas Panggung Upacara & Sambutan',
    category: 'Panggung Acara',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    description: 'Panggung modular 3x4 meter karpet merah kokoh dilengkapi tangga dan rumbai rapi.'
  },
  {
    title: 'Setup 200 Kursi Futura Cover Putih',
    category: 'Kursi & Meja Pesta',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    description: 'Penataan rapi kursi futura dengan cover stretch putih bersih dan pita dekorasi emas.'
  },
  {
    title: 'Acara Pengajian & Doa Bersama Warga',
    category: 'Kegiatan Warga',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    description: 'Tenda teratak kokoh di halaman perumahan untuk kenyamanan para tamu undangan.'
  },
  {
    title: 'Pentas Pelaminan Resepsi Adat',
    category: 'Pelaminan',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Panggung pelaminan dengan ketinggian ideal serta karpet tebal mewah berpagar rumbai.'
  }
];

export default function GalleryPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-4 border-b border-[#C29B38]/20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F4EFE6] text-[#9A7422] border border-[#C29B38]/30 text-xs font-semibold">
            <Camera className="w-4 h-4 text-[#064E3B]" />
            <span>Dokumentasi Nyata di Lapangan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#064E3B] tracking-tight">
            Galeri Dokumentasi Pemasangan
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Bukti nyata komitmen kami: tenda terpasang kencang dan kokoh, kain slayar disetrika rapi, dan panggung kokoh di berbagai hajatan warga.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-[#C29B38]/35 shadow-xs hover:border-[#C29B38] hover:shadow-md transition-all"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F4EFE6]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-semibold bg-[#022C22]/90 text-[#D4AF37] border border-[#C29B38]/40">
                  {item.category}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="text-base sm:text-lg font-heading font-bold text-[#064E3B] group-hover:text-[#9A7422] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#064E3B]">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                  <span>Selesai Terpasang Rapi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
