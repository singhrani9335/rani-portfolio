"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={450}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
            <Star size={14} fill="white" />
            Featured
          </div>
        )}

        {/* Category */}
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs text-white backdrop-blur-xl">
          {project.category}
        </div>

        {/* Year */}
        <div className="absolute bottom-4 left-4 rounded-full border border-cyan-400/20 bg-cyan-500/20 px-4 py-1 text-xs font-medium text-cyan-300">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white transition ${
              project.github === "#"
                ? "cursor-not-allowed border border-white/10 bg-white/5 opacity-50 pointer-events-none"
                : "border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-cyan-500"
            }`}
          >
            <FaGithub size={18} />
            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white transition ${
              project.live === "#"
                ? "cursor-not-allowed bg-gray-600 opacity-50 pointer-events-none"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105"
            }`}
          >
            <ExternalLink size={18} />
            Live
          </a>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
