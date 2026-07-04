import { Skill } from "@/types/skill";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 size={48} className="text-orange-500" />,
    level: 98,
    color: "from-orange-500 to-yellow-400",
    description: "Semantic and accessible web structure.",
  },
  {
    id: 2,
    name: "CSS3",
    icon: <FaCss3Alt size={48} className="text-blue-500" />,
    level: 96,
    color: "from-blue-500 to-cyan-400",
    description: "Modern layouts, animations and responsive UI.",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs size={48} className="text-yellow-400" />,
    level: 94,
    color: "from-yellow-400 to-orange-400",
    description: "Interactive and dynamic web applications.",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript size={48} className="text-blue-600" />,
    level: 92,
    color: "from-blue-600 to-sky-400",
    description: "Type-safe and scalable application development.",
  },
  {
    id: 5,
    name: "React",
    icon: <FaReact size={48} className="text-cyan-400" />,
    level: 95,
    color: "from-cyan-400 to-blue-500",
    description: "Building modern component-based user interfaces.",
  },
  {
    id: 6,
    name: "Next.js",
    icon: <SiNextdotjs size={48} className="text-white" />,
    level: 93,
    color: "from-gray-200 to-white",
    description: "Fast, SEO-friendly and production-ready apps.",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={48} className="text-cyan-400" />,
    level: 97,
    color: "from-cyan-400 to-sky-500",
    description: "Rapid UI development with utility-first CSS.",
  },
  {
    id: 8,
    name: "Git",
    icon: <FaGitAlt size={48} className="text-orange-600" />,
    level: 89,
    color: "from-orange-600 to-red-500",
    description: "Version control and team collaboration.",
  },
  {
    id: 9,
    name: "GitHub",
    icon: <FaGithub size={48} className="text-white" />,
    level: 91,
    color: "from-gray-300 to-white",
    description: "Repository management and collaborative workflow.",
  },
  {
    id: 10,
    name: "Figma",
    icon: <SiFigma size={48} className="text-pink-500" />,
    level: 86,
    color: "from-pink-500 to-purple-500",
    description: "UI/UX design and interactive prototyping.",
  },
];