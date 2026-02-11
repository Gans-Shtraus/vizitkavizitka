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
    setIsMounted(true); // Флаг: компонент загружен на клиенте

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
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <HeaderSection />

      <div className="neon-border p-6 sm:p-8 rounded-lg bg-opacity-10 bg-accent/5 space-y-6">
        {isMounted ? (
          <GrowthChart value={chartData[0]} />
        ) : (
          // Заполнитель на время гидратации
          <div className="mt-6 flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h3 className="text-sm font-medium text-accent-light mb-3 text-center">
                Развитие вашего бизнеса
              </h3>
              <div className="w-40 h-40 mx-auto bg-black/20 rounded-full" />
            </div>
          </div>
        )}

        <BenefitsList />

        <p className="leading-relaxed mt-6">
          Наш подход —{" "}
          <span className="text-accent font-semibold">фокус на результат и ROI</span>. Мы не просто
          пишем код: мы помогаем бизнесу расти и масштабироваться. Хотите увидеть, как это работает?
          Ознакомьтесь с{" "}
          <span className="text-accent-light font-semibold">кейсами в разделе «Портфолио»</span> — там
          реальные проекты с измеримыми итогами.
        </p>
      </div>

      <CTAButton />
    </div>
  );
}
