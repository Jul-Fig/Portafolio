// src/constants/projects.js
// Agrega aquí tus proyectos reales.
// - img:    importa la imagen desde assets o usa una URL
// - link:   URL de la demo en vivo
// - github: URL del repositorio (puedes omitirlo y no aparecerá el botón)

export const PROJECTS = [
  {
    id: 1,
    title: "TravelGo",
    description: "Sistema web full stack que conecta frontend y backend mediante APIs REST, implementando autenticación con JWT, manejo de base de datos relacional y lógica de negocio transaccional, construido con arquitectura en capas para soportar procesos reales, interacción eficiente entre servicios y experiencia de usuario.",
    img: "/assets/projects/travelgo.png",
    link: "https://github.com/Jul-Fig",
    github: "https://github.com/Jul-Fig/TravelGo",
    tags: ["React", "Spring Boot", "MySQL", "JWT", "MVC"],
  },
  {
    id: 2,
    title: "Acortador de Links ",
    description: "Desarrollé un acortador de URLs listo para producción, con énfasis en seguridad, validación de datos y manejo eficiente de solicitudes. Incluye redirección optimizada, control de abusos y pruebas de integración, reflejando un enfoque práctico hacia sistemas confiables y escalables." ,
    img: "/assets/projects/acortadorPortafolio.png",
    link: "https://github.com/Jul-Fig",
    github: "https://github.com/Jul-Fig/Acortador-de-links",
    tags: ["Express", "Angular", "MongoDB", "JWT", "Jest" ],
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción breve del proyecto y las tecnologías usadas. Explica qué problema resuelve.",
    img: "/assets/Gris.png",
    link: "https://github.com/Jul-Fig",
    github: "https://github.com/Jul-Fig",
    tags: ["PostgreSQL", "Docker"],
  },
];