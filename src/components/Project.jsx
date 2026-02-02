import React from "react";
import Cards from "./Cards";
import Gris from "../assets/Gris.png";

function Project() {
  return (
    <div>
      <h2 className="text-[#f4f3fa] text-5xl flex justify-center font-extrabold p-7">
        Proyectos
      </h2>
      <main className="flex justify-evenly flex-wrap ">
        <Cards
          className=" "
          title="Pagina prueba"
          description="description de la pagina"
          img={Gris}
          link="https://es.react.dev/reference/react-dom/components/link"
        />
        <Cards
          className=" "
          title="Pagina prueba"
          description="description de la pagina"
          img={Gris}
          link="https://es.react.dev/reference/react-dom/components/link"
        />
        <Cards
          className=" "
          title="Pagina prueba"
          description="description de la pagina"
          img={Gris}
          link="https://es.react.dev/reference/react-dom/components/
link"
        />
      </main>
    </div>
  );
}

export default Project;
