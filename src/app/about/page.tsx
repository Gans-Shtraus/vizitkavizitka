"use client";
import { useState, useEffect } from "react";
import HeaderSection from "./HeaderSection";
import GrowthChart from "./GrowthChart";
import BenefitsList from "./BenefitsList";
import CTAButton from "./CTAButton";

export default function About() {
  const [chartData, setChartData] = useState([84, 75, 125, 78, 92]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setChartData((prev) =>
        prev.map((val) => {
          const change = Math.random() * 16 - 8;
          return Math.max(40, Math.min(100, val + change));
        }),
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-5xl mx-auto">
      <HeaderSection />

      <div className="neon-border p-6 sm:p-8 rounded-lg bg-[var(--background)]/20 backdrop-blur-sm space-y-8">
        {/* 📊 Growth Chart */}
        <div className="w-full flex justify-center py-8 sm:py-12">
          {isMounted ? (
            <GrowthChart value={chartData[0]} />
          ) : (
            <div className="text-center max-w-md mx-auto">
              <h3 className="text-lg sm:text-xl font-medium text-[var(--accent-light)] mb-6 leading-tight">
                Развитие вашего бизнеса
              </h3>
              <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto bg-[var(--background)]/60 rounded-2xl border border-[var(--accent)]/40 shadow-xl" />
            </div>
          )}
        </div>

        <BenefitsList />

        {/* 📝 Текст */}
        <div className="max-w-2xl mx-auto text-center py-12 px-4">
          <p className="leading-relaxed text-base sm:text-lg text-[var(--foreground)]/90">
            Компания <strong>NeWeb</strong> специализируется на создании
            веб‑решений, которые приносят реальный результат. Наш подход —{" "}
            <strong>фокус на ROI</strong>: мы не просто пишем код, а помогаем
            бизнесу расти и масштабироваться через:
            <ul className="mt-4 list-disc list-inside text-[var(--foreground)]/90">
              <li>разработку сайтов и лендингов с конверсией</li>
              <li>SEO‑оптимизацию для роста трафика</li>
              <li>интеграцию с CRM и бизнес‑системами</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="pt-12 sm:pt-16">
        <CTAButton />
      </div>
    </div>
  );
}
