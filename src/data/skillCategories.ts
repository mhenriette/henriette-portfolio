
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJest,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: SiReact, proficiency: "Proficient" },
      { name: "Next.js", icon: SiNextdotjs, proficiency: "Proficient" },
      { name: "Redux", icon: SiRedux, proficiency: "Proficient" },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: "Proficient" },
      { name: "Figma", icon: SiFigma, proficiency: "Proficient" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: "Proficient" },
      { name: "Express", icon: SiExpress, proficiency: "Proficient" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "Proficient" },
      { name: "TypeORM", icon: DiMysql, proficiency: "Proficient" },
      { name: "Prisma", icon: SiPrisma, proficiency: "Proficient" },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, proficiency: "Proficient" },
      { name: "JavaScript", icon: SiJavascript, proficiency: "Proficient" },
    ],
  },
  {
    name: "Testing",
    skills: [{ name: "Jest", icon: SiJest, proficiency: "Proficient" }],
  },
  {
    name: "Mobile",
    skills: [
      {
        name: "React Native",
        icon: TbBrandReactNative,
        proficiency: "Learning",
      },
    ],
  },
];