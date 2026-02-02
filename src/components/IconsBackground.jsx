import React from "react";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoAngular,
  IoLogoGithub,
} from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { IconContext } from "react-icons"


function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
  
}

const LogosBackground = () => {
  return (
    <IconContext.Provider value={{style: { color: '#80639F',fontSize:'40px' }}}>
    <div>
      <IoLogoAngular />
      <IoLogoJavascript />
      <IoLogoCss3 />
      <IoLogoHtml5 />
      <IoLogoReact />
      <IoLogoGithub />
      <IoLogoNodejs />
      <BiLogoPostgresql />
      <BiLogoTailwindCss />
      <SiMysql />
      <TbFileTypeSql />

    </div>
     </IconContext.Provider>
  );
}

export default LogosBackground;
