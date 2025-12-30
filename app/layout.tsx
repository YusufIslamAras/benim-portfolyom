import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background"; // Yeni eklediğimiz arka plan

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Tarayıcı sekme bilgileri
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
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        {/* Hareketli arka plan efekti en altta kalacak şekilde eklendi */}
        <Background />
        
        {/* Navbar her zaman üstte kalacak */}
        <Navbar />
        
        {/* Sayfa içerikleri */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}