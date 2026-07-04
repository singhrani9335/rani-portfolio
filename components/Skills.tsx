"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[140px]" />

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

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            My Expertise
          </span>

          <h2 className="mt-6 text-5xl font-extrabold md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I specialize in building modern, responsive and high-performance
            web applications using the latest frontend technologies and
            industry best practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-cyan-400">
              10+
            </h3>

            <p className="mt-2 text-gray-400">
              Technologies
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-pink-400">
              15+
            </h3>

            <p className="mt-2 text-gray-400">
              Projects Built
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-yellow-400">
              100%
            </h3>

            <p className="mt-2 text-gray-400">
              Passion & Dedication
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}