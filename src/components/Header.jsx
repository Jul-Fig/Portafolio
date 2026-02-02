import React from "react";
import {
  IoHomeSharp,
  IoNavigateOutline, //inicio
  IoPersonSharp, //sobre mi
  //IoNewspaper, //habilidade
} from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-10 lg:flex-row">
      <nav>
        <a
          href="#"
          className="text-[#ebe9f6] font-extrabold text-3xl tracking-wider flex items-center "
        >JULIAN
        </a>
      </nav>
      <nav className="space-x-6 font-medium px-6">
        <button
          href="#"
          className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-150 "
        >
          <IoHomeSharp style={{ color: "#ebe9f6" }}className="lg:hidden" />
          INICIO
        </button>

        <button
          href="#"
          className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-150 t"
        >
          <FaFileCode style={{ color: "#ebe9f6" }} className="lg:hidden" />
          PROYECTOS
        </button>

        <button
          href="#"
          className="text-webkit-center transition ease-out delay-50 hover:-translate-y-1 hover:scale-110 duration-150 "
        >
          <IoPersonSharp style={{ color: "#ebe9f6" }} className="lg:hidden" />
          SOBRE MI/HABILIDADES
        </button>
      </nav>
    </header>
  );
};
export default Header;
