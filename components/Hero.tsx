"use client";

import Image from "next/image";
import { Download, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Engineer",
  ];

  const [index, setIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      onMouseMove={(e) =>
        setMouse({
          x: e.clientX - window.innerWidth / 2,
          y: e.clientY - window.innerHeight / 2,
        })
      }
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-white
        text-gray-900
        transition-colors
        duration-500
        dark:bg-[#050816]
        dark:text-white
      "
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#050816] dark:via-[#0b1220] dark:to-[#050816]" />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-[0.05]
          dark:opacity-[0.08]
          [background-image:linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)]
          [background-size:45px_45px]
        "
      />

      {/* Mouse Spotlight */}
      <motion.div
        className="absolute -z-10 h-[550px] w-[550px] rounded-full bg-fuchsia-500/10 blur-[170px]"
        animate={{
          x: mouse.x * 0.05,
          y: mouse.y * 0.05,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
        style={{
          left: "50%",
          top: "50%",
        }}
      />

      {/* Ambient Lights */}
      <div className="absolute left-16 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[170px]" />
      <div className="absolute bottom-16 right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[180px]" />

      {/* Floating Background Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute left-[12%] top-[20%] text-4xl opacity-20"
      >
        ⚛️
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute right-[15%] top-[30%] text-2xl text-cyan-400/50"
      >
        ▲
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute bottom-[20%] left-[25%] text-pink-400/40"
      >
        ◆
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-500 dark:text-emerald-300">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
            </span>
            Available for Freelance
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Rani Singh
            </span>
          </h1>

          {/* Animated Role */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[index]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="mt-6 text-2xl font-semibold text-gray-600 dark:text-gray-300"
            >
              {roles[index]}
            </motion.h2>
          </AnimatePresence>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-9 text-gray-600 dark:text-gray-400"
          >
            I build
            <span className="font-semibold text-pink-500"> beautiful </span>
            and
            <span className="font-semibold text-violet-500">
              {" "}
              high-performance{" "}
            </span>
            web applications using
            <span className="font-semibold text-cyan-500">
              {" "}
              React, Next.js, TypeScript{" "}
            </span>
            and modern UI technologies. My focus is creating fast, responsive
            and user-friendly digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={19} />
                Download Resume
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/15 transition duration-700 group-hover:translate-x-full" />
            </a>

            {/* Contact */}
            <a
              href="mailto:singhrani9335@gmail.com"
              className="group flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-8 py-4 font-semibold text-gray-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              <Mail size={18} />
              Let's Connect
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-8 py-4 font-semibold text-gray-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Achievement Cards */}
          <div className="mt-12 grid grid-cols-3 gap-5">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 text-center shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-3xl font-extrabold text-pink-500">20+</h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Projects
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 text-center shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-3xl font-extrabold text-violet-500">1+</h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Years
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 text-center shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-3xl font-extrabold text-cyan-500">100%</h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Responsive
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 0.8,
            y: {
              repeat: Infinity,
              duration: 5,
            },
          }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Premium Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 opacity-30 blur-[150px]" />

            {/* Rotating Gradient Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="absolute -inset-6 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 p-[2px]"
            >
              <div className="h-full w-full rounded-full bg-white dark:bg-[#050816]" />
            </motion.div>

            {/* Second Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="absolute -inset-10 rounded-full border border-cyan-400/20"
            />

            {/* Profile */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative overflow-hidden rounded-full border border-gray-200 bg-white/70 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <Image
                src="/images/profile.png"
                alt="Rani Singh"
                width={430}
                height={430}
                priority
                className="rounded-full object-cover"
              />
            </motion.div>

            {/* React Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute left-0 top-8 rounded-full border border-cyan-400/20 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl dark:bg-[#0f172a]/80"
            >
              ⚛️ React
            </motion.div>

            {/* Next.js Badge */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: 1,
              }}
              className="absolute -right-6 top-28 rounded-full border border-violet-400/20 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl dark:bg-[#0f172a]/80"
            >
              ▲ Next.js
            </motion.div>

            {/* TypeScript Badge */}
            <motion.div
              animate={{
                x: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-6 bottom-24 rounded-full border border-pink-400/20 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl dark:bg-[#0f172a]/80"
            >
              💙 TypeScript
            </motion.div>

            {/* Tailwind Badge */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: 2,
              }}
              className="absolute right-0 bottom-6 rounded-full border border-cyan-400/20 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl dark:bg-[#0f172a]/80"
            >
              🎨 Tailwind CSS
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 dark:border-gray-500">
          <div className="mt-2 h-2 w-1 rounded-full bg-cyan-500 animate-bounce" />
        </div>

        <span className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Scroll Down
        </span>
      </motion.div>
      {/* Floating Particles (FULL FIX - SSR SAFE) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => {
          const seed = (i * 99991) % 100; // stable pseudo-random

          const left = seed % 100;
          const top = (seed * 7) % 100;

          const duration = 4 + (seed % 4);
          const delay = seed % 3;

          return (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/40"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -35, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white dark:from-[#050816] to-transparent" />
    </section>
  );
}
