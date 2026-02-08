"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О себе" },
    { href: "/services", label: "Услуги" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed w-full bg-black/40 backdrop-blur-md z-100 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold neon-text">
          MyPortfolio
        </Link>

        {/* Десктоп-меню */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm uppercase tracking-wider
                ${pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Мобильное меню */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Мобильное выпадающее меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md fixed inset-0 pt-20">
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-white hover:text-neon-blue"
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
