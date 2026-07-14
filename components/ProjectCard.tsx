"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
      whileHover={{ y: -10 }}
      className="
        group relative overflow-hidden rounded-3xl 
        border border-white/10 
        bg-white/5 
        backdrop-blur-xl 
        transition-all duration-500
        hover:border-cyan-400/60
        hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 
          rounded-3xl 
          bg-gradient-to-br 
          from-cyan-500/5 
          via-transparent 
          to-pink-500/5 
          opacity-0 
          transition duration-500 
          group-hover:opacity-100
        "
      />

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#0b1120]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-contain 
            p-3 
            transition 
            duration-700 
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full 
                border 
                border-cyan-400/20 
                bg-cyan-500/10 
                px-4 
                py-1 
                text-xs 
                font-medium 
                text-cyan-300
                transition
                hover:bg-cyan-500
                hover:text-white
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {/* Github */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Github repository"
            className="
              flex flex-1 
              items-center 
              justify-center 
              gap-2 
              rounded-xl 
              border 
              border-white/10 
              bg-white/5 
              px-5 
              py-3 
              font-medium 
              text-white
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500
            "
          >
            <FaGithub size={18} />
            Code
          </a>

          {/* Live */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open live project"
            className="
              flex flex-1 
              items-center 
              justify-center 
              gap-2 
              rounded-xl
              bg-gradient-to-r 
              from-cyan-500 
              to-blue-500
              px-5 
              py-3 
              font-medium 
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <ExternalLink size={18} />
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}
