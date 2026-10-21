# Teratak Andika Raja - Website Profil & Katalog Sewa

Website profil usaha dan katalog interaktif persewaan tenda teratak pesta, pentas pelaminan, kursi & meja, dekorasi slayar, dan perlengkapan hajatan terpercaya.

* **Live Website:** [https://teratak-andika-radja.vercel.app](https://teratak-andika-radja.vercel.app)
* **Design Philosophy:** Anti-AI Slop (Clean & Modern Architectural Catalog)
* **Peta Navigasi & Langkah Selanjutnya:** Baca [NEXT_STEPS_ROADMAP.md](docs/NEXT_STEPS_ROADMAP.md)
* **Dokumentasi Lengkap Proyek:** Baca [PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md)
* **Panduan Migrasi Data Asli:** Baca [PANDUAN_DATA_ASLI.md](docs/PANDUAN_DATA_ASLI.md)

---

## Ringkasan Teknologi

* **Frontend:** Next.js 16 (App Router, Turbopack, React 19, TypeScript)
* **Styling:** Tailwind CSS v4, Vanilla CSS Design System Tokens
* **Database Cloud:** Supabase (PostgreSQL, Row Level Security, Client SDK)
* **Data Layer:** Hybrid Architecture dengan fallback in-memory otomatis
* **Hosting:** Vercel Serverless Edge (CI/CD via GitHub branch `main`)

---

## Panduan Cepat Pengembang (Developer Quickstart)

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Konfigurasi Environment Variables
Salin file `.env.local.example` menjadi `.env.local`:
```bash
cp .env.local.example .env.local
```
Isi variabel dengan kredensial Supabase dan nomor WhatsApp pengelola.

### 3. Menjalankan Server Pengembangan Lokal
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 4. Menjalankan Production Build
```bash
npm run build
```

---

## Dokumentasi Pendukung (Folder `docs/`)

* [`docs/NEXT_STEPS_ROADMAP.md`](docs/NEXT_STEPS_ROADMAP.md): Panduan eksekusi langkah selanjutnya, peta navigasi dokumen, dan instruksi prompt untuk AI Agent.
* [`docs/PROJECT_DOCUMENTATION.md`](docs/PROJECT_DOCUMENTATION.md): Panduan menyeluruh isi proyek, struktur file, data layer, skema database Supabase, dan roadmap.
* [`docs/PANDUAN_DATA_ASLI.md`](docs/PANDUAN_DATA_ASLI.md): Checklist dan panduan teknis memasukkan foto asli armada dan daftar tarif resmi dari orang tua.
* [`docs/DESIGN.md`](docs/DESIGN.md): Pedoman sistem desain Clean & Modern Architectural Catalog, dial Anti-AI Slop, palet warna, dan tipografi.
* [`docs/PRD.md`](docs/PRD.md): Product Requirement Document awal untuk arsitektur fitur dan flow website.
* [`supabase/schema.sql`](supabase/schema.sql): Skema database PostgreSQL (tabel `categories`, `products`, `product_variants`).
* [`supabase/seed.sql`](supabase/seed.sql): Data awal katalog produk dan varian.

---

Hak Cipta © 2026 Teratak Andika Raja. Dilindungi undang-undang.
