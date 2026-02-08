"use client";

import { useEffect } from "react";

type SmoothScrollProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function SmoothScroll({
  href,
  children,
  className,
}: SmoothScrollProps) {
  // Выносим обработчик в тело компонента
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Проверяем, что href — локальный якорь
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Элемент с селектором "${href}" не найден`);
    }
  };

  // useEffect оставляем только для отслеживания изменений href
  useEffect(() => {
    // Здесь можно добавить логику, если нужно реагировать на изменение href
  }, [href]);

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick} // Теперь handleClick доступен
    >
      {children}
    </a>
  );
}
