import React from "react";
import Social from "../components/ui/Social";
import { config } from "../config/env";
import Julian from "../assets/Julian_Developer.jpeg";

const HeroSection = () => (
  <section id="inicio" className="flex place-content-center gap-4 h-[80vh]">
    <aside className="content-center">
      <Social />
    </aside>

    <main className="flex items-center bg-transparent content-center h-[80vh]">
      <figure className="h-[400px] w-auto bg-cover bg-center z-10 flex-shrink-0">
        <img className="h-[400px] w-auto animate-borderAnimation" src={Julian} alt="Julian FullStack" /> 
        
      </figure>

      <article className="flex flex-col ml-4 sm:ml-8 md:ml-12 lg:ml-16">
        <section className="flex items-baseline">
          <p className="text-3xl font-medium">¡HOLA!, Soy </p>
          <h2 className="text-[#f4f3fa] text-5xl font-bold pl-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>Julian</h2>
        </section>

        <section className="flex items-baseline p-2 pl-0">
          <p className="text-3xl font-medium">Desarrollador</p>
          <h1 className="text-[#f4f3fa] text-5xl font-bold pl-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>FullStack</h1>
        </section>

        <p className="text-lg font-medium text-center p-3" style={{ color: "#c4b4d9" }}>
          Construyo experiencias digitales completas, del backend al frontend.
        </p>

        <div className="flex justify-center mt-4">
          <a href={config.site.cvPath} download aria-label="Descargar CV">
            <button className="px-6 py-3 rounded-full font-bold border-2 border-[#80639F] transition-all duration-200
              bg-gradient-to-r from-[#80639F] to-[#80639F] hover:to-[#39274b] text-[#f4f3fa] shadow-lg">
              Descargar CV
            </button>
          </a>
        </div>
      </article>
    </main>
  </section>
);

export default HeroSection;