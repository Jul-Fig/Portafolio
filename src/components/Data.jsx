import React from "react";
import Social from "./Social";
import Gris from "../assets/Gris.png";
import "../index.css";

function Data() {
  return (
    <div className="flex place-content-center gap-4 h-[80vh] ">
      <aside className=" content-center">
        <Social />
      </aside>
      <main className="flex items-center bg-transparent content-center h-[80vh]">
        <figure className="h-[300px] w-[300px] bg-cover bg-center z-10">
          <img
            className="h-[300px] w-[300px] bg-cover bg-center bg-no-repeat shadow-customInset animate-borderAnimation "
            src={Gris}
            alt="Desarrollo FullStack"
          />
        </figure>
        <article className="flex-col content-center ml-4 sm:ml-8 md:ml-12 lg:ml-16">
          <section className="flex ">
            <p className="text-3xl font-medium ">¡HOLA!, Soy </p>
            <h2 className="text-[#f4f3fa] text-5xl font-bold pl-4">Julian</h2>
          </section>
          <section className="flex p-2 pl-0">
            <h1 className="text-3xl font-medium ">
              Programador
            </h1>
            <h1 className="text-[#f4f3fa] text-5xl font-bold pl-4">
              FullStack
            </h1>
          </section>
          <p className="text-lg font-medium text-center p-3">
            Aca escribre el texto descriptivo corto
          </p>
        </article>
      </main>
    </div>
  );
}

export default Data;
