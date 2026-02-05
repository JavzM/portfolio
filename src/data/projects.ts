import type { Skill } from "./skills";
import SKILLS from "./skills";

import projectMuniLight from "../assets/images/project_muni_light.webp";
import projectMuniDark from "../assets/images/project_muni_dark.webp";
import projectFormLight from "../assets/images/project_form_light.webp";
import projectFormDark from "../assets/images/project_form_dark.webp";
import projectNotebaseLight from "../assets/images/project_notebase_light.webp";
import projectNotebaseDark from "../assets/images/project_notebase_dark.webp";
import projectStrataLight from "../assets/images/project_strata_light.webp";
import projectStrataDark from "../assets/images/project_strata_dark.webp";

export interface Project {
  title: string;
  img: { light: ImageMetadata; dark: ImageMetadata };
  description: string;
  link?: string;
  github?: string;
  technologies: Skill[];
}

const findSkills = (names: string[]): Skill[] =>
  names.map((name) => {
    const skill = SKILLS.find((s) => s.name === name);
    if (!skill) {
      throw new Error(`Skill "${name}" not found in SKILLS array.`);
    }
    return skill;
  });

const PROJECTS: Project[] = [
  {
    title: "SINPE Payment Reporting System",
    img: {
      light: projectMuniLight,
      dark: projectMuniDark,
    },
    description:
      "A web-based reporting platform developed for the Municipality of Barva to centralize, analyze, and manage SINPE payment data. The system streamlines financial oversight by providing structured reports, filtering tools, and secure data handling for municipal operations.",
    technologies: findSkills([
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "MS SQL Server",
    ]),
  },
  {
    title: "SINPE Payment Reporting Form",
    img: {
      light: projectFormLight,
      dark: projectFormDark,
    },
    description:
      "A responsive web form designed to capture and validate SINPE payment information before ingestion into the reporting system. Focused on usability, accessibility, and data integrity, ensuring accurate and consistent financial submissions.",
    technologies: findSkills(["React", "TypeScript", "Tailwind CSS"]),
  },
  {
    title: "Notebase",
    img: {
      light: projectNotebaseLight,
      dark: projectNotebaseDark,
    },
    description:
      "A full-stack note management application built to explore modern mobile and backend architectures. Features include structured offline data storage, API-driven communication, and a native Android interface focused on performance and clean UI.",
    technologies: findSkills([
      "Kotlin",
      "Jetpack Compose",
      "Spring Boot",
      "PostgreSQL",
    ]),
  },
  {
    title: "Strata",
    img: {
      light: projectStrataLight,
      dark: projectStrataDark,
    },
    description:
      "Strata is a creative web tool that allows users to generate unique topographic wallpapers by adjusting visual parameters in real time. The project emphasizes polished UI, responsiveness, and reusable frontend components.",
    link: "https://strata-wallpaper.vercel.app",
    github: "https://github.com/JavzM/strata",
    technologies: findSkills(["React", "TypeScript", "Tailwind CSS"]),
  },
];

export default PROJECTS;
