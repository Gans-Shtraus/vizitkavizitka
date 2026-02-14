"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Явно указываем тип ref как HTMLDivElement | null
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О компании" },
    { href: "#services", label: "Услуги" },
    { href: "/portfolio", label: "Наши клиенты" },
    { href: "/contacts", label: "Контакты" },
  ];

  // Блокировка скролла и управление фокусом
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("aria-hidden", "true");
      // Проверяем существование элемента перед фокусом
      if (menuRef.current) {
        menuRef.current.focus();
      }
    } else {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("aria-hidden");
    }
  }, [isMenuOpen]);

  // Закрытие меню при клике вне зоны или нажатии Esc
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-black/40 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-white"
          title="Главная страница NeWeb"
        >
          NeWeb
        </Link>

        {/* Десктоп-меню */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm uppercase tracking-wider
                ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Бургер-кнопка */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Открыть меню"
          className="md:hidden text-white p-2"
        >
          ☰
        </button>
      </div>

      {/* Мобильное меню (полноэкранное overlay) */}
      {isMenuOpen && (
        <div
          className={`
            fixed inset-0 bg-black/80 backdrop-blur-sm
            z-40 flex flex-col
            transition-opacity duration-300 ease-out
            ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          onClick={handleOverlayClick}
          onKeyDown={handleKeyPress}
          aria-modal="true"
          role="dialog"
          tabIndex={0} // Исправлено: tabIndex=0 для возможности фокуса
          ref={menuRef}
        >
          {/* Кнопка закрытия */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Закрыть меню"
              className="text-white text-2xl focus:outline-none"
            >
              ×
            </button>
          </div>

          {/* Пункты меню */}
          <nav
            className={`
              bg-gray-900
              flex-grow flex flex-col items-center justify-center
              space-y-8 text-2xl font-medium
              transition-transform duration-500 ease-in-out
              ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
