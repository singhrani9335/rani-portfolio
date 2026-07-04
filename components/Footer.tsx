"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white border-t border-white/10">

      {/* Glow Background (Hero match) */}
      <div className="absolute -left-40 top-0 h-80 w-80 bg-violet-500/10 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 bg-pink-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold">
              Rani{" "}
              <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Singh
              </span>
            </h2>

            <p className="mt-4 text-gray-400 leading-7 text-sm">
              Frontend Developer building modern,
              responsive and high-performance web applications
              using React & Next.js.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-cyan-400 hover:translate-x-1 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>

            <div className="flex flex-wrap gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-violet-500/20 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              {/* WhatsApp FIXED */}
              <a
                href="https://wa.me/918869972125"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-green-500/20 hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            {/* CONTACT QUICK INFO */}
            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <p>📧 singhrani9335@gmail.com</p>
              <p>📞 +91 8869972125</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm">
            © {year} <span className="text-white">Rani Singh</span>. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 hover:scale-105 transition font-medium text-sm"
          >
            Back to Top ↑
          </button>

        </div>

      </div>
    </footer>
  );
}