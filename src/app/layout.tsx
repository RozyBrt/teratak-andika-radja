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
  metadataBase: new URL("https://teratak-andika-radja.vercel.app"),
  title: "Teratak Andika Raja: Katalog Sewa Tenda & Perlengkapan Acara",
  description: "Katalog sewa tenda teratak pesta, pentas panggung, kursi, dan perlengkapan hajatan terpercaya di Kota Subulussalam. Spesifikasi teruji, konstruksi kokoh, dan layanan profesional.",
  keywords: [
    "sewa teratak",
    "sewa tenda pesta",
    "katalog sewa tenda",
    "sewa pentas panggung",
    "sewa kursi futura",
    "teratak andika raja",
    "tenda hajatan subulussalam",
    "penyewaan tenda penanggalan"
  ],
  authors: [{ name: "Teratak Andika Raja" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Teratak Andika Raja: Katalog Sewa Tenda & Perlengkapan Acara",
    description: "Katalog sewa tenda teratak pesta, pentas panggung, kursi, dan perlengkapan hajatan di Kota Subulussalam.",
    url: "https://teratak-andika-radja.vercel.app",
    siteName: "Teratak Andika Raja",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 800,
        alt: "Logo Resmi Teratak Andika Raja Subulussalam",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Teratak Andika Raja: Katalog Sewa Tenda & Perlengkapan Acara",
    description: "Katalog sewa tenda teratak, pentas panggung, dan perlengkapan hajatan di Kota Subulussalam.",
    images: ["/og-image.png"],
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
