import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SOCIAL_LINKS } from "../../constants/skills";

const iconStyle = { color: "#d0cfd2", fontSize: "2.5rem" };

const Social = () => (
  <div className="grid gap-y-4">
    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <IoLogoLinkedin style={iconStyle} className="hover:opacity-70 transition-opacity" />
    </a>
    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
      <FaGithub style={iconStyle} className="hover:opacity-70 transition-opacity" />
    </a>
  </div>
);

export default Social;