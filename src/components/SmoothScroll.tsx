"use client";

import { useEffect, useRef, RefObject } from "react";

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
  // Используем ref для прямой ссылки на элемент
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      e.preventDefault();

      // Приводим тип события к MouseEvent, если нужны его свойства
      const mouseEvent = e as MouseEvent;

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const link = linkRef.current;
    if (link) {
      link.addEventListener("click", handleClick);
    }

    return () => {
      if (link) {
        link.removeEventListener("click", handleClick);
      }
    };
  }, [href]);

  return (
    <a
      ref={linkRef}
      href={href}
      className={className}
      // Дополнительно: предотвращаем стандартное поведение через prop
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  );
}
