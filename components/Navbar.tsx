"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navLinks.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Gradient Line */}
      <div className="fixed top-0 left-0 z-[60] h-[3px] w-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400" />

      <header
        ref={navbarRef}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-[#050816]/80 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 shadow-xl"
            : "bg-white/60 dark:bg-[#050816]/60 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-400 blur-xl opacity-40 transition duration-500 group-hover:opacity-80" />

              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-400 font-bold text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                RS
              </div>
            </div>

            <div className="flex flex-col leading-tight text-left">
              <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                Rani{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  Singh
                </span>
              </span>

              <span className="text-[10px] tracking-[0.35em] text-gray-500 transition group-hover:text-cyan-400 dark:text-gray-400">
                FRONTEND DEVELOPER
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-sm font-medium transition-all duration-300"
              >
                <span
                  className={`transition-colors duration-300 ${
                    active === item.href
                      ? "text-cyan-400"
                      : "text-gray-700 dark:text-gray-300 group-hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 transition-all duration-300 ${
                    active === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}

            {/* Theme Toggle */}
            <div
              className="
                ml-3
                rounded-full
                border
                border-gray-200
                bg-white/60
                p-2
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-cyan-500/20
                dark:border-white/10
                dark:bg-white/5
              "
            >
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-xl
              p-2
              text-gray-900
              transition-all
              duration-300
              hover:bg-gray-100
              hover:text-cyan-500
              dark:text-white
              dark:hover:bg-white/10
              md:hidden
            "
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
    border-t
    border-gray-200
    bg-white/95
    px-6
    py-6
    backdrop-blur-2xl
    dark:border-white/10
    dark:bg-[#050816]/95
  "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active === item.href
                        ? "bg-cyan-500/10 text-cyan-500"
                        : "text-gray-700 hover:bg-gray-100 hover:text-cyan-500 dark:text-gray-300 dark:hover:bg-white/5"
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}

              {/* Theme Toggle */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-white/10 dark:bg-white/5">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Theme
                </span>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
