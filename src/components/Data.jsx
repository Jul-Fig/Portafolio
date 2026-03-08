import React from "react";
import Social from "./Social";
import Julian from "../assets/Julian_Developer.jpeg";
import "../index.css";


function Data() {
  return (
    <div className="flex place-content-center gap-4 h-[80vh] ">
      <aside className=" content-center">
        <Social />
      </aside>
      <main className="flex items-center bg-transparent content-center h-[80vh]">
        <figure className="h-[400px] w-[auto] bg-cover bg-center z-10">
          <img
            className="h-[400px] w-[auto] bg-cover bg-center bg-no-repeat shadow-customInset animate-borderAnimation "
            src={Julian}
            alt="Julian FullStack"
          />
        </figure>
        <article className="flex-col content-center ml-4 sm:ml-8 md:ml-12 lg:ml-16">
          <section className="flex ">
            <p className="text-3xl font-medium ">¡HOLA!, Soy </p>
            <h2 className="text-[#f4f3fa] text-5xl font-bold pl-4">Julian</h2>
          </section>
          <section className="flex p-2 pl-0">
            <h1 className="text-3xl font-medium ">
              Desarrollador
            </h1>
            <h1 className="text-[#f4f3fa] text-5xl font-bold pl-4">
              FullStack
            </h1>
          </section>
          <p className="text-lg font-medium text-center p-3">
            Aca escribre el texto descriptivo corto
          </p>
          <section className="flex justify-center">
          <a href="../assets/data/Julian_Developer_CV.pdf" download="Julian_Developer_CV.pdf"
          alt="CV Julian FullStack"
          >
            <button className="flex justify-around mt-4 bg-gradient-to-r from-[#80639F] to-[#80639F] hover:from-[#80639F] hover:to-[#39274b] hover:border-[#5f4977] text-[#f4f3fa] font-bold py-3 px-4 rounded-full shadow-lg border-2 border-[#80639F] ">
              Descargar CV
              </button>
          </a>
          </section>
        </article>      
      </main>     
    </div>  
  );
}

export default Data;
