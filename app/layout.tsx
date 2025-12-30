import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Sitenin arama motorlarında ve tarayıcı sekmesinde görünecek bilgileri
export const metadata: Metadata = {
  title: "Yusuf İslam Aras | Full-Stack Developer",
  description: "Bursa'da yaşayan, .NET ve Next.js ile modern çözümler üreten yazılımcı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar'ı buraya ekledik, böylece her sayfada en üstte görünecek */}
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}