# NEXT STEPS ROADMAP : PANDUAN EKSEKUSI TERATAK ANDIKA RAJA

Dokumen ini adalah **Peta Navigasi Utama (Master Action Plan)** untuk pemilik usaha dan AI Coding Agent. Dokumen ini merangkum status proyek saat ini, memetakan seluruh file dokumentasi yang ada, dan menyusun urutan prioritas eksekusi yang jelas agar Anda tidak bingung harus mulai dari mana.

---

## 1. Indeks & Fungsi File Dokumentasi Proyek

Gunakan tabel ini sebagai panduan cepat ketika mencari referensi tertentu:

| Nama File | Peran & Kapan Harus Dibaca |
| :--- | :--- |
| **[`NEXT_STEPS_ROADMAP.md`](./NEXT_STEPS_ROADMAP.md)** *(File Ini)* | **Pintu masuk utama.** Baca ini terlebih dahulu untuk menentukan urutan tugas dan instruksi eksekusi langkah demi langkah. |
| **[`PROJECT_DOCUMENTATION.md`](./PROJECT_DOCUMENTATION.md)** | **Buku manual teknis lengkap.** Baca jika ingin memahami arsitektur Next.js App Router, skema database Supabase, layer data hybrid, SEO, dan struktur kode. |
| **[`DESIGN.md`](./DESIGN.md)** | **Pedoman visual & estetika.** Wajib dibaca sebelum mengedit antarmuka (UI) untuk menjaga tema *Clean & Modern Architectural Catalog* dan kepatuhan aturan *Anti-AI Slop*. |
| **[`PANDUAN_DATA_ASLI.md`](./PANDUAN_DATA_ASLI.md)** | **Checklist data nyata usaha.** Baca ketika Anda sudah siap memasukkan foto armada tenda asli dan daftar tarif harga resmi dari orang tua. |
| **[`README.md`](./README.md)** | **Ringkasan cepat repository.** Untuk instalasi dependensi, konfigurasi `.env.local`, dan menjalankan server lokal. |
| **[`product_requirement_document_...md`](./product_requirement_document_teratak_andika_raja.md)** | **PRD dasar.** Berisi analisis kebutuhan pengguna, target audiens (B2C & B2B), dan daftar kebutuhan fungsional (FR-01 s/d FR-11). |

---

## 2. Status Proyek Saat Ini (Kondisi Terkini - 100% Selesai & Stabil)

* **Status Publikasi:** Sudah live di production: [https://teratak-andika-radja.vercel.app](https://teratak-andika-radja.vercel.app).
* **Tema Visual:** *Clean & Modern Architectural Catalog* (putih gading lembut `#FBFBFA`, tipografi tegas *Plus Jakarta Sans*, bingkai arsitektural 1px, tanpa ornamen AI slop).
* **Branding:** Logo resmi emblem emas-navy terpasang di favicon, thumbnail share link WhatsApp (*OpenGraph*), navbar, dan footer.
* **Integrasi Database:** Supabase Cloud aktif dengan fallback otomatis ke `src/lib/data.ts`.
* **Lokasi & Kontak:** Peta Google Maps presisi ke pangkalan Jl. Teuku Umar, Penanggalan, Subulussalam.
* **Status Harga:** Disembunyikan secara profesional (*"Tarif Sewa: Hubungi Pengelola"*) sambil menunggu diskusi tarif dengan orang tua.
* **Skor Google PageSpeed Mobile (Grade A):**
  * ⚡ **Performa:** `97 / 100`
  * ♿ **Aksesibilitas:** `96 / 100`
  * 🛡️ **Praktik Terbaik:** `100 / 100`
  * 🔍 **SEO:** `100 / 100`

---

## 3. Urutan Prioritas Eksekusi (Roadmap Aksi Nyata)

Agar Anda tidak bingung menentukan mana yang harus dikerjakan terlebih dahulu, berikut adalah **3 Fase Eksekusi Bertahap**:

```
[FASE 1: Fitur Nilai Tambah] ──▶ [FASE 2: Migrasi Data Asli] ──▶ [FASE 3: Fitur Lanjutan]
Kalkulator Simulasi Sewa (FR-09)      Foto Armada & Tarif Resmi (FR-03)     Kalender Booking (FR-10) & CMS (FR-11)
```

---

### FASE 1: Fitur Nilai Tambah : Kalkulator Simulasi Biaya Sewa (FR-09)
> **Tingkat Prioritas: TINGGI (Dapat dikerjakan langsung kapan saja tanpa menunggu data riil)**

#### Mengapa Ini yang Pertama?
Fitur ini membuat website Anda jauh lebih interaktif dan bermanfaat bagi calon penyewa. Calon penyewa bisa meracik sendiri kebutuhan acara mereka (misal: berapa unit tenda + berapa kursi + panggung + berapa hari), melihat rangkuman kebutuhan, lalu mengirimkannya dalam format teks rapi ke WhatsApp Anda.

#### Apa yang Akan Dibuat?
1. **Halaman / Komponen Kalkulator:**
   - Pemilih jumlah tenda (misal: 1, 2, atau 3 unit ukuran 4x5 atau 4x6).
   - Pemilih fasilitas tambahan (jumlah kursi futura/plastik, pentas panggung, kipas blower, lampu).
   - Input durasi sewa (1 hari, 2 hari, atau lebih).
2. **Kalkulasi Estimasi:**
   - Menghitung perkiraan sementara atau merangkum daftar item yang dipilih.
3. **Tombol "Kirim Rincian ke WhatsApp":**
   - Menghasilkan format pesan otomatis:
     ```
     Halo Teratak Andika Raja, saya ingin meminta penawaran sewa dengan rincian berikut:
     - 2 Unit Teratak 4x6 Meter (Full Slayar)
     - 1 Unit Pentas Panggung 3x4 Meter
     - 100 Unit Kursi Futura + Cover
     - Durasi Acara: 2 Hari
     Lokasi: [Isi Lokasi di Subulussalam]
     Mohon info ketersediaan dan total estimasi biayanya. Terima kasih.
     ```

#### File Acuan untuk Fase Ini:
* Pelajari komponen interaktif di [`src/components/catalog/ProductDetailInteractive.tsx`](./src/components/catalog/ProductDetailInteractive.tsx).
* Pastikan gaya visual mematuhi [`DESIGN.md`](./DESIGN.md) (Clean & Modern).

---

### FASE 2: Pengisian Data Riil Usaha (Foto & Tarif Resmi)
> **Tingkat Prioritas: TINGGI (Dikerjakan setelah berdiskusi santai dengan orang tua)**

#### Apa yang Perlu Dikerjakan?
1. Menanyakan ukuran tenda yang dimiliki di pangkalan (4x5, 4x6, atau ukuran lain).
2. Menanyakan daftar tarif sewa per unit/hari yang disepakati untuk setiap barang.
3. Mengumpulkan minimal 5-10 foto asli pemasangan tenda di Subulussalam.
4. Memasukkan file foto ke folder `public/images/` atau Supabase Storage.
5. Mengaktifkan kembali tampilan angka harga di kartu produk dan halaman detail.

#### File Acuan untuk Fase Ini:
* **Ikuti panduan lengkap dan checklist di [`PANDUAN_DATA_ASLI.md`](./PANDUAN_DATA_ASLI.md).** Seluruh langkah teknis dari cara unggah foto hingga mengaktifkan harga sudah tertulis lengkap di sana.

---

### FASE 3: Penyempurnaan Fitur Lanjutan (Opsional / Jangka Menengah)
> **Tingkat Prioritas: MENENGAH (Dilakukan jika operasional sewa semakin ramai)**

1. **FR-10: Date Picker Kalender Cek Ketersediaan Tanggal Sewa:**
   - Menampilkan kalender interaktif untuk memilih tanggal acara dan memvalidasi apakah tanggal tersebut masih kosong atau sudah ter-booking.
2. **FR-11: CMS Dashboard Admin Internal Sederhana:**
   - Halaman login privat (`/admin`) bagi pengelola untuk menambah foto dokumentasi baru atau mengubah harga sewa secara mandiri lewat HP tanpa membuka Supabase.

---

## 4. Cara Menjalankan Eksekusi Bersama AI Coding Agent

Ketika Anda membuka kembali sesi obrolan baru bersama asisten AI (Antigravity atau AI lainnya), Anda tidak perlu menjelaskan semuanya dari awal. Cukup berikan instruksi singkat seperti berikut:

### Contoh Prompt untuk Memulai Fase 1 (Kalkulator Sewa):
> *"Halo, tolong baca file `NEXT_STEPS_ROADMAP.md` bagian FASE 1. Kita ingin mengerjakan fitur Kalkulator Simulasi Biaya Sewa (FR-09). Tetap patuhi pedoman visual di `DESIGN.md`. Buatkan rencana dan implementasinya."*

### Contoh Prompt untuk Memulai Fase 2 (Memasukkan Data Asli):
> *"Halo, saya sudah memiliki foto armada tenda asli dan daftar harga resmi dari orang tua. Tolong baca file `PANDUAN_DATA_ASLI.md` dan `NEXT_STEPS_ROADMAP.md` bagian FASE 2, lalu bantu saya memperbarui datanya ke website."*

---

## 5. Ringkasan Singkat: Apa yang Harus Anda Lakukan Sekarang?

1. **Jika ingin santai sejenak:** Website Anda saat ini sudah sangat bagus, cepat (PageSpeed 97), dan aman dibagikan ke keluarga atau calon pelanggan.
2. **Jika ingin melanjutkan coding sekarang:** Mulailah dari **FASE 1 (Kalkulator Simulasi Biaya Sewa FR-09)**.
3. **Jika orang tua sudah memberikan daftar harga:** Langsung buka **FASE 2 (`PANDUAN_DATA_ASLI.md`)**.
