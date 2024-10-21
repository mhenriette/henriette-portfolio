import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  proficiency: string;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};