"use client";
import { useState, useEffect } from "react";
import HeaderSection from "./HeaderSection";
import GrowthChart from "./GrowthChart";
import BenefitsList from "./BenefitsList";
import CTAButton from "./CTAButton";
import Compass from "../../features/Compas";

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
        })
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-5xl mx-auto">
      <HeaderSection />

      <div className="neon-border p-6 sm:p-8 rounded-lg bg-[var(--background)]/20 backdrop-blur-sm space-y-8">
        {/* 🧭 КОМПАС - контролируемый размер */}
        <div className="w-full flex justify-center py-8 sm:py-12 px-6 sm:px-8">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-64 sm:h-72 lg:h-80 relative z-0">
            <Compass />
          </div>
        </div>

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
            Наш подход —{" "}
            <span className="text-[var(--accent)] font-semibold bg-[var(--accent)]/10 px-3 py-1 rounded-xl inline-block">
              фокус на результат и ROI
            </span>. 
            Мы не просто пишем код: мы помогаем бизнесу расти и масштабироваться. 
            Хотите увидеть, как это работает? Ознакомьтесь с{" "}
            <span className="text-[var(--accent-light)] font-semibold hover:text-[var(--accent)] transition-all duration-300 cursor-pointer underline decoration-[var(--accent)]/50">
              кейсами в разделе «Портфолио»
            </span> 
            — там реальные проекты с измеримыми итогами.
          </p>
        </div>
      </div>

      <div className="pt-12 sm:pt-16">
        <CTAButton />
      </div>
    </div>
  );
}
