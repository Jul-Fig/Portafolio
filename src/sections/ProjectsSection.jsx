import React from "react";
import Cards from "../components/ui/Cards";
import { PROJECTS } from "../constants/projects";

const ProjectsSection = () => (
  <section id="proyectos" className="py-16 px-6 sm:px-10">
    <h2
      className="text-4xl sm:text-5xl flex justify-center font-extrabold p-7"
      style={{ color: "#f4f3fa", fontFamily: "'Syne', sans-serif" }}
    >
      Proyectos
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
      {PROJECTS.map((project) => (
        <Cards key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;