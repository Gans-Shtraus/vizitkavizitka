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
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const link = document.querySelector(`a[href="${href}"]`);
    if (link) {
      link.addEventListener("click", handleClick);
    }

    return () => {
      if (link) link.removeEventListener("click", handleClick);
    };
  }, [href]);

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
