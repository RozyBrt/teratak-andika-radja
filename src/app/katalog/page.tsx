import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getCategories, getProducts } from '@/lib/data';
import CatalogFilterView from '@/components/catalog/CatalogFilterView';
import { Tent } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Katalog Sewa Tenda & Perlengkapan Acara: Teratak Andika Raja',
  description: 'Daftar lengkap tenda teratak berbagai ukuran, pentas panggung, kursi futura, meja prasmanan, dan paket bundling dengan spesifikasi transparan.',
};

export const revalidate = 60;

export default async function CatalogPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts()
  ]);

  return (
    <div className="py-8 sm:py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header Title */}
        <div className="space-y-2 pb-5 border-b border-zinc-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-semibold">
            <Tent className="w-3.5 h-3.5 text-zinc-700" />
            <span>Katalog Sewa & Spesifikasi Lengkap</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Katalog Sewa Perlengkapan Acara
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl leading-relaxed">
            Pilih tenda teratak, panggung, atau kursi yang sesuai dengan kebutuhan dan luas lokasi perhelatan Anda. Hubungi kami langsung melalui WhatsApp untuk pemesanan cepat.
          </p>
        </div>

        {/* Filter & Grid with Suspense */}
        <Suspense fallback={<div className="p-8 text-center text-zinc-500 text-sm">Memuat katalog...</div>}>
          <CatalogFilterView categories={categories} initialProducts={products} />
        </Suspense>

      </div>
    </div>
  );
}
