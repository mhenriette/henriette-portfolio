
import SkillsCard from "../cards/SkillsCard";
import { skillCategories } from "@/data/skillCategories";

export default function TechSkills() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-start mb-12 text-white">
          Technical Proficiencies
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <SkillsCard key={category.name} stack={category} index={categoryIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
