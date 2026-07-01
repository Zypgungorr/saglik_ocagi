import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Çekmeköy Efsun Aile Sağlığı Merkezi",
  description: "Çekmeköy Efsun Aile Sağlığı Merkezi Resmi Web Sitesi",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
        suppressHydrationWarning
      >
        <TopBar />
        <Header />
        <Navbar />
        <main className="flex-grow w-full min-w-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
