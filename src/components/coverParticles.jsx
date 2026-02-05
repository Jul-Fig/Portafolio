import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ReactDOMServer from "react-dom/server";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoAngular,
  IoLogoGithub,
} from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql, SiExpress, SiMongodb, SiDocker,BiLogoAws  } from "react-icons/si";

const CoverParticles = () => {
  const [init, setInit] = useState(false);

 
  const CONFIG = {
    
    numberOfParticles: 45,
    
    
    sizeMin: 20,
    sizeMax: 35,
    
   
    moveSpeed: 2,
    
    
    opacityMin: 0.1,
    opacityMax: 0.5,
    opacityAnimationSpeed: 0.6,
    
    
    links: {
      enable: true,
      color: "#80639F",
      distance: 150,
      opacity: 0.3,
      width: 1,
    },
    
    
    repulse: {
      enable: true,
      distance: 110,
      duration: 0.6,
      speed: 0.4,
      factor: 80,
      easing: "ease-out-quad",

    },
    
    // Efecto Grab (líneas se conectan al cursor)
    grab: {
      enable: true,
      distance: 180,
      opacity: 2,
    },
    
    // Efecto Push (agregar partículas al hacer clic)
    push: {
      enable: true,
      quantity: 1,
    },
    
    // Velocidad de rotación de las partículas
    rotationSpeed: 2,
    
    // FPS límite (menor = mejor rendimiento)
    fpsLimit: 120,
  };
  // ============================================================

  // Iconos de react-icons con sus colores
  const icons = [
    { Icon: IoLogoJavascript, color: "#80639F" },
    { Icon: IoLogoReact, color: "#80639F" },
    { Icon: IoLogoHtml5, color: "#80639F" },
    { Icon: IoLogoCss3, color: "#80639F" },
    { Icon: IoLogoNodejs, color: "#80639F" },
    { Icon: IoLogoAngular, color: "#80639F" },
    { Icon: IoLogoGithub, color: "#80639F" },
    { Icon: BiLogoPostgresql, color: "#80639F" },
    { Icon: BiLogoTailwindCss, color: "#80639F" },
    { Icon: SiMysql, color: "#80639F" },
    { Icon: BiLogoJava, color: "#80639F" },
    { Icon: SiExpress, color: "#80639F" },
    { Icon: SiMongodb, color: "#80639F" },
    { Icon: BiLogoSpringBoot, color: "#80639F" },
    { Icon: SiDocker, color: "#80639F" },
    { Icon: BiLogoAws, color: "#80639F" },
  ];

  // Convertir react-icons a SVG strings para tsparticles
  const iconImages = icons.map(({ Icon, color }) => {
    const iconElement = <Icon style={{ color }} />;
    const svgString = ReactDOMServer.renderToStaticMarkup(iconElement);
    const base64 = btoa(svgString);
    return {
      src: `data:image/svg+xml;base64,${base64}`,
      width: 32,
      height: 32,
    };
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  // Configurar modos de interacción
  const interactionModes = {};
  
  if (CONFIG.repulse.enable) {
    interactionModes.repulse = {
      distance: CONFIG.repulse.distance,
      duration: CONFIG.repulse.duration,
      speed: CONFIG.repulse.speed,
    };
  }
  
  if (CONFIG.grab.enable) {
    interactionModes.grab = {
      distance: CONFIG.grab.distance,
      links: {
        opacity: CONFIG.grab.opacity,
      },
    };
  }
  
  if (CONFIG.push.enable) {
    interactionModes.push = {
      quantity: CONFIG.push.quantity,
    };
  }

  
  const hoverModes = [];
  if (CONFIG.repulse.enable) hoverModes.push("repulse");
  if (CONFIG.grab.enable) hoverModes.push("grab");

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fpsLimit: CONFIG.fpsLimit,
          interactivity: {
            events: {
              onClick: {
                enable: CONFIG.push.enable,
                mode: "push",
              },
              onHover: {
                enable: CONFIG.repulse.enable || CONFIG.grab.enable,
                mode: hoverModes,
              },
            },
            modes: interactionModes,
          },
          particles: {
            color: {
              value: "#80639F",
            },
            links: {
              color: CONFIG.links.color,
              distance: CONFIG.links.distance,
              enable: CONFIG.links.enable,
              opacity: CONFIG.links.opacity,
              width: CONFIG.links.width,
            },
            move: {
              direction: "none",
              enable: true,
              speed: CONFIG.moveSpeed, 
              smooth: true,            
              random: false,           
              straight: false,
              outModes: {
                default: "out",        
              },
              random: true,
              speed: CONFIG.moveSpeed,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: CONFIG.numberOfParticles,
            },
            opacity: {
              value: {
                min: CONFIG.opacityMin,
                max: CONFIG.opacityMax,
              },
              random: true,
              animation: {
                enable: true,
                speed: CONFIG.opacityAnimationSpeed,
                minimumValue: CONFIG.opacityMin,
              },
            },
            shape: {
              type: "image",
              options: {
                image: iconImages,
              },
            },
            size: {
              value: { 
                min: CONFIG.sizeMin, 
                max: CONFIG.sizeMax 
              },
              random: true,
            },
            rotate: {
              value: 0,
              random: true,
              animation: {
                enable: true,
                speed: CONFIG.rotationSpeed,
              },
            },
          },
          detectRetina: true,
          background: {
            color: "transparent",
          },
        }}
      />
    )
  );
};

export default CoverParticles;