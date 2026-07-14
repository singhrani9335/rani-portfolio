import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/images/project1.png",
    description:
      "A modern and responsive developer portfolio built with Next.js, TypeScript and Tailwind CSS featuring smooth animations and an elegant user experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/singhrani9335",
    live: "https://my-portfolio-six-tau-10.vercel.app",
    featured: true,
    category: "Portfolio",
    year: "2026",
  },

  {
    id: 2,
    title: "Admin Dashboard",
    image: "/images/project2.png",
    description:
      "A professional admin dashboard with authentication, analytics, responsive layout, dark mode and a clean modern interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
    ],
    github: "https://github.com/singhrani9335",
    live: "https://admindashboard-snowy-tau.vercel.app",
    featured: true,
    category: "Dashboard",
    year: "2026",
  },

  {
    id: 3,
    title: "GoEscapio - Travel Website",
    image: "/images/goescapio.png",
    description:
      "A modern and responsive travel website built with Next.js, React, TypeScript, and Tailwind CSS. It features destination exploration, holiday packages, dynamic routes, reusable components, and a clean user experience.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/singhrani9335/goescapio",
    live: "https://goescapio-aum3.vercel.app",
    featured: true,
    category: "Travel Website",
    year: "2026",
  },
];