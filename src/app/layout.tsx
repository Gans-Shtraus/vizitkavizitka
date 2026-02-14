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
  metadataBase: new URL("https://vizitkavizitka1.vercel.app/"),
  title: {
    default: "NeWeb — разработка сайтов и SEO‑оптимизация под ключ",
    template: "%s | NeWeb",
  },
  description:
    "Создаём современные сайты и лендинги с SEO‑оптимизацией. Полный цикл: от идеи до запуска и продвижения. Интеграции и IT‑решения для бизнеса.",
  keywords: [
    "веб‑разработка",
    "создание сайтов",
    "SEO",
    "лендинги под заказ",
    "NeWeb",
    "невеб",
    "сео оптимизация",
    "интеграции",
    "IT решения для бизнеса",
    "разработка веб‑сайтов",
  ],
  authors: [{ name: "NeWeb Company" }],
  creator: "NeWeb",

  openGraph: {
    title: "NeWeb — профессиональная веб‑разработка и SEO",
    description:
      "Создание сайтов, лендингов и веб‑приложений с SEO‑оптимизацией. IT‑решения для роста вашего бизнеса.",
    url: "https://vizitkavizitka1.vercel.app/",
    siteName: "NeWeb",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/NeWeb-og.png",
        width: 1200,
        height: 630,
        alt: "NeWeb — веб‑разработка и SEO под ключ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NeWeb — создание сайтов с SEO",
    description: "Профессиональные веб‑решения для вашего бизнеса",
    images: ["/images/NeWeb-twitter.png"],
  },

  alternates: {
    canonical: "https://vizitkavizitka1.vercel.app/",
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
