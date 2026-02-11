import { useMemo } from "react";

interface GrowthChartProps {
  value: number;
}

export default function GrowthChart({ value }: GrowthChartProps) {
  const pointX = 50 + 40 * Math.sin((value / 100) * Math.PI);
  const pointY = 50 - 40 * Math.cos((value / 100) * Math.PI);

  const pathData = `
    M 50 10
    A 40 40 0 0 1 ${pointX} ${pointY}
    L 50 50 Z
  `;

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <h3 className="text-sm font-medium text-accent-light mb-3 text-center">
          Развитие вашего бизнеса
        </h3>
        <svg viewBox="0 0 100 100" className="w-40 h-40 mx-auto">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="10"
          />
          <path
            d={pathData}
            fill="var(--accent)"
            className="transition-all duration-1000 ease-out"
          >
            {/* Исправленный <title>: единая строка */}
            <title>{`${Math.round(value)}% Прирост покупателей`}</title>
          </path>
        </svg>
        <p className="text-center text-xs text-accent-light mt-2 tracking-tight">
          {Math.round(value)}% Прирост покупателей
        </p>
      </div>
    </div>
  );
}
