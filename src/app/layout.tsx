import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#18181b",
};

export const metadata: Metadata = {
  title: "Teratak Andika Raja: Katalog Sewa Tenda & Perlengkapan Acara",
  description: "Katalog sewa tenda teratak pesta, pentas panggung, kursi, dan perlengkapan hajatan terpercaya. Spesifikasi teruji, konstruksi kokoh, dan tarif transparan.",
  keywords: [
    "sewa teratak",
    "sewa tenda pesta",
    "katalog sewa tenda",
    "sewa pentas panggung",
    "sewa kursi futura",
    "teratak andika raja",
    "tenda hajatan subulussalam"
  ],
  authors: [{ name: "Teratak Andika Raja" }],
  openGraph: {
    title: "Teratak Andika Raja: Katalog Sewa Tenda & Perlengkapan Acara",
    description: "Katalog sewa tenda teratak, pentas, kursi pesta, dan paket bundling dengan spesifikasi transparan.",
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
      className={`${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFA] text-[#18181B]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
