"use client";

import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");

  // Массив фраз для поочерёдного отображения
  const phrases = useMemo(
    () => ["Web‑решения", "SEO‑продвижение", "Решения для бизнеса"],
    [],
  ); // пустой массив зависимостей — создаётся один раз

  // Индекс текущей фразы
  const [phraseIndex, setPhraseIndex] = useState(0);
  // Позиция курсора в текущей фразе (для эффекта набора)
  const [charIndex, setCharIndex] = useState(0);
  // Флаг: идёт ли удаление текста
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        // Набираем текст по символу
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Удаляем текст по символу
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (charIndex === currentPhrase.length && !isDeleting) {
        // Закончили набор — ждём 1500 мс, затем начинаем удаление
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (charIndex === 0 && isDeleting) {
        // Закончили удаление — ждём 500 мс перед переходом к следующей фразе
        setTimeout(() => {
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setIsDeleting(false);
          setCharIndex(0); // сбрасываем позицию курсора
        }, 500);
      }
    }, 25); // Скорость набора/удаления (мс на символ)

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 relative overflow-hidden">
      {/* Фоновый эффект — приглушённый синий градиент */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,_rgba(59,130,246,0.1),_transparent_30%)]"></div>

      <div className="relative z-10">
        <section className="pt-32 pb-20 text-center px-6">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Цифровые решения для масштабирования бизнеса
          </h1>

          {/* Поисковая строка с бегущим текстом */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                value={displayedText}
                readOnly
                className="w-full px-6 py-4 pr-10 text-gray-200 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
              />
              {/* Иконка лупы (можно заменить на SVG) */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
            Создаем функциональные и производительные веб‑решения для бизнеса:
            сайты, лендинги и веб‑приложения. Помогаю закрывать задачи — от
            привлечения клиентов до автоматизации процессов.
          </p>

          <SmoothScroll
            href="#services"
            className="mt-10 inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors btn-primary"
          >
            Наши услуги
          </SmoothScroll>
        </section>

        <section id="services" className="py-30 px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Чем занимается компания
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        <section id="portfolio" className="py-20 px-6 bg-gray-800/30">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Наши продукты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                image={project.image}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
