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
  description: 'Hubungi admin Teratak Andika Raja via WhatsApp atau telepon. Kunjungi lokasi pangkalan operasional kami dan simak syarat ketentuan sewa.',
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-4 border-b border-[#C29B38]/20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F4EFE6] text-[#9A7422] border border-[#C29B38]/30 text-xs font-semibold">
            <Phone className="w-4 h-4 text-[#064E3B]" />
            <span>Layanan Ramah & Konsultasi Gratis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#064E3B] tracking-tight">
            Kontak & Lokasi Pangkalan
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Ingin survei lokasi pekarangan rumah, konsultasi kebutuhan tenda, atau langsung memesan jadwal? Hubungi kami kapan pun.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#C29B38]/35 shadow-xs flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] text-[#064E3B] border border-[#C29B38]/30 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-[#064E3B] text-lg">WhatsApp Pengelola</h3>
            <p className="text-xs text-stone-600">
              Respon cepat untuk tanya harga, varian slayar, dan booking tanggal.
            </p>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-[#064E3B] text-[#D4AF37] hover:bg-[#022C22] border border-[#C29B38]/50 transition-colors shadow-xs"
            >
              <span>+62 822-8490-3333</span>
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#C29B38]/35 shadow-xs flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] text-[#9A7422] border border-[#C29B38]/30 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-[#064E3B] text-lg">Pangkalan Operasional</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pangkalan Teratak Andika Raja. Siap melayani pengantaran dan pemasangan ke seluruh area sekitarnya.
            </p>
            <span className="text-xs font-semibold text-[#8C6514] bg-[#F4EFE6] px-3 py-1 rounded-md border border-[#C29B38]/30">
              Survei Lokasi Tersedia
            </span>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#C29B38]/35 shadow-xs flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] text-[#064E3B] border border-[#C29B38]/30 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-[#064E3B] text-lg">Waktu Layanan</h3>
            <p className="text-xs text-stone-600">
              Konsultasi & Chat: 07.00 - 22.00 WIB
            </p>
            <p className="text-xs text-stone-600">
              Pemasangan: Sesuai Kesepakatan (Bisa H-1)
            </p>
            <span className="text-xs font-semibold text-[#064E3B] bg-[#FAF7F2] px-3 py-1 rounded-md border border-[#C29B38]/30">
              Buka Setiap Hari (Senin - Minggu)
            </span>
          </div>

        </div>

        {/* Map & Terms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Google Maps Embed */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-[#C29B38]/35 shadow-xs space-y-4">
            <h2 className="text-lg font-heading font-bold text-[#064E3B] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#9A7422]" />
              <span>Peta Lokasi & Area Operasional</span>
            </h2>
            <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-[#F4EFE6] border border-[#C29B38]/30">
              <iframe
                title="Peta Lokasi Teratak Andika Raja"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.27415486808!2d101.3789461141368!3d0.5186259837944738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac033f7c11f7%3A0xf639ffc8f352ec77!2sPekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <Truck className="w-4 h-4 text-[#064E3B]" />
              <span>Melayani pengiriman dan pemasangan terstandar ke rumah warga, gedung, lapangan, maupun instansi.</span>
            </div>
          </div>

          {/* Terms & Conditions Summary */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-[#C29B38]/35 shadow-xs space-y-5">
            <h2 className="text-lg font-heading font-bold text-[#064E3B] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#9A7422]" />
              <span>Ketentuan & Alur Sewa</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="p-3.5 bg-[#FAF7F2] rounded-lg border border-[#C29B38]/30">
                <span className="font-heading font-bold text-[#064E3B] block mb-1">1. Pemesanan & Booking Jadwal</span>
                Disarankan memesan minimal 3-7 hari sebelum hari acara untuk memastikan ketersediaan ukuran tenda dan kombinasi warna kain slayar yang Anda kehendaki.
              </div>

              <div className="p-3.5 bg-[#FAF7F2] rounded-lg border border-[#C29B38]/30">
                <span className="font-heading font-bold text-[#064E3B] block mb-1">2. Waktu Pemasangan & Pembongkaran</span>
                Pemasangan tenda umumnya dilakukan pada H-1 menjelang acara agar Anda dapat menata dekorasi pelaminan dan meja makanan. Pembongkaran dilakukan pada H+1 atau sesuai kesepakatan.
              </div>

              <div className="p-3.5 bg-[#FAF7F2] rounded-lg border border-[#C29B38]/30">
                <span className="font-heading font-bold text-[#064E3B] block mb-1">3. Ongkos Pasang & Angkut</span>
                Biaya sewa sudah mencakup ongkos pasang dan bongkar oleh tim kami. Untuk radius tertentu dalam wilayah jangkauan, tidak dikenakan biaya tambahan.
              </div>

              <div className="p-3.5 bg-[#F4EFE6] rounded-lg border border-[#C29B38]/40 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#064E3B] shrink-0" />
                <span className="text-[#064E3B] text-xs font-semibold">
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
