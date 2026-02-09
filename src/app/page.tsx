"use client";

import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Фоновый неоновый эффект */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,_rgba(110,70,240,0.2),_transparent_30%)]"></div>

      <div className="relative z-10">
        <section className="pt-32 pb-20 text-center px-6">
          <h1 className="text-4xl font-bold mb-6 neon-text">
            Привет! Я — веб-разработчик
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Создаю современные сайты и лендинги, которые привлекают клиентов и
            работают на результат.
          </p>
          <SmoothScroll
            href="#services"
            className="mt-10 inline-block px-8 py-4 bg-neon-blue/30 text-white rounded-full hover:bg-neon-blue/50 transition-colors"
          >
            Мои услуги
          </SmoothScroll>
        </section>

        <section id="services" className="py-30 px-6">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">
            Что я делаю
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

        <section id="portfolio" className="py-20 px-6 bg-black/30">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">
            Портфолио
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
