import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product, ProductVariant, formatRupiah, getWhatsAppUrl } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Hitung harga termurah dari varian
  const lowestPrice = product.variants && product.variants.length > 0
    ? Math.min(...product.variants.map((v: ProductVariant) => v.base_price))
    : null;

  const lowestVariant = product.variants && product.variants.length > 0
    ? product.variants.reduce((prev: ProductVariant, curr: ProductVariant) => prev.base_price < curr.base_price ? prev : curr)
    : null;

  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#C29B38]/35 shadow-xs hover:border-[#C29B38] hover:shadow-md transition-all">
      
      {/* Image Thumbnail with Tag */}
      <Link href={`/katalog/${product.slug}`} className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#F4EFE6] block">
        <Image
          src={product.featured_image_url}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Variant count indicator */}
        {product.variants && product.variants.length > 0 && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#022C22]/85 text-[#D4AF37] border border-[#C29B38]/40">
            {product.variants.length} Pilihan Varian
          </div>
        )}
      </Link>

      {/* Content Details */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <Link href={`/katalog/${product.slug}`}>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-[#064E3B] group-hover:text-[#9A7422] transition-colors line-clamp-1 mb-2">
              {product.title}
            </h3>
          </Link>
          <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Key Specs tags */}
          {product.variants && product.variants.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.variants.slice(0, 2).map((variant: ProductVariant) => (
                <span
                  key={variant.id}
                  className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#FAF7F2] text-[#8C6514] border border-[#C29B38]/40"
                >
                  {variant.dimension || variant.variant_name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Actions */}
        <div className="pt-4 border-t border-[#C29B38]/20 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[11px] font-medium text-stone-500 uppercase tracking-wide">Tarif Mulai</span>
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-lg font-extrabold text-[#064E3B]">
                {lowestPrice ? formatRupiah(lowestPrice) : 'Hubungi Kami'}
              </span>
              {lowestVariant?.price_unit && (
                <span className="text-[11px] text-stone-500">/{lowestVariant.price_unit}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/katalog/${product.slug}`}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#064E3B] border border-[#C29B38]/30 transition-colors"
              title="Lihat Detail Produk"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a
              href={getWhatsAppUrl({
                productTitle: product.title,
                variantName: lowestVariant?.variant_name,
                dimension: lowestVariant?.dimension
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#064E3B] hover:bg-[#022C22] border border-[#C29B38]/50 shadow-xs transition-all"
            >
              Sewa
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
