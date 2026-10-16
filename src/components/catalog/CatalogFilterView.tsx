'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Category, Product } from '@/types/database';
import ProductCard from './ProductCard';
import { Tent, Layers, Armchair, Palette, PackageCheck, Filter } from 'lucide-react';

interface CatalogFilterViewProps {
  categories: Category[];
  initialProducts: Product[];
}

export default function CatalogFilterView({
  categories,
  initialProducts,
}: CatalogFilterViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategorySlug = searchParams.get('kategori') || 'semua';

  const handleSelectCategory = (slug: string) => {
    if (slug === 'semua') {
      router.push('/katalog');
    } else {
      router.push(`/katalog?kategori=${slug}`);
    }
  };

  const filteredProducts = activeCategorySlug === 'semua'
    ? initialProducts
    : initialProducts.filter((p) => {
        const cat = categories.find((c) => c.slug === activeCategorySlug);
        return cat ? p.category_id === cat.id : true;
      });

  return (
    <div className="space-y-8">
      
      {/* Category Filter Pills / Tabs */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => handleSelectCategory('semua')}
          className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
            activeCategorySlug === 'semua'
              ? 'bg-[#064E3B] text-[#D4AF37] border-[#C29B38]/60 shadow-xs'
              : 'bg-white text-stone-700 border-[#C29B38]/30 hover:border-[#C29B38] hover:text-[#064E3B]'
          }`}
        >
          <Filter className="w-4 h-4" />
          <span>Semua Kategori ({initialProducts.length})</span>
        </button>

        {categories.map((cat) => {
          const isActive = activeCategorySlug === cat.slug;
          const count = initialProducts.filter((p) => p.category_id === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.slug)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-[#064E3B] text-[#D4AF37] border-[#C29B38]/60 shadow-xs'
                  : 'bg-white text-stone-700 border-[#C29B38]/30 hover:border-[#C29B38] hover:text-[#064E3B]'
              }`}
            >
              {cat.slug === 'teratak' && <Tent className="w-4 h-4" />}
              {cat.slug === 'pentas' && <Layers className="w-4 h-4" />}
              {cat.slug === 'kursi-meja' && <Armchair className="w-4 h-4" />}
              {cat.slug === 'dekorasi' && <Palette className="w-4 h-4" />}
              {cat.slug === 'paket-bundling' && <PackageCheck className="w-4 h-4" />}
              <span>{cat.name} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Product List Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-[#C29B38]/30 p-8">
          <p className="text-stone-600 font-medium">Belum ada item untuk kategori ini.</p>
          <button
            type="button"
            onClick={() => handleSelectCategory('semua')}
            className="mt-4 px-5 py-2.5 bg-[#064E3B] text-[#D4AF37] text-sm font-semibold rounded-lg hover:bg-[#022C22] border border-[#C29B38]/50"
          >
            Kembali ke Semua Produk
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}
