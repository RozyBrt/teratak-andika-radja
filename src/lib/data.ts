import { supabase, isSupabaseConfigured } from './supabase';
import type { Category, Product, ProductVariant } from '@/types/database';
export type { Category, Product, ProductVariant };

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'c1111111-1111-1111-1111-111111111111',
    name: 'Teratak (Tenda)',
    slug: 'teratak',
    description: 'Pilihan tenda teratak berbagai ukuran dengan terpal kokoh anti-bocor dan pilihan slayar dekorasi.',
    icon_name: 'Tent',
    sort_order: 1
  },
  {
    id: 'c2222222-2222-2222-2222-222222222222',
    name: 'Pentas & Panggung',
    slug: 'pentas',
    description: 'Panggung modular kokoh untuk pelaminan, hiburan musik, atau panggung acara formal.',
    icon_name: 'Layers',
    sort_order: 2
  },
  {
    id: 'c3333333-3333-3333-3333-333333333333',
    name: 'Kursi & Meja',
    slug: 'kursi-meja',
    description: 'Sewa kursi plastik, kursi futura cover, meja prasmanan, dan meja bulat.',
    icon_name: 'Armchair',
    sort_order: 3
  },
  {
    id: 'c4444444-4444-4444-4444-444444444444',
    name: 'Dekorasi & Pelengkap',
    slug: 'dekorasi',
    description: 'Kipas embun / blower kabut, tirai pembatas, karpet jalan, dan lampu penerangan pesta.',
    icon_name: 'Palette',
    sort_order: 4
  },
  {
    id: 'c5555555-5555-5555-5555-555555555555',
    name: 'Paket Bundling Hemat',
    slug: 'paket-bundling',
    description: 'Paket hemat hajatan dan syukuran sudah lengkap tenda + kursi + meja + lampu.',
    icon_name: 'PackageCheck',
    sort_order: 5
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1111111-1111-1111-1111-111111111111',
    category_id: 'c1111111-1111-1111-1111-111111111111',
    title: 'Teratak Standar & Semi Dekorasi (4x5 Meter)',
    slug: 'teratak-4x5-meter',
    description: 'Tenda teratak ukuran 4x5 meter sangat ideal untuk pekarangan rumah, jalan lingkungan, atau halaman syukuran. Menggunakan rangka pipa besi kokoh, terpal tebal anti-bocor, serta opsi plafon polos atau slayar dekorasi kain kombinasi warna elegan.',
    featured_image_url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    gallery_urls: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      tinggi_tiang: '3 - 3.5 Meter',
      bahan_terpal: 'Terpal tebal UV-resistant anti-bocor',
      rangka: 'Besi pipa galvanis kokoh',
      fasilitas: ['Rumbai tepi tenda', 'Pemasangan oleh tim profesional', 'Tali pengikat badai aman']
    },
    is_active: true,
    is_featured: true,
    variants: [
      {
        id: 'v1',
        product_id: 'p1111111-1111-1111-1111-111111111111',
        variant_name: '4x5 M - Plafon Polos Terpal',
        dimension: '4x5 Meter',
        has_slayar: false,
        base_price: 250000,
        price_unit: 'unit/hari',
        is_available: true
      },
      {
        id: 'v2',
        product_id: 'p1111111-1111-1111-1111-111111111111',
        variant_name: '4x5 M - Full Slayar Dekorasi Mewah',
        dimension: '4x5 Meter',
        has_slayar: true,
        base_price: 400000,
        price_unit: 'unit/hari',
        is_available: true
      }
    ]
  },
  {
    id: 'p2222222-2222-2222-2222-222222222222',
    category_id: 'c1111111-1111-1111-1111-111111111111',
    title: 'Teratak Lapang (4x6 Meter)',
    slug: 'teratak-4x6-meter',
    description: 'Tenda teratak ukuran lebih panjang cocok untuk kapasitas tamu lebih banyak atau penempatan meja prasmanan panjang. Tersedia varian polos terpal dan full slayar dekorasi modern.',
    featured_image_url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    gallery_urls: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      tinggi_tiang: '3 - 3.5 Meter',
      bahan_terpal: 'Terpal tebal anti air',
      rangka: 'Besi pipa 2 inch',
      fasilitas: ['Pemasangan gratis area layanan', 'Pilihan rumbai warna', 'Lampu fitting standar']
    },
    is_active: true,
    is_featured: true,
    variants: [
      {
        id: 'v3',
        product_id: 'p2222222-2222-2222-2222-222222222222',
        variant_name: '4x6 M - Plafon Polos Terpal',
        dimension: '4x6 Meter',
        has_slayar: false,
        base_price: 300000,
        price_unit: 'unit/hari',
        is_available: true
      },
      {
        id: 'v4',
        product_id: 'p2222222-2222-2222-2222-222222222222',
        variant_name: '4x6 M - Full Slayar Dekorasi Mewah',
        dimension: '4x6 Meter',
        has_slayar: true,
        base_price: 480000,
        price_unit: 'unit/hari',
        is_available: true
      }
    ]
  },
  {
    id: 'p3333333-3333-3333-3333-333333333333',
    category_id: 'c2222222-2222-2222-2222-222222222222',
    title: 'Pentas Panggung Moduler (3x4 Meter)',
    slug: 'pentas-panggung-3x4',
    description: 'Pentas panggung kokoh dengan lantai multipleks tebal dilapisi karpet merah/abu elegan. Sangat aman untuk pelaminan, hiburan musik gambus/band, atau podium upacara sambutan.',
    featured_image_url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    gallery_urls: [
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      tinggi_panggung: '50 cm - 80 cm (Adjustable)',
      lantai: 'Multiplek 18mm kuat',
      lapisan: 'Karpet jarum premium merah / abu',
      fasilitas: ['Tangga trap panggung', 'Rumbai skirting keliling']
    },
    is_active: true,
    is_featured: true,
    variants: [
      {
        id: 'v5',
        product_id: 'p3333333-3333-3333-3333-333333333333',
        variant_name: 'Pentas 3x4 M - Standar Karpet Merah',
        dimension: '3x4 Meter',
        has_slayar: false,
        base_price: 450000,
        price_unit: 'set/hari',
        is_available: true
      },
      {
        id: 'v6',
        product_id: 'p3333333-3333-3333-3333-333333333333',
        variant_name: 'Pentas 3x4 M + Backdrop Kain Minimalis',
        dimension: '3x4 Meter',
        has_slayar: true,
        base_price: 650000,
        price_unit: 'set/hari',
        is_available: true
      }
    ]
  },
  {
    id: 'p4444444-4444-4444-4444-444444444444',
    category_id: 'c3333333-3333-3333-3333-333333333333',
    title: 'Kursi Futura & Kursi Plastik Pesta',
    slug: 'kursi-pesta',
    description: 'Sewa kursi berkualitas bersih dan terawat. Tersedia pilihan Kursi Futura dengan busa empuk (opsi sarung cover & pita warna) serta Kursi Plastik Napolly kuat untuk acara outdoor.',
    featured_image_url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    gallery_urls: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      kapasitas_beban: 'Hingga 120 kg',
      kebersihan: 'Dibersihkan sebelum antar',
      opsi_cover: 'Kain stretch putih / gold / navy',
      minimum_order: '50 Unit (Khusus sewa kursi saja)'
    },
    is_active: true,
    is_featured: false,
    variants: [
      {
        id: 'v7',
        product_id: 'p4444444-4444-4444-4444-444444444444',
        variant_name: 'Kursi Plastik Napolly Bersih',
        dimension: 'Standar',
        has_slayar: false,
        base_price: 3000,
        price_unit: 'unit/hari',
        is_available: true
      },
      {
        id: 'v8',
        product_id: 'p4444444-4444-4444-4444-444444444444',
        variant_name: 'Kursi Futura Polos (Busa Empuk)',
        dimension: 'Standar',
        has_slayar: false,
        base_price: 8000,
        price_unit: 'unit/hari',
        is_available: true
      },
      {
        id: 'v9',
        product_id: 'p4444444-4444-4444-4444-444444444444',
        variant_name: 'Kursi Futura + Cover Sarung Putih & Pita',
        dimension: 'Standar',
        has_slayar: true,
        base_price: 13000,
        price_unit: 'unit/hari',
        is_available: true
      }
    ]
  },
  {
    id: 'p5555555-5555-5555-5555-555555555555',
    category_id: 'c5555555-5555-5555-5555-555555555555',
    title: 'Paket Bundling Syukuran Keluarga',
    slug: 'paket-syukuran-keluarga',
    description: 'Paket all-in-one hemat dan praktis untuk acara aqiqah, arisan, syukuran, atau doa bersama. Sudah termasuk 2 unit tenda 4x5 m, 100 kursi, meja prasmanan + taplak, dan penerangan.',
    featured_image_url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    gallery_urls: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      isi_paket: [
        '2 Unit Teratak 4x5m (Semi Dekorasi)',
        '100 Unit Kursi Pesta Pilihan',
        '2 Unit Meja Prasmanan Panjang + Taplak',
        'Lampu Sorot LED + Fitting Instalasi Kabel',
        'Gratis Pasang & Bongkar Lokasi'
      ]
    },
    is_active: true,
    is_featured: true,
    variants: [
      {
        id: 'v10',
        product_id: 'p5555555-5555-5555-5555-555555555555',
        variant_name: 'Paket Syukuran Lengkap (Kursi Plastik)',
        dimension: '2 Tenda 4x5 + 100 Kursi',
        has_slayar: false,
        base_price: 950000,
        price_unit: 'paket/acara',
        is_available: true
      },
      {
        id: 'v11',
        product_id: 'p5555555-5555-5555-5555-555555555555',
        variant_name: 'Paket Syukuran Eksklusif (Kursi Futura Cover)',
        dimension: '2 Tenda 4x5 + 100 Kursi Cover',
        has_slayar: true,
        base_price: 1650000,
        price_unit: 'paket/acara',
        is_available: true
      }
    ]
  }
];

export async function getCategories(): Promise<Category[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true });
    if (!error && data && data.length > 0) {
      return data;
    }
  }
  return INITIAL_CATEGORIES;
}

export async function getProducts(options?: {
  categorySlug?: string;
  featuredOnly?: boolean;
}): Promise<Product[]> {
  let products = INITIAL_PRODUCTS;

  if (isSupabaseConfigured && supabase) {
    let query = supabase
      .from('products')
      .select('*, variants:product_variants(*), category:categories(*)')
      .eq('is_active', true);

    if (options?.featuredOnly) {
      query = query.eq('is_featured', true);
    }

    const { data, error } = await query;
    if (!error && data && data.length > 0) {
      products = data;
    }
  }

  // Filter in memory for fallback / consistency
  if (options?.categorySlug && options.categorySlug !== 'semua') {
    const category = INITIAL_CATEGORIES.find(c => c.slug === options.categorySlug);
    if (category) {
      products = products.filter(p => p.category_id === category.id);
    }
  }

  if (options?.featuredOnly) {
    products = products.filter(p => p.is_featured);
  }

  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('products')
      .select('*, variants:product_variants(*), category:categories(*)')
      .eq('slug', slug)
      .single();

    if (!error && data) {
      return data;
    }
  }

  const found = INITIAL_PRODUCTS.find(p => p.slug === slug);
  return found || null;
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function getWhatsAppUrl({
  phone = process.env.NEXT_PUBLIC_WA_NUMBER || '6282284903333',
  productTitle,
  variantName,
  dimension,
  customMessage
}: {
  phone?: string;
  productTitle?: string;
  variantName?: string;
  dimension?: string;
  customMessage?: string;
}): string {
  let text = '';
  if (customMessage) {
    text = customMessage;
  } else if (productTitle) {
    text = `Halo Teratak Andika Raja, saya melihat website Anda dan tertarik menyewa *${productTitle}*`;
    if (variantName) text += ` (Varian: ${variantName})`;
    if (dimension) text += ` (Ukuran: ${dimension})`;
    text += `.\n\nApakah tersedia untuk tanggal [isi tanggal acara] di daerah [isi lokasi acara]?`;
  } else {
    text = `Halo Teratak Andika Raja, saya ingin konsultasi dan tanya ketersediaan sewa perlengkapan acara.`;
  }

  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
