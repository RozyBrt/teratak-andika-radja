# PRODUCT REQUIREMENT DOCUMENT (PRD)

| Metadata | Keterangan |
| :--- | :--- |
| **Project Name** | Website Profil Usaha & Katalog Interaktif Penyewaan Teratak |
| **Brand / Client** | Teratak Andika Raja |
| **Doc Version** | 1.0.0 |
| **Author** | Senior Product Manager |
| **Target MVP Release** | 4–6 Minggu Pengerjaan |
| **Tech Stack** | Next.js (App Router), Tailwind CSS, TypeScript, Supabase |

---

## 1. Product Overview

### 1.1 Latar Belakang
**Teratak Andika Raja** adalah bisnis jasa penyewaan perlengkapan acara (*event equipment rental*), yang mencakup teratak (tenda), pentas (panggung), kursi, meja, dan perlengkapan dekorasi pendukung lainnya. Saat ini operasional promosi dan penjualan masih bersifat konvensional dan sangat bergantung pada jaringan kenalan serta rekomendasi mulut ke mulut (*word-of-mouth*).

Ketergantungan ini membatasi skalabilitas bisnis di area sekitar. Calon penyewa sering kali harus bertanya berulang-ulang melalui telepon atau obrolan WhatsApp mengenai ketersediaan ukuran tenda, jenis kain/slayar, jumlah kursi, estimasi harga, hingga contoh dokumentasi terpasang. Hal ini menimbulkan inefisiensi komunikasi bagi pemilik usaha dan friksi bagi calon pelanggan.

### 1.2 Masalah yang Diselesaikan (Problem Statement)
1. **Keterbatasan Jangkauan Pasar:** Bisnis kesulitan menjangkau pelanggan baru di luar lingkaran relasi pribadi karena belum memiliki kehadiran digital (*digital presence*) yang kredibel dan mudah dicari.
2. **Friksi Informasi (Information Asymmetry):** Calon pelanggan kesulitan mengetahui variasi spesifikasi (misal: ukuran tenda $4 \times 4\text{ m}$, $4 \times 5\text{ m}$, varian slayar/plafon polos, kapasitas kursi) dan perkiraan bujet sebelum menghubungi pemilik.
3. **Beban Komunikasi Manual:** Pemilik usaha menghabiskan waktu menjawab pertanyaan dasar yang berulang di WhatsApp terkait ukuran, ketersediaan katalog foto, dan harga dasar.

### 1.3 Value Proposition
* **Bagi Calon Pelanggan:** Akses instan dan transparan ke katalog lengkap perlengkapan pesta dengan rincian spesifikasi, varian dekorasi, estimasi harga, dan portofolio pemasangan nyata yang dapat diakses kapan pun via ponsel pintar.
* **Bagi Teratak Andika Raja:** Saluran akuisisi pelanggan otomatis yang meningkatkan kredibilitas bisnis, memperluas jangkauan wilayah layanan, dan menyaring *leads* (calon penyewa) yang masuk ke WhatsApp agar sudah membawa spesifikasi kebutuhan yang jelas.

---

## 2. Target Audience

### 2.1 Persona Pengguna

#### Persona 1: Tuan Rumah Acara Keluarga (B2C)
* **Profil:** Ibu Rumah Tangga / Kepala Keluarga (Usia 28–55 tahun).
* **Kebutuhan:** Mengadakan hajatan (pernikahan, khitanan, syukuran, aqiqah, arisan keluarga, takziah) di pekarangan atau jalan depan rumah.
* **Pain Points:** 
  * Bingung menentukan ukuran tenda yang cocok dengan luas pekarangan.
  * Ingin melihat contoh estetika (warna tenda, model slayar/kain dekorasi).
  * Takut ada biaya tersembunyi (*hidden fees*).
* **Device Behavior:** $90\%+$ mengakses melalui *smartphone* (Android/iOS) dan terbiasa berkomunikasi via WhatsApp.

#### Persona 2: Panitia Acara / Event Organizer / Komunitas (B2B)
* **Profil:** Sekretaris panitia acara, pengurus RT/RW, ormas, sekolah, atau instansi kantor lokal.
* **Kebutuhan:** Sewa tenda serbaguna, pentas/panggung upacara/hiburan, dan puluhan hingga ratusan kursi dengan jadwal pengantaran yang terikat waktu.
* **Pain Points:** Membutuhkan transparansi spesifikasi teknis (dimensi pentas, kapasitas beban, jenis kursi) serta kecepatan mendapatkan penawaran untuk estimasi bujet anggaran.

---

## 3. User Flow / User Journey

```
[Pengunjung Masuk ke Homepage]
           │
           ▼
[Eksplorasi Katalog Interaktif]
           │
           ├── Filter Kategori (Teratak, Pentas, Kursi, Meja, dll.)
           └── Pilih Item & Lihat Detail (Ukuran, Varian Slayar, Spek, Foto, Harga)
           │
           ▼
[Pilih Spesifikasi / Varian yang Diinginkan]
           │
           ▼
[Klik CTA Utama: "Tanya Ketersediaan / Sewa via WhatsApp"]
           │
           ▼
[Sistem Membuat URL WhatsApp dengan Pre-filled Message Otomatis]
           │
           ▼
[Terbuka Aplikasi WhatsApp ke Admin dengan Rincian Kebutuhan Lengkap]
```

### Langkah Rinci Alur Pengguna:
1. **Entry:** Pengguna membuka tautan website melalui bio media sosial, Google Search/Maps, atau pesan sebaran.
2. **Discovery:** Pengguna disambut oleh *Hero Section* yang menampilkan identitas usaha, keunggulan layanan, area jangkauan, dan tombol langsung ke Katalog.
3. **Filtering & Exploration:** Pengguna memilih kategori (misal: "Teratak"), memilih dimensi (misal: $4 \times 5\text{ m}$), dan memilih varian (misal: "Dengan Slayar Dekorasi").
4. **Detail Inspection:** Pengguna melihat foto riil pemasangan, fasilitas bawaan (terpal anti-bocor, tiang kokoh, rumbai), dan rincian harga per unit/hari.
5. **Conversion Action:** Pengguna menekan tombol **"Konsultasi / Sewa via WhatsApp"**. Sistem membuka WhatsApp admin dengan pesan otomatis:
   > *"Halo Teratak Andika Raja, saya melihat website Anda dan tertarik menyewa Teratak ukuran 4x5 meter (Varian: Pakai Slayar). Apakah tersedia untuk tanggal [isi tanggal] di daerah [isi lokasi acara]?"*

---

## 4. Functional Requirements (Fitur)

Fitur diprioritaskan menggunakan metode MoSCoW (*Must-Have* untuk MVP, *Nice-to-Have* untuk rilis lanjutan).

### 4.1 Prioritas 1: Minimum Viable Product (MVP)

| ID | Modul | Fitur | Deskripsi Kebutuhan |
| :--- | :--- | :--- | :--- |
| **FR-01** | Landing Page | **Hero & Profil Usaha** | Menampilkan nama "Teratak Andika Raja", slogan, keunggulan utama (rapi, kokoh, tepat waktu), dan cakupan area operasional. |
| **FR-02** | Katalog | **Filter Kategori Produk** | Filter berbasis kategori: *Teratak*, *Pentas/Panggung*, *Kursi*, *Meja & Perlengkapan*, *Paket Bundling*. |
| **FR-03** | Katalog | **Kartu Produk Interaktif** | Kartu item menampilkan gambar utama, nama item, dimensi/ukuran, label varian, dan indikator harga (misal: "Mulai dari Rp XXX.XXX"). |
| **FR-04** | Detail Produk | **Selektor Varian & Dimensi** | Pengguna dapat memilih opsi varian (misal: Dimensi $4 \times 4$, $4 \times 5$; Varian Plafon Polos / Pakai Slayar) yang secara reaktif memperbarui foto dan harga. |
| **FR-05** | Detail Produk | **Spesifikasi & Fasilitas** | Menampilkan rincian teknis: tinggi tiang, bahan terpal, ketersediaan rumbai, dan instruksi pemasangan. |
| **FR-06** | Galeri | **Portofolio Terpasang** | Galeri visual dokumentasi acara riil yang telah selesai dikerjakan untuk membangun bukti sosial (*social proof*). |
| **FR-07** | Konversi | **WhatsApp Generator CTA** | Tombol mengambang (*floating button*) dan tombol di setiap halaman produk yang memicu tautan `wa.me` dengan pesan otomatis terisi sesuai item yang dipilih. |
| **FR-08** | Kontak & Lokasi | **Informasi Usaha & Peta** | Nomor telepon admin, alamat fisik/pangkalan, sematan Google Maps (*embed*), dan ringkasan syarat & ketentuan sewa. |

### 4.2 Prioritas 2: Nice-to-Have (Fase 2 / Pengembangan Lanjutan)

| ID | Modul | Fitur | Deskripsi Kebutuhan |
| :--- | :--- | :--- | :--- |
| **FR-09** | Estimator | **Interactive Cost Calculator** | Pengguna dapat memilih beberapa barang sekaligus ke keranjang simulasi (misal: 2 Tenda $4 \times 5$ + 100 Kursi Futura + 1 Pentas $3 \times 4$) dan melihat estimasi total bujet sebelum menghubungi admin. |
| **FR-10** | Ketersediaan | **Kalender Ketersediaan (Date Picker)** | Fitur pengecekan ketersediaan jadwal tanggal untuk meminimalkan potensi jadwal ganda (*double booking*). |
| **FR-11** | Admin CMS | **Backoffice via Supabase** | Antarmuka dashboard terlindungi kata sandi bagi pemilik usaha untuk mengubah harga, menambah foto, atau menyembunyikan item yang habis. |
| **FR-12** | Social Proof | **Review & Rating Pengguna** | Ulasan terverifikasi dan testimoni klien sebelumnya langsung pada halaman situs. |

---

## 5. Non-Functional Requirements (NFR)

### 5.1 Performa (Performance)
* **Core Web Vitals:** 
  * Largest Contentful Paint (LCP) $\le 2.0$ detik pada koneksi 4G seluler rata-rata.
  * Cumulative Layout Shift (CLS) $\le 0.05$.
  * First Input Delay (FID) / Interaction to Next Paint (INP) $\le 100\text{ ms}$.
* **Image Optimization:** Menggunakan komponen bawaan `next/image` dengan format WebP/AVIF otomatis, *lazy loading*, dan *responsive sizing* untuk menghemat konsumsi kuota pengguna.

### 5.2 Responsivitas & UX (Mobile-First)
* Antarmuka dioptimalkan secara ketat untuk layar $360\text{ px} - 430\text{ px}$ (standar ponsel cerdas) hingga monitor desktop.
* Ukuran target sentuh (*hit target*) tombol penting dan CTA minimal $44 \times 44\text{ px}$.

### 5.3 Keamanan (Security)
* Seluruh lalu lintas data diwajibkan menggunakan protokol aman HTTPS/SSL.
* Sanitasi input pada parameter URL dan komponen pencarian katalog untuk mencegah celah keamanan XSS (*Cross-Site Scripting*).
* Akses database Supabase dilindungi aturan *Row Level Security* (RLS) serta pembatasan variabel lingkungan (`.env.local`).

### 5.4 Search Engine Optimization (Local SEO)
* Penerapan **Structured Data / JSON-LD** tipe `LocalBusiness` / `RentalService` agar mudah terindeks pada pencarian lokal Google dan Google Maps.
* OpenGraph & Twitter Card dinamis pada setiap halaman detail produk sehingga ketika tautan dibagikan ke WhatsApp, muncul gambar, judul, dan deskripsi produk yang rapi.

---

## 6. Rekomendasi Tech Stack & Arsitektur

Arsitektur aplikasi dirancang agar memiliki waktu muat cepat, biaya operasional gratis/minimal pada fase awal, dan mudah dikelola tanpa infrastruktur server yang kompleks.

```
       [ Client Browser (Mobile & Desktop) ]
                        │
                        ▼
       [ Next.js App Router (Hosted on Vercel) ]
        ├── React Server Components (SSG / ISR for SEO)
        ├── Client Components (Filter Interaktif & State)
        └── Tailwind CSS (Sistem Desain Responsif)
                        │
                        ▼
              [ Supabase Backend ]
        ├── PostgreSQL (Data Katalog, Varian, Harga)
        ├── Supabase Storage (Bucket Foto Tenda & Acara)
        └── Row Level Security (RLS)
                        │
                        ▼
       [ WhatsApp API Deep Link (wa.me) ]
```

### 6.1 Rincian Komponen Teknologi:
* **Frontend Framework:** **Next.js (App Router)**  
  Menyediakan *Static Site Generation* (SSG) dan *Incremental Static Regeneration* (ISR) agar halaman katalog terindeks cepat oleh search engine, dipadukan dengan *Client Components* untuk interaktivitas filter.
* **Styling:** **Tailwind CSS**  
  Mempercepat penataan tampilan yang konsisten, berbobot ringan, dan sepenuhnya mendukung *mobile-first approach*.
* **Database & Penyimpanan Media:** **Supabase**  
  *PostgreSQL* untuk data terstruktur (produk, varian, kategori) dan *Supabase Storage* untuk menyimpan aset foto beresolusi tinggi dengan CDN global.
* **Hosting & CI/CD:** **Vercel**  
  Menyediakan integrasi langsung dengan repositori Git, *Edge Network* berlatensi rendah untuk wilayah Indonesia, dan sertifikasi SSL otomatis.

### 6.2 Skema Database Relasional (Supabase / PostgreSQL)

```sql
-- 1. Tabel Kategori Produk
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabel Produk Utama
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    featured_image_url TEXT NOT NULL,
    gallery_urls TEXT[] DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabel Varian Produk (Dimensi, Slayar, dan Harga)
CREATE TABLE product_variants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    variant_name VARCHAR(100) NOT NULL, -- Contoh: 'Ukuran 4x5 - Tanpa Slayar'
    dimension VARCHAR(50),               -- Contoh: '4x5 Meter'
    has_slayar BOOLEAN DEFAULT FALSE,
    base_price NUMERIC(12, 2),          -- Harga dasar sewa
    price_unit VARCHAR(30) DEFAULT 'hari',
    is_available BOOLEAN DEFAULT TRUE
);
```

---

## 7. Success Metrics (Key Performance Indicators)

Evaluasi efektivitas produk akan diukur setelah 3 bulan pertama pasca-peluncuran:

### 7.1 Business Metrics
* **Pertumbuhan Calon Pelanggan Baru (*Inbound Leads*):** Peningkatan $\ge 30\%$ pesan masuk dari pelanggan di luar lingkaran kenalan lama.
* **Efisiensi Pertanyaan Masuk (*Inquiry Quality*):** $\ge 60\%$ calon pelanggan yang masuk via WhatsApp menggunakan format pesan otomatis yang sudah menyertakan rincian produk yang diinginkan.
* **Tingkat Konversi Pengunjung ke WhatsApp (*Click-to-WhatsApp Rate*):** Mencapai $\ge 4\%$ dari total kunjungan web.

### 7.2 Product & Technical Metrics
* **Skor Google PageSpeed Mobile:** $\ge 90$ untuk performa, aksesibilitas, dan SEO.
* **Tingkat Pentalan (*Bounce Rate*):** Di bawah $45\%$ pada halaman katalog utama.
* **Rata-rata Durasi Sesi (*Session Duration*):** $\ge 1.5\text{ menit}$ per sesi kunjungan.

---

## 8. Rencana Implementasi & Roadmap Pengembangan

```
Sprint 1 (Minggu 1): Perencanaan & Desain UI/UX
  ├── Pengumpulan data taksonomi (daftar ukuran tenda, jenis slayar, tarif kursi)
  ├── Pembuatan Wireframe Mobile-First (Home, Katalog, Detail)
  └── Inisialisasi Repositori Next.js, Tailwind CSS, & Proyek Supabase

Sprint 2 (Minggu 2): Setup Backend & Komponen Dasar
  ├── Implementasi skema tabel PostgreSQL dan bucket Storage di Supabase
  ├── Pengisian data awal (seed catalog data)
  └── Slicing komponen layout (Navbar, Footer, Hero Banner, Filter Chips)

Sprint 3 (Minggu 3): Fitur Katalog Interaktif & Konversi
  ├── Pengembangan halaman katalog dengan filter kategori dan seleksi varian
  ├── Pembuatan logika generator pesan otomatis WhatsApp (`wa.me`)
  └── Halaman portofolio galeri terpasang

Sprint 4 (Minggu 4): SEO Lokal, Pengujian, & Deployment
  ├── Konfigurasi Schema JSON-LD `LocalBusiness` & Dynamic OpenGraph Tags
  ├── Pengujian responsivitas pada berbagai resolusi perangkat seluler
  └── Deployment produksi ke platform Vercel & integrasi domain kustom
```
