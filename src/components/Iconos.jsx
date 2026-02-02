import React from "react";
import {
  IoHomeSharp, //inicio
  IoPersonSharp, //sobre mi
  IoNewspaper, //habilidade
} from "react-icons/io5";
import { FaFileCode } from "react-icons/fa"; //proyectos

const Iconos = () => {
  return (
    <IconContext.Provider
      value={{ style: { color: "#d0cfd2", fontSize: "40px" } }}
    >
      <div>
        <IoHomeSharp />
        <IoPersonSharp />
        <IoNewspaper />
        <FaFileCode />
        
        
      </div>
    </IconContext.Provider>
  );
};
export default Iconos;
