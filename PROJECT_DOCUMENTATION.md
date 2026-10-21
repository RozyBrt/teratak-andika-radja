# Dokumentasi Proyek: Teratak Andika Raja

Dokumen ini disusun sebagai panduan menyeluruh untuk pengembang (developer), pemilik usaha, maupun AI Coding Agent agar dapat memahami arsitektur, struktur kode, alur data, aturan desain, dan cara melakukan perubahan di masa mendatang secara konsisten.

---

## 1. Identitas & Informasi Proyek

* **Nama Usaha:** Teratak Andika Raja
* **Layanan Utama:** Jasa Persewaan Tenda Teratak Pesta, Pentas Pelaminan, Kursi & Meja, Dekorasi Slayar, dan Paket Bundling Acara / Hajatan Warga.
* **Domain Live (Production):** [https://teratak-andika-radja.vercel.app](https://teratak-andika-radja.vercel.app)
* **Repository GitHub:** [https://github.com/RozyBrt/teratak-andika-radja](https://github.com/RozyBrt/teratak-andika-radja) (Branch utama: `main`)
* **Branching & CI/CD:** Setiap perubahan kode yang di-push ke branch `main` akan otomatis di-build dan di-deploy ke Vercel dalam waktu ~1 menit.

---

## 2. Tech Stack & Arsitektur Sistem

Proyek ini dibangun menggunakan arsitektur modern Next.js App Router dengan pemisahan layer data yang aman dan tangguh:

| Komponen | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server-Side Generation (SSG), Turbopack bundler, React 19, TypeScript |
| **Styling** | Tailwind CSS v4 + Vanilla CSS | Konfigurasi CSS variables tema dan utility tokens kustom |
| **Database** | Supabase (PostgreSQL Cloud) | Penyimpanan data relasional (`categories`, `products`, `product_variants`) dengan RLS |
| **Data Layer** | Hybrid Architecture (`src/lib/data.ts`) | Terhubung ke Supabase saat cloud aktif, dengan fallback otomatis ke mock in-memory jika cloud offline |
| **Icon System** | Lucide React | Icon set minimalis dan konsisten |
| **Hosting & CDN** | Vercel Serverless Edge | Free tier Hobby, SSL otomatis (HTTPS), DNS global |

---

## 3. Filosofi Desain & Standar Anti-AI Slop

Proyek ini menerapkan sistem aturan ketat dari pedoman **Anti-AI Slop** (`miqdadbadjuber/anti-slop`) untuk menghindari tampilan website generik buatan AI. Detail lengkap tercatat pada [`DESIGN.md`](./DESIGN.md).

### Tema Utama: "Clean & Modern Architectural Catalog"
* **Karakter & Jiwa:** Jernih, lapang (*spacious*), fungsional, dan presisi tinggi layaknya katalog furnitur/peralatan arsitektural modern. Foto produk menjadi pusat perhatian utama yang berbicara sendiri, didukung oleh tata letak terbuka dan tipografi modern yang tegas.
* **Dial Settings:** `ENERGY: 1` (Tenang, lapang, fokus pada katalog, kejelasan foto dan spesifikasi), `RHYTHM: 2` (Modular teratur, hirarki visual proporsional, ruang bernapas lega antar-seksi), `MOTION: 1` (Mikro-interaksi halus, hover scale gambar terkontrol, tanpa animasi melayang/bouncing).

### Palet Warna (Clean Modern Studio Palette)
* **Latar Belakang Dasar:** *Soft Gallery Light* (`#FBFBFA`) dan permukaan kartu *Pure White* (`#FFFFFF`) dengan kontras sekunder *Light Mist* (`#F4F4F5`).
* **Warna Teks Utama:** *Deep Ink Charcoal* (`#18181B` : Zinc 900) untuk judul, nama produk, dan harga.
* **Warna Teks Sekunder:** *Muted Graphite* (`#52525B` : Zinc 600) untuk deskripsi dan spesifikasi ukuran.
* **Border & Pembatas:** Garis arsitektural tipis 1px (`#E4E4E7` : Zinc 200).
* **Warna Aksen Identitas:** *Deep Forest Pine* (`#064E3B` / `#0F766E`) sebagai penanda merek berwibawa dan terpercaya.
* **Warna Aksen Aksi (CTA):** *High-Contrast Dark Charcoal* (`#18181B`) untuk navigasi dan tombol katalog, dipadukan dengan *Emerald WhatsApp* (`#059669`) untuk tombol komunikasi.

### Tipografi
* **Display & Headings:** `Plus Jakarta Sans` (bobot `font-bold` & `font-semibold` dengan `tracking-tight`), memberikan kesan modern, bersih, dan berwibawa tanpa lekukan serif yang berat.
* **Body & Spesifikasi:** `Plus Jakarta Sans` (bobot `font-normal` & `font-medium`), menjamin kenyamanan membaca ukuran tenda, dimensi tiang, dan rincian fasilitas di smartphone.

### Aturan Ketat untuk Perubahan Kode di Masa Depan
1. **Dilarang menggunakan tanda hubung em dash (`—`):** Gunakan titik dua (`:`) atau tanda hubung standar (`-`).
2. **Dilarang memakai icon sihir generik (`Sparkles`):** Gunakan icon nyata kontekstual (`Tent`, `Layers`, `Armchair`, `CheckCircle2`, dll).
3. **Dilarang membuat pill badge mengambang tanpa makna fungsional:** Setiap badge harus berisi informasi nyata (misal: tarif sewa, status ketersediaan, ukuran pekarangan).
4. **Dilarang memakai layout template klise "3 Langkah Sewa 1-2-3":** Ganti selalu dengan konten edukatif nyata (contoh: Panduan Menyesuaikan Ukuran Tenda Sesuai Luas Pekarangan Rumah).
5. **Dilarang menggunakan bahasa buzzword kosong:** Gunakan istilah lokal yang dimengerti calon penyewa (contoh: *slayar*, *plafon polos*, *tiang pipa galvanis*, *multipleks panggung*).

---

## 4. Struktur Direktori Proyek

```
Teratak-Andika-Raja/
├── public/                     # Aset statis publik (logo.png, icon.png, og-image.png, favicon.ico)
├── src/
│   ├── app/                    # Routing Next.js App Router
│   │   ├── layout.tsx          # Root layout (Font Plus Jakarta Sans, Navbar, Footer, Floating WA, Favicon & OG Metadata)
│   │   ├── page.tsx            # Beranda utama 2-kolom (Hero studio, Kategori, Panduan pekarangan, Produk pilihan, CTA banner)
│   │   ├── globals.css         # Variabel CSS tema Clean Modern Studio, Plus Jakarta Sans, tokens utilitas
│   │   ├── sitemap.ts          # Generator XML Sitemap otomatis untuk SEO Google
│   │   ├── robots.ts           # Konfigurasi robots.txt untuk crawler mesin pencari
│   │   ├── manifest.ts         # Konfigurasi PWA Web App Manifest untuk instalasi mobile
│   │   ├── icon.png            # Icon aplikasi otomatis Next.js
│   │   ├── apple-icon.png      # Icon Apple Touch otomatis Next.js
│   │   ├── opengraph-image.png # Pratinjau share link otomatis untuk WhatsApp & media sosial
│   │   ├── katalog/
│   │   │   ├── page.tsx        # Halaman filter & daftar katalog sewa
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Dynamic SSG detail produk, selektor varian, spesifikasi & order WA
│   │   ├── galeri/
│   │   │   └── page.tsx        # Halaman dokumentasi portofolio terpasang
│   │   └── kontak/
│   │       └── page.tsx        # Info pangkalan, jam layanan, Google Maps, syarat & ketentuan
│   │
│   ├── components/             # Komponen antarmuka modular
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navigasi sticky desktop & mobile hamburger
│   │   │   └── Footer.tsx      # Footer resmi dengan peta navigasi, kontak, dan copyright
│   │   ├── catalog/
│   │   │   ├── CatalogFilterView.tsx         # Client component filter tabs (Semua, Teratak, Pentas, dll)
│   │   │   ├── ProductCard.tsx               # Kartu katalog dengan badge, dimensi, dan tombol detail
│   │   │   └── ProductDetailInteractive.tsx  # Dynamic variant switcher, image gallery, generator WA
│   │   └── common/
│   │       └── FloatingWhatsAppButton.tsx    # Tombol WA mengambang dengan tooltip interaktif
│   │
│   ├── lib/                    # Logika data dan integrasi backend
│   │   ├── supabase.ts         # Inisialisasi client Supabase dengan validasi keamanan URL
│   │   └── data.ts             # Data layer abstraction (Query Supabase, Fallback Mock, Format Rupiah, WhatsApp URL)
│   │
│   └── types/
│       └── database.ts         # Definisi TypeScript interface (Category, Product, ProductVariant, RentalInquiry)
│
├── supabase/
│   ├── schema.sql              # Definisi struktur database PostgreSQL, index, dan RLS security
│   └── seed.sql                # Data awal kategori, produk, dan varian (dengan valid UUID heksadesimal)
│
├── .env.local                  # Environment variables lokal (diabaikan oleh git)
├── .env.local.example          # Template contoh konfigurasi environment
├── DESIGN.md                   # Dokumen pedoman sistem desain Melayu & dial Anti-Slop
├── AGENTS.md                   # Instruksi perilaku untuk AI agent
├── product_requirement_document_teratak_andika_raja.md  # Dokumen PRD spesifikasi awal
└── package.json                # Dependensi proyek dan npm scripts
```

---

## 5. Skema Database (Supabase PostgreSQL)

Database menggunakan 3 tabel relasional utama dengan pengamanan **Row Level Security (RLS)** yang mengizinkan publik membaca data aktif:

### 1. `categories`
* `id` (UUID, Primary Key)
* `name` (VARCHAR): Nama kategori (contoh: *Teratak (Tenda)*, *Pentas & Panggung*)
* `slug` (VARCHAR, Unique): Identifier URL (contoh: `teratak`, `pentas`, `kursi-meja`)
* `description` (TEXT): Deskripsi ringkas kategori
* `icon_name` (VARCHAR): Nama icon Lucide
* `sort_order` (INT): Urutan tampil

### 2. `products`
* `id` (UUID, Primary Key)
* `category_id` (UUID, Foreign Key -> `categories.id`)
* `title` (VARCHAR): Nama produk (contoh: *Teratak Standar & Semi Dekorasi (4x5 Meter)*)
* `slug` (VARCHAR, Unique): URL slug (contoh: `teratak-4x5-meter`)
* `description` (TEXT): Deskripsi detail keunggulan dan kegunaan tenda
* `featured_image_url` (TEXT): Gambar utama
* `gallery_urls` (TEXT[]): Array URL foto dokumentasi tambahan
* `specifications` (JSONB): Atribut teknis (tinggi tiang, bahan terpal, rangka pipa, fasilitas)
* `is_active` (BOOLEAN): Status tayang
* `is_featured` (BOOLEAN): Tampil di bagian produk unggulan beranda

### 3. `product_variants`
* `id` (UUID, Primary Key)
* `product_id` (UUID, Foreign Key -> `products.id`)
* `variant_name` (VARCHAR): Contoh: *4x5 M - Full Slayar Dekorasi Mewah*
* `dimension` (VARCHAR): Dimensi (contoh: *4x5 Meter*)
* `has_slayar` (BOOLEAN): Penanda apakah memakai dekorasi kain slayar
* `base_price` (NUMERIC): Harga sewa (contoh: `400000`)
* `price_unit` (VARCHAR): Satuan harga (contoh: `unit/hari`, `set/hari`, `paket/acara`)
* `is_available` (BOOLEAN): Status ketersediaan unit

---

## 6. Alur Kerja Data Layer & WhatsApp Generator

1. **Pengambilan Data Produk:**
   * Fungsi `getProducts()` dan `getProductBySlug()` di [`src/lib/data.ts`](./src/lib/data.ts) akan mengecek apakah `isSupabaseConfigured` bernilai true.
   * Jika Supabase terhubung: Sistem memanggil tabel PostgreSQL via REST API dengan relasi `product_variants(*)`.
   * Jika Supabase offline atau belum diisi: Sistem otomatis memakai data cadangan (`INITIAL_PRODUCTS`) tanpa menghasilkan error atau crash.

2. **WhatsApp Order Link Generator:**
   * Diimplementasikan di fungsi `generateWhatsAppRentalLink()` pada `src/lib/data.ts`.
   * Setiap kali pengunjung memilih varian di halaman detail, sistem meracik teks WhatsApp otomatis yang rapi:
     ```
     Halo Teratak Andika Raja, saya ingin konsultasi dan tanya sewa:
     - Produk: Teratak Standar & Semi Dekorasi (4x5 Meter)
     - Varian/Opsi: 4x5 M - Full Slayar Dekorasi Mewah
     - Estimasi Tarif: Rp 400.000 / unit/hari
     
     Apakah untuk tanggal acara [isi tanggal] masih tersedia?
     ```

---

## 7. Konfigurasi Environment Variables

File [`.env.local`](./.env.local) di komputer lokal dan dashboard Vercel membutuhkan variabel berikut:

```env
# Koneksi Supabase Cloud
NEXT_PUBLIC_SUPABASE_URL=https://nyaaadkrenyrktwghvry.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_RvR6EMsSvETuCxjN6K7c4A_6v4he5KY

# Konfigurasi Bisnis & Kontak
NEXT_PUBLIC_WA_NUMBER=6282284903333
NEXT_PUBLIC_BUSINESS_NAME="Teratak Andika Raja"
NEXT_PUBLIC_SITE_URL=https://teratak-andika-radja.vercel.app
```

> **Penting untuk AI Agent / Developer:**
> Jangan pernah mem-push file `.env.local` ke git. File ini sudah dimasukkan ke dalam `.gitignore`. Variabel untuk produksi diatur langsung melalui tab **Settings > Environment Variables** di dashboard Vercel.

---

## 8. Panduan Menjalankan & Mengembangkan Proyek

### Menjalankan Server Lokal
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### Menguji Build Produksi
Sebelum melakukan commit perubahan besar, selalu jalankan:
```bash
npm run build
```
Perintah ini akan menjalankan TypeScript compiler, validasi Turbopack, dan pre-rendering 18 rute statis (SSG termasuk manifest, sitemap, robots, icon, dan open-graph image).

### Cara Menambah atau Mengubah Data Produk
Ada 2 cara utama (panduan roadmap dan urutan eksekusi lengkap dapat dibaca di [`NEXT_STEPS_ROADMAP.md`](./NEXT_STEPS_ROADMAP.md), serta checklist migrasi data asli di [`PANDUAN_DATA_ASLI.md`](./PANDUAN_DATA_ASLI.md)):
* **Cara A (Melalui Supabase Cloud):** Buka dashboard Supabase > Masuk ke **Table Editor** > Buka tabel `products` atau `product_variants` > Tambah atau ubah baris data langsung. Website akan otomatis menampilkan data terbaru.
* **Cara B (Melalui Kode):** Perbarui file `supabase/seed.sql` dan sesuaikan cadangan mock di `src/lib/data.ts` agar lingkungan lokal tetap sinkron.

### Cara Melakukan Deployment Pembaruan
Cukup lakukan commit dan push melalui Git:
```bash
git add .
git commit -m "feat: deskripsi perubahan"
git push origin main
```
Vercel akan otomatis mendeteksi push pada branch `main` dan memperbarui website live di `https://teratak-andika-radja.vercel.app`.

---

## 9. Status Fitur PRD & Rencana Selanjutnya (Roadmap)

### Fitur yang Sudah Selesai (100% Active)
* **FR-01:** Hero section 2-kolom Clean & Modern Architectural Catalog & Profil Usaha Teratak Andika Raja.
* **FR-02:** Filter kategori produk interaktif (*Semua, Teratak, Pentas & Panggung, Kursi & Meja, Dekorasi, Paket Bundling*).
* **FR-03:** Kartu produk interaktif minimalis dengan informasi dimensi dan tombol tindakan cepat WhatsApp (*Tarif saat ini berstatus 'Hubungi Pengelola' menunggu finalisasi tarif resmi dari pemilik usaha*).
* **FR-04:** Dynamic variant switcher (dimensi ukuran tenda & pilihan plafon polos/slayar kain).
* **FR-05:** Spesifikasi teknis konstruksi & fasilitas include pemasangan rapi.
* **FR-06:** Halaman Galeri Portofolio dokumentasi lapangan (`/galeri`).
* **FR-07:** Generator link WhatsApp otomatis kontekstual sesuai nama barang dan varian yang dipilih.
* **FR-08:** Halaman Kontak, Peta Google Maps presisi ke pangkalan Penanggalan, Jam Layanan, & Ketentuan Sewa (`/kontak`).
* **Branding & Visual:** Logo resmi emblem emas-navy di favicon browser, pratinjau link share WhatsApp (*OpenGraph*), navbar, dan footer.
* **SEO & Performa (Grade A Google PageSpeed Mobile):** XML Sitemap otomatis, robots.txt, PWA Web Manifest, JSON-LD Schema LocalBusiness, dengan skor PageSpeed **97 (Performa), 96 (Aksesibilitas), 100 (Best Practices), 100 (SEO)**.

### Fitur Tertunda / Backlog untuk Fase Berikutnya
* **FR-09:** Fitur Nilai Tambah: Kalkulator Simulasi Biaya Sewa (Multi-item selector dengan ringkasan total estimasi biaya dan tombol kirim ke WA).
* **FR-10:** Date Picker kalender cek ketersediaan tanggal sewa.
* **FR-11:** CMS Admin Dashboard internal sederhana jika pengelola ingin mengunggah foto langsung dari website.
