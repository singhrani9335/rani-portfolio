import { ReactNode } from "react";

export interface Skill {
  id: number;
  name: string;
  icon: ReactNode;
  level: number;
  color: string;
  description: string;
}