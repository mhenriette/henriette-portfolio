import { projects } from "@/data/projects"
import Project from "../cards/Project"
import AnimatedButton from "../cards/AnimatedButton";


export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto px-3 py-8 md:py-12 flex flex-col justify-center- items-center=">
      <h2 className="font-bold text-2xl md:text-3xl text-start">
        A small Selection of the Recent
        <span className="text-secondary"> Projects</span>
      </h2>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 w-full gap-10 max-w-6xl mt-10">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <AnimatedButton>Show more</AnimatedButton>
    </div>
  );
}
