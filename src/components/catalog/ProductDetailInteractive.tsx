'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Check, 
  PhoneCall, 
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      
      {/* LEFT: Image Gallery */}
      <div className="lg:col-span-7 space-y-4">
        {/* Main Display Image */}
        <div className="relative h-80 sm:h-96 md:h-[460px] w-full rounded-xl overflow-hidden bg-[#F4EFE6] border-2 border-[#C29B38]/40 shadow-sm">
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
          <div className="flex gap-3 overflow-x-auto pb-2">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === img
                    ? 'border-[#064E3B] shadow-sm ring-2 ring-[#C29B38]/50'
                    : 'border-[#C29B38]/30 opacity-70 hover:opacity-100'
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
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-xl border border-[#C29B38]/35 shadow-xs space-y-6">
          <h2 className="text-lg font-heading font-bold text-[#064E3B] border-b border-[#C29B38]/20 pb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#9A7422]" />
            <span>Spesifikasi Konstruksi & Fasilitas Sewa</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {Object.entries(product.specifications || {}).map(([key, val]) => {
              if (Array.isArray(val)) {
                return (
                  <div key={key} className="sm:col-span-2 pt-2">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                      Fasilitas Sudah Termasuk:
                    </span>
                    <ul className="space-y-2">
                      {val.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-stone-700">
                          <Check className="w-4 h-4 text-[#064E3B] shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
                <div key={key} className="p-3.5 bg-[#FAF7F2] rounded-lg border border-[#C29B38]/25">
                  <span className="block text-xs font-medium text-stone-500 capitalize">
                    {key.replace(/_/g, ' ')}
                  </span>
                  <span className="font-semibold text-stone-900 text-sm mt-0.5 block">
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
        <div className="space-y-3 pb-4 border-b border-[#C29B38]/20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9A7422]">
            Perlengkapan Acara Terawat
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[#064E3B] tracking-tight leading-tight">
            {product.title}
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* VARIANT SELECTOR */}
        {variants.length > 0 && (
          <div className="space-y-3">
            <label className="block text-sm font-heading font-bold text-stone-900">
              Pilih Dimensi Ukuran & Varian Slayar:
            </label>
            <div className="space-y-2.5">
              {variants.map((v: ProductVariant) => {
                const isSelected = selectedVariant?.id === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#064E3B] bg-[#F4EFE6] shadow-xs'
                        : 'border-[#C29B38]/30 bg-white hover:border-[#C29B38]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-stone-900 text-sm">
                        {v.variant_name}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5 flex items-center gap-2">
                        {v.dimension && <span>Dimensi: {v.dimension}</span>}
                        {v.has_slayar ? (
                          <span className="text-[#9A7422] font-semibold">• Pakai Slayar Kain</span>
                        ) : (
                          <span className="text-stone-400">• Plafon Polos</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-[#064E3B] text-sm sm:text-base">
                        {formatRupiah(v.base_price)}
                      </div>
                      <div className="text-[11px] text-stone-500">/{v.price_unit}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Price Card & CTA Button */}
        <div className="p-6 emerald-gradient text-white rounded-xl border border-[#C29B38]/50 shadow-md space-y-5">
          <div>
            <span className="text-xs text-stone-300 block mb-1">Rincian Estimasi Biaya Sewa</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-heading font-bold text-[#D4AF37]">
                {selectedVariant ? formatRupiah(selectedVariant.base_price) : 'Hubungi Kami'}
              </span>
              {selectedVariant?.price_unit && (
                <span className="text-xs text-stone-300">/ {selectedVariant.price_unit}</span>
              )}
            </div>
            <p className="text-xs text-stone-300 mt-2">
              *Tarif sewa sudah mencakup instalasi pemasangan dan pembongkaran rapi oleh tim kami di lokasi acara.
            </p>
          </div>

          {/* WhatsApp Direct CTA Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-lg font-bold text-sm text-stone-900 gold-gradient hover:brightness-105 border border-[#C29B38] shadow-md transition-all"
          >
            <PhoneCall className="w-4 h-4 text-stone-900" />
            <span>Sewa via WhatsApp Sekarang</span>
          </a>

          <div className="pt-3 border-t border-[#C29B38]/30 space-y-2 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Peralatan terawat dan terpal bersih tanpa bocor</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Konsultasi setiap hari (07.00 - 22.00 WIB)</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
