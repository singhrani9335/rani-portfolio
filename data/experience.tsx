import { Experience } from "@/types/experience";

import {
  GraduationCap,
  Briefcase,
  BookOpen,
} from "lucide-react";

export const experience: Experience[] = [
  {
    id: 1,
    icon: <GraduationCap size={24} />,
    title: "Bachelor of Computer Applications (BCA)",
    company: "Indira Gandhi National Open University (IGNOU)",
    year: "2023 - Present",
    description:
      "Currently pursuing a Bachelor of Computer Applications while strengthening my skills in frontend development, programming fundamentals, and modern web technologies through academic studies and practical projects.",
    type: "Education",
    location: "Delhi, India",
    color: "from-cyan-500 to-blue-500",
  },

  {
    id: 2,
    icon: <Briefcase size={24} />,
    title: "Frontend Developer",
    company: "Personal Projects",
    year: "2025 - Present",
    description:
      "Building responsive, modern and user-friendly web applications using Next.js, React, TypeScript, Tailwind CSS and Framer Motion while focusing on clean code and excellent user experience.",
    type: "Experience",
    location: "Remote",
    color: "from-pink-500 to-purple-500",
  },

  {
    id: 3,
    icon: <BookOpen size={24} />,
    title: "Continuous Learning",
    company: "Self Learning",
    year: "2025 - Present",
    description:
      "Continuously learning advanced frontend concepts, UI/UX design principles, performance optimization, animations and real-world project development through online resources and hands-on practice.",
    type: "Learning",
    location: "Online",
    color: "from-emerald-500 to-cyan-500",
  },
];