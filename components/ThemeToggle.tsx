"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  if (!mounted) return null;

  const currentIcon = () => {
    switch (theme) {
      case "dark":
        return <Sun size={18} />;
      case "light":
        return <Moon size={18} />;
      default:
        return <Monitor size={18} />;
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        aria-label="Theme Toggle"
        onClick={() => setOpen(!open)}
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-110
        hover:border-cyan-400
        hover:text-cyan-400
        "
      >
        {currentIcon()}
      </button>

      <div
        className={`
        absolute
        right-0
        mt-3
        w-44
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#111827]/95
        backdrop-blur-2xl
        shadow-2xl
        transition-all
        duration-300
        ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }
        `}
      >
        <button
          onClick={() => {
            setTheme("light");
            setOpen(false);
          }}
          className="
          flex
          w-full
          items-center
          gap-3
          px-4
          py-3
          text-gray-300
          transition
          hover:bg-white/5
          hover:text-yellow-400
          "
        >
          <Sun size={18} />
          Light
        </button>

        <button
          onClick={() => {
            setTheme("dark");
            setOpen(false);
          }}
          className="
          flex
          w-full
          items-center
          gap-3
          px-4
          py-3
          text-gray-300
          transition
          hover:bg-white/5
          hover:text-cyan-400
          "
        >
          <Moon size={18} />
          Dark
        </button>

        <button
          onClick={() => {
            setTheme("system");
            setOpen(false);
          }}
          className="
          flex
          w-full
          items-center
          gap-3
          px-4
          py-3
          text-gray-300
          transition
          hover:bg-white/5
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