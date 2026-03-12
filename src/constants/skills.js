import {
  IoLogoJavascript, IoLogoReact, IoLogoNodejs,
  IoLogoHtml5, IoLogoCss3, IoLogoGithub,
} from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoJava } from "react-icons/bi";
import { SiMysql, SiMongodb, SiDocker } from "react-icons/si";

export const SKILLS = [
  { Icon: IoLogoJavascript, label: "JavaScript" },
  { Icon: IoLogoReact,      label: "React"      },
  { Icon: IoLogoNodejs,     label: "Node.js"    },
  { Icon: IoLogoHtml5,      label: "HTML5"      },
  { Icon: IoLogoCss3,       label: "CSS3"       },
  { Icon: BiLogoTailwindCss,label: "Tailwind"   },
  { Icon: BiLogoJava,       label: "Java"       },
  { Icon: BiLogoPostgresql, label: "PostgreSQL" },
  { Icon: SiMysql,          label: "MySQL"      },
  { Icon: SiMongodb,        label: "MongoDB"    },
  { Icon: SiDocker,         label: "Docker"     },
  { Icon: IoLogoGithub,     label: "GitHub"     },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/figueredo-julian",
  github:   "https://github.com/Jul-Fig",
};