import { projects } from "@/data/projects"
import Project from "../cards/Project"
import AnimatedButton from "../cards/AnimatedButton";
import { useState } from "react";


export default function Projects() {
  const [show, setShow] = useState(false)
  const handleShow = (value: boolean)=>{
    setShow(value)
  }
  return (
    <div
      className="w-full max-w-6xl mx-auto px-3 py-8 md:py-12 flex flex-col"
      id="projects"
    >
      <h2 className="font-bold text-2xl md:text-3xl text-start">
        A small Selection of the Recent
        <span className="text-secondary"> Projects</span>
      </h2>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 w-full gap-10 mt-10">
        {projects.slice(0, 3).map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.imageUrls}
            githubLink={project.githubLink}
            languages={project.languages}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <div
        className={`grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 w-full gap-10  mt-10 ${
          !show && "hidden"
        }`}
      >
        {projects.slice(3).map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.imageUrls}
            githubLink={project.githubLink}
            languages={project.languages}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <AnimatedButton onClick={() => handleShow(!show)}>
          {show ? "Show less" : "Show more"}
        </AnimatedButton>
      </div>
    </div>
  );
}
