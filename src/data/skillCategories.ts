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
  SiOpenai,
  SiEthereum,
  SiWeb3Dotjs,
  SiPython,
  SiSwift, 
  SiCypress,
} from "react-icons/si";
import Metamask from "@/components/icons/Metamask";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { GiMagicSwirl } from "react-icons/gi";

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
      { name: "Python", icon: SiPython, proficiency: "Proficient" },
      { name: "Swift", icon:SiSwift, proficiency: "Learning"}
    ],
  },
  {
    name: "Testing",
    skills: [{ name: "Jest", icon: SiJest, proficiency: "Proficient" }, { name: "Cypress", icon: SiCypress, proficiency: "Proficient" }],
  },
  {
    name: "Mobile",
    skills: [
      {
        name: "React Native",
        icon: TbBrandReactNative,
        proficiency: "Proficient",
      },
       {
        name: "SwiftUI",
        icon: SiSwift,
        proficiency: "Learning",
      },
    ],
  },
  {
    name: "AI",
    skills: [{ name: "OpenAI", icon: SiOpenai, proficiency: "Proficient" }],
  },
  {
    name: "Blockchain & Web3",
    skills: [
      { name: "MetaMask", icon: Metamask, proficiency: "Proficient" },
      { name: "Wagmi", icon: GiMagicSwirl, proficiency: "Proficient" },
      { name: "Ethereum", icon: SiEthereum, proficiency: "Learning" },
      { name: "Web3.js", icon: SiWeb3Dotjs, proficiency: "Learning" },
    ],
  },
];
