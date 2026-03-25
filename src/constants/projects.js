import travelGo from "../../public/assets/projects/travelgoPortafolio.png"
import acortador from "../../public/assets/projects/acortadorPortafolio.png"

export const PROJECTS = [
  {
    id: 1,
    title: "TravelGo",
    description: "Sistema web full stack que conecta frontend y backend mediante APIs REST, implementando autenticación con JWT, manejo de base de datos relacional y lógica de negocio transaccional, construido con arquitectura en capas para soportar procesos reales, interacción eficiente entre servicios y experiencia de usuario.",
    img: {src: travelGo, alt: "TravelGo"},
    link: "https://github.com/Jul-Fig",
    github: "https://github.com/Jul-Fig/TravelGo",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
  },
  {
    id: 2,
    title: "Acortador de Links ",
    description: "Desarrollé un acortador de URLs listo para producción, con énfasis en seguridad, validación de datos y manejo eficiente de solicitudes. Incluye redirección optimizada, control de abusos y pruebas de integración, reflejando un enfoque práctico hacia sistemas confiables y escalables." ,
    img: {src: acortador, alt: "Acortador de Links"},
    link: "https://acortador-de-links-jul-fig.netlify.app",
    github: "https://github.com/Jul-Fig/Acortador-de-links",
    tags: ["Express", "Angular", "MongoDB", "Jest"],
  },

];