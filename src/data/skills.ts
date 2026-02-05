import type { IconName } from "../assets/icons";

export interface Skill {
  name: string;
  icon: IconName;
  tags: Tag[];
}

export const TAGS = [
  "frontend",
  "backend",
  "database",
  "mobile",
  "design",
  "workflow",
] as const;

export type Tag = (typeof TAGS)[number];

const SKILLS: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    icon: "Javascript",
    tags: ["frontend"],
  },
  {
    name: "TypeScript",
    icon: "Typescript",
    tags: ["frontend"],
  },
  {
    name: "React",
    icon: "React",
    tags: ["frontend"],
  },
  {
    name: "Tailwind CSS",
    icon: "Tailwind",
    tags: ["frontend"],
  },
  {
    name: "Bootstrap",
    icon: "Bootstrap",
    tags: ["frontend"],
  },

  // Backend
  {
    name: "Spring Boot",
    icon: "Spring",
    tags: ["backend"],
  },
  {
    name: ".NET / ASP.NET",
    icon: "Dotnet",
    tags: ["backend"],
  },
  {
    name: "Laravel",
    icon: "Laravel",
    tags: ["backend"],
  },

  // Databases
  {
    name: "MS SQL Server",
    icon: "Mssql",
    tags: ["database"],
  },
  {
    name: "MySQL",
    icon: "Mysql",
    tags: ["database"],
  },
  {
    name: "PostgreSQL",
    icon: "Postgresql",
    tags: ["database"],
  },
  // Mobile
  {
    name: "Kotlin",
    icon: "Kotlin",
    tags: ["mobile"],
  },
  {
    name: "Jetpack Compose",
    icon: "Compose",
    tags: ["mobile"],
  },

  // Tools / Workflow
  {
    name: "Git",
    icon: "Git",
    tags: ["workflow"],
  },
  {
    name: "Docker",
    icon: "Docker",
    tags: ["workflow"],
  },

  // design

  {
    name: "Figma",
    icon: "Figma",
    tags: ["design"],
  },
];

export default SKILLS;
