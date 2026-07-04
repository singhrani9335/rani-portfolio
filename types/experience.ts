import { ReactNode } from "react";

export interface Experience {
  id: number;
  icon: ReactNode;
  title: string;
  company: string;
  year: string;
  description: string;

  // New Fields
  type: "Education" | "Experience" | "Learning";
  location: string;
  color: string;
}