"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden text-white bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#050816]" />
      <div className="absolute top-20 left-10 h-72 w-72 bg-violet-500/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-cyan-500/10 blur-[160px] rounded-full" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 blur-[180px] rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            <Sparkles size={16} />
            About Me
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500">
              Frontend
            </span>{" "}
            Developer
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 leading-8">
            I am <span className="text-white font-semibold">Rani Singh</span>, a
            frontend developer focused on building modern, fast and scalable
            web applications using React & Next.js ecosystem.
          </p>

          <p className="mt-4 text-gray-400 leading-8">
            I enjoy crafting clean UI, smooth animations, and high-performance
            user experiences that feel premium and responsive.
          </p>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10
                hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]
                transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
              bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 
              font-semibold shadow-lg hover:scale-105 transition"
            >
              <Code2 size={18} />
              View My Work
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-6"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
            hover:border-pink-400/40 transition"
          >
            <Code2 className="text-pink-400" />
            <h3 className="mt-3 font-semibold">Frontend Development</h3>
            <p className="text-sm text-gray-400 mt-2">
              Building responsive and modern UI using React & Next.js
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
            hover:border-violet-400/40 transition"
          >
            <GraduationCap className="text-violet-400" />
            <h3 className="mt-3 font-semibold">Continuous Learning</h3>
            <p className="text-sm text-gray-400 mt-2">
              Always exploring new technologies and improving skills
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
            hover:border-cyan-400/40 transition"
          >
            <Briefcase className="text-cyan-400" />
            <h3 className="mt-3 font-semibold">Freelance Ready</h3>
            <p className="text-sm text-gray-400 mt-2">
              Available for freelance and real-world projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}