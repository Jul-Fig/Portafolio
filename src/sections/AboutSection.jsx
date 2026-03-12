import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants/skills";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const STATS = [
  { value: "+10", label: "Proyectos"  },
  { value: "2+",  label: "Años exp."  },
  { value: "100%",label: "Dedicación" },
];

const AboutSection = () => (
  <section
    id="sobre-mi"
    className="relative w-full px-6 sm:px-10 py-20 md:py-32 overflow-hidden"
  >
    {/* Glow fondo */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle,rgba(104,82,129,0.12) 0%,transparent 70%)" }}
    />

    <div className="relative max-w-5xl mx-auto">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
        style={{ color: "#b48fe0", fontFamily: "'DM Mono',monospace" }}
      >
        ── Sobre mí
      </motion.p>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-none mb-10"
        style={{ fontFamily: "'Syne',sans-serif", color: "#f0eaff", letterSpacing: "-0.03em" }}
      >
        Desarrollador<br />
        <span style={{ WebkitTextStroke: "1.5px #b48fe0", color: "transparent" }}>
          Full Stack
        </span>
      </motion.h2>

      {/* Grid contenido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

        {/* Bio + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            className="text-base sm:text-lg leading-relaxed mb-4"
            style={{ color: "#c4b4d9", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
          >
            Soy{" "}
            <strong style={{ color: "#f0eaff", fontWeight: 500 }}>Julian Figueredo</strong>,
            desarrollador Full Stack apasionado por construir experiencias digitales que combinan
            funcionalidad y buen diseño.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "#c4b4d9", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
          >
            Me enfoco en escribir código limpio y escalable, siempre buscando las mejores
            soluciones para cada problema.
          </p>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-8 mt-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p
                  className="text-2xl sm:text-3xl font-extrabold"
                  style={{ color: "#b48fe0", fontFamily: "'Syne',sans-serif" }}
                >
                  {value}
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-0.5"
                  style={{ color: "#7a6a8a", fontFamily: "'DM Mono',monospace" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
        >
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#7a6a8a", fontFamily: "'DM Mono',monospace" }}
          >
            Stack tecnológico
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
            {SKILLS.map(({ Icon, label }) => (
              <motion.div
                key={label} variants={itemVariants} whileHover={{ scale: 1.05, y: -3 }}
                className="flex flex-col items-center gap-1.5 py-3 sm:py-4 px-1 sm:px-2 rounded-xl cursor-default transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(180,143,224,0.12)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(180,143,224,0.08)"; e.currentTarget.style.borderColor = "rgba(180,143,224,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(180,143,224,0.12)"; }}
              >
                <Icon style={{ color: "#b48fe0", fontSize: "1.5rem" }} />
                <span
                  className="text-xs text-center leading-tight"
                  style={{ color: "#9b8aad", fontFamily: "'DM Mono',monospace" }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;