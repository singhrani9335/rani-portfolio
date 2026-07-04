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
    title: "E-Commerce UI",
    image: "/images/project3.png",
    description:
      "A modern e-commerce frontend with attractive product cards, responsive layouts, animations and an intuitive shopping experience.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
    github: "https://github.com/singhrani9335",
    live: "https://your-ecommerce.vercel.app",
    featured: false,
    category: "Frontend",
    year: "2025",
  },
];