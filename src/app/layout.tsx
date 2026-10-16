import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#064e3b",
};

export const metadata: Metadata = {
  title: "Teratak Andika Raja: Sewa Teratak, Pentas & Perlengkapan Pesta",
  description: "Jasa penyewaan teratak tenda, pentas panggung, kursi, dan perlengkapan hajatan pesta terpercaya. Rapi, kokoh, transparan, dan tepat waktu.",
  keywords: [
    "sewa teratak",
    "sewa tenda pernikahan",
    "sewa pentas panggung",
    "sewa kursi futura",
    "teratak andika raja",
    "tenda pesta",
    "tenda slayar melayu"
  ],
  authors: [{ name: "Teratak Andika Raja" }],
  openGraph: {
    title: "Teratak Andika Raja: Sewa Teratak & Perlengkapan Pesta",
    description: "Katalog lengkap sewa tenda teratak, pentas, kursi, dan paket hajatan dengan harga transparan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="id" 
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF7F2] text-[#1C1917]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
