import React from "react";
import Cards from "../components/ui/Cards";
import { PROJECTS } from "../constants/projects";

const ProjectsSection = () => (
  <section id="proyectos" className="py-16">
    <h2 className="text-[#f4f3fa] text-5xl flex justify-center font-extrabold p-7"
      style={{ fontFamily: "'Syne', sans-serif" }}>
      Proyectos
    </h2>
    <div className="flex justify-evenly flex-wrap gap-8 px-8">
      {PROJECTS.map((project) => (
        <Cards key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;