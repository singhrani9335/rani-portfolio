"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  item: Experience;
  index: number;
}

export default function ExperienceCard({
  item,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative"
    >
      {/* Timeline Icon */}
      <div
        className={`absolute top-0 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#0b1120] bg-gradient-to-br ${item.color} text-white shadow-[0_0_25px_rgba(34,211,238,0.35)]`}
        style={{ left: "-56px" }}
      >
        {item.icon}
      </div>

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">
        {/* Hover Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition duration-500 group-hover:opacity-10`}
        />

        {/* Header */}
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full bg-gradient-to-r ${item.color} px-4 py-1 text-xs font-semibold text-white`}
          >
            {item.type}
          </span>

          <span className="flex items-center gap-2 text-sm text-cyan-300">
            <Calendar size={15} />
            {item.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative mt-6 text-2xl font-bold text-white transition group-hover:text-cyan-400">
          {item.title}
        </h3>

        {/* Company */}
        <h4 className="mt-2 text-lg font-medium text-gray-300">
          {item.company}
        </h4>

        {/* Location */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
          <MapPin size={15} />
          {item.location}
        </div>

        {/* Description */}
        <p className="mt-6 leading-8 text-gray-400">
          {item.description}
        </p>

        {/* Bottom Accent */}
        <div
          className={`mt-8 h-1 w-20 rounded-full bg-gradient-to-r ${item.color}`}
        />
      </div>
    </motion.div>
  );
}