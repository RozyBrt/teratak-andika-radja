import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getCategories, getProducts } from '@/lib/data';
import CatalogFilterView from '@/components/catalog/CatalogFilterView';
import { Tent } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Katalog Sewa Teratak & Perlengkapan Acara: Teratak Andika Raja',
  description: 'Daftar lengkap tenda teratak berbagai ukuran, pentas panggung, kursi futura, meja prasmanan, dan paket bundling dengan spesifikasi transparan.',
};

export const revalidate = 60;

export default async function CatalogPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts()
  ]);

  return (
    <div className="py-10 sm:py-14 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="space-y-2 pb-4 border-b border-[#C29B38]/20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4EFE6] text-[#9A7422] border border-[#C29B38]/30 text-xs font-semibold">
            <Tent className="w-3.5 h-3.5" />
            <span>Katalog Lengkap & Tarif Transparan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#064E3B] tracking-tight">
            Katalog Sewa Perlengkapan Acara
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
            Pilih tenda teratak, panggung, atau kursi yang sesuai dengan kebutuhan dan luas lokasi perhelatan Anda. Hubungi kami langsung melalui WhatsApp untuk pemesanan cepat.
          </p>
        </div>

        {/* Filter & Grid with Suspense */}
        <Suspense fallback={<div className="p-8 text-center text-stone-500">Memuat katalog...</div>}>
          <CatalogFilterView categories={categories} initialProducts={products} />
        </Suspense>

      </div>
    </div>
  );
}
