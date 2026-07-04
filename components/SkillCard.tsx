"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({
  skill,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]"
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition duration-500 group-hover:opacity-10`}
      />

      {/* Glow */}
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="relative flex justify-center"
      >
        {skill.icon}
      </motion.div>

      {/* Skill Name */}
      <h3 className="relative mt-6 text-center text-xl font-bold text-white">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="relative mt-3 text-center text-sm leading-6 text-gray-400">
        {skill.description}
      </p>

      {/* Progress */}
      <div className="relative mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-gray-300">
            Proficiency
          </span>

          <span className="font-semibold text-cyan-400">
            {skill.level}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: `${skill.level}%`,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.2,
            }}
            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          />
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="relative mt-8 flex justify-center">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-xs font-medium text-cyan-300">
          Frontend Development
        </span>
      </div>

      {/* Shine Effect */}
      <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[130%]" />
    </motion.div>
  );
}