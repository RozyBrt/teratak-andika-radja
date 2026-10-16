export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon_name?: string;
  sort_order?: number;
  created_at?: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  variant_name: string;
  dimension?: string;
  has_slayar: boolean;
  base_price: number;
  price_unit: string;
  is_available: boolean;
  created_at?: string;
}

export interface Product {
  id: string;
  category_id: string;
  title: string;
  slug: string;
  description: string;
  featured_image_url: string;
  gallery_urls: string[];
  specifications: Record<string, any>;
  is_active: boolean;
  is_featured: boolean;
  created_at?: string;
  category?: Category;
  variants?: ProductVariant[];
}
