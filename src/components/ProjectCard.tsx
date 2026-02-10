"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Импортируем Image из Next.js
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  title,
  image,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="rounded-xl overflow-hidden bg-black/50 border border-white/20 hover:border-neon-blue transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800} // Укажите реальную ширину изображения
          height={600} // Укажите реальную высоту изображения
          priority
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <h3 className="text-xl font-bold text-neon-blue">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={link}
          className="inline-block text-neon-pink hover:underline font-medium"
          target="_blank" // Открывает ссылку в новой вкладке
          rel="noopener" // Безопасность для target="_blank"
        >
          Посмотреть проект →
        </Link>
      </div>
    </motion.div>
  );
}
