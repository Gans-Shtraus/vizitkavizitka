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
  title: "NeWeb Solution",
  description: "Разработка сайтов под ключ. SEO оптимизация. Web решения",

  // Основные теги для всех платформ
  applicationName: "Web Solution", // имя приложения/сайта
  keywords: ["веб‑разработка", "создание сайтов", "SEO", "веб‑решения"], // ключевые слова

  openGraph: {
    title: "Web Solution — Разработка сайтов под ключ",
    description:
      "Создаём современные сайты и оптимизируем их для поисковых систем. Полный цикл: от идеи до запуска.",
    url: "https://vizitkavizitka1.vercel.app/", // полный URL главной страницы
    siteName: "Web Solution",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/NeWeb.png", // путь к основному изображению
        width: 1200, // рекомендуемая ширина для превью
        height: 630, // рекомендуемая высота для превью
        alt: "Будущее уже здесь", // альтернативный текст для картинки
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Solution — Моё портфолио",
    description: "Примеры моих работ по разработке сайтов и SEO‑оптимизации.",
    site: "@your_twitter_handle", // ваш Twitter‑аккаунт (если есть)
    creator: "@your_twitter_creator", // аккаунт автора (если отличается)
    images: ["/images/twitter-image.png"], // путь к изображению для Twitter
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
