# PANDUAN PENGISIAN DATA ASLI: TERATAK ANDIKA RAJA

Dokumen ini disusun sebagai lembar kerja dan checklist persiapan ketika Anda telah mengumpulkan seluruh data riil usaha (foto asli armada, ukuran tenda nyata, daftar harga resmi dari orang tua, serta ketentuan sewa).

Kapan pun Anda atau AI agent di masa depan ingin memperbarui website dengan data asli, cukup ikuti panduan langkah demi langkah di bawah ini.

---

## 1. Daftar Inventaris Data yang Masih Menggunakan Data Contoh (Dummy)

Berikut adalah seluruh komponen website yang saat ini masih menggunakan data contoh dan perlu disiapkan data aslinya:

### A. Foto & Dokumentasi Visual (Masih Menggunakan Foto Unsplash)
| Bagian Website | Lokasi File | Jumlah Foto Dibutuhkan | Format & Rasio Rekomendasi |
| :--- | :--- | :--- | :--- |
| **Foto Hero Utama Beranda** | `src/app/page.tsx` | 1 Foto | Landscape (16:10 atau 16:9), foto tenda berdiri rapi |
| **Foto Utama 5 Produk Katalog** | `src/lib/data.ts` / Supabase | 5 Foto (1 per produk) | Landscape (16:10 atau 4:3), jernih di siang/sore hari |
| **Foto Galeri Tambahan Produk** | `src/lib/data.ts` / Supabase | 2-3 Foto per produk | Detail sambungan pipa, kain plafon, varian warna |
| **Halaman Dokumentasi (/galeri)** | `src/app/galeri/page.tsx` | 6-8 Foto | Foto nyata acara warga (pernikahan, khitanan, syukuran) |

---

### B. Spesifikasi Teknis Tenda & Inventaris Barang
Periksa dan sesuaikan spesifikasi fisik dengan perlengkapan yang benar-benar dimiliki di pangkalan:

1. **Ukuran Tenda Riil:**
   - Apakah pangkalan memiliki ukuran 4x5 meter dan 4x6 meter, atau ada ukuran lain (misal: 3x4 meter, 4x8 meter, 5x6 meter)?
   - Apakah tenda bisa disambung/digandeng menjadi lorong panjang?
2. **Kain Plafon & Slayar:**
   - Apa saja pilihan warna kain slayar yang tersedia (contoh: Putih-Emas, Putih-Hijau Lumut, Merah-Putih, Silver-Biru)?
   - Apakah melayani plafon polos (terpal tanpa kain hias)?
3. **Konstruksi Rangka:**
   - Bahan rangka: Pipa besi galvanis anti-karat diameter berapa inch?
   - Tinggi tiang dari tanah ke ujung kanopi (misal: 3.2 meter).
4. **Pentas Panggung & Perlengkapan Duduk:**
   - Dimensi panggung (misal: modul 3x4 meter, multipleks 18 mm, ketinggian 50 cm / 80 cm).
   - Jumlah stok kursi (kursi plastik Napolly vs kursi futura besi busa).
   - Meja: Meja kotak panjang atau meja bulat prasmanan.
5. **Fasilitas Tambahan yang Masuk Paket:**
   - Apakah sewa tenda sudah otomatis include kabel listrik, fitting lampu LED, dan jasa pasang-bongkar?

---

### C. Daftar Tarif Sewa (Diskusi dengan Orang Tua)
Saat ini angka harga disembunyikan (*"Tarif Sewa: Hubungi Pengelola"*). Siapkan tabel tarif resmi berikut:

| Item / Varian | Ukuran | Tarif Resmi (Rp / hari) | Satuan |
| :--- | :--- | :--- | :--- |
| **Teratak Standar (Plafon Polos)** | 4x5 Meter | *[isi angka]* | per unit/hari |
| **Teratak Semi Dekorasi (Full Slayar)** | 4x5 Meter | *[isi angka]* | per unit/hari |
| **Teratak Standar (Plafon Polos)** | 4x6 Meter | *[isi angka]* | per unit/hari |
| **Teratak Semi Dekorasi (Full Slayar)** | 4x6 Meter | *[isi angka]* | per unit/hari |
| **Pentas Panggung Karpet Merah** | 3x4 Meter | *[isi angka]* | per set/hari |
| **Kursi Futura + Cover Ketat** | Standar | *[isi angka]* | per unit/hari |
| **Kursi Plastik Tanpa Cover** | Standar | *[isi angka]* | per unit/hari |
| **Meja Prasmanan + Taplak** | Standar | *[isi angka]* | per unit/hari |
| **Paket Lengkap Resepsi Rumah** | 3 Teratak + Panggung + Kursi | *[isi angka]* | per paket/hari |

---

### D. Ketentuan Sewa & SOP Usaha
Konfirmasi hal-hal operasional ini dengan orang tua:
1. **Uang Muka (DP):** Apakah memerlukan DP 30% untuk mengunci tanggal acara, atau bisa pelunasan saat tenda selesai didirikan?
2. **Radius Pengantaran & Transport:** Apakah area seluruh Kota Subulussalam gratis ongkos kirim dan bongkar pasang, atau ada batas jarak kilometer tertentu?
3. **Ketentuan Cuaca / Pembatalan:** Batas waktu pemberitahuan jika acara dimajukan/diundur.
4. **Jam Konsultasi & Pemasangan:** Kapan biasanya tim mulai memasang tenda (misal: H-1 pagi/sore hari sebelum acara).

---

## 2. Cara Eksekusi Penggantian Data

### Langkah 1: Memasukkan File Foto Asli
1. Kumpulkan file foto asli dari kamera HP atau fotografer acara.
2. Buat folder baru di proyek: `public/images/produk/` dan `public/images/galeri/`.
3. Beri nama file yang rapi tanpa spasi, contoh:
   - `public/images/produk/teratak-4x5-putih-emas.jpg`
   - `public/images/produk/teratak-4x6-lapangan.jpg`
   - `public/images/produk/panggung-pelaminan-3x4.jpg`
   - `public/images/galeri/acara-penanggalan-1.jpg`
4. Di file kode, ganti URL Unsplash dengan path lokal tersebut (contoh: `featured_image_url: '/images/produk/teratak-4x5-putih-emas.jpg'`).
5. *Alternatif Cloud:* Anda juga bisa mengunggah foto langsung ke bucket storage Supabase dan menggunakan public URL-nya.

### Langkah 2: Memperbarui Data Produk & Harga di Supabase / `src/lib/data.ts`
Ada 2 cara praktis:
* **Cara A (Dashboard Supabase):** Buka dashboard project Supabase Anda (`nyaaadkrenyrktwghvry`). Masuk ke menu Table Editor:
  - Buka tabel `product_variants` -> Isi kolom `base_price` dengan angka rupiah yang telah disepakati.
  - Buka tabel `products` -> Perbarui kolom `description` atau `featured_image_url`.
* **Cara B (File Lokal `src/lib/data.ts`):** Perbarui nilai `base_price` pada array `INITIAL_PRODUCTS`.

### Langkah 3: Mengaktifkan Kembali Tampilan Angka Harga
Ketika daftar harga sudah siap ditampilkan kepada publik di web:
1. Di `src/components/catalog/ProductCard.tsx`: Kembalikan baris tampilan harga agar membaca nilai `formatRupiah(lowestPrice)`.
2. Di `src/components/catalog/ProductDetailInteractive.tsx`: Kembalikan nilai harga aktif `formatRupiah(selectedVariant.base_price)` dan ubah status menjadi *"Tarif Resmi Per Unit/Hari"*.

---

## 3. Checklist Eksekusi Mandiri

Salin dan centang checklist ini saat eksekusi dimulai:

- [ ] Wawancara orang tua mengenai dimensi pasti tenda yang tersedia.
- [ ] Dapatkan daftar tarif resmi sewa per unit/hari untuk setiap tipe teratak & panggung.
- [ ] Kumpulkan minimal 5-10 foto asli pemasangan tenda di Subulussalam.
- [ ] Masukkan file foto ke folder `public/images/` atau Supabase Storage.
- [ ] Perbarui tabel `product_variants` di Supabase dengan tarif resmi.
- [ ] Aktifkan kembali penampil angka harga di `ProductCard` dan `ProductDetailInteractive`.
- [ ] Sesuaikan teks Syarat & Ketentuan di `src/app/kontak/page.tsx`.
- [ ] Jalankan `npm run build` dan push ke GitHub `main` untuk auto-deploy ke Vercel.
