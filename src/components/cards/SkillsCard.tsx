import { motion } from "framer-motion";
import { SkillCategory } from "@/types/stacks";
export default function SkillsCard({stack, index}:{stack:SkillCategory, index:number}) {
    const {name, skills} = stack
    console.log(name, skills)
  return (
        <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary border border-[#ffffff33] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        skill.proficiency === "Proficient"
                          ? "bg-secondary"
                          : "bg-blue-500"
                      }`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">
                        {skill.name}
                      </p>
                      <p
                        className={`text-xs ${
                          skill.proficiency === "Proficient"
                            ? "text-secondary"
                            : "text-blue-400"
                        }`}
                      >
                        {skill.proficiency}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
  );
}
