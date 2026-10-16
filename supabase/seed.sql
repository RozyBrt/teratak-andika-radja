-- =======================================================
-- TERATAK ANDIKA RAJA - SEED DATA
-- =======================================================

-- 1. Insert Categories
INSERT INTO categories (id, name, slug, description, icon_name, sort_order) VALUES
('c1111111-1111-1111-1111-111111111111', 'Teratak (Tenda)', 'teratak', 'Pilihan tenda teratak berbagai ukuran dengan terpal kokoh anti-bocor dan pilihan slayar dekorasi.', 'Tent', 1),
('c2222222-2222-2222-2222-222222222222', 'Pentas & Panggung', 'pentas', 'Panggung modular kokoh untuk pelaminan, hiburan musik, atau panggung acara formal.', 'Layers', 2),
('c3333333-3333-3333-3333-333333333333', 'Kursi & Meja', 'kursi-meja', 'Sewa kursi plastik, kursi futura cover, meja prasmanan, dan meja bulat.', 'Armchair', 3),
('c4444444-4444-4444-4444-444444444444', 'Dekorasi & Pelengkap', 'dekorasi', 'Kipas embun / blower kabut, tirai pembatas, karpet jalan, dan lampu penerangan pesta.', 'Sparkles', 4),
('c5555555-5555-5555-5555-555555555555', 'Paket Bundling Hemat', 'paket-bundling', 'Paket hemat hajatan dan syukuran sudah lengkap tenda + kursi + meja + lampu.', 'PackageCheck', 5)
ON CONFLICT (slug) DO NOTHING;

-- 2. Insert Products
INSERT INTO products (id, category_id, title, slug, description, featured_image_url, gallery_urls, specifications, is_active, is_featured) VALUES
(
    'p1111111-1111-1111-1111-111111111111',
    'c1111111-1111-1111-1111-111111111111',
    'Teratak Standar & Semi Dekorasi (4x5 Meter)',
    'teratak-4x5-meter',
    'Tenda teratak ukuran 4x5 meter sangat ideal untuk pekarangan rumah, jalan lingkungan, atau halaman syukuran. Menggunakan rangka pipa besi kokoh, terpal tebal anti-bocor, serta opsi plafon polos atau slayar dekorasi kain kombinasi warna elegan.',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80'
    ],
    '{"tinggi_tiang": "3 - 3.5 Meter", "bahan_terpal": "Terpal tebal UV-resistant anti-bocor", "rangka": "Besi pipa galvanis kokoh", "fasilitas": ["Rumbai tepi tenda", "Pemasangan oleh tim profesional", "Tali pengikat badai aman"]}'::jsonb,
    true,
    true
),
(
    'p2222222-2222-2222-2222-222222222222',
    'c1111111-1111-1111-1111-111111111111',
    'Teratak Lapang (4x6 Meter)',
    'teratak-4x6-meter',
    'Tenda teratak ukuran lebih panjang cocok untuk kapasitas tamu lebih banyak atau penempatan meja prasmanan panjang. Tersedia varian polos terpal dan full slayar dekorasi modern.',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80'
    ],
    '{"tinggi_tiang": "3 - 3.5 Meter", "bahan_terpal": "Terpal tebal anti air", "rangka": "Besi pipa 2 inch", "fasilitas": ["Pemasangan gratis area layanan", "Pilihan rumbai warna", "Lampu fitting standar"]}'::jsonb,
    true,
    true
),
(
    'p3333333-3333-3333-3333-333333333333',
    'c2222222-2222-2222-2222-222222222222',
    'Pentas Panggung Moduler (3x4 Meter)',
    'pentas-panggung-3x4',
    'Pentas panggung kokoh dengan lantai multipleks tebal dilapisi karpet merah/abu elegan. Sangat aman untuk pelaminan, hiburan musik gambus/band, atau podium upacara sambutan.',
    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80'
    ],
    '{"tinggi_panggung": "50 cm - 80 cm (Adjustable)", "lantai": "Multiplek 18mm kuat", "lapisan": "Karpet jarum premium merah / abu", "fasilitas": ["Tangga trap panggung", "Rumbai skirting panggung"]}'::jsonb,
    true,
    true
),
(
    'p4444444-4444-4444-4444-444444444444',
    'c3333333-3333-3333-3333-333333333333',
    'Kursi Futura & Kursi Plastik Pesta',
    'kursi-pesta',
    'Sewa kursi berkualitas bersih dan terawat. Tersedia pilihan Kursi Futura dengan busa empuk (opsi sarung cover & pita warna) serta Kursi Plastik Napolly kuat untuk acara outdoor.',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80'
    ],
    '{"kapasitas_beban": "Hingga 120 kg", "kebersihan": "Dibersihkan sebelum antar", "opsi_cover": "Kain stretch putih / gold / navy", "minimum_order": "50 Unit (Khusus sewa kursi saja)"}'::jsonb,
    true,
    false
),
(
    'p5555555-5555-5555-5555-555555555555',
    'c5555555-5555-5555-5555-555555555555',
    'Paket Bundling Syukuran Keluarga (Tenda + 100 Kursi)',
    'paket-syukuran-keluarga',
    'Paket all-in-one hemat dan praktis untuk acara aqiqah, arisan, syukuran, atau doa bersama. Sudah termasuk 2 unit tenda 4x5 m, 100 kursi, meja prasmanan + taplak, dan penerangan.',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    '{"isi_paket": ["2 Unit Teratak 4x5m (Semi Dekorasi)", "100 Unit Kursi Plastik / Futura", "2 Unit Meja Prasmanan Panjang", "Lampu Sorot LED + Fitting Kabel", "Gratis Pasang & Bongkar"]}'::jsonb,
    true,
    true
)
ON CONFLICT (slug) DO NOTHING;

-- 3. Insert Product Variants
INSERT INTO product_variants (product_id, variant_name, dimension, has_slayar, base_price, price_unit, is_available) VALUES
-- Variants for Teratak 4x5
('p1111111-1111-1111-1111-111111111111', '4x5 M - Plafon Polos Terpal', '4x5 Meter', false, 250000, 'unit/hari', true),
('p1111111-1111-1111-1111-111111111111', '4x5 M - Full Slayar Dekorasi Mewah', '4x5 Meter', true, 400000, 'unit/hari', true),
-- Variants for Teratak 4x6
('p2222222-2222-2222-2222-222222222222', '4x6 M - Plafon Polos Terpal', '4x6 Meter', false, 300000, 'unit/hari', true),
('p2222222-2222-2222-2222-222222222222', '4x6 M - Full Slayar Dekorasi Mewah', '4x6 Meter', true, 480000, 'unit/hari', true),
-- Variants for Pentas 3x4
('p3333333-3333-3333-3333-333333333333', 'Pentas 3x4 M - Standar Karpet Merah', '3x4 Meter', false, 450000, 'set/hari', true),
('p3333333-3333-3333-3333-333333333333', 'Pentas 3x4 M + Backdrop Kain Minimalis', '3x4 Meter', true, 650000, 'set/hari', true),
-- Variants for Kursi
('p4444444-4444-4444-4444-444444444444', 'Kursi Plastik Napolly Bersih', 'Standar', false, 3000, 'unit/hari', true),
('p4444444-4444-4444-4444-444444444444', 'Kursi Futura Polos (Busa Empuk)', 'Standar', false, 8000, 'unit/hari', true),
('p4444444-4444-4444-4444-444444444444', 'Kursi Futura + Cover Sarung Putih & Pita', 'Standar', true, 13000, 'unit/hari', true),
-- Variants for Paket Bundling
('p5555555-5555-5555-5555-555555555555', 'Paket Syukuran Lengkap (Kursi Plastik)', '2 Tenda 4x5 + 100 Kursi', false, 950000, 'paket/acara', true),
('p5555555-5555-5555-5555-555555555555', 'Paket Syukuran Eksklusif (Kursi Futura Cover)', '2 Tenda 4x5 + 100 Kursi Cover', true, 1650000, 'paket/acara', true);
