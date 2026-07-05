"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[140px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            My Journey
          </span>

          <h2 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Education{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-pink-500 bg-clip-text text-transparent">
              & Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My academic journey, practical development experience and
            continuous learning that help me build modern, responsive and
            high-quality web applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-sky-500 to-pink-500" />

          {/* Cards */}
          <div className="relative space-y-12 pl-20">
            {experience.map((item, index) => (
              <ExperienceCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-pink-500 bg-clip-text text-transparent">
              Driven by Learning & Innovation
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-400">
            I'm passionate about continuously expanding my knowledge through
            real-world projects, modern frontend technologies, and best
            development practices. My goal is to build high-quality,
            scalable, and engaging web experiences that make a lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}