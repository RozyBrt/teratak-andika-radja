'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Check, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Info,
} from 'lucide-react';
import { Product, ProductVariant, formatRupiah, getWhatsAppUrl } from '@/lib/data';

interface ProductDetailInteractiveProps {
  product: Product;
}

export default function ProductDetailInteractive({ product }: ProductDetailInteractiveProps) {
  const variants = product.variants || [];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    variants.length > 0 ? variants[0] : null
  );
  const [activeImage, setActiveImage] = useState<string>(
    product.featured_image_url
  );

  const gallery = [product.featured_image_url, ...(product.gallery_urls || [])].filter(
    (url, idx, arr) => arr.indexOf(url) === idx
  );

  const waUrl = getWhatsAppUrl({
    productTitle: product.title,
    variantName: selectedVariant?.variant_name,
    dimension: selectedVariant?.dimension,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      
      {/* LEFT: Image Gallery */}
      <div className="lg:col-span-7 space-y-4">
        {/* Main Display Image */}
        <div className="relative h-80 sm:h-96 md:h-[460px] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-2xs">
          <Image
            src={activeImage}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        {/* Thumbnail Selector */}
        {gallery.length > 1 && (
          <div className="flex gap-2.5 overflow-x-auto pb-2">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`relative w-18 h-18 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === img
                    ? 'border-zinc-900 shadow-xs'
                    : 'border-zinc-200 opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`Dokumentasi ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Spesifikasi & Fasilitas Box */}
        <div className="mt-8 bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200 shadow-2xs space-y-5">
          <h2 className="text-base sm:text-lg font-bold text-zinc-950 border-b border-zinc-200 pb-3 flex items-center gap-2">
            <Info className="w-4 h-4 text-zinc-700" />
            <span>Spesifikasi Konstruksi & Fasilitas</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
            {Object.entries(product.specifications || {}).map(([key, val]) => {
              if (Array.isArray(val)) {
                return (
                  <div key={key} className="sm:col-span-2 pt-2">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Fasilitas Sudah Termasuk:
                    </span>
                    <ul className="space-y-2">
                      {val.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-zinc-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
                <div key={key} className="p-3 bg-zinc-50 rounded-lg border border-zinc-200">
                  <span className="block text-[11px] font-medium text-zinc-400 capitalize">
                    {key.replace(/_/g, ' ')}
                  </span>
                  <span className="font-semibold text-zinc-900 text-xs sm:text-sm mt-0.5 block">
                    {String(val)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* RIGHT: Product Options, Pricing & WhatsApp CTA */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Title & Description */}
        <div className="space-y-2.5 pb-5 border-b border-zinc-200">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Detail Katalog
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            {product.title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* VARIANT SELECTOR */}
        {variants.length > 0 && (
          <div className="space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Pilih Dimensi & Varian:
            </label>
            <div className="space-y-2">
              {variants.map((v: ProductVariant) => {
                const isSelected = selectedVariant?.id === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-zinc-900 bg-zinc-50 shadow-2xs'
                        : 'border-zinc-200 bg-white hover:border-zinc-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-zinc-900 text-xs sm:text-sm">
                        {v.variant_name}
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5 flex items-center gap-2">
                        {v.dimension && <span>Dimensi: {v.dimension}</span>}
                        {v.has_slayar ? (
                          <span className="text-emerald-700 font-medium">• Pakai Slayar Kain</span>
                        ) : (
                          <span className="text-zinc-400">• Plafon Polos</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-zinc-950 text-sm">
                        {formatRupiah(v.base_price)}
                      </div>
                      <div className="text-[10px] text-zinc-500">/{v.price_unit}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Price Card & CTA Button */}
        <div className="p-6 bg-zinc-950 text-white rounded-2xl border border-zinc-850 shadow-sm space-y-5">
          <div>
            <span className="text-xs text-zinc-400 block mb-1">Rincian Estimasi Biaya Sewa</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedVariant ? formatRupiah(selectedVariant.base_price) : 'Hubungi Kami'}
              </span>
              {selectedVariant?.price_unit && (
                <span className="text-xs text-zinc-400">/ {selectedVariant.price_unit}</span>
              )}
            </div>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              *Tarif sewa sudah mencakup instalasi pemasangan dan pembongkaran rapi oleh tim kami di lokasi acara.
            </p>
          </div>

          {/* WhatsApp Direct CTA Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-lg font-semibold text-sm text-zinc-950 bg-white hover:bg-zinc-100 transition-colors shadow-2xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Sewa via WhatsApp Sekarang</span>
          </a>

          <div className="pt-3 border-t border-zinc-850 space-y-1.5 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Peralatan terawat dan terpal bersih tanpa bocor</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Konsultasi setiap hari (07.00 - 22.00 WIB)</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
