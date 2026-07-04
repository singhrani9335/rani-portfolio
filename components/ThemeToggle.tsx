"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const currentIcon = () => {
    if (theme === "dark") return <Sun size={18} />;
    if (theme === "light") return <Moon size={18} />;
    return <Monitor size={18} />;
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Toggle Button */}
      <button
        aria-label="Theme Toggle"
        onClick={() => setOpen(!open)}
        className="
          flex h-10 w-10 items-center justify-center
          rounded-full border border-gray-200
          bg-white/10 backdrop-blur-xl
          text-gray-900 dark:text-white
          transition-all duration-300
          hover:scale-110 hover:border-cyan-400 hover:text-cyan-400
        "
      >
        {currentIcon()}
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute right-0 mt-3 w-44 overflow-hidden
          rounded-2xl border border-gray-200 dark:border-white/10
          bg-white/95 dark:bg-[#111827]/95
          backdrop-blur-2xl shadow-2xl
          transition-all duration-300
          ${
            open
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }
        `}
      >
        {/* Light */}
        <button
          onClick={() => {
            setTheme("light");
            setOpen(false);
          }}
          className="
            flex w-full items-center gap-3 px-4 py-3
            text-gray-700 dark:text-gray-300
            transition hover:bg-black/5 dark:hover:bg-white/5
            hover:text-yellow-500
          "
        >
          <Sun size={18} />
          Light
        </button>

        {/* Dark */}
        <button
          onClick={() => {
            setTheme("dark");
            setOpen(false);
          }}
          className="
            flex w-full items-center gap-3 px-4 py-3
            text-gray-700 dark:text-gray-300
            transition hover:bg-black/5 dark:hover:bg-white/5
            hover:text-cyan-400
          "
        >
          <Moon size={18} />
          Dark
        </button>

        {/* System */}
        <button
          onClick={() => {
            setTheme("system");
            setOpen(false);
          }}
          className="
            flex w-full items-center gap-3 px-4 py-3
            text-gray-700 dark:text-gray-300
            transition hover:bg-black/5 dark:hover:bg-white/5
            hover:text-violet-400
          "
        >
          <Monitor size={18} />
          System
        </button>
      </div>
    </div>
  );
}