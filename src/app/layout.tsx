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
  title: "Моё портфолио | Веб‑разработчик",
  description:
    "Создаю сайты, лендинги и веб‑решения с неоновым дизайном и плавными анимациями.",
  applicationName: "MyPortfolio",
  keywords: [
    "веб‑разработка",
    "Next.js",
    "React",
    "лендинги",
    "сайты под ключ",
  ],
  openGraph: {
    title: "Моё портфолио",
    description: "Портфолио веб‑разработчика: проекты, услуги, контакты.",
    images: "/images/og-image.jpg", // Укажите путь к превью
  },
  twitter: {
    card: "summary_large_image",
    title: "Моё портфолио",
    description: "Портфолио веб‑разработчика: проекты, услуги, контакты.",
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
