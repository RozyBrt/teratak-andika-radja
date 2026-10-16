import type { Metadata } from 'next';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileText, 
  MessageSquare,
  Truck
} from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Kontak & Lokasi Pangkalan: Teratak Andika Raja',
  description: 'Hubungi admin Teratak Andika Raja via WhatsApp atau telepon. Kunjungi lokasi pangkalan operasional kami di Kota Subulussalam dan simak syarat ketentuan sewa.',
};

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 pb-4 border-b border-zinc-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-semibold">
            <Phone className="w-3.5 h-3.5 text-zinc-700" />
            <span>Layanan Ramah & Konsultasi Gratis</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Kontak & Lokasi Pangkalan
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Ingin survei lokasi pekarangan rumah, konsultasi kebutuhan ukuran tenda, atau langsung memesan jadwal? Hubungi kami kapan pun.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs flex flex-col items-center text-center space-y-2.5">
            <div className="w-11 h-11 rounded-lg bg-zinc-50 text-zinc-900 border border-zinc-200 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-zinc-950 text-base">WhatsApp Pengelola</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Respon cepat untuk tanya harga, varian slayar, dan booking tanggal acara.
            </p>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-2xs"
            >
              <span>+62 822-8490-3333</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs flex flex-col items-center text-center space-y-2.5">
            <div className="w-11 h-11 rounded-lg bg-zinc-50 text-zinc-900 border border-zinc-200 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-zinc-700" />
            </div>
            <h3 className="font-bold text-zinc-950 text-base">Pangkalan Operasional</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Jl. Teuku Umar, Penanggalan, Kec. Penanggalan, Kota Subulussalam, Aceh 24782.
            </p>
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              Survei Lokasi & Antar Area Subulussalam
            </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs flex flex-col items-center text-center space-y-2.5">
            <div className="w-11 h-11 rounded-lg bg-zinc-50 text-zinc-900 border border-zinc-200 flex items-center justify-center">
              <Clock className="w-5 h-5 text-zinc-700" />
            </div>
            <h3 className="font-bold text-zinc-950 text-base">Waktu Layanan</h3>
            <p className="text-xs text-zinc-600">
              Konsultasi & Chat: 07.00 - 22.00 WIB
            </p>
            <p className="text-xs text-zinc-600">
              Pemasangan: Sesuai Kesepakatan (Bisa H-1)
            </p>
            <span className="text-[11px] font-semibold text-zinc-700 bg-zinc-100 px-2.5 py-0.5 rounded-md border border-zinc-200">
              Buka Setiap Hari (Senin - Minggu)
            </span>
          </div>

        </div>

        {/* Map & Terms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Google Maps Embed */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-3.5">
            <h2 className="text-base font-bold text-zinc-950 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-700" />
              <span>Peta Lokasi & Area Operasional Subulussalam</span>
            </h2>
            <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200">
              <iframe
                title="Peta Lokasi Teratak Andika Raja - Subulussalam Aceh"
                src="https://maps.google.com/maps?q=J2H9%2BWH6%2C+Jl.+Teuku+Umar%2C+Penanggalan%2C+Kec.+Penanggalan%2C+Kota+Subulussalam%2C+Aceh+24782&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-600">
              <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Melayani pengiriman dan pemasangan terstandar ke rumah warga, gedung, lapangan, maupun instansi di Kota Subulussalam dan sekitarnya.</span>
            </div>
          </div>

          {/* Terms & Conditions Summary */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-4">
            <h2 className="text-base font-bold text-zinc-950 flex items-center gap-2">
              <FileText className="w-4 h-4 text-zinc-700" />
              <span>Ketentuan & Alur Sewa</span>
            </h2>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200">
                <span className="font-bold text-zinc-900 block mb-1">1. Pemesanan & Booking Jadwal</span>
                Disarankan memesan minimal 3-7 hari sebelum hari acara untuk memastikan ketersediaan ukuran tenda dan kombinasi warna kain slayar yang Anda kehendaki.
              </div>

              <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200">
                <span className="font-bold text-zinc-900 block mb-1">2. Waktu Pemasangan & Pembongkaran</span>
                Pemasangan tenda umumnya dilakukan pada H-1 menjelang acara agar Anda dapat menata pelaminan dan meja makanan. Pembongkaran dilakukan pada H+1 atau sesuai kesepakatan.
              </div>

              <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200">
                <span className="font-bold text-zinc-900 block mb-1">3. Ongkos Pasang & Angkut</span>
                Biaya sewa sudah mencakup ongkos pasang dan bongkar oleh tim kami. Untuk radius tertentu dalam wilayah Subulussalam, tidak dikenakan biaya tambahan.
              </div>

              <div className="p-3.5 bg-emerald-50/50 rounded-lg border border-emerald-200 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-emerald-900 text-xs font-medium">
                  Seluruh peralatan dalam kondisi bersih dan dicek kekuatannya bersama saat serah terima.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
