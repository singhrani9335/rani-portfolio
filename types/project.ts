export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live: string;

  // New Fields
  featured: boolean;
  category: string;
  year: string;
}