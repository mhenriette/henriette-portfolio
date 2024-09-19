import { projects } from "@/data/projects"
import Project from "../cards/Project"


export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto px-3">
      <h2 className="text-center font-bold text-3xl">
        A small Selection of the Recent{" "}
        <span className="text-secondary">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:grid-cols-3 w-full gap-10 max-w-6xl mt-10">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      {/* <button
        className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none mx-auto !block mt-12"
        // onClick={onClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 font-medium text-white backdrop-blur-3xl gap-2">
          labell
        </span>
      </button> */}
    </div>
  );
}
