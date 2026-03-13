import {
  IoLogoJavascript, IoLogoReact, IoLogoNodejs,
  IoLogoHtml5, IoLogoCss3, IoLogoGithub,
} from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoJava, BiLogoAws } from "react-icons/bi";
import { SiMysql, SiMongodb, SiDocker, SiSpring, SiAngular } from "react-icons/si";

export const SKILLS = [
  { Icon: IoLogoJavascript, label: "JavaScript" },
  { Icon: IoLogoReact,      label: "React"      },
  { Icon: IoLogoNodejs,     label: "Node.js"    },
  { Icon: SiAngular,        label: "Angular"    },
  { Icon: SiSpring,         label: "SpringBoot" },
  { Icon: BiLogoTailwindCss,label: "Tailwind"   },
  { Icon: BiLogoJava,       label: "Java"       },
  { Icon: BiLogoPostgresql, label: "PostgreSQL" },
  { Icon: SiMysql,          label: "MySQL"      },
  { Icon: SiMongodb,        label: "MongoDB"    },
  { Icon: SiDocker,         label: "Docker"     },
  { Icon: BiLogoAws,        label: "AWS"        },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/figueredo-julian",
  github:   "https://github.com/Jul-Fig",
};