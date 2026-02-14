"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import Image from "next/image";
// Данные проектов (замените URL на свои изображения)
const projects = [
  {
    id: 1,
    title: "Проект «Студия красоты»",
    images: [
      "/images/project1/1.png",
      //   "/images/project1/2.png",
      "/images/project1/3.png",
    ],
  },
  {
    id: 2,
    title: "Магазин «ТехноМир»",
    images: [
      "/images/project2/1.jpg",
      "/images/project2/2.jpg",
      "/images/project2/3.jpg",
      "/images/project2/4.jpg",
      "/images/project2/5.jpg",
    ],
  },
  {
    id: 3,
    title: "Сервис Авиасейлс",
    images: [
      "/images/project3/1.jpg",
      "/images/project3/2.jpg",
      "/images/project3/3.jpg",
      "/images/project3/4.jpg",
      "/images/project3/5.jpg",
    ],
  },
];

export default function ClientsGallery() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white mt-10">
          Наши клиенты
        </h2>

        {/* Табы для переключения между проектами */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all
                ${
                  selectedProject === index
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-700 text-gray-200 hover:bg-blue-500"
                }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Карточка проекта с каруселью */}
        <div className="relative">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
            centerMode={true}
            centerSlidePercentage={80}
            className="max-w-4xl mx-auto"
          >
            {projects[selectedProject].images.map((img, index) => (
              <div
                key={index}
                className={`cursor-zoom-in ${isZoomed ? "scale-150" : ""}`}
                onClick={() => setIsZoomed(true)}
                onDoubleClick={() => setIsZoomed(false)}
              >
                <Image
                  src={img}
                  alt={`Проект ${selectedProject + 1}, фото ${index + 1}`}
                  className="
    w-full
    h-100
    object-cover
    rounded-xl
    shadow-2xl
    shadow-blue-500/20
    transition-transform
    duration-300
  "
                  width={1200} // укажите реальную ширину изображения
                  height={800} // укажите реальную высоту изображения
                  loading="lazy" // ленивая загрузка для некритических изображений
                  placeholder="blur" // опционально: размытый прелоадер для улучшения UX
                  blurDataURL="/images/placeholder.jpg" // опционально: путь к маленькому размытому превью
                />
              </div>
            ))}
          </Carousel>

          {/* Кнопка сброса зума */}
          {isZoomed && (
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 bg-red-400 text-white px-3 py-1 rounded-full
                shadow-lg hover:bg-red-700 transition-all"
            >
              x
            </button>
          )}
        </div>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Пролистайте вправо/влево для просмотра всех фотографий проекта.
          Двойной клик — увеличить.
        </p>
      </div>
    </div>
  );
}
