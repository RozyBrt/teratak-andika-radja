import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Product, ProductVariant, formatRupiah, getWhatsAppUrl } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = product.variants && product.variants.length > 0
    ? Math.min(...product.variants.map((v: ProductVariant) => v.base_price))
    : null;

  const lowestVariant = product.variants && product.variants.length > 0
    ? product.variants.reduce((prev: ProductVariant, curr: ProductVariant) => prev.base_price < curr.base_price ? prev : curr)
    : null;

  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 shadow-2xs hover:shadow-xs transition-all duration-200">
      
      {/* Image Thumbnail with Tag */}
      <Link href={`/katalog/${product.slug}`} className="relative h-56 sm:h-62 w-full overflow-hidden bg-zinc-100 block">
        <Image
          src={product.featured_image_url}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-103 transition-transform duration-300"
        />

        {/* Variant count indicator */}
        {product.variants && product.variants.length > 0 && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-900/85 backdrop-blur-xs text-white">
            {product.variants.length} Varian
          </div>
        )}
      </Link>

      {/* Content Details */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <Link href={`/katalog/${product.slug}`}>
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors line-clamp-1 mb-1.5 tracking-tight">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed mb-3">
            {product.description}
          </p>

          {/* Key Specs tags */}
          {product.variants && product.variants.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.variants.slice(0, 2).map((variant: ProductVariant) => (
                <span
                  key={variant.id}
                  className="inline-block text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200"
                >
                  {variant.dimension || variant.variant_name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Actions */}
        <div className="pt-3.5 border-t border-zinc-150 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Mulai</span>
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-lg font-bold text-zinc-950">
                {lowestPrice ? formatRupiah(lowestPrice) : 'Hubungi Kami'}
              </span>
              {lowestVariant?.price_unit && (
                <span className="text-[11px] text-zinc-500">/{lowestVariant.price_unit}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/katalog/${product.slug}`}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200 transition-colors"
              title="Lihat Detail Produk"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <a
              href={getWhatsAppUrl({
                productTitle: product.title,
                variantName: lowestVariant?.variant_name,
                dimension: lowestVariant?.dimension
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-2xs"
            >
              Sewa
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
