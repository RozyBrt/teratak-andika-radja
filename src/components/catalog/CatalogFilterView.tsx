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
    <div className="space-y-6">
      
      {/* Category Filter Pills / Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => handleSelectCategory('semua')}
          className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 border ${
            activeCategorySlug === 'semua'
              ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xs'
              : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950'
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          <span>Semua ({initialProducts.length})</span>
        </button>

        {categories.map((cat) => {
          const isActive = activeCategorySlug === cat.slug;
          const count = initialProducts.filter((p) => p.category_id === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.slug)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 border ${
                isActive
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xs'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950'
              }`}
            >
              {cat.slug === 'teratak' && <Tent className="w-3.5 h-3.5" />}
              {cat.slug === 'pentas' && <Layers className="w-3.5 h-3.5" />}
              {cat.slug === 'kursi-meja' && <Armchair className="w-3.5 h-3.5" />}
              {cat.slug === 'dekorasi' && <Palette className="w-3.5 h-3.5" />}
              {cat.slug === 'paket-bundling' && <PackageCheck className="w-3.5 h-3.5" />}
              <span>{cat.name} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Product List Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-zinc-200 p-8 shadow-2xs">
          <p className="text-zinc-600 text-sm font-medium">Belum ada item untuk kategori ini.</p>
          <button
            type="button"
            onClick={() => handleSelectCategory('semua')}
            className="mt-4 px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Kembali ke Semua Produk
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}
