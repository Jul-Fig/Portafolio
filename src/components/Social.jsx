import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Social() {
  return (
    <div className="grid gap-y-[1rem]">
      <a href="www.linkedin.com/in/figueredo-julian" className="" target="_blank">
        <IoLogoLinkedin style={{ color: "#d0cfd2", fontSize: "2.5rem" }}/>
      </a>

      <a href="https://github.com/Jul-Fig" className="" target="_blank">
        <FaGithub style={{ color: "#d0cfd2", fontSize: "2.5rem" }}/>
      </a>
    </div>
  )
}

export default Social;
