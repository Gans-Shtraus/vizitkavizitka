import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
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
  metadataBase: new URL("https://vizitkavizitka1.vercel.app/"), // замените на ваш реальный URL
  title: "Web Solution",
  description: "Разработка сайтов под ключ. SEO оптимизация. Web решения",
  openGraph: {
    title: "Web Solution",
    description: "Будущее уже здесь",
    images: "/images/og-image.png", // путь к превью для соцсетей
  },
  twitter: {
    card: "summary_large_image",
    title: "Моё портфолио",
    description: "Описание вашего проекта",
    images: "/images/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/* Изменено на "ru" для русскоязычного сайта */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
