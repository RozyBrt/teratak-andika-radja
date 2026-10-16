import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getProductBySlug, getProducts } from '@/lib/data';
import ProductDetailInteractive from '@/components/catalog/ProductDetailInteractive';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan: Teratak Andika Raja',
    };
  }

  return {
    title: `${product.title}: Teratak Andika Raja`,
    description: product.description,
    openGraph: {
      title: `${product.title}: Teratak Andika Raja`,
      description: product.description,
      images: [
        {
          url: product.featured_image_url,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link href="/katalog" className="hover:text-amber-600 transition-colors">
            Katalog
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {product.title}
          </span>
        </nav>

        {/* Back Link */}
        <div>
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-lg border border-amber-200/50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Katalog</span>
          </Link>
        </div>

        {/* Interactive Detail Content */}
        <ProductDetailInteractive product={product} />

      </div>
    </div>
  );
}
